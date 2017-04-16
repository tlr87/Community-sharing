import { combineReducers } from 'redux'

import menuState from './menuState'
import dashboardState from './dashboardState'
import initialListings from './allListings'
import filteredListings from './filteredListings'
import singleItem from './singleItem'
import loggedInUserDetails from './loggedInUserDetails'
import loanedItems from './loanedItems'

export default combineReducers({
  menuState,
  dashboardState,
  initialListings,
  filteredListings,
  singleItem,
  loggedInUserDetails,
  loanedItems
})
