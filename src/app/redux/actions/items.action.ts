import { createAction, props } from '@ngrx/store';
import ItemsActionsEnum from 'src/app/redux/enums/item-actions.enum';
import IItemsStore from 'src/app/redux/models/items-store.model';

const itemsLoadAction = createAction(
  ItemsActionsEnum.LOAD,
  props<{ payload: IItemsStore }>(),
);

export default itemsLoadAction;
