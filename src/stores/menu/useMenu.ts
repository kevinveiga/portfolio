import { Dispatch, SetStateAction } from 'react';

import { usePersistedState } from '@/stores/persistedState/usePersistedState';

interface IUseMenu {
    stateMenu: boolean;
    setStateMenu: Dispatch<SetStateAction<boolean>>;
    toggleMenu: () => void;
}

export function useMenu(): IUseMenu {
    const [stateMenu, setStateMenu] = usePersistedState<boolean>('menu', true);

    const toggleMenu = (): void => {
        setStateMenu((state) => !state);
    };

    return { stateMenu, setStateMenu, toggleMenu };
}
