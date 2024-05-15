import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const ModalSubscribe = () => {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const handleClose = () => setShow(false);

  function handleSubmit() {
    if (email) {
      document.cookie = `subscribe=true;path=/`;
      handleClose();
    }
    setEmail("");
  }

  function handleReject() {
    const expires = new Date();
    expires.setTime(expires.getTime() + 21600 * 1000);
    document.cookie = `subscribe=true;expires=${expires.toUTCString()};path=/`;
    handleClose();
  }
  return (
    <>
      <div className="search-popup">
        <Modal
          show={show}
          onHide={handleClose}
          className="search-popup__overlay search-toggler"
        >
          <div className="search-popup__content">
            <div>
              <div className="container p-5">
                <div className="row">
                  <div className="col-xl-9">
                    <h5 style={{ color: "#000" }}>
                      Do you want to get 10% off on your booking? <br />{" "}
                      Subscribe to our newsletter here!
                    </h5>
                  </div>
                  <div className="col-xl-3 text-end">
                    <button
                      className="main-menu__search search-toggler"
                      onClick={handleReject}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-xl-12">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row pt-3">
                  <button
                    className="ml-2 mr-2 col-xl-12 btn btn-avis"
                    onClick={handleSubmit}
                  >
                    SUBSCRIBE
                  </button>
                </div>
                <div className="row pt-3">
                  <button
                    className="ml-2 mr-2 col-xl-12 btn btn-avis"
                    onClick={handleReject}
                  >
                    No, I don't want to get discount
                  </button>
                </div>
                <div className="row border-bottom py-2"></div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ModalSubscribe;
