(function(){
if(window.__tgInstalled)return;window.__tgInstalled=true;
var CSS=`
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
#tg-comp{position:relative;width:100vw;left:50%;margin-left:-50vw;color:#fff;padding:46px 0 64px;box-sizing:border-box;}
#tg-comp *,#tg-modal *{box-sizing:border-box;}
#tg-comp .tg-inner{max-width:1680px;margin:0 auto;padding:0 3vw;}
#tg-comp .tg-hero{text-align:center;margin-bottom:24px;}
#tg-comp .tg-h{font-size:34px;font-weight:800;color:#fff;margin:0 0 14px;line-height:1.15;text-shadow:0 2px 16px rgba(0,0,0,.75);}
#tg-comp .tg-sub{font-size:16px;color:rgba(255,255,255,.85);max-width:780px;margin:0 auto 12px;line-height:1.6;text-shadow:0 2px 16px rgba(0,0,0,.75);}
#tg-comp .tg-slogan{font-size:16px;font-weight:800;color:#ffd02e;letter-spacing:.02em;}
#tg-comp .tg-chips{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:0 auto 24px;max-width:900px;}
#tg-comp .tg-chips span{font-size:12.5px;color:#cfe0ff;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:30px;padding:6px 13px;}
#tg-comp .tg-how-title{text-align:center;font-size:13px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#ffd54a;margin:0 0 14px;}
#tg-comp .tg-steps5{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin:0 auto 32px;max-width:1050px;}
#tg-comp .tg-step{display:flex;align-items:center;gap:9px;font-size:13.5px;font-weight:600;color:#fff;background:rgba(10,14,34,.5);border:1px solid rgba(255,255,255,.14);border-radius:12px;padding:10px 15px;}
#tg-comp .tg-num{width:24px;height:24px;border-radius:50%;background:#d82323;color:#fff;font-weight:800;font-size:12px;display:flex;align-items:center;justify-content:center;flex:none;}
#tg-comp .tg-filters{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:28px;}
#tg-comp .tg-filt{font-size:14px;padding:10px 20px;border-radius:30px;cursor:pointer;background:rgba(255,255,255,.14);color:#fff;border:1px solid rgba(255,255,255,.4);}
#tg-comp .tg-filt.tg-on{background:#d82323;border-color:#d82323;}
#tg-comp .tg-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px;}
@media(max-width:1200px){#tg-comp .tg-grid{grid-template-columns:repeat(3,minmax(0,1fr));}}
@media(max-width:860px){#tg-comp .tg-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
@media(max-width:540px){#tg-comp .tg-grid{grid-template-columns:1fr;}}
.tg-card{background:rgba(22,22,31,.92);border:1px solid rgba(255,255,255,.13);border-radius:18px;padding:20px;display:flex;flex-direction:column;}
.tg-top{display:flex;align-items:center;gap:13px;margin-bottom:14px;}
.tg-logo{width:52px;height:52px;border-radius:13px;background:#fff;display:flex;align-items:center;justify-content:center;flex:none;overflow:hidden;}
.tg-logo img{width:36px;height:36px;object-fit:contain;}
.tg-name{font-size:16px;font-weight:700;color:#fff;line-height:1.2;}
.tg-cat{font-size:10px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.04em;}
.tg-bonus{display:flex;flex-direction:column;gap:8px;margin-bottom:11px;}
.tg-line{display:flex;justify-content:space-between;align-items:center;gap:8px;border-radius:10px;padding:8px 12px;}
.tg-line .lbl{font-size:11.5px;font-weight:600;}
.tg-line .val{font-size:16px;font-weight:800;white-space:nowrap;}
.tg-reg{background:#ffd02e;color:#3a2c00;animation:tgglow 1.1s ease-in-out infinite;}
.tg-inv{background:rgba(255,255,255,.07);color:#fff;border:1px solid rgba(255,255,255,.16);}
.tg-elig{font-size:10.5px;color:rgba(255,255,255,.52);text-align:center;margin-bottom:15px;}
.tg-actions{margin-top:auto;display:flex;flex-direction:column;gap:9px;}
.tg-cta{text-align:center;font-size:14px;font-weight:700;padding:12px;border-radius:11px;text-decoration:none;background:#d82323;color:#fff;display:block;}
.tg-cta.tg-soon{background:rgba(255,255,255,.12);color:rgba(255,255,255,.55);}
.tg-how{background:transparent;border:1px solid rgba(255,255,255,.3);color:#fff;border-radius:11px;padding:10px;font-size:13.5px;font-weight:600;cursor:pointer;}
#tg-comp #tg-foot-sec{max-width:940px;margin:40px auto 0;text-align:center;background:rgba(10,14,34,.66);border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:22px 28px;}
#tg-comp .tg-trasp{font-size:15px;color:#fff;line-height:1.6;margin-bottom:12px;}
#tg-comp .tg-trasp b{color:#ffd54a;}
#tg-comp .tg-nota{font-size:12.5px;color:rgba(255,255,255,.8);line-height:1.55;border-top:1px solid rgba(255,255,255,.2);padding-top:13px;}
@keyframes tgglow{0%,100%{box-shadow:0 0 0 0 rgba(255,208,46,0);}50%{box-shadow:0 0 18px 2px rgba(255,208,46,.6);}}
#tg-modal{position:fixed;inset:0;background:rgba(0,0,0,.75);display:none;align-items:center;justify-content:center;z-index:999999;padding:20px;}
#tg-modal .tg-mbody{position:relative;background:#16161f;border:1px solid rgba(255,255,255,.15);border-radius:18px;max-width:470px;width:100%;padding:28px;max-height:86vh;overflow:auto;color:#fff;}
#tg-modal .tg-mclose{position:absolute;top:10px;right:15px;background:transparent;border:none;color:#fff;font-size:30px;line-height:1;cursor:pointer;}
#tg-modal .tg-mhead{display:flex;align-items:center;gap:13px;margin-bottom:14px;}
#tg-modal .tg-mtitle{font-size:16px;font-weight:700;margin:18px 0 12px;}
#tg-modal .tg-steps{margin:0 0 14px;padding:0;list-style:none;counter-reset:s;}
#tg-modal .tg-steps li{position:relative;padding:0 0 13px 42px;color:rgba(255,255,255,.88);font-size:14.5px;line-height:1.45;counter-increment:s;}
#tg-modal .tg-steps li::before{content:counter(s);position:absolute;left:0;top:-2px;width:29px;height:29px;border-radius:50%;background:#d82323;color:#fff;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;}
#tg-modal .tg-elig2{font-size:12.5px;color:#ffd02e;background:rgba(255,208,46,.1);border:1px solid rgba(255,208,46,.3);border-radius:10px;padding:10px 12px;margin-bottom:14px;}
#tg-modal .tg-disc{font-size:11px;color:rgba(255,255,255,.45);margin-top:12px;line-height:1.4;}
`;
function init(){
 try{
  var _st=document.createElement('style');_st.textContent=CSS;document.head.appendChild(_st);
  var L={wallet:"Wallet & app",exch:"Exchange & investimenti",cash:"Cashback",altri:"Altri bonus"};
  var DOC="18+ · documento richiesto (CI o patente)";
  var REG="18+ · basta la registrazione";
  var SIM="Documento richiesto (attivazione SIM)";
  var data=[
   {n:"SumUp Pay",d:"sumup.com",k:"wallet",r:"10€",v:"10€",e:DOC,u:"https://sumuppay.onelink.me/CXe5/amici",s:["Registrati con il nostro link","Supera la verifica identità (KYC)","Fai 3 pagamenti in negozio con la carta (totale min. 10€)","Ricevi 10€ entro 30 giorni"]},
   {n:"Skrill",d:"skrill.com",k:"wallet",r:"15€",v:"10€",e:DOC,u:"https://transfers.skrill.com/smt/refer/code/giuseppem195",s:["Apri un conto Skrill con il nostro link","Verifica la tua identità","Invia un trasferimento accreditato al destinatario","Ricevi il bonus a trasferimento confermato"]},
   {n:"Buddybank UniCredit",d:"buddybank.com",k:"wallet",r:"50€",v:"50€",e:DOC,u:"https://buddybank.com",s:["Scarica l'app e apri il conto (prima volta)","Inserisci il codice B2514MWV5WTMHT","Completa almeno 10€ di operazioni in 30 giorni","Ricevi 50€ (entro 90 giorni lavorativi)"]},
   {n:"Revolut",d:"revolut.com",k:"wallet",r:"40€",v:"variabile",e:DOC,u:"https://revolut.com/referral/?referral-code=mcolalucacosta",s:["Registrati come nuovo cliente con il link","Aggiungi fondi (carta o bonifico)","Ordina la carta fisica","Fai gli acquisti minimi richiesti e ricevi il bonus"]},
   {n:"N26",d:"n26.com",k:"wallet",r:"5€",v:"5€",e:DOC,u:"https://n26.com/r/francesf7047?cid=630&lang=it",s:["Registrati a N26 con il nostro link","Apri e verifica il conto","Fai il primo pagamento con la carta (no PayPal) ≥ valore bonus","Ricevi il bonus (entro 60 giorni)"]},
   {n:"BBVA",d:"bbva.it",k:"wallet",r:"10€",v:"20€",e:DOC,u:"",s:["Apri il Conto Online con il codice","Attiva la carta di debito","Fai il primo acquisto con la carta entro 90 giorni","Ricevi 10€ (in circa una settimana)"]},
   {n:"Tinaba",d:"tinaba.com",k:"wallet",r:"10€",v:"20€",e:DOC,u:"http://bit.ly/2EueBxs",s:["Scarica l'app dal link (codice invito CBULEZ)","Registrati e completa l'attivazione del conto","Ricarica il wallet di almeno 20€ entro 30 giorni","Ricevi il bonus in app"]},
   {n:"RedotPay",d:"redotpay.com",k:"wallet",c:"Wallet & app · crypto",r:"5€",v:"commissioni USDT",e:DOC,u:"https://wap.redotpay.com/en/invite/?referralId=p8ph9",s:["Registrati a RedotPay con il nostro link (codice in registrazione)","Completa la verifica identità (KYC)","Ordina e attiva la carta RedotPay","Inizia a spendere: ricevi le ricompense in USDT"]},
   {n:"Vivid Money",d:"vivid.money",k:"wallet",r:"fino a 20€",v:"20€",e:DOC,u:"https://vivid.money/r/giuseppe32Y/3",s:["Apri il conto Vivid con il nostro link","Completa la verifica","Entro 90 giorni ricarica almeno 100€ (carta, Apple/Google Pay, SEPA, PayPal)","Ricevi il bonus di benvenuto"]},
   {n:"Isybank",d:"isybank.com",k:"wallet",r:"30€ buono Amazon",v:"premi isyToken",e:DOC,u:"https://www.isybank.com",s:["Scarica l'app isybank e registrati col piano isylight (conto + carta, gratis)","Attiva l'iniziativa 'isyToken Collection' nella sezione isyReward","Inserisci il codice amico T5TU7HCOD6 entro 15 giorni (max 30/09/2026)","Ricevi 7600 isyToken = buono Amazon da 30€"]},
   {n:"MyFin",d:"myfin.bg",k:"wallet",r:"10€",v:"10€",e:DOC,u:"https://ref.myfin.bg/referral/invitation-link",s:["Scarica l'app MyFin con il nostro link","Registrati inserendo il codice GI00IXHJ","Verifica l'identità con un documento","Fai pagamenti con la carta per oltre 10€","Ricevi 10€ nel tuo profilo MyFin"]},
   {n:"ING",d:"ing.it",k:"wallet",c:"Wallet & app · banca",r:"50€",v:"50€",e:DOC,u:"https://www.ing.it/per-i-miei-amici.html?code=A69B85",s:["Registrati al Conto Corrente Arancio PIÙ (gratuito) con il nostro link","Attiva anche il Conto Deposito e inserisci il codice A69B85","Fai un deposito di almeno 160€","Spendi almeno 150€ con la carta Mastercard entro il 30/09","Ricevi 50€ di cashback (entro il 30/11)"]},
   {n:"OKX",d:"okx.com",k:"exch",r:"fino a 150€",v:"variabile",e:DOC,u:"https://my.okx.com/it/join/2190615",s:["Registrati su OKX con il nostro link","Completa la verifica (KYC)","Deposita l'importo richiesto entro 14 giorni","Completa le attività nel Reward Center"]},
   {n:"Trading 212",d:"trading212.com",k:"exch",r:"8–100€",v:"8–100€",e:DOC,u:"https://www.trading212.com/invite/4Dqc4u3z6zF",s:["Iscriviti con il link (nuovo cliente)","Verifica l'account","Deposita il minimo (≈1€) entro 10 giorni","Ricevi un'azione gratis (8–100€) in 3 giorni"]},
   {n:"Scalable Capital",d:"scalable.capital",k:"exch",r:"25€",v:"25€",e:DOC,u:"https://it.scalable.capital/invito/b2jffq",s:["Apri un conto Broker con il nostro link","Completa la verifica","Esegui ordini per almeno 250€ totali","Mantieni il conto e ricevi 25€"]},
   {n:"Bitpanda",d:"bitpanda.com",k:"exch",r:"fino a 100€",v:"fino a 100€",e:DOC,u:"https://web.bitpanda.com/user/register/809163895002879668",s:["Registrati come nuovo utente con il nostro link","Completa la verifica (KYC)","Investi in crypto/BCI: a 500€ investiti ricevete 5€ ciascuno","Aumentando l'investito sali fino a 100€ (voucher)"]},
   {n:"Lendermarket",d:"lendermarket.com",k:"exch",c:"Exchange & investimenti · P2P lending",r:"75€",v:"75€",e:DOC,u:"https://app.lendermarket.com/referral/6dqz526l",s:["Registrati e verifica l'account con il nostro link","Deposita almeno 500€ cumulativi entro 30 giorni","Investi l'intero importo in qualsiasi prestito entro i primi 30 giorni","Mantieni gli investimenti per almeno 30 giorni: ricevete 75€ ciascuno"]},
   {n:"TopCashback",d:"topcashback.it",k:"cash",r:"5€",v:"15€",e:REG,u:"https://www.topcashback.it/ref/Mongio",s:["Registrati con il nostro link (basta l'email)","Acquista passando dai link TopCashback","Attendi che il cashback diventi disponibile (1–3 mesi)","Preleva su PayPal o conto (soglia zero)"]},
   {n:"Shein",d:"shein.com",k:"cash",r:"buono 50€",v:"15%",e:REG,u:"https://onelink.shein.com/17/5307cjjfcxmc",s:["Registrati o scarica l'app con il link","Applica il coupon al primo ordine","Completa il primo acquisto","Ottieni lo sconto di benvenuto"]},
   {n:"Temu",d:"temu.com",k:"cash",r:"fino al 40%",v:"crediti",e:REG,u:"https://temu.to/k/ev7a4huwmpp",s:["Iscriviti come nuovo utente con il link","Applica i coupon di benvenuto","Completa il primo ordine","Ottieni fino al 40% di sconto"]},
   {n:"Very Mobile",d:"verymobile.it",k:"altri",c:"Altri · mobile",r:"10€ ricarica",v:"—",e:SIM,u:"https://www.verymobile.it",s:["Vai su verymobile.it e acquista una SIM o porta il numero","In fase di acquisto clicca 'Hai un codice amico?'","Inserisci il codice PQCBEDMY","Ricevi fino a 10€ di ricarica omaggio"]},
   {n:"TheFork",d:"thefork.com",k:"altri",c:"Altri · ristoranti",r:"20€ (1000 Yums)",v:"—",e:REG,u:"https://tfk.io/1jxzauf0",s:["Scarica l'app TheFork con il nostro link","Registrati all'app","Prenota un ristorante inserendo il codice 81697807","Ricevi 1000 Yums (=20€) sulla prossima prenotazione"]}
  ];
  var logo=function(d){return "<img src='https://logo.clearbit.com/"+d+"' onerror=\"this.onerror=null;this.src='https://www.google.com/s2/favicons?domain="+d+"&sz=128'\" alt=''>";};
  var bonus=function(p){return "<div class='tg-bonus'><div class='tg-line tg-reg'><span class='lbl'>Bonus registrazione</span><span class='val'>"+p.r+"</span></div><div class='tg-line tg-inv'><span class='lbl'>Bonus invito</span><span class='val'>"+p.v+"</span></div></div>";};
  var cat=function(p){return p.c||L[p.k];};
  var cardHtml=function(p,i){var cta=p.u?"<a class='tg-cta' href='"+p.u+"' target='_blank' rel='nofollow noopener'>Ottieni il bonus →</a>":"<span class='tg-cta tg-soon'>Referral in arrivo</span>";return "<div class='tg-card' data-cat='"+p.k+"'><div class='tg-top'><span class='tg-logo'>"+logo(p.d)+"</span><div><div class='tg-name'>"+p.n+"</div><span class='tg-cat'>"+cat(p)+"</span></div></div>"+bonus(p)+"<div class='tg-elig'>"+p.e+"</div><div class='tg-actions'>"+cta+"<button class='tg-how' data-i='"+i+"'>Come funziona</button></div></div>";};
  var wrap=document.createElement('div'); wrap.id='tg-comp';
  var chips="<div class='tg-chips'><span>Carte di credito</span><span>Carte di debito</span><span>Wallet & exchange crypto</span><span>App di pagamento</span><span>Referral \"invita un amico\"</span><span>Conti online</span><span>Promo esclusive</span></div>";
  var steps5="<div class='tg-how-title'>Come funziona</div><div class='tg-steps5'><div class='tg-step'><span class='tg-num'>1</span>Scegli la categoria</div><div class='tg-step'><span class='tg-num'>2</span>Confronta bonus e requisiti</div><div class='tg-step'><span class='tg-num'>3</span>Leggi le condizioni</div><div class='tg-step'><span class='tg-num'>4</span>Accedi col link dedicato</div><div class='tg-step'><span class='tg-num'>5</span>Ottieni il bonus</div></div>";
  var filters="<div class='tg-filters'><button class='tg-filt tg-on' data-f='all'>Tutti</button><button class='tg-filt' data-f='wallet'>Wallet & app</button><button class='tg-filt' data-f='exch'>Exchange & investimenti</button><button class='tg-filt' data-f='cash'>Cashback</button><button class='tg-filt' data-f='altri'>Altri bonus</button></div>";
  var foot="<div id='tg-foot-sec'><div class='tg-trasp'><b>Trasparenza e aggiornamenti.</b> Monitoriamo e aggiorniamo regolarmente le offerte per darti informazioni accurate e facili da confrontare.</div><div class='tg-nota'>Nota: bonus, cashback e promozioni sono soggetti ai termini e condizioni dei rispettivi fornitori. Leggi sempre la documentazione ufficiale prima di aderire a un'offerta.</div></div>";
  var cards=""; for(var i=0;i<data.length;i++){cards+=cardHtml(data[i],i);}
  wrap.innerHTML="<div class='tg-inner'><div class='tg-hero'><div class='tg-h'>Confronta bonus, cashback e promozioni in un solo posto</div><div class='tg-sub'>Le migliori offerte per carte di credito e debito, wallet crypto, conti e app per inviare e ricevere denaro: bonus di benvenuto, cashback, premi fedeltà e promozioni per i nuovi utenti. Informazioni chiare, aggiornate e imparziali.</div><div class='tg-slogan'>Trova il bonus migliore. Confronta, scegli e risparmia.</div></div>"+chips+steps5+filters+"<div class='tg-grid'>"+cards+"</div>"+foot+"</div>";
  var main=document.querySelector('main.l-m')||document.querySelector('main')||document.querySelector('.l-page')||document.body;
  var ch=main.children, j;
  for(j=ch.length-1;j>=0;j--){ ch[j].style.display='none'; }
  main.insertBefore(wrap, main.firstChild);
  var modal=document.createElement('div'); modal.id='tg-modal'; modal.innerHTML="<div class='tg-mbody'></div>"; document.body.appendChild(modal);
  modal.addEventListener('click',function(e){if(e.target===modal)modal.style.display='none';});
  function openModal(i){var p=data[i];var cta=p.u?"<a class='tg-cta' href='"+p.u+"' target='_blank' rel='nofollow noopener'>Vai a "+p.n+" →</a>":"<span class='tg-cta tg-soon'>Link referral in arrivo</span>";var st="";for(var z=0;z<p.s.length;z++){st+="<li>"+p.s[z]+"</li>";}modal.querySelector('.tg-mbody').innerHTML="<button class='tg-mclose'>×</button><div class='tg-mhead'><span class='tg-logo'>"+logo(p.d)+"</span><div><div class='tg-name'>"+p.n+"</div><span class='tg-cat'>"+cat(p)+"</span></div></div>"+bonus(p)+"<div class='tg-mtitle'>Come ottenere il bonus</div><ol class='tg-steps'>"+st+"</ol><div class='tg-elig2'>Requisiti: "+p.e+"</div>"+cta+"<div class='tg-disc'>I dettagli possono variare: verifica sempre sulla pagina ufficiale del provider.</div>";modal.querySelector('.tg-mclose').addEventListener('click',function(){modal.style.display='none';});modal.style.display='flex';}
  var hows=wrap.querySelectorAll('.tg-how'); for(j=0;j<hows.length;j++){ hows[j].addEventListener('click',function(){openModal(+this.getAttribute('data-i'));}); }
  var fbtns=wrap.querySelectorAll('.tg-filt'); for(j=0;j<fbtns.length;j++){ fbtns[j].addEventListener('click',function(){for(var z=0;z<fbtns.length;z++){fbtns[z].classList.remove('tg-on');}this.classList.add('tg-on');var f=this.getAttribute('data-f');var cs=wrap.querySelectorAll('.tg-card');for(var y=0;y<cs.length;y++){cs[y].style.display=(f==='all'||cs[y].getAttribute('data-cat')===f)?'':'none';}}); }
  var img=document.querySelector('.wnd-logo-img');
  if(img && !document.getElementById('tg-logo')){var box=document.createElement('div');box.id='tg-logo';box.innerHTML="<svg width='290' height='78' viewBox='0 0 290 78' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='TuGuadagni'><rect x='6' y='13' width='56' height='52' rx='14' fill='#ffd02e'/><path d='M16 54 L28 42 L37 49 L51 30' fill='none' stroke='#0b1020' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/><path d='M43 28 L52 28 L52 37' fill='none' stroke='#0b1020' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/><text x='74' y='44' font-size='28' font-weight='800' fill='#ffd02e' font-family='Arial,sans-serif'>Tu<tspan fill='#ffffff'>Guadagni</tspan></text><text x='76' y='62' font-size='9' font-weight='600' letter-spacing='3' fill='#9fb4d8' font-family='Arial,sans-serif'>BONUS · CASHBACK · PROMO</text></svg>";img.parentElement.insertBefore(box,img);}
  var inf=null,all=document.querySelectorAll('header.l-h *');
  for(j=0;j<all.length;j++){ if(all[j].childElementCount===0 && /INFORMAZIONI A SCOPO/i.test(all[j].textContent)){inf=all[j];break;} }
  if(inf){var nn=inf;for(var q=0;q<5&&nn&&nn.tagName!=='HEADER';q++){var bgc=getComputedStyle(nn).backgroundColor;if(/^rgb\(2[0-9][0-9], 2[0-9][0-9], 2[0-9][0-9]/.test(bgc))nn.style.background='transparent';nn=nn.parentElement;}inf.style.cssText='background:transparent !important;color:#fff !important;font-weight:800 !important;letter-spacing:.05em !important;font-size:17px !important;padding:6px 0 !important;border:none !important;text-shadow:0 2px 14px rgba(0,0,0,.7);';}
 }catch(e){if(window.console)console.error('TuGuadagni:',e);}
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
