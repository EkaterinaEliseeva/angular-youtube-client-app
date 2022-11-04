import { createAction, props } from '@ngrx/store';
import ItemsActionsEnum from 'src/app/features/youtube/stores/items/enums/item-actions.enum';
import IItemsStore from 'src/app/features/youtube/stores/items/items-store.model';

const itemsLoadAction = createAction(
  ItemsActionsEnum.LOAD,
  props<{ payload: IItemsStore }>(),
);

export default itemsLoadAction;
