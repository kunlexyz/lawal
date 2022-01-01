//nav.js
nav = '<div class="mCon2" onclick="openNav()">                                            <div class="menu_dash"></div>                                            <div class="menu_dash"></div>                                            <div class="menu_dash"></div>                                  </div>                                <!-- Pop_Out Menu Codes -->                                <div id="myNav" class="overlay">                                  <div class="closebtn close3" onclick="closeNav()">&times;</div>                                                <img class="coI" src="images/teacher startup.png" style="width:120px; border-radius:25px; margin:auto;"  />                                  <div class="overlay-content">                                                                      <a href="./index2.html">                                    <div class="menu1"><div class="bull"></div>Sample 2</div>                                    </a>                                                                        <a href="#">                                    <div class="menu1" onclick="">                                    <div class="bull"></div>Outting                                    </div>                                    </a>                                                                        <a href="#">                                    <div class="menu1" onclick=""><div class="bull"></div>Contact</div>                                    </a>                                                                        <a href="#">                                    <div class="menu1" onclick=""><div class="bull"></div>About Us</div>                                    </a>                                                                                                                                                                                                                                                        </div>                                </div>                                <div class="overlay2" onclick="closeNav()">                                </div><!-- -->';

document.getElementById('navig8').innerHTML=nav;

//document.getElementById('nav2').innerHTML=nav2;

/*
document.getElementById('nav2').innerHTML=ul;

https://javascriptweekly.com/link/104693/web
https://javascriptweekly.com/link/104651/web

*/

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
