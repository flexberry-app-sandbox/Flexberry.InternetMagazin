import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Internet_magazin',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Internet_magazin',
          title: 'Internet_magazin'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
