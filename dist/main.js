(()=>{"use strict";var e={208:(e,t,s)=>{s.d(t,{A:()=>c});var r=s(601),n=s.n(r),o=s(314),a=s.n(o)()(n());a.push([e.id,":root {\n        --primary-color: #4c81b3;\n        --secondary-color: #f2f2f2;\n        --tertiary-color: #fff;\n        --error-color: #f53a2d;\n        --success-color: #4CAF50;\n        --line-color: #ccc;\n        --font-general-color: #474747;\n    }\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    color: var(--font-general-color);\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.mainContainer {\n    max-width: 500px;\n    width: 100%;\n}\n\n/* Form */\n\nform {\n    background: var(--secondary-color);\n    padding: 20px 30px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  /* Labels */\n  label {\n    font-weight: bold;\n    margin-bottom: 5px;\n    display: block;\n  }\n  \n  /* Inputs */\n  .email,\n  .postalCode,\n  .password,\n  .confirm-password,\n  .country {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 15px;\n    border: 1px solid var(--secondary-color);\n    border-radius: 5px;\n    font-size: 1rem;\n    background: var(--tertiary-color);\n  }\n  \n  .email:focus,\n  .country:focus,\n  .postalCode:focus,\n  .password:focus,\n  .confirm-password:focus {\n    border-color: var(--primary-color);\n    outline: none;\n    box-shadow: 0 0 4px var(--primary-color);\n  }\n\n  .borderError {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 15px;\n    border: 1px solid var(--error-color) !important;\n    box-shadow: 0 0 4px var(--error-color);\n    border-radius: 5px;\n    font-size: 1rem;\n    background: var(--tertiary-color);\n  }\n\n  .borderError:focus {\n    border-color: var(--error-color);\n    outline: none;\n    box-shadow: 0 0 4px var(--error-color);\n  }\n\n  .borderSuccess:focus {\n    border-color: var(--success-color);\n    outline: none;\n    box-shadow: 0 0 4px var(--success-color);\n  }\n\n  .borderSuccess {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 15px;\n    border: 1px solid var(--success-color);\n    box-shadow: 0 0 4px var(--success-color);\n    border-radius: 5px;\n    font-size: 1rem;\n    background: var(--tertiary-color);\n  }\n\n  /* Messages */\n\n  .floating-message {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: var(--tertiary-color);\n    padding: 10px 15px;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    color: var(--font-general-color);\n    max-width: 500px;\n    min-width: 300px;\n    width: 500px;\n    text-align: center;\n    height: 150px;\n  }\n  \n\n  .messageError,\n  .messageSuccess {\n    font-size: 0.8rem;\n    margin-top: 5px;\n  }\n\n  .messageError {\n    color: var(--error-color);\n  }\n\n  .messageSuccess {\n    color: var(--success-color);\n  }\n  \n  .message {\n    color: transparent;\n  }\n  /* Fieldset */\n  fieldset {\n    border: 1px solid var(--line-color);\n    border-radius: 5px;\n    padding: 15px;\n    margin-bottom: 20px;\n  }\n  \n  legend {\n    font-size: 1.1rem;\n    font-weight: bold;\n    padding: 0 5px;\n    color: var(--primary-color);\n  }\n  \n  /* Button */\n  .btn-submit,\n  .btn-reset {\n    background-color: var(--primary-color);\n    color: var(--tertiary-color);\n    padding: 10px 15px;\n    margin-top: 15px;\n    border: none;\n    border-radius: 5px;\n    font-size: 1rem;\n    cursor: pointer;\n    width: 100%;\n    transition: background-color 0.3s ease;\n  }\n  \n  .btn-submit:hover {\n    background-color: var(--success-color);\n  }\n\n  .btn-reset:hover {\n    background-color: var(--error-color);\n  }\n  \n",""]);const c=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",r=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),r&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),r&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,r,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(a[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),s&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=s):l[2]=s),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function s(e){for(var s=-1,r=0;r<t.length;r++)if(t[r].identifier===e){s=r;break}return s}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var i=e[c],d=r.base?i[0]+r.base:i[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var m=s(u),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var b=n(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:b,references:1})}a.push(u)}return a}function n(e,t){var s=t.domAPI(t);return s.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,n){var o=r(e=e||[],n=n||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=s(o[a]);t[c].references--}for(var i=r(e,n),d=0;d<o.length;d++){var l=s(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=i}}},659:e=>{var t={};e.exports=function(e,s){var r=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(s)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,s)=>{e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var r="";s.supports&&(r+="@supports (".concat(s.supports,") {")),s.media&&(r+="@media ".concat(s.media," {"));var n=void 0!==s.layer;n&&(r+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),r+=s.css,n&&(r+="}"),s.media&&(r+="}"),s.supports&&(r+="}");var o=s.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,s),o.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.nc=void 0;var r=s(72),n=s.n(r),o=s(825),a=s.n(o),c=s(659),i=s.n(c),d=s(56),l=s.n(d),u=s(540),m=s.n(u),p=s(113),b=s.n(p),g=s(208),v={};v.styleTagTransform=b(),v.setAttributes=l(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=m(),n()(g.A,v),g.A&&g.A.locals&&g.A.locals;const f=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,x=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,y=/^[0-9]{4,6}$/,L={email:!1,password:!1,postalCode:!1,country:!1,confirmPassword:!1},E=(e,t,s)=>{""===e.value?(t.textContent="Mensaje",t.classList.remove("message","messageSuccess","messageError"),t.classList.add("message"),e.classList.remove("borderSuccess","borderError",s),e.classList.add(s)):f.test(e.value)?(t.textContent="Email válido",t.classList.remove("message","messageError"),t.classList.add("messageSuccess"),e.classList.remove("borderError","borderSuccess",s),e.classList.add("borderSuccess"),L.email=!0):(t.textContent="Email no válido",t.classList.remove("message","messageSuccess"),t.classList.add("messageError"),e.classList.remove("borderSuccess","borderError",s),e.classList.add("borderError"))},h=(e,t,s)=>{""===e.value?(t.textContent="Seleccione un Pais",t.classList.remove("message","messageSuccess","messageError"),t.classList.add("messageError"),e.classList.remove("borderSuccess","borderError",s),e.classList.add("borderError")):(t.textContent="Pais seleccionado",t.classList.remove("message","messageError"),t.classList.add("messageSuccess"),e.classList.remove("borderError","borderSuccess",s),e.classList.add("borderSuccess"),L.country=!0)},C=(e,t,s)=>{""===e.value?(t.textContent="Mensaje",t.classList.remove("message","messageSuccess","messageError"),t.classList.add("message"),e.classList.remove("borderSuccess","borderError",s),e.classList.add(s)):y.test(e.value)?(t.textContent="Código postal válido",t.classList.remove("message","messageError"),t.classList.add("messageSuccess"),e.classList.remove("borderError","borderSuccess",s),e.classList.add("borderSuccess"),L.postalCode=!0):(t.textContent="El código postal debe tener entre 4 y 6 dígitos numéricos",t.classList.remove("message","messageSuccess"),t.classList.add("messageError"),e.classList.remove("borderSuccess","borderError",s),e.classList.add("borderError"))},w=(e,t,s)=>{""===e.value?(t.textContent="La contraseña debe tener mayusculas, minusculas, numeros y al menos 8 caracteres",t.classList.remove("message","messageSuccess","messageError"),t.classList.add("message"),e.classList.remove("borderSuccess","borderError",s),e.classList.add(s)):x.test(e.value)?(t.textContent="Contraseña válida",t.classList.remove("message","messageError"),t.classList.add("messageSuccess"),e.classList.remove("borderError","borderSuccess",s),e.classList.add("borderSuccess"),L.password=!0):(t.textContent="La contraseña debe tener mayusculas, minusculas, numeros y al menos 8 caracteres",t.classList.remove("message","messageSuccess"),t.classList.add("messageError"),e.classList.remove("borderSuccess","borderError",s),e.classList.add("borderError"))},S=(e,t,s,r)=>{""===e.value?(s.textContent="Mensaje",s.classList.remove("message","messageSuccess","messageError"),s.classList.add("message"),e.classList.remove("borderSuccess","borderError",r),e.classList.add(r)):e.value===t.value?(s.textContent="Contraseñas coinciden",s.classList.remove("message","messageError"),s.classList.add("messageSuccess"),e.classList.remove("borderError","borderSuccess",r),e.classList.add("borderSuccess"),L.confirmPassword=!0):(s.textContent="Las contraseñas no coinciden",s.classList.remove("message","messageSuccess"),s.classList.add("messageError"),e.classList.remove("borderSuccess","borderError",r),e.classList.add("borderError"))},A=(e="")=>{const t=document.createElement("fieldset"),s=document.createElement("legend");return s.textContent=e,t.appendChild(s),{fieldset:t}},M=(e,t,s)=>{const r=document.createElement("button");return r.type=e,r.classList=t,r.textContent=s,{button:r}},I=document.querySelector(".mainContainer");document.querySelector("body").appendChild((()=>{const e=document.createElement("span");return e.id="floating-message",e.className="floating-message",e.textContent="",e.style.display="none",e.style.color="",e.onclick=()=>{e.style.display="none"},document.body.appendChild(e),document.body.addEventListener("click",(()=>{e.style.display="none",document.getElementById("registrationForm").style.filter="blur(0px)"})),e})()),I.appendChild(function(){const e=document.createElement("form");e.id="registrationForm",e.className="form",e.setAttribute("name","registrationForm"),e.setAttribute("method","post"),e.setAttribute("action","#"),e.setAttribute("novalidate",!0);const{emailLabel:t,emailInput:s,emailMessage:r}=(()=>{const e=document.createElement("label");e.setAttribute("for","email"),e.textContent="Email:";const t=document.createElement("input");t.id="email",t.className="email",t.setAttribute("type","email"),t.setAttribute("name","email"),t.setAttribute("required",!0);const s=document.createElement("span");return s.id="emailMessage",s.className="message",s.textContent="Mensaje",{emailLabel:e,emailInput:t,emailMessage:s}})(),{fieldset:n}=A("País y código postal"),{countryLabel:o,countrySelect:a,countryMessage:c}=(()=>{const e=document.createElement("label");e.setAttribute("for","country"),e.textContent="País:";const t=document.createElement("select");t.id="country",t.className="country",t.setAttribute("name","country"),t.setAttribute("required",!0);const s=document.createElement("option");s.setAttribute("value",""),s.setAttribute("disabled",!0),s.setAttribute("selected",!0),s.textContent="Seleccione un país",t.appendChild(s),["Argentina","Brasil","Chile","Colombia","Uruguay"].forEach((e=>{const s=document.createElement("option");s.setAttribute("value",e.toLowerCase()),s.textContent=e,t.appendChild(s)}));const r=document.createElement("span");return r.id="countryMessage",r.className="message",r.textContent="Debe seleccionar un país",{countryLabel:e,countrySelect:t,countryMessage:r}})(),{postalLabel:i,postalInput:d,postalMessage:l}=(()=>{const e=document.createElement("label");e.setAttribute("for","postalCode"),e.textContent="Código Postal:";const t=document.createElement("input");t.id="postalCode",t.className="postalCode",t.setAttribute("type","text"),t.setAttribute("name","postalCode"),t.setAttribute("required",!0),t.setAttribute("minlength","4"),t.setAttribute("maxlength","6");const s=document.createElement("span");return s.id="postalMessage",s.className="message",s.textContent="Mensaje",{postalLabel:e,postalInput:t,postalMessage:s}})();n.append(o,a,c,i,d,l);const{fieldset:u}=A("Contraseña"),{passwordLabel:m,passwordInput:p,passwordMessage:b}=(()=>{const e=document.createElement("label");e.setAttribute("for","password"),e.textContent="Contraseña:";const t=document.createElement("input");t.id="password",t.className="password",t.setAttribute("type","password"),t.setAttribute("name","password"),t.setAttribute("required",!0),t.setAttribute("minlength","8");const s=document.createElement("span");return s.id="passwordMessage",s.className="message",s.textContent="La contraseña debe tener mayusculas, minusculas, numeros y al menos 8 caracteres",{passwordLabel:e,passwordInput:t,passwordMessage:s}})(),{confirmLabel:g,confirmInput:v,confirmMessage:f}=(()=>{const e=document.createElement("label");e.setAttribute("for","confirmPassword"),e.textContent="Confirmar Contraseña:";const t=document.createElement("input");t.id="confirmPassword",t.className="input confirm-password",t.setAttribute("type","password"),t.setAttribute("name","confirmPassword"),t.setAttribute("required",!0),t.setAttribute("minlength","8");const s=document.createElement("span");return s.id="confirmMessage",s.className="message",{confirmLabel:e,confirmInput:t,confirmMessage:s}})();u.append(m,p,b,g,v,f);const{button:x}=M("submit","btn-submit","Enviar"),{button:y}=M("reset","btn-reset","Limpiar");return y.addEventListener("click",(t=>{t.preventDefault(),function(){e.style.filter="none",e.reset(),E(s,r,"email");const t=document.getElementById("countryMessage");t.textContent="Seleccione un País",t.classList.remove("message","messageSuccess","messageError"),t.classList.add("message");const n=document.getElementById("country");n.value="Seleccione un país",n.classList.remove("borderError","borderSuccess","country"),n.classList.add("country"),w(p,b,"password"),C(d,l,"postalCode"),S(v,p,f,"confirm-password")}()})),x.addEventListener("click",(t=>{if(e.style.filter="blur(4px)",t.preventDefault(),L.email&&L.country&&L.password&&L.postalCode&&L.confirmPassword){t.stopPropagation();const s=document.getElementById("floating-message");s.style.display="flex",s.style.color="var(--success-color)",s.style.border="1px solid var(--success-color)",s.style.boxShadow="0 0 7px var(--success-color)",s.textContent="Formulario enviado",e.reset()}else{t.stopPropagation();const e=document.getElementById("floating-message");e.style.display="flex",e.style.color="var(--error-color)",e.style.border="1px solid var(--error-color)",e.style.boxShadow="0 0 7px var(--error-color)",e.textContent="Rellene todos los campos"}})),s.addEventListener("input",(()=>{E(s,r,"email")})),a.addEventListener("change",(()=>{h(a,c,"country")})),a.addEventListener("blur",(()=>{h(a,c,"country")})),p.addEventListener("input",(()=>{w(p,b,"password")})),v.addEventListener("input",(()=>{S(v,p,f,"confirm-password")})),d.addEventListener("input",(()=>{C(d,l,"postalCode")})),e.append(t,s,r,n,u,y,x),e}())})();