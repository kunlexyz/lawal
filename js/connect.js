/*
function mODE(elem){
elem.css({"margin-left": siz+"px"});

}
mODE('#logoTem');
*/

// font setting - handwritting setting

//......
var old='';oldx='';
function openNav() {
  document.getElementById("myNav").style.width = "75%";
  document.getElementsByClassName('overlay2')[0].style.display='block';
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementsByClassName('overlay2')[0].style.display='none';
}

//****a function for loading security
function loadGate(){
	var gate = '<div class="contentChap ce" id="verify" style="position:fixed;"><div class="headaChap">To Get this chapter, you must activate this app<br />Version: 1.0.2</div>Verification Number:<div id="vN" class="heada" style="font-size:33px;">XXXXX</div><div class="imDesc">Enter the Activation Number below:</div><input type="text" onblur="upperC()" id="act" name="act" style="border:solid 3px #090; min-width:300px; max-width:95%; font-size:33px; text-align:center" /><br /><button onclick="activ8()">Activate</button><div class="content ce" style="margin-top:9px; background-color:#C8FDA8"><div id="activate">To Get your activation number</div><strong>Contact:</strong><br /><img src="../images/wh.png" /><br />08033527655<br />+2348033527655</div><button onclick="rem()">removeIt</button><div id="tk"></div></div>';
	DIVcontent = document.getElementById('navig8').innerHTML;
	document.getElementById('navig8').innerHTML = gate + DIVcontent;
	
}
/*************YEK**********/
var leta = 'ZYXWVEDCBA';
letta = 'JKLMNOPQRS';
text = '';
textLetta = '';
//generator
function gener(){
	text = '';
			for (i = 0; i < 5; i++) {
			text += leta[Math.floor(Math.random()*9)];
			}
  	localStorage.biO = text;
	localStorage.actN = 0;
	
	textLetta = '';
	
			for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
			}
			for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
			}
  	localStorage.actidKey = textLetta;
}
//acti ....the id number corespondant
//idKey() is just for key generation that is not useful in this development
function idKey(){
		text2 = '';
		for(ii = 3; ii < 5; ii++) {
			for (i = 0; i < leta.length; i++) {
				if(localStorage.biO[ii]==leta[i]){text2+=i;break;}
			}}
		for(iii = 2; iii >= 0; iii--) {
			for (i = 0; i < leta.length; i++) {
				if(localStorage.biO[iii]==leta[i]){text2+=i;break;}
			}}
	//debugger** document.getElementsByClassName('chap')[2].innerHTML=text2;
	text3='';
			for (iii = 0; iii < 5; iii++) {
				if(iii==4){
				text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
				else{
				text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
				
			}}
	//debugger** document.getElementsByClassName('chap')[3].innerHTML=text3;
	
	text4='';
	/*
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < 9; i++) {
				if(text3[ii]==leta[i]){text4+=i;break;}
			}}
	*/
			for (i = 0; i < 5; i++) {
			text4 += leta[text3[i]];
			}
	//debugger*** document.getElementsByClassName('chap')[4].innerHTML=text4;
	//remove this localStorage.actN before converstion 
	localStorage.actidKey = text4;
}

function verify(){
	//if(localStorage.actidKey)
	if(typeof localStorage.biO !== 'undefined'){
		document.getElementById('vN').innerHTML = localStorage.biO;
		headcon = 'To Get This Chapter, You Must Activate This App<br />Version: 3.0.1';
		document.getElementsByClassName('headaChap')[0].innerHTML = headcon + '<div> Your App ID:<span id="AppId_unpaid">'+localStorage.actidKey+'</span></div>';
		//check if app has been activate
		text2 = '';
		var veriKey = localStorage.actN;
		veriCon = localStorage.biO;
		actMe = localStorage.biO;
		veriCon.toUpperCase();
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < leta.length; i++) {
				if(veriCon[ii]==leta[i]){text2+=i;break;}
			}}
	if(text2.length < 5){
	document.getElementById('tk').innerHTML = veriCon+' This app is not activatedxx';
		}else{
			text3='';
					for (iii = 0; iii < 5; iii++) {
						if(iii==4){
						text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
						else{
						text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
						
					}}
			
			text4='';
					for (i = 0; i < 5; i++) {
					text4 += leta[text3[i]];
					}
			if(text4 == veriKey){					
					/*
	textLetta = '';
	
			for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
			}
			for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
			}
  	localStorage.actidKey = textLetta;
	*/
	localStorage.actN = veriKey;
				
					document.getElementById('tk').innerHTML = 'This app is activated !!!<br /> Reg No :'+ localStorage.actidKey;
					document.getElementById('verify').style.display = 'none';	
					document.getElementById('coHide').style.display = 'block';	
			}}
		//******
		}else{//alert('cant see');
		
		gener();
		document.getElementById('vN').innerHTML = localStorage.biO;
		headcon = document.getElementsByClassName('headaChap')[0].innerHTML;
		document.getElementsByClassName('headaChap')[0].innerHTML = headcon + '<div> Your App ID:<span id="AppId_unpaid">'+localStorage.actidKey+'</span></div>';
	}
	if(localStorage.actN){}else{//run remove actN key since it is no longer needed
		}
	//if(localStorage.actidKey){}else{idKey();}
	document.getElementById('tk').innerHTML = localStorage.biO+'=>'+localStorage.actN+'=>'+localStorage.actidKey;
		
}
// activation key should not be store anywhere
verify();

