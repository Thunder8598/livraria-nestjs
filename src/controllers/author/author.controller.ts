import {Body, Controller, Get, Header, HttpException, HttpStatus, Param, Post, Query} from '@nestjs/common';
import CreateAuthorDto from "./dtos/create-author.dto";
import AuthorService from "./author.service";

@Controller('api/author')
export class AuthorController {
    constructor(private readonly service: AuthorService) {
    }

    @Post()
    @Header('Access-Control-Allow-Origin', '*')
    public async create(@Body() authorDto: CreateAuthorDto) {
        await this.service.create(authorDto);
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
}
