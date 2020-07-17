import { Iphone } from './userPhone.interface';

export class UsPhone implements Iphone {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public phoneNumber: number
    ) { }
}