export interface GetTopRatedMoviesAPIResponseModel {
    page: number;
    results: MovieDetailModel[];
    total_results: number;
    total_pages: number;
}

export interface MovieDetailModel {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface GetTmDbConfigAPIResponseModel {
    images: {
        base_url: string;
        secure_base_url: string;
        backdrop_sizes: string[];
        logo_sizes: string[];
        poster_sizes: string[];
        profile_sizes: string[];
        still_sizes: string[]
    };
    changes_keys: string[]
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompanies {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountries {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguages {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface MovieDetailAPIResponseModel {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number,
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompanies[];
    production_countries: ProductionCountries[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguages[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
