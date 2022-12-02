import {Injectable, Query} from "@nestjs/common";
import CreateAuthorDto from "./dtos/create-author.dto";
import Author from "../../entities/Author";
import {MikroORM} from "@mikro-orm/core";
import {EntityManager} from "@mikro-orm/mysql";
import Contracts from "../../contracts/Contracts";

@Injectable()
class AuthorService {
    constructor(private readonly orm: MikroORM, private readonly em: EntityManager) {
    }

    public async create(authorDto: CreateAuthorDto) {
        const author = new Author(authorDto.name, authorDto.birthday, authorDto.description);
        await this.em.persistAndFlush(author);
    }

    public async getAll(page: number): Promise<Contracts.Pagination<Author>> {
        page = page < 1 ? 1 : page;

        const offset = (page - 1) * Author.LIMIT, total = await this.em.count(Author);
        const authors = await this.em.find(Author, {}, {offset, limit: Author.LIMIT});

        return {
            data: authors,
            next: offset + Author.LIMIT < total ? `/api/author?page=${++page}` : null
        };
    }
}

export default AuthorService;