import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Developer, DeveloperSchema } from './schemas/developer.schema';
import { PojectSchema, Project } from './schemas/project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Developer.name, schema: DeveloperSchema },
      { name: Project.name, schema: PojectSchema },
    ]),
  ],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
