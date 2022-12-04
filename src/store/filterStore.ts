import create, {StateCreator} from 'zustand';
import {persist, PersistOptions} from 'zustand/middleware';

export type FilterState = {
  search: string;
  setSearch: (search: string) => void;
};

export const filterStore = create<FilterState>(set => ({
  search: '',
  setSearch: (searchKey: string) => set({searchKey}),
}));

export default filterStore;
