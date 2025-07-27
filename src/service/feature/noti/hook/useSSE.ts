import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SSESender } from '@service/feature/chat/type/alert';

// interface Notification {
//   id: string;
//   message: string;
//   type?: 'success' | 'error' | 'info';
// }

interface Notification {
  id: string;
  sender: SSESender;
  eventName:
    | 'friendRequestNotification'
    | 'friendAcceptNotification'
    | 'mention';
}
interface NotificationState {
  queue: Notification[];
}

const initialState: NotificationState = {
  queue: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    pushNotification: (state, action: PayloadAction<Notification>) => {
      state.queue.push(action.payload);
    },
    shiftNotification: (state) => {
      state.queue.shift();
    },
  },
});

export const { pushNotification, shiftNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
