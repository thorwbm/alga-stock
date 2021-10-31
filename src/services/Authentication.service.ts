import http from '../utils/http'

export interface User {
    _id: string
    user: string
    pass: string
    role: 'admin' | 'costumer'
    createdAt: string
    updatedAt: string
}

export const signInUser = (user: string, pass: string) =>
    http
        .post <User> ('/authentication/login', {user, pass})
        .then(res => res.data)