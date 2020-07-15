import { IntUser } from './user.interface';

export class User implements IntUser {
    constructor(
        public id: number,
        public login: string,
        public password: number,
        public email: string ) { }
}