document.addEventListener('DOMContentLoaded', () => {
    // Crear el visor dinámicamente si no existe
    const visor = document.createElement('div');
    visor.id = 'visor-imagen';
    visor.className = 'visor';
    visor.innerHTML = '<img id="imagen-expandida" src="">';
    document.body.appendChild(visor);

    const imgExpandida = document.getElementById('imagen-expandida');
    const header = document.querySelector('header');

    // Seleccionar TODAS las imágenes de las secciones
    const todasLasFotos = document.querySelectorAll('.categoria-card img, .foto-grande img, .foto-semana');

    todasLasFotos.forEach(foto => {
        foto.addEventListener('click', () => {
            imgExpandida.src = foto.src;
            visor.style.display = 'flex';
            header.style.opacity = '0'; // Ocultar header con elegancia
        });
    });

    // Cerrar al hacer clic en cualquier parte del visor
    visor.addEventListener('click', () => {
        visor.style.display = 'none';
        header.style.opacity = '1';
    });
});
