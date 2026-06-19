import type { StateCreator } from 'zustand';
import type { AppStore, PreferencesState, PreferencesActions, Language, CurrencyDisplay, NotificationCategory } from '../types';
import { DEFAULT_PREFERENCES } from '../defaults';

export const preferencesSlice: StateCreator<AppStore, [], [], PreferencesState & PreferencesActions> = (set) => ({
  // Initial state
  ...DEFAULT_PREFERENCES,

  // Actions
  setLanguage: (language: Language) =>
    set(() => ({ language })),

  setCurrencyDisplay: (currency: CurrencyDisplay) =>
    set(() => ({ currencyDisplay: currency })),

  toggleNotifications: () =>
    set((state) => ({ notificationsEnabled: !state.notificationsEnabled })),

  toggleSound: () =>
    set((state) => ({ soundEnabled: !state.soundEnabled })),

  setCategoryEnabled: (category: NotificationCategory, enabled: boolean) =>
    set((state) => ({
      categoryPreferences: { ...state.categoryPreferences, [category]: enabled },
    })),

  resetPreferences: () =>
    set(() => DEFAULT_PREFERENCES),
});
