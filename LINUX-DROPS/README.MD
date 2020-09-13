<ol>
<li> GERAL - 
ring 0 - td q n pode ser mexido pelo usuario ou por aplicacoes sem privilegio fica aqui.
basicamente duas area de memoria:
kernelspace - onde roda o kernel e aplicacao de ring 0
userspace - resto do sist fica, o q n precisa ter privilegio de root.

as principais partes dos sist são:
kernel - nucleo do SO
1. intermediario entre as aplicações (serviços, shell, bibliotecas, comandos, aplicativos de texto/graficos) e o hardware (CPU, MEMORY, DEVICES, SYSCALLS - mais baixo nivel). ex: listar arquivos: shell transforma numa chamada de sist p o kernel q joga p um dispositivo e q devolve a resposta e o kernel repassa p a aplicação shell.

modulos - analogia c os drivers do Windows - fazem HW ou outras coisas funcionarem no sist. (
	btrfs (p aprender sist de arquivos),
	amdgpu,
	vboxdrv (hw virtual),
	ip_tables (p firewall),
	usbnet,
	snd (p som),
	uvcvideo,
	usbhid (p USB),
	kvm_amd (p processadores amd),
	lz4 (p compressao transparente do kernel),
	zstd,
	cifs (sist de arquivo de rede),
	tun (p VPN ativa (tunelar)),
	vxlan,
	bfq,
	etc.
	)
1. ficam dentro do kernel (arquivo init.rd), mas n estão todos integrados ao kernel, pq nem sempre são necessários (modulos presentes no arquivo initramfs-...) por conta de performance .
2. comandos: 
-ls -lh /boot (vejo o tamanho dos kernels e initramfs-...)
-uname -r (p ver o kernel)
-lsmod (lista os modulos)
-ls /lib/modules/<VERSAO_KERNEL>/kernel (lista os modulos)
-modinfo (info do modulo)

sistemas de boot:
1. bios (basic input output system) /efi (enhanced firmware) 
-> chama
2. grub  ou lilo - gerenciador de boot
-> chama
3. kernel
-> chama
4. systemd (sist de inicializacao): 
4.1 -trabalha c targets (obj finais de inicializacao (default.target (basic.target, multi-user.target, graphical.target)))
4.2 
	- cmd: 

5. comandos: 
-ls /etc/systemd
-ls /etc/systemd/system (lista os targets)
-systemd-analyze blame (mostra qto tempo cada coisa dentro dos -targets demorou p ser carregada (tempo de boot das ferramentas))
- systemctl disable apt-daily.service
- systemctl enable apt-daily.service
- systemctl stop apt-daily.service
- systemctl start apt-daily.service
- systemctl start apache2

estrutura do sistema de arquivos:
-/
-/bin - executaveis basicos do sist
-/boot - arq do bootloader e o kernel
-/dev - arq de dispositivos (mapeamento de hw de bloco e serial): (sda - HD; tty - terminal virtual; sr0 (arq de gravacao) - cd room, dvd room , sata; ppp - arq de discagem; rtc - relogio de hardware; fb0 - framebuffer; dm1 - dispositivo de lvm (logical volume management))
-/etc - arq de config do sist e dos serviços: td q precisa ser configurado praticamente estah aqui (logrotate, samba etc.), exceto programas de terceiros.
-/home - diretorios pessoais dos usuarios
-/lib - bibliotecas do sist
-/media - ponto de montagem p dispositivos (fisicos ou remotos)
-/opt - programas opcionais ou de terceiros
-/proc - diretorio de acesso ao kernel em execução q está na memoria ram
-/root - diretorio pessoal do root 
-/sbin - executaveis basicos do administrador
-/tmp - arq temporarios (é limpo td vez q reinicia a maquina)
-/usr - programas do user (firefox, etc), documentacao, manuais, libs dos programas
-/var - logs, spool, cache, arquivos de pid, fila de email, etc (se n controlar, enche a maquina; geralmente, eh bom deixar numa maquina separada soh p ele)
- ss -ap | grep -E "(sshd|nginx)" - quero ver o processo sshd e nginx

tipos de arquivos: arq usados por programas e n tem função especial no sistema e tem o caractere de representação o sinal menos (-):
1. d - diretorio - contem outros arq dentro deles
2. l - link - apontam p outros arquivos (dah p ver no cmd ls -l /usr/ )
3. b - bloco - mapeiam dispositivos de armazenamento (sda, por ex) - ver em cmd : ls /dev
4. c - caractere - mapeiam dispositivos de comunicacao serial (tty, por ex) - ver em cmd: ls /dev
5. p - pipe - permitem comunicacao entre processos (dah p ver com o cmd: ls -l /run ou  ls /dev | grep sd (gera um pipe, mas n eh listavel/enxergavel))
6. s- socket- 
-ex de socket de rede (ip:porta): 127.0.0.1:8080.
- ex socket unix (na maquina) - eh um arquivo (por ex dentro dos diretorios: /var/run/user/1000/ pulse ou keyring ou systemd)

