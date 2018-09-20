export interface UserModel
{
	id: number,
	firstname: string,
	lastname: string,
	username: string,
	password: string,
	email: string,
	birthday?: string, // Date ?
	is_active?: boolean,
	role?: string
}