function round(t,e){var n=Math.pow(10,e||0);return Math.round(t*n)/n}const random=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,delay=(t,e,...n)=>setTimeout(t,e,...n);var test,player=new Player,bob=new NPC({name:"Bob",race:"Human",money:10});function toggle_color(t,e,n){var i=document.querySelector(t),r=i.style.backgroundColor;setTransitionDurations(i,n),i.style.backgroundColor=i.style.backgroundColor===r?e:r,console.log(i.style.backgroundColor)}function getStringFromMs(t){return t+"ms"}function setTransitionDurations(t,e){var n=getStringFromMs(e);["-webkit","-o","-moz"].forEach(function(e){t.style.setProperty(e+"-transition-duration",n)}),t.style.transitionDuration=n}function leftClickOnTrigger(t){var e=t.target,n=game.scene.triggers;for(trigger in n)if(e.innerText==n[trigger].triggerText)for(action in $("#actionmenu ul").html(""),$("#actionmenu header").html(`Actions sur <b>${n[trigger].showName}</b>`),n[trigger].actions)$("#actionmenu ul").append(`<li class="${n[trigger].actions[action].style}" onclick="game.scene.triggers[${trigger}].actions[${action}].script();">${n[trigger].actions[action].name}</li>`);$("#actionmenu").css({display:"block",left:t.pageX-parseInt($("#actionmenu").css("min-width"),10)/2,top:t.pageY+5,animation:"open-actionmenu .3s ease forwards"})}function rightClickOnTrigger(t){var e=t.target,n=game.scene.triggers;for(trigger in n)e.innerText==n[trigger].triggerText&&n[trigger].rightClickScript&&n[trigger].rightClickScript()}time.start(),game.loadPage(0),new Notification({timeOut:40,txt:"Salut Valentin ! Ca fait quoi d'être beta-testeur lol",btns:[{txt:"J'en suis charmé",script(){this.parent.closeNotif(),new Notification({type:"success",timeOut:10,txt:"Super !"})}},{txt:"Ca me dégoute",script(){this.parent.closeNotif(),new Notification({type:"error",timeOut:10,txt:"Pas cool"})}}]}),new Notification({type:"success",txt:"Test : modals",timeOut:!1,btns:[{txt:"Modal 1",blockOnModal:!0,script(){modalList.Test1()}},{txt:"Modal 2",script(){modalList.Test2()}}]}),function(){Element.prototype.sdrag=function(t,e,n){var i=0,r=0,o=this,a=!1;function s(e){var a={};if(t&&t(o,e.pageX,i,e.pageY,r,a),"vertical"!==n){var s="pageX"in a?a.pageX:e.pageX;"startX"in a&&(i=a.startX),0=="skipX"in a&&(o.style.left=s-i+"px")}if("horizontal"!==n){var c="pageY"in a?a.pageY:e.pageY;"startY"in a&&(r=a.startY),0=="skipY"in a&&(o.style.top=c-r+"px")}}this.addEventListener("mousedown",function(t){if(!(t.currentTarget instanceof HTMLElement||t.currentTarget instanceof SVGElement))throw new Error("Your target must be an html element");a=!0;var e=o.style.left?parseInt(o.style.left):0,n=o.style.top?parseInt(o.style.top):0;i=t.pageX-e,r=t.pageY-n,window.addEventListener("mousemove",s)}),window.addEventListener("mouseup",function(t){!0===a&&(a=!1,window.removeEventListener("mousemove",s),e&&e(o,t.pageX,i,t.pageY,r))})}}(),document.querySelectorAll("#actionmenu")[0].sdrag(),$(document).on("contextmenu",function(){return!1}),$("#actionmenu").on("click",function(t){t.stopPropagation(),$(t.target||t.srcElement).is("li")&&$("#actionmenu").css("display","")}),$(document).on("click",function(t){t.target!=$("#actionmenu")&&$("#actionmenu").css("display","")}),$(document).on("click",".click",function(t){if(t.stopPropagation(),1===t.which)leftClickOnTrigger(t);else if(3===t.which)return rightClickOnTrigger(t),!1});