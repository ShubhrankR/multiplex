import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {
    }

    isLocalStorageAvailable() {
        const test = 'local check';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    isSessionStorageAvailable() {
        const test = 'session check';
        try {
            sessionStorage.setItem(test, test);
            sessionStorage.removeItem(test);
            return true;
        } catch (e) {
            return false
        }
    }

    setItemToSessionStorage(key: string, value: string) {
        if (this.isSessionStorageAvailable()) {
            sessionStorage.setItem(key, value)
        } else {
            console.log('Unable to set item in session storage. Key -' + key + ' | value -' + value);
        }
    }

    getItemFromSessionStorage(key: string) {
        if (this.isSessionStorageAvailable()) {
            return sessionStorage.getItem(key);
        }
        console.log('Unable to get item from session storage. Key -' + key);
        return;
    }

    removeItemFromSessionStorage(key: string) {
        if (this.isSessionStorageAvailable()) {
            sessionStorage.removeItem(key);
        }
        console.log('Unable to remove item from session storage. Key -' + key);
        return;
    }

    clearStorage() {
        if (this.isSessionStorageAvailable()) {
            localStorage.clear();
            sessionStorage.clear();
        }
    }
}
