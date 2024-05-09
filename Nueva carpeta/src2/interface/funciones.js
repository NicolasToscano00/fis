import {Pedido, Sistema} from '../domain/clases.js';
const sistema = new Sistema();
window.addEventListener('load', inicio);

function inicio() {
  document.getElementById('Encargar').style.display = 'none';
  document.getElementById('Historial').style.display = 'none';
  document.getElementById('openApp').style.display = 'none';
  document.getElementById('Seleccionar').style.display = 'none';
  document.getElementById('CargarSaldo').style.display = 'none';

  cargarEjemplos();
  agregaMenues();
  /* eslint-disable max-len*/
  document.getElementById('GruposClases').addEventListener('click', cargarAlumnosACombo);
  document.getElementById('toCargarSaldo').addEventListener('click', irACargarSaldo);
  document.getElementById('botonIngresar').addEventListener('click', irAEncargar);
  document.getElementById('toHistorial').addEventListener('click', irAHistorial);
  document.getElementById('toOrder').addEventListener('click', irAEncargar);
  document.getElementById('salir').addEventListener('click', salir);
  document.getElementById('botonComida1').addEventListener('click', seleccionarComida);
  document.getElementById('botonComida2').addEventListener('click', seleccionarComida);
  document.getElementById('botonComida3').addEventListener('click', seleccionarComida);
  document.getElementById('botonComida4').addEventListener('click', seleccionarComida);
  document.getElementById('botonComida5').addEventListener('click', seleccionarComida);
  document.getElementById('botonComida6').addEventListener('click', seleccionarComida);
  document.getElementById('botonConfirmarSelec').addEventListener('click', confirmarPedido);
  document.getElementById('botonCancelarSelec').addEventListener('click', irAEncargar);
  document.getElementById('botonConfirmarCarga').addEventListener('click', cargarSaldo);
  document.getElementById('botonCancelarCarga').addEventListener('click', irAEncargar);
}


function cargarEjemplos() {
  const alumnos = [
    {nombre: 'Nicolas Toscano', cedula: 54329858, anio: '1', saldo: 1000},
    {nombre: 'Matias Suarez', cedula: 51632612, anio: '1', saldo: 1500},
    {nombre: 'Juan Fernandez', cedula: 51632612, anio: '2', saldo: 2000},
    {nombre: 'Camila Rodriguez', cedula: 51231858, anio: '2', saldo: 3000},
    {nombre: 'Geronimo Gutierrez', cedula: 58978985, anio: '3', saldo: 1000},
    {nombre: 'Kevin Jhonson', cedula: 51235687, anio: '3', saldo: 1500},
    {nombre: 'Julieta Alvarez', cedula: 51223584, anio: '4', saldo: 1500},
    {nombre: 'Romina Lado', cedula: 58549565, anio: '4', saldo: 2000},
    {nombre: 'Lionel Goati', cedula: 55231234, anio: '5', saldo: 3240},
    {nombre: 'Diego Lagano', cedula: 55145234, anio: '5', saldo: 500},
    {nombre: 'Luis Suar', cedula: 56623344, anio: '6', saldo: 1200},
    {nombre: 'Martin Palarcio', cedula: 50125434, anio: '6', saldo: 2800}];
  for (let i = 0; i < alumnos.length; i++) {
    sistema.agregarEstudiante(alumnos[i]);
  }

  const menues = [{nombre: 'Hamburguesa con papas fritas', precio: 250, imagen: 'hamburguesa.png'},
    {nombre: 'Tallarines con tuco', precio: 200, imagen: 'tallarines.png'},
    {nombre: 'Papas fritas', precio: 100, imagen: 'papasFritas.png'},
    {nombre: 'Milanesa con papas fritas', precio: 270, imagen: 'milanesaPapas.png'},
    {nombre: 'Ravioles con tuco', precio: 230, imagen: 'raviolesTuco.png'},
    {nombre: 'Empanadas', precio: 80, imagen: 'empanadas.png'}];
  for (let i = 0; i < menues.length; i++) {
    sistema.agregarMenu(menues[i]);
  }
  console.log(sistema.getListaMenues());
}


