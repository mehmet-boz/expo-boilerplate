import {useSelector} from 'react-redux';
import i18n from "./_i18n";


const getTranslation = name => {
    const {language} = useSelector(state => state.language);
    return i18n.t(name, {locale: language});
};

export {getTranslation};
