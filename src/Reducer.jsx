const ToggleReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        darkMode: !state.darkMode
      };
      default:
        return state;
  }
};

export default ToggleReducer;
