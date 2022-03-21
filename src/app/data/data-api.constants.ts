import {Injectable} from "@angular/core";

@Injectable()
export class DataApiConstants {
    public static readonly apiRoutes = {
        key: '417160d71f440c342f0223b2657f8cf4',
        lang: 'en-US',
        region: 'US',
        domain: {
            endpoint: 'https://api.themoviedb.org/3/'
        },
        movies: {
            movieDetail: {
                endpoint: 'movie/',
                type: 'GET',
                example: 'https://api.themoviedb.org/3/movie/540?api_key=417160d71f440c342f0223b2657f8cf4&language=en-US'
            },
            topRatedMovies: {
                endpoint: 'movie/top_rated',
                type: 'GET',
                example: 'https://api.themoviedb.org/3/movie/top_rated?api_key=417160d71f440c342f0223b2657f8cf4&language=en-US&page=1&region=US'
            }
        }
    }
}
