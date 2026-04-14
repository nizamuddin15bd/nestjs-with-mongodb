import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;
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

export const StudentSchema = SchemaFactory.createForClass(Student);
