import React from "react";

export default class ContentThree extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myBorder = {
      borderBottom: "5px solid rgb(0, 40, 95)",
      width: "40%",
    };
    const bottomRight = {
      position: "absolute",
      bottom: "0%",
      right: "0%",
      maxWidth: "50%",
      backgroundColor: "#fff",
    };
    return (
      <>
        {/* Start Slogan One */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-sm-12">
                <h3 className="text-black">
                  BENEFITS FROM OUR TRAVEL PARTNERS
                </h3>
              </div>
            </div>
            {/* <div className='row mt-2'>
                            <div className='col-sm-4 mt-3'>
                                <div className='row'>
                                    <div className='col-sm-5'>
                                        <img className='img-fluid w-100' src={publicUrl+"assets/images/resources/img-7.webp"} />
                                    </div>
                                    <div className='col-sm-7'>
                                        <p style={{height:"100px",lineHeight:"1.3"}}>Get up to 30% off with pay now plus 10% back in an Amazon Gift Card*</p>
                                        <a href='#' className='link-avis'><b>LEARN MORE</b></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4 mt-3'>
                                <div className='row'>
                                    <div className='col-sm-5'>
                                        <img className='img-fluid w-100' src={publicUrl+"assets/images/resources/img-8.webp"} />
                                    </div>
                                    <div className='col-sm-7'>
                                        <p style={{height:"100px",lineHeight:"1.3"}}>Learn more about our exclusive offers and savings for AARP members</p>
                                        <a href='#' className='link-avis'><b>LEARN MORE</b></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4 mt-3'>
                                <div className='row'>
                                    <div className='col-sm-5'>
                                        <img className='img-fluid w-100' src={publicUrl+"assets/images/resources/img-9.webp"} />
                                    </div>
                                    <div className='col-sm-7'>
                                        <p style={{height:"100px",lineHeight:"1.3"}}>Save up to 25% with Veteran's Advantage</p>
                                        <a href='#' className='link-avis'><b>LEARN MORE</b></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            <div className="row mt-4 mb-2">
              <div className="col-sm-12" style={{ position: "relative" }}>
                <img
                  className="img-fluid w-100"
                  src={publicUrl + "assets/images/resources/img-10.webp"}
                  alt="img-10"
                />
                <div className="col-sm-12 p-4" style={bottomRight}>
                  <h2 className="text-black">
                    At Avis we bring great cars and destinations together, to
                    create better journeys.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Slogan One */}
      </>
    );
  }
}
