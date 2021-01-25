import React, { Component } from "react";
import { connect } from "react-redux";
import { increase, decrease, fetchList } from "../actions";

class Count extends Component {
  render() {
    const {
      count,
      count1,
      update,
      list,
      loading,
      increase,
      decrease,
      fetchList,
    } = this.props;
    return (
      <div>
        count:{count} <br />
        count1:{count1} <br />
        update:{update}
        <br />
        {loading ? (
          <div>数据请求中...</div>
        ) : (
          <div>list:{JSON.stringify(list)}</div>
        )}
        <button onClick={increase}>递增</button>
        <button onClick={decrease}>递减</button>
        <button onClick={fetchList}>获取数据</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
    count1: state.count.count1,
    list: state.count.list,
    loading: state.count.loading,
    update: state.update.update,
  };
};

const mapDispatchToProps = { increase, decrease, fetchList };

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count);

export default CountContainer;
