"use strict";(self.webpackChunkmultiplex=self.webpackChunkmultiplex||[]).push([[592],{6642:(g,n,p)=>{p.d(n,{p:()=>t});var o=p(1223);let t=(()=>{class e{}return e.apiRoutes={key:"417160d71f440c342f0223b2657f8cf4",lang:"en-US",region:"US",domain:{endpoint:"https://api.themoviedb.org/3/"},backdrop_image_sizes:{w300:"https://image.tmdb.org/t/p/w300",w780:"https://image.tmdb.org/t/p/w780",w1280:"https://image.tmdb.org/t/p/w1280",original:"https://image.tmdb.org/t/p/original"},poster_image_sizes:{w92:"https://image.tmdb.org/t/p/w92",w154:"https://image.tmdb.org/t/p/w154",w185:"https://image.tmdb.org/t/p/w185",w342:"https://image.tmdb.org/t/p/w342",w500:"https://image.tmdb.org/t/p/w500",w780:"https://image.tmdb.org/t/p/w780",original:"https://image.tmdb.org/t/p/original"},movies:{movieDetail:{endpoint:"movie/",type:"GET",example:"https://api.themoviedb.org/3/movie/540?api_key=417160d71f440c342f0223b2657f8cf4&language=en-US"},topRatedMovies:{endpoint:"movie/top_rated",type:"GET",example:"https://api.themoviedb.org/3/movie/top_rated?api_key=417160d71f440c342f0223b2657f8cf4&language=en-US&page=1&region=US"},popularMovies:{endpoint:"movie/popular",type:"GET",example:"https://api.themoviedb.org/3/movie/popular?api_key=417160d71f440c342f0223b2657f8cf4&language=en-US&page=1"}}},e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e})()},2267:(g,n,p)=>{p.d(n,{D:()=>r});var o=p(9399),t=p(6642),e=p(1223),s=p(520);let r=(()=>{class i{constructor(a){this.http=a}getTmDbConfig(){return this.http.get(t.p.apiRoutes.domain.endpoint+"configuration?api_key="+t.p.apiRoutes.key,o.$.requestOptions)}getMovieDetail(a){return this.http.get(t.p.apiRoutes.domain.endpoint+t.p.apiRoutes.movies.movieDetail.endpoint+"/"+a+"?api_key="+t.p.apiRoutes.key,o.$.requestOptions)}getTopRatedMovies(a){return this.http.get(t.p.apiRoutes.domain.endpoint+t.p.apiRoutes.movies.topRatedMovies.endpoint+"?api_key="+t.p.apiRoutes.key+"&language="+t.p.apiRoutes.lang+"&page="+a+"&region="+t.p.apiRoutes.region,o.$.requestOptions)}getPopularMovies(a){return this.http.get(t.p.apiRoutes.domain.endpoint+t.p.apiRoutes.movies.popularMovies.endpoint+"?api_key="+t.p.apiRoutes.key+"&language="+t.p.apiRoutes.lang+"&page="+a,o.$.requestOptions)}searchAPI(){return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=417160d71f440c342f0223b2657f8cf4&language=en-US&query=action&page=1&include_adult=false")}}return i.\u0275fac=function(a){return new(a||i)(e.LFG(s.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);