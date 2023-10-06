'use strict'
//javascript en conjunto con css y html para armar el carrousel de imagenes

const fondo_grande       = document.querySelector('.fondo_grande')
const punto             = document.querySelectorAll('.punto')

//Cuando click en punto 
    //saber la posición de ese punto
    //aplicar un transform translateX al fondo grande
    //quitar la clase activo de todos los puntos 
    //añadir la clase activo al punto que hemos hecho click

   //recorrer todos los puntos
punto.forEach(( cadaPunto , i )=> {
        //asignamos un click a cada punto
    punto[i].addEventListener('click',()=>{

        //guardar la posición de ese punto
        let posicion = i
        //calculando el espacio que debe desplazarse el fondo grande
        let operacion = posicion * -50


            //movemos el grande
            fondo_grande.style.transform = `translateX(${ operacion }%)`

            //recorremos todos los puntos
            punto.forEach( ( cadaPunto , i )=>{
                //quitamos la clase activo a todos los puntos
                punto[i].classList.remove('activo')
            })
            //añadir la clase activo en el punto que hemos hecho click
            punto[i].classList.add('activo')

        })
    })