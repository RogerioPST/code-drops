import os

from os.path import join, getsize

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

statinfo = os.stat('teste.py')
print(statinfo.st_size)


def encontra(caminho):
	arquivos = [
							filename for filename in os.listdir(caminho)]

	for filename in arquivos:
		#print(os.path.abspath(filename))
		#print(os.stat(filename))
		if (os.path.isfile(filename)):		
			print("->", filename, " - ", os.path.getsize(filename), " bytes" )		
		else:
			print("[] -", filename)
			encontra(os.path.abspath(filename))


encontra('.')