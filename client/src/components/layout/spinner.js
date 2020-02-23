// import React, { Fragment } from "react";
// import SpinnerI from "./spinner.gif";

// export default function Spinner() {
//   return (
//     <Fragment>
//       <img
//         src={SpinnerI}
//         style={{ width: "200px", margin: "auto", display: "block" }}
//         alt="Loading...."
//       />
//     </Fragment>
//   );
// }

import React from "react";
import "./spinner.css";

export default function spinner() {
  return (
    <div>
      <div className="spinner-box">
        <div className="configure-border-1">
          <div className="configure-core"></div>
        </div>
        <div className="configure-border-2">
          <div className="configure-core"></div>
        </div>
      </div>
    </div>
  );
}
