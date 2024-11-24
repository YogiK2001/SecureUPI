import { atom } from 'recoil';

export const resultState = atom({
    key: 'resultState',
    default: {
        result: '',
        fraudConfidence: '',
        recommendation: '',
    },
});