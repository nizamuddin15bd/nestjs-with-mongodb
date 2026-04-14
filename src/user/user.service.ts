import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  //  create a user with name "Nizma" and address with city "New York" and street "5the Avenue"
  async createUser(): Promise<User> {
    const user = new this.userModel({
      name: 'Nizma',
      address: {
        city: 'New York',
        street: '5the Avenue',
      },
    });
    return user.save();
  }

  // find all users
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
