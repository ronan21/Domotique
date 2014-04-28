var j=4;
var menuvadmin=new Array;
var menuvadmincol0=new Array; menuvadmincol0[0]="Module"; menuvadmincol0[1]="datavisible";
var menuvadmincol1=new Array; menuvadmincol1[0]="piece"; menuvadmincol1[1]="datahidden";
var menuvadmincol2=new Array; menuvadmincol2[0]="Email"; menuvadmincol2[1]="datahidden";
var menuvadmincol3=new Array; menuvadmincol3[0]="IFTTT"; menuvadmincol3[1]="datahidden";
menuvadmin[0]=menuvadmincol0;
menuvadmin[1]=menuvadmincol1;
menuvadmin[2]=menuvadmincol2;
menuvadmin[3]=menuvadmincol3;

function menuvloadadmin(){
data ="";
for (i=0;i<j;i++)
	{
	data = data +"<H1><a href='#' onClick='javascript:menuvselectadmin("+i+")'><b>" + menuvadmin[i][0] +"</b></a></H1>";
	document.getElementById(menuvadmin[i][0]).className = menuvadmin[i][1];
	}
document.getElementById("menuv").innerHTML = data;
}
function menuvselectadmin(obj){
for (i = 0; i < j; i++) 
	{ 
	menuvadmin[i][1] = "datahidden";
	} 
menuvadmin[obj][1] = "datavisible";
menuvloadadmin();
}
