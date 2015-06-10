$(function() {

	Parse.$ = jQuery;
	//Initialize
	Parse.initialize("ERpwUioqa1tqTeSmeIGZi6TF3I04cu72EMATwQMh", "E9vn2Xy1kgAERYZvgtdLW9s6I28Sp5GGUVrBLjiG");


	var Blog = Parse.Object.extend("Blog"),
		Blogs = Parse.Collection.extend({
				model: Blog
		}),
		BlogsView = Parse.View.extend({
			template: Handlebars.compile($('#blogs-tpl').html()),
			render: function() {
				var collection = { blog: this.collection.toJSON() };
				this.$el.html(this.template(collection));
		}
	});
	blogs = new Blogs();

	blogs.fetch({
		success: function(blogs) {
			var blogsView = new BlogsView({ collection: blogs });
			blogsView.render();
			$('.main-container').html(blogsView.el);
		},
		error: function(blogs, error) {
			console.log(error);
		}
	});
});
