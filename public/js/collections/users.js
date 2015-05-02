App.Collection.Users = Backbone.Collection.extend({

	initialize: function() {
		console.log('Users Collection created');
	}

	url: '/users',

	model: App.Models.User
})