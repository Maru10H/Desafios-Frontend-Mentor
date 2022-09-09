const URL = 'https://api.adviceslip.com'
const btn = document.getElementById('boton')
const cita = document.getElementById('cita')
const advice = document.getElementById('numero')

const mostrarCita=()=>{
    fetch(`${URL}/advice`)
    .then(response => response.json())
    .then((data)=> {
        
        advice.innerHTML = `Advice # ${data.slip.id}`
        cita.innerHTML = data.slip.advice

    })

}

btn.addEventListener('click', mostrarCita)

mostrarCita()