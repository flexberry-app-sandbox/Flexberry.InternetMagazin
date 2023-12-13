import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вобработке: DS.attr('string'),
  время: DS.attr('string'),
  датаЗаказа: DS.attr('date'),
  завершен: DS.attr('string'),
  кодАдреса: DS.attr('number'),
  кодЗаказа: DS.attr('number'),
  кодКлиента: DS.attr('number'),
  сумма: DS.attr('decimal'),
  адрес: DS.belongsTo('i-i-s-internet-magazin-адрес', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-internet-magazin-клиент', { inverse: null, async: false }),
  товар: DS.hasMany('i-i-s-internet-magazin-товар', { inverse: 'заказы', async: false }),
  корзина: DS.hasMany('i-i-s-internet-magazin-корзина', { inverse: 'заказы', async: false })
});

export let ValidationRules = {
  вобработке: {
    descriptionKey: 'models.i-i-s-internet-magazin-заказы.validations.вобработке.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  время: {
    descriptionKey: 'models.i-i-s-internet-magazin-заказы.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаЗаказа: {
    descriptionKey: 'models.i-i-s-internet-magazin-заказы.validations.датаЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  завершен: {
    descriptionKey: 'models.i-i-s-internet-magazin-заказы.validations.завершен.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодАдреса: {
    descriptionKey: 'models.i-i-s-internet-magazin-заказы.validations.кодАдреса.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-internet-magazin-заказы.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодКлиента: {
    descriptionKey: 'models.i-i-s-internet-magazin-заказы.validations.кодКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-internet-magazin-заказы.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-internet-magazin-заказы.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-internet-magazin-заказы.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-internet-magazin-заказы.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  корзина: {
    descriptionKey: 'models.i-i-s-internet-magazin-заказы.validations.корзина.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказыE', 'i-i-s-internet-magazin-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    датаЗаказа: attr('Дата заказа', { index: 1 }),
    время: attr('Время', { index: 2 }),
    вобработке: attr('Вобработке', { index: 3 }),
    завершен: attr('Завершен', { index: 4 }),
    кодКлиента: attr('Код клиента', { index: 5 }),
    сумма: attr('Сумма', { index: 6 })
  });

  modelClass.defineProjection('ЗаказыL', 'i-i-s-internet-magazin-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    датаЗаказа: attr('Дата заказа', { index: 1 }),
    время: attr('Время', { index: 2 }),
    вобработке: attr('Вобработке', { index: 3 }),
    завершен: attr('Завершен', { index: 4 }),
    кодКлиента: attr('Код клиента', { index: 5 }),
    сумма: attr('Сумма', { index: 6 })
  });
};
