import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async createProduct(): Promise<Product> {
    const product = new this.productModel({
      titile: 'Walto Produt',
      tags: [
        { name: 'walto Ac' },
        { name: 'walto Pro' },
        { name: 'walto Max' },
        { name: 'walto Air' },
      ],
    });
    return product.save();
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
