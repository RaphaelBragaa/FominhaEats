

 function escolhaPrato(prato){
     let pratoEscolhido = document.querySelector(".prato > .selecionado")
     if(pratoEscolhido == null){
        prato.classList.add("selecionado")
     }
    pratoEscolhido.classList.remove("selecionado")
     }

 function escolhaBebida(bebida){
     let bebidaEscolhida = document.querySelector(".bebidas > .selecionado")
     if(bebidaEscolhida !== null){
         bebidaEscolhida.classList.remove("selecionado");
     }
     bebida.classList.add("selecionado")
 }

 function escolhaSobremesa(sobremesa){
     let sobremesaEscolhida = document.querySelector(".sobremesa>.selecionado")
     if(sobremesaEscolhida !== null){
         sobremesaEscolhida.classList.remove("selecionado");
     }
     sobremesa.classList.add("selecionado")
  }


 




