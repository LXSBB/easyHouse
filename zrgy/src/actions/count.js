export const increase = () => {
  return {
    type: "INCREASE",
  };
};

export const decrease = () => {
  return {
    type: "DECREASE",
  };
};

export const getListData = (payload) => {
  return {
    type: "GETlISTS",
    payload,
  };
};

export const showLoading = (payload) => {
  return {
    type: "SHOWLOADING",
    payload,
  };
};

export function fetchList() {
  return (dispatch) => {
    dispatch(showLoading(true));
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(getListData(data));
        dispatch(showLoading(false));
      });
  };
}
