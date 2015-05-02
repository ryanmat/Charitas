App.Views.SignIn = Backbone.View.extend({
	el: '#sign-in-header',

	initialize: function() {
		this.template = Handlebars.compile($('#sign-in-view').html() );
	},
	show: function() {
		this.$el.fadeIn(500);
	},
	hide: function() {
		this.$el.fadeout(200)
	},
	render: function() {
		this.$el.html(this.template);
		this.show()
	},

	events: {
		"click #sign-in":"overviewPage"
		"click #sign-up":"signUpPage"
	}



})