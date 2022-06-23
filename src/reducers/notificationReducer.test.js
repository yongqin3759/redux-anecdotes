import deepFreeze from "deep-freeze";
import notificationReducer from "./notificationReducer";

describe ('notificationReducer', ()=> {
  test('set notification', () => {
    const state = ''

    deepFreeze(state)

    const action = {
      type : 'notification/setNotification',
      payload: 'this is a notification'

    }
    const newState = notificationReducer(state, action)
    expect(newState).toEqual('this is a notification')
  })

  test('remove notification', () => {
    const state = 'hello'

    deepFreeze(state)

    const action = {
      type : 'notification/removeNotification',
    }
    const newState = notificationReducer(state, action)
    expect(newState).toEqual('')
  })
})