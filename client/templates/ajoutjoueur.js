Template.ajoutJoueur.events({
    'submit form': function () {
        event.preventDefault();
        var utilisateurActuelId = Meteor.userId();
        var joueurName = event.target.nomJoueur.value;
        joueursListe.insert({
            name: joueurName,
            score: 0,
            utilisateurId: utilisateurActuelId
        });
    }
});