Template.liste.helpers({
    'joueur': function () {
        return joueursListe.find({}, {sort: {score:-1, name:1}});
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
        joueursListe.update(joueurChoisi, {$inc: {score: 1}});
    },
    'click .decrement':function () {
        var joueurChoisi = Session.get('joueurChoisi');
        joueursListe.update(joueurChoisi, {$inc: {score:-1} });
    },
    'click .supprimer':function () {
        var joueurChoisi = Session.get('joueurChoisi');
        joueursListe.remove(joueurChoisi);
    }
});