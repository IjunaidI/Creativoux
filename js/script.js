let userDetails = {
	profileImage: "images/profile-image.png",
	portfolioImages: ["","",""],
	applyDetail: function(){
		document.querySelector(".profile-image").style.backgroundImage = `url(${this.profileImage})`
	},
}
userDetails.applyDetail();







function changePage(pageNum,tabNum){
    for (i = 1; i < 5; i++) {
		document.querySelector(`.tab${i}`).classList.remove('active');
	}
	for (i = 1; i < 5; i++) {
		document.querySelector(`.page${i}`).classList.remove('display-block');
    }
		document.querySelector(`.${tabNum}`).classList.add('active');
        document.querySelector(`.${pageNum}`).classList.add('display-block');    
}

function switchMenu(){
	document.querySelector('.hamburger-wrap').classList.toggle('display-block');
	document.querySelector('.main-nav').classList.toggle("overlay-dark");
}