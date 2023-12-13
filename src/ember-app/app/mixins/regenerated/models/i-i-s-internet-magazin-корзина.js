import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодЗаказа: DS.attr('number'),
  кодКорзины: DS.attr('number'),
  кодТовара: DS.attr('number'),
  количество: DS.attr('number'),
  заказы: DS.belongsTo('i-i-s-internet-magazin-заказы', { inverse: 'корзина', async: false })
});

export let ValidationRules = {
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-internet-magazin-корзина.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодКорзины: {
    descriptionKey: 'models.i-i-s-internet-magazin-корзина.validations.кодКорзины.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодТовара: {
    descriptionKey: 'models.i-i-s-internet-magazin-корзина.validations.кодТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-internet-magazin-корзина.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заказы: {
    descriptionKey: 'models.i-i-s-internet-magazin-корзина.validations.заказы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КорзинаE', 'i-i-s-internet-magazin-корзина', {
    количество: attr('Количество', { index: 0 }),
    кодКорзины: attr('Код корзины', { index: 1 }),
    кодТовара: attr('Код товара', { index: 2 }),
    кодЗаказа: attr('Код заказа', { index: 3 })
  });
};
