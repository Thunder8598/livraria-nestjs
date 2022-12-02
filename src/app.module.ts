import { Module } from '@nestjs/common';
import { BookController } from './controllers/book/book.controller';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import { AuthorController } from './controllers/author/author.controller';
import dbConfig from "./mikro-orm.config";
import AuthorService from "./controllers/author/author.service";
import BookService from "./controllers/book/book.service";

@Module({
  imports: [
      MikroOrmModule.forRoot(dbConfig)
  ],
  controllers: [BookController, AuthorController],
  providers: [BookService,AuthorService],
})
export class AppModule {}
