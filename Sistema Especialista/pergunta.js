var listaEndomorfo = []
var listaEctomorfo = []
var listaMesomorfo = []

var indice = 0;

var perguntasTela = ["Possui metabolismo acelerado?", "Possui a estrutura muscular naturalmente desenvolvida?", "Possui estrutura óssea fina?", "Possui estrutura física magra?", "Possui dificuldade em ganhar peso?", "Possui dificuldade em perder peso?", "Possui facilidade em ganho de massa muscular?", "Possui resposta rápida ao treinamento?", "Possui dificuldade em ganhar volume muscular?", "Possui proporções equilibradas?"];


function exibirPergunta() {
  document.getElementById("pergunta").innerHTML = perguntasTela[indice];
}


function prontoProxima(){
  var resposta = Swal.fire({
    title: 'Sua resposta foi anotada',
    text: "Pronto para a próxima pergunta?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não'
  }).then((result) => {
    if (result.isConfirmed) {
    // O usuário respondeu "Sim"
      indice = indice + 1;
      document.getElementById("indice").innerHTML = indice
      comecar()
    } else {
      Swal.fire('Tudo bem! Podemos continuar em outro momento')
      location.reload();
    }
  })
  }

function comecar(){

// Verificar a resposta do usuário
  switch (indice){

    case 0: //  "Seu personagem está usando óculos?"
        // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
        var resposta = Swal.fire({
            title: 'Tenho uma pergunta',
            text: perguntasTela[indice],
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
          }).then((result) => {
            if (result.isConfirmed) {
            // O usuário respondeu "Sim"
              listaEctomorfo.push("Possui metabolismo acelerado");
              listaMesomorfo.push("Possui metabolismo acelerado");
              document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
              document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
              document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
              prontoProxima()
        } else {
            // O usuário  respondeu "Não"
            listaEndomorfo.push ("Possui metabolismo lento");   
            document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
            document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
            document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
            prontoProxima()          
            }

          })
break

    case 1: // "A estrutura muscular é naturalmente desenvolvida?"
    // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
    var resposta = Swal.fire({
        title: 'Tenho uma pergunta',
        text: perguntasTela[indice],
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.isConfirmed) {
    	// O usuário respondeu "Sim"
          listaMesomorfo.push ("Possui estrutura muscular desenvolvida");
	        document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
          document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
          document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
          prontoProxima()
    } else {
    // O usuário  respondeu "Não"
	      listaEndomorfo.push ("Não possui estrutura muscular desenvolvida");
	      listaEctomorfo.push ("Não possui estrutura muscular desenvolvida");
 	      document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
        document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
        document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
        prontoProxima()          
        }

          })
break

    case 2: // "Possui estrutura óssea fina??"
    // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
    var resposta = Swal.fire({
        title: 'Tenho uma pergunta',
        text: perguntasTela[indice],
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.isConfirmed) {
    	// O usuário respondeu "Sim"
          listaEctomorfo.push ("Possui estrutura óssea fina");
	        document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
          document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
          document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
          prontoProxima()
      } else {
      // O usuário  respondeu "Não"
        listaEndomorfo.push ("Não possui estrutura óssea fina");
        listaMesomorfo.push ("Não possui estrutura óssea fina");
        document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
        document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
        document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
      prontoProxima()          
      }
      })
break

    case 3: // "A estrutura física é magra?"
    // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
    var resposta = Swal.fire({
        title: 'Tenho uma pergunta',
        text: perguntasTela[indice],
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
      }).then((result) => {
  	 if (result.isConfirmed) {
    	// O usuário respondeu "Sim"
        listaEctomorfo.push ("Possui estrutura física magra");
	      document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
        document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
        document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
        prontoProxima()
    } else {
    // O usuário  respondeu "Não"
        listaEndomorfo.push ("Não possui estrutura física magra");
        listaMesomorfo.push ("Não possui estrutura física magra");
        document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
        document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
        document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
        prontoProxima()          
            }

          })
break
    
    case 4: // "Possui dificuldade em ganhar peso?"
    // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
    var resposta = Swal.fire({
        title: 'Tenho uma pergunta',
        text: perguntasTela[indice],
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.isConfirmed) {
    	// O usuário respondeu "Sim"
          listaEctomorfo.push ("Possui dificuldade em ganhar peso");
          document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
          document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
          document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
          prontoProxima()
    } else {
    // O usuário  respondeu "Não"
	    listaEndomorfo.push ("Não possui dificuldade em ganhar peso");
	    listaMesomorfo.push ("Não possui dificuldade em ganhar peso");
	    document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
      document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
      document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
      prontoProxima()          
      }

          })
