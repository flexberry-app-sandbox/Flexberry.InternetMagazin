import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  город: DS.attr('string'),
  индекс: DS.attr('number'),
  кодАдреса: DS.attr('number'),
  кодКлиента: DS.attr('number'),
  улица: DS.attr('string')
});

export let ValidationRules = {
  город: {
    descriptionKey: 'models.i-i-s-internet-magazin-адрес.validations.город.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  индекс: {
    descriptionKey: 'models.i-i-s-internet-magazin-адрес.validations.индекс.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодАдреса: {
    descriptionKey: 'models.i-i-s-internet-magazin-адрес.validations.кодАдреса.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодКлиента: {
    descriptionKey: 'models.i-i-s-internet-magazin-адрес.validations.кодКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  улица: {
    descriptionKey: 'models.i-i-s-internet-magazin-адрес.validations.улица.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АдресE', 'i-i-s-internet-magazin-адрес', {
    улица: attr('Улица', { index: 0 }),
    город: attr('Город', { index: 1 }),
    кодАдреса: attr('Код адреса', { index: 2 }),
    кодКлиента: attr('Код клиента', { index: 3 }),
    индекс: attr('Индекс', { index: 4 })
  });

  modelClass.defineProjection('АдресL', 'i-i-s-internet-magazin-адрес', {
    улица: attr('Улица', { index: 0 }),
    город: attr('Город', { index: 1 }),
    кодАдреса: attr('Код адреса', { index: 2 }),
    кодКлиента: attr('Код клиента', { index: 3 }),
    индекс: attr('Индекс', { index: 4 })
  });
};
