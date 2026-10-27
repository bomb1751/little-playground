'use strict';
const $=id=>document.getElementById(id),{path:P,ellipse:E,rect:R}=Play;
const kinds=[
 {key:'butterfly',name:'蝴蝶',fact:'看看牠的大翅膀，兩邊有相似的花紋。'},
 {key:'ladybug',name:'瓢蟲',fact:'圓圓的翅鞘上有小斑點，仔細數數看！'},
 {key:'rhino',name:'獨角仙',fact:'這隻雄獨角仙頭上有角，像戴了小頭盔。'},
 {key:'dragonfly',name:'蜻蜓',fact:'細長的身體旁，有兩對透明的翅膀。'},
 {key:'grasshopper',name:'蚱蜢',fact:'牠有長長的後腳，是跳躍小高手。'},
 {key:'stag',name:'鍬形蟲',fact:'這隻雄鍬形蟲有大顎，像一把彎彎的小夾子。'},
 {key:'bee',name:'蜜蜂',fact:'身體有條紋，腳邊帶著小小花粉球。'},
 {key:'ant',name:'螞蟻',fact:'找找牠細細的腰，還有六隻小腳。'}
];
function insectArt(key,phase=0){let a='',ink='#56634a',wing=Math.sin(phase)*8;
 const legs=(color=ink)=>[-1,1].map(side=>[-12,0,12].map(y=>P(`M${side*7} ${y}L${side*22} ${y-6}L${side*29} ${y+5}`,'none',color,2.5)).join('')).join('');
 const antenna=(color=ink)=>P('M-5 -19L-13 -31M5 -19L13 -31','none',color,2.5)+E(-13,-31,2,2,color)+E(13,-31,2,2,color);
 if(key==='butterfly')a=legs('#80647c')+E(-18,-10,18+wing,21,'#e7a4be','#bf799f')+E(18,-10,18+wing,21,'#e7a4be','#bf799f')+E(-16,17,15,14,'#a89ccd','#877bb3')+E(16,17,15,14,'#a89ccd','#877bb3')+E(-21,-13,7,10,'#ffe8c4')+E(21,-13,7,10,'#ffe8c4')+E(-19,18,5,5,'#e8d7f1')+E(19,18,5,5,'#e8d7f1')+E(0,0,5,24,'#80647c')+E(0,-23,6,6,'#80647c')+antenna('#80647c');
 if(key==='ladybug')a=legs()+antenna()+E(0,-20,11,10,'#53614d')+E(0,6,23,26,'#dc7980','#b75b65')+P('M0 -16V31','none','#96525d',2)+[[-11,-3],[12,-3],[-13,15],[13,15]].map(([x,y])=>E(x,y,4.5,5,'#685755')).join('')+E(-5,-23,2,2,'#fff6da')+E(5,-23,2,2,'#fff6da');
 if(key==='rhino')a=legs('#74523e')+E(0,8,22,25,'#946849','#6d4b38')+P('M0 -12V31','none','#bd9069',2)+E(0,-15,15,13,'#77503c')+P('M-5 -21L-4 -39L-11 -43M-4 -34L4 -39','none','#74523e',5)+E(-7,-17,2,2,'#f8dca8')+E(7,-17,2,2,'#f8dca8');
 if(key==='dragonfly')a=legs('#658883')+E(-22,-9,23,7+wing*.4,'#d8eff0aa','#8fb7bc')+E(22,-9,23,7+wing*.4,'#d8eff0aa','#8fb7bc')+E(-21,7,22,7,'#d8eff0aa','#8fb7bc')+E(21,7,22,7,'#d8eff0aa','#8fb7bc')+P('M0 -5V34','none','#6b9aa3',6)+P('M-3 14H3M-3 24H3','none','#b4d1ce',2)+E(0,-12,7,13,'#6b9aa3')+E(-6,-24,6,6,'#b4cba8','#7eaa9d')+E(6,-24,6,6,'#b4cba8','#7eaa9d');
 if(key==='grasshopper')a=P('M-4 2L-26 -15L-19 25L-32 31M4 2L26 -15L19 25L32 31M-7 -9L-19 -4L-28 -9M7 -9L19 -4L28 -9M-6 16L-17 24M6 16L17 24','none','#739d5e',3)+E(0,7,11,25,'#9ebc74','#739d5e')+P('M0 -10V30','none','#d0dba1',2)+E(0,-21,12,12,'#b4ca84','#739d5e')+antenna('#739d5e')+E(-7,-23,3,4,'#566c45')+E(7,-23,3,4,'#566c45');
 if(key==='stag')a=legs('#62554c')+E(0,10,20,24,'#776858','#554d45')+P('M0 -11V32','none','#a4967c',2)+E(0,-16,14,12,'#62554c')+P('M-9 -22Q-24 -42 -7 -43L-11 -33M9 -22Q24 -42 7 -43L11 -33','none','#62554c',5)+E(-7,-18,2,2,'#f6dcac')+E(7,-18,2,2,'#f6dcac');
 if(key==='bee')a=legs('#8e7950')+E(-17,-5,15,19,'#e7f1edbb','#a9c9c1')+E(17,-5,15,19,'#e7f1edbb','#a9c9c1')+E(0,7,13,24,'#e8c574','#b69a60')+P('M-11 -1H11M-12 10H12M-7 22H7','none','#8e7950',5)+E(0,-18,11,10,'#b49b60')+antenna('#8e7950')+E(-5,-20,2,2,'#fff6dd')+E(5,-20,2,2,'#fff6dd')+E(-25,17,5,6,'#e8b86b')+E(25,17,5,6,'#e8b86b');
 if(key==='ant')a=legs('#976f58')+E(0,20,12,15,'#a77a5b','#805b48')+E(0,0,7,8,'#a77a5b')+E(0,-19,12,12,'#b68a67','#805b48')+antenna('#976f58')+E(-5,-22,2,2,'#fff0cf')+E(5,-22,2,2,'#fff0cf');
 return a;
}
function netArt(caught=null,wobble=0,id='preview',side=1,withHandle=true){
 const bagPath='M-38 0C-36 31 -21 61 3 64C30 61 38 30 38 0Q0 21 -38 0Z',meshId='mesh-'+id,clipId='bag-'+id;
 const defs=`<defs><pattern id="${meshId}" width="7" height="7" patternUnits="userSpaceOnUse"><path d="M0 0L7 7M7 0L0 7" fill="none" stroke="#719e8d" stroke-opacity=".65" stroke-width=".8"/></pattern><clipPath id="${clipId}"><ellipse cx="0" cy="0" rx="38" ry="25"/><path d="${bagPath}"/></clipPath></defs>`;
 let a=defs+(withHandle?P(`M${side*19} -17L${side*52} -105`,'none','#94764f',9)+P(`M${side*19} -17L${side*52} -105`,'none','#cfaa77',6)+P(`M${side*45} -85L${side*52} -105`,'none','#a17d55',11):'')+E(0,0,38,25,'#edf9e9bb')+P(bagPath,'#f7fcf1bb','#9cbaa7',1.6);
 if(caught)a+=`<g class="net-caught-insect" transform="translate(${wobble} 31) rotate(${wobble*2}) scale(.39)">${insectArt(caught)}</g>`;
 a+=`<rect class="complete-net-mesh" x="-40" y="-27" width="80" height="94" fill="url(#${meshId})" clip-path="url(#${clipId})"/>`;
 return a+E(0,0,38,25,'none','#709c8a',4)+P('M-31 -14Q0 -30 31 -14','none','#e5f2dd',2);
}
function catchAnimation(n){
 // The near net and grip enter from the player's lower-right foreground.
 const reach=Math.min(1,n.t/.48),ease=1-(1-reach)**2,arc=Math.sin(reach*Math.PI),nx=340+(n.x-340)*ease+n.side*arc*20,ny=414+(n.y-414)*ease-arc*17;
 const scale=1.8-.8*ease,depth=.68+.32*ease,tilt=(n.x-240)/240*12-arc*13,opacity=n.t<.9?1:Math.max(0,(1.3-n.t)/.4);
 let art=netArt(null,0,'catch-'+n.id,n.side,false);
 if(n.landed&&n.key){const distance=31*Math.max(0,Math.min(1,(n.t-.52)/.16)),insect=`<g class="net-caught-insect" transform="translate(0 ${distance}) rotate(${-180-tilt}) scale(.39)">${insectArt(n.key)}</g>`;art=art.replace('<rect class="complete-net-mesh"',insect+'<rect class="complete-net-mesh"');}
 const rod=P(`M${nx+7*scale} ${ny+23*scale*depth}L400 347`,'none','#94764f',8)+P(`M${nx+7*scale} ${ny+23*scale*depth}L400 347`,'none','#d4b484',5);
 const hand=`<g class="player-hand" transform="translate(400 347) rotate(-23)">`+P('M-7 13L-6 49L21 49L18 8Z','#e9bc96')+R(-11,-7,28,28,9,'#f1cba6')+R(-16,-3,11,20,5,'#e8b68f')+R(-6,-12,7,17,3,'#f4d2af')+R(1,-13,7,18,3,'#f4d2af')+R(8,-10,7,15,3,'#f0c7a0')+R(-8,24,31,21,4,'#8faf9b')+P('M-3 28H19','none','#c3d5bb',2)+'</g>';
 return `<g class="catch-net-animation" data-phase="${n.landed?'caught':'reaching'}" opacity="${opacity}">${rod}<g class="net-reach" transform="translate(${nx} ${ny}) scale(${scale} ${scale*depth})"><g class="net-orientation" transform="rotate(${180+tilt})">${art}</g></g>${hand}</g>`;
}
const storage='little-playground.bugs.album';let counts={};try{const value=JSON.parse(sessionStorage.getItem(storage)||'{}');for(const k of kinds)if(Number.isInteger(value?.[k.key])&&value[k.key]>0)counts[k.key]=value[k.key];}catch{}
let bugs=[],active=null,nets=[],pointer=null,sceneCountdown=0,time=0,last=null,flash=0,netSerial=0;
let sceneData=null,sceneIndex=-1,sceneRevision=0,renderedRevision=-1,renderedBugs='',visits=0;
function seed(changeScene=false){
 if(!sceneData||changeScene){const options=BugGarden.themes.map((_,i)=>i).filter(i=>i!==sceneIndex);sceneIndex=options[Math.floor(Math.random()*options.length)];sceneData=BugGarden.create(sceneIndex);sceneRevision++;$('location').textContent=sceneData.name;}
 const preferences={rhino:['bark','log'],stag:['bark','log'],dragonfly:['reed','leaf'],ant:['log','rock'],grasshopper:['leaf'],butterfly:['flower'],bee:['flower'],ladybug:['leaf','flower']},used=[];bugs=[];
 for(const key of ['rhino','stag','dragonfly','ant','grasshopper','butterfly','bee','ladybug']){
  const available=sceneData.anchors.filter(a=>used.every(u=>Math.hypot(a.x-u.x,a.y-u.y)>35)),preferred=available.filter(a=>preferences[key].includes(a.type)),pool=preferred.length?preferred:available.length?available:sceneData.anchors;
  const perch=pool[Math.floor(Math.random()*pool.length)];used.push(perch);bugs.push({key,x:perch.x,y:perch.y,baseX:perch.x,baseY:perch.y,habitat:perch.type,angle:(Math.random()-.5)*75,scale:key==='dragonfly'?.35:key==='butterfly'?.34:.31,phase:Math.random()*6,fromX:perch.x,fromY:perch.y,toX:perch.x,toY:perch.y,moveT:0,moveDuration:1,rest:Math.random()*1.5});
 }
 renderedBugs='';
}
function draw(){
 const garden=$('garden');if(renderedRevision!==sceneRevision){garden.innerHTML=Play.svg(sceneData.back+'<g id="insects"></g>'+sceneData.front+'<g id="netLayer"></g><g id="flashLayer"></g>','0 0 480 360',sceneData.name+'，找找花葉上的小昆蟲');renderedRevision=sceneRevision;renderedBugs='';}
 const signature=bugs.map(b=>b.key).join(':');if(renderedBugs!==signature){$('insects').innerHTML=bugs.map(b=>`<g data-bug="${b.key}" role="button" tabindex="0" aria-label="捕捉${kinds.find(k=>k.key===b.key).name}"><circle r="59" fill="transparent"/>${insectArt(b.key)}</g>`).join('');renderedBugs=signature;}
 for(const b of bugs){const node=garden.querySelector(`[data-bug="${b.key}"]`);if(b.moveT>0&&b.moveT<1&&b.artFrame!==Math.floor(time*10)){b.artFrame=Math.floor(time*10);node.innerHTML='<circle r="59" fill="transparent"/>'+insectArt(b.key,time*14);}node.setAttribute('transform',`translate(${b.x} ${b.y}) rotate(${b.angle+Math.sin(time*.6+b.phase)*1.5}) scale(${b.scale})`);}
 $('netLayer').innerHTML=nets.map(catchAnimation).join('');
 $('flashLayer').innerHTML=flash>0?`<g opacity="${Math.min(1,flash)}"><rect x="138" y="14" width="204" height="29" rx="14" fill="#fff8e1d9"/><text x="240" y="34" text-anchor="middle" class="bug-label" font-size="13">✦ 找到昆蟲朋友了！✦</text></g>`:'';
}
function updateAlbum(){const found=kinds.filter(k=>counts[k.key]).length;$('found').textContent=found+' / 8 種';$('total').textContent='抓到 '+Object.values(counts).reduce((a,b)=>a+b,0)+' 隻';$('album').innerHTML=kinds.map(k=>`<div class="album-card ${counts[k.key]?'found':''} ${active?.key===k.key?'selected':''}" aria-label="${k.name}，${counts[k.key]?'已發現 '+counts[k.key]+' 次':'還沒發現'}">${Play.svg(insectArt(k.key),'-48 -48 96 96')}<span>${k.name}</span><small>${counts[k.key]?'✓ '+counts[k.key]+' 次':'？'}</small></div>`).join('');$('complete').hidden=found!==8;}
function moveInsect(b,dt){
 if(nets.some(n=>n.key===b.key))return;
 if(b.rest>0){b.rest-=dt;return;}
 if(b.moveT>=1||b.toX===b.fromX&&b.toY===b.fromY){
  b.fromX=b.x;b.fromY=b.y;b.moveT=0;
  const flying=['butterfly','bee','dragonfly'].includes(b.key);
  if(flying){const candidates=sceneData.anchors.filter(a=>['flower','leaf','reed'].includes(a.type)&&Math.hypot(a.x-b.x,a.y-b.y)>40&&Math.hypot(a.x-b.x,a.y-b.y)<180);const perch=candidates[Math.floor(Math.random()*candidates.length)];b.toX=perch?perch.x:Math.max(28,Math.min(452,b.x+(Math.random()-.5)*130));b.toY=perch?perch.y:Math.max(90,Math.min(326,b.y+(Math.random()-.5)*80));b.moveDuration=2.2+Math.random()*1.8;
  }else{const alongBark=b.habitat==='bark';b.toX=Math.max(25,Math.min(455,b.baseX+(Math.random()-.5)*(alongBark?10:37)));b.toY=Math.max(90,Math.min(326,b.baseY+(Math.random()-.5)*(alongBark?48:24)));b.moveDuration=1.5+Math.random()*1.5;}
  b.angle=Math.atan2(b.toY-b.y,b.toX-b.x)*180/Math.PI+90;
 }
 b.moveT=Math.min(1,b.moveT+dt/b.moveDuration);const t=b.moveT,s=t*t*(3-2*t),flying=['butterfly','bee','dragonfly'].includes(b.key);
 b.x=b.fromX+(b.toX-b.fromX)*s;b.y=b.fromY+(b.toY-b.fromY)*s-(flying?Math.sin(t*Math.PI)*11:0);
 if(b.moveT===1)b.rest=.35+Math.random()*(flying?1.2:1.8);
}
function capture(key){const bug=bugs.find(b=>b.key===key);if(!bug)return;const kind=kinds.find(k=>k.key===key);active=kind;const first=!counts[key];counts[key]=(counts[key]||0)+1;try{sessionStorage.setItem(storage,JSON.stringify(counts));}catch{}bugs=bugs.filter(b=>b.key!==key);flash=1.3;visits++;if(visits%3===0)sceneCountdown=1.8;$('portrait').innerHTML=Play.svg(insectArt(key),'-48 -48 96 96',kind.name);$('discovery').textContent=first?'新朋友！':'又見面了！';$('bugName').textContent=kind.name;$('fact').textContent=kind.fact;$('hint').textContent='找到'+kind.name+'了！繼續點下一隻昆蟲。';updateAlbum();draw();}
function tapAt(point,key=null){if(!point.inside||key&&nets.some(n=>n.key===key))return;const available=bugs.filter(b=>!nets.some(n=>n.key===b.key));const target=key?available.find(b=>b.key===key):available.sort((a,b)=>Math.hypot(a.x-point.x,a.y-point.y)-Math.hypot(b.x-point.x,b.y-point.y))[0];const hit=target&&(key||Math.hypot(target.x-point.x,target.y-point.y)<23)?target:null;nets.push({x:hit?hit.x:point.x,y:hit?hit.y:point.y,id:++netSerial,t:0,key:hit?.key||null,landed:false,side:(hit?hit.x:point.x)>240?-1:1});if(!hit)$('hint').textContent='網子撲空了！仔細看看花葉上哪裡有小昆蟲。';draw();}
function pressGarden(e){const insect=e.target.closest('[data-bug]'),key=insect?.dataset.bug,bug=key?bugs.find(b=>b.key===key):null;tapAt(bug?{x:bug.x,y:bug.y,inside:true}:Play.point($('garden'),e.clientX,e.clientY),key);}
// Lock the moving insect on finger-down, before animation or movement can replace its SVG.
$('garden').addEventListener('pointerdown',e=>{if(!e.isPrimary||e.button!==0)return;e.preventDefault();pressGarden(e);});
$('garden').addEventListener('click',e=>{if(e.detail===0)pressGarden(e);});
$('garden').addEventListener('keydown',e=>{const key=e.target.closest('[data-bug]')?.dataset.bug;if(key&&(e.key==='Enter'||e.key===' ')){e.preventDefault();const bug=bugs.find(b=>b.key===key);if(bug)tapAt({...bug,inside:true},key);}});
function changeScenery(){nets=[];sceneCountdown=0;seed(true);$('hint').textContent=sceneData.name+'：點點花葉和樹幹上的小昆蟲吧！';draw();}
$('shuffle').onclick=changeScenery;
$('portrait').innerHTML=Play.svg(netArt(),'-55 -112 125 190');seed();updateAlbum();function tick(now){const dt=last===null?0:Math.min((now-last)/1000,.05);last=now;if(!document.hidden){time+=dt;for(const b of bugs)moveInsect(b,dt);for(const n of nets){n.t+=dt;if(!n.landed&&n.t>=.52){n.landed=true;if(n.key)capture(n.key);}}nets=nets.filter(n=>n.t<1.3);if(sceneCountdown>0){sceneCountdown=Math.max(0,sceneCountdown-dt);if(sceneCountdown===0&&nets.length===0)changeScenery();else if(sceneCountdown===0)sceneCountdown=.05;}flash=Math.max(0,flash-dt);draw();}requestAnimationFrame(tick);}requestAnimationFrame(tick);
