var css = 'div#chat-tab-container>.tab-content.flex-grow-1.d-flex{background:#4444448c!important;border-radius:0 10px 10px 10px!important}div#chat-tab-container a.nav-link.active{background:#4444448c;border-radius:10px 10px 0 0}div#chat-history::-webkit-scrollbar,div#friends-list::-webkit-scrollbar,div#scoreboard::-webkit-scrollbar{width:.8em;border:none}div#chat-history::-webkit-scrollbar-thumb,div#friends-list::-webkit-scrollbar-thumb,div#scoreboard::-webkit-scrollbar-thumb{background:#656565ba;border-radius:50px}div#chat-history::-webkit-scrollbar-thumb:hover,div#friends-list::-webkit-scrollbar-thumb:hover,div#scoreboard::-webkit-scrollbar-thumb:hover{background:#7d7d7dc9}div#chat-history::-webkit-scrollbar-track,div#friends-list::-webkit-scrollbar-track,div#scoreboard::-webkit-scrollbar-track{background:#3434348c;border-radius:50px}div#chat-history::-webkit-scrollbar,div#chat-history::-webkit-scrollbar-thumb,div#chat-history::-webkit-scrollbar-thumb:hover,div#chat-history::-webkit-scrollbar-track{border:.1px solid transparent;background-clip:padding-box;border-radius:50px}.h-100.w-100.p-3{padding:.5rem!important}div#chat-history{padding:5px;-webkit-mask-clip:padding-box}div#leaderboard,div#my-score-div{border-radius:10px;padding-right:1.1rem;padding-left:1.1rem}div#leaderboard{background:#4444444f;margin:.5rem}div#my-score-div{background:#444444a1}div#friends-list::-webkit-scrollbar,div#friends-list::-webkit-scrollbar-thumb,div#friends-list::-webkit-scrollbar-thumb:hover,div#friends-list::-webkit-scrollbar-track{border:5px solid transparent;background-clip:padding-box;border-radius:50px;width:20px}',
    head = document.getElementById('trade-div');
    style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
