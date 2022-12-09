import { Module } from '@nestjs/common';
import { BookController } from './controllers/book/book.controller';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import { AuthorController } from './controllers/author/author.controller';
import { UserController } from './controllers/user/user.controller';
import { AuthController } from './controllers/auth/auth.controller';
import dbConfig from "./mikro-orm.config";
import AuthorService from "./controllers/author/author.service";
import BookService from "./controllers/book/book.service";
import UserService from "./controllers/user/user.service";

@Module({
  imports: [
      MikroOrmModule.forRoot(dbConfig)
  ],
  controllers: [BookController, AuthorController, UserController, AuthController],
  providers: [BookService,AuthorService,UserService],
})
export class AppModule {}
