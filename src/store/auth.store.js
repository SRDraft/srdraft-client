import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useAuthStore = create(devtools(authStoreReducer));

function authStoreReducer(set, get) {
  const initialState = {
    user: null,
    isLoading: true,
    isAuthenticated: false,
  };

  return {
    ...initialState,

    setUser: (user) => {
      set({
        user,
        isLoading: false,
        isAuthenticated: !!user?._id,
      });

      localStorage.setItem('srDraft__auth__user', JSON.stringify(user));
      return user;
    },

    verify: async () => {
      const user = JSON.parse(localStorage.getItem('srDraft__auth__user'));

      if (user?._id) {
        set({
          user,
          isLoading: false,
          isAuthenticated: true,
        });
      } else {
        set({ isLoading: false, isAuthenticated: false });
      }
    },

    logout: () => {
      localStorage.removeItem('srDraft__auth__user');
      set({ user: null, isLoading: false, isAuthenticated: false });
      window.location.href = '/auth/login';
    },
  };
}

useAuthStore.getState().verify(); // verify on app mount

export default useAuthStore;
