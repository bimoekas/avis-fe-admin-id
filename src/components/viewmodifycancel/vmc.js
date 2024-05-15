import React from "react";
import { Link } from "react-router-dom";

export default class vmc extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myStyle = {
      backgroundImage:
        "url(" + publicUrl + "assets/images/resources/reservation.avif)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    const myLink = {
      color: "rgb(237, 85, 5)",
    };
    return (
      <>
        {/* Start Slogan One */}
        <section style={myStyle}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center pt-5">
                <h2 style={{ color: "#000" }}>View / Modify / Cancel</h2>
              </div>
            </div>
            <div
              className="row mt-5 mb-5"
              style={{
                backgroundColor: "#fff",
                textAlign: "center",
              }}
            >
              <div className="col-sm-12 p-4 text-avis">
                <h4 style={{ color: "#000" }}>
                  If you want to cancel or have any questions regarding your
                  booking, please email us at <br />
                  <a href="mailto:sales@avis-id.com" className="email-link">
                    sales@avis-id.com
                  </a>
                </h4>
              </div>
            </div>
            <div className="row mt-5 pb-5"></div>
          </div>
        </section>
        {/* End Slogan One */}
      </>
    );
  }
}
