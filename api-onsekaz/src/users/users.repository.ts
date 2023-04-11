import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findByEmail(email: string): Promise<User> {
        return this.userModel.findOne({ email }).exec();
    }

    async create(user: User): Promise<User> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }
}