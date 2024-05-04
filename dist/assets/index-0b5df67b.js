(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const be=document.querySelector(".header-modal");document.querySelector(".interactive-modal");const Ie=document.querySelector(".header-modal__input"),xe=document.querySelector(".header-modal__close"),Ee=document.querySelector(".header__user"),Ne=document.querySelector(".header-modal__btn"),Ce=document.querySelector(".container"),O=document.querySelector("a"),Be=document.querySelector(".header__icon");xe.addEventListener("click",()=>{be.style.display="none"});Ne.addEventListener("click",()=>{const e=Ie.value;Ee.textContent=`${e}`,be.style.display="none"});const j=document.querySelector(".header__light-btn"),H=document.querySelector(".header__dark-btn"),x=document.querySelector("body"),qe=document.querySelector(".dinosaur__img"),Ae=document.querySelector(".dinosaur__cactus-img");j.addEventListener("click",()=>{x.style.backgroundColor="#444141",x.classList.add("text-color"),O.classList.add("text-color"),O.style.color="#fff",Ce.style.backgroundColor="transparent",j.style.display="none",H.style.display="block",Be.style.fill="#fff",qe.style.fill="#fff",Ae.style.fill="#fff"});H.addEventListener("click",()=>{x.style.backgroundColor="#ffffff",x.classList.remove("text-color"),j.style.display="block",H.style.display="none",O.classList.remove("text-color"),qe.style.fill="#000"});const te=document.querySelector(".birthday__input"),_=document.querySelector(".birthday__text"),De=document.querySelector(".birthday__btn");De.addEventListener("click",e=>{e.preventDefault();const t=parseInt(te.value);_.style.opacity=1,te.value="",t%4===0&&(t%100!==0||t%400===0)?(_.textContent="Ви народилися у високосний рік!",_.style.color=""):(_.textContent="Ви народилися не у високосний рік!",_.style.color="#900")});const Me=document.querySelector(".guess-number__btn"),k=document.querySelector(".guess-number__result"),h=Math.round(Math.random()*(10-1)+1),se=document.querySelector(".guess-number__input");console.log(h);Me.addEventListener("click",e=>{e.preventDefault(),se.value="";const t=Number(se.value);k.style.opacity=1,h===t?k.textContent=`Вітаю, ви вгадали число! ${h}`:(k.textContent=`Ви програли, комп’ютер загадав ${h}`,k.style.color="#900")});const we=document.querySelector(".rock"),$e=document.querySelector(".scissors"),Fe=document.querySelector(".paper"),u=document.querySelector(".rock-paper-scissors__text"),Te=document.querySelector(".rock-paper-scissors__player"),Re=document.querySelector(".rock-paper-scissors__computer"),Pe=document.querySelector(".rock-paper-scissors__btn");let ge=0,_e=0,y=null;function Oe(){Te.textContent=`Ви: ${ge}`,Re.textContent=`Комп'ютер: ${_e}`}function je(){const e=["rock","paper","scissors"];return e[Math.floor(Math.random()*e.length)]}function He(e,t){u.style.opacity="1",e==="rock"&&t==="scissors"||e==="paper"&&t==="rock"||e==="scissors"&&t==="paper"?(ge++,u.textContent="Ви виграли раунд!",u.style.color="#039900"):e!==t?(_e++,u.textContent="Комп’ютер виграв раунд!",u.style.color="#900"):u.textContent="Раунд закінчився внічию!",Oe()}we.addEventListener("click",()=>{y="rock"});Fe.addEventListener("click",()=>{y="paper"});$e.addEventListener("click",()=>{y="scissors"});Pe.addEventListener("click",()=>{if(y){const e=je();He(y,e),y=null}else alert("Будь ласка, спочатку виберіть елемент.")});const oe=document.querySelector(".calculator__number1"),We=document.querySelector(".plus"),Ge=document.querySelector(".minus"),Ve=document.querySelector(".multiply"),Ue=document.querySelector(".divide"),ce=document.querySelector(".calculator__number2"),L=document.querySelector(".calculator__result"),Ye=document.querySelector(".calculator__btn");let n=null,r=0;We.addEventListener("click",()=>{n="+"});Ge.addEventListener("click",()=>{n="-"});Ve.addEventListener("click",()=>{n="*"});Ue.addEventListener("click",()=>{n="/"});Ye.addEventListener("click",()=>{const e=parseFloat(oe.value),t=parseFloat(ce.value);oe.value="",ce.value="",n==="+"?(r=e+t,L.textContent=`${r}`):n==="-"?(r=e-t,L.textContent=`${r}`):n==="*"?(r=e*t,L.textContent=`${r}`):n==="/"&&(r=e/t,L.textContent=`${r}`),L.style.color="fieldtext"});console.log(n);const le=document.querySelector(".time-calculator__input"),Ke=document.querySelector(".time-calculator__btn");let ne=document.querySelector(".time-calculator__result");Ke.addEventListener("click",e=>{e.preventDefault();const t=parseFloat(le.value);if(le.value="",isNaN(t))ne.textContent="Будь ласка, введіть дійсне число.";else{const s=Math.floor(t/1440),l=Math.floor(t%(60*24)/60),o=Math.floor(t%60);ne.textContent=`${s} днів, ${l} годин, ${o} хвилин`}});const I=document.getElementById("dino"),re=document.getElementById("cactus");let E=!1,W=!1,Le;function Xe(){I.classList!="jump"&&(I.classList.add("jump"),setTimeout(function(){I.classList.remove("jump")},500))}function ze(){E||(E=!0,W=!0,Le=setInterval(Je,10))}function Je(){if(W){let e=parseInt(window.getComputedStyle(re).getPropertyValue("left"));re.style.left=e-1+"px";let t=parseInt(window.getComputedStyle(I).getPropertyValue("top"));e<50&&e>0&&t>=140&&(clearInterval(Le),W=!1,alert("Game Over!"),E=!1)}}document.addEventListener("keydown",e=>{e.code==="ArrowUp"&&ze(),Xe()});window.addEventListener("load",function(){let e=document.querySelector(".alert");e&&e.addEventListener("click",function(){E||location.reload()})});const a=document.querySelector(".soccer__field"),i=document.querySelector(".soccer__ball");a.addEventListener("click",e=>{let t=a.getBoundingClientRect(),s={top:e.clientY-t.top-a.clientTop-i.clientHeight/2,left:e.clientX-t.left-a.clientLeft-i.clientWidth/2};s.top<0&&(s.top=0),s.left<0&&(s.left=0),s.left+i.clientWidth>a.clientWidth&&(s.left=a.clientWidth-i.clientWidth),s.top+i.clientHeight>a.clientHeight&&(s.top=a.clientHeight-i.clientHeight),i.style.left=s.left+"px",i.style.top=s.top+"px"});const Qe=document.querySelector(".input1"),Ze=document.querySelector(".input2"),ve=document.querySelector(".input3"),et=document.querySelector(".biggest-number__result");function tt(){const e=parseFloat(Qe.value),t=parseFloat(Ze.value),s=parseFloat(ve.value);let l=e;t>e&&t>s?l=t:s>e&&s>t&&(l=s),et.textContent=`Найбільше число, яке ви ввели - ${l}`}ve.addEventListener("input",tt);const st=document.querySelector(".slider__btn-forward"),ot=document.querySelector(".slider__btn-backward"),d=document.querySelector(".slide1"),m=document.querySelector(".slide2"),p=document.querySelector(".slide3"),N=document.querySelector(".rect1"),C=document.querySelector(".rect2"),B=document.querySelector(".rect3");d.style.display="block";st.addEventListener("click",()=>{d.style.display==="block"?(d.style.display="none",m.style.display="block",C.style.fill="#797979",N.style.fill="#D9D9D9"):m.style.display==="block"?(m.style.display="none",p.style.display="block",B.style.fill="#797979",C.style.fill="#D9D9D9"):p.style.display==="block"&&(p.style.display="none",d.style.display="block",N.style.fill="#797979",B.style.fill="#D9D9D9")});ot.addEventListener("click",()=>{d.style.display==="block"?(d.style.display="none",p.style.display="block",B.style.fill="#797979",N.style.fill="#D9D9D9"):p.style.display==="block"?(p.style.display="none",m.style.display="block",C.style.fill="#797979",B.style.fill="#D9D9D9"):m.style.display==="block"&&(m.style.display="none",d.style.display="block",N.style.fill="#797979",C.style.fill="#D9D9D9")});const f=document.querySelector(".albert-name"),S=document.querySelector(".albert-age");document.querySelector(".isaac-name");document.querySelector(".isaac-age");const ae=document.querySelector(".galileo-name"),ie=document.querySelector(".galileo-age"),A=document.querySelector(".marie-name"),D=document.querySelector(".marie-age");document.querySelector(".johannes-name");document.querySelector(".johannes-age");const de=document.querySelector(".nicolaus-name"),ue=document.querySelector(".nicolaus-age"),ye=document.querySelector(".max-name"),me=document.querySelector(".max-age"),M=document.querySelector(".kate-name"),w=document.querySelector(".kate-age"),b=document.querySelector(".ada-name"),q=document.querySelector(".ada-age"),pe=document.querySelector(".sarah-name"),fe=document.querySelector(".sarah-age"),$=document.querySelector(".lise-name"),F=document.querySelector(".lise-age"),T=document.querySelector(".hanna-name"),R=document.querySelector(".hanna-age"),ct=document.querySelector(".born19century");ct.addEventListener("click",()=>{f.style.opacity=1,S.style.opacity=1,f.classList.add("fadeIn"),S.classList.add("fadeIn"),A.style.opacity=1,D.style.opacity=1,A.classList.add("fadeIn"),D.classList.add("fadeIn"),ye.style.opacity=1,me.style.opacity=1,ye.classList.add("fadeIn"),me.classList.add("fadeIn"),M.style.opacity=1,w.style.opacity=1,M.classList.add("fadeIn"),w.classList.add("fadeIn"),b.style.opacity=1,q.style.opacity=1,b.classList.add("fadeIn"),q.classList.add("fadeIn"),pe.style.opacity=1,fe.style.opacity=1,pe.classList.add("fadeIn"),fe.classList.add("fadeIn"),$.style.opacity=1,F.style.opacity=1,$.classList.add("fadeIn"),F.classList.add("fadeIn"),T.style.opacity=1,R.style.opacity=1,T.classList.add("fadeIn"),R.classList.add("fadeIn")});const lt=document.querySelector(".find-albert-age");lt.addEventListener("click",()=>{f.style.opacity=1,S.style.opacity=1,f.classList.add("fadeIn"),S.classList.add("fadeIn")});const nt=document.querySelector(".find-c-surnames");nt.addEventListener("click",()=>{A.style.opacity=1,D.style.opacity=1,A.classList.add("fadeIn"),D.classList.add("fadeIn"),de.style.opacity=1,ue.style.opacity=1,de.classList.add("fadeIn"),ue.classList.add("fadeIn")});const rt=document.querySelector(".delete-a-names");rt.addEventListener("click",()=>{f.style.opacity=0,S.style.opacity=0,f.classList.add("fadeIn"),S.classList.add("fadeIn"),b.style.opacity=0,q.style.opacity=0,b.classList.add("fadeIn"),q.classList.add("fadeIn")});const at=document.querySelector(".longest-shortest-lives");at.addEventListener("click",()=>{b.style.opacity=1,q.style.opacity=1,b.classList.add("fadeIn"),q.classList.add("fadeIn"),$.style.opacity=1,F.style.opacity=1,$.classList.add("fadeIn"),F.classList.add("fadeIn")});const it=document.querySelector(".scientists-alphabet");document.querySelector(".scientists-list");it.addEventListener("click",()=>{const e=document.querySelector(".scientists-list"),t=Array.from(e.querySelectorAll(".scientists-list__item"));t.sort((s,l)=>{const o=s.querySelector(".scientists-list__name").textContent.toLowerCase(),c=l.querySelector(".scientists-list__name").textContent.toLowerCase();return o.localeCompare(c)}),t.forEach((s,l)=>{e.appendChild(s),s.querySelector(".scientists-list__name").style.opacity=1,s.querySelector(".scientists-list__age").style.opacity=1})});const dt=document.querySelector(".scientists-sort-by-age");dt.addEventListener("click",()=>{const e=document.querySelector(".scientists-list"),t=Array.from(e.querySelectorAll(".scientists-list__item"));t.sort((s,l)=>{const o=s.querySelector(".scientists-list__age").textContent.split("-").map(Number),c=l.querySelector(".scientists-list__age").textContent.split("-").map(Number),g=o[1]-o[0],he=c[1]-c[0];return g-he}),t.forEach((s,l)=>{e.appendChild(s),s.querySelector(".scientists-list__name").style.opacity=1,s.querySelector(".scientists-list__age").style.opacity=1})});const ut=document.querySelector(".born-latest");ut.addEventListener("click",()=>{M.style.opacity=1,w.style.opacity=1,M.classList.add("fadeIn"),w.classList.add("fadeIn")});const yt=document.querySelector(".matching-initials");yt.addEventListener("click",()=>{T.style.opacity=1,R.style.opacity=1,T.classList.add("fadeIn"),R.classList.add("fadeIn"),ae.style.opacity=1,ie.style.opacity=1,ae.classList.add("fadeIn"),ie.classList.add("fadeIn")});const v=document.querySelector(".footer__input"),ke=document.querySelector(".footer-modal"),mt=document.querySelector(".footer__btn"),pt=document.querySelector(".footer-modal__close"),Se=document.querySelector(".footer__message");console.log(v.value);let G="";v.addEventListener("input",e=>(e.preventDefault(),console.log(e.target.value),G=e.target.value,G));mt.addEventListener("click",e=>{e.preventDefault(),G===""?(v.style.border="solid 1px #e42f2f",Se.classList.remove("hidden")):(ke.classList.remove("hidden"),v.style.border="none",v.value="",Se.classList.add("hidden"))});pt.addEventListener("click",()=>{ke.classList.add("hidden")});const ft=document.querySelector(".header__interactive-btn"),P=document.querySelector(".interactive-modal");document.querySelector(".backdrop");const V=document.querySelector(".birthday"),U=document.querySelector(".guess-number"),Y=document.querySelector(".rock-paper-scissors"),K=document.querySelector(".calculator"),X=document.querySelector(".time-calculator"),z=document.querySelector(".dinosaur"),J=document.querySelector(".soccer"),Q=document.querySelector(".biggest-number"),Z=document.querySelector(".team"),ee=document.querySelector(".scientists"),St=document.querySelector(".interactive-btn__number"),bt=document.querySelector(".interactive-btn__games"),qt=document.querySelector(".interactive-btn__new"),gt=document.querySelector(".rock-paper-scissors__title"),_t=document.querySelector(".team__title");ft.addEventListener("click",()=>{P.style.display="block"});St.addEventListener("click",()=>{console.log("Hello"),Q.style.display="block",V.style.display="block",U.style.display="block",K.style.display="block",X.style.display="block",Y.style.display="none",z.style.display="none",J.style.display="none",Z.style.display="none",ee.style.display="none",P.style.display="none"});bt.addEventListener("click",()=>{Q.style.display="none",V.style.display="none",U.style.display="none",K.style.display="none",X.style.display="none",Y.style.display="block",z.style.display="block",J.style.display="block",Z.style.display="none",ee.style.display="none",gt.style.border="none",P.style.display="none"});qt.addEventListener("click",()=>{Q.style.display="none",V.style.display="none",U.style.display="none",K.style.display="none",X.style.display="none",Y.style.display="none",z.style.display="none",J.style.display="none",Z.style.display="block",ee.style.display="block",_t.style.border="none",P.style.display="none"});