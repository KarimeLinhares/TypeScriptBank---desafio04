export interface User {
	name: string;
	email: string;
}

const db = [
	{
		name: 'Joana',
		email: 'joana@dio.com',
	},
];

//responsável por manipular o banco de dados
export class UserService {
	db: User[];

	constructor(database = db) {
		this.db = database;
	}

	createUser = (name: string, email: string) => {
		const user = {
			name,
			email,
		};
		this.db.push(user);
		console.log('DB atualizado', this.db);
	};

	getAllUsers = () => {
		return this.db;
	};
}
