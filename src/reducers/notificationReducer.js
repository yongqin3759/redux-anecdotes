import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action){
      return action.payload
    },
    removeNotification(state, action){
      return ''
    }
  }
})

export const {setNotification, removeNotification} = notificationSlice.actions

let timerId
export const notify = (notification='Notification!', timeout = 2000) => {
  return async dispatch => {
    clearTimeout(timerId)
    dispatch(setNotification(notification))
    timerId = setTimeout(()=> {
      dispatch(removeNotification())
    }, timeout)
  }
}

export default notificationSlice.reducer