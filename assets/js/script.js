// event pada saat link di klik
$('.page-scroll').on('click', function(e){
	
	// ambil isi href
	var tujuan = $(this).attr('href');

	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);
	
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top -50
	}, 1500,'easeInOutExpo');

	e.preventDefault();

});


// paralax
//about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/0.7 +'%)'
	});


// portfolio
	
	if( wScroll > $('.portfolio').offset().top -300 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});

		
	}

});


//window.onscroll = function(){scrollFunction()};

//function scrollFunction(){
//	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
//		document.getElementsByClassName("navbar")[0].style.background = "#232323";
//		document.getElementsByClassName("navbar")[0].style.boxShadow = "0px 0px 10px";
//		document.getElementsByClassName("navbar-right")[0].style.marginTop = "3px";
//		document.getElementsByClassName("navbar-left")[0].style.marginTop = "0px";
//	}else{
//		document.getElementsByClassName("navbar")[0].style.background = "transparent";
//		document.getElementsByClassName("navbar")[0].style.boxShadow = "0px 0px 0px gray";
//		document.getElementsByClassName("navbar-right")[0].style.marginTop = "10px";
//		document.getElementsByClassName("navbar-left")[0].style.marginTop = "10px";
//	}
//}


