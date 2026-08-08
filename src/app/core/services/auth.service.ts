import {Injectable, signal} from '@angular/core';
import {UserModel} from "../../data/schema/user.model";
import {AppConstants} from "../constants/app.constants";
import {StorageService} from "./storage.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    /**
     * Angular Signal: Reactive state tracking if user is logged in.
     * Angular Signals provide fine-grained reactivity, replacing legacy RxJS BehaviorSubject for simple state.
     */
    readonly isLoggedIn = signal<boolean>(false);

    constructor(private storageService: StorageService) {
        this.setUserLoggedInState();
    }

    setUserLoggedInState(): void {
        // Update signal value using .set()
        this.isLoggedIn.set(this.checkUserLoggedInOrNot());
    }

    validateUserCredentials(user: UserModel): boolean {
        if (user.username === AppConstants.userCredName && user.password === AppConstants.userCredPassword) {
            this.setUserInStorage(user);
            // Notify reactive listeners of authentication success
            this.isLoggedIn.set(true);
            return true;
        } else {
            return false;
        }
    }

    logoutUser(): void {
        // Signal update on user logout
        this.isLoggedIn.set(false);
        this.storageService.clearStorage();
    }

    setUserInStorage(userData: UserModel): void {
        this.storageService.setItemToSessionStorage(AppConstants.userKeyForStorage, JSON.stringify(userData));
    }

    checkUserLoggedInOrNot(): boolean {
        const userData: UserModel = JSON.parse(this.storageService.getItemFromSessionStorage(AppConstants.userKeyForStorage) ?? '{}');
        return this.storageService.isSessionStorageAvailable() ? !!userData && !!userData.username : false;
    }
}
