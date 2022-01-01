// from slide 5
var img='';
var pix8=['a3.jpg','a4.jpg','logoslide2.jpg',
'a5.jpg','a7.jpg','a6.jpg','logoslide.jpg','a6.jpg'];
p8=0;

function slide8(){
	var holda1='<div class="" style="height:100%;width:200%"><img src="images2/'+pix8[p8]+'" id="adx8"  style="margin-left:-50%;width:50%; height:100%;" alt=" " />';
	
	p8x = p8-1;
	if(p8x<0){p8x=pix8.length-1;}
	var holda2='<img src="images2/'+pix8[(p8x)]+'" class="" style="width:50%;height:100%;" /></div>';
	document.getElementById('slid8').innerHTML=holda1+holda2;
	
	p8++;
	if(p8==pix8.length){p8=0;}
	$('#adx8').animate({'margin-left': '0%'}, 3000);
	//slideTxt();
	setTimeout('slide8()',6000);
}slide8();

function slideTxt(){
	$('#txt1').animate({'margin-right': '150%'}, 1500);
	$('#txt1').animate({'margin-right': '22px'}, 1500);
	
}

// from slide 9
var boxRe = '<div class="ce smallB01 small2"></div>';
var pix9=[
'<div class="ce smallB01 small2 boxGold">Photographic</div><br /> <div class="ce smallB01 boxGold">Advantures</div>',
boxRe,
'<div class="ce smallB01 small2 w">Professional portrait</div><br /> <div class="ce smallB01 boxGold">Book A Photoshoot</div>',
'<div class="ce smallB01 small2">Photoshoot Section</div>',
'<div class="ce smallB01 small2">Model Shoot</div>',
'<div class="ce smallB01 small2"> Kids</div><br /> <div class="ce smallB01"> PhotoShoot</div>',
'<div class="ce smallB01 small2">Best Creative</div><br /> <div class="ce smallB01">Concept</div>',
boxRe
];
p9=0;

function slide9(){
	var holda1='<div class="" \
	 style="height:100%;width:200%">\
	 <div id="adx9" class="rite" \
	 style="margin-left:0%;width:50%; height:100%;display:inline-block;\
	 text-align:left;" >'+pix9[p9]+'</div>';
	
	p9x = p9+1;
	if(p9==pix9.length-1){p9x=0;}
	var holda2='<div class="rite" style="width:50%;height:100%;display:inline-block;" >'+pix9[(p9x)]+'</div></div>';
	document.getElementById('slid9').innerHTML=holda1+holda2;
	
	p9++;
	if(p9==pix9.length){p9=0;}
	$('#adx9').animate({'margin-left': '-50%'}, 2000);
	
	setTimeout('slide9()',6000);
}slide9();