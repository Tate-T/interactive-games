(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const q of c.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&l(q)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const ge=document.querySelector(".header-modal");document.querySelector(".interactive-modal");const Ee=document.querySelector(".header-modal__input"),Ne=document.querySelector(".header-modal__close"),Ce=document.querySelector(".header__user"),Be=document.querySelector(".header-modal__btn"),Ae=document.querySelector(".container"),j=document.querySelector("a"),De=document.querySelector(".header__icon");Ne.addEventListener("click",()=>{ge.style.display="none"});Be.addEventListener("click",()=>{const e=Ee.value;Ce.textContent=`${e}`,ge.style.display="none"});const H=document.querySelector(".header__light-btn"),W=document.querySelector(".header__dark-btn"),N=document.querySelector("body"),qe=document.getElementById("dino");document.querySelector(".cactus");const U=document.querySelector(".game");H.addEventListener("click",()=>{N.style.backgroundColor="#444141",N.classList.add("text-color"),j.classList.add("text-color"),j.style.color="#fff",Ae.style.backgroundColor="transparent",H.style.display="none",W.style.display="block",De.style.fill="#fff",qe.style.backgroundImage="url(../../images/white-dino.webp)",U.classList.add("black-bg")});console.log(U);W.addEventListener("click",()=>{N.style.backgroundColor="#ffffff",N.classList.remove("text-color"),H.style.display="block",W.style.display="none",j.classList.remove("text-color"),qe.style.backgroundImage="url(../../images/trex.png)",U.classList.remove("black-bg")});const oe=document.querySelector(".birthday__input"),L=document.querySelector(".birthday__text"),Me=document.querySelector(".birthday__btn");Me.addEventListener("click",e=>{e.preventDefault();const t=parseInt(oe.value);L.style.opacity=1,oe.value="",t%4===0&&(t%100!==0||t%400===0)?(L.textContent="Ви народилися у високосний рік!",L.style.color=""):(L.textContent="Ви народилися не у високосний рік!",L.style.color="#900")});const we=document.querySelector(".guess-number__btn"),h=document.querySelector(".guess-number__result"),I=Math.round(Math.random()*(10-1)+1),ce=document.querySelector(".guess-number__input");console.log(I);we.addEventListener("click",e=>{e.preventDefault(),ce.value="";const t=Number(ce.value);h.style.opacity=1,I===t?h.textContent=`Вітаю, ви вгадали число! ${I}`:(h.textContent=`Ви програли, комп’ютер загадав ${I}`,h.style.color="#900")});const $e=document.querySelector(".rock"),Fe=document.querySelector(".scissors"),Te=document.querySelector(".paper"),u=document.querySelector(".rock-paper-scissors__text"),Re=document.querySelector(".rock-paper-scissors__player"),Pe=document.querySelector(".rock-paper-scissors__computer"),Oe=document.querySelector(".rock-paper-scissors__btn");let Le=0,_e=0,y=null;function je(){Re.textContent=`Ви: ${Le}`,Pe.textContent=`Комп'ютер: ${_e}`}function He(){const e=["rock","paper","scissors"];return e[Math.floor(Math.random()*e.length)]}function We(e,t){u.style.opacity="1",e==="rock"&&t==="scissors"||e==="paper"&&t==="rock"||e==="scissors"&&t==="paper"?(Le++,u.textContent="Ви виграли раунд!",u.style.color="#039900"):e!==t?(_e++,u.textContent="Комп’ютер виграв раунд!",u.style.color="#900"):u.textContent="Раунд закінчився внічию!",je()}$e.addEventListener("click",()=>{y="rock"});Te.addEventListener("click",()=>{y="paper"});Fe.addEventListener("click",()=>{y="scissors"});Oe.addEventListener("click",()=>{if(y){const e=He();We(y,e),y=null}else alert("Будь ласка, спочатку виберіть елемент.")});const le=document.querySelector(".calculator__number1"),Ge=document.querySelector(".plus"),Ve=document.querySelector(".minus"),Ue=document.querySelector(".multiply"),Ye=document.querySelector(".divide"),ne=document.querySelector(".calculator__number2"),_=document.querySelector(".calculator__result"),Ke=document.querySelector(".calculator__btn");let n=null,r=0;Ge.addEventListener("click",()=>{n="+"});Ve.addEventListener("click",()=>{n="-"});Ue.addEventListener("click",()=>{n="*"});Ye.addEventListener("click",()=>{n="/"});Ke.addEventListener("click",()=>{const e=parseFloat(le.value),t=parseFloat(ne.value);le.value="",ne.value="",n==="+"?(r=e+t,_.textContent=`${r}`):n==="-"?(r=e-t,_.textContent=`${r}`):n==="*"?(r=e*t,_.textContent=`${r}`):n==="/"&&(r=e/t,_.textContent=`${r}`),_.style.color="fieldtext"});console.log(n);const re=document.querySelector(".time-calculator__input"),Xe=document.querySelector(".time-calculator__btn");let ae=document.querySelector(".time-calculator__result");Xe.addEventListener("click",e=>{e.preventDefault();const t=parseFloat(re.value);if(re.value="",isNaN(t))ae.textContent="Будь ласка, введіть дійсне число.";else{const s=Math.floor(t/1440),l=Math.floor(t%(60*24)/60),o=Math.floor(t%60);ae.textContent=`${s} днів, ${l} годин, ${o} хвилин`}});const x=document.getElementById("dino"),E=document.querySelector(".cactus");let k=!1,G=!1,ve;const ke=document.querySelector(".game-over"),ze=document.querySelector(".game-over__btn");function Je(){x.classList!="jump"&&(x.classList.add("jump"),setTimeout(function(){x.classList.remove("jump")},500))}function Qe(){k||(k=!0,G=!0,ve=setInterval(Ze,10)),E.classList.add("cactus-animation")}function Ze(){if(G){let e=parseInt(window.getComputedStyle(E).getPropertyValue("left"));E.style.left=e-1+"px";let t=parseInt(window.getComputedStyle(x).getPropertyValue("top"));e<50&&e>0&&t>=140&&(clearInterval(ve),G=!1,ke.classList.remove("game-over-hidden"),k=!1)}k===!1&&E.classList.remove("cactus-animation")}document.addEventListener("keydown",e=>{e.code==="ArrowUp"&&Qe(),Je()});window.addEventListener("load",function(){let e=document.querySelector(".alert");e&&e.addEventListener("click",function(){k||location.reload()})});ze.addEventListener("click",()=>{ke.classList.toggle("game-over-hidden")});const a=document.querySelector(".soccer__field"),i=document.querySelector(".soccer__ball");a.addEventListener("click",e=>{let t=a.getBoundingClientRect(),s={top:e.clientY-t.top-a.clientTop-i.clientHeight/2,left:e.clientX-t.left-a.clientLeft-i.clientWidth/2};s.top<0&&(s.top=0),s.left<0&&(s.left=0),s.left+i.clientWidth>a.clientWidth&&(s.left=a.clientWidth-i.clientWidth),s.top+i.clientHeight>a.clientHeight&&(s.top=a.clientHeight-i.clientHeight),i.style.left=s.left+"px",i.style.top=s.top+"px"});const et=document.querySelector(".input1"),tt=document.querySelector(".input2"),he=document.querySelector(".input3"),st=document.querySelector(".biggest-number__result");function ot(){const e=parseFloat(et.value),t=parseFloat(tt.value),s=parseFloat(he.value);let l=e;t>e&&t>s?l=t:s>e&&s>t&&(l=s),st.textContent=`Найбільше число, яке ви ввели - ${l}`}he.addEventListener("input",ot);const ct=document.querySelector(".slider__btn-forward"),lt=document.querySelector(".slider__btn-backward"),d=document.querySelector(".slide1"),m=document.querySelector(".slide2"),p=document.querySelector(".slide3"),C=document.querySelector(".rect1"),B=document.querySelector(".rect2"),A=document.querySelector(".rect3");d.style.display="block";ct.addEventListener("click",()=>{d.style.display==="block"?(d.style.display="none",m.style.display="block",B.style.fill="#797979",C.style.fill="#D9D9D9"):m.style.display==="block"?(m.style.display="none",p.style.display="block",A.style.fill="#797979",B.style.fill="#D9D9D9"):p.style.display==="block"&&(p.style.display="none",d.style.display="block",C.style.fill="#797979",A.style.fill="#D9D9D9")});lt.addEventListener("click",()=>{d.style.display==="block"?(d.style.display="none",p.style.display="block",A.style.fill="#797979",C.style.fill="#D9D9D9"):p.style.display==="block"?(p.style.display="none",m.style.display="block",B.style.fill="#797979",A.style.fill="#D9D9D9"):m.style.display==="block"&&(m.style.display="none",d.style.display="block",C.style.fill="#797979",B.style.fill="#D9D9D9")});const f=document.querySelector(".albert-name"),S=document.querySelector(".albert-age");document.querySelector(".isaac-name");document.querySelector(".isaac-age");const ie=document.querySelector(".galileo-name"),de=document.querySelector(".galileo-age"),D=document.querySelector(".marie-name"),M=document.querySelector(".marie-age");document.querySelector(".johannes-name");document.querySelector(".johannes-age");const ue=document.querySelector(".nicolaus-name"),ye=document.querySelector(".nicolaus-age"),me=document.querySelector(".max-name"),pe=document.querySelector(".max-age"),w=document.querySelector(".kate-name"),$=document.querySelector(".kate-age"),b=document.querySelector(".ada-name"),g=document.querySelector(".ada-age"),fe=document.querySelector(".sarah-name"),Se=document.querySelector(".sarah-age"),F=document.querySelector(".lise-name"),T=document.querySelector(".lise-age"),R=document.querySelector(".hanna-name"),P=document.querySelector(".hanna-age"),nt=document.querySelector(".born19century");nt.addEventListener("click",()=>{f.style.opacity=1,S.style.opacity=1,f.classList.add("fadeIn"),S.classList.add("fadeIn"),D.style.opacity=1,M.style.opacity=1,D.classList.add("fadeIn"),M.classList.add("fadeIn"),me.style.opacity=1,pe.style.opacity=1,me.classList.add("fadeIn"),pe.classList.add("fadeIn"),w.style.opacity=1,$.style.opacity=1,w.classList.add("fadeIn"),$.classList.add("fadeIn"),b.style.opacity=1,g.style.opacity=1,b.classList.add("fadeIn"),g.classList.add("fadeIn"),fe.style.opacity=1,Se.style.opacity=1,fe.classList.add("fadeIn"),Se.classList.add("fadeIn"),F.style.opacity=1,T.style.opacity=1,F.classList.add("fadeIn"),T.classList.add("fadeIn"),R.style.opacity=1,P.style.opacity=1,R.classList.add("fadeIn"),P.classList.add("fadeIn")});const rt=document.querySelector(".find-albert-age");rt.addEventListener("click",()=>{f.style.opacity=1,S.style.opacity=1,f.classList.add("fadeIn"),S.classList.add("fadeIn")});const at=document.querySelector(".find-c-surnames");at.addEventListener("click",()=>{D.style.opacity=1,M.style.opacity=1,D.classList.add("fadeIn"),M.classList.add("fadeIn"),ue.style.opacity=1,ye.style.opacity=1,ue.classList.add("fadeIn"),ye.classList.add("fadeIn")});const it=document.querySelector(".delete-a-names");it.addEventListener("click",()=>{f.style.opacity=0,S.style.opacity=0,f.classList.add("fadeIn"),S.classList.add("fadeIn"),b.style.opacity=0,g.style.opacity=0,b.classList.add("fadeIn"),g.classList.add("fadeIn")});const dt=document.querySelector(".longest-shortest-lives");dt.addEventListener("click",()=>{b.style.opacity=1,g.style.opacity=1,b.classList.add("fadeIn"),g.classList.add("fadeIn"),F.style.opacity=1,T.style.opacity=1,F.classList.add("fadeIn"),T.classList.add("fadeIn")});const ut=document.querySelector(".scientists-alphabet");document.querySelector(".scientists-list");ut.addEventListener("click",()=>{const e=document.querySelector(".scientists-list"),t=Array.from(e.querySelectorAll(".scientists-list__item"));t.sort((s,l)=>{const o=s.querySelector(".scientists-list__name").textContent.toLowerCase(),c=l.querySelector(".scientists-list__name").textContent.toLowerCase();return o.localeCompare(c)}),t.forEach((s,l)=>{e.appendChild(s),s.querySelector(".scientists-list__name").style.opacity=1,s.querySelector(".scientists-list__age").style.opacity=1})});const yt=document.querySelector(".scientists-sort-by-age");yt.addEventListener("click",()=>{const e=document.querySelector(".scientists-list"),t=Array.from(e.querySelectorAll(".scientists-list__item"));t.sort((s,l)=>{const o=s.querySelector(".scientists-list__age").textContent.split("-").map(Number),c=l.querySelector(".scientists-list__age").textContent.split("-").map(Number),q=o[1]-o[0],xe=c[1]-c[0];return q-xe}),t.forEach((s,l)=>{e.appendChild(s),s.querySelector(".scientists-list__name").style.opacity=1,s.querySelector(".scientists-list__age").style.opacity=1})});const mt=document.querySelector(".born-latest");mt.addEventListener("click",()=>{w.style.opacity=1,$.style.opacity=1,w.classList.add("fadeIn"),$.classList.add("fadeIn")});const pt=document.querySelector(".matching-initials");pt.addEventListener("click",()=>{R.style.opacity=1,P.style.opacity=1,R.classList.add("fadeIn"),P.classList.add("fadeIn"),ie.style.opacity=1,de.style.opacity=1,ie.classList.add("fadeIn"),de.classList.add("fadeIn")});const v=document.querySelector(".footer__input"),Ie=document.querySelector(".footer-modal"),ft=document.querySelector(".footer__btn"),St=document.querySelector(".footer-modal__close"),be=document.querySelector(".footer__message");console.log(v.value);let V="";v.addEventListener("input",e=>(e.preventDefault(),console.log(e.target.value),V=e.target.value,V));ft.addEventListener("click",e=>{e.preventDefault(),V===""?(v.style.border="solid 1px #e42f2f",be.classList.remove("hidden")):(Ie.classList.remove("hidden"),v.style.border="none",v.value="",be.classList.add("hidden"))});St.addEventListener("click",()=>{Ie.classList.add("hidden")});const bt=document.querySelector(".header__interactive-btn"),O=document.querySelector(".interactive-modal");document.querySelector(".backdrop");const Y=document.querySelector(".birthday"),K=document.querySelector(".guess-number"),X=document.querySelector(".rock-paper-scissors"),z=document.querySelector(".calculator"),J=document.querySelector(".time-calculator"),Q=document.querySelector(".dinosaur"),Z=document.querySelector(".soccer"),ee=document.querySelector(".biggest-number"),te=document.querySelector(".team"),se=document.querySelector(".scientists"),gt=document.querySelector(".interactive-btn__number"),qt=document.querySelector(".interactive-btn__games"),Lt=document.querySelector(".interactive-btn__new"),_t=document.querySelector(".rock-paper-scissors__title"),vt=document.querySelector(".team__title");bt.addEventListener("click",()=>{O.style.display="block"});gt.addEventListener("click",()=>{console.log("Hello"),ee.style.display="block",Y.style.display="block",K.style.display="block",z.style.display="block",J.style.display="block",X.style.display="none",Q.style.display="none",Z.style.display="none",te.style.display="none",se.style.display="none",O.style.display="none"});qt.addEventListener("click",()=>{ee.style.display="none",Y.style.display="none",K.style.display="none",z.style.display="none",J.style.display="none",X.style.display="block",Q.style.display="block",Z.style.display="block",te.style.display="none",se.style.display="none",_t.style.border="none",O.style.display="none"});Lt.addEventListener("click",()=>{ee.style.display="none",Y.style.display="none",K.style.display="none",z.style.display="none",J.style.display="none",X.style.display="none",Q.style.display="none",Z.style.display="none",te.style.display="block",se.style.display="block",vt.style.border="none",O.style.display="none"});
