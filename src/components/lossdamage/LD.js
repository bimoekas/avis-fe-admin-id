import React from "react";
import { Link } from "react-router-dom";

export default class LD extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="border-top border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 py-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Products & Services</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Protections & Coverages</a>
                    </li>
                    <li
                      className="breadcrumb-item link-avis"
                      aria-current="page"
                    >
                      Loss Damage Waiver
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container pt-4">
            <div className="row">
              <div className="col-sm-12">
                <div className="hidden-xs text-avis text-black">
                  <h1 className="text-up text-black mb-2 fw-normal">
                    Loss Damage Waiver
                  </h1>
                  <p>
                    Loss Damage Waiver (“<b>LDW</b>”) is not insurance and not
                    mandatory. &nbsp;If you accept full LDW by your initials on
                    the rental document at the additional daily rate, for each
                    full or partial day that the car is rented to you &nbsp;and
                    the car is operated in accordance with the Agreement, we
                    assume responsibility for the loss of or damage to the car
                    except, if permitted by law, for lost, damaged or stolen
                    keys or remote entry devices, towing or tire services,
                    unless related to an accident, or recovery of the car if
                    stolen (except in the state of Alaska) and except for your
                    amount of "responsibility", if any, specified on the rental
                    document. Partial Loss Damage Waiver (“<b>PDW</b>”) is
                    available only where permitted by law. If you accept PDW at
                    the indicated daily rate, and the car is operated in
                    accordance with the Agreement, we assume all loss or damage
                    to the car up to the amount as specified on the rental
                    document and you accept responsibility for all other loss or
                    damage. If you do not accept either LDW or PDW, you owe for
                    all loss or damage to the car. Loss and damage are described
                    in the rental jacket. &nbsp;You acknowledge you have been
                    advised that your own insurance may cover loss or damage to
                    the car. You also acknowledge reading the notice on loss
                    damage shown on the rental document, or in these Terms and
                    Conditions, or in a separate notice form.
                  </p>
                  <p className="mt-2">
                    In Canada, if you accept LDW, there may nevertheless be a
                    non-waivable amount for which you will be responsible in the
                    event of loss or damage to the car, which amount will be
                    specified on the rental document at the time of rental.
                    &nbsp;Currently this amount is a maximum of CA $500.
                  </p>
                  <p className="mt-2">
                    <b>Notices About Loss Damage Waiver (LDW)&nbsp;</b>
                  </p>
                  <p className="mt-2">
                    The following section meets certain state requirements for
                    disclosure.
                  </p>
                  <p className="mt-2">
                    <b>Connecticut</b>: To determine the annualized charge for
                    Loss Damage Waiver (LDW or PDW), multiply the daily rate
                    found on page 1 of the rental document by 365 days. Loss
                    Damage Waiver covers loss or damage due to theft, collision,
                    vandalism, or any other cause. Whether or not you accept
                    Loss Damage Waiver, or if Loss Damage Waiver is not
                    permitted, you are responsible for the loss or damage to the
                    car that is caused by you or by an authorized additional
                    driver through intentional or willful and wanton misconduct;
                    driving while intoxicated or using drugs; participation in
                    any organized or racing competition; transporting persons or
                    property for hire; commission of a felony or an act that
                    could be a felony; failure to complete an accident or theft
                    report; use or operation by an unauthorized driver;
                    violation of the terms of the Agreement; operating off paved
                    roads, use to push or tow something; or obtaining car
                    through fraud or misrepresentation. You should examine your
                    personal auto insurance policy or credit card, including
                    deductible and limit of coverage, because it may cover loss
                    or damage and personal injury incurred while you are using
                    or operating a rental car. If your responsibility for any
                    loss or damage is covered by your own insurance, you will
                    authorize Avis to deal with the carrier. Avis will refund
                    any sum collected above the amount of the cost of
                    repair.&nbsp;
                  </p>
                  <p className="mt-2">
                    <b>
                      California, Iowa, Indiana, Louisiana, Hawaii,
                      Massachusetts, Minnesota, New York, Nevada, Rhode Island
                      and Texas, Consumer Protection:
                    </b>{" "}
                    Under the laws of these states, a personal automobile
                    insurance policy MUST cover the rental of this motor vehicle
                    against damage to the vehicle and against loss of use of the
                    vehicle. Therefore, purchase of any loss damage waiver or
                    insurance for the risk of possible loss or damage to the car
                    covered by the Agreement is NOT necessary if your policy was
                    issued in one of these states. &nbsp;You should check your
                    personal automobile insurance policy to review if the
                    purchase of LDW would be duplicative of coverage afforded
                    under your personal automobile insurance policy. &nbsp;
                  </p>
                  <p className="mt-2">
                    <b>Wisconsin</b>:
                  </p>
                  <p className="mt-2">
                    NOTICE ABOUT LIABILITY FOR DAMAGE TO THE RENTAL CAR
                  </p>
                  <p className="mt-2">
                    The State of Wisconsin requires us to provide the following
                    information about your liability for damage to a rental car
                    and the purchase of a damage waiver. &nbsp;On rentals in
                    Wisconsin, all provisions of the Agreement are applicable,
                    except to the extent of a conflict between the Wisconsin
                    specific terms and the other terms of the Agreement, in
                    which case the Wisconsin specific terms shall govern. &nbsp;
                  </p>
                  <p className="mt-2">NOTICE OF RIGHT TO INSPECT DAMAGE</p>
                  <p className="mt-2">
                    If the car is damaged, we may not collect any amount for the
                    damage unless you, or an authorized driver against whom we
                    claim liability, have been promptly notified of your and
                    your Insurers’ right to inspect the unrepaired car within
                    two working days after we were notified of the damage. If
                    you request, we must also give you a copy of any estimate we
                    have obtained from a repair shop regarding any damage claim.
                    Within 2 working days after receiving the estimates, you may
                    request a second estimate from a competing repair shop and
                    we must give you a copy of the second estimate.&nbsp;
                  </p>
                  <p className="mt-2">COMPLAINTS</p>
                  <p className="mt-2">
                    If you have any complaints about our attempt to hold you
                    liable for damage or would like a copy of the state law that
                    fully sets for your rights and obligations, contact:
                  </p>
                  <p className="mt-2">
                    Wisconsin Consumer Protection Bureau, P.O. Box 8911,
                    Madison, WI 53708-8911 &nbsp; &nbsp;608-224-4960 (Madison
                    area) or toll-free 1-800-422-7128
                  </p>
                  <p className="mt-2">
                    For the full brochure, please{" "}
                    <a href="#" className="link-avis" target="_blank">
                      click here
                    </a>
                    .
                  </p>
                  <p>&nbsp;</p>
                </div>
              </div>
              <div className="col-sm-12 mb-2">
                <button className="btn btn-avis text-up py-2">
                  Make a Reservation
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
