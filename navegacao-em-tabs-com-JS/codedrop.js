const $ = document.querySelector.bind(document)

function TabNavigation(){
	const html ={
	//spread operator p transformar um html collection em array	
		links: [...$('.tab-links').children],
		contents: [...$('.tab-content').children],
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
		const target = event.currentTarget
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