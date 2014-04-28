sj=1;
function schedulajout(){
	var tableau = document.getElementById("tabscheduler");
		var ligne = tableau.insertRow(-1);//on a ajouté une ligne
		var colonne1 = ligne.insertCell(0);//on a une ajouté une cellule
		var colonne2 = ligne.insertCell(1);//on a une ajouté une cellule
		var colonne3 = ligne.insertCell(2);//on a une ajouté une cellule
		var colonne4 = ligne.insertCell(3);//on a une ajouté une cellule
		var colonne5 = ligne.insertCell(4);//on a une ajouté une cellule
		var colonne6 = ligne.insertCell(5);//on a une ajouté une cellule
		var colonne7 = ligne.insertCell(6);//on a une ajouté une cellule
		colonne1.innerHTML += "<input type='text' id='minutes' + sj/>";
		colonne2.innerHTML += "<input type='text' id='heure' + sj/>";
		colonne3.innerHTML += "<input type='text' id='numjour' + sj/>";
		colonne4.innerHTML += "<input type='text' id='nummois' + sj/>";
		colonne5.innerHTML += "<input type='text' id='jsemaines' + sj/>";
		colonne6.innerHTML += "<input type='text' id='Taches' + sj/>";
		colonne7.innerHTML += "<input type='button' id='bouton' + sj value='ajout' onClick='javascript:schedulajout()'/>";
		document.getElementById('bouton'+(sj-1)).value="Delete";
		document.getElementById('bouton'+(sj-1)).onClick='javascript:scheduldelete('+sj-1+')';

	sj=sj+1;
}
function scheduldelete(obj){
	document.getElementById("tabscheduler").deleteRow(obj);
}
