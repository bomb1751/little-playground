/* Custom game dragging uses pointer events; leave scrolling and form controls native. */
(()=>{
 const editable=target=>target instanceof Element&&Boolean(target.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])'));
 for(const type of ['contextmenu','selectstart','dragstart']){
  document.addEventListener(type,event=>{if(!editable(event.target))event.preventDefault();});
 }
})();
