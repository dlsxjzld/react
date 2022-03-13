import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

// 리듀서를 여러개 만들었따.
// createStore 함수를 사용하여
// 스토어를 만들 때는 리듀서를 하나만 사용해야 한다.
// 기존에 만들었던 리듀서를
// 리덕스에서 제공하는 combineReducers 유틸 함수로 하나로 합쳐 준다.
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
