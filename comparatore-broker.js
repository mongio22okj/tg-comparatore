(function(){
if(window.__tgBrokerInstalled)return;window.__tgBrokerInstalled=true;
var THEME=`
html{background:#0a0e22 url('https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1920&q=75&auto=format&fit=crop') center center / cover no-repeat fixed !important;}
body{overflow-x:hidden !important;}
.s-bg-l{display:none !important;}
.s-bg,.s-bg-o{background-color:transparent !important;background-image:none !important;}
body,.l-page,.l-w,.l-bg,header.l-h,footer.l-f,main.l-m{background-color:transparent !important;background-image:none !important;}
.wnd-logo-img{display:none !important;}
#tg-logo{display:flex;align-items:center;justify-content:center;padding:6px 0;}
.sit-c{background:transparent !important;color:#ffd54a !important;letter-spacing:.22em !important;font-weight:700 !important;font-size:13px !important;text-transform:uppercase !important;padding:0 !important;}
header.l-h .menu-item-text{letter-spacing:.09em !important;font-weight:600 !important;}
header.l-h a:hover .menu-item-text{color:#ffd54a !important;}
`;
var CSS=`
#tg-brk{position:relative;width:100vw;left:50%;margin-left:-50vw;color:#fff;padding:46px 0 64px;box-sizing:border-box;}
#tg-brk *,#tg-bmodal *{box-sizing:border-box;}
#tg-brk .tg-inner{max-width:1680px;margin:0 auto;padding:0 3vw;}
#tg-brk .tg-hero{text-align:center;margin-bottom:24px;}
#tg-brk .tg-h{font-size:34px;font-weight:800;color:#fff;margin:0 0 14px;line-height:1.15;text-shadow:0 2px 16px rgba(0,0,0,.75);}
#tg-brk .tg-sub{font-size:16px;color:rgba(255,255,255,.85);max-width:820px;margin:0 auto 12px;line-height:1.6;text-shadow:0 2px 16px rgba(0,0,0,.75);}
#tg-brk .tg-risk-banner{background:rgba(216,35,35,.18);border:1px solid #d82323;border-radius:12px;color:#ffd0d0;font-size:13.5px;font-weight:600;padding:14px 22px;margin:0 auto 28px;max-width:1080px;text-align:center;line-height:1.55;}
#tg-brk .tg-risk-banner b{color:#fff;}
#tg-brk .tg-how-title{text-align:center;font-size:13px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#ffd54a;margin:0 0 14px;}
#tg-brk .tg-steps5{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin:0 auto 32px;max-width:1100px;}
#tg-brk .tg-step{display:flex;align-items:center;gap:9px;font-size:13.5px;font-weight:600;color:#fff;background:rgba(10,14,34,.5);border:1px solid rgba(255,255,255,.14);border-radius:12px;padding:10px 15px;}
#tg-brk .tg-num{width:24px;height:24px;border-radius:50%;background:#d82323;color:#fff;font-weight:800;font-size:12px;display:flex;align-items:center;justify-content:center;flex:none;}
#tg-brk .tg-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;}
@media(max-width:980px){#tg-brk .tg-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
@media(max-width:640px){#tg-brk .tg-grid{grid-template-columns:1fr;}}
#tg-brk .tg-card{background:rgba(10,14,34,.66);border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:24px;display:flex;flex-direction:column;gap:14px;}
#tg-brk .tg-top{display:flex;align-items:center;gap:14px;}
#tg-brk .tg-logo{width:64px;height:64px;background:#fff;border-radius:13px;display:flex;align-items:center;justify-content:center;flex:none;overflow:hidden;}
#tg-brk .tg-logo img{max-width:54px;max-height:54px;}
#tg-brk .tg-name{font-size:20px;font-weight:800;color:#fff;}
#tg-brk .tg-cat{font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:#9fb4d8;}
#tg-brk .tg-bonus{display:flex;align-items:center;justify-content:space-between;background:#ffd02e;color:#0b1020;font-weight:800;padding:11px 14px;border-radius:10px;font-size:14.5px;animation:tgblink 1.6s ease-in-out infinite;}
@keyframes tgblink{0%,100%{box-shadow:0 0 0 0 rgba(255,208,46,.55);}50%{box-shadow:0 0 0 8px rgba(255,208,46,0);}}
#tg-brk .tg-row{display:flex;justify-content:space-between;font-size:13.5px;color:#cfe0ff;border-top:1px solid rgba(255,255,255,.1);padding-top:8px;}
#tg-brk .tg-row b{color:#fff;}
#tg-brk .tg-elig{font-size:12px;color:rgba(255,255,255,.65);text-align:center;line-height:1.45;}
#tg-brk .tg-actions{display:grid;grid-template-columns:1fr;gap:9px;margin-top:auto;}
#tg-brk .tg-cta{text-align:center;font-size:14.5px;font-weight:800;padding:13px;border-radius:11px;text-decoration:none;background:#d82323;color:#fff;display:block;}
#tg-brk .tg-cta.tg-soon{background:rgba(255,255,255,.12);color:rgba(255,255,255,.55);}
#tg-brk .tg-how{font-size:13px;padding:11px;border-radius:11px;border:1px solid rgba(255,255,255,.22);background:transparent;color:#fff;cursor:pointer;font-weight:600;}
#tg-brk #tg-foot-sec{max-width:980px;margin:40px auto 0;text-align:center;background:rgba(10,14,34,.66);border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:22px 28px;}
#tg-brk .tg-trasp{font-size:14px;color:#fff;line-height:1.6;margin-bottom:12px;}
#tg-brk .tg-trasp b{color:#ffd54a;}
#tg-brk .tg-nota{font-size:12.5px;color:rgba(255,255,255,.8);line-height:1.55;border-top:1px solid rgba(255,255,255,.2);padding-top:13px;}
#tg-bmodal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:99999;align-items:center;justify-content:center;padding:24px;}
#tg-bmodal .tg-mbody{background:#0e1530;border:1px solid rgba(255,255,255,.18);border-radius:18px;max-width:540px;width:100%;padding:26px;color:#fff;max-height:90vh;overflow-y:auto;}
#tg-bmodal .tg-mclose{float:right;background:transparent;border:0;color:#fff;font-size:28px;cursor:pointer;line-height:1;}
#tg-bmodal .tg-mhead{display:flex;align-items:center;gap:12px;margin-bottom:14px;}
#tg-bmodal .tg-mtitle{font-size:13px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:#ffd54a;margin:14px 0 8px;}
#tg-bmodal ol.tg-steps{padding-left:22px;font-size:14px;line-height:1.6;color:#cfe0ff;}
#tg-bmodal .tg-elig2{font-size:13px;color:rgba(255,255,255,.7);margin:12px 0;}
#tg-bmodal .tg-disc{font-size:11.5px;color:rgba(255,255,255,.55);margin-top:12px;line-height:1.5;}
`;
function init(){try{
  var s1=document.createElement('style');s1.textContent=THEME;document.head.appendChild(s1);
  var s2=document.createElement('style');s2.textContent=CSS;document.head.appendChild(s2);
  var DOC="18+ · documento richiesto · verifica KYC";
  var data=[
   {n:"IronFX",d:"ironfx.com",r:"Bonus 200% Trading",dep:"deposito da $100",lev:"alta leva (offshore)",reg:"Multi-licenze (offshore + UE)",e:DOC,u:"https://go.ironfx.com/visit/?bta=38141&nci=7240&afp=k01",s:["Registrati su IronFX dal nostro link","Completa la verifica identità (KYC) — documento + selfie","Effettua il primo deposito (da $100 in su)","Richiedi il bonus 200% via area cliente / chat","Inizia a fare trading rispettando i requisiti di volume per sbloccare il bonus"]},
   {n:"FXcess",d:"fxcess.com",r:"Credit Bonus fino a $5.000",dep:"deposito richiesto",lev:"leva su CFD",reg:"FSC British Virgin Islands (SIBA/L/24/1175)",e:DOC,u:"https://go.fxcess.com/visit/?bta=35134&nci=5343&utm_campaign=F01",s:["Registrati su FXcess dal nostro link","Verifica identità (documento + prova residenza)","Deposita per attivare il Credit Bonus (% sul deposito)","Il bonus non è prelevabile, ma serve come margine per operare","Rispetta i requisiti di volume previsti dai T&C per rendere i profitti prelevabili"]},
   {n:"T4Trade",d:"t4trade.com",r:"Supercharger 100% + Welcome 20-40%",dep:"deposito da $50",lev:"fino a 1:1000",reg:"Seychelles FSA (lic. SD029) · non rivolto a residenti UE",e:DOC,u:"",s:["Registrati su T4Trade dal nostro link","Verifica identità (KYC completo)","Deposita per attivare il bonus benvenuto scelto","Il bonus è creditizio: serve come margine, non è prelevabile","Rispetta i requisiti di volume nei T&C per rendere prelevabili i profitti"]}
  ];
  function logo(d){return "<img alt='' src='https://logo.clearbit.com/"+d+"' onerror=\"this.onerror=null;this.src='https://www.google.com/s2/favicons?sz=64&domain='+'"+d+"'\">";}
  function cardHtml(p,i){var cta=p.u?"<a class='tg-cta' href='"+p.u+"' target='_blank' rel='nofollow noopener sponsored'>Apri conto · "+p.n+" →</a>":"<span class='tg-cta tg-soon'>Referral in arrivo</span>";return "<div class='tg-card'><div class='tg-top'><span class='tg-logo'>"+logo(p.d)+"</span><div><div class='tg-name'>"+p.n+"</div><span class='tg-cat'>Broker · Forex & CFD</span></div></div><div class='tg-bonus'><span>Bonus</span><span>"+p.r+"</span></div><div class='tg-row'><span>Deposito</span><b>"+p.dep+"</b></div><div class='tg-row'><span>Leva</span><b>"+p.lev+"</b></div><div class='tg-row'><span>Regolamentazione</span><b style='text-align:right;max-width:62%'>"+p.reg+"</b></div><div class='tg-elig'>"+p.e+"</div><div class='tg-actions'>"+cta+"<button class='tg-how' data-i='"+i+"'>Come funziona</button></div></div>";}
  var wrap=document.createElement('div');wrap.id='tg-brk';
  var risk="<div class='tg-risk-banner'><b>Avvertenza di rischio:</b> il trading di CFD e Forex comporta un alto rischio di perdita rapida del capitale a causa della leva finanziaria. La maggior parte dei conti retail perde denaro. Verifica di poter sostenere il rischio di perdere tutto il capitale investito. I bonus dei broker sono creditizi (non prelevabili) e soggetti a requisiti di volume. Questo non è consiglio finanziario.</div>";
  var steps="<div class='tg-how-title'>Come ottenere il bonus</div><div class='tg-steps5'><div class='tg-step'><span class='tg-num'>1</span>Scegli il broker</div><div class='tg-step'><span class='tg-num'>2</span>Apri il conto col nostro link</div><div class='tg-step'><span class='tg-num'>3</span>Verifica identità (KYC)</div><div class='tg-step'><span class='tg-num'>4</span>Deposita e attiva il bonus</div><div class='tg-step'><span class='tg-num'>5</span>Rispetta i requisiti di volume</div></div>";
  var foot="<div id='tg-foot-sec'><div class='tg-trasp'><b>Trasparenza.</b> I link sono affiliati: se apri un conto noi riceviamo una commissione dal broker, tu non paghi nulla in più. I dettagli dei bonus possono variare: verifica sempre sui siti ufficiali dei broker prima di aprire un conto.</div><div class='tg-nota'>I broker presenti sono operatori internazionali che servono clientela non-UE o tramite passaporto. Verifica sempre la loro licenza e l'idoneità a servire residenti italiani prima di operare. Il presente sito è puramente informativo e non costituisce sollecitazione all'investimento né consulenza finanziaria.</div></div>";
  var cards="";for(var i=0;i<data.length;i++){cards+=cardHtml(data[i],i);}
  wrap.innerHTML="<div class='tg-inner'><div class='tg-hero'><div class='tg-h'>Migliori broker per fare trading online</div><div class='tg-sub'>Confronta i bonus di benvenuto, le condizioni e le piattaforme dei principali broker forex e CFD. Tabella aggiornata con regolamentazione, deposito minimo e leva.</div></div>"+risk+steps+"<div class='tg-grid'>"+cards+"</div>"+foot+"</div>";
  var main=document.querySelector('main.l-m')||document.querySelector('main')||document.querySelector('.l-page')||document.body;
  main.insertBefore(wrap,main.firstChild);
  var divider=document.createElement('div');divider.style.cssText='max-width:1080px;margin:48px auto 28px;padding:0 3vw;text-align:center;';
  divider.innerHTML="<div style='font-size:13px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#ffd54a;margin-bottom:10px;text-shadow:0 2px 12px rgba(0,0,0,.7);'>Altri broker e proposte</div><div style='font-size:14px;color:rgba(255,255,255,.78);max-width:760px;margin:0 auto;line-height:1.55;text-shadow:0 2px 12px rgba(0,0,0,.7);'>Sotto trovi i link verso altre piattaforme di trading e offerte affiliate che monitoriamo.</div>";
  wrap.appendChild(divider);
  var modal=document.createElement('div');modal.id='tg-bmodal';modal.innerHTML="<div class='tg-mbody'></div>";document.body.appendChild(modal);
  modal.addEventListener('click',function(e){if(e.target===modal)modal.style.display='none';});
  function openModal(i){var p=data[i];var cta=p.u?"<a class='tg-cta' href='"+p.u+"' target='_blank' rel='nofollow noopener sponsored'>Vai a "+p.n+" →</a>":"<span class='tg-cta tg-soon'>Link referral in arrivo</span>";var st="";for(var z=0;z<p.s.length;z++){st+="<li>"+p.s[z]+"</li>";}modal.querySelector('.tg-mbody').innerHTML="<button class='tg-mclose'>×</button><div class='tg-mhead'><span class='tg-logo'>"+logo(p.d)+"</span><div><div class='tg-name'>"+p.n+"</div><span class='tg-cat'>Broker · Forex & CFD</span></div></div><div class='tg-bonus'><span>Bonus</span><span>"+p.r+"</span></div><div class='tg-mtitle'>Come attivare il bonus</div><ol class='tg-steps'>"+st+"</ol><div class='tg-elig2'>Requisiti: "+p.e+" · "+p.reg+"</div>"+cta+"<div class='tg-disc'>Il trading CFD comporta alto rischio di perdita del capitale. I bonus sono creditizi (non prelevabili) e soggetti a requisiti di volume. Verifica T&C sul sito ufficiale del broker.</div>";modal.querySelector('.tg-mclose').addEventListener('click',function(){modal.style.display='none';});modal.style.display='flex';}
  var hows=wrap.querySelectorAll('.tg-how');for(j=0;j<hows.length;j++){hows[j].addEventListener('click',function(){openModal(+this.getAttribute('data-i'));});}
  var img=document.querySelector('.wnd-logo-img');
  if(img && !document.getElementById('tg-logo')){var box=document.createElement('div');box.id='tg-logo';box.innerHTML="<svg width='290' height='78' viewBox='0 0 290 78' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='TuGuadagni'><rect x='6' y='13' width='56' height='52' rx='14' fill='#ffd02e'/><path d='M16 54 L28 42 L37 49 L51 30' fill='none' stroke='#0b1020' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/><path d='M43 28 L52 28 L52 37' fill='none' stroke='#0b1020' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/><text x='74' y='44' font-size='28' font-weight='800' fill='#ffd02e' font-family='Arial,sans-serif'>Tu<tspan fill='#ffffff'>Guadagni</tspan></text><text x='76' y='62' font-size='9' font-weight='600' letter-spacing='3' fill='#9fb4d8' font-family='Arial,sans-serif'>BONUS · CASHBACK · PROMO</text></svg>";img.parentElement.insertBefore(box,img);}
  var inf=null,allh=document.querySelectorAll('header.l-h *');
  for(j=0;j<allh.length;j++){if(allh[j].childElementCount===0 && /INFORMAZIONI A SCOPO/i.test(allh[j].textContent)){inf=allh[j];break;}}
  if(inf){var nn=inf;for(var q=0;q<5&&nn&&nn.tagName!=='HEADER';q++){var bgc=getComputedStyle(nn).backgroundColor;if(/^rgb\(2[0-9][0-9], 2[0-9][0-9], 2[0-9][0-9]/.test(bgc))nn.style.background='transparent';nn=nn.parentElement;}inf.style.cssText='background:transparent !important;color:#fff !important;font-weight:800 !important;letter-spacing:.05em !important;font-size:17px !important;padding:6px 0 !important;border:none !important;text-shadow:0 2px 14px rgba(0,0,0,.7);';}
}catch(e){if(window.console)console.error('TuGuadagni broker:',e);}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
