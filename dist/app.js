const btn=document.querySelector(".button"),quote=document.querySelector(".quote-text"),number=document.querySelector(".NumberAdvice");async function getAdvice(){try{const t="https://api.adviceslip.com/advice",e=await fetch(t),c=await e.json();console.log(c);const{advice:o}=c.slip;quote.textContent=`"${o}"`;const{id:n}=c.slip;number.textContent=`ADVICE #${n}`}catch(t){console.log(t)}}btn.addEventListener("click",getAdvice);