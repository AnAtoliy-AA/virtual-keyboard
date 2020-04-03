!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class s{constructor(){this.domScreen=this.createDomScreen()}createDomScreen(){let e=document.createElement("textarea");e.classList.add("virtual-screen");let t=document.body.appendChild(e);return t.textContent="",t}addSymbolToScreen(e){this.domScreen.textContent+=e}removeLastSymbol(){this.domScreen.textContent=this.domScreen.textContent.slice(0,-1)}addSpaceToScreen(){this.domScreen.textContent+=" "}addTabToScreen(){this.domScreen.textContent+="\t"}}class r{constructor(e,t,n,s,r,a,o,i){this.value=e,this.valueLabel=t,this.rusValue=n,this.rusValueLabel=s,this.keyCode=r,this.row=a,this.position=o,this.width=i||40,this.id=r}}function a(){return[new r("`","~","ё","ё",192,1,1),new r("1","1","1","1",49,1,2),new r("2","2","2","2",50,1,3),new r("3","3","3","3",51,1,4),new r("4","4","4","4",52,1,5),new r("5","5","5","5",53,1,6),new r("6","6","6","6",54,1,7),new r("7","7","7","7",55,1,8),new r("8","8","8","8",56,1,9),new r("9","9","9","9",57,1,10),new r("0","0","0","0",48,1,11),new r("-","-","-","-",189,1,12),new r("=","=","=","=",187,1,13),new r("backspace","Backspace","backspace","Backspace",8,1,14,110),new r("tab","Tab","tab","Tab",9,2,1,60),new r("q","Q","й","Й",81,2,2),new r("w","W","ц","Ц",87,2,3),new r("e","E","у","У",69,2,4),new r("r","R","к","К",82,2,5),new r("t","T","е","Е",84,2,6),new r("y","Y","н","Н",89,2,7),new r("u","U","г","Г",85,2,8),new r("i","I","ш","Ш",73,2,9),new r("o","O","щ","Щ",79,2,10),new r("p","P","з","З",80,2,11),new r("[","[","х","Х",219,2,12),new r("]","]","ъ","Ъ",221,2,13),new r("\\","\\","\\","\\",220,2,14),new r("","DEL","","DEL",46,2,15),new r("capsLock","Caps Lock","capsLock","Caps Lock",20,3,1,90),new r("a","A","ф","Ф",65,3,2),new r("s","S","ы","Ы",83,3,3),new r("d","D","в","В",68,3,4),new r("f","F","а","А",70,3,5),new r("g","G","п","П",71,3,6),new r("h","H","р","Р",72,3,7),new r("j","J","о","О",74,3,8),new r("k","K","л","Л",75,3,9),new r("l","L","д","Д",76,3,10),new r(";",";","ж","Ж",186,3,11),new r("","'","Э","Э",222,3,12),new r("","Enter","","Enter",13,3,13,105),new r("","Shift","","Shift",16,4,1,110),new r("z","Z","я","Я",90,4,2),new r("x","X","ч","Ч",88,4,3),new r("c","C","с","С",67,4,4),new r("v","V","м","М",86,4,5),new r("b","B","и","И",66,4,6),new r("n","N","т","Т",78,4,7),new r("m","M","ь","Ь",77,4,8),new r(",",",","б","Б",188,4,9),new r(".",".","ю","Ю",190,4,10),new r("/","/","/","/",191,4,11),new r("","&uarr;","","&uarr;",38,4,12),new r("","Shift","","Shift",16,4,13,85),new r("","Ctrl","","Ctrl",17,5,1),new r("","Win","","Win",91,5,2),new r("","Alt","","Alt",18,5,3),new r("space","Space","space","Space",32,5,4,345),new r("","Alt","","Alt",18,5,5),new r("","&larr;","","&larr;",37,5,7),new r("","&darr;","","&darr;",40,5,8),new r("","&rarr;","","&rarr;",39,5,9),new r("","Ctrl","","Ctrl",17,5,6)]}class o{constructor(){this.vKeys=a(),this.domScreen=document.querySelector(".virtual-screen"),this.domKeyboard=function(){const e=document.body;let t=document.createElement("div");e.appendChild(t),t.classList.add("virtual-keyboard");let n=a();for(let e=1;e<6;e++){let n=document.createElement("div");n.id=`row_${e}`,n.classList.add("keyboard__row"),t.appendChild(n)}for(let e=0;e<n.length;e++){let t=n[e],s=document.createElement("div");s.innerHTML=t.valueLabel,s.style.width=t.width+"px",s.classList.add("keyboard__key"),s.id=t.id,document.getElementById(`row_${t.row}`).appendChild(s)}return document.querySelectorAll(".virtual-keyboard div")}(),this.domKeys=this.getDomKeys(),this.addActiveKeyboardKey(),this.bindPhysicalKeyboardEvents(),this.capsLockEnabled=!1,this.englishLanguage=!0,this.keepPressedButtonsArray=[]}getDomKeys(){return document.querySelectorAll(".keyboard__key")}addActiveKeyboardKey(){this.domKeys.forEach(e=>{e.addEventListener("mousedown",e=>{"20"!==e.target.id&&e.target.classList.add("keyboard__key_active"),this.pressKey(e)}),e.addEventListener("mouseup",()=>{this.domKeys.forEach(e=>this.removeClassKeyActive(e))})})}removeClassKeyActive(e){e.classList.remove("keyboard__key_active")}bindPhysicalKeyboardEvents(){const e=[...this.domKeys],t=this.removeClassKeyActive;document.addEventListener("keydown",t=>{const n=e.find(e=>e.id==t.keyCode);n&&"20"!==n.id&&n.classList.add("keyboard__key_active"),t.preventDefault(),this.addKeepPressedButtonsArray(n.id),this.pressKey(t)}),document.addEventListener("keyup",n=>{const s=e.find(e=>e.id==n.keyCode);e.forEach(e=>t(e)),this.removeKeepPressedButtonsArray(s.id)})}addKeepPressedButtonsArray(e){-1===this.keepPressedButtonsArray.indexOf(e)&&this.keepPressedButtonsArray.push(e)}removeKeepPressedButtonsArray(e){const t=this.keepPressedButtonsArray.indexOf(e);this.keepPressedButtonsArray.splice(t,1)}toggleCapsLock(){this.capsLockEnabled=!this.capsLockEnabled,document.getElementById("20").classList.toggle("keyboard__caps-lock_active")}prepareSymbolToShowInScreen(e){let t="";return t=this.englishLanguage?e.value:e.rusValue,t=this.capsLockEnabled?t.toUpperCase():t.toLowerCase(),t}analysePressedKeys(){2===this.keepPressedButtonsArray.filter(e=>"18"==e||"16"==e).length&&(this.toggleEnglishLanguage(),console.log("Change Locale"))}toggleEnglishLanguage(){this.englishLanguage=!this.englishLanguage,console.log(this.domKeys),this.domKeys.forEach(e=>{const t=this.vKeys.find(t=>t.id==e.id),n=t.valueLabel,s=t.rusValueLabel;e.innerHTML=this.englishLanguage?n:s})}pressKey(e){this.analysePressedKeys();let t=this.vKeys.find(t=>t.id==e.target.id||t.id==e.keyCode);switch(t.value){case"capsLock":this.toggleCapsLock();break;case"backspace":this.vScreen.removeLastSymbol();break;case"space":this.vScreen.addSpaceToScreen();break;case"tab":this.vScreen.addTabToScreen();break;default:this.vScreen.addSymbolToScreen(this.prepareSymbolToShowInScreen(t))}}setScreen(e){this.vScreen=e}}document.body.onload=function(){const e=new s;(new o).setScreen(e)}}]);