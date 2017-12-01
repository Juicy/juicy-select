function simulateChangeEvent(element) {
  if ('createEvent' in document) {
    var evt = document.createEvent('HTMLEvents');
    evt.initEvent('change', false, true);
    element.dispatchEvent(evt);
  } else element.fireEvent('onchange');
}
