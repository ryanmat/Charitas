var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function(){
	console.log(" We are going");
	App.router = new App.Routers.Main();
	Backbone.history.start();

});