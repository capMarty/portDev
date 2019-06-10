
let pages = document.querySelector(".main-content").children;
let menuItem = document.querySelectorAll(".sidebar-menu_item");

let page = 0;
let delta = 0;
let offsetHeigh = pages[page].offsetHeight;

for (let i = 0; i < menuItem.length; i++){
	menuItem[i].onclick = function () {
		this.classList.add("activeMenu");
		
		if(i > page){
			page = i;
			for (let j = 0; j < i; j++){
				menuItem[j].classList.remove("activeMenu");
				pages[j].style.top = `${-offsetHeigh}px`;
				pages[j].style.opacity = 0;
			}
			
		}else{
			page = i;
			pages[i].style.top = `0px`;
			pages[i].style.opacity = 1;
			for (let j = i + 1; j < menuItem.length; j++){
				menuItem[j].classList.remove("activeMenu");
				pages[j].style.opacity = 1;
				pages[j].style.top = `0px`;
			}
		}
	}
}

document.body.onwheel = function (event) {

	// define the scroll step
	delta += event.deltaY * 0.6;
	pages[page].style.top = `${-delta}px`;
	menuItem[page].classList.add("activeMenu");
	
	// change opacity
	pages[page].style.opacity = 1.4 - delta/offsetHeigh;
	
	// upper limit
	if (page === 0 && delta <= 0) {
		pages[page].style.top = `0px`;
		delta = 0;

	}
	// go to the bottom page 
	if(delta >= offsetHeigh){
		page++;
		delta = 0;
		pages[page - 1].style.opacity = 0;
		menuItem[page - 1].classList.remove("activeMenu");
	}
	// go to the top page
	if (delta < 0){
		pages[page].style.top = `0px`;
		delta = offsetHeigh;
		page--;
		pages[page + 1].style.opacity = 1;
		menuItem[page + 1].classList.remove("activeMenu");
	}

	// lowe limit
	if(page === pages.length - 1 && delta > 0){
		pages[page].style.top = null;
		delta = 0;
	}
}	
