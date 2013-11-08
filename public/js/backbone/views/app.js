Puls4.Views.App = Backbone.View.extend({
	events:{
		"click .publicar" : "showForm",
		"submit form" : "createPost",
		"click .logo" : "navigateHome"
	},
	initialize : function ($el) {
		this.$el = $el;
	},
	navigateHome : function(){
		Backbone.history.navigate('/', {trigger:true});
	},
	showForm : function () {
		this.$el.find('form').show();
	},
	createPost : function (e) {
		e.preventDefault();

		var titulo = $('input[name=titulo]').val();
		var autor = $('input[name=autor]').val();
		var tag = $('input[name=tag]').val();

		var data = {
			"title" : titulo,
			"user" : autor,
			"image" : "/imagenes/img4.jpg",
			"tag" : tag,
			"votes" : 0
		};

		var model = new Puls4.Models.Article(data);

		model.save();

		this.$el.find('form input[type=text]').val('');
		this.$el.find('form').slideUp();		
	}
});