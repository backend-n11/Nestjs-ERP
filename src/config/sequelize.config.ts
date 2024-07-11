import { SequelizeModuleOptions } from '@nestjs/sequelize';
export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  uri: process.env.DATABASE_URL,
  autoLoadModels: true,
  synchronize: true,
};
