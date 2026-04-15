import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';
import { run } from 'node:test';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  //   createEmployee(): Promise<Employee> {
  async createEmployee(): Promise<Employee> {
    const profile = new this.profileModel({
      age: 30,
      qualification: "Bachelor's Degree",
    }).save();
    const employee = new this.employeeModel({
      name: 'Nizam',
      profile: (await profile)._id,
    });
    return employee.save();
  }

  //   findAll
  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().populate('profile').exec();
    // return this.employeeModel.find();
  }
}
