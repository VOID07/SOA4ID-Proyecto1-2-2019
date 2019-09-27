import axios from 'axios'

export const fetchHomeData = () => async (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    dispatch({ type: 'CONTENT_LOADING' })
    dispatch((dispatch, getState) => {
      return Promise.all([dispatch(fetchFeed())])
    })
      .then(data => {
        dispatch({ type: 'CONTENT_LOADED' })
        dispatch({ type: 'FEED_LOADED' })

        resolve(true)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const fetchFeed = () => async (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('https://api.myjson.com/bins/q43hd')
      const { data } = response

      const feed = data.feed
      const users = data.users

      dispatch({
        type: 'FEED_FETCHED',
        payload: feed,
      })

      dispatch({
        type: 'USERS_FETCHED',
        payload: users,
      })

      resolve()
    } catch (error) {
      alert(error)
      reject(error)
    }
  })
}
