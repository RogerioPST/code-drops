const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');
require('dotenv').config();


console.log('bem vindo ao bot conversor de moedas');
console.log(process.env.GITHUB_TOKEN);

async function robo(){
//	headless - abre explicitamente o navegador ou nao
	const browser = await puppeteer.launch({ headless: false});
	const page = await browser.newPage();	
	
	const urlDesejada = `https://unsplash.com/`;
	await page.goto(urlDesejada);

	//clica no botao de login com essa classe
	//sempre for acessar, usar com colchetes
	await page.click('[href="/login"]');
	
	//acessa o input com o nome "user[email]"
	//sempre for acessar, usar com colchetes
	await page.type('[name="user[email]"', process.env.UNSPLASH_EMAIL);
	//acessa o input com o id user_password"
	await page.type('#user_password', process.env.UNSPLASH_EMAIL);
	await page.click('[type="submit"]');

	//espera abrir tudo p realizar uma prox acao
	await page.waitForNavigation();

	//await page.screenshot({path:'example.png'});
//o puppeteer tem o page.evaluate que permite com q possamos ter
//o mesmo resultado de document.querySelector
	/* const resultado = await page.evaluate(() =>{
		return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
		
	})

	console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);

	await browser.close(); */
}

robo();