function activ8(){
		text2 = '';
		var veriKey = document.getElementById('act').value;
		veriCon = localStorage.biO;
		actMe = localStorage.biO;
		veriCon.toUpperCase();
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < leta.length; i++) {
				if(veriCon[ii]==leta[i]){text2+=i;break;}
			}}
	var yo = veriKey.toUpperCase();
	yb = "youngbrain"+actMe[3];
	yb = yb.toUpperCase();
	
	if(yo == yb){
		document.getElementById('tk').innerHTML = "Temporary activation key designed for YoungBrain staffs";
		document.getElementById('verify').style.display='none';
		document.getElementById('coHide').style.display='block';
		
		return;
	}
	if(text2.length < 5){
	document.getElementById('tk').innerHTML = veriCon+' is an Invalid Activation Key';
		}else{
			text3='';
					for (iii = 0; iii < 5; iii++) {
						if(iii==4){
						text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
						else{
						text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
						
					}}
			
			text4='';
					for (i = 0; i < 5; i++) {
					text4 += leta[text3[i]];
					}
			if(text4 == veriKey){					
					
	textLetta = '';
	
			for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
			}
			for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
			}
	localStorage.actN = veriKey;
				document.getElementById('verify').style.display='none';
				document.getElementById('coHide').style.display='block';
				/*
				document.getElementById('vNx').innerHTML = veriCon;
				document.getElementById('vN2').innerHTML = localStorage.actN;
				document.getElementById('AppId').innerHTML = localStorage.actidKey;
				*/
				
					document.getElementById('tk').innerHTML = 'successfully activated !!!<br />Thanks for your patronage<br /> Reg No :'+ localStorage.actidKey + '<br /> Click the button below to go back to "table of content" <br /> <a href="content.html"><button>Content</button></a>';	
				}else{
					document.getElementById('tk').innerHTML = veriCon+' is an Invalid Activation Key'+text4;
			};
	}
}

function upperC(){
		var veriCon = document.getElementById('act').value;
		document.getElementById('act').value = veriCon.toUpperCase();
}
	
var cc = localStorage.getItem("verN");
//alert(cc);
function rem(){
	localStorage.biO = 0;
	localStorage.actN = 0;
	localStorage.actidKey = 0;
}
/*** marker **/

