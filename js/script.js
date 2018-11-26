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