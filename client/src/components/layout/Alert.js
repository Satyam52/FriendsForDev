import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { MDBNotification, MDBContainer } from "mdbreact";

const Alert = ({ alerts }) => (
  <MDBContainer
    style={{
      width: "auto",
      position: "fixed",
      top: 0,
      right: 0,
      zIndex: 9999
    }}
  >
    {alerts !== null &&
      alerts.length > 0 &&
      alerts.map(alert => (
        <MDBNotification
          key={alert.id}
          autohide={4000}
          className={`alert-${alert.alertType}`}
          closeClassName="elegant-color white-text"
          bodyClassName="font-weight-bold"
          fade
          icon="envelope"
          iconClassName="white-text"
          message={alert.msg}
          show
          title="ALERT"
          titleClassName="elegant-color-dark white-text"
        />
      ))}
  </MDBContainer>
);

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  alerts: state.alert
});
export default connect(mapStateToProps)(Alert);
