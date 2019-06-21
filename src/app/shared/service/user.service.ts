import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../shared/models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('https://dessertapi.azurewebsites.net/api/user');
    }

    getByName(name: string) {
        return this.http.get('https://dessertapi.azurewebsites.net/api/user' + name);
    }

    registration(user: User) {
        return this.http.post('https://dessertapi.azurewebsites.net/api/user', user);
    }

    update(user: User) {
        return this.http.put('https://dessertapi.azurewebsites.net/api/user' + user.UserName, user);
    }

    delete(name: string) {
        return this.http.delete('https://dessertapi.azurewebsites.net/api/user' + name);
    }
}