function ajouterroom() {
	var option = document.createElement('option'); //Création d'un élément option à ajouter au select.
	option.innerHTML = document.maison.room.value; //On lui attribue un contenu visible dans la liste avec le nom du pays de l'utilisateur.
	option.value = document.maison.room.value; //Et une valeur symbolique en utilisant les deux premières lettres du pays.
	document.maison.piece.appendChild(option); //Et enfin on l'ajoute.
	}
function supprimerroom() {
	var x = document.getElementById("piece");
	x.remove(x.selectedIndex);
}
function enregistrerroom() {

}
