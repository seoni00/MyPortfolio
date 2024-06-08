//alert("안녕");
//$("#menu1")클래스로 바꾸면 작동이 됨
$(function(){
	//스크롤 시 네비 변경하기
	let menu1 = $(".menu1");
	let menu2 = $(".menu2");

	menu2.hide();

	$(window).scroll(function(){
		let scrollTop = $(window).scrollTop();
		if(scrollTop >= 100){
			menu2.show();
			menu1.hide();
		}
		if(scrollTop < 100){
			menu1.show();
			menu2.hide();
		}
	})

	//햄버거 버튼 클릭 시 모바일 메뉴가 보이도록 설정
	/*let hambergerBtn = $(".hambergerBtn");
	let close = $(".close");
	let mobileGnb = $(".mobileGnb li");
	let mobileMenu = $(".mobileGnb .mobileMenu");

	hambergerBtn.click(function(){
		mobileMenu.show();
		$("body").addClass("hidden");
	})
	close.click(function(){
		mobileMenu.hide();
		$("body").removeClass("hidden");
	})*/
})