import Client from './Client';
import ItemDoPedido from './ItemDoPedido';
import Pedido from './Pedido';

const cliente = new Client("João");

const sanduiche = new ItemDoPedido("Sanduíche", 10);
const refrigerante = new ItemDoPedido("Refrigerante", 5);
const batataFrita = new ItemDoPedido("Batata Frita", 5);

const pedido = new Pedido(cliente, [sanduiche, refrigerante, batataFrita], "dinheiro", 0.10);

console.log(pedido);
console.log('Valor sem desconto: ', pedido.calculaTotal());
console.log('Valor com desconto: ', pedido.calculaTotalComDesconto());

