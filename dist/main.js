(()=>{"use strict";const e=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)};function t(e){const t=document.createElement("p");return t.textContent=e,t}const n=function(){const n=document.getElementById("main");e(n),n.appendChild(function(){const e=document.createElement("div");return e.classList.add("home"),e.appendChild(t("Play Rock Paper Scissors against an AI that learns as you play!")),e.appendChild(t('Go to the "Play vs Bot" tab to play. The AI improves its predictive model each time you make a selection. Click the "Start Match" button to start a match up to any number of rounds of your choosing.')),e.appendChild(t('You can see the results of the AI training under the "Neural Networks" tab. You can pause/resume/reset the training by pressing the respective buttons.')),e}())};let o={playerScore:0,computerScore:0,matchOngoing:!1,winningScore:null,playerSelection:null,computerSelection:null,roundOutcome:null,matchOutcome:null,scoreboardText:'Click "Start Match" to play up to any number of rounds of your choosing.',inputLayer:[0,0,0,0,0,0]};const c=()=>o,r=e=>{o=e};let i=c(),s=null;const a=function(){for(s=prompt("Play up to how many wins?",5);!(Number.isInteger(Number(s))&&Number(s)>0);)s=prompt("Play up to how many wins? (Please enter a positive integer)",5);i.winningScore=s,i.matchOngoing=!0,i.matchOutcome="ONGOING",i.playerScore=0,i.computerScore=0,i.scoreboardText=`Playing to ${i.winningScore} wins. (Best of ${2*i.winningScore-1})`,r(i),T()};let l=20,d=.1,u=.5,p=100;function m(){let e=[],t=[];for(let e=0;e<l;e++){let e=[];for(let t=0;t<6;t++)e.push(h(-1,1));t.push(e)}e.push(t);let n=[];for(let e=0;e<l;e++)n.push(h(-1,1));e.push(n);let o=[];for(let e=0;e<l;e++){let e=[];for(let t=0;t<l;t++)e.push(h(-1,1));o.push(e)}e.push(o);let c=[];for(let e=0;e<l;e++)c.push(h(-1,1));e.push(c);let r=[];for(let e=0;e<3;e++){let e=[];for(let t=0;t<l;t++)e.push(h(-1,1));r.push(e)}e.push(r);let i=[];for(let e=0;e<3;e++)i.push(h(-1,1));return e.push(i),e}function h(e,t){return Math.random()*(t-e)+e}function C(e,t){let n=f(e[0],e[1],t);n=n.map((e=>Math.max(0,Math.tanh(e))));let o=f(e[2],e[3],n);o=o.map((e=>Math.max(0,Math.tanh(e))));let c=f(e[4],e[5],o);c=c.map((e=>function(e){return 1/(1+Math.exp(-e))}(e)));let r=c.reduce(((e,t)=>e+t),0);c=c.map((e=>e/r));let i,s=function(e){let t=e[0];for(let n=0;n<e.length;n++)e[n]>t&&(t=e[n]);return t}(c);return c[0]===s?i={memberSelection:"ROCK",rockConfidence:c[0],paperConfidence:c[1],scissorConfidence:c[2]}:c[1]===s?i={memberSelection:"PAPER",rockConfidence:c[0],paperConfidence:c[1],scissorConfidence:c[2]}:c[2]===s&&(i={memberSelection:"SCISSOR",rockConfidence:c[0],paperConfidence:c[1],scissorConfidence:c[2]}),i}function f(e,t,n){let o=t.length,c=n.length,r=[];for(let i=0;i<o;i++){let o=0;for(let t=0;t<c;t++)o+=e[i][t]*n[t];o+=t[i],r.push(o)}return r}function g(e){let t=[];for(let n=0;n<e[0].length;n++){let o=[];for(let t=0;t<e[0][n].length;t++)o.push(e[0][n][t]);t.push(o)}let n=[];for(let t=0;t<e[1].length;t++)n.push(e[1][t]);let o=[];for(let t=0;t<e[2].length;t++){let n=[];for(let o=0;o<e[2][t].length;o++)n.push(e[2][t][o]);o.push(n)}let c=[];for(let t=0;t<e[3].length;t++)c.push(e[3][t]);let r=[];for(let t=0;t<e[4].length;t++){let n=[];for(let o=0;o<e[4][t].length;o++)n.push(e[4][t][o]);r.push(n)}let i=[];for(let t=0;t<e[5].length;t++)i.push(e[5][t]);let s,a,l=[];for(let e=0;e<t.length;e++)for(let n=0;n<t[e].length;n++)s=S(t[e].length),s[n]<d&&(t[e][n]=h(-1,1)),a=S(t[e].length),a[n]<u&&(t[e][n]*=h(.9,1.1)),t[e][n]>1&&(t[e][n]=1),t[e][n]<-1&&(t[e][n]=-1);l.push(t),s=S(n.length),a=S(n.length);for(let e=0;e<n.length;e++)s[e]<d&&(n[e]=h(-1,1)),a[e]<u&&(n[e]*=h(.9,1.1)),n[e]>1&&(n[e]=1),n[e]<-1&&(n[e]=-1);l.push(n);for(let e=0;e<o.length;e++)for(let t=0;t<o[e].length;t++)s=S(o[e].length),s[t]<d&&(o[e][t]=h(-1,1)),a=S(o[e].length),a[t]<u&&(o[e][t]*=h(.9,1.1)),o[e][t]>1&&(o[e][t]=1),o[e][t]<-1&&(o[e][t]=-1);l.push(o),s=S(c.length),a=S(c.length);for(let e=0;e<c.length;e++)s[e]<d&&(c[e]=h(-1,1)),a[e]<u&&(c[e]*=h(.9,1.1)),c[e]>1&&(c[e]=1),c[e]<-1&&(c[e]=-1);l.push(c);for(let e=0;e<r.length;e++)for(let t=0;t<r[e].length;t++)s=S(r[e].length),s[t]<d&&(r[e][t]=h(-1,1)),a=S(r[e].length),a[t]<u&&(r[e][t]*=h(.9,1.1)),r[e][t]>1&&(r[e][t]=1),r[e][t]<-1&&(r[e][t]=-1);l.push(r),s=S(i.length),a=S(i.length);for(let e=0;e<i.length;e++)s[e]<d&&(i[e]=h(-1,1)),a[e]<u&&(i[e]*=h(.9,1.1)),i[e]>1&&(i[e]=1),i[e]<-1&&(i[e]=-1);return l.push(i),l}function S(e){let t=[];for(let n=0;n<e;n++)t.push(h(0,1));return t}let E=c(),b=[];function L(e){return{brain:e,score:0,age:0,prediction:null,confidence:null,rockConfidence:null,paperConfidence:null,scissorConfidence:null,score1:1/3,score2:1/3,score3:1/3,score4:1/3,score5:1/3}}function y(){b=[];for(let e=0;e<p;e++)b.push(L(m()))}let O={currentlyTraining:!0};function R(){return O}let v=c();const P=e=>e.reduce(((e,t)=>e+t))/e.length;let k=c(),x=R();const I=function(e){let t=null;"rock-selection"===e?t="ROCK":"paper-selection"===e?t="PAPER":"scissor-selection"===e&&(t="SCISSOR");let n=function(){let e=0,t=0,n=0,o=0,c=0,r=0;for(let i=0;i<p;i++){let s=C(b[i].brain,E.inputLayer);"ROCK"===s.memberSelection?(b[i].prediction="ROCK",b[i].confidence=s.rockConfidence,e+=1,o+=b[i].score):"PAPER"===s.memberSelection?(b[i].prediction="PAPER",b[i].confidence=s.paperConfidence,t+=1,c+=b[i].score):"SCISSOR"===s.memberSelection&&(b[i].prediction="SCISSOR",b[i].confidence=s.scissorConfidence,n+=1,r+=b[i].score),b[i].rockConfidence=s.rockConfidence,b[i].paperConfidence=s.paperConfidence,b[i].scissorConfidence=s.scissorConfidence}return e>t&&e>n?"ROCK":t>e&&t>n?"PAPER":n>e&&n>t?"SCISSOR":o>c&&o>r?"ROCK":c>o&&c>r?"PAPER":r>o&&r>c?"SCISSOR":"ROCK"}();k.playerSelection=t,k.computerSelection=n,t===n?k.roundOutcome="TIE":"ROCK"===t?"PAPER"===n?k.roundOutcome="LOSS":"SCISSOR"===n&&(k.roundOutcome="WIN"):"PAPER"===t?"SCISSOR"===n?k.roundOutcome="LOSS":"ROCK"===n&&(k.roundOutcome="WIN"):"SCISSOR"===t&&("ROCK"===n?k.roundOutcome="LOSS":"PAPER"===n&&(k.roundOutcome="WIN")),!0===k.matchOngoing&&("WIN"===k.roundOutcome?k.playerScore+=1:"LOSS"===k.roundOutcome&&(k.computerScore+=1)),k.playerScore==k.winningScore?(k.matchOngoing=!1,k.matchOutcome="WIN",k.scoreboardText="You won! Final Score:"):k.computerScore==k.winningScore&&(k.matchOngoing=!1,k.matchOutcome="LOSS",k.scoreboardText="You lost! Final Score:"),"ROCK"===t?"ROCK"===n?k.inputLayer=[1,0,0,1,0,0]:"PAPER"===n?k.inputLayer=[1,0,0,0,1,0]:"SCISSOR"===n&&(k.inputLayer=[1,0,0,0,0,1]):"PAPER"===t?"ROCK"===n?k.inputLayer=[0,1,0,1,0,0]:"PAPER"===n?k.inputLayer=[0,1,0,0,1,0]:"SCISSOR"===n&&(k.inputLayer=[0,1,0,0,0,1]):"SCISSOR"===t&&("ROCK"===n?k.inputLayer=[0,0,1,1,0,0]:"PAPER"===n?k.inputLayer=[0,0,1,0,1,0]:"SCISSOR"===n&&(k.inputLayer=[0,0,1,0,0,1])),r(k),!0===x.currentlyTraining&&(function(){for(let e=0;e<p;e++){let t=b[e];t.age+=1,t.score5=t.score4,t.score4=t.score3,t.score3=t.score2,t.score2=t.score1,"ROCK"===v.playerSelection?t.score1=t.paperConfidence:"PAPER"===v.playerSelection?t.score1=t.scissorConfidence:"SCISSOR"===v.playerSelection&&(t.score1=t.rockConfidence);let n=[t.score1,t.score2,t.score3,t.score4,t.score5];t.score=P(n)}}(),b.sort(((e,t)=>t.score-e.score)),function(){let e=Math.round(50);for(let t=0;t<e;t++)b.pop()}(),function(){let e=Math.round(50);for(let t=0;t<e;t++){let e=L(g(b[t].brain));b.push(e)}}()),T()};let A=c();const T=function(){const t=document.getElementById("main");e(t),t.appendChild(function(){const e=document.createElement("div");e.classList.add("play");const t=function(){const e=document.createElement("div");e.classList.add("container"),e.setAttribute("id","scoreboard");const t=document.createElement("div");t.classList.add("container"),t.setAttribute("id","scores");const n=document.createElement("div");n.classList.add("scores"),n.textContent=`Player: ${A.playerScore}`;const o=document.createElement("div");o.classList.add("scores"),o.textContent=`Computer: ${A.computerScore}`,t.appendChild(n),t.appendChild(o);const c=function(){const e=document.createElement("div");return e.setAttribute("id","scoreboard-text"),e.textContent=A.scoreboardText,e}();return e.appendChild(c),e.appendChild(t),e}(),n=function(){const e=document.createElement("div");e.classList.add("selection-area");const t=document.createElement("input");t.classList.add("selection-input"),t.setAttribute("id","rock-selection"),t.type="image",t.src="images/rockb.jpg",t.alt="Rock",t.draggable=!1,t.addEventListener("click",(e=>{I(e.target.id)}));const n=document.createElement("input");n.classList.add("selection-input"),n.setAttribute("id","paper-selection"),n.type="image",n.src="images/paperb.jpg",n.alt="Paper",n.draggable=!1,n.addEventListener("click",(e=>{I(e.target.id)}));const o=document.createElement("input");return o.classList.add("selection-input"),o.setAttribute("id","scissor-selection"),o.type="image",o.src="images/scissorb.jpg",o.alt="Scissor",o.draggable=!1,o.addEventListener("click",(e=>{I(e.target.id)})),e.appendChild(t),e.appendChild(n),e.appendChild(o),e}(),o=function(){const e=document.createElement("div");e.classList.add("results-area");const t=document.createElement("img");t.classList.add("selection-input"),t.draggable=!1;const n=document.createElement("img");n.classList.add("selection-input"),n.draggable=!1;const o=document.createElement("div");o.classList.add("result-text");const c=document.createElement("div");c.classList.add("result-selection-area");const r=document.createElement("div");r.classList.add("result-selection-area");const i=document.createElement("p");i.classList.add("selection-text"),i.textContent="You played:";const s=document.createElement("p");return s.classList.add("selection-text"),s.textContent="Computer played:",c.appendChild(i),c.appendChild(t),r.appendChild(s),r.appendChild(n),null===A.roundOutcome||("ROCK"===A.playerSelection?t.src="images/rockb.jpg":"PAPER"===A.playerSelection?t.src="images/paperb.jpg":"SCISSOR"===A.playerSelection&&(t.src="images/scissorb.jpg"),"ROCK"===A.computerSelection?n.src="images/rocka.jpg":"PAPER"===A.computerSelection?n.src="images/papera.jpg":"SCISSOR"===A.computerSelection&&(n.src="images/scissora.jpg"),"TIE"===A.roundOutcome?o.textContent="Tie!":"WIN"===A.roundOutcome?o.textContent="You won!":"LOSS"===A.roundOutcome&&(o.textContent="You lost!"),e.appendChild(c),e.appendChild(o),e.appendChild(r)),e}(),c=function(){const e=document.createElement("button");return e.classList.add("menu-button"),e.setAttribute("id","start-match"),e.textContent="Start Match",e.id="start-match-button",e.addEventListener("click",a),e}();return e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(c),e}())};let K=R();function w(e){const t=document.createElement("div");t.classList.add("member-area"),t.id=`member-${e+1}`,t.textContent=`${e+1}`;const n=document.createElement("div");return n.classList.add("member-info"),n.appendChild(M(`Ranking: ${e+1}`)),n.appendChild(M(`Score: ${N(100*b[e].score)}%`)),n.appendChild(M(`Age: ${b[e].age}`)),n.appendChild(M(`Prediction: ${b[e].prediction}`)),n.appendChild(M(`Confidence: ${N(100*b[e].confidence)}%`)),t.appendChild(n),t}function N(e){return+(Math.round(e+"e+2")+"e-2")}function M(e){const t=document.createElement("div");return t.classList.add("member-text"),t.textContent=e,t}function $(){const t=document.getElementById("main");e(t),t.appendChild(function(){const e=document.createElement("div");e.classList.add("training");const t=function(){const e=document.createElement("div");e.classList.add("population-area");for(let t=0;t<p;t++)e.appendChild(w(t));return e}(),n=function(){const e=document.createElement("div");return e.classList.add("button-area"),e.appendChild(function(){const e=document.createElement("button");return e.classList.add("menu-button"),e.textContent="Reset Training",e.addEventListener("click",(()=>{y(),$()})),e}()),e.appendChild(function(){const e=document.createElement("button");return e.classList.add("menu-button"),!0===K.currentlyTraining?e.textContent="Pause Training":e.textContent="Resume Training",e.addEventListener("click",(()=>{!0===K.currentlyTraining?K.currentlyTraining=!1:K.currentlyTraining=!0,function(e){O=e}(K),$()})),e}()),e}();return e.appendChild(t),e.appendChild(n),e}())}const j=$;function B(e){document.querySelectorAll(".button-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const t=function(){const e=document.createElement("button");return e.id="dark-mode-button",e.textContent="Toggle Dark Mode",e.addEventListener("click",(()=>{document.documentElement.classList.toggle("dark-mode")})),e}(),o=document.createElement("h1");return o.textContent="Rock Paper Scissors",e.appendChild(t),e.appendChild(o),e.appendChild(function(){const e=document.createElement("nav"),t=document.createElement("button");t.classList.add("button-nav"),t.textContent="Information",t.addEventListener("click",(e=>{e.target.classList.contains("active")||(B(t),n())}));const o=document.createElement("button");o.classList.add("button-nav"),o.textContent="Play vs Bot",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(B(o),T())}));const c=document.createElement("button");return c.classList.add("button-nav"),c.textContent="Neural Networks",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(B(c),j())})),e.appendChild(t),e.appendChild(o),e.appendChild(c),e}()),e}()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("div");t.textContent="Made by ";const n=document.createElement("a");return n.href="https://github.com/nuyhkusnoom",n.textContent="nuyhkusnoom",t.appendChild(n),e.appendChild(t),e}()),B(document.querySelector(".button-nav")),n(),y()}()})();