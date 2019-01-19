export interface User {
	uid: string;
	email: string;
	photoURL?: string;
	displayName?: string;
	roles: Roles;
	ageRange?: string;
	monthlyIincomes?: string;
	nationality?: string;
	residence?: string;
}

export interface Roles {
	citizen?: boolean;
	publisher?: boolean;
	admin?: boolean;
}
