function doLoad(value){err=document.getElementById('cerror');
var req=new JsHttpRequest();req.onreadystatechange=function(){if(req.readyState==4)
	{if(req.responseJS.error=='no'){ym(47266503,'reachGoal','form_send_first-consultation');err.innerHTML=' ';err.innerHTML=req.responseJS.ok; var url = "/thankyou.html"; $(location).attr('href',url); window.location = '/thankyou.html';}
	else{err.innerHTML=req.responseJS.er_mess; $(err).parent().parent().find('.inp').addClass('invalid');}}}
req.open(null,'comment.php',true);req.send({q:value});}

function doLoad2(value){err=document.getElementById('cerror2');
var req=new JsHttpRequest();req.onreadystatechange=function(){if(req.readyState==4)
	{if(req.responseJS.error=='no'){ym(47266503,'reachGoal','form_send_quiz');err.innerHTML=' ';err.innerHTML=req.responseJS.ok; var url = "/thankyou.html";  $(location).attr('href',url); window.location = '/thankyou.html';}
	else{err.innerHTML=req.responseJS.er_mess; $(err).parent().parent().find('.inp').addClass('invalid');}}}
req.open(null,'comment2.php',true);req.send({q:value});}

function doLoad3(value){err=document.getElementById('cerror3');
var req=new JsHttpRequest();req.onreadystatechange=function(){if(req.readyState==4)
	{if(req.responseJS.error=='no'){ym(47266503,'reachGoal','form_send_second-consultatoin');err.innerHTML=' ';err.innerHTML=req.responseJS.ok; var url = "/thankyou.html";  $(location).attr('href',url); window.location = '/thankyou.html';}
	else{err.innerHTML=req.responseJS.er_mess; $(err).parent().parent().find('.inp').addClass('invalid');}}}
req.open(null,'comment.php',true);req.send({q:value});}

function doLoad4(value){err=document.getElementById('cerror4');
var req=new JsHttpRequest();req.onreadystatechange=function(){if(req.readyState==4)
	{if(req.responseJS.error=='no'){ym(47266503,'reachGoal','form_send_last-consultation'); err.innerHTML=' ';err.innerHTML=req.responseJS.ok; var url = "/thankyou.html";  $(location).attr('href',url); window.location = '/thankyou.html';}
	else{err.innerHTML=req.responseJS.er_mess; $(err).parent().parent().find('.inp').addClass('invalid');}}}
req.open(null,'comment.php',true);req.send({q:value});}

function doLoad5(value){err=document.getElementById('cerror5');
var req=new JsHttpRequest();req.onreadystatechange=function(){if(req.readyState==4)
	{if(req.responseJS.error=='no'){ym(47266503,'reachGoal','form_send_down-schema'); err.innerHTML=' ';err.innerHTML=req.responseJS.ok; var url = "/thankyou.html";  $(location).attr('href',url); window.location = '/thankyou.html';}
	else{err.innerHTML=req.responseJS.er_mess; $(err).parent().parent().find('.inp').addClass('invalid');}}}
req.open(null,'comment.php',true);req.send({q:value});}

function doLoad6(value){err=document.getElementById('cerror6');
var req=new JsHttpRequest();req.onreadystatechange=function(){if(req.readyState==4)
	{if(req.responseJS.error=='no'){ym(47266503,'reachGoal','form_send_callback-up');err.innerHTML=' ';err.innerHTML=req.responseJS.ok; var url = "/thankyou.html";  $(location).attr('href',url); window.location = '/thankyou.html';}
	else{err.innerHTML=req.responseJS.er_mess; $(err).parent().parent().find('.inp').addClass('invalid');}}}
req.open(null,'comment.php',true);req.send({q:value});}

function doLoad7(value){err=document.getElementById('cerror7');
var req=new JsHttpRequest();req.onreadystatechange=function(){if(req.readyState==4)
	{if(req.responseJS.error=='no'){ym(47266503,'reachGoal','form_send_menu-schema'); err.innerHTML=' ';err.innerHTML=req.responseJS.ok; var url = "/thankyou.html";  $(location).attr('href',url); window.location = '/thankyou.html';}
	else{err.innerHTML=req.responseJS.er_mess; $(err).parent().parent().find('.inp').addClass('invalid');}}}
req.open(null,'comment.php',true);req.send({q:value});}

function doLoad8(value){err=document.getElementById('cerror8');
var req=new JsHttpRequest();req.onreadystatechange=function(){if(req.readyState==4)
	{if(req.responseJS.error=='no'){err.innerHTML=' ';err.innerHTML=req.responseJS.ok; var url = "/thankyou.html";  $(location).attr('href',url); window.location = '/thankyou.html';}
	else{err.innerHTML=req.responseJS.er_mess; $(err).parent().parent().find('.inp').addClass('invalid');}}}
req.open(null,'comment.php',true);req.send({q:value});}


