import {Injectable} from '@angular/core';
import {UserModel} from "../../data/schema/user.model";
import {AppConstants} from "../constants/app.constants";
import {StorageService} from "./storage.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = false;

    private $isUserLoggedIn = new BehaviorSubject<boolean>(false);
    currentUserState = this.$isUserLoggedIn.asObservable();

    constructor(private storageService: StorageService) {
        this.setUserLoggedInState();
    }

    setUserLoggedInState() {
        this.$isUserLoggedIn.next(this.checkUserLoggedInOrNot());
    }

    validateUserCredentials(user: UserModel): boolean {
        if (user.username === AppConstants.userCredName && user.password === AppConstants.userCredPassword) {
            this.setUserInStorage(user);
            this.$isUserLoggedIn.next(true);
            return true;
        } else {
            return false;
        }
    }

    logoutUser() {
        this.$isUserLoggedIn.next(false);
        this.storageService.clearStorage();
    }

    setUserInStorage(userData: UserModel) {
        this.storageService.setItemToSessionStorage(AppConstants.userKeyForStorage, JSON.stringify(userData));
    }

    checkUserLoggedInOrNot(): boolean {
        const userData: UserModel = JSON.parse(this.storageService.getItemFromSessionStorage(AppConstants.userKeyForStorage) ?? '{}')
        this.isLoggedIn = this.storageService.isSessionStorageAvailable() ? !!userData && !!userData.username : false;
        return this.isLoggedIn;
    }
}
