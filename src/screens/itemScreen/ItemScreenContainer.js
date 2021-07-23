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
  requestMessage,
  closeRequest,
}) => {
  useEffect(() => {
    setModalVisible(requestStatus);
    setRequest(requestMessage);
  }, [requestStatus]);

  const [modalVisible, setModalVisible] = useState(requestStatus);
  const [request, setRequest] = useState(requestMessage);

  return (
    <ItemScreen
      route={route}
      modalVisible={modalVisible}
      request={request}
      setRequestStatus={setRequestStatus}
      SetOrderThunk={SetOrderThunk}
      closeRequest={closeRequest}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    requestStatus: state.main.requestStatus,
    requestMessage: state.main.requestMessage,
  };
};

export const ItemScreenContainer = connect(mapStateToProps, {
  setRequestStatus,
  SetOrderThunk,
  SetOrderThunk,
  closeRequest,
})(ItemScreenConnect);
