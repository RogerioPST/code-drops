<ol>
<li>comandos:

```
npm i puppeteer
npm i readline-sync //permite captar valores digitados na linha de comando
npm i dotenv // permite usar variaveis de ambiente
npm i cross-env // permite ter o mesmo comportamente das variaveis de ambiente no linux, mac, windows
```
</li>
<li>headless - abre explicitamente o navegador ou nao


```
	const browser = await puppeteer.launch({ headless: false});
```
</li>
<li>
o puppeteer tem o page.evaluate que permite com q possamos ter
o mesmo resultado de document.querySelector

```
const resultado = await page.evaluate(() =>{
		return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;		
})
```
</li>
<li>

```
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
```
</li>

</ol>