(() => {
  const TEXTAREA_ID = '__simpleClipboardTextarea';
  const clipboard = function (ctx) {
    let tboxEl = document.getElementById(TEXTAREA_ID);
    if (!tboxEl) {
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      const yPosition = window.pageYOffset || document.documentElement.scrollTop;
      tboxEl = document.createElement('textarea');
      tboxEl.style.cssText = [
        'font-size: 12pt',
        'border: 0',
        'padding: 0',
        'margin: 0',
        'position: absolute',
        `${isRTL ? 'right' : 'left'}: -9999px`,
        `top: ${yPosition}px`
      ].join(';');
      tboxEl.setAttribute('readonly', '');
      document.body.appendChild(tboxEl);
    }
    tboxEl.value = ctx;
    tboxEl.select();
    tboxEl.setSelectionRange(0, tboxEl.value.length);

    let succeeded;
    try {
      succeeded = document.execCommand('copy', false, null);
    } catch (err) {
      succeeded = false;
    }
    return succeeded;
  };
  if (typeof module !== 'undefined') {
    module.exports = clipboard;
  } else if (typeof define !== 'undefined') {
    window.define([], () => clipboard);
  } else {
    window.clipboard = clipboard;
  }
})();

