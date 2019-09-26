import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Academy } from './models/academy.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AcademiesService {
  constructor(@InjectModel('Academy') private readonly academyModel: Model<Academy>) {}

  findById(academyId: string): Promise<Academy> {
    return  this.academyModel.findById(academyId).exec();
  }

  findAll(): Promise<Academy[]> {
    return this.academyModel.find().exec();
  }
}
