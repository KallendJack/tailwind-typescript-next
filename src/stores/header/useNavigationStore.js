import create from 'zustand'

export const useNavigationStore = create((set) => ({
    navOpen: false,
    toggle: () => set((state) => ({ navOpen: !state.navOpen })),
    close: () => set({ navOpen: false }),
}))
