//o q o jquery faz
//o bind eh p n perder a ref ao this
const $ = document.querySelector.bind(document)

function TabNavigation(){
	const html ={
	//spread operator p transformar um html collection em array	
		links: [...$('.tab-links').children],
		contents: [...$('.tab-content').children],
//o atrbuto data-open vai buscar o q quero q apareça!!
		openTab: $('[data-open]')
	}

	function hideAllTabContents(){				
		html.contents.forEach(section =>{
			section.style.display = "none"
		})
	}

	function removeAllActiveClass(){
		html.links.forEach(tab =>{
			tab.className = tab.className.replace(' active', '')
		})

	}

	function showCurrentTab(id){
		console.log('show current: ' + id)
		const tabContent = $('#'+id)
		tabContent.style.display = 'block'
	}
	
	function selectTab(event){
		hideAllTabContents()
		removeAllActiveClass()		
/*
target refers to node (where user clicked). event. currentTarget, on the opposite, refers to the node on which current-event listener was attached. ... currentTarget refers to paragraph while event.
*/
		const target = event.currentTarget
		//a linha abaixo vai buscar o data-id="prepare"
		showCurrentTab(target.dataset.id)

		target.className += ' active'
	}

	function listenForChange(){
		html.links.forEach(tab =>{
			tab.addEventListener('click', selectTab)
		})
	}

	function init(){
		hideAllTabContents()
		listenForChange()

		html.openTab.click()
	}

	return {
		init		
	}
}

window.addEventListener('load', () =>{
	const tabNavigation = TabNavigation()
	tabNavigation.init()
})