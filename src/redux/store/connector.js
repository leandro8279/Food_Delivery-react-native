import { connect } from "react-redux";
import { setSelectedTab } from "../slices/tabs";

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedTab: (selectedTab) => dispatch(setSelectedTab(selectedTab)),
  };
};

const mapStateToProps = (state) => {
  return {
    selectedTab: state.tabs.selectedTab,
  };
};

export const connector = connect(mapStateToProps, mapDispatchToProps);
