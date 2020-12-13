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
-sync 
-$PATH
-reboot. se der cmd n encontrado, fazer os passos 1-,2-,3- abaixo:
1- export PATH="$PATH:/sbin:/usr/sbin:/usr/local/sbin"
2- echo $PATH >> /etc/environment
3- nano /etc/environment e acrescenta 'export PATH' no começo da linha.
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
-/dev - arq de dispositivos (mapeamento de hw de bloco e serial): (sda - HD; tty - terminal virtual; sr0 (arq de gravacao) - cd room, dvd room , sata; ppp - arq de discagem; rtc - relogio de hardware; fb0 - framebuffer; dm1 - dispositivo de lvm (logical volume management - uma camada por cima p enxergar como se fosse um unico disco soh))
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
-> cmd de hardware: esses comandos leem os arquivos do /proc e formatam os dados para que sua saida seja mais adequada:
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
cmd: vi /etc/rsyslog.conf
cmd p saber em q diretorio fica determinado log: cat /etc/rsyslog.d/50-default.conf:
-> estrutura de log:
data HOST processo MENSAGEM


</li>
<li>
cmd:
-df -h ou df -Th
-ss -tulanp (quais serviços estão ativos)
-mount | grep -v tmpfs |grep -v cgroup
-mount | grep mapper
-ls -lR / (lista recursivo todo o sistema)
-vi /etc/ssh/sshd_config
-systemctl restart sshd.service
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
- ss -natp (portas abertas)
- ss -naup (portas abertas)
-mount
-umount /media
- sleep 100 & sleep 500 & (& - envia processo p segundo plano (isso gera um job))
-pgrep sleep = ps aux | grep sleep
-ping -c 99 www.google.com.br &> /tmp/ping.google (faz o ping 99 vezes e envio p o arquivo ping.google)
-nl píng.google (conte o numero de linhas)

</li>
<li>
outros conceitos:
-no cmd ls, aparece um numero apos as permissoes. em arquivos, essa eh q td de hard-link, q sao a qtd de nomes diferentes q um msm arquivo pode ter, enquanto em diretorios, eh a qtd de diretorios, incluindo o . e o ..
- p saber se eh o mesmo hard-link, usar o cmd 'ls -i' p ver se eh o mesmo inodo.
</li>
<li>
principais comandos:
-ls -l (ls longo)
-ls -a (ls all, incluindo arq ocultos)
-ls -h (ls human, q calcula e transforma em Kbytes, Mbytes etc)
-ls -r (ls em ordem inserva)
-ls -lhrS (ls usado p mostrar os arquivos de maior tamanho)
-ls -R (ls recursivo)
- ls -la --sort=time /var/ (ls ordenado do mais recente p mais antigo)
-cd - (o - indica q vai para o diretorio anterior ao atual; o "-" serve p ls tb)
- source .bashrc (no dir home, source p carregar algum script ou algo assim (usar apos alterar esse arquivo)); esse arquivo .bashrc permite colocar cor nos cmd e dar apelidos/alias, permite q o cp, rm, mv n sobreescreva e te pergunte p cada arquivo se deseja sobreescrever na opcao 'alias' com 'cp -i', por ex)
- mkdir dir1/dir2/dir3/dir4 (dah erro pq ele entende q precisam existir todos os dir ate poder criar o dir4)
- mkdir -p dir1/dir2/dir3/dir4 (n dah erro pq ele cria msm q n existam todos os dir ate poder criar o dir4)
- tree (mostra a arvore de dir; instala c apt install tree, se n tiver instalado)
-mkdir -p Relatorios/mes-{01..12}/semana-{1..4}
-cp -rv /etc . (copia de forma recursiva e verbosa td q está em etc p o dir atual)
-alias (mostra todos os apelidos q os comandos tem)
-unalias cp (desfaz o apelido do cp, por ex)
-mv (cmd p mover e renomear)
-ln arquivo.log outro.log (cria um hard link)
-ln -s arquivos.log link-arquivos (cria um link simbolico (apontamento). o inodo vai ser diferente)
-less auth.log (pagina arquivo; mostra as linhas ate cobrir toda pagina. usar setas direcionais p andar pelo arquivo e /PALAVRA p procurar uma palavra no arquivo)
-bzless auth.bz2 (permite fazer less em arq compactados)
-gzless auth.gzip (permite fazer less em arq compactados)
- file auth.png( file mostra o tipo de arquivo, pois imagina q um invasor copie o conteudo de um arquivo cp auth.log auth.png, o cmd file auth.png vai dizer q eh um ASCII text)
- date
-tail -f arq.log (faz tail e n finaliza o arquivo)
-tail -n 35 arq.log (ultimas 35 linhas)
-head -n 35 arq.log (primeiras 35 linhas)
-nl arq.log ou cat -n arq.log (faz um cat e mostra o num da linha)
- wc arq.log (wc - wordcount ; mostra qtas linhas (wc -l), palavras (wc -w) e caracteres (wc -c) o arquivo tem)
-du -h /var (qto de espaço o diretorio está usando)
-du -h /var | sort -n (qto de espaço o diretorio está usando e ordena pelo tamanho/numerico) 
-du -h /var | sort -h (qto de espaço o diretorio está usando e ordena pelo tamanho inteligivel p humanos (kilo, mega, giga)) 
-du -h /var | sort(qto de espaço o diretorio está usando e ordena pelo nome) 
-du -h / --max-depth=1 | sort -h (qto de espaço o diretorio está usando no max de 1 nivel de profundidade)
-df -h (disk free - mostra qto está ocupando por particao c human readable)
-df -hT (disk free - mostra qto está ocupando por particao c human readable e mostra o tipo de sistema de arquivo)
-alias grep='grep --color=auto'
-ls -lR / | grep texto-procurado
-grep -v ^# arq.log (-v eh o inverso, ou seja, q n tem o padrao procurado, no caso, q n começa c comentario)
-grep -v ^# arq.log | grep -v ^$ (-v eh o inverso, ou seja, q n tem o padrao procurado, no caso, q n começa c comentario e tira as linhas vazias)
-grep -i invalid arq.log (p ignorar o Case sensitive)
-grep -ri invalid /usr/paulo (procurar recursivamente)
-grep -ri invalid /usr/paulo | less (procurar recursivamente e pagina os resultados)
-grep -ril invalid /usr/paulo (procurar recursivamente emostra os nomes dos arquivos apenas onde aparecem invalid)
-cut -d : -f 1,3,5 arq.log (corte utilizando delimitador ':' e mostre os campos 1,3,5 )
-cut -d " " -f 1,3,5-50 arq.log (corte utilizando delimitador ' ' e mostre os campos 1,3 e 5 ao 50, se a msg for mto grande )
-ls -l / /teste > lista-ok 2> lista-fail (grava no arq lista-ok o q funciona e no lista-fail o q deu erro)
-cat /etc/group
-cat /etc/passwd
-which useradd (para encontrar o executavel)
-file /usr/sbin/useradd
-man man
-man sudoers (vai mostrar como deve estar o arquivo sudoers, por ex)
-chage -l c079463 (mostra as info ref a age/idade/expiracao do usuario)
-cat /etc/login.defs (mpstra os padroes de criacao de usuario/login)
-id c079463 (mostra o uid, grupos etc.)
</li>
</ol>