"use strict";(self.webpackChunkmultiplex=self.webpackChunkmultiplex||[]).push([[592],{5414:(d,s,a)=>{a.d(s,{D:()=>u});var i=a(9399),n=a(1223);let t=(()=>{class e{}return e.apiRoutes={key:"417160d71f440c342f0223b2657f8cf4",lang:"en-US",region:"US",domain:{endpoint:"https://api.themoviedb.org/3/"},movies:{movieDetail:{endpoint:"movie/",type:"GET",example:"https://api.themoviedb.org/3/movie/540?api_key=417160d71f440c342f0223b2657f8cf4&language=en-US"},topRatedMovies:{endpoint:"movie/top_rated",type:"GET",example:"https://api.themoviedb.org/3/movie/top_rated?api_key=417160d71f440c342f0223b2657f8cf4&language=en-US&page=1&region=US"}}},e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})();var r=a(520);let u=(()=>{class e{constructor(o){this.http=o}getTmDbConfig(){return this.http.get(t.apiRoutes.domain.endpoint+"configuration?api_key="+t.apiRoutes.key,i.$.requestOptions)}getMovieDetail(o){return this.http.get(t.apiRoutes.domain.endpoint+t.apiRoutes.movies.movieDetail.endpoint+"/"+o+"?api_key="+t.apiRoutes.key,i.$.requestOptions)}getTopRatedMovies(o){return this.http.get(t.apiRoutes.domain.endpoint+t.apiRoutes.movies.topRatedMovies.endpoint+"?api_key="+t.apiRoutes.key+"&language="+t.apiRoutes.lang+"&page="+o+"&region="+t.apiRoutes.region,i.$.requestOptions)}}return e.\u0275fac=function(o){return new(o||e)(n.LFG(r.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);