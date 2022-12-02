import {Controller, Post, Res} from '@nestjs/common';
import {Request} from 'express';

@Controller('book')
export class BookController {

    @Post()
    public create(@Res() request: Request) {

    }
}
