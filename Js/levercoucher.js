function levelsoleil(_jour,_mois,_annee, _latitude, _longitude){
	var jour = _jour;
	var mois = _mois;
	var annee = _annee;
	var latitude = _latitude;
	var longitude = _longitude;
	//indicejour =TRUNC(MONTH($F7)*275/9)-TRUNC((MONTH($F7)+9)/12)*(1+TRUNC((YEAR($F7)-4*TRUNC(YEAR($F7)/4)+2)/3))+DAY($F7)-30
	var indicejour = (Math.floor(mois*275/9)-Math.floor((mois+9)/12)*(1+Math.floor((annee-4*Math.floor(annee/4)+2)/3))+jour-30);
	//M =MOD(357+0.9856*$G7;360)
	var M = (357+0.9856*indicejour)%360;
	//C =1.914*SIN(PI()/180*$H7)+0.02*SIN(PI()/180*2*$H7)
	var C = 1.914*Math.sin(Math.PI/180*M)+0.02*Math.sin(Math.PI/180*2*M);
	//L =MOD(280+$I7+0.9856*$G7;360)
	var L = ((280+C+0.9856*indicejour)%360);
	//R=-2.466*SIN(PI()/180*2*$J7)+0.053*SIN(PI()/180*4*$J7)
	var R = -2.466*Math.sin(Math.PI/180*2*L)+0.053*Math.sin(Math.PI/180*4*L);
	//equation du temps minutes =($I7+$K7)*4
	var tempsminutes = (C+R)*4;
	// signe =IF($L7<0;"-";"+")
	if (tempsminutes <0) 
		{
		var signe = "-";
		}
		else
		{
		var signe = "+";
		}
	//equation du temps m:s =ABS($L7)/24
	var tempsms = Math.abs(tempsminutes)/24;
	//declinaison Solaire =ASIN(0.3978*SIN(PI()/180*$J7))*180/PI()
	var decsolaire = Math.asin(0.3978*Math.sin(Math.PI/180*L))*180/Math.PI;
	//latitude =IF($E$2="N";(ABS($B$2)+($C$2+$D$2/60)/60);-(ABS($B$2)+($C$2+$D$2/60)/60))
	//var latitude =;
	//alert (latitude);
	//longitude =IF($E$3="W";$B$3+($C$3+$D$3/60)/60;-($B$3+($C$3+$D$3/60)/60))
	//var longitude =;
	//alert (longitude);
	//passage meridien Heure UTC =(12+$L7/60+$O$3*4/60+0)/24
	var meridienheure=(12+tempsminutes/60+longitude*4/60+0)/24;
	//passage meridien hauteur =90-$O$2+$O7
	var meridienhauteur = 90-latitude+decsolaire;
	//angle horaire ° =ACOS((-0.01454-SIN(PI()/180*$O7)*SIN(PI()/180*$O$2))/(COS(PI()/180*$O7)*COS(PI()/180*$O$2)))*180/PI()
	var anglehorairedegre = Math.acos((-0.01454-Math.sin(Math.PI/180*decsolaire)*Math.sin(Math.PI/180*latitude))/(Math.cos(Math.PI/180*decsolaire)*Math.cos(Math.PI/180*latitude)))*180/Math.PI;
	//angle Horaire heures =$R7/15
	var anglehoraireheure = anglehorairedegre/15;
	//Duree du jour =2*$S7
	var dureejour = 2*anglehoraireheure;
	// Lever heure vraie (L) =12-$S7
	var leverjour = 12-anglehoraireheure;
	// Coucher heure vraie (C) =12+$S7
	//var coucherjour = 12+anglehoraireheure;
	// Lever heure UTC (L) =(TRUNC($U7+$L7/60+$O$3*4/60+0)+ROUND((($U7+$L7/60+$O$3*4/60+0)-TRUNC($U7+$L7/60+$O$3*4/60+0))*60;0)/60)/24
	var leverjourv2 = (Math.floor(leverjour+tempsminutes/60+longitude*4/60+0)+Math.round(((leverjour+tempsminutes/60+longitude*4/60+0)-Math.floor(leverjour+tempsminutes/60+longitude*4/60+0))*60,0)/60)/24;
	return(Math.floor(leverjourv2*24)+":"+Math.floor(((leverjourv2*24)-Math.floor(leverjourv2*24))*1440/24));
	// Coucher heure UTC (C) =(TRUNC($V7+$L7/60+$O$3*4/60+0)+ROUND((($V7+$L7/60+$O$3*4/60+0)-TRUNC($V7+$L7/60+$O$3*4/60+0))*60;0)/60)/24
	//var coucherjourv2 = (Math.floor(coucherjour+tempsminutes/60+longitude*4/60+0)+Math.round(((coucherjour+tempsminutes/60+longitude*4/60+0)-Math.floor(coucherjour+tempsminutes/60+longitude*4/60+0))*60,0)/60)/24;
	//alert(Math.floor(coucherjourv2*24)+":"+Math.floor(((coucherjourv2*24)-Math.floor(coucherjourv2*24))*1440/24));
}
function couchesoleil(){
	var jour = _jour;
	var mois = _mois;
	var annee = _annee;
	var latitude = _latitude;
	var longitude = _longitude;
	//indicejour =TRUNC(MONTH($F7)*275/9)-TRUNC((MONTH($F7)+9)/12)*(1+TRUNC((YEAR($F7)-4*TRUNC(YEAR($F7)/4)+2)/3))+DAY($F7)-30
	var indicejour = (Math.floor(mois*275/9)-Math.floor((mois+9)/12)*(1+Math.floor((annee-4*Math.floor(annee/4)+2)/3))+jour-30);
	//M =MOD(357+0.9856*$G7;360)
	var M = (357+0.9856*indicejour)%360;
	//C =1.914*SIN(PI()/180*$H7)+0.02*SIN(PI()/180*2*$H7)
	var C = 1.914*Math.sin(Math.PI/180*M)+0.02*Math.sin(Math.PI/180*2*M);
	//L =MOD(280+$I7+0.9856*$G7;360)
	var L = ((280+C+0.9856*indicejour)%360);
	//R=-2.466*SIN(PI()/180*2*$J7)+0.053*SIN(PI()/180*4*$J7)
	var R = -2.466*Math.sin(Math.PI/180*2*L)+0.053*Math.sin(Math.PI/180*4*L);
	//equation du temps minutes =($I7+$K7)*4
	var tempsminutes = (C+R)*4;
	// signe =IF($L7<0;"-";"+")
	if (tempsminutes <0) 
		{
		var signe = "-";
		}
		else
		{
		var signe = "+";
		}
	//equation du temps m:s =ABS($L7)/24
	var tempsms = Math.abs(tempsminutes)/24;
	//declinaison Solaire =ASIN(0.3978*SIN(PI()/180*$J7))*180/PI()
	var decsolaire = Math.asin(0.3978*Math.sin(Math.PI/180*L))*180/Math.PI;
	//latitude =IF($E$2="N";(ABS($B$2)+($C$2+$D$2/60)/60);-(ABS($B$2)+($C$2+$D$2/60)/60))
	//var latitude =;
	//alert (latitude);
	//longitude =IF($E$3="W";$B$3+($C$3+$D$3/60)/60;-($B$3+($C$3+$D$3/60)/60))
	//var longitude =;
	//alert (longitude);
	//passage meridien Heure UTC =(12+$L7/60+$O$3*4/60+0)/24
	var meridienheure=(12+tempsminutes/60+longitude*4/60+0)/24;
	//passage meridien hauteur =90-$O$2+$O7
	var meridienhauteur = 90-latitude+decsolaire;
	//angle horaire ° =ACOS((-0.01454-SIN(PI()/180*$O7)*SIN(PI()/180*$O$2))/(COS(PI()/180*$O7)*COS(PI()/180*$O$2)))*180/PI()
	var anglehorairedegre = Math.acos((-0.01454-Math.sin(Math.PI/180*decsolaire)*Math.sin(Math.PI/180*latitude))/(Math.cos(Math.PI/180*decsolaire)*Math.cos(Math.PI/180*latitude)))*180/Math.PI;
	//angle Horaire heures =$R7/15
	var anglehoraireheure = anglehorairedegre/15;
	//Duree du jour =2*$S7
	var dureejour = 2*anglehoraireheure;
	// Lever heure vraie (L) =12-$S7
	//var leverjour = 12-anglehoraireheure;
	// Coucher heure vraie (C) =12+$S7
	var coucherjour = 12+anglehoraireheure;
	// Lever heure UTC (L) =(TRUNC($U7+$L7/60+$O$3*4/60+0)+ROUND((($U7+$L7/60+$O$3*4/60+0)-TRUNC($U7+$L7/60+$O$3*4/60+0))*60;0)/60)/24
	//var leverjourv2 = (Math.floor(leverjour+tempsminutes/60+longitude*4/60+0)+Math.round(((leverjour+tempsminutes/60+longitude*4/60+0)-Math.floor(leverjour+tempsminutes/60+longitude*4/60+0))*60,0)/60)/24;
	//return(Math.floor(leverjourv2*24)+":"+Math.floor(((leverjourv2*24)-Math.floor(leverjourv2*24))*1440/24));
	// Coucher heure UTC (C) =(TRUNC($V7+$L7/60+$O$3*4/60+0)+ROUND((($V7+$L7/60+$O$3*4/60+0)-TRUNC($V7+$L7/60+$O$3*4/60+0))*60;0)/60)/24
	var coucherjourv2 = (Math.floor(coucherjour+tempsminutes/60+longitude*4/60+0)+Math.round(((coucherjour+tempsminutes/60+longitude*4/60+0)-Math.floor(coucherjour+tempsminutes/60+longitude*4/60+0))*60,0)/60)/24;
	return(Math.floor(coucherjourv2*24)+":"+Math.floor(((coucherjourv2*24)-Math.floor(coucherjourv2*24))*1440/24));
}
