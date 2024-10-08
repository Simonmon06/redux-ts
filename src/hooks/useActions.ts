import { useDispatch } from "react-redux";
// it allows us to dispatch an action into all of our different reducers.

import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
  // gives us an object like {searchRepositories: dispatch(searchRepositories)}
};
