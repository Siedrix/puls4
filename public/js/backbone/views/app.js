Puls4.Views.App = Backbone.View.extend({
	events:{
		"click .publicar" : "showForm",
		"submit #nuevaPublicacion" : "createPost",
		"click .logo" : "navigateHome"
	},
	initialize : function ($el) {
		this.$el = $el;
	},
	navigateHome : function(){
		Backbone.history.navigate('/', {trigger:true});
	},
	showForm : function (e) {
		e.preventDefault();
		this.$el.find('#nuevaPublicacion').slideToggle();
		$('input[name=titulo]').focus();
	},
	createPost : function (e) {
		e.preventDefault();

		var titulo = $('input[name=titulo]').val();
		var user = $('input[name=user]').val();
		var tag = $('input[name=tag]').val();


		var data = {
			"title" : titulo,
			"user" : user,
			"image" : "/imagenes/img4.jpg",
			"tags" : tag,
			"votes" : 0,
			"comments":[]
		};
		
		var model = new Puls4.Models.Article(data);

		model.save();

		this.$el.find('#nuevaPublicacion input[type=text]').val('');
		this.$el.find('#nuevaPublicacion').slideUp();		
	}
});