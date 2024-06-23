import{a as F}from"./chunk-BAX2OCFG.js";import{Aa as r,Ba as l,Ca as m,Ea as M,Fa as z,Ga as f,Ha as o,Ia as d,Ja as g,La as j,M as p,N as w,Na as A,Oa as B,aa as C,bb as E,db as G,fa as S,ga as k,ia as i,lb as D,ub as H,va as I,xa as L,ya as b,za as T}from"./chunk-MD2ROCGJ.js";import"./chunk-KFZQC3P5.js";function V(a,n){if(a&1&&m(0,"span",9),a&2){let P=n.$index,s=z();I("innerHTML",s.generateSVG(P),S)}}var R=(()=>{let n=class n{constructor(){this.productId=C(0,{alias:"id"}),this.starsArray=new Array(5).fill(0),this.cartStore=p(H),this.productSvc=p(F),this._sanitizer=p(D)}ngOnInit(){this.product=this.productSvc.getProductById(this.productId())}onAddToCart(){this.cartStore.addToCart(this.product())}generateSVG(s){let e=null,t=this.product()?.rating.rate;return s+1<=Math.floor(t)?e=`<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" class="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
              </path>
            </svg>`:s<t?e=`<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="partialFillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" style="stop-color:currentColor; stop-opacity:1" />
              <stop offset="50%" style="stop-color:currentColor; stop-opacity:0" />
            </linearGradient>
          </defs>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#partialFillGradient)"></path>
        </svg>`:e=`<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
              </path>
            </svg>`,this._sanitizer.bypassSecurityTrustHtml(e)}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=w({type:n,selectors:[["app-details"]],inputs:{productId:[1,"id","productId"]},standalone:!0,features:[j],decls:23,vars:9,consts:[[1,"overflow-hidden","text-gray-600","body-font"],[1,"container","px-5","py-24","mx-auto"],[1,"flex","flex-wrap","mx-auto","lg:w-4/5"],[1,"object-cover","object-center","w-full","h-64","rounded","lg:w-1/2","lg:h-auto",3,"alt","src"],[1,"w-full","mt-6","lg:w-1/2","lg:pl-10","lg:py-6","lg:mt-0"],[1,"text-sm","tracking-widest","text-gray-500","title-font"],[1,"mb-1","text-3xl","font-medium","text-gray-900","title-font"],[1,"flex","mb-4"],[1,"flex","items-center"],[3,"innerHTML"],[1,"ml-3","text-gray-600"],[1,"mt-6","mb-5","leading-relaxed"],[1,"flex"],[1,"text-2xl","font-bold","text-orange-500"],[1,"px-2","py-1","ml-auto","text-white","bg-orange-500","rounded","hover:bg-orange-700",3,"click"]],template:function(e,t){if(e&1&&(r(0,"section",0)(1,"div",1)(2,"div",2),m(3,"img",3),r(4,"div",4)(5,"h2",5),o(6),l(),r(7,"h1",6),o(8),l(),r(9,"div",7)(10,"span",8),b(11,V,1,1,"span",9,L),r(13,"span",10),o(14),l()()(),r(15,"p",11),o(16),l(),r(17,"div",12)(18,"span",13),o(19),A(20,"currency"),l(),r(21,"button",14),M("click",function(){return t.onAddToCart()}),o(22," Add to cart "),l()()()()()()),e&2){let c,x,h,v,u,y,_;i(3),f("alt",(c=t.product())==null?null:c.title),f("src",(x=t.product())==null?null:x.image,k),i(3),g("",(h=t.product())==null?null:h.category," "),i(2),d((v=t.product())==null?null:v.title),i(3),T(t.starsArray),i(3),g(" ",(u=t.product())==null||u.rating==null?null:u.rating.count," reviews"),i(2),d((y=t.product())==null?null:y.description),i(3),d(B(20,7,(_=t.product())==null?null:_.price))}},dependencies:[G,E]});let a=n;return a})();export{R as default};
