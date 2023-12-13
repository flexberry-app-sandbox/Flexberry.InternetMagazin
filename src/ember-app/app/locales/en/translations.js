import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISInternet_magazinАдресLForm from './forms/i-i-s-internet-magazin-адрес-l';
import IISInternet_magazinЗаказыLForm from './forms/i-i-s-internet-magazin-заказы-l';
import IISInternet_magazinКатегорияLForm from './forms/i-i-s-internet-magazin-категория-l';
import IISInternet_magazinКлиентLForm from './forms/i-i-s-internet-magazin-клиент-l';
import IISInternet_magazinАдресEForm from './forms/i-i-s-internet-magazin-адрес-e';
import IISInternet_magazinЗаказыEForm from './forms/i-i-s-internet-magazin-заказы-e';
import IISInternet_magazinКатегорияEForm from './forms/i-i-s-internet-magazin-категория-e';
import IISInternet_magazinКлиентEForm from './forms/i-i-s-internet-magazin-клиент-e';
import IISInternet_magazinАдресModel from './models/i-i-s-internet-magazin-адрес';
import IISInternet_magazinЗаказыModel from './models/i-i-s-internet-magazin-заказы';
import IISInternet_magazinКатегорияModel from './models/i-i-s-internet-magazin-категория';
import IISInternet_magazinКлиентModel from './models/i-i-s-internet-magazin-клиент';
import IISInternet_magazinКорзинаModel from './models/i-i-s-internet-magazin-корзина';
import IISInternet_magazinТоварModel from './models/i-i-s-internet-magazin-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-internet-magazin-адрес': IISInternet_magazinАдресModel,
    'i-i-s-internet-magazin-заказы': IISInternet_magazinЗаказыModel,
    'i-i-s-internet-magazin-категория': IISInternet_magazinКатегорияModel,
    'i-i-s-internet-magazin-клиент': IISInternet_magazinКлиентModel,
    'i-i-s-internet-magazin-корзина': IISInternet_magazinКорзинаModel,
    'i-i-s-internet-magazin-товар': IISInternet_magazinТоварModel
  },

  'application-name': 'Internet_magazin',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Internet_magazin',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Internet_magazin',
          title: 'Internet_magazin'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'internet-magazin': {
          caption: 'Internet_magazin',
          title: 'Internet_magazin',
          'i-i-s-internet-magazin-категория-l': {
            caption: 'Категория',
            title: ''
          },
          'i-i-s-internet-magazin-заказы-l': {
            caption: 'Заказы',
            title: ''
          },
          'i-i-s-internet-magazin-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-internet-magazin-адрес-l': {
            caption: 'Адрес',
            title: ''
          }
        },
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1'
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-internet-magazin-адрес-l': IISInternet_magazinАдресLForm,
    'i-i-s-internet-magazin-заказы-l': IISInternet_magazinЗаказыLForm,
    'i-i-s-internet-magazin-категория-l': IISInternet_magazinКатегорияLForm,
    'i-i-s-internet-magazin-клиент-l': IISInternet_magazinКлиентLForm,
    'i-i-s-internet-magazin-адрес-e': IISInternet_magazinАдресEForm,
    'i-i-s-internet-magazin-заказы-e': IISInternet_magazinЗаказыEForm,
    'i-i-s-internet-magazin-категория-e': IISInternet_magazinКатегорияEForm,
    'i-i-s-internet-magazin-клиент-e': IISInternet_magazinКлиентEForm
  },

});

export default translations;
