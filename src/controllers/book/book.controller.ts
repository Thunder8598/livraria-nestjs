import {Body, Controller, Get, Header, Param, Post, Put, Query, Res} from '@nestjs/common';
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

    @Get()
    @Header('Access-Control-Allow-Origin', '*')
    public async getAll(@Query('page') page) {
        return await this.service.getAll(page ?? 1);
    }

    @Get(':id')
    @Header('Access-Control-Allow-Origin', '*')
    public async findOne(@Param('id') id) {
        return await this.service.findOne(id);
    }

    @Put(':id')
    @Header('Access-Control-Allow-Origin', '*')
    public async edit(@Param('id') id, @Body() bookDto: BookDto) {
        return await this.service.edit(id, bookDto);
    }
}
