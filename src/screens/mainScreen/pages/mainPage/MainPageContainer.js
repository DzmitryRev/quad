import React, { useEffect } from "react";
import { connect } from "react-redux";

import { SetSort } from "../../../../utils/sorting";
import { MainPage } from "./MainPage";
import {
  setSortBy,
  setRequestStatus,
  SetItemsThunk,
} from "../../../../redux/mainReducer";

const MainPageConnect = ({
  navigation,
  items,
  selectedSort,
  setSortBy,
  SetItemsThunk,
}) => {
  const buttons = ["All", "Cheap", "Best", "Fast"];

  useEffect(() => {
    SetItemsThunk();
  }, []);

  return (
    <MainPage
      navigation={navigation}
      items={items}
      selectedSort={selectedSort}
      setSortBy={setSortBy}
      buttons={buttons}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    items: SetSort(state.main.selectedSort, state.main.items),
    selectedSort: state.main.selectedSort,
  };
};

export const MainPageContainer = connect(mapStateToProps, {
  setSortBy,
  setRequestStatus,
  SetItemsThunk,
})(MainPageConnect);
