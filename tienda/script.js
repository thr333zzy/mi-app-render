function filtrar(categoria) {
    let productos = document.querySelectorAll(".card");

    productos.forEach(producto => {
        if (categoria === "all") {
            producto.style.display = "block";
        } else {
            if (producto.classList.contains(categoria)) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        }
    });
}