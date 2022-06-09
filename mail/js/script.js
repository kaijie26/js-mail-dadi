// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click',
       function () {
           // Raccolta dati del utente
           const userEmail = document.getElementById('user-email').value;
           // Lista delle email di chi può accedere
           const listEmail = ['howapos180@falkyz.com', 'konda79smailbox@playfunplus.com',
              'sh4d0w3dhtml@hacktoy.com', 'odbo@partnerct.com', 'rogess@onlinecmail.com',
             'mariobianchi@libero.it', 'johndoe@yahoo.it', 'mariorossi@alice.it', 'paoloverdi@gmail.com'];

           // Scorro l'array (col ciclo for)
           // Parto in default che emaiFound sia falsa salvo caso in cui l'email emessa sia vera
           // Controllo che listEmail si trova nella array dopo il click
           let emailFound = false;
           for(let i = 0; i <listEmail.length; i++) {
               const allEmail = listEmail[i];
               
               if (allEmail === userEmail) {
                   emailFound = true;
                   
               }
           }

           // Se emailFoun === true allora notifico al cliente di navigare liberamente
           // Altrimenti lo respingo noticando l'invalidità della email
           if(emailFound) {
               alert('Benvenuto naviga liberamente');
           }else{
               alert('Error email non valido');
           }
          
       }


    )


    
    



