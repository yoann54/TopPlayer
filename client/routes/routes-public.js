Router.route('/', {
    template: 'home'
});
Router.route('/register');
Router.route('/login');

Router.configure({
    layoutTemplate: 'base'
});