import {
  defineNamespace,
  defineProjections,
  Model as КорзинаMixin
} from '../mixins/regenerated/models/i-i-s-internet-magazin-корзина';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КорзинаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
