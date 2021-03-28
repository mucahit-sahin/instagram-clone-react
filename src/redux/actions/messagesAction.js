export const addMessageAction = (message, from, to) => ({
  type: "ADD_MESSAGE",
  payload: { message, from, to },
});
