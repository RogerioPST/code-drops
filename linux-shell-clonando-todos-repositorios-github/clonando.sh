#!/bin/bash
#https://www.youtube.com/watch?v=0406LYz-ZDs
mkdir meus-repositorios-github
cd meus-repositorios-github

# cmd awk: faz manipulacao de qq texto q a gente tiver
# colocar um padrao q se repete entre as barras, no caso, ssh_url e entre chaves uma acao q a gente quer q o cmd faça.
# no caso, vai imprimir o segundo campo do padrao "ssh_url : "git@github..",

#sed eh um cmd p manipular fluxos de textos, no caso, retirar a primeira aspas e depois do pipe, segunda aspas e a virgula usando regex, por ex
# no caso o s substitui um trecho de texto por outro
#https://terminalroot.com.br/2015/07/30-exemplos-do-comando-sed-com-regex.html
repositorios=$(curl -s https://api.github.com/users/RogerioPST/repos | awk '/ssh_url/{print $2}' | sed 's/^"//g' | sed 's/",$//g')

for repositorio in $repositorios
do
	git clone $repositorio
done