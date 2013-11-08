module.exports = function(grunt) {
	grunt.initConfig({
		uglify : {
			options : {
				compress : true,
				report : true,
				banner : '/* Minified on <%= grunt.template.date() %>*/\n'
			},
			app : {
				files : {
					"public/app.min.js" : [
						"public/js/init.js",
						"public/js/backbone/models/article.js",
						"public/js/backbone/collections/articles.js",
						"public/js/backbone/views/app.js",
						"public/js/backbone/views/article-view.js",
						"public/js/backbone/routers/base.js",
						"public/js/main.js",
					],
					"public/vendors.min.js" : [
						"public/js/vendor/underscore.js",
						"public/js/vendor/backbone.js",
						"public/js/vendor/swig.js",
						"public/js/vendor/socket.io.js",
						"public/js/vendor/neon.js",
						"public/js/vendor/CustomEvent.js",
						"public/js/vendor/CustomEventSupport.js",
						"public/js/vendor/PonyExpress.js"
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask("default", ['uglify']);
};