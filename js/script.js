const juego = function () {
    let puntosUsuario = 0;
    let puntosOrdenador  = 0;

    /*función para empezar el juego*/
    const jugar = () => {
        const piedraBtn = document.querySelector('.piedra');
        const papelBtn = document.querySelector('.papel');
        const tijeraBtn = document.querySelector('.tijera');
        const opcionesJugador = [piedraBtn, papelBtn, tijeraBtn];
        const opcionesOrdenador = ['piedra', 'papel', 'tijera'];

        /* funcion para que el ordenador escoja movimiento*/
        opcionesJugador.forEach(option => {
                option.addEventListener('click', function() {

                    const elegirNumero = Math.floor(Math.random()*3);
                    const eleccionOrdenador = opcionesOrdenador[elegirNumero];

                    ganador(this.innerText,eleccionOrdenador);
                });
            });

        }


    /* funcion para decidir el ganador */
    const ganador = (jugador,ordenador) => {
        const resultados = document.querySelector('.resultados')
        const contadorUsuario = document.querySelector('.contador-usuario');
        const contadorOrdenador = document.querySelector('.contador-ordenador');
        jugador = jugador.toLowerCase(); 
        ordenador = ordenador.toLowerCase(); 
        if (jugador === ordenador) {
                resultados.textContent = 'Empate'
        }
        else if(jugador == 'piedra') {
            if(ordenador == 'papel') {
                resultados.textContent = '¡Ordenador gana!';
                puntosOrdenador++;
                contadorOrdenador.textContent = puntosOrdenador;
            }
            else{
                resultados.textContent = '¡Jugador gana!';
                puntosUsuario++;
                contadorUsuario.textContent = puntosUsuario;
            }
        }

        else if(jugador == 'tijera') {
            if(ordenador == 'piedra') {
                resultados.textContent = '¡Ordenador gana!';
                puntosOrdenador++;
                contadorOrdenador.textContent = puntosOrdenador;
            }
            else{
                resultados.textContent = '¡Jugador gana!';
                puntosUsuario++;
                contadorUsuario.textContent = puntosUsuario;
            }
        }

        else if(jugador == 'papel') {
            if(ordenador == 'tijera') {
                resultados.textContent = '¡Ordenador gana!';
                puntosOrdenador++;
                contadorOrdenador.textContent = puntosOrdenador;
            }
            else{
                resultados.textContent = '¡Jugador gana!';
                puntosUsuario++;
                contadorUsuario.textContent = puntosUsuario;
            }
        }
        
    }

    /*boton de reseteo*/
    const reseteoBtn = document.querySelector('.resetear');
    reseteoBtn.innerText = 'Borrar partida'; 
        reseteoBtn.style.display = 'flex'
        reseteoBtn.addEventListener('click',() => { 
            window.location.reload(); 
        }) 
    
    jugar();
}

juego();

