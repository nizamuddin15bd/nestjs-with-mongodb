import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document; //Import services will use this type to define the type of the documents they are working with, ensuring type safety when interacting with the database.
@Schema({ timestamps: true })
export class Student {
  @Prop({ required: true })
  name!: string;
  @Prop({ required: true })
  age!: number;
  @Prop()
  email?: string;

  //   constructor(name: string, age: number, email?: string) {
  //     ((this.name = name), (this.age = age), (this.email = email));
  //   }
}

export const StudentSchema = SchemaFactory.createForClass(Student); // Module importing this schema will use this to create the collection in MongoDB and define the structure of the documents in that collection.
