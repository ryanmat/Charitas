App.Views.Users = Backbone.View.extend({
	el: '.user-list'

	initialize: function() {
		console.log('All users view');
		this.listenTo(this.collection, 'reset', this.renderAll)
	},
	renderAll: function() {
		this.collection.each(this.renderOne.bind(this));
	}
})