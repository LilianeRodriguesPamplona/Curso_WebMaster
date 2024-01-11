/*
$(document).ready(function(){
	alert("Olá mundo!");
});

$(function(){
	alert("Olá mundo");
});

$(window).on('load',function(){
	alert("Olá mundo");
});

$(function(){
	$('div').css('background-color','#4169E1');
});

$(function(){

	setTimeout(function(){
	$('.artigo1 > p').css('color','red');

	 },2000);
});
*/

/*
$(function(){

	$('.artigo1 > p').css('color','rgba(0,0,0,0.6)');
	console.log($('.artigo1 > p').css('color'));
	
});
*/


//Introduzindo os eventos.
$(function(){

	function validarClickHover(){

	$('.artigo1').click(function(){
		$('.artigo2').css('background-color','purple');
	});

	$('.artigo1').hover(function(){
		$('.artigo2').css('background-color','red');
	},function(){
		$('.artigo2').css('background-color','rgb(100,100,100)');
	})
	}

	/*
	$('textarea').focus(function(){
		console.log('Estou dentro do textarea');
		//Executa alguma função quando existe foco no elemento.
	})

	$('textarea').blur(function(){
		console.log('Estou fora do textarea!');
		// Executa alguma função quando retiramos o foco.
	})*/

	function validarFormulario(){
		$('select').change(function(){
			console.log("Meu select foi alterado!");
		})
	}

	validarFormulario();
	validarClickHover();

});

