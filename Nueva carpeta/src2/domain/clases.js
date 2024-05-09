
export class Estudiante {
  constructor(nombre, cedula, anio, saldo) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.anio=anio;
    this.saldo=saldo;
  }
}
export class Menu {
  constructor(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}
export class Pedido {
  constructor(nombre, menu, cantidad, restricciones, total, fecha) {
    this.nombre = nombre;
    this.menu = menu;
    this.cantidad = cantidad;
    this.restricciones=restricciones;
    this.fecha=fecha;
    this.total=total;
  }
}


export class Sistema {
  constructor() {
    this.listaEstudiantes=[];
    this.listaMenues=[];
    this.listaPedidos=[];
    this.listaHistoriales=[];
  }

  agregarEstudiante(e) {
    this.listaEstudiantes.push(e);
  }
  agregarMenu(m) {
    this.listaMenues.push(m);
  }
  agregarPedido(p) {
    this.listaPedidos.push(p);
  }
  getListaEstudiantes() {
    return this.listaEstudiantes;
  }
  getListaMenues() {
    return this.listaMenues;
  }
  getListaPedidos() {
    return this.listaPedidos;
  }
}

