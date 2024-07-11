import {IsString, IsEmail, IsNotEmpty, Length} from 'class-validator'
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    name : string

    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    username: string


    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @Length(3, 50)
    email : string

    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    password : string
}
