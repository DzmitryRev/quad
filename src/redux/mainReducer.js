import { db } from "../utils/fbConfig";

const SORT_BY = "SORT_BY";
const SET_REQUEST = "SET_REQUEST";
const SET_ITEMS = "SET_ITEMS";
const CLOSE_REQUEST = "CLOSE_REQUEST";

const initialState = {
  items: [],
  selectedSort: "All",
  requestStatus: false,
  request: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case SORT_BY:
      return {
        ...state,
        selectedSort: action.payload,
      };
    case SET_REQUEST:
      return {
        ...state,
        requestStatus: true,
        request: action.payload,
      };
    case CLOSE_REQUEST:
      return {
        ...state,
        requestStatus: false,
        request: null,
      };
    default:
      return state;
  }
};

let setItems = (payload) => {
  return { type: SET_ITEMS, payload };
};

export let setSortBy = (payload) => {
  return { type: SORT_BY, payload };
};

export let setRequestStatus = (payload) => {
  return { type: SET_REQUEST, payload };
};

export let closeRequest = () => {
  return { type: CLOSE_REQUEST };
};

export let SetItemsThunk = () => {
  return (dispatch) => {
    db.collection("Items")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.forEach((doc) => {
          arr = [...arr, doc.data()];
        });
        dispatch(setItems(arr));
      })
      .catch((error) => {
        console.error("Error getiing document: ", error);
      });
  };
};

export let SetOrderThunk = (data) => {
  return (dispatch) => {
    db.collection("Orders")
      .add({
        ...data,
      })
      .then((docRef) => {
        dispatch(setRequestStatus(true));
      })
      .catch((error) => {
        dispatch(closeRequest());
        console.log("error");
      });
  };
};

export default mainReducer;
