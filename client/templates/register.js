Template.register.events({
    'submit form': function (event) {
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        }, function (error) {
            if (error) {
                alert(error.reason); // Message d'alerte en cas d'erreur
            } else {
                Router.go("/"); // Redirection en cas de succès
            }
        });
    }
});