import React from 'react';
import { get } from '../api/axios';
import { User } from '../types';

function login(email: string, password: string) {

    const url: string = `/users?email_like=${email}`;

    // this will return a promise that is when fecthed the user will be returned.  user will be either a User type or null
    return get<User[]>(url).then((res) => {
        const users: User[] = res.data;

        return users.find((user) => (user.email === email && user.password === password)
        );
    })
}

export default login;
