import {Injectable} from "@angular/core";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class AppConstants {
    public static readonly userCredName = 'admin';
    public static readonly userCredPassword = 'admin';
    public static readonly userKeyForStorage = 'user';

    public static readonly requestOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
}
