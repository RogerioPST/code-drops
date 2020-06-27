var corAtual;



const { body} = document
try{
	body.style.backgroundColor = lumiance("#6232cc", 0)
}catch(e){
	console.log("houve um erro: ", e.message)
}

function alteraCor(cor){
	console.log("altera cor", cor)
	corAtual = cor;
	document.getElementById('resultado').style.backgroundColor = corAtual
	//corEscolhida = document.getElementById("cor").
	//luminosidade = document.getElementById("luminosidade")
}
function alteraLuminosidade(luminosidade){
	//cor = document.getElementById('resultado').style.backgroundColor

	console.log('corAtual', corAtual)
	if (luminosidade >0 && luminosidade <100){
		luminosidadeFinal = - Math.abs(luminosidade)/200
	} else{
		luminosidadeFinal = luminosidade/200
	}
	
	console.log('luminosidade', luminosidadeFinal)
	body.style.backgroundColor = lumiance(corAtual, luminosidadeFinal)
}
//logica p converter o hex em uma cor mais clara ou mais escura
function lumiance(hex, luminosity=0){
	hex = hex.replace(/[^0-9a-f]/gi, '')
	const isValidHex = hex.length ===6 || hex.length ===3

	if (!isValidHex) throw new Error("Invalid HEX")
	//se for 3 digitos, transformar p 6 digitos
	if (hex.length ===3){
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
	}

	//aplicar uma formula matematica p aumentar ou diminuir a 
	//luminosidade de um hex
	//transformar o hex em rgb
	const black = 0
	const white = 255
	const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi)

	let newHex = '#'

	for (let towDigit of twoDigitGroup){		
		const numberFromHex = parseInt(towDigit, 16)
		const calculateLuminosity = numberFromHex + (luminosity * 255)
		const blackOrLuminosity = Math.max(black, calculateLuminosity)
		const partialColor = Math.min(white,blackOrLuminosity)
		const newColor = Math.round(partialColor)

		const numberToHex = newColor.toString(16)
		const finalHex = `0${numberToHex}`.slice(-2)

		newHex = newHex + finalHex
	}

	console.log('new hex', newHex)
	return newHex

}