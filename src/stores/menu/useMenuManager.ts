import { Dispatch, SetStateAction } from 'react';

import { usePersistedState } from '@/stores/persistedState/usePersistedState';

interface IUseMenuManager {
    stateMenuManager: boolean;
    setStateMenuManager: Dispatch<SetStateAction<boolean>>;
    toggleMenuManager: () => void;
}

export function useMenuManager(): IUseMenuManager {
    const [stateMenuManager, setStateMenuManager] = usePersistedState<boolean>('menu-manager', true);

    const toggleMenuManager = (): void => {
        setStateMenuManager((state) => !state);
    };

    return { stateMenuManager, setStateMenuManager, toggleMenuManager };
}
