export interface UserModel
{
	id: number,
	firstname: string,
	lastname: string,
	username: string,
	password: string,
	email: string,
	is_active?: boolean,
	role?: string
}