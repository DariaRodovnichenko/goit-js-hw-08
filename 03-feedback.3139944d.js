!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,d=l||c||Function("return this")(),v=Object.prototype.toString,s=Math.max,m=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,u,a,f,l,c=0,d=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,f=setTimeout(h,t),d?j(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=u}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return v?m(n,u-(e-c)):n}(e))}function w(e){return f=void 0,b&&r?j(e):(r=i=void 0,a)}function T(){var e=p(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(v)return f=setTimeout(h,t),j(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=g(t)||0,y(n)&&(d=!!n.leading,u=(v="maxWait"in n)?s(g(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?a:w(p())},T}function y(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=y(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):i.test(e)?NaN:+e}var j=document.querySelector(".feedback-form"),S=document.querySelector("input"),O=document.querySelector("textarea"),h="feedback-form-state",w=_.throttle((function(){var e={email:S.value,message:O.value};localStorage.setItem(h,JSON.stringify(e))}),500);S.addEventListener("input",w),O.addEventListener("input",w);window.addEventListener("load",(function(){var e=localStorage.getItem(h);if(e){var t=JSON.parse(e);S.value=t.email,O.value=t.message}}));j.addEventListener("submit",(function(e){e.preventDefault();var t={email:S.value,message:O.value};console.log(t),localStorage.removeItem(h),S.value="",O.value=""}))}();
//# sourceMappingURL=03-feedback.3139944d.js.map