break
    
    
    case 5: //  "Possui dificuldade em perder peso?" 
    // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
    var resposta = Swal.fire({
        title: 'Tenho uma pergunta',
        text: perguntasTela[indice],
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((result) => {
         if (result.isConfirmed) {
    	// O usuário respondeu "Sim"
          listaEndomorfo.push ("Possui dificuldade em perder peso");
          document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
          document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
          document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
          prontoProxima()
    } else {
    // O usuário  respondeu "Não"
	    listaEctomorfo.push ("Não possui dificuldade em perder peso");
	    listaMesomorfo.push ("Não possui dificuldade em perder peso");
	    document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
      document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
      document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
      prontoProxima()          
            }

          })
break
    
    
    case 6: //  "Possui facilidade em ganho de massa muscular?"
    // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
    var resposta = Swal.fire({
        title: 'Tenho uma pergunta',
        text: perguntasTela[indice],
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.isConfirmed) {
    	// O usuário respondeu "Sim"
          listaMesomorfo.push ("Possui facilidade em ganho de massa muscular");
	        document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
          document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
          document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
    } else {
    // O usuário  respondeu "Não"
	    listaEctomorfo.push ("Não possui facilidade em ganho de massa muscular");
	    listaEndomorfo.push ("Não possui facilidade em ganho de massa muscular");
	    document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
      document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
      document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
      prontoProxima()          
            }

          })
break
    
    case 7: //  "Possui resposta rápida ao treinamento??"
    // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
    var resposta = Swal.fire({
        title: 'Tenho uma pergunta',
        text: perguntasTela[indice],
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.isConfirmed) {
    	// O usuário respondeu "Sim"
          listaMesomorfo.push ("Possui resposta rápida ao treinamento");
	        document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
          document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
          document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
    } else {
    // O usuário  respondeu "Não"
	    listaEctomorfo.push ("Não possui resposta rápida ao treinamento");
	    listaEndomorfo.push ("Não possui resposta rápida ao treinamento");
	    document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
      document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
      document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
      prontoProxima()          
            }

          })
break      
    case 8: //  "Possui dificuldade em ganhar volume muscular?"
        // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
        var resposta = Swal.fire({
            title: 'Tenho uma pergunta',
            text: perguntasTela[indice],
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
          // O usuário respondeu "Sim"
              listaEctomorfo.push ("Possui dificuldade em ganhar volume muscular");
              document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
              document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
              document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
              prontoProxima()
          } else {
          // O usuário  respondeu "Não"
            listaMesomorfo.push ("Não possui dificuldade em ganhar volume muscular");
            listaEndomorfo.push ("Não possui dificuldade em ganhar volume muscular");
            document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
            document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
            document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
            prontoProxima()          
            }

              })
break      
    case 9: //  "Possui proporções equilibradas?"
    // Exibir a pergunta em uma janela de confirmação PERGUNTA DO ROBO!!!!!!!!!      
    var resposta = Swal.fire({
        title: 'Tenho uma pergunta',
        text: perguntasTela[indice],
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.isConfirmed) {
    	// O usuário respondeu "Sim"
          listaMesomorfo.push ("Possui proporções equilibradas");
          document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
          document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
          document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;
          verResultados()
      } else {
      // O usuário  respondeu "Não"
        listaEctomorfo.push ("Não possui proporções equilibradas");
        listaEndomorfo.push ("Não possui proporções equilibradas");
        document.getElementById("listaEndomorfo").innerHTML = listaEndomorfo;
        document.getElementById("listaEctomorfo").innerHTML = listaEctomorfo;
        document.getElementById("listaMesomorfo").innerHTML = listaMesomorfo;  
        verResultados() 
      }
    })
break
    }
}

function verResultados(){
  var resposta = Swal.fire({
    title: 'Analisamos suas respostas e chegamos a um resultado',
    text: "Deseja Consultá-los?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não'
  }).then((result) => {
    if (result.isConfirmed) {
    // O usuário respondeu "Sim"
      calcularesultado()
    } else {
      Swal.fire('Tudo bem! Podemos continuar em outro momento')
      location.reload();
    }
  })
}


function calcularesultado(){
  var qtdlistaEndomorfo = listaEndomorfo.length;
  var qtdlistaEctomorfo = listaEctomorfo.length;
  var qtdlistaMesomorfo = listaMesomorfo.length;

  var maior = Endomorfo;

  if(qtdlistaEctomorfo>qtdlistaEndomorfo){
    maior = Ectomorfo;
  }

  if(qtdlistaMesomorfo>maior){
    maior = Mesoformo;
  }
  document.getElementById("maior").innerHTML = maior;
  resultado();
}

function resultado(){
  switch(maior){
    case Endomorfo:
      Swal.fire('Seu paciente é Endomorfo');
    case Ectomorfo:
      Swal.fire('Seu paciente é Ectomorfo')
    case Mesoformo:
      Swal.fire('Seu paciente é Mesoformo')
    }

}
