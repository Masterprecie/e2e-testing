import propTypes from "prop-types";
const ErrorMessage = ({ message = "Something went wrong" }) => {
  return <div data-testid="message-container">{message}</div>;
};

ErrorMessage.propTypes = {
  message: propTypes.string,
};
export default ErrorMessage;