function cargarAlumnosACombo() {
  const comboGrupo = document.getElementById('GruposClases').value;
  const comboAlumnos = document.getElementById('Alumnos');
  comboAlumnos.innerHTML = '';
  for (const elem of sistema.getListaEstudiantes()) {
    if (elem.anio == comboGrupo) {
      const nodo = document.createElement('option');
      const nodoT = document.createTextNode(elem.nombre);
      nodo.appendChild(nodoT);
      comboAlumnos.appendChild(nodo);
    }
  }
}

function irAEncargar() {
  const alumno = document.getElementById('Alumnos');
  const curso = document.getElementById('GruposClases');
  const cursoSeleccionado = curso.options[curso.selectedIndex].text;
  const alumnoSeleccionado = alumno.options[alumno.selectedIndex].text;

  document.getElementById('openApp').style.display = 'block';
  document.getElementById('Encargar').style.display = 'block';
  document.getElementById('MenuPrincipal').style.display = 'none';
  document.getElementById('Seleccionar').style.display = 'none';
  document.getElementById('Historial').style.display = 'none';
  document.getElementById('CargarSaldo').style.display = 'none';
  document.getElementById('navBarAlumno').innerHTML = alumnoSeleccionado + '  -  ' + cursoSeleccionado;
  document.getElementById('cantidad').value= 1;
  document.getElementById('bloqueRestricciones').value = '';
  actualizarSaldo();
}

function irAHistorial() {
  document.getElementById('Encargar').style.display = 'none';
  document.getElementById('Seleccionar').style.display = 'none';
  document.getElementById('CargarSaldo').style.display = 'none';
  document.getElementById('Historial').style.display = 'block';
  cargarTablaHistorial();
}


function salir() {
  document.getElementById('MenuPrincipal').style.display = 'block';
  document.getElementById('openApp').style.display = 'none';
}
function agregaMenues() {
  for (let i = 1; i <= sistema.listaMenues.length; i++) {
    const idComida = 'nombreComida' + i;
    const idPrecio = 'precioComida' + i;
    const idImagen = 'imagenComida' + i;
    const nombreComida = document.getElementById(idComida);
    const precioComida = document.getElementById(idPrecio);
    const imagenComida = document.getElementById(idImagen);
    nombreComida.innerHTML = '';
    precioComida.innerHTML = '';
    nombreComida.innerHTML = sistema.listaMenues[i - 1].nombre;
    precioComida.innerHTML = '$' + sistema.listaMenues[i - 1].precio;
    imagenComida.src = '../../docs/archivos/' + sistema.listaMenues[i - 1].imagen;
    imagenComida.alt = sistema.listaMenues[i - 1].imagen.substring(0, sistema.listaMenues[i - 1].imagen.indexOf('.'));
  }
}


function seleccionarComida() {
  // eslint-disable-next-line no-invalid-this
  const value = this.value;
  document.getElementById('Historial').style.display = 'none';
  document.getElementById('Encargar').style.display = 'none';
  document.getElementById('CargarSaldo').style.display = 'none';
  document.getElementById('Seleccionar').style.display = 'block';
  const nombreComida = document.getElementById('nombreComidaSelec');
  const precioComida = document.getElementById('precioComidaSelec');
  const imagenComida = document.getElementById('imagenComidaSelec');
  nombreComida.innerHTML = '';
  precioComida.innerHTML = '';
  nombreComida.innerHTML = sistema.listaMenues[value].nombre;
  precioComida.innerHTML = '$' + sistema.listaMenues[value].precio;
  imagenComida.src = '../../docs/archivos/' + sistema.listaMenues[value].imagen;
  imagenComida.alt = '';
  imagenComida.alt = sistema.listaMenues[value].imagen;
}

function confirmarPedido() {
  const nombreEst = document.getElementById('navBarAlumno').textContent;
  const nombreEstudiante = nombreEst.substring(0, nombreEst.indexOf('-') - 2);
  const nombreComida = document.getElementById('nombreComidaSelec').textContent;
  const precioComida = document.getElementById('precioComidaSelec').textContent.slice(1);
  const cantComida = document.getElementById('cantidad').value;
  const restComida = document.getElementById('bloqueRestricciones').value;
  const fechaOrden = document.getElementById('fechaOrden').value;
  const precioTotal = precioComida * cantComida;
  if (cantComida < 1 || cantComida > 10) {
    alert('Elija una cantidad entre 1 y 10');
  } else {
    for (let i = 0; i < sistema.listaEstudiantes.length; i++) {
      if (sistema.listaEstudiantes[i].nombre === nombreEstudiante) {
        if (precioTotal > sistema.listaEstudiantes[i].saldo) {
          alert('No tiene saldo suficiente para realizar esta compra');
          break;
        } else {
          sistema.listaEstudiantes[i].saldo -= precioTotal;
          const pedido = new Pedido(nombreEstudiante, nombreComida, cantComida, restComida, '$' + precioTotal, fechaOrden);
          sistema.agregarPedido(pedido);
          alert('Su pedido se ha realziado de forma exitosa');
          irAEncargar();
          break;
        }
      }
    }
  }
}

