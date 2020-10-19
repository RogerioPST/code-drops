<ol>
<li>comandos:

```
npm i puppeteer
npm i readline-sync //permite captar valores digitados na linha de comando
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

</ol>