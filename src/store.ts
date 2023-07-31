import { create } from 'zustand';

export interface GameQuery {
  selectedGenreId?: number; // selected Genre
  selectedPlatformId?: number; // selected Platform
  searchQuery?: string;
  orderBy?: string;
  page?: number;
  page_size?: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSelectedGenreId: (selectedGenreId: number) => void;
  setSelectedPlatformId: (selectedPlatformId: number) => void;
  setSearchQuery: (searchQuery: string) => void;
  setSearchOrder: (order: string) => void;
  setPageNumber: (page: number) => void;
  setPageSize: (pageSize: number) => void;
}

// Custom hook to initialize the first state/store.

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setSelectedGenreId: (id) =>
    set((prevStore) => ({
      gameQuery: { ...prevStore.gameQuery, selectedGenreId: id },
    })),

  setSelectedPlatformId: (id) =>
    set((prevStore) => ({
      gameQuery: { ...prevStore.gameQuery, selectedPlatformId: id },
    })),

  setSearchQuery: (query) => set(() => ({ gameQuery: { searchQuery: query } })),

  setSearchOrder: (order) =>
    set((prevStore) => ({
      gameQuery: { ...prevStore.gameQuery, orderBy: order },
    })),

  setPageNumber: (page = 1) =>
    set((prevStore) => ({
      gameQuery: {
        ...prevStore.gameQuery,
        page,
      },
    })),

  setPageSize: (size = 20) =>
    set((prevStore) => ({
      gameQuery: {
        ...prevStore.gameQuery,
        page_size: size,
      },
    })),
}));

export default useGameQueryStore;
