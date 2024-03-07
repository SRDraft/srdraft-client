import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useAuthStore = create(devtools(authStoreReducer));

function authStoreReducer(set, get) {
  const initialState = {
    user: null,
    isLoading: true,
    verificationRequired: false,
  };

  return {
    ...initialState,

    verify: async () => true,

    isAuthenticated: () => get().status() === 'authenticated',

    checkAuthenticated: () => {
      return get().user ? 'authenticated' : 'unauthenticated';
    },

    status: () => {
      return get().isLoading ? 'isLoading' : get().checkAuthenticated();
    },
  };
}

useAuthStore.getState().verify(); // verify on app mount

export default useAuthStore;
