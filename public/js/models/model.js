App.Models.User = Backbone.Model.extend({
	initialize: function(){
		console.log('New User Model created')
	}
	defaults: {
		first_name: 'First Name',
		last_name: 'Last Name',
		email_address: 'Email Address',
		password_digest: 'Password'
	}
});