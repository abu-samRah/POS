import React from 'react'
import axios from 'axios'

interface userType{
    id?: number,
    email?: string,
    password?: string
}

interface response extends userType{
   found: boolean
}

async function logIn(email: string, password: string){
    let match: response = {found: false};
    const api = axios.create({
        baseURL: `http://localhost:3004/users?email_like=${email}`
    })

    await api.get('').then(res => {
        const users: userType[] = res.data;
        
        users.map(user => {
            
            if (user.email === email && user.password === password) {
                match = {found: true ,id: user.id, email: user.email, password:user.password} 
            }
            return match
        });
    })
    return match

}

export default logIn
