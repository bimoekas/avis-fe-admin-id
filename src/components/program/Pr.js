import React from "react";
import { Link } from "react-router-dom";

export default class PS extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myLink = {
      color: "rgb(237, 85, 5)",
    };
    const myPara = {
      lineHeight: "1.5",
      fontSize: "15px",
      color: "#000",
    };
    const myHead = {
      fontSize: "18px",
    };
    const myCard = {
      backgroundColor: "#fff",
    };
    const myParas = {
      lineHeight: "1.5",
      height: "150px",
      fontSize: "15px",
      color: "#000",
    };
    return (
      <>
        <section className="border-top border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 pt-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Cars & Services</a>
                    </li>
                    <li
                      className="breadcrumb-item link-avis"
                      aria-current="page"
                    >
                      Programs
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row mb-4">
              <div className="col-sm-12 text-black">
                <h1 className="text-up text-black my-5">Programs</h1>
                <p className="mb-2 text-avis">
                  Earn miles or points and enjoy special discounts through our
                  partnerships. Avis offers a variety of partnerships with
                  airlines, hotels and other select companies.
                </p>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-sm-12">
                <h1 className="link-avis mb-1">Qatar Airways</h1>
                <p className="mb-2 text-avis">
                  Burgundy member can get 2 base Avios per USD spent. Silver
                  member can get 2 base Avios and 1 bonus Avios per USD spent.
                  Gold member can get 2 base Avios and 2 bonus Avios per USD
                  spent. Platinum member can get 2 base Avios and 3 bonus Avios
                  per USD spent.
                </p>
                <p className="mb-2 text-avis">
                  Quote your membership number during reservation and present
                  your membership card at counter upon car pick-up to earn
                  miles.
                </p>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-sm-12">
                <h1 className="link-avis mb-1">Singapore Airlines</h1>
                <p className="mb-2 text-avis">
                  All tier levels member can get 500 miles per qualifying rental
                  based on retail leisure rates. Quote your membership number
                  during reservation and present your membership card at counter
                  upon car pick up to earn miles.
                </p>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-sm-12">
                <h1 className="link-avis mb-1">Turkish Airlines</h1>
                <p className="mb-2 text-avis">
                  Classic, Elite and Garanti Shop & Miles Card member can get
                  500 miles per qualifying rental.
                </p>
                <p className="mb-2 text-avis">
                  Quote your membership number during reservation and present
                  your membership card at counter upon car pick-up to earn
                  miles.
                </p>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-sm-12">
                <h1 className="link-avis mb-1">Master Card</h1>
                <p className="mb-2 text-avis">
                  World Elite member can get Up to 35% discount worldwide.
                  World, Platinum, Gold member can get up to 20% discount
                  worldwide. Business & Sberbank 1 member can get up to 20%
                  discount worldwide.
                </p>
                <p className="mb-2 text-avis">
                  Quote your membership number during reservation and present
                  your membership card at counter upon car pick up to earn
                  miles.
                </p>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-sm-12">
                <h1 className="link-avis mb-1">Visa</h1>
                <p className="mb-2 text-avis">
                  Infinite, Infinite Privilege & Signature member can get up to
                  35% discount Avis President’s Club loyalty benefits. Platinum
                  member can get up to 20% discount Avis Preferred Plus loyalty
                  benefits. Platinum Business (Russian card members only) member
                  can get up to 20% discount Avis Preferred non loyalty. Gold &
                  Rewards member can get up to 20% discount Avis Preferred Plus.
                  Business member can get up to 20% discount.
                </p>
                <p className="mb-2 text-avis">
                  Quote your membership number during reservation and present
                  your membership card at counter upon car pick up to earn
                  miles.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
