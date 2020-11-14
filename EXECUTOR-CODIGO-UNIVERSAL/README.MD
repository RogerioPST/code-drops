
<ul>
<li>codigo funcionando p rodar comandos shell/bash no windows

```
const {spawn, spawnSync} = require('child_process')
console.log("[exec]")

//const request = 'console.log(10 +1)'
//
//const response = 'Resultado: ' + eval(request)

//const ls = spawn('ls', ['-la', '/usr'])
const ls = spawn('dir', [], { shell: true })
const lsSync = spawnSync('dir', [], { shell: true })

console.log('inicio spawnSync')
console.log(lsSync)
console.log(lsSync.stdout.toString())
console.log('fim spawnSync')

ls.stdout.on('data', (data) => {
	console.log(`stdout: ${data}`)
})
ls.stderr.on('data', (data) => {
	console.error(`stderr: ${data}`)
})

ls.on('close',(code) => {
	console.log(`child process exit code: ${code}`)
})

//console.log(response)
```
</li>
</ul>