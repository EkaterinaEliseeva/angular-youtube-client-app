import { createReducer, on } from '@ngrx/store';
import ICustomItemsStore from 'src/app/features/youtube/stores/custom-items/custom-items-store.model';
import customItemsAddAction from 'src/app/features/youtube/stores/custom-items/actions/custom-items.action';

const initialStore = {
  customItems: [],
};

const customItemsReducer = createReducer<ICustomItemsStore>(
  initialStore,
  on(
    customItemsAddAction,
    (state, { payload }) => ({ customItems: [...state.customItems, payload] }),
  ),
);

export default customItemsReducer;
