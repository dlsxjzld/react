import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  static getDerivedStateFromError(error) {
    //다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 한다.
    return { error: true };
  }
  componentDidCatch(error, info) {
    this.setState = {
      error: true,
    };
    console.log({ error, info });
  }
  render() {
    if (this.state.error) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있다.
      return <div>에러가 발생했습니다.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
