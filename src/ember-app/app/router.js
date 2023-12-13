import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-internet-magazin-адрес-l');
  this.route('i-i-s-internet-magazin-адрес-e',
  { path: 'i-i-s-internet-magazin-адрес-e/:id' });
  this.route('i-i-s-internet-magazin-адрес-e.new',
  { path: 'i-i-s-internet-magazin-адрес-e/new' });
  this.route('i-i-s-internet-magazin-заказы-l');
  this.route('i-i-s-internet-magazin-заказы-e',
  { path: 'i-i-s-internet-magazin-заказы-e/:id' });
  this.route('i-i-s-internet-magazin-заказы-e.new',
  { path: 'i-i-s-internet-magazin-заказы-e/new' });
  this.route('i-i-s-internet-magazin-категория-l');
  this.route('i-i-s-internet-magazin-категория-e',
  { path: 'i-i-s-internet-magazin-категория-e/:id' });
  this.route('i-i-s-internet-magazin-категория-e.new',
  { path: 'i-i-s-internet-magazin-категория-e/new' });
  this.route('i-i-s-internet-magazin-клиент-l');
  this.route('i-i-s-internet-magazin-клиент-e',
  { path: 'i-i-s-internet-magazin-клиент-e/:id' });
  this.route('i-i-s-internet-magazin-клиент-e.new',
  { path: 'i-i-s-internet-magazin-клиент-e/new' });
});

export default Router;
