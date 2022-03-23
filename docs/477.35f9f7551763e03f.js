"use strict";(self.webpackChunkmultiplex=self.webpackChunkmultiplex||[]).push([[477],{5477:(B,p,a)=>{a.r(p),a.d(p,{MoviesModule:()=>N});var c=a(9808),d=a(1590),m=a(6642),e=a(1223),u=a(2267);let f=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["multiplex-loading"]],decls:5,vars:0,consts:[[1,"rings"],[1,"ring","ring1"],[1,"ring","ring2"],[1,"ring","ring3"],[1,"ring","ring4"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"div",4),e.qZA()()()())},styles:[".rings[_ngcontent-%COMP%]{position:relative}.rings[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%]{box-shadow:-10px -10px 15px #ffffff4d,10px 10px 15px #46464626,inset -10px -10px 15px #ffffff4d,inset 10px 10px 15px #46464626;border:13px solid #ececec;border-radius:50%;display:flex;justify-content:center;align-items:center}.rings[_ngcontent-%COMP%]   .ring1[_ngcontent-%COMP%]{height:28rem;width:28rem;animation:glow1 2.5s infinite}@keyframes glow1{60%{background-color:#ececec}80%{background-color:#90cea1}to{background-color:#90cea1}}.rings[_ngcontent-%COMP%]   .ring2[_ngcontent-%COMP%]{height:20rem;width:20rem;animation:glow2 2.5s infinite}@keyframes glow2{40%{background-color:#ececec}60%{background-color:#90cea1}to{background-color:#90cea1}}.rings[_ngcontent-%COMP%]   .ring3[_ngcontent-%COMP%]{height:12rem;width:12rem;animation:glow3 2.5s infinite}@keyframes glow3{20%{background-color:#ececec}40%{background-color:#90cea1}to{background-color:#90cea1}}.rings[_ngcontent-%COMP%]   .ring4[_ngcontent-%COMP%]{height:5rem;width:5rem;animation:glow4 2.5s infinite}@keyframes glow4{0%{background-color:#ececec}20%{background-color:#90cea1}to{background-color:#90cea1}}"]}),n})();function h(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"div",3)(2,"h1"),e._uU(3),e.qZA(),e.TgZ(4,"div",4)(5,"figure"),e._UZ(6,"img",5),e.TgZ(7,"figcaption"),e._uU(8),e.qZA()(),e.TgZ(9,"div",6)(10,"p"),e._uU(11),e.TgZ(12,"strong"),e._uU(13),e.qZA(),e._uU(14," on "),e.TgZ(15,"strong"),e._uU(16),e.qZA()()(),e.TgZ(17,"a",7),e._uU(18,"Click to Watch"),e.qZA()()(),e.BQk()),2&n){const t=e.oxw();e.xp6(3),e.Oqu(t.movieInfo.title),e.xp6(3),e.Q6J("alt",t.movieInfo.original_title)("src",t.movieInfo.backdrop_path,e.LSH),e.xp6(2),e.Oqu(t.movieInfo.tagline),e.xp6(3),e.hij("",t.movieInfo.overview," "),e.xp6(2),e.Oqu(t.movieInfo.status),e.xp6(3),e.Oqu(t.movieInfo.release_date),e.xp6(1),e.Q6J("href",t.movieInfo.homepage,e.LSH)}}function v(n,i){1&n&&(e.TgZ(0,"div",8),e._UZ(1,"multiplex-loading"),e.qZA())}const M=function(n){return{"justify-content":n}};let C=(()=>{class n{constructor(t,o){this.dataService=t,this.activatedRoute=o,this.movieInfoLoaded=!1}ngOnInit(){this.dataService.getTmDbConfig().subscribe(t=>console.log("config =",t)),this.movieId=this.activatedRoute.snapshot.params.id,this.dataService.getMovieDetail(this.movieId).subscribe({next:t=>{console.log("Movie detail -",t),this.movieInfo=Object.assign(Object.assign({},t),{backdrop_path:m.p.apiRoutes.backdrop_image_sizes.w1280+t.backdrop_path}),console.log("Movie detail -",this.movieInfo),this.movieInfoLoaded=!0},error:t=>{console.error(t)}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.D),e.Y36(d.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["multiplex-about-movie"]],decls:4,vars:5,consts:[[1,"page-main-section","neumorphic-card",3,"ngStyle"],[4,"ngIf","ngIfElse"],["showLoading",""],[1,"movie-details"],[1,"card"],[3,"alt","src"],[1,"content"],["target","_blank",3,"href"],[1,"loading"]],template:function(t,o){if(1&t&&(e.TgZ(0,"section",0),e.YNc(1,h,19,8,"ng-container",1),e.YNc(2,v,2,0,"ng-template",null,2,e.W1O),e.qZA()),2&t){const r=e.MAs(3);e.Q6J("ngStyle",e.VKq(3,M,o.movieInfoLoaded?"":"center")),e.xp6(1),e.Q6J("ngIf",o.movieInfoLoaded)("ngIfElse",r)}},directives:[c.PC,c.O5,f],styles:[".movie-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:0 0 1rem}.movie-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{margin:1rem}.movie-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:2rem}.movie-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{font-size:.8rem}.movie-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin:1rem}.movie-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify}.movie-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:bolder}"]}),n})();var l=a(2382);const x=["finder__input"],O=["finder"],b=["form"];let P=(()=>{class n{constructor(t){this.renderer2=t,this.outputtingSearchKeyword=new e.vpe}ngOnInit(){const t=this.input.nativeElement,o=this.finder.nativeElement,r=this.form.nativeElement;this.unListenFocus=this.renderer2.listen(t,"focus",()=>{this.renderer2.addClass(o,"active")}),this.unListenBlur=this.renderer2.listen(t,"blur",()=>{0===t.value.length&&this.renderer2.removeClass(o,"active")}),this.unListenSubmit=this.renderer2.listen(r,"submit",s=>{s.preventDefault(),this.renderer2.addClass(o,"processing"),this.renderer2.removeClass(o,"active"),t.disabled=!0,this.setTimeOutInterval=setTimeout(()=>{this.renderer2.removeClass(o,"processing"),t.disabled=!1,t.value.length>0&&this.renderer2.addClass(o,"active")},1e3)})}onSubmitOfSearch(){this.outputtingSearchKeyword.emit(this.searchText)}onSearchEvent(t){""===t&&this.outputtingSearchKeyword.emit("")}ngOnDestroy(){this.unListenBlur(),this.unListenFocus(),this.unListenSubmit(),clearTimeout(this.setTimeOutInterval)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Qsj))},n.\u0275cmp=e.Xpm({type:n,selectors:[["multiplex-search-bar"]],viewQuery:function(t,o){if(1&t&&(e.Gf(x,7),e.Gf(O,7),e.Gf(b,7)),2&t){let r;e.iGM(r=e.CRH())&&(o.input=r.first),e.iGM(r=e.CRH())&&(o.finder=r.first),e.iGM(r=e.CRH())&&(o.form=r.first)}},outputs:{outputtingSearchKeyword:"outputtingSearchKeyword"},decls:11,vars:1,consts:[[1,"search-bar-container"],["autocomplete","off","role","search",3,"ngSubmit"],["form",""],[1,"finder"],["finder",""],[1,"finder__outer"],[1,"finder__inner"],["ref","icon",1,"finder__icon"],["for","searchInput"],["aria-label","Search on Movies title","id","searchInput","name","searchInput","placeholder","Search with title of movies...","type","search",1,"finder__input",3,"ngModel","search","ngModelChange"],["finder__input",""]],template:function(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"div",0)(1,"form",1,2),e.NdJ("ngSubmit",function(){return o.onSubmitOfSearch()}),e.TgZ(3,"div",3,4)(5,"div",5)(6,"div",6),e._UZ(7,"div",7),e.TgZ(8,"label",8)(9,"input",9,10),e.NdJ("search",function(){e.CHM(r);const g=e.MAs(10);return o.onSearchEvent(g.value)})("ngModelChange",function(g){return o.searchText=g}),e.qZA()()()()()()()}2&t&&(e.xp6(9),e.Q6J("ngModel",o.searchText))},directives:[l._Y,l.JL,l.F,l.Fj,l.JJ,l.On],styles:['.search-bar-container[_ngcontent-%COMP%]{text-align:center;color:#2c3e50;width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column}.search-bar-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{transition:all .5s;width:100%}.finder[_ngcontent-%COMP%]{border:1px solid #fff;background-color:#f6f5f0;border-radius:15px;padding:8px;box-shadow:9px 9px 16px #bdbdbd99,-9px -9px 16px #ffffff80}.finder__outer[_ngcontent-%COMP%]{display:flex;width:100%;padding:1.5rem 2rem;border-radius:10px;box-shadow:inset 10px 10px 15px -10px #c3c3c3,inset -10px -10px 15px -10px #fff}.finder__inner[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;flex:1}.finder__inner[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%}.finder__form[_ngcontent-%COMP%]{flex:1;height:calc(100% + 3rem)}.finder__input[_ngcontent-%COMP%]{height:calc(100% + 3rem);width:100%;border:none;background-color:transparent;outline:none;font-size:1.5rem;letter-spacing:.75px}.finder__icon[_ngcontent-%COMP%]{min-width:40px;min-height:40px;margin-right:1rem;transition:all .2s;box-shadow:inset 0 0 0 20px #292929;border-radius:50%;position:relative}.finder__icon[_ngcontent-%COMP%]:after, .finder__icon[_ngcontent-%COMP%]:before{display:block;content:"";position:absolute;transition:all .5s cubic-bezier(.68,-.55,.265,1.55)}.finder__icon[_ngcontent-%COMP%]:after{width:10px;height:10px;background-color:#292929;border:3px solid #f6f5f0;top:50%;position:absolute;transform:translateY(-50%);left:0px;right:0;margin:auto;border-radius:50%}.active[_ngcontent-%COMP%]   .finder__icon[_ngcontent-%COMP%]:after{border-width:10px;background-color:#f6f5f0}.finder__icon[_ngcontent-%COMP%]:before{width:4px;height:13px;background-color:#f6f5f0;top:50%;left:20px;transform:rotate(45deg) translate(-50%);transform-origin:0 0;border-radius:4px}.active[_ngcontent-%COMP%]   .finder__icon[_ngcontent-%COMP%]:before{background-color:#292929;width:6px;transform:rotate(45deg) translate(-50%,25px)}.processing[_ngcontent-%COMP%]   .finder__icon[_ngcontent-%COMP%]{transform-origin:50%;animation:spinner .3s linear infinite;animation-delay:.5s}.active[_ngcontent-%COMP%]   .finder__icon[_ngcontent-%COMP%]{transform:translateY(-5px)}@keyframes spinner{0%{transform:rotate(45deg)}to{transform:rotate(405deg)}}']}),n})();const y=function(n,i){return{"max-width":n,"min-height":i}};let S=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["multiplex-movie-card"]],inputs:{movie:"movie",maxWidth:"maxWidth",minHeight:"minHeight"},decls:5,vars:7,consts:[[1,"movie-card",3,"ngStyle"],[3,"alt","src"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"figure"),e._UZ(2,"img",1),e.TgZ(3,"figcaption"),e._uU(4),e.qZA()()()),2&t&&(e.Q6J("ngStyle",e.WLB(4,y,o.maxWidth,o.minHeight)),e.xp6(2),e.Q6J("alt",o.movie.original_title)("src",o.movie.poster_path,e.LSH),e.xp6(2),e.Oqu(o.movie.title))},directives:[c.PC],styles:[".movie-card[_ngcontent-%COMP%]{margin:1rem;box-shadow:#0000001a 0 10px 15px -3px;background-color:#fff;border-radius:1rem;border-color:transparent;padding:1rem;cursor:pointer;transition:all .2s ease-in-out}.movie-card[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{padding:0}.movie-card[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:1rem;width:100%}.movie-card[_ngcontent-%COMP%]:hover{box-shadow:-2px -2px 5px #fff,2px 2px 5px #acacac}"]}),n})();function w(n,i){1&n&&(e.ynx(0),e.TgZ(1,"h1"),e._uU(2,"Sorry! No movies available with this title."),e.qZA(),e.BQk())}function T(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"multiplex-movie-card",8),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw(3).redirectTo(s.id)}),e.qZA(),e.BQk()}if(2&n){const t=i.$implicit;e.xp6(1),e.Q6J("maxWidth","200px")("minHeight","331px")("movie",t)}}function Z(n,i){if(1&n&&e.YNc(0,T,2,3,"ng-container",7),2&n){const t=e.oxw(2);e.Q6J("ngForOf",t.displayMoviesDataSet)}}function k(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",3)(2,"multiplex-search-bar",4),e.NdJ("outputtingSearchKeyword",function(r){return e.CHM(t),e.oxw().updateMoviesDataSetWithSearchKeyword(r)}),e.qZA()(),e._UZ(3,"hr"),e.TgZ(4,"div",5),e.YNc(5,w,3,0,"ng-container",1),e.YNc(6,Z,1,1,"ng-template",null,6,e.W1O),e.qZA(),e.BQk()}if(2&n){const t=e.MAs(7),o=e.oxw();e.xp6(5),e.Q6J("ngIf",o.moviesNotFound)("ngIfElse",t)}}function I(n,i){1&n&&(e.TgZ(0,"div",9),e._UZ(1,"multiplex-loading"),e.qZA())}const L=function(n){return{"justify-content":n}};let _=(()=>{class n{constructor(t,o,r){this.dataService=t,this.router=o,this.activatedRoute=r,this.moviesLoaded=!1,this.moviesNotFound=!1}ngOnInit(){this.checkRoutePath()}checkRoutePath(){this.activatedRoute.url.subscribe({next:t=>{switch(t[0].path){case"topRated":this.fetchTopRatedMovies();break;case"popular":this.fetchPopularMovies();break;default:console.log("Not Possible")}}})}fetchTopRatedMovies(){this.dataService.getTopRatedMovies(1).subscribe({next:t=>{this.createMoviesDataSet(t.results)},error:t=>{console.error(t)}})}fetchPopularMovies(){this.dataService.getPopularMovies(1).subscribe({next:t=>{this.createMoviesDataSet(t.results)},error:t=>{console.error(t)}})}createMoviesDataSet(t){this.displayMoviesDataSet=t.map(o=>Object.assign(Object.assign({},o),{poster_path:m.p.apiRoutes.poster_image_sizes.w342+o.poster_path})),this.originalMoviesDataSet=JSON.parse(JSON.stringify(this.displayMoviesDataSet)),this.moviesLoaded=!0}updateMoviesDataSetWithSearchKeyword(t){if(""===t||void 0===t)return this.moviesNotFound=!1,void(this.displayMoviesDataSet=JSON.parse(JSON.stringify(this.originalMoviesDataSet)));this.displayMoviesDataSet=this.originalMoviesDataSet.filter(o=>o.title.toLocaleLowerCase().includes(t.toLocaleLowerCase())),this.moviesNotFound=0===this.displayMoviesDataSet.length}redirectTo(t){this.router.navigate(["movies/movieDetails/"+t])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.D),e.Y36(d.F0),e.Y36(d.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["multiplex-movies"]],decls:4,vars:5,consts:[[1,"page-main-section","neumorphic-card",3,"ngStyle"],[4,"ngIf","ngIfElse"],["showLoading",""],[1,"search-bar"],[3,"outputtingSearchKeyword"],[1,"movies-section"],["moviesFound",""],[4,"ngFor","ngForOf"],[3,"maxWidth","minHeight","movie","click"],[1,"loading"]],template:function(t,o){if(1&t&&(e.TgZ(0,"section",0),e.YNc(1,k,8,2,"ng-container",1),e.YNc(2,I,2,0,"ng-template",null,2,e.W1O),e.qZA()),2&t){const r=e.MAs(3);e.Q6J("ngStyle",e.VKq(3,L,o.moviesLoaded?"":"center")),e.xp6(1),e.Q6J("ngIf",o.moviesLoaded)("ngIfElse",r)}},directives:[c.PC,c.O5,P,c.sg,S,f],styles:[".page-main-section[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]{margin:2rem 0;width:100%}.page-main-section[_ngcontent-%COMP%]   .movies-section[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly}"]}),n})();const A=[{path:"topRated",component:_},{path:"popular",component:_},{path:"movieDetails/:id",component:C}];let J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.Bz.forChild(A)],d.Bz]}),n})();var F=a(294),D=a(4466);let N=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.ez,J,F.I,D.m]]}),n})()}}]);