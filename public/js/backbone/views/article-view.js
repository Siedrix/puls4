Puls4.Views.Article = Backbone.View.extend({
	events:{
		"click .acciones .votos .up" : "upvote",
		"click .acciones .votos .down" : "downvote",
		"click" : "navigate"
	},
	tagName:"article",
	className:"post",
	initialize : function () {
		var self = this;

		this.model.on('change', function(){
			if(window.app.state === "articleSingle"){
				self.extendedRender();
			}else{
				self.render();
			}
		});

		window.routers.base.on('route:root',function(){
			self.$el.css('display', '');
			self.render();
		});

		window.routers.base.on('route:articleSingle',function(){
			if(window.app.article === self.model.get('id') ){
				// Muestra version estendida
				self.extendedRender();
			}else{
				self.$el.hide();
			}
		});

		// this.template = _.template( $('#article-template').html() );
		this.template = swig.compile( $('#article-template').html() );
		this.extendedTemplate = swig.compile( $('#article-extended-template').html() );
	},
	navigate : function(){
		Backbone.history.navigate('/article/' + this.model.get('id'), {trigger:true});
	},
	upvote : function (e) {
		e.preventDefault();
		e.stopPropagation();

		var votes = parseInt( this.model.get('votes'), 10);

		this.model.set('votes', ++votes);
		this.model.save();
	},
	downvote : function (e) {
		e.preventDefault();
		e.stopPropagation();

		var votes = parseInt( this.model.get('votes'), 10 );

		this.model.set('votes', --votes);
		this.model.save();
	},
	extendedRender : function() {
		var data = this.model.toJSON();

		var html = this.extendedTemplate(data);

		this.$el.html( html );
	},
	render : function () {
		var data = this.model.toJSON();

		var html = this.template(data);

		this.$el.html( html );
	}
});