var g=document.getElementsByClassName('qBox_bio');
gg=document.getElementsByClassName("resp");
xw='<span class="T_A_required">Teacher\'s attention required</span>';
function myFunction(){
for (var i = 0, len = g.length; i < len; i++)
{
//if(answer[i][0].length < 1){gg[i].innerHTML=xw}else{ gg[i].innerHTML=answer[i][0];}
    (function(index){
        g[i].onkeyup = function(){
              //alert(index+1)  ;
			  if(answer[index][0].length < 1){gg[index].innerHTML=xw}else{
				  
              var y=g[index].value.toLowerCase();
              xx=answer[index];
              mk = "";
              anso = "f";
              //alert(xx.length);
			  			 
			  
			  for (var ii = 0, len = xx.length; ii < len; ii++)
			  {x2 = xx[ii].toLowerCase();
			  if(y==x2){anso = "t";
			  /*
			  return anso;
			  break;
			  */
			  }
			  }
			  
if(anso=="t"){z= "<img src='../images/correctx.jpg' alt='correct' />";}
else{z= "<img src='../images/wrongx.jpg' alt='wrong' />"}//{z= x2}
//document.getElementById("demo").innerHTML=z;
gg[index].innerHTML=z;
        }}    
    })(i);

}
}
setTimeout(myFunction, 3000);
//***for w100 response
/*
var gw100=document.getElementsByClassName('w100');
ggw100=document.getElementsByClassName("w100resp");
for (var i = 0, len = g.length; i < len; i++)
{
//if(answer[i][0].length < 1){gg[i].innerHTML=xw}else{ gg[i].innerHTML=answer[i][0];}
    (function(index){
        gw100[i].onkeyup = function(){
			ggw100[i].innerHTML=xw;
			}
	})(i);
}
*/
var gw100=document.getElementsByClassName('w100');
var ggw100=document.getElementsByClassName("w100resp");
xw='<span class="T_A_required">Teacher\'s attention required</span>';
function myFunction2(){
	ggw100=document.getElementsByClassName("w100resp");
	for (var i = 0, len = ggw100.length; i < len; i++)
	{
	ggw100[i].innerHTML=xw;
	}
}
setTimeout(myFunction2, 3000);
//...themes
var them = 0;
function theme2(title,text,groundD,groundOdd,titleText){
	$('body').css({"background-color":groundD,"color":text});
	$('tr').css({"background-color":groundD,"color":text});
	$('tr:nth-child(odd)').css({"background-color":groundOdd,"color":text});
	$('.pa').css({"background-color":groundD,"color":text});
	$('.pa:nth-child(odd)').css({"background-color":groundOdd,"color":text});
	$('a').css({"color":text});
	$('.fig').css({"background-color":title,"color":titleText});
	$('.titBox').css({"background-color":title,"color":titleText});
	$('.headaChap').css({"background-color":title,"color":titleText});
	$('.co').css({"background-color":groundD,"color":text});
	$('.imDesc').css({"background-color":title,"color":titleText});
	$('.content').css({"background-color":title,"color":titleText});
}

function Th(){
	
	if(typeof localStorage.them === 'undefined'){them = 0;}else{
		them = localStorage.them;
	}
	
	if(typeof localStorage.H === 'undefined'){}else{
	H = localStorage.H;
	hs = localStorage.hs;
	
	$('h3').css({"font-size":H+"px"});
	$('h4').css({"font-size":H+"px"});
	$('.pa').css({"font-size":hs+"px"});
	}
	
	if(typeof localStorage.font === 'undefined'){}else{
	ft = localStorage.font;
	$('body').css({"font-family":ft});
	$('h3').css({"font-family":ft});
	$('h4').css({"font-family":ft});
	$('.pa').css({"font-family":ft});
	}
	
	if(them == 1 || them == '1'){
			theme2('#A85400','#000','#ffffa5','#ffc774','#fff');
	}else if(them == 2 || them == '2'){
			theme2('#F00','#000','#FFF','#fde','#fff');
	}else if(them == 3 || them == '3'){
			theme2('#060','#000','#dFd','#afa','#fff');
	}else if(them == 4 || them == '4'){
			theme2('#C09','#000','#fbb8fb','#fb99fb','#fff');
	}else if(them == 5 || them == '5'){
			theme2('#006','#000','#99F','#AAF','#FFF');
	}else if(them == 6 || them == '6'){
			theme2('#412','#DDD','#000','#111','#FFF',6);
	}
}
//Th();
var H = 18;
hs = 15;
ft = 'myFirstFont';

function sizIN(){
	H = H +3;
	hs = hs + 3;
	$('.headaChap').css({"font-size":H+"px"});
	$('.pa').css({"font-size":hs+"px"});
	localStorage.H = H;
	localStorage.hs = hs;
}
function sizDE(){
	H = H - 3;
	hs = hs - 3;
	$('.headaChap').css({"font-size":H+"px"});
	$('.pa').css({"font-size":hs+"px"});
}
function fontType(ourFont){
	var ourFont= document.getElementById('font').value;
	$('.headaChap').css({"font-family":ourFont});
	$('.pa').css({"font-family":ourFont});
	ft = ourFont;
}

