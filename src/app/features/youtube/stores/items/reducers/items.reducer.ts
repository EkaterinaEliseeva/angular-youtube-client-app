import { createReducer, on } from '@ngrx/store';

import IItemsStore from 'src/app/features/youtube/stores/items/items-store.model';
import itemsLoadAction from 'src/app/features/youtube/stores/items/actions/items.action';

const initialStore = {
  items: [],
  isLoaded: false,
};

const itemsReducer = createReducer<IItemsStore>(
  initialStore,
  on(itemsLoadAction, (state, { payload }) => ({ items: payload.items, isLoaded: true })),
);

export default itemsReducer;
