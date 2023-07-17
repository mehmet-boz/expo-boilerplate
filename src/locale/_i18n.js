import {I18n} from "i18n-js";
import {I18nManager} from 'react-native';
import tr from '../translations/tr.js';
import en from '../translations/en.js';
import * as Localization from "expo-localization";

const i18n = new I18n({en, tr});
const locales = Localization.getLocales()

i18n.locale = locales[0].languageTag;
export const isRtl = locales[0].textDirection === "rtl";

I18nManager.forceRTL(isRtl);

i18n.fallbacks = true;
i18n.defaultLocale = "en"
i18n.translations = {
    en,
    tr,
};
export default i18n
