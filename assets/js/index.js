const precio = 400000
let cantidad = 0
let total = 0

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio.toLocaleString()

const btnsuma1 = document.querySelector('#btnmas')
const btnresta1 = document.querySelector('#btnmenos')
const cantidadhtml = document.querySelector('.cantidad')
const valortotal = document.querySelector('.valor-total')

btnsuma1.addEventListener('click', () => {
    cantidad++;
    total = precio * cantidad
    actualizarInterfaz()
})

btnresta1.addEventListener('click', () => {
    // condición para que al llegar a 0, la cantidad no siga restandose
    if (cantidad > 0) { // resta de la cantidad y cálculo del total
        cantidad--;
        total = precio * cantidad
        //ejecuto función para actualizar valores en html
        actualizarInterfaz()
    }
})

const actualizarInterfaz = () => {
    cantidadhtml.innerHTML = cantidad
    valortotal.innerHTML = total.toLocaleString()
}

// toLocaleString para agregar el tipo de moneda local

/* forma antigua
 function suma2 () {
}
 */





