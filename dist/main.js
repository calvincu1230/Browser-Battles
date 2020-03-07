!function(t){var e={};function i(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(0);function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var n=function(){function t(e,i,a,n,h){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.height=150,this.width=150,this.gameWidth=h,this.health=e,this.currentHealth=e,this.maxHealth=e,this.name=a,this.fileName=this.name.split(" ").join(""),this.img=new Image,this.img.src="./dist/images/".concat(this.fileName,".png"),this.attackPower=i,this.position={y:20,x:this.gameWidth-this.width-40},this.initialPosition={y:20,x:this.gameWidth+this.width},this.attack=this.attack.bind(this),this.heal=this.heal.bind(this)}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){var e=this.position,i=this.height,a=this.width;t.drawImage(this.img,e.x,e.y,i,a)}},{key:"update",value:function(t){}},{key:"attack",value:function(t){var e=Math.floor(Math.random()*this.attackPower);t.health-=e,t.health<=0&&(t.health=0),console.log("".concat(this.name," attacked ").concat(t.name," for ").concat(e," damage!"))}},{key:"heal",value:function(){var t=Math.floor(10*Math.random())+5+this.attackPower/4;this.health+=t,this.health>=100&&(this.health=100),console.log("".concat(this.name," healed for ").concat(t,"!"))}},{key:"playTurn",value:function(t){var e=this,i=this.health<20&&t.health>20?function(){return e.heal()}:function(t){return e.attack(t)};console.log("Attacking"),setTimeout((function(){return i(t)}),500)}}])&&a(e.prototype,i),n&&a(e,n),t}();function h(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var o=function(){function t(e,i,a,n,h){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.height=150,this.width=150,this.health=e,this.currentHealth=e,this.gameHeight=n,this.gameWidth=h,this.maxHealth=e,this.attackPower=i,this.name=a,this.fileName=this.name.split(" ").join(""),this.img=new Image,this.img.src="./dist/images/".concat(this.fileName,".png"),this.position={y:this.gameHeight-this.height-50,x:40},this.initialPosition={y:this.gameHeight-this.height-50,x:-this.width},this.attack=this.attack.bind(this),this.draw=this.draw.bind(this)}var e,i,a;return e=t,(i=[{key:"draw",value:function(t){var e=this.position,i=this.height,a=this.width;t.drawImage(this.img,e.x,e.y,i,a)}},{key:"update",value:function(t){}},{key:"attack",value:function(t){var e=Math.floor(Math.random()*this.attackPower);t.health-=e,t.health<=0&&(t.health=0),console.log("".concat(this.name," attacked ").concat(t.name," for ").concat(e," damage!"))}},{key:"attackAnimation",value:function(){}},{key:"heal",value:function(){var t=Math.floor(.1*this.maxHealth);this.health+=t,this.health>=100&&(this.health=100),console.log("".concat(this.name," healed for ").concat(t,"!"))}},{key:"healAnimation",value:function(){}}])&&h(e.prototype,i),a&&h(e,a),t}();function r(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameHeight=e.gameHeight,this.gameWidth=e.gameWidth,this.height=25,this.width=.75*e.width,this.player=e,this.draw=this.draw.bind(this),this.position={x:e.position.x+e.width/8,y:e.position.y+e.height+10}}var e,i,a;return e=t,(i=[{key:"update",value:function(t){this.player.currentHealth!==this.player.health&&(this.player.currentHealth<this.player.health&&this.player.currentHealth++,this.player.currentHealth>this.player.health&&this.player.currentHealth--)}},{key:"draw",value:function(t){t.fillStyle="white",t.fillRect(this.position.x,this.position.y,this.width,this.height),t.fillStyle="red",t.fillRect(this.position.x,this.position.y,this.width*(this.player.currentHealth/this.player.maxHealth),this.height),t.font="16px Arial",t.fillStyle="black",t.fillText(this.player.currentHealth,this.position.x+this.width/2.5,this.position.y+this.height-5)}}])&&r(e.prototype,i),a&&r(e,a),t}();function l(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var c=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameHeight=e,this.gameWidth=i,this.height=125,this.width=400,this.selected=0,this.optionsText=["Attack","Heal","Quit"],this.options=[this.attack,this.heal,this.quit],this.position={x:this.gameWidth-this.width-50,y:this.gameHeight-this.height-30}}var e,i,a;return e=t,(i=[{key:"drawLine",value:function(t,e){0===this.selected?(t.beginPath(),t.moveTo(e,this.gameHeight-75),t.lineTo(e+85,this.gameHeight-75),t.closePath(),t.stroke()):1===this.selected?(t.beginPath(),t.moveTo(e+115,this.gameHeight-75),t.lineTo(e+180,this.gameHeight-75),t.closePath(),t.stroke()):2===this.selected&&(t.beginPath(),t.moveTo(e+210,this.gameHeight-75),t.lineTo(e+270,this.gameHeight-75),t.closePath(),t.stroke())}},{key:"draw",value:function(t){t.rect(this.position.x,this.position.y,this.width,this.height),t.fillStyle="white",t.fill(),t.lineWidth=5,t.strokeStyle="black",t.stroke();var e=this.optionsText.join("    ");t.font="30px Arial",t.fillStyle="black";var i=this.position.x+this.width/6;t.fillText(e,i,this.position.y+this.height/1.75),this.drawLine(t,i)}},{key:"attack",value:function(t,e){t.attack(e)}},{key:"heal",value:function(t){t.heal()}},{key:"quit",value:function(){}}])&&l(e.prototype,i),a&&l(e,a),t}();function u(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var d=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.player=e,this.computer=i,this.gameState=!0,this.activeAttack=!1,this.playHealth=new s(this.player),this.compHealth=new s(this.computer),this.battleOptions=new c(this.player.gameHeight,this.player.gameWidth),this.currentPlayer=this.player,this.players={chrome:{health:100,attackPower:20,name:"Chrome",attackText:"Chrome used ",healText:"Chrome used consume RAM and healed for "},firefox:{health:100,attackPower:20,name:"Firefox",attackText:"",healText:""},ie:{health:100,attackPower:0,name:"Internet Explorer",attackText:"Used Obsolete, it's pretty useless and did ",healText:""},safari:{health:100,attackPower:20,name:"Safari",attackText:"",healText:""}},this.changeTurn=this.changeTurn.bind(this)}var e,i,a;return e=t,(i=[{key:"changeTurn",value:function(){this.currentPlayer===this.player?this.currentPlayer=this.computer:this.currentPlayer=this.player}},{key:"winner",value:function(){this.player.health<=0&&console.log("".concat(this.computer.name," wins!")),this.computer.health<=0&&console.log("".concat(this.player.name," wins!"))}},{key:"gameOver",value:function(){return(this.player.health<=0||this.computer.health<=0)&&(this.gameState=!1,!0)}}])&&u(e.prototype,i),a&&u(e,a),t}();document.addEventListener("DOMContentLoaded",(function(){var t,e,i,a=document.getElementById("game-board").getContext("2d"),h=document.getElementById("menu");window.addEventListener("keypress",(function r(s){32===s.keyCode&&(a.clearRect(0,0,840,480),h.classList.add("close-menu"),window.removeEventListener("keypress",r),window.addEventListener("keydown",l),e=new o(100,20,"Chrome",480,840),i=new n(100,20,"Firefox",480,840),t=new d(e,i),u())}));var r=document.getElementById("game-over"),s=function h(s){32===s.keyCode&&(a.clearRect(0,0,840,480),r.classList.add("close-menu"),window.removeEventListener("keypress",h),window.addEventListener("keydown",l),e=new o(100,20,"Chrome",480,840),i=new n(100,20,"Firefox",480,840),t=new d(e,i),u())},l=function(e){if(t.currentPlayer===t.player&&!1===t.activeAttack){var i=t.battleOptions.selected;switch(e.keyCode){case 37:e.preventDefault(),i-=1,t.battleOptions.selected=i<0?t.battleOptions.options.length-1:i;break;case 39:e.preventDefault(),++i>t.battleOptions.options.length-1?t.battleOptions.selected=0:t.battleOptions.selected=i;break;case 13:e.preventDefault();var a=t.battleOptions.options[i];if(i===t.battleOptions.options.length-1)return;t.changeTurn(),a(t.player,t.computer);break;case 81:e.preventDefault(),console.log("Button not implemented yet!")}}},c=0;function u(e){var i=e-c;c=e,a.clearRect(0,0,840,480),t.currentPlayer===t.computer&&!1===t.activeAttack&&(t.computer.playTurn(t.player),t.currentPlayer=t.player),t.player.draw(a),t.computer.draw(a),t.playHealth.update(i),t.playHealth.draw(a),t.compHealth.update(i),t.compHealth.draw(a),t.battleOptions.draw(a),t.gameOver()&&t.winner(),t.gameState?requestAnimationFrame(u):(cancelAnimationFrame(u),window.removeEventListener("keydown",l),r.classList.remove("close-menu"),window.addEventListener("keypress",s))}}))}]);
//# sourceMappingURL=main.js.map