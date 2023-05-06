const contenedorBotones = document.getElementById("contenedor-botones");
const contenedorToast = document.getElementById("contenedor-toast");

contenedorBotones.addEventListener('click', (e) => {
    e.preventDefault();
    
    const tipo = e.target.dataset.tipo;

    if(tipo === 'exito') {
        console.log('Mariquera mata partida');
    } else if(tio === 'error') {
        console.log('No papa');
    } else if(tipo === 'info') {
        console.log('Buena suerte');
    } 
})
