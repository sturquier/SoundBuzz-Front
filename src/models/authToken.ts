export interface AuthTokenModel
{
	id: number,
	value: string,
	created_at: Date,
	user: AuthUserModel
}

interface AuthUserModel
{
	id: number,
	firstname: string,
	lastname: string,
	username: string,
	email: string 
}