import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-internet-magazin-адрес', 'Unit | Serializer | i-i-s-internet-magazin-адрес', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-internet-magazin-адрес',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
