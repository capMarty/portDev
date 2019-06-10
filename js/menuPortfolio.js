let gridItem = document.querySelectorAll(".portfolio-project_item");
let btnMenu = document.querySelectorAll(".portfolio-menu_item");


btnMenu.forEach( elem => {

	elem.onclick = function () {

		function displayBlock (elem) {
			gridItem.forEach(elem =>{
				elem.style.display = "block";
			}); 
		};
		
		btnMenu.forEach( elem => {
			if(elem.classList.contains("activeBtn")){
				elem.classList.remove("activeBtn");
				return;
			}
		});
		elem.classList.add("activeBtn");
		let attrBtn = elem.dataset.categories;
		if(attrBtn === undefined)
			displayBlock (elem);
		else{
			displayBlock (elem);
			gridItem.forEach(elem =>{
				attrItem = elem.dataset.categories;
				if(attrItem !== attrBtn)
					elem.style.display = "none";
			})
		}	
	}
});