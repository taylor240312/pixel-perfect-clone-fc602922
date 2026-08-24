export const META_PIXEL_ID = "1775174160374497";

export const META_PIXEL_BASE_CODE = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');
fbq('track','PageView');
(function(){
  var _fbq = window.fbq;
  window.fbq = function(){
    try {
      var a = Array.prototype.slice.call(arguments);
      if (a[0] === 'track' || a[0] === 'trackCustom') {
        console.log('[Meta Pixel] evento disparado:', a[1], a[2] || '');
        window.__metaPixelEvents = window.__metaPixelEvents || [];
        window.__metaPixelEvents.push({ event: a[1], data: a[2] || null, at: new Date().toISOString() });
      }
    } catch (e) {}
    return _fbq.apply(this, arguments);
  };
  for (var k in _fbq) { try { window.fbq[k] = _fbq[k]; } catch (e) {} }
})();
`;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires InitiateCheckout once per user click. Never throws, so the
 * redirect to the checkout always continues.
 */
export function trackInitiateCheckout() {
  try {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout");
    }
  } catch {
    // ignore — never block the redirect
  }
}
