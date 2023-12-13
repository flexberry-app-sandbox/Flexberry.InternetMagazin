import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-internet-magazin-клиент', 'Unit | Model | i-i-s-internet-magazin-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-internet-magazin-адрес',
    'model:i-i-s-internet-magazin-заказы',
    'model:i-i-s-internet-magazin-категория',
    'model:i-i-s-internet-magazin-клиент',
    'model:i-i-s-internet-magazin-корзина',
    'model:i-i-s-internet-magazin-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
