import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Library, LibrarySchema } from './schemas/book.schema';
import { Book, BookSchem } from './schemas/library.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Library.name, schema: LibrarySchema },
      { name: Book.name, schema: BookSchem },
    ]),
  ],
  providers: [LibraryService],
  controllers: [LibraryController],
})
export class LibraryModule {}
