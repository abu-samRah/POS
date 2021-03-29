import React from 'react';
import axios from 'axios';
import {get} from '../api/axios'

interface userType {
  id?: number;
  email?: string;
  password?: string;
}

interface response extends userType {
  found: boolean;
}

async function logIn(email: string, password: string) {
  let match: response = { found: false };
  
  const url: string = `/users?email_like=${email}`
  
  await get(url).then((res) => {
    const users: userType[] = res.data;

    users.map((user) => {
      if (user.email === email && user.password === password) {
        match = { found: true, id: user.id, email: user.email };
      }
      return match;
    });
  });
  return match;
}

export default logIn;
