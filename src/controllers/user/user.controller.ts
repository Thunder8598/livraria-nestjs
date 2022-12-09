import {Body, Controller, Get, Header, Param, Post, Put, Query} from '@nestjs/common';
import UserService from "./user.service";
import UserDto from "./dtos/user.dto";

@Controller('api/user')
export class UserController {
    constructor(private service: UserService) {
    }

    @Post()
    @Header('Access-Control-Allow-Origin', '*')
    public async create(@Body() userDto: UserDto) {
        await this.service.create(userDto);
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
    public async edit(@Param('id') id, @Body() userDto: UserDto) {
        return await this.service.edit(id, userDto);
    }
}
