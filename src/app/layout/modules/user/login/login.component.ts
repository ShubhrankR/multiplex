import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserModel} from "../../../../data/schema/user.model";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
    selector: 'multiplex-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    userName!: string;
    userPassword!: string;
    areFieldsEmpty = false;
    isUserNamePassInCorrect = false;

    constructor(private router: Router,
                private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        if (this.userPassword === undefined || this.userPassword === void 0 || this.userName === '' || this.userPassword === '') {
            this.areFieldsEmpty = true;
            return;
        }
        this.areFieldsEmpty = false;
        if (this.userName !== 'admin' || this.userPassword !== 'admin') {
            this.isUserNamePassInCorrect = true;
            return;
        }
        this.isUserNamePassInCorrect = false;
        const userData = new UserModel(this.userName, this.userPassword);
        if (this.authService.validateUserCredentials(userData)) {
            this.router.navigate(['home']).then(() => {
                console.log('Redirected to home');
            })
        }
    }

}
