import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import Modal from "../../components/UI/Modal";
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    UNSAFE_componentWillMount() {
      this.reqIntercepetor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (req) => req,
        (error) => {
          this.setState({ error: error });
        }
      );
    }
    UNSAFE_componentWillUnmount() {
      axios.interceptors.eject(this.reqIntercepetor);
      axios.interceptors.eject(this.resIntercepetor);
    }
    errorConfirmationHandler = () => {
      this.setState({ error: false });
    };
    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            cancelPurchase={this.errorConfirmationHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};
export default withErrorHandler;
