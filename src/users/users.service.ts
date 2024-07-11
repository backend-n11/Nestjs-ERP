import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import {hash, compare} from 'bcrypt'
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

@Injectable()
export class UsersService {
  constructor (
    @InjectModel(User)
    private readonly userModel: typeof User
  ){}

  async create(createUserDto: CreateUserDto):Promise<User | any> {
    const existUser = await this.userModel.findOne({'where' : {[Op.or] :[{'email' : createUserDto.email}, {'username' : createUserDto.username}]}})
    if(existUser)
      return new BadRequestException('User was already registered')
    const salt = Number(process.env.SALT)
    console.log(salt)
    const hashedPassword = await hash(createUserDto.password, salt)
    createUserDto.password = hashedPassword
    const newUser = await this.userModel.create(createUserDto)
    return newUser
  }

  async findAll():Promise<User[] | any> {
    const users = await this.userModel.findAll()
    if(!users)
      throw new NotFoundException('Foydalanuvchilar topilmadi')
    return users
  }

  async findOne(id: string):Promise<User | any> {
    const user = await this.userModel.findByPk(id)
    if(!user)
      throw new NotFoundException("bunday malumotli user topilmadi")
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findByPk(id)
    if (!user)
      throw new NotFoundException("bunday malumotli user topilmadi")
    user.update(updateUserDto)
  }

  async remove(id: string) {
    const removed = await this.userModel.destroy({'where':{id}})
    console.log(removed)
  }
}
