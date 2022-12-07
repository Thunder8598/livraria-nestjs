import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {MikroORM} from "@mikro-orm/core";
import {EntityManager} from "@mikro-orm/mysql";
import Book from "../../entities/Book";
import BookDto from "./dtos/book.dto";
import Author from "../../entities/Author";
import Contracts from "../../contracts/Contracts";

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

    public async getAll(page: number): Promise<Contracts.Pagination<Book>> {
        page = page < 1 ? 1 : page;

        const offset = (page - 1) * Book.LIMIT, total = await this.em.count(Book);
        const books = await this.em.find(Book, {}, {offset, limit: Book.LIMIT});

        return {
            data: books,
            next: offset + Book.LIMIT < total ? `/api/books?page=${++page}` : null
        };
    }

    public async findOne(id: number): Promise<Book> {
        const book = await this.em.findOne(Book, {id});

        if (!book)
            throw new HttpException("Not Found", HttpStatus.NOT_FOUND);

        return book;
    }

    public async edit(id: number, bookDto: BookDto) {
        const promises = [
            this.findOne(id),
            this.em.findOne(Author, {id: bookDto.author}),
        ];

        let [book, author] = await Promise.all(promises);

        book = (book as Book);

        book.setName(bookDto.name);
        book.setEdition(bookDto.edition);
        book.setPrice(bookDto.price);
        book.setPages(bookDto.pages);
        book.setActive(bookDto.active);
        book.setAuthor(author as Author);

        await this.em.persistAndFlush(book);
    }
}

export default BookService;