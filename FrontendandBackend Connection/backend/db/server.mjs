import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

const config = {
    host: 'localhost',
    user: 'root',
    password: 'Gino@123',
    database: 'CRUDOPERATION',
};

export const executeQuery = async (query, parameters = []) => {
    let connection;
    try {
        connection = await mysql.createConnection(config);
        const [results] = await connection.execute(query, parameters);
        return results;
    } catch (error) {
        console.error('[executeQuery] Error -->', error);
        throw error;
    } finally {
        if (connection) await connection.end();
    }
};

export default app; 
