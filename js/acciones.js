// JavaScript Document
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
		$('#b1').tap(function(){//tap es para dar click en los dispositivos móviles
			navigator.notification.beep(1);
		});
		
		$('#v1').tap(function(){//tap es para dar click en los dispositivos móviles
			navigator.notification.vibrate(500);
		});
	});//device ready
	
		
	
});//ready
