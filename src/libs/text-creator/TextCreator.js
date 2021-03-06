
import Language from '../languages/Language.js';

import createCommonText from './creators/createCommonText.js';
import createHeaderText from './creators/createHeaderText.js';
import createFooterText from './creators/createFooterText.js';
import createSideBarText from './creators/createSideBarText.js';

class TextCreator {

    constructor(language) {
        new Language(language);
    }

    static createHomeAppText() {

        return {
            common: createCommonText()
        };
    }

    static createHeaderText() {
        return createHeaderText();
    }

    static createFooterText() {
        return createFooterText();
    }

    static createSideBarText() {
        return createSideBarText();
    }
}

export default TextCreator;
