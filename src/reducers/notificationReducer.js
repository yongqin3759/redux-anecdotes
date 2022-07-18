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

export const notify = (notification='Notification!', timeout = 2000) => {
  return async dispatch => {
    dispatch(setNotification(notification))
    const notificationTimeOut = () => setTimeout(()=> {
      dispatch(removeNotification())
    }, timeout)
    clearTimeout(notificationTimeOut())
    notificationTimeOut()
  }
}

export default notificationSlice.reducer