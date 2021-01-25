const update = (state = { update: 0 }, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, update: state.update + 1 };
      break;
    default:
      return state;
  }
};

export default update;
