import os

#RecursionError: maximum recursion depth exceeded while calling a Python object
import sys
sys.setrecursionlimit(10000)
#fim de RecursionError: maximum recursion depth exceeded while calling a Python object

from os.path import join, getsize

'''
#for root , dirs, files in os.walk('C:/'):
top = '.'
for root , dirs, files in os.walk(top):
	print("diretorios:", dirs)
	print("arquivos:", files)
	print(root, "consumes", end=" ")
	print(sum(getsize(join(root, name)) for name in files), end=" ")


print(".........")
arquivos = [
            filename for filename in os.listdir('.')]
'''
#statinfo = os.stat('teste.py')
#print(statinfo.st_size)


def encontra(caminho, contador=0):	
	#print("caminho", os.path.dirname(os.path.realpath('C:/')))
	#caminho = os.path.dirname(os.path.realpath('C:/'))
	#print("contador", contador)
	arquivos = [filename for filename in os.listdir(caminho)]
	#arquivos = [filename for filename in os.listdir(caminho)]

	for filename in arquivos:				
		#print(os.path.abspath(filename))
		#print("filename:" , filename)		
		#print("filename join:" , join(caminho, filename))
		if (os.path.isfile(join(caminho, filename))):		
			#for contagem in range(contador):				
			#	print("-", end="")
			if os.path.getsize(join(caminho, filename)) > 1000000:
				print("->", join(caminho, filename), " - ", os.path.getsize(join(caminho, filename)), " bytes" )		
		else:			
			contador=contador+1
			#print("[] -", filename)
			dir_path = os.path.dirname(os.path.realpath(join(caminho, filename)))
			proximo_diretorio = dir_path + "/" + filename
			encontra(os.path.abspath(proximo_diretorio),contador )
			#encontra(os.path.abspath(proximo_diretorio))


encontra('C:/')
#encontra(os.getcwd())