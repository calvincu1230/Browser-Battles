!function(t){var i={};function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)e.d(n,a,function(i){return t[i]}.bind(null,a));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="/dist/",e(e.s=1)}([function(t,i,e){},function(t,i,e){"use strict";e.r(i);e(0);function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(i,e,n){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.height=50,this.width=50,this.dmg=n,this.name=i.name,this.target=e,this.img=new Image,this.img.src="./src/images/rock.png",this.position={x:i.position.x+i.width/2,y:i.position.y+50},this.attackTop={x:e.position.x-e.width/5,y:e.position.y+e.height/2},this.attackBot={x:e.position.x+e.width-20,y:e.position.y},this.xVelocity=i.position.x>e.position.x?-150:150,this.yVelocity=150===this.xVelocity?-60:60,this.done=!1,this.finalPos=this.xVelocity>0?this.attackTop:this.attackBot}var i,e,a;return i=t,(e=[{key:"handleCollision",value:function(){this.target.health-=this.dmg,this.target.handleAttack(),this.target.health<=0&&(this.target.health=0)}},{key:"update",value:function(t){this.xVelocity>0?this.position.x<=this.finalPos.x||this.position.y>=this.finalPos.y?(this.position.x+=this.xVelocity/t,this.position.y+=this.yVelocity/t):this.done=!0:this.position.x>=this.finalPos.x||this.position.y<=this.finalPos.y?(this.position.x+=this.xVelocity/t,this.position.y+=this.yVelocity/t):this.done=!0}},{key:"draw",value:function(t){if(this.done)return null;t.drawImage(this.img,this.position.x,this.position.y,this.width,this.height)}}])&&n(i.prototype,e),a&&n(i,a),t}();function s(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(i,e,n){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameHeight=e,this.gameWidth=n,this.finalStatus=i,this.currentStatus="",this.height=125,this.width=400,this.count=0,this.length=i.length,this.position={x:this.gameWidth-this.width-50,y:this.gameHeight-this.height-30},this.draw=this.draw.bind(this),this.update=this.update.bind(this)}var i,e,n;return i=t,(e=[{key:"draw",value:function(t){t.rect(this.position.x,this.position.y,this.width,this.height),t.fillStyle="white",t.fill(),t.lineWidth=5,t.strokeStyle="black",t.stroke(),t.font="20px Arial",t.fillStyle="black";var i=this.position.x+20;t.fillText(this.currentStatus,i,this.position.y+this.height/1.75)}},{key:"update",value:function(){this.finalStatus.includes("win")?this.currentStatus=this.finalStatus:this.count<this.length&&(this.currentStatus+=this.finalStatus[this.count],this.count++)}}])&&s(i.prototype,e),n&&s(i,n),t}();function o(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(i,e,n){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.height=25,this.width=25,this.img=new Image,this.img.src="./src/images/heal.png",this.position={x:i,y:e+n/2},this.yVelocity=60,this.done=!1,this.finalPos={y:e-n/2}}var i,e,n;return i=t,(e=[{key:"handleCollision",value:function(){}},{key:"update",value:function(t){this.position.y>=this.finalPos.y?this.position.y-=this.yVelocity/t:this.done=!0}},{key:"draw",value:function(t){if(this.done)return null;t.drawImage(this.img,this.position.x,this.position.y,this.width,this.height)}}])&&o(i.prototype,e),n&&o(i,n),t}();function l(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(i,e,n,a,s){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=n,this.fileName=this.name.split(" ").join(""),this.img=new Image,this.img.src="./src/images/".concat(this.fileName,".png"),this.height=150,this.width=150,this.gameWidth=s,this.gameHeight=a,this.health=i,this.currentHealth=i,this.maxHealth=i,this.attacking=!1,this.inPosition=!1,this.items=[],this.inPosition=!1,this.statusText=null,this.attackText=null,this.attackPower=e,this.velocity=55,this.position={y:20,x:this.gameWidth-this.width-50},this.initialPosition={x:this.gameWidth},this.attackAnimation=this.attackAnimation.bind(this),this.heal=this.heal.bind(this)}var i,e,n;return i=t,(e=[{key:"draw",value:function(t,i){var e=this;this.attacked||t.drawImage(this.img,this.initialPosition.x,this.position.y,this.height,this.width),this.items.forEach((function(n,a){n.done&&(n.handleCollision(),delete e.items[a]),n.update(i),n.draw(t)}))}},{key:"update",value:function(t){t&&(this.initialPosition.x>this.position.x&&(this.initialPosition.x-=this.velocity/t),this.initialPosition.x<=this.position.x&&(this.inPosition=!0))}},{key:"handleAttack",value:function(){var t=this;this.attacked=!0;var i=setInterval((function(){clearInterval(i),t.attacked=!1}),20)}},{key:"attackAnimation",value:function(t){var i=this,e=Math.random(),n=Math.floor((e<.1?.1:e)*this.attackPower+5);this.statusText=new h("".concat(this.name," attacked ").concat(t.name," for ").concat(n," damage!"),this.gameHeight,this.gameWidth),this.attacking=!0;var s=0,o=n/3,r=setInterval((function(){s++,i.items.push(new a(i,t,o)),3===s&&clearInterval(r)}),250),l=setInterval((function(){clearInterval(l),i.attacking=!1}),2500)}},{key:"heal",value:function(){var t=this;this.healAnimation();var i=Math.floor(.1*this.maxHealth);this.statusText=new h("".concat(this.name," healed for ").concat(i,"!"),this.gameHeight,this.gameWidth),this.attacking=!0,this.health+=i,this.health>=100&&(this.health=100);var e=setInterval((function(){clearInterval(e),t.attacking=!1}),2500)}},{key:"healAnimation",value:function(){var t=this,i=0,e=this.width/5,n=this.position.x-this.width/2,a=setInterval((function(){10==++i&&clearInterval(a),6===i&&(e=t.width/5),e+=t.width/5,t.items.push(new r(n+e,t.position.y+t.height/2,t.height))}),100)}},{key:"playTurn",value:function(t){var i=this,e=this.health<20&&t.health>20?function(){return i.heal()}:function(t){return i.attackAnimation(t)};setTimeout((function(){return e(t)}),1)}}])&&l(i.prototype,e),n&&l(i,n),t}();function u(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=function(){function t(i,e,n,a,s){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=n,this.fileName=this.name.split(" ").join(""),this.img=new Image,this.img.src="./src/images/".concat(this.fileName,".png"),this.height=150,this.width=150,this.health=i,this.currentHealth=i,this.gameHeight=a,this.gameWidth=s,this.maxHealth=i,this.attacking=!1,this.attacked=!1,this.items=[],this.inPosition=!1,this.statusText=null,this.attackText=null,this.healText=null,this.attackPower=e,this.velocity=55,this.position={y:this.gameHeight-this.height-50,x:40},this.initialPosition={x:-this.width},this.attackAnimation=this.attackAnimation.bind(this),this.draw=this.draw.bind(this)}var i,e,n;return i=t,(e=[{key:"draw",value:function(t,i){var e=this;this.attacked||t.drawImage(this.img,this.initialPosition.x,this.position.y,this.height,this.width),this.items.forEach((function(n,a){n.done&&(n.handleCollision(),delete e.items[a]),n.update(i),n.draw(t)}))}},{key:"update",value:function(t){t&&(this.initialPosition.x<this.position.x&&(this.initialPosition.x+=this.velocity/t),this.initialPosition.x>=this.position.x&&(this.inPosition=!0))}},{key:"handleAttack",value:function(){var t=this;this.attacked=!0;var i=setInterval((function(){clearInterval(i),t.attacked=!1}),20)}},{key:"attackAnimation",value:function(t){var i=this,e=Math.random(),n=Math.floor((e<.1?.1:e)*this.attackPower+5);this.statusText=new h("".concat(this.name," attacked ").concat(t.name," for ").concat(n," damage!"),this.gameHeight,this.gameWidth),this.attacking=!0;var s=0,o=n/3,r=setInterval((function(){s++,i.items.push(new a(i,t,o)),3===s&&clearInterval(r)}),250),l=setInterval((function(){clearInterval(l),i.attacking=!1}),2500)}},{key:"heal",value:function(){var t=this;this.healAnimation();var i=Math.floor(.1*this.maxHealth);this.statusText=new h("".concat(this.name," healed for ").concat(i,"!"),this.gameHeight,this.gameWidth),this.attacking=!0,this.health+=i,this.health>=100&&(this.health=100);var e=setInterval((function(){clearInterval(e),t.attacking=!1}),2500)}},{key:"healAnimation",value:function(){var t=this,i=0,e=this.width/5,n=this.position.x-this.width/2,a=setInterval((function(){10==++i&&clearInterval(a),6===i&&(e=t.width/5),e+=t.width/5,t.items.push(new r(n+e,t.position.y+t.height/2,t.height))}),100)}}])&&u(i.prototype,e),n&&u(i,n),t}();function d(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function t(i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameHeight=i.gameHeight,this.gameWidth=i.gameWidth,this.height=25,this.width=.75*i.width,this.player=i,this.draw=this.draw.bind(this),this.position={x:i.position.x+i.width/8,y:i.position.y+i.height+10}}var i,e,n;return i=t,(e=[{key:"update",value:function(t){this.player.currentHealth!==this.player.health&&(this.player.currentHealth<this.player.health&&(this.player.currentHealth+=.5),this.player.currentHealth>this.player.health&&(this.player.currentHealth-=.5))}},{key:"draw",value:function(t){this.player.inPosition&&(t.fillStyle="white",t.fillRect(this.position.x,this.position.y,this.width,this.height),t.fillStyle="red",t.fillRect(this.position.x,this.position.y,this.width*(this.player.currentHealth/this.player.maxHealth),this.height),t.font="16px Arial",t.fillStyle="black",t.fillText(Math.round(this.player.currentHealth),this.position.x+this.width/2.5,this.position.y+this.height-5))}}])&&d(i.prototype,e),n&&d(i,n),t}();function y(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var m=function(){function t(i,e,n){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameHeight=i,this.gameWidth=e,this.game=n,this.height=125,this.width=400,this.selected=0,this.optionsText=["Attack","Heal","Quit"],this.options=[this.attack,this.heal,this.quit],this.position={x:this.gameWidth-this.width-50,y:this.gameHeight-this.height-30}}var i,e,n;return i=t,(e=[{key:"drawLine",value:function(t,i){0===this.selected?(t.beginPath(),t.moveTo(i,this.gameHeight-75),t.lineTo(i+85,this.gameHeight-75),t.closePath(),t.stroke()):1===this.selected?(t.beginPath(),t.moveTo(i+115,this.gameHeight-75),t.lineTo(i+180,this.gameHeight-75),t.closePath(),t.stroke()):2===this.selected&&(t.beginPath(),t.moveTo(i+210,this.gameHeight-75),t.lineTo(i+270,this.gameHeight-75),t.closePath(),t.stroke())}},{key:"draw",value:function(t){t.rect(this.position.x,this.position.y,this.width,this.height),t.fillStyle="white",t.fill(),t.lineWidth=5,t.strokeStyle="black",t.stroke();var i=this.optionsText.join("    ");t.font="30px Arial",t.fillStyle="black";var e=this.position.x+this.width/6;t.fillText(i,e,this.position.y+this.height/1.75),this.drawLine(t,e)}},{key:"attack",value:function(t,i){t.attackAnimation(i)}},{key:"heal",value:function(t){t.heal()}},{key:"quit",value:function(){console.log("Button not implemented yet!")}}])&&y(i.prototype,e),n&&y(i,n),t}();function g(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(i,e){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.player=i,this.computer=e,this.gameState=!0,this.activeAttack=!1,this.start=!1,this.playHealth=new f(this.player),this.compHealth=new f(this.computer),this.battleOptions=new m(this.player.gameHeight,this.player.gameWidth,this),this.winnerText=null,this.currentPlayer=this.player,this.status=null,this.changeTurn=this.changeTurn.bind(this)}var i,e,n;return i=t,(e=[{key:"changeTurn",value:function(){this.currentPlayer===this.player?this.currentPlayer=this.computer:this.currentPlayer=this.player}},{key:"winner",value:function(){var t="";return this.player.health<=0&&(t="".concat(this.computer.name," wins!")),this.computer.health<=0&&(t="".concat(this.player.name," wins!")),!!t&&(this.winnerText=new h(t,this.player.gameHeight,this.player.gameWidth),!0)}},{key:"gameOver",value:function(){return(this.player.currentHealth<=0||this.computer.currentHealth<=0)&&(this.gameState=!1,!0)}}])&&g(i.prototype,e),n&&g(i,n),t}();document.addEventListener("DOMContentLoaded",(function(){var t,i,e,n=document.getElementById("game-board").getContext("2d"),a=document.getElementById("menu");window.addEventListener("keypress",(function s(h){32===h.keyCode&&(n.clearRect(0,0,840,480),a.classList.add("close-menu"),window.removeEventListener("keypress",s),window.addEventListener("keydown",o),i=new p(100,20,"Chrome",480,840),e=new c(100,20,"Firefox",480,840),t=new v(i,e),l())}));var s=document.getElementById("game-over"),h=function n(a){32===a.keyCode&&(s.classList.add("close-menu"),window.removeEventListener("keypress",n),window.addEventListener("keydown",o),i=new p(100,20,"Chrome",480,840),e=new c(100,20,"Firefox",480,840),t=new v(i,e),l())},o=function(i){if(t.player.inPosition&&t.computer.inPosition&&(t.start=!0),t.currentPlayer===t.player&&!1===t.activeAttack&&!0===t.start){var e=t.battleOptions.selected;switch(i.keyCode){case 37:i.preventDefault(),(e-=1)<0&&(e=t.battleOptions.options.length-1),t.battleOptions.selected=e;break;case 39:i.preventDefault(),++e>t.battleOptions.options.length-1&&(e=0),t.battleOptions.selected=e;break;case 13:i.preventDefault();var n=t.battleOptions.options[e];if(e===t.battleOptions.options.length-1)return void n();t.activeAttack=!0,t.changeTurn(),n(t.player,t.computer)}}},r=0;function l(i){var e=i-r;r=i,n.clearRect(0,0,840,480),n.beginPath(),t.computer.attacking||t.player.attacking||!t.gameState||(t.activeAttack=!1),t.currentPlayer!==t.computer||t.activeAttack||(t.activeAttack=!0,t.computer.playTurn(t.player),t.currentPlayer=t.player),t.winner()?(t.winnerText.update(),t.winnerText.draw(n)):t.currentPlayer===t.player&&t.activeAttack?t.computer.statusText?(t.computer.statusText.update(),t.computer.statusText.draw(n)):t.battleOptions.draw(n):t.currentPlayer===t.computer&&t.activeAttack?(t.player.statusText.update(),t.player.statusText.draw(n)):t.battleOptions.draw(n),t.player.update(e),t.player.draw(n,e),t.computer.update(e),t.computer.draw(n,e),t.playHealth.update(e),t.playHealth.draw(n),t.compHealth.update(e),t.compHealth.draw(n),t.gameOver()&&!t.activeAttack&&(t.activeAttack=!0),t.gameState?requestAnimationFrame(l):(cancelAnimationFrame(l),setTimeout((function(){window.removeEventListener("keydown",o),s.classList.remove("close-menu"),window.addEventListener("keypress",h)}),1750))}}))}]);
//# sourceMappingURL=main.js.map