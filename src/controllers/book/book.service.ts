import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {MikroORM} from "@mikro-orm/core";
import {EntityManager} from "@mikro-orm/mysql";
import Book from "../../entities/Book";
import BookDto from "./dtos/book.dto";
import Author from "../../entities/Author";

@Injectable()
class BookService {
    constructor(private readonly orm: MikroORM, private readonly em: EntityManager) {
    }

    public async create(bookDto: BookDto) {
        const author = await this.em.findOne(Author, {id: bookDto.author});

        if (!author)
            throw new HttpException("Author not found", HttpStatus.NOT_FOUND);

        const book = new Book(
            bookDto.name,
            author,
            bookDto.edition,
            bookDto.pages,
            bookDto.price,
            bookDto.active
        );

        await this.em.persistAndFlush(book);
    }
}

export default BookService;