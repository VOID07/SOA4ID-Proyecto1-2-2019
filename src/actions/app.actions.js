import * as HomeActions from './home.actions'

export const initSettings = () => async (dispatch, getState) => {
  const feedLoaded = getState().app.feedLoaded

  // if (!feedLoaded) {
  dispatch(HomeActions.fetchHomeData()).then(data => {})
  // }
}
