Meteor.methods({
    'ajoutJoueurMethode': function (joueurName) {
        var utilisateurActuel = Meteor.userId();
        joueursListe.insert({
            name: joueurName,
            score: 0,
            utilisateurId: utilisateurActuel
        });
    },
    'suppressionJoueurMethode': function (joueurChoisi) {
        joueursListe.remove(joueurChoisi);
    },
    'ajoutPointJoueur': function (joueurChoisi){
        joueursListe.update(joueurChoisi, {$inc: {score: 1}});
        
    },
    'retraitPointJoueur': function (joueurChoisi) {
        joueursListe.update(joueurChoisi, {$inc: {score:-1} });
    }
});
