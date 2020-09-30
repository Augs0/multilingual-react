import en from './lang_en';
import es from './lang_es';
import ja from './lang_ja';

export const languages = { en, es, ja };
export const getMessages = (locale) => languages[locale];