Meteor.publish('topJoueurs', function () {
    var currentUserId = this.userId;
    return joueursListe.find({ utilisateurId: currentUserId });
});