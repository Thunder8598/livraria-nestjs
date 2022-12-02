import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { BookController } from './controllers/book/book.controller';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import dbConfig from "./mikro-orm.config";

@Module({
  imports: [
      MikroOrmModule.forRoot(dbConfig)
  ],
  controllers: [BookController],
  providers: [AppService],
})
export class AppModule {}
