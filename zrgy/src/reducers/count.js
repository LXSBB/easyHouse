const count = (
  state = { count: 0, count1: 0, list: [], loading: false },
  action
) => {
  switch (action.type) {
    case "INCREASE":
      // 错误方式
      //   return {
      //     count: state.count + 1,
      //   };

      // Object.assign对象合并
      //   return Object.assign({}, state, { count: state.count + 1 });

      return { ...state, count: state.count + 1 };

      break;
    case "DECREASE":
      // 错误方式
      //   return {
      //     count1: state.count1 - 1,
      //   };

      // Object.assign对象合并
      //   return Object.assign({}, state, { count1: state.count1 - 1 });

      return { ...state, count1: state.count1 - 1 };

      break;

    case "GETlISTS":
      return { ...state, list: action.payload };
      break;
    case "SHOWLOADING":
      return { ...state, loading: action.payload };
      break;
    default:
      return state;
  }
};

export default count;
