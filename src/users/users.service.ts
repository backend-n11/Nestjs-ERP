import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findByLogin(login: string): Promise<User | undefined> {
    return this.userModel.findOne({ where: { email: login } });
  }

  async findById(id: number): Promise<User | undefined> {
    return this.userModel.findOne({ where: { id } });
  }

  async createUser(login: string, password: string): Promise<User> {
    return this.userModel.create({ email: login, password });
  }
}