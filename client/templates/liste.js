Template.liste.helpers({
    'joueur': function () {
        return joueursListe.find();
    },
    'classClick': function () {
        var joueurId = this._id;
        var joueurChoisi = Session.get('joueurChoisi');
        if (joueurChoisi == joueurId) {
            return 'select';   
        }
    }
}); 
Template.liste.events({
    'click td.choisi': function () {
        var joueurId = this._id;
        Session.set('joueurChoisi', joueurId);
    }
});