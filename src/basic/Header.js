import PropTypes from 'prop-types';
import React, { Component } from "react";
import { View, StatusBar, ViewPropTypes } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";
import variable from "../theme/variables/platform";
import _ from "lodash";

class Header extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  render() {
    const variables = this.context.theme
      ? this.context.theme["@@shoutem.theme/themeStyle"].variables
      : variable;
    const platformStyle = variables.platformStyle;

    return (
      <View>
        <StatusBar
          backgroundColor={
            this.props.androidStatusBarColor
              ? this.props.androidStatusBarColor
              : variables.statusBarColor
          }
          barStyle={
            this.props.iosBarStyle
              ? this.props.iosBarStyle
              : platformStyle === "material"
                ? "light-content"
                : variables.iosStatusbar
          }
        />
        <View ref={c => (this._root = c)} {...this.props} />
      </View>
    );
  }
}

Header.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.object,
  searchBar: PropTypes.bool,
  rounded: PropTypes.bool
};

const StyledHeader = connectStyle(
  "NativeBase.Header",
  {},
  mapPropsToStyleNames
)(Header);
export { StyledHeader as Header };
