import en from './lang_en';
import es from './lang_es';
import jp from './lang_jp';

export const languages = { en, es, jp };
export const getMessages = (locale) => languages[locale];