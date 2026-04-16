import { Controller, Get, Post } from '@nestjs/common';
import { LibraryService } from './library.service';
import { get } from 'node:https';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  async createLibrary() {
    return this.libraryService.createLibrary();
  }

  @Get()
  async getLibraries() {
    return this.libraryService.getLibraries();
  }
}
