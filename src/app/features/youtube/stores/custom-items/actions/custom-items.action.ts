import { createAction, props } from '@ngrx/store';
import CustomItemsActionsEnum from 'src/app/features/youtube/stores/custom-items/enums/custom-item-actions.enum';
import ICustomItem from 'src/app/features/youtube/stores/custom-items/custom-item.interface';

const customItemsAddAction = createAction(
  CustomItemsActionsEnum.ADD,
  props<{ payload: ICustomItem }>(),
);

export default customItemsAddAction;
