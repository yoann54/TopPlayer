Router.route('/', {
    template: 'home',
    waitOn: function(){
        return Meteor.subscribe('topJoueurs');
    }
});
Router.route('/register');
Router.route('/login');

Router.configure({
    layoutTemplate: 'base',
    loadingTemplate: 'chargement'
});