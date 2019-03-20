let lastTime = 0;
let vendors = ["ms", "moz", "webkit", "o"];
let raf = window.requestAnimationFrame;
let caf = window.cancelAnimationFrame;
for (let x = 0; x < vendors.length && !raf; ++x) {
  raf = window[vendors[x] + "RequestAnimationFrame"];
  caf =
    window[vendors[x] + "CancelAnimationFrame"] ||
    window[vendors[x] + "CancelRequestAnimationFrame"];
}
if (!raf) {
  raf = function (callback) {
    let currTime = new Date().getTime();
    let timeToCall = Math.max(0, 16 - (currTime - lastTime));
    let id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}
if (!caf) {
  caf = function (id) {
    clearTimeout(id);
  };
}

export const requestAnimationFrame = raf;
export const cancelAnimationFrame = caf;