Template.ajoutJoueur.events({
    'submit form': function () {
        event.preventDefault();
        var joueurName = event.target.nomJoueur.value;
        joueursListe.insert({
            name: joueurName,
            score: 0
        });
    }
});