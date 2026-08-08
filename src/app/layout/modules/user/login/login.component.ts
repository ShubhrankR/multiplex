import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../../../../data/schema/user.model';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
    selector: 'multiplex-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    /**
     * Angular Signals for reactive form state management.
     * Signals encapsulate mutable state in a fine-grained reactive wrapper.
     */
    readonly userName = signal<string>('');
    readonly userPassword = signal<string>('');
    readonly areFieldsEmpty = signal<boolean>(false);
    readonly isUserNamePassInCorrect = signal<boolean>(false);

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    /**
     * Auto-fill helper for test credentials requested for easier app testing.
     */
    autoFillDemoCredentials(): void {
        this.userName.set('admin');
        this.userPassword.set('admin');
        this.areFieldsEmpty.set(false);
        this.isUserNamePassInCorrect.set(false);
    }

    onSubmit(): void {
        const uName = this.userName().trim();
        const uPass = this.userPassword().trim();

        if (!uName || !uPass) {
            this.areFieldsEmpty.set(true);
            this.isUserNamePassInCorrect.set(false);
            return;
        }

        this.areFieldsEmpty.set(false);

        if (uName !== 'admin' || uPass !== 'admin') {
            this.isUserNamePassInCorrect.set(true);
            return;
        }

        this.isUserNamePassInCorrect.set(false);
        const userData = new UserModel(uName, uPass);
        if (this.authService.validateUserCredentials(userData)) {
            this.router.navigate(['home']).then(() => {
                console.log('Redirected to home');
            });
        }
    }
}
