const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');


console.log('bem vindo ao bot conversor de moedas');

async function robo(){
//	headless - abre explicitamente o navegador ou nao
	const browser = await puppeteer.launch({ headless: true});
	const page = await browser.newPage();	
	const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
	const moedaFinal = readlineSync.question('Informe uma moeda desejada: ') || 'real';
	const urlDesejada = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=dolar+para+real&aqs=chrome..69i57j35i39i362l4j0l3...4.2276j0j15&sourceid=chrome&ie=UTF-8`
	await page.goto(urlDesejada);
	//await page.screenshot({path:'example.png'});
//o puppeteer tem o page.evaluate que permite com q possamos ter
//o mesmo resultado de document.querySelector
	const resultado = await page.evaluate(() =>{
		return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
		
	})

	console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);

	await browser.close();
}

robo();

