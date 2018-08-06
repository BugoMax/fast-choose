
import { combineReducers } from 'redux';

import configurateHeaderReducer from '../../components/header/impl/reducer';
import configurateSideBarReducer from '../../components/side-bar/impl/reducer';
import configurateFooterReducer from '../../components/footer/impl/reducer';

export const configurateReducers = (store) => {

    return combineReducers({
        header: configurateHeaderReducer(store),
        sideBar: configurateSideBarReducer(store),
        footer: configurateFooterReducer(store)
    });
};

export default configurateReducers;