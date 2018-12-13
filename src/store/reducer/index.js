import { combineReducers } from 'redux'

import TabPanesReducer from './tabs-reducer';
import SecondNavReducer from './second-nav-reducer';
import BuildingReducer from './building-reducer';

const appReducer = combineReducers({
    tabPanesReducer: TabPanesReducer,
    secondNavReducer: SecondNavReducer,
    buildingReducer: BuildingReducer
});
export default appReducer;