import { createAction, props } from '@ngrx/store';
import CustomItemsActionsEnum from 'src/app/features/youtube/stores/custom-items/enums/custom-item-actions.enum';
import IItem from 'src/app/features/youtube/models/item.model';

const customItemsAddAction = createAction(
  CustomItemsActionsEnum.ADD,
  props<{ payload: IItem }>(),
);

export default customItemsAddAction;
