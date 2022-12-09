import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {MikroORM} from "@mikro-orm/core";
import {EntityManager} from "@mikro-orm/mysql";
import Contracts from "../../contracts/Contracts";
import User from "../../entities/User";
import UserDto from "./dtos/user.dto";

@Injectable()
class UserService {
    constructor(private readonly orm: MikroORM, private readonly em: EntityManager) {
    }

    public async create(userDto: UserDto) {
        const user = new User(
            userDto.name,
            userDto.email,
            userDto.roles
        );

        await user.setPassword(userDto.password);
        await this.em.persistAndFlush(user);
    }

    public async getAll(page: number): Promise<Contracts.Pagination<User>> {
        page = page < 1 ? 1 : page;

        const offset = (page - 1) * User.LIMIT, total = await this.em.count(User);
        const books = await this.em.find(User, {}, {offset, limit: User.LIMIT});

        return {
            data: books,
            next: offset + User.LIMIT < total ? `/api/user?page=${++page}` : null
        };
    }

    public async findOne(id: number): Promise<User> {
        const book = await this.em.findOne(User, {id});

        if (!book)
            throw new HttpException("Not Found", HttpStatus.NOT_FOUND);

        return book;
    }

    public async edit(id: number, userDto: UserDto) {
        const user = await this.findOne(id);

        user.setName(userDto.name);
        user.setEmail(userDto.email);

        await user.setPassword(userDto.password);
        await this.em.persistAndFlush(user);
    }
}

export default UserService;