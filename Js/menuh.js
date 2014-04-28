var j=4;
var menuh=new Array;
var menuhcol0=new Array; menuhcol0[0]="Home";menuhcol0[1]="current"; menuhcol0[2]="datavisible";
var menuhcol1=new Array; menuhcol1[0]="Scheduler";menuhcol1[1]=""; menuhcol1[2]="datahidden";
var menuhcol2=new Array; menuhcol2[0]="Alert";menuhcol2[1]=""; menuhcol2[2]="datahidden";
var menuhcol3=new Array; menuhcol3[0]="Admin";menuhcol3[1]="e"; menuhcol3[2]="datahidden";
menuh[0]=menuhcol0;
menuh[1]=menuhcol1;
menuh[2]=menuhcol2;
menuh[3]=menuhcol3;

function menuhload(){
data ="<ul class='menuh'>";
for (i=0;i<j;i++)
	{
	//<li class="current" id='mHome' onclick='menuhselect("Home")'><a href="#"><b>Home</b></a></li>
	data=data +"<li class=" + menuh[i][1] + " id='m"+ menuh[i][0] + "' onclick='menuhselect("+i+")'><a href='#'><b>" + menuh[i][0] +"</b></a></li>";
	document.getElementById(menuh[i][0]).className = menuh[i][2];
	}
data = data +"</ul>";	
document.getElementById("menuh").innerHTML = data;
}
function menuhselect(obj){
for (i = 0; i < j; i++) 
	{ 
	menuh[i][1] = "";	
	menuh[i][2] = "datahidden";
	} 
menuh[obj][1] = "current";
menuh[obj][2] = "datavisible";
menuhload();
}
