document.addEventListener('DOMContentLoaded', function() {
    const buscarLibroBtn = document.getElementById('buscar-libro-btn');
    const prestarLibroBtn = document.getElementById('prestar-libro-btn');
    const devolverLibroBtn = document.getElementById('devolver-libro-btn');

    const resultadosBusquedaSection = document.getElementById('resultados-busqueda');
    const formularioPrestamoSection = document.getElementById('formulario-prestamo');
    const formularioDevolucionSection = document.getElementById('formulario-devolucion');

    // Simulación de datos de libros (esto se reemplazaría con una llamada al backend)
    const libros = [
        { codigo: 'LIB001', titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
        { codigo: 'LIB002', titulo: 'El principito', autor: 'Antoine de Saint-Exupéry' },
        { codigo: 'LIB003', titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes' }
    ];

    buscarLibroBtn.addEventListener('click', function() {
        const terminoBusqueda = prompt('Ingrese el título o código del libro a buscar:');
        if (terminoBusqueda) {
            const resultados = libros.filter(libro =>
                libro.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                libro.codigo.toLowerCase().includes(terminoBusqueda.toLowerCase())
            );
            mostrarResultadosBusqueda(resultados);
            resultadosBusquedaSection.classList.remove('oculto');
            formularioPrestamoSection.classList.add('oculto');
            formularioDevolucionSection.classList.add('oculto');
            // Ocultar otras secciones si es necesario
        }
    });

    prestarLibroBtn.addEventListener('click', function() {
        formularioPrestamoSection.classList.remove('oculto');
        resultadosBusquedaSection.classList.add('oculto');
        formularioDevolucionSection.classList.add('oculto');
        // Ocultar otras secciones
    });

    devolverLibroBtn.addEventListener('click', function() {
        formularioDevolucionSection.classList.remove('oculto');
        resultadosBusquedaSection.classList.add('oculto');
        formularioPrestamoSection.classList.add('oculto');
        // Ocultar otras secciones
    });

    document.getElementById('form-prestar').addEventListener('submit', function(event) {
        event.preventDefault();
        const codigoLibro = document.getElementById('codigo-libro-prestar').value;
        const idUsuario = document.getElementById('id-usuario-prestar').value;
        alert(`Libro con código ${codigoLibro} prestado al usuario con ID ${idUsuario}`);
        // Aquí iría la lógica para enviar la información al backend
        this.reset();
    });

    document.getElementById('form-devolver').addEventListener('submit', function(event) {
        event.preventDefault();
        const codigoLibro = document.getElementById('codigo-libro-devolver').value;
        alert(`Libro con código ${codigoLibro} devuelto`);
        // Aquí iría la lógica para enviar la información al backend
        this.reset();
    });

    function mostrarResultadosBusqueda(resultados) {
        const listaLibros = document.getElementById('lista-libros');
        listaLibros.innerHTML = ''; // Limpiar resultados anteriores
        if (resultados.length > 0) {
            const ul = document.createElement('ul');
            resultados.forEach(libro => {
                const li = document.createElement('li');
                li.textContent = `${libro.titulo} - ${libro.autor} (Código: ${libro.codigo})`;
                ul.appendChild(li);
            });
            listaLibros.appendChild(ul);
        } else {
            listaLibros.textContent = 'No se encontraron libros con ese criterio.';
        }
    }

    // Aquí puedes agregar más lógica para otras funcionalidades como:
    // - Mostrar/ocultar formularios de gestión de usuarios
    // - Interactuar con el backend para obtener datos reales
    // - Validaciones de formularios
});