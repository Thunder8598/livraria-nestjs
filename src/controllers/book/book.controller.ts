import {Body, Controller, Header, Post, Res} from '@nestjs/common';
import {Request} from 'express';
import BookDto from "./dtos/book.dto";
import BookService from "./book.service";

@Controller('api/book')
export class BookController {
    constructor(private readonly service: BookService) {
    }

    @Post()
    @Header('Access-Control-Allow-Origin', '*')
    public async create(@Body() bookDto: BookDto) {
        await this.service.create(bookDto);
    }
}
