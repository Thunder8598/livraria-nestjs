import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { BookController } from './book/book.controller';
import { BookController } from './controllers/book/book.controller';

@Module({
  imports: [],
  controllers: [AppController, BookController],
  providers: [AppService],
})
export class AppModule {}
