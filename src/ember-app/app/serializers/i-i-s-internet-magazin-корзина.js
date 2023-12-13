import { Serializer as КорзинаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-internet-magazin-корзина';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КорзинаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
