import { Table, Column, DataType, Model, PrimaryKey} from "sequelize-typescript";


@Table
export class User extends Model<User> {
    @PrimaryKey
    @Column({
        type : DataType.UUID,
        allowNull : false,
        defaultValue : DataType.UUIDV4
    })
    id : string


    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    name : string

    @Column({
        type : DataType.STRING,
        allowNull : false,
        unique : true,
        validate : {
            isEmail : true
        },
    })
    email : string

    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    password : string
    
}