//Code to mark the new options
function opMark(x,y)
{
	if(y == 1){
		document.getElementById(x).innerHTML = '<img src="../images/correctx.jpg" alt="correct">';
	}else{
		document.getElementById(x).innerHTML = '<img src="../images/wrongx.jpg" alt="wrong">';
		}
}

//***my code for paystack
function showPayStack_box(){
	document.getElementById('paymentForm').style.display = 'block';
	document.getElementById('btn001').style.display = 'none';
	
}

//*****StackPay

const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {

  e.preventDefault();

  var handler = PaystackPop.setup({

	key: 'pk_live_2ef52de9808da6451acc489eb37769a1c7171de5',
	
	//key: 'pk_test_76bb4dc899b8499152b3a334aa5748f424217937', //kunle's p-key

    email: document.getElementById("email-address").value,

    amount: 1500 * 100, //.....1500 is th price

    firstname: document.getElementById("first-name").value,

    lastname: document.getElementById("first-name").value,

    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you

    // label: "Optional string that replaces customer email"

    onClose: function(){

      alert('Window closed.');

    },

    callback: function(response){

      var message = 'Payment complete! Reference: ' + response.reference +
	  '\n if you cannot access the content, please close the app and reopen';

      alert(message);
	  
	  // The Opening
	  
			text3='';
					for (iii = 0; iii < 5; iii++) {
						if(iii==4){
						text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
						else{
						text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
						
					}}
			
			text4='';
					for (i = 0; i < 5; i++) {
					text4 += leta[text3[i]];
					}
/*	textLetta = '';
	
			for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
			}
			for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
			}
  	localStorage.actidKey = textLetta;
*/
	localStorage.actN = text4;
				
					document.getElementById('tk').innerHTML = 'successfully activated !!!<br />Thanks for your patronage<br /> Reg No :'+ localStorage.actidKey + '<br /> Click the button below to go back to "table of content" <br /> <a href="content.html"><button>Content</button></a>';
				document.getElementById('verify').style.display='none';
				document.getElementById('coHide').style.display='block';
				/*
				document.getElementById('vNx').innerHTML = veriCon;
				document.getElementById('vN2').innerHTML = localStorage.actN;
				document.getElementById('AppId').innerHTML = localStorage.actidKey;
				*/
    }

  });

  handler.openIframe();

}

//classwork

function ClassWork(assi){
	//$(assi).find('.ans05');
	var len = $(assi).find('.ans05').length;
	all_answ = '';
	for (i=0;i<len;i++){
		all_answ=all_answ+"*_"+$(assi+" .ans05:eq("+i+")").val();
	}
	alert(all_answ);
}

function no_submit(){
	document.getElementById('submit_overlay').style.display='none';
	document.getElementsByClassName('bac')[0].style.display='none';
}
function Are_u_sure(){
	document.getElementById('submit_overlay').style.display='block';
	document.getElementsByClassName('bac')[0].style.display='block';
}

/*
gg=document.getElementsByClassName("resp");
xw='<span class="T_A_required">Teacher\'s attention required</span>';
*/
var answeri='no answer for now';
	current_work = 'no_for_default';
	current_chap = '';
function sub01(x,y){
	current_work = x;
	current_chap = y;
	var g1=document.getElementsByClassName(current_work);
	var g2 = '';
	for (var i = 0; i < g1.length; i++)
	{
		g2=g2+document.getElementsByClassName(x)[i].value + "*-*";
	}
	answeri = g2;
	//answeri_2 = CL01;	
	//document.getElementById('submit_overlay').innerHTML = g2;
	Are_u_sure();
}

function submit_to_a_teacher(){
	alert(answeri);
	/*
	$.post("student_work.php",
	  {
		ans: answeri,
		work: current_chap,
		serial: answeri_2
	  },
	  function(data, status){
		alert("Data: " + data + "\nStatus: " + status);
		  //submitted successfully
	  }
	);
	*/
}
function tick_it(x,y){
	//alert('wok');
	var t=document.getElementById(x).checked;
	if(t==true){
		document.getElementById(y).value = 'Yes';
	}else{
		document.getElementById(y).value = 'No';
	}
}