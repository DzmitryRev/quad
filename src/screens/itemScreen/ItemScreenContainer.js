import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setRequestStatus,
  SetOrderThunk,
  closeRequest,
} from "../../redux/mainReducer";
import { ItemScreen } from "./ItemScreen";

const ItemScreenConnect = ({
  route,
  requestStatus,
  setRequestStatus,
  SetOrderThunk,
  request,
  closeRequest,
}) => {
  useEffect(() => {
    setModalVisible(requestStatus);
    setRequest(request);
  }, [requestStatus]);

  const [modalVisible, setModalVisible] = useState(requestStatus);
  const [requestt, setRequest] = useState(request);

  return (
    <ItemScreen
      route={route}
      modalVisible={modalVisible}
      request={requestt}
      setRequestStatus={setRequestStatus}
      SetOrderThunk={SetOrderThunk}
      closeRequest={closeRequest}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    requestStatus: state.main.requestStatus,
    request: state.main.request,
  };
};

export const ItemScreenContainer = connect(mapStateToProps, {
  setRequestStatus,
  SetOrderThunk,
  SetOrderThunk,
  closeRequest,
})(ItemScreenConnect);