function limpiarTablaHistorial() {
  document.getElementById('idTablaHistorial').innerHTML = '';
}

function cargarTablaHistorial() {
  limpiarTablaHistorial();
  const nombreEst = document.getElementById('navBarAlumno').textContent;
  const nombreEstudiante = nombreEst.substring(0, nombreEst.indexOf('-') - 2);
  const tabla = document.getElementById('idTablaHistorial');
  const datos = sistema.getListaPedidos();
  const cabezal = tabla.createTHead();
  const filaTit = cabezal.insertRow();
  const celTit2 = filaTit.insertCell();
  celTit2.innerHTML = '<b>Menú</b>';
  const celTit3 = filaTit.insertCell();
  celTit3.innerHTML = '<b>Cantidad</b>';
  const celTit4 = filaTit.insertCell();
  celTit4.innerHTML = '<b>Restricciones</b>';
  const celTit5 = filaTit.insertCell();
  celTit5.innerHTML = '<b>Total</b>';
  const celTit6 = filaTit.insertCell();
  celTit6.innerHTML = '<b>Fecha</b>';

  for (let i = 0; i < datos.length; i++) {
    const pedido = datos[i];
    if (pedido.nombre === nombreEstudiante) {
      const fechaArray = pedido.fecha.split('-');
      const fecha = fechaArray[2]+'/'+fechaArray[1]+'/'+fechaArray[0];
      const fila = tabla.insertRow();
      const celda2 = fila.insertCell();
      celda2.innerHTML = pedido.menu;
      const celda3 = fila.insertCell();
      celda3.innerHTML = pedido.cantidad;
      const celda4 = fila.insertCell();
      celda4.innerHTML = pedido.restricciones;
      const celda5 = fila.insertCell();
      celda5.innerHTML = pedido.total;
      const celda6 = fila.insertCell();
      celda6.innerHTML = fecha;
    }
  }
}

function actualizarSaldo() {
  const nombreEst = document.getElementById('navBarAlumno').textContent;
  const nombreEstudiante = nombreEst.substring(0, nombreEst.indexOf('-') - 2);
  const datos = sistema.getListaEstudiantes();
  for (let i = 0; i < datos.length; i++) {
    const estudiante = datos[i];
    if (estudiante.nombre===nombreEstudiante) {
      document.getElementById('navBarSaldo').innerHTML = '';
      document.getElementById('navBarSaldo').innerHTML = 'Saldo: $' + estudiante.saldo;
      break;
    }
  }
}
function irACargarSaldo() {
  document.getElementById('Encargar').style.display = 'none';
  document.getElementById('Seleccionar').style.display = 'none';
  document.getElementById('Historial').style.display = 'none';
  document.getElementById('CargarSaldo').style.display = 'block';
  cargarTablaHistorial();
}

function cargarSaldo() {
  const nombreEst = document.getElementById('navBarAlumno').textContent;
  const nombreEstudiante = nombreEst.substring(0, nombreEst.indexOf('-') - 2);
  const datos = sistema.getListaEstudiantes();
  const saldoACargar=document.getElementById('saldoACargar').value*1;
  if (saldoACargar < 100 || saldoACargar > 10000) {
    alert('Elija una cantidad para cargar entre $100 y $10000');
  } else {
    for (let i = 0; i < datos.length; i++) {
      const estudiante = datos[i];
      if (estudiante.nombre===nombreEstudiante) {
        estudiante.saldo += saldoACargar;
        break;
      }
    }
    actualizarSaldo();
    alert('Su carga se ha realziado de forma exitosa');
    irAEncargar();
  }
}