sockets: são arq especiais q são criados p q um processo se comunique c outro. permitem comunicacao bidirecional entre processos, seja por IPC ou TCP/IP. geralmente falamos em serviços e são usados p comunicação no estilo cliente e servidor. as vezes n se consegue falar c servidor, pq ele n consegue abrir um novo socket ou usar um file descriptor p abrir um novo arquivo.
cmd:
-cat etc/netconfig (sockets configurados)

gerenciamento de processos: cmd: -n1 ls -l /proc/593/fd ( a cada um segundo vou listar os file descriptors no processo 593)

gerenciamento de hardware:
- cat /proc/cpuinfo
- cat /proc/meminfo
- cat /proc/interrupts
- cat /proc/devices
- cat /proc/mdstat (scusi (sdd, por ex))
-> cmd de hardware:
-lscpu
-lspci
-lssci
-lsusb
-lsdev
-lsblk
-lsmem
-lshw 
-lshw -html > /tmp/lista.html
-free
-free -mt
-hwinfo
-dmidecode
-inxi -F (resumo do lshw)

logs:
cmd: cat /etc/rsyslog.d/50-default.conf:
-> estrutura de log:
data HOST processo MENSAGEM


</li>
<li>
cmd:
-df -h
-ss -tulanp (quais serviços estão ativos)
-mount | grep -v tmpfs |grep -v cgroup
-mount | grep mapper
-ls -lR / (lista recursivo todo o sistema)
</li>
<li>
vsz - virtual size = recurso compartilhado
processos - é td q é executado no sist. são acessiveis atraves do diretorio /proc e são identificados pelo seu PID (process identification)
-time - tempo de uso da cpu
- estado de execução (STAT):
-r- running (em execução - q está pedindo p o processador calcular algo p ele naquele momento)
-s - sleep (está ativo, porem fazendo nada no momento (ref a tempo de processamento))
-t - stopped (processo foi parado por algum cmd)
-z - zombie (processo foi morto, mas os recursos ainda estao ocupados para ele)

-ps (process status), top, htop leem o /proc (o q está na ram) e obtem info.
cmd:
- ls /proc/37
dentro desse diretorio:
- cat cmdline ( o cmd q colocou o proc 37 no ar)
- file mem
- cat mountinfo
- cat cpuset
- cat coredump_filter
- cat status 
- ls fd -l (lista file descriptor)

para n precisar ver dessa forma, existem o ps, top, htop:
-cmd:
-ps (process status - bem basico)
-ps a (status de todos processos rodando no terminal)
-ps au (status de todos processos inclusive de outros USUARIOS rodando no terminal)
-ps aux (status de todos processos inclusive de outros USUARIOS inclusive em outros terminais)
-ps auxf (status de todos processos e pais e filhos, inclusive de outros USUARIOS inclusive em outros terminais - em forma de arvore)
-top
- man 7 signal (manual do sistema = man 7)

- cada processo pode receber sinais do sist e assim tomar determinada providencia, cada sinal representa uma determinada acao. os coamdnos de manipulacao de processos sao:
-kill = manda um signal term = 15 = kill -15
-kill -9= manda um signal = 9 (so fazer se o de cima n rolar)

-killall apache - manda sinal 15 p todos os processos com aquele nome
-killall -9 apache - manda sinal 9 p todos os processos com aquele nome
-fuser -mv /media - mostra processos q estao relacionados a um ponto de montagem especifico
-fuser -kmv /media -mata  processos q estao relacionados a um ponto de montagem especifico
-nice (aumento a prioridade (sigla PR) do processo q vou rodar (-20 - max prioridade; +20 - min prioridade)) - sigla NI qdo faço cmd HTOP, TOP
-nice --20 sleep 100
-nice -20 sleep 100
-renice -20 PID (aumento a prioridade (sigla PR) do processo q jah está rodando (-20 - max prioridade; +20 - min prioridade)) - sigla NI qdo faço cmd HTOP, TOP

jobs - mostra os processos em segundo plano
CTRL+Z - mudo o status p stop e exibe o NUMPROC=5
bg %5 (NUMPROC=5) - exec job em segundo plano
fg %5 (NUMPROC=5) - exec job em primeiro plano

</li>
<li>
outros cmd:
-mount
-umount /media
- sleep 100 & sleep 500 & (& - envia processo p segundo plano (isso gera um job))
-pgrep sleep = ps aux | grep sleep
-ping -c 99 www.google.com.br &> /tmp/ping.google (faz o ping 99 vezes e envio p o arquivo ping.google)
-nl píng.google (conte o numero de linhas)

</li>

</ol>