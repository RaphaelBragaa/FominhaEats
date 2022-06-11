let pratoEscolhido;
let bebidaEscolhida;
let sobremesaEscolhida;

 function escolhaPrato(prato){
      pratoEscolhido = document.querySelector(".prato > .selecionado")
     if(pratoEscolhido !== null){
        pratoEscolhido.classList.remove("selecionado")
        }
            prato.classList.add("selecionado")
        console.log(pratoEscolhido)
     }
    

 function escolhaBebida(bebida){
      bebidaEscolhida = document.querySelector(".bebidas > .selecionado")
     if(bebidaEscolhida !== null){
         bebidaEscolhida.classList.remove("selecionado");
     }
     bebida.classList.add("selecionado")
     console.log(bebidaEscolhida)
 }

 function escolhaSobremesa(sobremesa){
      sobremesaEscolhida = document.querySelector(".sobremesa>.selecionado")
     if(sobremesaEscolhida !== null){
         sobremesaEscolhida.classList.remove("selecionado");
     }
     sobremesa.classList.add("selecionado")
     console.log(sobremesaEscolhida)
  }


 function FecharPedido(){
     if(sobremesaEscolhida == null && 
        bebidaEscolhida == null && 
        sobremesaEscolhida == null){
            let Esconde = document.querySelector(".Seleçao")
            let Apareça = document.querySelector('.escondido')
            Esconde.classList.add("escondido")
            Apareça.classList.remove("escondido")
     }
 }




