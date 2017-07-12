import PropTypes from 'prop-types';
import React, { Component } from "react";
import { View, ViewPropTypes } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class ViewNB extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

ViewNB.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.object
};

const StyledViewNB = connectStyle(
  "NativeBase.ViewNB",
  {},
  mapPropsToStyleNames
)(ViewNB);
export { StyledViewNB as ViewNB };
