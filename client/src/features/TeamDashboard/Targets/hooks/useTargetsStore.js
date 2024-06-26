import { create } from 'zustand';

const useTargetsStore = create((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ type, isOpen: true, data }),
  onClose: () => set({ type: null, isOpen: false }),

  searchQueries: {},
  setSearchQueries: (searchQueries) => set({ searchQueries }),

  selectedTargetId: null,
  setSelectedTargetId: (targetId) => set({ selectedTargetId: targetId }),
}));

export default useTargetsStore;
