import {Body, Controller, Header, HttpException, HttpStatus, Post} from '@nestjs/common';
import CreateAuthorDto from "./dtos/create-author.dto";
import AuthorService from "./author.service";

@Controller('api/author')
export class AuthorController {
    constructor(private readonly service: AuthorService) {
    }

    @Post()
    @Header('Access-Control-Allow-Origin', '*')
    public async create(@Body() authorDto: CreateAuthorDto) {
        try {
            await this.service.create(authorDto);
        } catch (e) {
            console.error(e);

            throw new HttpException(e.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
