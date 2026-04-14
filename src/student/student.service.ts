import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  //   Create a new student
  async createStudent(data: Partial<Student>): Promise<Student> {
    const newStudent = new this.studentModel(data);
    return newStudent.save();
  }

  //   Get all students
  async getAllStudents(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  //   Get a student by ID
  async getStudentById(id: string): Promise<Student | null> {
    return this.studentModel.findById(id).exec();
  }

  // Update a student by ID
  async updatedStudent(
    id: string,
    data: Partial<Student>,
  ): Promise<Student | null> {
    // return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();

    const updated = await this.studentModel.findByIdAndUpdate(
      id,
      {
        name: data?.name ?? null,
        age: data?.age ?? null,
        email: data?.email ?? null,
      },
      { overwrite: true, new: true },
    );
    return updated;
  }

  // Patch a student by ID
  async patchStudent(
    id: string,
    data: Partial<Student>,
  ): Promise<Student | null> {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  // Delete a student by ID
  async deletedStudent(id: string): Promise<Student | null> {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
