import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import { bindActionCreators } from "redux";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    ></Counter>
  );
};

/*
const mapStateToProps = (state) => ({
  number: state.counter.number,
});
const mapDispatchToProps = (dispatch) => ({
  //임시 함수
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  /*
  {increase,decrease,}
   */
  //////// or
  (dispatch) =>
    /* ({
      increase: () => dispatch(increase()),
      decrease: () => dispatch(decrease()),
    })
    */
    ////////// or
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch
    )
)(CounterContainer);
