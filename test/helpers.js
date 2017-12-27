function simulateChangeEvent(element) {
  var evt = new Event('change', { bubbles: true, composed: true });
  element.dispatchEvent(evt);
}
