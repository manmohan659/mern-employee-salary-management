import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(
    process.env.DB_NAME || 'db_penggajian3',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '3306'),
        dialect: 'mysql',
        logging: process.env.NODE_ENV === 'production' ? false : console.log,
    }
);

export default db;
