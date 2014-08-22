var AppRouter = Backbone.Router.extend({
	routes:{
		"":"home",
		"about" : "about",
		"produk/:id":"produk",
	},
	initialize:function(){
		this.menu = '<h4>Menu</h4>'+
			'<ul>'+
				'<li><a href="#" >Home</a></li>'+
				'<li><a href="#about" >About</a></li>'+
				'<li><a href="#produk/11" >Produk</a></li>'+
			'</ul>'
	},
	home:function(){
		var html = '<div class="header">Backbone</div>'+
			'<div class="isi">Home page</div>';
		html = html + this.menu;
		$('#konten').html(html);
	},
	about:function(){
		var html = '<div class="header">Backbone</div>'+
			'<div class="isi">About page</div>';
		html = html + this.menu;
		$('#konten').html(html);
	},
	produk:function(id){
		var html = '<div class="header">Backbone</div>'+
			'<div class="isi">Produk page dengan id = '+ id +'</div>';
		html = html + this.menu;
		$('#konten').html(html);
	}
});


$(document).ready(function () {
	var app = new AppRouter();
	Backbone.history.start();
});