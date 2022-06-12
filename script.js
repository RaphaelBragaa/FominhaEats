let pratoEscolhido;
let bebidaEscolhida;
let sobremesaEscolhida;
console.log(pratoEscolhido)

 function escolhaPrato(prato){
      pratoEscolhido = document.querySelector(".prato > .selecionado")
     if(pratoEscolhido !== null){
        pratoEscolhido.classList.remove("selecionado")
        }
            prato.classList.add("selecionado")
        console.log(pratoEscolhido)
        FecharPedido()
     }
    

 function escolhaBebida(bebida){
      bebidaEscolhida = document.querySelector(".bebidas > .selecionado")
     if(bebidaEscolhida !== null){
         bebidaEscolhida.classList.remove("selecionado");
     }
     bebida.classList.add("selecionado")
     console.log(bebidaEscolhida)
     FecharPedido()
 }

 function escolhaSobremesa(sobremesa){
    console.log(sobremesaEscolhida)
      sobremesaEscolhida = document.querySelector(".sobremesa>.selecionado")
     if(sobremesaEscolhida !== null){
         sobremesaEscolhida.classList.remove("selecionado");
     }
     sobremesa.classList.add("selecionado")
    
     FecharPedido()
  }


 function FecharPedido(){
     if(sobremesaEscolhida !== undefined && 
        bebidaEscolhida !== undefined && 
        sobremesaEscolhida !== undefined){
            let Esconde = document.querySelector("#aberto")
            let Apareca = document.querySelector("#fechado")
            Esconde.classList.add("escondido")
            Apareca.classList.remove("escondido")
     }
 }
 
    function ConfirmaPedido(){
        
    }




