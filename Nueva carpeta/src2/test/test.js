import {Pedido, Sistema, Estudiante, Menu} from '../domain/clases.js';
const estudiante= new Estudiante('Pepe', 58975497, 12, 1000);
const menu= new Menu('Empanadas', 80, 'empanadas.png');
const pedido= new Pedido('Pepe', 'Empanadas', 1, 'sin sal', 80, '23/06/2023');
const sistema= new Sistema();
sistema.agregarEstudiante(estudiante);
sistema.agregarMenu(menu);
sistema.agregarPedido(pedido);


test('Devuelve largo de lista de estudiante igual a 1', ()=>{
  expect(sistema.getListaEstudiantes().length).toBe(1);
});
test('Devuelve largo de lista de menues igual a 1', ()=>{
  expect(sistema.getListaMenues().length).toBe(1);
});
test('Devuelve largo de lista de pedidos igual a 1', ()=>{
  expect(sistema.getListaPedidos().length).toBe(1);
});
