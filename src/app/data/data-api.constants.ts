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
        backdrop_image_sizes: {
            w300: 'https://image.tmdb.org/t/p/w300',
            w780: 'https://image.tmdb.org/t/p/w780',
            w1280: 'https://image.tmdb.org/t/p/w1280',
            original: 'https://image.tmdb.org/t/p/original',
        },
        poster_image_sizes: {
            w92: 'https://image.tmdb.org/t/p/w92',
            w154: 'https://image.tmdb.org/t/p/w154',
            w185: 'https://image.tmdb.org/t/p/w185',
            w342: 'https://image.tmdb.org/t/p/w342',
            w500: 'https://image.tmdb.org/t/p/w500',
            w780: 'https://image.tmdb.org/t/p/w780',
            original: 'https://image.tmdb.org/t/p/original'
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
            },
            popularMovies: {
                endpoint: 'movie/popular',
                type: 'GET',
                example: 'https://api.themoviedb.org/3/movie/popular?api_key=417160d71f440c342f0223b2657f8cf4&language=en-US&page=1'
            }
        }
    }
}
