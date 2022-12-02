import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { BookController } from './controllers/book/book.controller';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import { AuthorController } from './controllers/author/author.controller';
import dbConfig from "./mikro-orm.config";
import AuthorService from "./controllers/author/author.service";

@Module({
  imports: [
      MikroOrmModule.forRoot(dbConfig)
  ],
  controllers: [BookController, AuthorController],
  providers: [AppService,AuthorService],
})
export class AppModule {}
