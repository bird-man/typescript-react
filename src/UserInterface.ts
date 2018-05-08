import { v4 as uuid } from 'uuid/interfaces';

export default interface User {
    id: uuid;
    firstName: string;
    lastName: string;
    dob: Date;
    email: string;
    phone: string;
}
