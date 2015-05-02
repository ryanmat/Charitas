App.Routers.Main = Backbone.Router.extend({
	initialize: function() {
		console.log("New router initialized");

		App.signIn = new App.Views.SignIn();	
		App.signIn.render();
	},

	routes: {
		"" : "modalHome"
	},

	modalHome: function() {
		App.signIn.show();
	}




});