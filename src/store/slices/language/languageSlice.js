import {createSlice} from '@reduxjs/toolkit';
import I18n from '../../../locale/_i18n'


export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: I18n.locale === 'tr-TR' ? 'tr' : 'en',
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const {setLanguage} = languageSlice.actions;

export default languageSlice.reducer;
