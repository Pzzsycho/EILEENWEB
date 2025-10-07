const botones = document.querySelectorAll('.agregar-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const totalTexto = document.getElementById('total');

let total = 0;

botones.forEach(boton => {
  boton.addEventListener('click', e => {
    const producto = e.target.parentElement;
    const nombre = producto.querySelector('h3').textContent;
    const precio = parseFloat(producto.querySelector('.precio').textContent.replace('$', '').replace('.', '').replace(',', '.'));

    const item = document.createElement('li');
    item.textContent = `${nombre} - $${precio}`;
    listaCarrito.appendChild(item);

    total += precio;
    totalTexto.textContent = `Total: $${total}`;
  });
});
console.log("¡JavaScript funcionando!");
alert("Bienvenido a mi proyecto 😎");
