import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  render() {
    const { count } = this.props;
    return <div>About Count:{count}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
  };
};

const AboutContainer = connect(mapStateToProps)(About);

export default AboutContainer;
