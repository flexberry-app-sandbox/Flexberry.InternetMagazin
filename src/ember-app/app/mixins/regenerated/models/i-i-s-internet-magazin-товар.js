import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодКатегории: DS.attr('number'),
  кодТовара: DS.attr('number'),
  наименование: DS.attr('string'),
  стоимость: DS.attr('decimal'),
  цвет: DS.attr('string'),
  категория: DS.belongsTo('i-i-s-internet-magazin-категория', { inverse: null, async: false }),
  заказы: DS.belongsTo('i-i-s-internet-magazin-заказы', { inverse: 'товар', async: false })
});

export let ValidationRules = {
  кодКатегории: {
    descriptionKey: 'models.i-i-s-internet-magazin-товар.validations.кодКатегории.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодТовара: {
    descriptionKey: 'models.i-i-s-internet-magazin-товар.validations.кодТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-internet-magazin-товар.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-internet-magazin-товар.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  цвет: {
    descriptionKey: 'models.i-i-s-internet-magazin-товар.validations.цвет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  категория: {
    descriptionKey: 'models.i-i-s-internet-magazin-товар.validations.категория.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказы: {
    descriptionKey: 'models.i-i-s-internet-magazin-товар.validations.заказы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-internet-magazin-товар', {
    кодТовара: attr('Код товара', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 }),
    цвет: attr('Цвет', { index: 3 }),
    кодКатегории: attr('Код категории', { index: 4 }),
    категория: belongsTo('i-i-s-internet-magazin-категория', 'Категория', {
      название: attr('Название', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'название' })
  });
};
