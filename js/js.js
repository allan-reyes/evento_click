var boton = document.getElementById('boton'),
    caja = document.getElementById('caja'),
    contador=0

    function cambio()
    {
        if(contador==0)
        {
            caja.classList.add('azul');
            contador=1;
        }
        else{caja.classList.remove('azul');
            contador=0;}
    }


    boton.addEventListener('click',cambio,true)