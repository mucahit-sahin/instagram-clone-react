import { messages } from "../../data/messages";

const initialState = messages;
function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      var arr = state;
      arr
        .find(
          (message) =>
            message.from === action.payload.from &&
            message.to === action.payload.to
        )
        .messages.push({
          message: action.payload.message,
          from: action.payload.from,
        });
      return arr;
    default:
      return state;
  }
}
export default messagesReducer;
