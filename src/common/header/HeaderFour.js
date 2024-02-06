import React, { useState } from "react";
import CardPrivacy from "../../components/privacy/CardPrivacy";

const HeaderFour = (props) => {
  const [openExpand, setOpenExpand] = useState(false);

  const clickExpand = () => setOpenExpand(!openExpand);
  const clickLink = (e) => {
    e.preventDefault();
    setOpenExpand(!openExpand);
  };

  return (
    <>
      <div id="privacy" className="d-xl-block d-none">
        {props.expand ? (
          <div
            style={{
              position: "fixed",
              top: "60px",
              left: "0",
              right: "0",
              zIndex: "99",
            }}
          >
            <div
              className="text-white"
              style={{
                background: "rgb(212, 0, 42)",
              }}
            >
              <div
                className="container d-flex justify-content-between align-items-center py-2"
                onClick={clickExpand}
                style={{ cursor: "pointer" }}
              >
                <p>Want to know something specific?</p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/icon/down-arrow.png`}
                  width={25}
                  height={25}
                  className="expand-privacy"
                />
              </div>
            </div>
            {openExpand ? (
              <div className="container">
                <div
                  className="row py-3"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.15)",
                    minWidth: "160px",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderRadius: "4px",
                    boxShadow: "rgba(0, 0, 0, 0.176) 0px 6px 12px",
                  }}
                >
                  <CardPrivacy
                    image="types_information.png"
                    text="THE TYPES OF INFORMATION WE COLLECT, AND HOW WE COLLECT THEM"
                    direct="types_information"
                  />
                  <CardPrivacy
                    image="how_used_information.png"
                    text="HOW INFORMATION IS USED"
                    direct="how_used_information"
                  />
                  <CardPrivacy
                    image="how_shared_information.png"
                    text="HOW INFORMATION IS SHARED"
                    direct="how_shared_information"
                  />
                  <CardPrivacy
                    image="how_protected_information.png"
                    text="HOW INFORMATION IS PROTECTED"
                    direct="how_protected_information"
                  />
                  <CardPrivacy
                    image="children_privacy.png"
                    text="CHILDREN'S PRIVACY"
                    direct="children_privacy"
                  />
                  <CardPrivacy
                    image="third_party_collection.png"
                    text="THIRD PARTY COLLECTION"
                    direct="third_party_collection"
                  />
                  <CardPrivacy
                    image="contact_us.png"
                    text="CONTACT US"
                    direct="contact_us"
                  />
                  <CardPrivacy
                    image="independent_locations.png"
                    text="INDEPENDENT LOCATIONS"
                    direct="independent_locations"
                  />
                  <CardPrivacy
                    image="state_privacy.png"
                    text="U.S. STATE PRIVACY DISCLOSURES"
                    direct="state_privacy"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <div id="privacy-mobile" className="d-xl-none d-block">
        <div
          style={{
            position: "fixed",
            top: `${openExpand ? "80px" : ""}`,
            bottom: `${openExpand ? "" : "0"}`,
            left: "0",
            right: "0",
            zIndex: "99",
          }}
        >
          <div className="bg-blue text-white">
            <div
              className="container d-flex justify-content-between align-items-center py-2"
              onClick={clickExpand}
              style={{ cursor: "pointer" }}
            >
              <p>Want to know something specific?</p>
              {openExpand ? (
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/icon/close.png`}
                  width={15}
                  height={15}
                />
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/icon/down-arrow.png`}
                  width={25}
                  height={25}
                  className="expand-privacy"
                  style={{ transform: "rotate(180deg)" }}
                />
              )}
            </div>
          </div>
          {openExpand ? (
            <div className="container bg-white">
              <div
                className="row py-4"
                style={{ overflow: "scroll", height: "100vh" }}
              >
                <CardPrivacy
                  image="types_information.png"
                  text="THE TYPES OF INFORMATION WE COLLECT, AND HOW WE COLLECT THEM"
                  direct="types_information"
                  setOpenExpand={setOpenExpand}
                />
                <CardPrivacy
                  image="how_used_information.png"
                  text="HOW INFORMATION IS USED"
                  direct="how_used_information"
                  setOpenExpand={setOpenExpand}
                />
                <CardPrivacy
                  image="how_shared_information.png"
                  text="HOW INFORMATION IS SHARED"
                  direct="how_shared_information"
                  setOpenExpand={setOpenExpand}
                />
                <CardPrivacy
                  image="how_protected_information.png"
                  text="HOW INFORMATION IS PROTECTED"
                  direct="how_protected_information"
                  setOpenExpand={setOpenExpand}
                />
                <CardPrivacy
                  image="children_privacy.png"
                  text="CHILDREN'S PRIVACY"
                  direct="children_privacy"
                  setOpenExpand={setOpenExpand}
                />
                <CardPrivacy
                  image="third_party_collection.png"
                  text="THIRD PARTY COLLECTION"
                  direct="third_party_collection"
                  setOpenExpand={setOpenExpand}
                />
                <CardPrivacy
                  image="contact_us.png"
                  text="CONTACT US"
                  direct="contact_us"
                  setOpenExpand={setOpenExpand}
                />
                <CardPrivacy
                  image="independent_locations.png"
                  text="INDEPENDENT LOCATIONS"
                  direct="independent_locations"
                  setOpenExpand={setOpenExpand}
                />
                <CardPrivacy
                  image="state_privacy.png"
                  text="U.S. STATE PRIVACY DISCLOSURES"
                  direct="state_privacy"
                  setOpenExpand={setOpenExpand}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderFour;
