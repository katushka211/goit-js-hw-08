!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(e,t,n){var r,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,l=t,f=e.apply(i,n)}function S(e){return l=e,a=setTimeout(h,t),d?y(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=b();if(O(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function w(e){return a=void 0,v&&r?y(e):(r=o=void 0,f)}function T(){var e=b(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return S(c);if(s)return a=setTimeout(h,t),y(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},T.flush=function(){return void 0===a?f:w(b())},T}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=f.test(t);return i||a.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var S,O="feedback-form-state",h={},w=document.querySelector(".feedback-form"),T=document.querySelector(".feedback-form input"),x=document.querySelector(".feedback-form textarea");(S=localStorage.getItem(O))&&(S=JSON.parse(S),T.value=S.email,x.value=S.message),w.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(O)})),w.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(h))}),500))}();
//# sourceMappingURL=03-feedback.6becc33f.js.map
