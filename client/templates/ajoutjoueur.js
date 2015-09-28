Template.ajoutJoueur.events({
    'submit form': function (event) {
        event.preventDefault(event);
        var joueurName = event.target.nomJoueur.value;
        Meteor.call('ajoutJoueurMethode', joueurName);
    }
});
