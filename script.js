let pratoEscolhido;
let bebidaEscolhida;
let sobremesaEscolhida;
let NomePrato;
let preçoPrato;
let NomeBebida;
let preçoBebida;
let NomeSobremesa;
let preçoSobremesa;



 function escolhaPrato(prato){
    
      pratoEscolhido = document.querySelector(".prato > .selecionado")
      preçoPrato = prato.querySelector(".preço").innerText 
      preçoPrato = preçoPrato.replace("R$ ", "");
      preçoPrato = parseFloat(preçoPrato.replace(',', '.'))
      console.log(typeof(preçoPrato))
      NomePrato = prato.querySelector(".nome").innerText
      
       
      
     if(pratoEscolhido !== null){
        pratoEscolhido.classList.remove("selecionado")
        
        }
            prato.classList.add("selecionado")
            
        FecharPedido()
     }
    

 function escolhaBebida(bebida){
      bebidaEscolhida = document.querySelector(".bebidas > .selecionado")
      preçoBebida = bebida.querySelector(".preço").innerText 
      preçoBebida = preçoBebida.replace("R$ ", "");
      preçoBebida = parseFloat(preçoBebida.replace(',', '.'))
      NomeBebida= bebida.querySelector(".nome").innerText
        
     if(bebidaEscolhida !== null){
         bebidaEscolhida.classList.remove("selecionado");
     }
     bebida.classList.add("selecionado")

     FecharPedido()
 }

 function escolhaSobremesa(sobremesa){
    
      sobremesaEscolhida = document.querySelector(".sobremesa>.selecionado")
      preçoSobremesa = sobremesa.querySelector(".preço").innerText
        preçoSobremesa = preçoSobremesa.replace("R$ ", "");
        preçoSobremesa = parseFloat(preçoSobremesa.replace(',', '.'))
        console.log(preçoSobremesa)
      
  
    
      NomeSobremesa = sobremesa.querySelector(".nome").innerText

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

        let total = (preçoSobremesa + preçoBebida + preçoPrato).toFixed(2)
       const elemento = document.querySelector(".Confirma") 
       elemento.classList.remove("skin")
       elemento.innerHTML = 
       `
       <div class="caixa">
       <h1>Confirme seu pedido</h1>
       <div>
           <p>${NomePrato}</p>
           <p>R$ ${preçoPrato}</p>
       </div>
       <div>
           <p>${NomeBebida}</p>
           <p>R$ ${preçoBebida}</p>
       </div>
       <div>
           <p>${NomeSobremesa}</p>
           <p>R$ ${preçoSobremesa}</p>
       </div>
       <div>
           <p><b>Total</b></p>
           <p><b>R$ ${total}</b></p>
       </div>
       <div class="fechamento">
           <p>Tudo certo, fechar pedido !</p> 
       </div>
       <h2 onclick="Reiniciar()">Cancelar</h2>
   </div>
   `
    }

    function Reiniciar(){
        window.location.reload()
    }




