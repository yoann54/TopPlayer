Template.ajoutJoueur.events({
    'submit form': function (event) {
        event.preventDefault();
        var joueurName = event.target.nomJoueur.value;
        Meteor.call('ajoutJoueurMethode', joueurName);
    }
});