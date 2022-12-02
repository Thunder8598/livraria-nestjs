import {Injectable} from "@nestjs/common";
import CreateAuthorDto from "./dtos/create-author.dto";
import Author from "../../entities/Author";
import {MikroORM} from "@mikro-orm/core";
import {EntityManager} from "@mikro-orm/mysql";

@Injectable()
class AuthorService {
    constructor(private readonly orm: MikroORM, private readonly em: EntityManager) {}

    public async create(authorDto: CreateAuthorDto) {
        const author = new Author(authorDto.name, authorDto.birthday, authorDto.description);
        await this.em.persistAndFlush(author);
    }
}

export default AuthorService;