Puls4.Routers.Base = Backbone.Router.extend({
	routes : {
		"" : "root",
		"article/:id" : "articleSingle"
	},
	root : function () {
		console.log("Estamos en el root de nuesta applicacion");

		window.app.state = "root";
		window.app.article = null;
	},
	articleSingle : function(id){
		console.log("Estamos en article single");

		window.app.state = "articleSingle";
		window.app.article = id;
	}
});