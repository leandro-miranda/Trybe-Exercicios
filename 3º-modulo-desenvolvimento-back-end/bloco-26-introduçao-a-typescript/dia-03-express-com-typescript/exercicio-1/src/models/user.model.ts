import connection from './connection';
import { Pool, RowDataPacket } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UserModel {
	public connection: Pool;

	constructor(connection: Pool) {
		this.connection = connection;
	}

	public async getAll(): Promise<IUser[]> { 
		const [result] = await connection.execute<(IUser & RowDataPacket)[]>('SELECT * FROM Users');

		return result;
	}
}