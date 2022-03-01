function limpar (evento, index){
	if (evento.target.value == ""){ 
		let checkB = evento.target.id.split("-");
		
		const checkInicia = document.getElementById(`${checkB[1]}-${index}`);
		checkInicia.checked = false;
		const btn = document.getElementById(`btn-rotina-${index}`);
		
		if (btn.classList.contains("finalizado")){ 
			btn.classList.remove(btn.classList);
			btn.classList.add("em-andamento");		
			btn.textContent = "Andamento";
		} else{
			btn.classList.remove(btn.classList);
			btn.classList.add("nao-iniciado");		
			btn.textContent = "Não iniciado";
		}
	}
}
function realizar(evento, index) {  
	//evento.preventDefault();
  const matricula = document.getElementById(`matricula-${evento.target.id}`);
  const alerta = document.querySelector(".alerta");

  console.log(evento.target.checked);
  if (matricula.value == "") {
    if (evento.target.checked) {			
      evento.target.checked = false;
      exibeAlerta(alerta, `POR FAVOR, PREENCHA A MATRICULA ${evento.target.id.split("-")[0]}`);
    } 
  } else {
		if (!evento.target.checked) {		
			const btn = document.getElementById(`btn-rotina-${index}`);
		
		if (btn.classList.contains("finalizado")){ 
			btn.classList.remove(btn.classList);
			btn.classList.add("em-andamento");		
			btn.textContent = "Andamento";
			return;
		} 
		}
    const checkInicia = document.getElementById(`inicia-${index}`);
    
    if (checkInicia.checked) {
      const btn = document.getElementById(`btn-rotina-${index}`);
      if (evento.target.id == `finaliza-${index}`) {
        btn.classList.remove(btn.classList);
        btn.classList.add("finalizado");
        btn.textContent = "Finalizado";
      } else if (evento.target.id == `inicia-${index}`) {
        btn.classList.remove(btn.classList);
        btn.classList.add("em-andamento");
        btn.textContent = "Andamento";
      }
    } else { //se tiver valor da matricula finaliza, mas a matricula inicio n tiver sido preenchida
      evento.target.checked = false;
			exibeAlerta(alerta, "POR FAVOR, FINALIZE A OPERAÇÃO REFERENTE AO INICÍO DA ROTINA");      
    }
  }
}

function finalizar(){
	const alerta = document.querySelector(".alerta");
	for(var i = 1; i <= 2; i++){
		const btn = document.getElementById(`btn-rotina-${i}`);
		if (btn.classList.contains("nao-iniciado")){ 
			exibeAlerta(alerta, "POR FAVOR, FINALIZE PRIMEIRO TODAS AS ROTINAS DO DIA");  
		}
	}
}

function exibeAlerta(alerta, msg){
	alerta.textContent = msg;
	alerta.style.display = "flex";
	setTimeout(() => {
		alerta.style.display = "none";
	}, 3000);
}