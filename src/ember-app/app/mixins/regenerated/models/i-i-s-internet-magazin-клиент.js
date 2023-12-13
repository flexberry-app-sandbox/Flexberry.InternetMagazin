import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  кодКлиента: DS.attr('number'),
  отчество: DS.attr('string'),
  телефон: DS.attr('number'),
  фамилия: DS.attr('string'),
  элПочта: DS.attr('string')
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-internet-magazin-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодКлиента: {
    descriptionKey: 'models.i-i-s-internet-magazin-клиент.validations.кодКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-internet-magazin-клиент.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-internet-magazin-клиент.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-internet-magazin-клиент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  элПочта: {
    descriptionKey: 'models.i-i-s-internet-magazin-клиент.validations.элПочта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-internet-magazin-клиент', {
    элПочта: attr('Эл почта', { index: 0 }),
    кодКлиента: attr('Код клиента', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    имя: attr('Имя', { index: 3 }),
    фамилия: attr('Фамилия', { index: 4 }),
    телефон: attr('Телефон', { index: 5 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-internet-magazin-клиент', {
    элПочта: attr('Эл почта', { index: 0 }),
    кодКлиента: attr('Код клиента', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    имя: attr('Имя', { index: 3 }),
    фамилия: attr('Фамилия', { index: 4 }),
    телефон: attr('Телефон', { index: 5 })
  });
};
