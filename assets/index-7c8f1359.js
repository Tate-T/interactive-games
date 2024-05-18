(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const fe=document.querySelector(".header-modal");document.querySelector(".interactive-modal");const ve=document.querySelector(".header-modal__input"),xe=document.querySelector(".header-modal__close"),Ie=document.querySelector(".header__user"),Ee=document.querySelector(".header-modal__btn"),Ne=document.querySelector(".container"),O=document.querySelector("a"),Ce=document.querySelector(".header__icon");xe.addEventListener("click",()=>{fe.style.display="none"});Ee.addEventListener("click",()=>{const e=ve.value;Ie.textContent=`${e}`,fe.style.display="none"});const P=document.querySelector(".header__light-btn"),W=document.querySelector(".header__dark-btn"),N=document.querySelector("body"),Se=document.querySelector(".dinosaur__img"),we=document.querySelector(".dinosaur__cactus-img");P.addEventListener("click",()=>{N.style.backgroundColor="#444141",N.classList.add("text-color"),O.classList.add("text-color"),O.style.color="#fff",Ne.style.backgroundColor="transparent",P.style.display="none",W.style.display="block",Ce.style.fill="#fff",Se.style.fill="#fff",we.style.fill="#fff"});W.addEventListener("click",()=>{N.style.backgroundColor="#ffffff",N.classList.remove("text-color"),P.style.display="block",W.style.display="none",O.classList.remove("text-color"),Se.style.fill="#000"});const ee=document.querySelector(".birthday__input"),k=document.querySelector(".birthday__text"),Ae=document.querySelector(".birthday__btn");Ae.addEventListener("click",e=>{e.preventDefault();const t=parseInt(ee.value);k.style.opacity=1,ee.value="",t%4===0&&(t%100!==0||t%400===0)?(k.textContent="Ви народилися у високосний рік!",k.style.color=""):(k.textContent="Ви народилися не у високосний рік!",k.style.color="#900")});const Be=document.querySelector(".guess-number__btn"),I=document.querySelector(".guess-number__result"),E=Math.round(Math.random()*(10-1)+1),te=document.querySelector(".guess-number__input");console.log(E);Be.addEventListener("click",e=>{e.preventDefault(),te.value="";const t=Number(te.value);I.style.opacity=1,E===t?I.textContent=`Вітаю, ви вгадали число! ${E}`:(I.textContent=`Ви програли, комп’ютер загадав ${E}`,I.style.color="#900")});const De=document.querySelector(".rock"),Me=document.querySelector(".scissors"),$e=document.querySelector(".paper"),p=document.querySelector(".rock-paper-scissors__text"),Re=document.querySelector(".rock-paper-scissors__player"),Fe=document.querySelector(".rock-paper-scissors__computer"),Te=document.querySelector(".rock-paper-scissors__btn");let be=0,qe=0,f=null;function Oe(){Re.textContent=`Ви: ${be}`,Fe.textContent=`Комп'ютер: ${qe}`}function Pe(){const e=["rock","paper","scissors"];return e[Math.floor(Math.random()*e.length)]}function We(e,t){p.style.opacity="1",e==="rock"&&t==="scissors"||e==="paper"&&t==="rock"||e==="scissors"&&t==="paper"?(be++,p.textContent="Ви виграли раунд!",p.style.color="#039900"):e!==t?(qe++,p.textContent="Комп’ютер виграв раунд!",p.style.color="#900"):p.textContent="Раунд закінчився внічию!",Oe()}De.addEventListener("click",()=>{f="rock"});$e.addEventListener("click",()=>{f="paper"});Me.addEventListener("click",()=>{f="scissors"});Te.addEventListener("click",()=>{if(f){const e=Pe();We(f,e),f=null}else alert("Будь ласка, спочатку виберіть елемент.")});const se=document.querySelector(".calculator__number1"),He=document.querySelector(".plus"),Ge=document.querySelector(".minus"),Ye=document.querySelector(".multiply"),je=document.querySelector(".divide"),oe=document.querySelector(".calculator__number2"),v=document.querySelector(".calculator__result"),Ue=document.querySelector(".calculator__btn");let n=null,r=0;He.addEventListener("click",()=>{n="+"});Ge.addEventListener("click",()=>{n="-"});Ye.addEventListener("click",()=>{n="*"});je.addEventListener("click",()=>{n="/"});Ue.addEventListener("click",()=>{const e=parseFloat(se.value),t=parseFloat(oe.value);se.value="",oe.value="",n==="+"?(r=e+t,v.textContent=`${r}`):n==="-"?(r=e-t,v.textContent=`${r}`):n==="*"?(r=e*t,v.textContent=`${r}`):n==="/"&&(r=e/t,v.textContent=`${r}`),v.style.color="fieldtext"});console.log(n);const ce=document.querySelector(".time-calculator__input"),Xe=document.querySelector(".time-calculator__btn");let le=document.querySelector(".time-calculator__result");Xe.addEventListener("click",e=>{e.preventDefault();const t=parseFloat(ce.value);if(ce.value="",isNaN(t))le.textContent="Будь ласка, введіть дійсне число.";else{const s=Math.floor(t/1440),l=Math.floor(t%(60*24)/60),o=Math.floor(t%60);le.textContent=`${s} днів, ${l} годин, ${o} хвилин`}});const G=document.querySelector(".dinosaur__img"),ge=document.querySelector(".dinosaur__cactus-img");let _e=!0,C=0;function Je(){_e=!0,Qe()}function Ke(){C=-90,G.style.transform=`translateY(${C}px)`}function Ve(){C=0,G.style.transform=`translateY(${C}px)`}document.addEventListener("keydown",e=>{e.code==="Space"&&Je()});document.addEventListener("keydown",e=>{e.code==="ArrowUp"&&Ke()});document.addEventListener("keyup",()=>{setTimeout(Ve,500)});function ze(){const e=window.innerWidth;ge.style.transform=`translateX(${e}px)`}function Qe(){_e===!0&&setInterval(ze,500)}function Ze(){let e=G.getBoundingClientRect(),t=ge.getBoundingClientRect();e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom&&console.log("Game Over!")}Ze();const a=document.querySelector(".soccer__field"),i=document.querySelector(".soccer__ball");a.addEventListener("click",e=>{let t=a.getBoundingClientRect(),s={top:e.clientY-t.top-a.clientTop-i.clientHeight/2,left:e.clientX-t.left-a.clientLeft-i.clientWidth/2};s.top<0&&(s.top=0),s.left<0&&(s.left=0),s.left+i.clientWidth>a.clientWidth&&(s.left=a.clientWidth-i.clientWidth),s.top+i.clientHeight>a.clientHeight&&(s.top=a.clientHeight-i.clientHeight),i.style.left=s.left+"px",i.style.top=s.top+"px"});const et=document.querySelector(".input1"),tt=document.querySelector(".input2"),Le=document.querySelector(".input3"),st=document.querySelector(".biggest-number__result");function ot(){const e=parseFloat(et.value),t=parseFloat(tt.value),s=parseFloat(Le.value);let l=e;t>e&&t>s?l=t:s>e&&s>t&&(l=s),st.textContent=`Найбільше число, яке ви ввели - ${l}`}Le.addEventListener("input",ot);const ct=document.querySelector(".slider__btn-forward"),lt=document.querySelector(".slider__btn-backward"),m=document.querySelector(".slide1"),S=document.querySelector(".slide2"),b=document.querySelector(".slide3"),d=document.querySelector(".rect1"),u=document.querySelector(".rect2"),y=document.querySelector(".rect3");m.style.display="block";ct.addEventListener("click",()=>{m.style.display==="block"?(m.style.display="none",S.style.display="block",d.style.width="16px",u.style.width="30px",u.style.fill="#797979",d.style.fill="#D9D9D9"):S.style.display==="block"?(S.style.display="none",b.style.display="block",u.style.width="16px",y.style.width="30px",y.style.fill="#797979",u.style.fill="#D9D9D9"):b.style.display==="block"&&(b.style.display="none",m.style.display="block",d.style.width="30px",y.style.width="16px",d.style.fill="#797979",y.style.fill="#D9D9D9")});lt.addEventListener("click",()=>{m.style.display==="block"?(m.style.display="none",b.style.display="block",d.style.width="16px",y.style.width="30px",y.style.fill="#797979",d.style.fill="#D9D9D9"):b.style.display==="block"?(b.style.display="none",S.style.display="block",u.style.width="30px",y.style.width="16px",u.style.fill="#797979",y.style.fill="#D9D9D9"):S.style.display==="block"&&(S.style.display="none",m.style.display="block",d.style.width="30px",u.style.width="16px",d.style.fill="#797979",u.style.fill="#D9D9D9")});const q=document.querySelector(".albert-name"),g=document.querySelector(".albert-age");document.querySelector(".isaac-name");document.querySelector(".isaac-age");const ne=document.querySelector(".galileo-name"),re=document.querySelector(".galileo-age"),w=document.querySelector(".marie-name"),A=document.querySelector(".marie-age");document.querySelector(".johannes-name");document.querySelector(".johannes-age");const ae=document.querySelector(".nicolaus-name"),ie=document.querySelector(".nicolaus-age"),de=document.querySelector(".max-name"),ue=document.querySelector(".max-age"),B=document.querySelector(".kate-name"),D=document.querySelector(".kate-age"),_=document.querySelector(".ada-name"),L=document.querySelector(".ada-age"),ye=document.querySelector(".sarah-name"),me=document.querySelector(".sarah-age"),M=document.querySelector(".lise-name"),$=document.querySelector(".lise-age"),R=document.querySelector(".hanna-name"),F=document.querySelector(".hanna-age"),nt=document.querySelector(".born19century");nt.addEventListener("click",()=>{q.style.opacity=1,g.style.opacity=1,q.classList.add("fadeIn"),g.classList.add("fadeIn"),w.style.opacity=1,A.style.opacity=1,w.classList.add("fadeIn"),A.classList.add("fadeIn"),de.style.opacity=1,ue.style.opacity=1,de.classList.add("fadeIn"),ue.classList.add("fadeIn"),B.style.opacity=1,D.style.opacity=1,B.classList.add("fadeIn"),D.classList.add("fadeIn"),_.style.opacity=1,L.style.opacity=1,_.classList.add("fadeIn"),L.classList.add("fadeIn"),ye.style.opacity=1,me.style.opacity=1,ye.classList.add("fadeIn"),me.classList.add("fadeIn"),M.style.opacity=1,$.style.opacity=1,M.classList.add("fadeIn"),$.classList.add("fadeIn"),R.style.opacity=1,F.style.opacity=1,R.classList.add("fadeIn"),F.classList.add("fadeIn")});const rt=document.querySelector(".find-albert-age");rt.addEventListener("click",()=>{q.style.opacity=1,g.style.opacity=1,q.classList.add("fadeIn"),g.classList.add("fadeIn")});const at=document.querySelector(".find-c-surnames");at.addEventListener("click",()=>{w.style.opacity=1,A.style.opacity=1,w.classList.add("fadeIn"),A.classList.add("fadeIn"),ae.style.opacity=1,ie.style.opacity=1,ae.classList.add("fadeIn"),ie.classList.add("fadeIn")});const it=document.querySelector(".delete-a-names");it.addEventListener("click",()=>{q.style.opacity=0,g.style.opacity=0,q.classList.add("fadeIn"),g.classList.add("fadeIn"),_.style.opacity=0,L.style.opacity=0,_.classList.add("fadeIn"),L.classList.add("fadeIn")});const dt=document.querySelector(".longest-shortest-lives");dt.addEventListener("click",()=>{_.style.opacity=1,L.style.opacity=1,_.classList.add("fadeIn"),L.classList.add("fadeIn"),M.style.opacity=1,$.style.opacity=1,M.classList.add("fadeIn"),$.classList.add("fadeIn")});const ut=document.querySelector(".scientists-alphabet");document.querySelector(".scientists-list");ut.addEventListener("click",()=>{const e=document.querySelector(".scientists-list"),t=Array.from(e.querySelectorAll(".scientists-list__item"));t.sort((s,l)=>{const o=s.querySelector(".scientists-list__name").textContent.toLowerCase(),c=l.querySelector(".scientists-list__name").textContent.toLowerCase();return o.localeCompare(c)}),t.forEach((s,l)=>{e.appendChild(s),s.querySelector(".scientists-list__name").style.opacity=1,s.querySelector(".scientists-list__age").style.opacity=1})});const yt=document.querySelector(".scientists-sort-by-age");yt.addEventListener("click",()=>{const e=document.querySelector(".scientists-list"),t=Array.from(e.querySelectorAll(".scientists-list__item"));t.sort((s,l)=>{const o=s.querySelector(".scientists-list__age").textContent.split("-").map(Number),c=l.querySelector(".scientists-list__age").textContent.split("-").map(Number),h=o[1]-o[0],ke=c[1]-c[0];return h-ke}),t.forEach((s,l)=>{e.appendChild(s),s.querySelector(".scientists-list__name").style.opacity=1,s.querySelector(".scientists-list__age").style.opacity=1})});const mt=document.querySelector(".born-latest");mt.addEventListener("click",()=>{B.style.opacity=1,D.style.opacity=1,B.classList.add("fadeIn"),D.classList.add("fadeIn")});const pt=document.querySelector(".matching-initials");pt.addEventListener("click",()=>{R.style.opacity=1,F.style.opacity=1,R.classList.add("fadeIn"),F.classList.add("fadeIn"),ne.style.opacity=1,re.style.opacity=1,ne.classList.add("fadeIn"),re.classList.add("fadeIn")});const x=document.querySelector(".footer__input"),he=document.querySelector(".footer-modal"),ft=document.querySelector(".footer__btn"),St=document.querySelector(".footer-modal__close"),pe=document.querySelector(".footer__message");console.log(x.value);let H="";x.addEventListener("input",e=>(e.preventDefault(),console.log(e.target.value),H=e.target.value,H));ft.addEventListener("click",e=>{e.preventDefault(),H===""?(x.style.border="solid 1px #e42f2f",pe.classList.remove("hidden")):(he.classList.remove("hidden"),x.style.border="none",x.value="",pe.classList.add("hidden"))});St.addEventListener("click",()=>{he.classList.add("hidden")});const bt=document.querySelector(".header__interactive-btn"),T=document.querySelector(".interactive-modal");document.querySelector(".backdrop");const Y=document.querySelector(".birthday"),j=document.querySelector(".guess-number"),U=document.querySelector(".rock-paper-scissors"),X=document.querySelector(".calculator"),J=document.querySelector(".time-calculator"),K=document.querySelector(".dinosaur"),V=document.querySelector(".soccer"),z=document.querySelector(".biggest-number"),Q=document.querySelector(".team"),Z=document.querySelector(".scientists"),qt=document.querySelector(".interactive-btn__number"),gt=document.querySelector(".interactive-btn__games"),_t=document.querySelector(".interactive-btn__new"),Lt=document.querySelector(".rock-paper-scissors__title"),ht=document.querySelector(".team__title");bt.addEventListener("click",()=>{T.style.display="block"});qt.addEventListener("click",()=>{console.log("Hello"),z.style.display="block",Y.style.display="block",j.style.display="block",X.style.display="block",J.style.display="block",U.style.display="none",K.style.display="none",V.style.display="none",Q.style.display="none",Z.style.display="none",T.style.display="none"});gt.addEventListener("click",()=>{z.style.display="none",Y.style.display="none",j.style.display="none",X.style.display="none",J.style.display="none",U.style.display="block",K.style.display="block",V.style.display="block",Q.style.display="none",Z.style.display="none",Lt.style.border="none",T.style.display="none"});_t.addEventListener("click",()=>{z.style.display="none",Y.style.display="none",j.style.display="none",X.style.display="none",J.style.display="none",U.style.display="none",K.style.display="none",V.style.display="none",Q.style.display="block",Z.style.display="block",ht.style.border="none",T.style.display="none"});