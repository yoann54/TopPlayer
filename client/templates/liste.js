Template.liste.helpers({
    'joueur': function () {
        var utilisateurActuelId = Meteor.userId();
        return joueursListe.find({utilisateurId: utilisateurActuelId}, {sort: {score:-1, name:1}});
    },
    'classClick': function () {
        var joueurId = this._id;
        var joueurChoisi = Session.get('joueurChoisi');
        if (joueurChoisi === joueurId) {
            return 'select';
        }
    }
});
Template.liste.events({
    'click td.choisi': function () {
        var joueurId = this._id;
        Session.set('joueurChoisi', joueurId);
    },
    'click .increment': function () {
        var joueurChoisi = Session.get('joueurChoisi');
        Meteor.call('ajoutPointJoueur', joueurChoisi);
    },
    'click .decrement':function () {
        var joueurChoisi = Session.get('joueurChoisi');
        Meteor.call('retraitPointJoueur', joueurChoisi);
    },
    'click .supprimer':function () {
        var joueurChoisi = Session.get('joueurChoisi');
        Meteor.call('suppressionJoueurMethode', joueurChoisi);
    }
});