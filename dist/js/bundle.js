!function(){"use strict";function e(e,o,l,r,n){t(o,l,r,n),document.body.style.overflow="hidden",o.style.display="block",e.style.display="block"}function t(e,t,o,l){document.body.style.overflow="",e.style.display="none",t.style.display="none",o.style.display="none",l.style.display="none"}window.addEventListener("DOMContentLoaded",(()=>{(function({inner:e,slideWindow:t,allSlides:o,arrowLeft:l,arrowRight:r,dots:n,dotsActive:d}){const c=document.querySelector(e),a=document.querySelector(t),i=document.querySelectorAll(o),s=document.querySelector(l),m=document.querySelector(r),u=document.querySelectorAll(n),y=document.querySelectorAll(d);let h=window.getComputedStyle(a).width,v=0;function f(){h=window.getComputedStyle(a).width,c.style.width=h*i.length+"%",i.forEach((e=>{e.style.width=h}))}f(),window.addEventListener("resize",(()=>{let e=document.documentElement.clientWidth;"750px"!=h&&"470px"!=h||e<=1200&&e>=992&&(a.style.width="600px",f()),"600px"==h&&e>1200&&(a.style.width="750px",f()),"600px"!=h&&"370px"!=h||e<=991&&e>=768&&(a.style.width="470px",f()),"470px"!=h&&"300px"!=h||e<=767&&e>=576&&(a.style.width="370px",f()),"370px"==h&&e<576&&(a.style.width="300px",f())})),s.addEventListener("click",(()=>{0==v?v=+h.slice(0,h.length-2)*(i.length-1):v-=h.slice(0,h.length-2),c.style.transform=`translateX(-${v}px)`})),m.addEventListener("click",(()=>{v==+h.slice(0,h.length-2)*(i.length-1)?v=0:v+=+h.slice(0,h.length-2),c.style.transform=`translateX(-${v}px)`})),u.forEach(((e,t)=>{e.addEventListener("click",(()=>{c.style.transform=`translateX(-${+h.slice(0,h.length-2)*t}px)`;let e=t;y.forEach(((t,o)=>{t.classList.remove("slider__dot_active"),o==e&&t.classList.add("slider__dot_active")}))}))}))})({inner:".slider__inner",slideWindow:".slider__window",allSlides:".slider__img",arrowLeft:".slider__arrow-left",arrowRight:".slider__arrow-right",dots:".slider__dot-click",dotsActive:".slider__dot"}),function(e,t){const o=document.querySelectorAll(e),l=document.querySelectorAll(t);o[0].style.display="flex",l.forEach(((e,t)=>{e.addEventListener("click",(r=>{l.forEach((e=>{e.classList.remove("catalog__tab_active")})),r.target.parentElement===e&&e.classList.add("catalog__tab_active"),o.forEach(((e,o)=>{e.style.display=t==o?"flex":"none"}))}))}))}(".catalog__cards",".catalog__tab"),function({more:e,back:t,main:o,other:l,mainActive:r,otherActive:n}){const d=document.querySelectorAll(e),c=document.querySelectorAll(t),a=document.querySelectorAll(o),i=document.querySelectorAll(l);function s(e){e.forEach(((e,t)=>{e.addEventListener("click",(e=>{e.preventDefault(),a[t].classList.toggle(r),i[t].classList.toggle(n)}))}))}s(d),s(c)}({more:".card__more a",back:".card__back a",main:".card__main-side",other:".card__other-side",mainActive:"card__main-side_active",otherActive:"card__other-side_active"}),function({back:o,btnOrder:l,modalOrder:r,close:n,btnBuy:d,modalBuy:c,pulsNames:a,modalName:i,thanks:s}){const m=document.querySelector(o),u=document.querySelectorAll(l),y=document.querySelector(r),h=document.querySelectorAll(d),v=document.querySelector(c),f=document.querySelectorAll(a),_=document.querySelector(s),p=v.querySelector(i);u.forEach((t=>{t.addEventListener("click",(()=>{e(y,m,y,v,_)}))})),m.addEventListener("click",(e=>{e.target.classList.contains("modal__close")&&t(m,y,v,_)})),window.addEventListener("keydown",(e=>{"block"!=window.getComputedStyle(y).display&&"block"!=window.getComputedStyle(v).display&&"block"!=window.getComputedStyle(_).display||"Escape"!=e.key||t(m,y,v,_)})),window.addEventListener("click",(e=>{"block"==window.getComputedStyle(m).display&&e.target==m&&t(m,y,v,_)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(e(y,m,y,v,_),window.removeEventListener("scroll",t))})),h.forEach(((t,o)=>{t.addEventListener("click",(t=>{f.forEach(((e,t)=>{t==o&&(p.textContent=`${f[o].textContent}`)})),e(v,m,y,v,_)}))}))}({back:".overlay",btnOrder:'[data-modal="order"]',modalOrder:"#order",close:".modal__close",btnBuy:".button_price",modalBuy:"#buy",pulsNames:".card__title",modalName:".modal__subheader",thanks:"#thanks"}),function({mainForms:o,formName:l,formPhone:r,formEmail:n,modalThanks:d,modalOrder:c,modalBuy:a,back:i}){const s=document.querySelectorAll(o),m=document.querySelector(i),u=document.querySelector(c),y=document.querySelector(a),h=document.querySelector(d),v=/^[a-zа-я_-]{2,16}$/i,f=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,_=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;let p=!0;function w(o=!1){e(h,m,u,y,h),h.innerHTML=o?'<div class="modal__header">Упс.. произошла ошибка. Попробуйте повторить отправку через несколько минут!</div><div class="modal__close">&#10005;</div>':'<div class="modal__header">Спасибо за вашу заявку!</div><div class="modal__subheader">Наш менеджер свяжется с вами в ближайшее время!</div><div class="modal__close">&#10005;</div>',setTimeout((()=>{t(m,u,y,h)}),4e3)}s.forEach((e=>{const t=e.querySelector(l),o=e.querySelector(r),d=e.querySelector(n);!function(e){let t=document.createElement("div");e.addEventListener("input",(function(){let e=this.value.match(_);t.remove(),this.style.border="",e?p=!1:(p=!0,t.textContent="Пожалуйста введите корректный E-mail",t.classList.add("formError"),this.after(t),this.style.border="2px solid red")}))}(d),function(e){let t=document.createElement("div");e.addEventListener("input",(function(){let e=this.value.match(v);t.remove(),this.style.border="",e?p=!1:(p=!0,t.textContent="Пожалуйста введите действительное имя",t.classList.add("formError"),this.after(t),this.style.border="2px solid red")}))}(t),function(e){let t=document.createElement("div");e.addEventListener("input",(function(){let e=this.value.match(f);t.remove(),this.style.border="",e?p=!1:(p=!0,t.textContent="Пожалуйста введите корректный номер телефона",t.classList.add("formError"),this.after(t),this.style.border="2px solid red")}))}(o),e.addEventListener("submit",(function(l){if(l.preventDefault(),!p&&""!=t.value&&""!=o.value&&""!=d.value&&null!=t.value.match(v)&&null!=o.value.match(f)&&null!=d.value.match(_)){const t=new FormData(this),o=document.createElement("img");o.src="./images/form/spinner.svg",o.style.cssText="display: block; margin: 5px auto;",e.insertAdjacentElement("beforeend",o),async function(e,t){return await fetch("./mailer/smart.php",{method:"POST",body:t})}(0,t).then((e=>{console.log("Отправка письма прошла успшено"),o.remove(),w()})).catch((()=>{console.log("Произошла ошибка при отправке письма"),o.remove(),w(1)})).finally((()=>{e.reset()}))}}))}))}({mainForms:"form",formName:'[name="name"]',formPhone:'[name="phone"]',formEmail:'[name="email"]',modalThanks:"#thanks",modalOrder:"#order",modalBuy:"#buy",back:".overlay"}),function(e){const t=document.querySelector(e),o=document.querySelectorAll('a[href="#up"]'),l=document.querySelector('a[href="#catalog"]');window.addEventListener("scroll",(e=>{window.pageYOffset>1300?t.style.opacity="1":t.style.opacity="0"})),o.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))})),l.addEventListener("click",(e=>{e.preventDefault();const t=l.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))}(".page-up")}))}();
//# sourceMappingURL=bundle.js.map