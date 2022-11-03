import {
  createAction, createReducer, on, props,
} from '@ngrx/store';

import IItemsStore from 'src/app/redux/models/items-store.model';
import itemsLoadAction from 'src/app/redux/actions/items.action';

const initialStore = {
  items: [],
};

const itemsReducer = createReducer<IItemsStore>(
  initialStore,
  on(itemsLoadAction, (state, { payload }) => ({ items: payload.items })),
);

export default itemsReducer;
