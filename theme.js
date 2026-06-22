(function(){
if(window.__tgThemeInstalled)return;window.__tgThemeInstalled=true;
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
main.l-m, main.l-m *:not(a):not(button):not(.tg-cta):not(.tg-num):not(.tg-bonus){color:#fff !important;}
main.l-m h1,main.l-m h2,main.l-m h3,main.l-m h4{color:#ffd54a !important;text-shadow:0 2px 14px rgba(0,0,0,.7) !important;}
main.l-m p,main.l-m li,main.l-m td,main.l-m th,main.l-m span,main.l-m div{text-shadow:0 1px 8px rgba(0,0,0,.6);}
main.l-m a{color:#ffd54a !important;}
main.l-m a:hover{color:#fff !important;}
main.l-m table{background:rgba(10,14,34,.55) !important;border-radius:14px;border:1px solid rgba(255,255,255,.18) !important;}
main.l-m table th,main.l-m table td{border-color:rgba(255,255,255,.18) !important;background:transparent !important;}
footer.l-f, footer.l-f *{color:rgba(255,255,255,.85) !important;}
`;
var s=document.createElement('style');s.id='tg-theme-style';s.textContent=CSS;document.head.appendChild(s);
function init(){try{
  var img=document.querySelector('.wnd-logo-img');
  if(img && !document.getElementById('tg-logo')){
    var box=document.createElement('div');box.id='tg-logo';
    box.innerHTML="<svg width='290' height='78' viewBox='0 0 290 78' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='TuGuadagni'><rect x='2' y='9' width='60' height='60' rx='17' fill='#ffd02e'/><circle cx='18' cy='35' r='4.4' fill='#0b1020'/><path d='M16 51 L29 38 L37 44 L50 27' fill='none' stroke='#0b1020' stroke-width='5.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M42 25 L51 25 L51 34' fill='none' stroke='#0b1020' stroke-width='5.5' stroke-linecap='round' stroke-linejoin='round'/><text x='74' y='46' font-size='30' font-weight='800' fill='#ffd02e' font-family='Arial,sans-serif'>Tu<tspan fill='#ffffff'>Guadagni</tspan></text><text x='76' y='64' font-size='10' font-weight='600' letter-spacing='3' fill='#9fb4d8' font-family='Arial,sans-serif'>BONUS · CASHBACK · PROMO</text></svg>";
    img.parentElement.insertBefore(box,img);
  }
  var inf=null,all=document.querySelectorAll('header.l-h *');
  for(var j=0;j<all.length;j++){ if(all[j].childElementCount===0 && /INFORMAZIONI A SCOPO/i.test(all[j].textContent)){inf=all[j];break;} }
  if(inf){var nn=inf;for(var q=0;q<5&&nn&&nn.tagName!=='HEADER';q++){var bgc=getComputedStyle(nn).backgroundColor;if(/^rgb\(2[0-9][0-9], 2[0-9][0-9], 2[0-9][0-9]/.test(bgc))nn.style.background='transparent';nn=nn.parentElement;}inf.style.cssText='background:transparent !important;color:#fff !important;font-weight:800 !important;letter-spacing:.05em !important;font-size:17px !important;padding:6px 0 !important;border:none !important;text-shadow:0 2px 14px rgba(0,0,0,.7);';}
}catch(e){if(window.console)console.error('TuGuadagni theme:',e);}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
