var css = 'div#chat-history::-webkit-scrollbar{width:.8em;border:none}div#chat-history::-webkit-scrollbar-thumb{background:#e8e8e8;border-radius:50px}div#chat-history::-webkit-scrollbar-thumb:hover{background:#c5fff0}div#chat-history::-webkit-scrollbar-track{background:#a2a2a2;border-radius:50px}div#chat-history::-webkit-scrollbar,div#chat-history::-webkit-scrollbar-thumb,div#chat-history::-webkit-scrollbar-thumb:hover,div#chat-history::-webkit-scrollbar-track{border:.1px solid transparent;background-clip:padding-box;border-radius:50px}.h-100.w-100.p-3{padding:.5rem!important}div#chat-history{padding:5px;-webkit-mask-clip:padding-box}',
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
