import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail, IsNotEmpty, Length, IsOptional } from 'class-validator'

import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    name: string

    @IsOptional()
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @Length(3, 50)
    email: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    password: string
}
