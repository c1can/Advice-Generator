const btn=document.querySelector(".button"),quote=document.querySelector(".quote-text"),number=document.querySelector(".NumberAdvice");async function getAdvice(){try{const t="https://api.adviceslip.com/advice",e=await fetch(t),c=await e.json(),{advice:n}=c.slip;quote.textContent=`"${n}"`;const{id:o}=c.slip;number.textContent=`ADVICE #${o}`}catch(t){console.log(t)}}btn.addEventListener("click",getAdvice);