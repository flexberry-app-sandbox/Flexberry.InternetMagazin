import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.internet-magazin.caption'),
          title: i18n.t('forms.application.sitemap.internet-magazin.title'),
          children: [{
            link: 'i-i-s-internet-magazin-категория-l',
            caption: i18n.t('forms.application.sitemap.internet-magazin.i-i-s-internet-magazin-категория-l.caption'),
            title: i18n.t('forms.application.sitemap.internet-magazin.i-i-s-internet-magazin-категория-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-internet-magazin-заказы-l',
            caption: i18n.t('forms.application.sitemap.internet-magazin.i-i-s-internet-magazin-заказы-l.caption'),
            title: i18n.t('forms.application.sitemap.internet-magazin.i-i-s-internet-magazin-заказы-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-internet-magazin-клиент-l',
            caption: i18n.t('forms.application.sitemap.internet-magazin.i-i-s-internet-magazin-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.internet-magazin.i-i-s-internet-magazin-клиент-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-internet-magazin-адрес-l',
            caption: i18n.t('forms.application.sitemap.internet-magazin.i-i-s-internet-magazin-адрес-l.caption'),
            title: i18n.t('forms.application.sitemap.internet-magazin.i-i-s-internet-magazin-адрес-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.new-folder1.caption'),
          title: i18n.t('forms.application.sitemap.new-folder1.title'),
          children: null
        }
      ]
    };
  }),
})