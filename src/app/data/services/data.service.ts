import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppConstants} from "../../core/constants/app.constants";
import {DataApiConstants} from "../data-api.constants";
import {
    GetTmDbConfigAPIResponseModel,
    GetTopRatedMoviesAPIResponseModel,
    MovieDetailAPIResponseModel
} from "../schema/data.model";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {
    }

    getTmDbConfig(): Observable<GetTmDbConfigAPIResponseModel> {
        return this.http.get<GetTmDbConfigAPIResponseModel>(DataApiConstants.apiRoutes.domain.endpoint +
            'configuration?api_key=' + DataApiConstants.apiRoutes.key, AppConstants.requestOptions);
    }

    getMovieDetail(movie_Id: number): Observable<MovieDetailAPIResponseModel> {
        return this.http.get<MovieDetailAPIResponseModel>(DataApiConstants.apiRoutes.domain.endpoint +
            DataApiConstants.apiRoutes.movies.movieDetail.endpoint + '/' + movie_Id + '?api_key=' +
            DataApiConstants.apiRoutes.key, AppConstants.requestOptions);
    }

    getTopRatedMovies(page: Number): Observable<GetTopRatedMoviesAPIResponseModel> {
        return this.http.get<GetTopRatedMoviesAPIResponseModel>(DataApiConstants.apiRoutes.domain.endpoint +
            DataApiConstants.apiRoutes.movies.topRatedMovies.endpoint + '?api_key=' + DataApiConstants.apiRoutes.key +
            '&language=' + DataApiConstants.apiRoutes.lang + '&page=' + page + '&region=' + DataApiConstants.apiRoutes.region,
            AppConstants.requestOptions);
    }

    searchAPI(): Observable<any> {
        return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=417160d71f440c342f0223b2657f8cf4&language=en-US&query=action&page=1&include_adult=false')
    }
}
