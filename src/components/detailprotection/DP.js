import React from "react";

export default class DP extends React.Component {
  render() {
    return (
      <>
        <section className="border-top border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb text-avis py-3">
                    <li className="breadcrumb-item">Cars & Services</li>
                    <li className="breadcrumb-item">Protection & Coverages</li>
                    <li className="breadcrumb-item">USA & Canada</li>
                    <li
                      className="breadcrumb-item link-avis"
                      aria-current="page"
                    >
                      {this.props.data}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container py-5">
            <div className="row">
              {this.props.data === "Extended Roadside Assistance" ? (
                <div className="col-sm-12">
                  <h1 className="link-avis text-up fw-normal mb-5">
                    {this.props.data}
                  </h1>
                  <p className="text-avis mt-2">
                    <b>
                      Plan ahead for peace of mind. With Extended Roadside
                      Assistance you can travel with peace of mind. We
                      understand things can go wrong – it is the real world –
                      and we take care of you to provide you with roadside
                      services, including:
                    </b>
                  </p>
                  <ul className="text-avis mt-2">
                    <li>
                      • <b>Lockout Service</b> - Gain entry when keys are locked
                      inside the vehicle. Get replacement keys or locksmith
                      assistance.
                    </li>
                    <li>
                      • <b>Flat Tire Assistance & Replacement</b> - We'll
                      replace a flat or damaged tire with the spare, or get the
                      car towed to the nearest service facility.
                    </li>
                    <li>
                      • <b>Jump Start</b> - If your vehicle experiences battery
                      failure, we'll provide a jump start.
                    </li>
                    <li>
                      • <b>Fuel Delivery</b> - if you run out of gas/fuel, we’ll
                      deliver 3 gallons (in US/CA) or up to $10 fuel delivery
                      (in AU/NZ) to your location.
                    </li>
                  </ul>
                  <p className="text-avis mt-2">
                    <b>
                      For the ultimate safe driving experience, request for
                      Extended Roadside Assistance when you pick up your car at
                      our station.
                    </b>
                  </p>
                  <p className="text-avis mt-2">
                    In the unlikely event of operational difficulty or
                    unexpected emergency, you want reliable service fast -
                    especially helpful when you're in an unfamiliar city. With
                    Extended Roadside Assistance, you will get fast, reliable
                    emergency road hazard assistance.
                  </p>
                  <p className="text-avis mt-2">
                    To access Extended Roadside Assistance 24/7,
                  </p>
                  <ul className="text-avis mt-2">
                    <li>• In US/Canada call 800-354-2847</li>
                    <li>• In Australia call 1800 063 973</li>
                    <li>• In New Zealand call 0800 652 847</li>
                  </ul>
                  <p className="text-avis mt-2">
                    Extended Roadside Assistance can be purchased at counter
                    upon car pick-up.
                  </p>
                </div>
              ) : this.props.data === "Loss Damage Waiver (LDW)" ? (
                <div className="col-sm-12">
                  <h1 className="link-avis text-up fw-normal mb-5">
                    {this.props.data}
                  </h1>
                  <p className="text-avis mt-2">
                    Loss Damage Waiver (“<b>LDW</b>”) is not insurance and not
                    mandatory. If you accept full LDW by your initials on the
                    rental document at the additional daily rate, for each full
                    or partial day that the car is rented to you and the car is
                    operated in accordance with the Agreement, we assume
                    responsibility for the loss of or damage to the car except,
                    if permitted by law, for lost, damaged or stolen keys or
                    remote entry devices, towing or tire services, unless
                    related to an accident, or recovery of the car if stolen
                    (except in the state of Alaska) and except for your amount
                    of "responsibility", if any, specified on the rental
                    document. Partial Loss Damage Waiver (“<b>PDW</b>”) is
                    available only where permitted by law. If you accept PDW at
                    the indicated daily rate, and the car is operated in
                    accordance with the Agreement, we assume all loss or damage
                    to the car up to the amount as specified on the rental
                    document and you accept responsibility for all other loss or
                    damage. If you do not accept either LDW or PDW, you owe for
                    all loss or damage to the car. Loss and damage are described
                    in the rental jacket. You acknowledge you have been advised
                    that your own insurance may cover loss or damage to the car.
                    You also acknowledge reading the notice on loss damage shown
                    on the rental document, or in these Terms and Conditions, or
                    in a separate notice form.
                  </p>
                  <p className="text-avis mt-2">
                    In Canada, if you accept LDW, there may nevertheless be a
                    non-waivable amount for which you will be responsible in the
                    event of loss or damage to the car, which amount will be
                    specified on the rental document at the time of rental.
                    Currently this amount is a maximum of CA $500.
                  </p>
                  <p className="text-avis mt-2">
                    <b>Notices About Loss Damage Waiver (LDW) </b>
                  </p>
                  <p className="text-avis mt-2">
                    The following section meets certain state requirements for
                    disclosure.
                  </p>
                  <p className="text-avis mt-2">
                    <b>Connecticut:</b> To determine the annualized charge for
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
                    any sum collected above the amount of the cost of repair.{" "}
                  </p>
                  <p className="text-avis mt-2">
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
                    issued in one of these states. You should check your
                    personal automobile insurance policy to review if the
                    purchase of LDW would be duplicative of coverage afforded
                    under your personal automobile insurance policy.{" "}
                  </p>
                  <p className="text-avis mt-2">
                    <b>Wisconsin:</b>
                  </p>
                  <p className="text-avis mt-2">
                    NOTICE ABOUT LIABILITY FOR DAMAGE TO THE RENTAL CAR
                  </p>
                  <p className="text-avis mt-2">
                    The State of Wisconsin requires us to provide the following
                    information about your liability for damage to a rental car
                    and the purchase of a damage waiver. On rentals in
                    Wisconsin, all provisions of the Agreement are applicable,
                    except to the extent of a conflict between the Wisconsin
                    specific terms and the other terms of the Agreement, in
                    which case the Wisconsin specific terms shall govern.
                  </p>
                  <p className="text-avis mt-2">
                    NOTICE OF RIGHT TO INSPECT DAMAGE
                  </p>
                  <p className="text-avis mt-2">
                    If the car is damaged, we may not collect any amount for the
                    damage unless you, or an authorized driver against whom we
                    claim liability, have been promptly notified of your and
                    your Insurers’ right to inspect the unrepaired car within
                    two working days after we were notified of the damage. If
                    you request, we must also give you a copy of any estimate we
                    have obtained from a repair shop regarding any damage claim.
                    Within 2 working days after receiving the estimates, you may
                    request a second estimate from a competing repair shop and
                    we must give you a copy of the second estimate.{" "}
                  </p>
                  <p className="text-avis mt-2">COMPLAINTS</p>
                  <p className="text-avis mt-2">
                    If you have any complaints about our attempt to hold you
                    liable for damage or would like a copy of the state law that
                    fully sets for your rights and obligations, contact:
                  </p>
                  <p className="text-avis mt-2">
                    Wisconsin Consumer Protection Bureau, P.O. Box 8911,
                    Madison, WI 53708-8911 608-224-4960 (Madison area) or
                    toll-free 1-800-422-7128
                  </p>
                </div>
              ) : this.props.data === "Additional Liability Insurance (ALI)" ? (
                <div className="col-sm-12">
                  <h1 className="link-avis text-up fw-normal mb-5">
                    {this.props.data}
                  </h1>
                  <p className="text-avis mt-2">
                    If you elect to purchase ALI, coverage will be provided to
                    you and any authorized driver under an excess automobile
                    policy issued to Avis. ALI provides protection for third
                    party automobile claims for the difference between the
                    minimum financial responsibility limits provided under
                    paragraph 22 above and a maximum combined single limit of
                    liability of $1,000,000 or $2,000,000 depending on the
                    jurisdiction of rental for bodily injury, death or property
                    damage for each accident. This coverage is provided under a
                    policy of excess liability insurance more fully described in
                    the available brochure and is subject to all of the
                    conditions and limitations described in paragraph 22 above,
                    except that notwithstanding anything contained in the
                    Agreement, the terms of the policy will at all times
                    control. ALI does not apply to liability for bodily injury
                    or property damage arising out of any "prohibited use of the
                    car" as described in paragraph 15 of the Agreement, all of
                    which are exclusions to ALI. Other exclusions to ALI are
                    listed in the ALI policy. You understand that you will be
                    charged the rate per day for a full day even if you don’t
                    have the car for the entire day. Disclosures Regarding
                    Additional Liability Insurance in the State of Florida.
                  </p>
                  <p className="text-avis mt-2">
                    <b>What is Additional Liability Insurance (ALI)?</b>
                  </p>
                  <p className="text-avis mt-2">
                    <b>Avis</b> has Additional Liability Insurance (ALI)
                    available at all Florida locations. ALI is a special
                    optional service offered by Avis when you rent a car from
                    Avis. It’s an "Excess Automobile Liability Insurance Policy"
                    that provides additional liability insurance, within
                    specified limits, above the limits provided in the
                    Agreement. ALI insures you, and authorized operators as
                    defined in the Agreement against claims made by third
                    parties against you, the customer, for bodily injury/death
                    and property damage caused by the use or operation of a Avis
                    rental car as permitted in the Agreement. ALI is a separate
                    insurance policy issued to Avis by ACE American Insurance
                    Company.
                  </p>
                  <p className="text-avis mt-2">
                    If you elect to accept ALI, you will pay an additional daily
                    charge as shown on the Agreement.{" "}
                    <b>
                      The purchase of ALI is not required in order to rent a car
                      from Avis.
                    </b>{" "}
                  </p>
                  <p className="text-avis mt-2">
                    <b>What are the coverage limits provided by ALI?</b>
                  </p>
                  <p className="text-avis mt-2">
                    The ALI coverage limits equal the difference between the ALI
                    maximum $1,000,000 combined single limit (or $2,000,000
                    combined single limit in the following jurisdictions:
                    California, Florida, Hawaii and New York) and the liability
                    protection limits provided under the Avis rental agreement.{" "}
                    <b>
                      Note, in all states we only offer $1,000,000 combined
                      single limit on 10,12, and 15 passenger vans.
                    </b>
                  </p>
                  <p className="text-avis mt-2">
                    <b>When and where does ALI coverage apply?</b>
                  </p>
                  <p className="text-avis mt-2">
                    You and authorized operators are covered while driving the
                    rental car within the United States and Canada, but only if
                    the car is rented and returned in the United States.
                    Coverage does not apply in Mexico.
                  </p>
                  <p className="text-avis mt-2">
                    <b>How do I report a claim?</b>
                  </p>
                  <p className="text-avis mt-2">
                    If you are involved in an accident, you must complete an
                    accident report and deliver it to the Avis rental location.
                    In order to make a claim or give notice of a claim, send
                    written notice to:
                  </p>
                  <p className="text-avis mt-2">Avis Rent A Car System, Inc.</p>
                  <p className="text-avis mt-2">Attn: Claims</p>
                  <p className="text-avis mt-2">P.O. Box 61247</p>
                  <p className="text-avis mt-2">Virginia Beach, VA 23466</p>
                  <p className="text-avis mt-2">1-866-446-8376</p>

                  <p className="text-avis mt-2">
                    <b>
                      How does ALI affect the application of your automobile or
                      umbrella insurance policy?
                    </b>
                  </p>
                  <p className="text-avis mt-2">
                    Your personal insurance policy providing coverage on an
                    owned automobile, or other personal policy, may provide
                    additional coverage, and to that extent, ALI may provide a
                    duplication of coverage. Whether, at what point and to what
                    extent your own policies apply can only be determined by
                    checking the terms of the policies themselves as these terms
                    frequently vary. However, the protection afforded by ALI (if
                    ALI is accepted), like the Avis rental agreement limits of
                    protection, is primary to your own policies. This means that
                    before your own policies would apply to pay a claim, the
                    $1,000,000 protection (or $2,000,000 protection in the
                    following jurisdictions: California, Florida, Hawaii and New
                    York) afforded by the combination ALI and the Avis rental
                    agreement limits would have to be exhausted.{" "}
                    <b>
                      Note, in all states we only offer $1,000,000 combined
                      single limit on 10,12, and 15 passenger vans.
                    </b>
                  </p>
                  <p className="text-avis mt-2">
                    <b>What exclusions apply to ALI?</b>
                  </p>
                  <p className="text-avis mt-2">
                    The following highlights some of the exclusions that would
                    preclude ALI. It is important that you read the rental
                    document and the policy carefully for all exclusions.
                  </p>
                  <ul className="text-avis mt-2">
                    <li>
                      • Any Prohibited Use of the Car as described in paragraph
                      15 of the Agreement
                    </li>
                    <li>
                      • Bodily injury to or Property Damage to any Insured; nor,
                      to the extent permitted by law in the state where the
                      rental document is signed at time of rental/where the car
                      is rented, to Bodily Injury or Property Damage to any
                      person who is related to any Insured by blood, marriage or
                      adoption and residing in the same household.{" "}
                    </li>
                    <li>
                      • "Uninsured Motorist"/"Underinsured Motorist" coverage
                      are not provided by the policy except in states where
                      mandated by law up to maximum amount of $100,000 or in
                      such amounts as mandated by law
                    </li>
                    <li>
                      • "No Fault" and other supplemental or optional coverages
                      are not provided by the policy
                    </li>
                    <li>
                      • Punitive or exemplary damages to the extent permitted by
                      law
                    </li>
                  </ul>
                  <p className="text-avis mt-2">
                    <b>
                      Are there any special restrictions on the purchase of ALI?
                    </b>
                  </p>
                  <p className="text-avis mt-2">
                    In Florida, ALI may not be purchased if the term of the
                    rental document is for more than 30 days, coverage may not
                    be provided for more than 30 consecutive days; and if the
                    rental document is extended beyond 30 days, the coverage may
                    be extended for one time only, for a period not to exceed 30
                    days.
                  </p>
                  <p className="text-avis mt-2">
                    This is a summary only of ALI. The specific terms,
                    conditions and exclusions thereof are subject to all
                    provisions, limitations and exclusions contained in the
                    rental document and the ALI policy issued by ACE American
                    Insurance Company, one of the U.S.-based subsidiaries of ACE
                    Limited (NYSE: ACE) "ACE" and the ACE logo are service marks
                    of the ACE Group, which is comprised of ACE Limited and its
                    subsidiaries.
                  </p>
                  <p className="text-avis mt-2">
                    This summary is not intended to provide a complete
                    description of the policy’s terms, conditions and
                    exclusions. For additional details, we invite you to examine
                    a copy of the policy, which is available for your
                    inspection, upon request, at the Avis location at which you
                    are renting.
                  </p>
                  <p className="text-avis mt-2">
                    Avis employees, agents, or endorsees are not qualified to
                    evaluate the adequacy of the renter’s existing coverage.
                  </p>
                </div>
              ) : this.props.data === "Personal Accident Insurance (PAI)" ? (
                <div className="col-sm-12">
                  <h1 className="link-avis text-up fw-normal mb-5">
                    {this.props.data}
                  </h1>
                  <p className="text-avis mt-2">
                    You’ll pay for Personal Accident and Effects Insurance if
                    you accept it. You understand that you will be charged the
                    rate per day for a full day even if you don’t have the car
                    the entire day.
                  </p>
                  <p className="text-avis mt-2">
                    <b>
                      <u>PAI – Personal Accident Insurance (where available)</u>
                    </b>
                  </p>
                  <p className="text-avis mt-2">
                    PAI provides medical, hospital, death and dismemberment
                    benefits for bodily injury resulting from an accident.
                    Coverage is for the term of the rental agreement and will
                    not exceed a 30-day consecutive period.
                  </p>
                  <p className="text-avis mt-2">
                    PAI provides the following maximum benefits for accidental
                    bodily injury:
                  </p>
                  <ul className="text-avis mt-2">
                    <li>
                      • Accidental Death and Dismemberment up to $175,000*
                      (renter) and $25,000** (passenger).
                    </li>
                    <li>• Accident Medical Expenses up to $10,000</li>
                    <li>
                      • Hospital Accident Benefit*** of $500 per day up to 30
                      days
                    </li>
                  </ul>
                  <p className="text-avis mt-2">
                    *$200,000 in NY; $50,000 in NH
                  </p>
                  <p className="text-avis mt-2">
                    **$200,000 in NY; $175,000 in CT, IN, KS, MO, MT, VT, VA,
                    WA; $50,000 in NH
                  </p>
                  <p className="text-avis mt-2">
                    ***Hospital Accident Benefit not available in NY
                  </p>
                  <p className="text-avis mt-2">
                    <b>PAI Plus</b>
                  </p>
                  <p className="text-avis mt-2">
                    PAI Plus is designed to meet the needs of renters who
                    require extended amounts of insurance coverage (i.e.
                    visitors from non-U.S. countries).
                  </p>
                  <p className="text-avis mt-2">
                    The renter is covered 24 hours a day during the term of the
                    rental agreement up to 30 days
                  </p>
                  <ul className="text-avis mt-2">
                    <li>• $250,000* accidental death and dismemberment</li>
                    <li>
                      • $15,000 medical coverage for injuries due to an accident
                    </li>
                    <li>
                      • $500*** a day up to 30 days for hospitalization due to
                      an accident
                    </li>
                  </ul>
                  <p className="text-avis mt-2">
                    In vehicles with a capacity of up to 15 occupants, the
                    passengers are covered while in the car for:
                  </p>
                  <ul className="text-avis mt-2">
                    <li>
                      • $125,000** per passenger for accidental death and
                      dismemberment
                    </li>
                    <li>
                      • $15,000 medical coverage for injuries due to accident
                    </li>
                    <li>
                      • $500*** a day up to 30 days for hospitalization due to
                      an accident
                    </li>
                    <li>• $250,000 in NY; $50,000 in NH</li>
                    <li>
                      • **$250,000 in NY; $250,000 in CT, IN, KS, MO, MT, VT,
                      VA, WA; $50,000 in NH
                    </li>
                    <li>• ***Hospital Accident Benefit not available in NY</li>
                  </ul>
                  <p className="text-avis mt-2">
                    For the full brochure, please{" "}
                    <a
                      className="link-avis"
                      href="https://www.avis.com/content/dam/avis/na/us/common/pdf-files/avis-us-protectionscoverages-brochure-062922.pdf"
                      target="_blank"
                    >
                      click here.
                    </a>
                  </p>
                  <p className="text-avis mt-2">
                    For the policy certificate for General States, please{" "}
                    <a
                      className="link-avis"
                      href="https://www.avis.com/content/dam/avis/na/us/common/pdf-files/avis-pai-cert-general-states.pdf"
                      target="_blank"
                    >
                      click here.
                    </a>
                  </p>
                  <p className="text-avis mt-2">
                    For the policy certificate for New York, please{" "}
                    <a
                      className="link-avis"
                      href="https://www.avis.com/content/dam/avis/na/us/common/pdf-files/avis-pai-cert-ny-feb23.pdf"
                      target="_blank"
                    >
                      click here.
                    </a>
                  </p>
                  <p className="text-avis mt-2">
                    For the policy certificates for Connecticut, Indiana,
                    Kansas, Missouri, Montana, Vermont, Virginia, and
                    Washington, please{" "}
                    <a
                      className="link-avis"
                      href="https://www.avis.com/content/dam/avis/na/us/common/pdf-files/avis-pai-cert-CT-IN-KS-MO-MT-VT-VA-WA-feb23.pdf"
                      target="_blank"
                    >
                      click here.
                    </a>
                  </p>
                </div>
              ) : this.props.data === "Personal Accident Insurance (PAI)" ? (
                <div className="col-sm-12">
                  <h1 className="link-avis text-up fw-normal mb-5">
                    {this.props.data}
                  </h1>
                  <p className="text-avis mt-2">
                    You’ll pay for Personal Accident and Effects Insurance if
                    you accept it. You understand that you will be charged the
                    rate per day for a full day even if you don’t have the car
                    the entire day.
                  </p>
                  <p className="text-avis mt-2">
                    <b>
                      <u>PAI – Personal Accident Insurance (where available)</u>
                    </b>
                  </p>
                  <p className="text-avis mt-2">
                    PAI provides medical, hospital, death and dismemberment
                    benefits for bodily injury resulting from an accident.
                    Coverage is for the term of the rental agreement and will
                    not exceed a 30-day consecutive period.
                  </p>
                  <p className="text-avis mt-2">
                    PAI provides the following maximum benefits for accidental
                    bodily injury:
                  </p>
                  <ul className="text-avis mt-2">
                    <li>
                      • Accidental Death and Dismemberment up to $175,000*
                      (renter) and $25,000** (passenger).
                    </li>
                    <li>• Accident Medical Expenses up to $10,000</li>
                    <li>
                      • Hospital Accident Benefit*** of $500 per day up to 30
                      days
                    </li>
                  </ul>
                  <p className="text-avis mt-2">
                    *$200,000 in NY; $50,000 in NH
                  </p>
                  <p className="text-avis mt-2">
                    **$200,000 in NY; $175,000 in CT, IN, KS, MO, MT, VT, VA,
                    WA; $50,000 in NH
                  </p>
                  <p className="text-avis mt-2">
                    ***Hospital Accident Benefit not available in NY
                  </p>
                  <p className="text-avis mt-2">
                    <b>PAI Plus</b>
                  </p>
                  <p className="text-avis mt-2">
                    PAI Plus is designed to meet the needs of renters who
                    require extended amounts of insurance coverage (i.e.
                    visitors from non-U.S. countries).
                  </p>
                  <p className="text-avis mt-2">
                    The renter is covered 24 hours a day during the term of the
                    rental agreement up to 30 days
                  </p>
                  <ul className="text-avis mt-2">
                    <li>• $250,000* accidental death and dismemberment</li>
                    <li>
                      • $15,000 medical coverage for injuries due to an accident
                    </li>
                    <li>
                      • $500*** a day up to 30 days for hospitalization due to
                      an accident
                    </li>
                  </ul>
                  <p className="text-avis mt-2">
                    In vehicles with a capacity of up to 15 occupants, the
                    passengers are covered while in the car for:
                  </p>
                  <ul className="text-avis mt-2">
                    <li>
                      • $125,000** per passenger for accidental death and
                      dismemberment
                    </li>
                    <li>
                      • $15,000 medical coverage for injuries due to accident
                    </li>
                    <li>
                      • $500*** a day up to 30 days for hospitalization due to
                      an accident
                    </li>
                    <li>• $250,000 in NY; $50,000 in NH</li>
                    <li>
                      • **$250,000 in NY; $250,000 in CT, IN, KS, MO, MT, VT,
                      VA, WA; $50,000 in NH
                    </li>
                    <li>• ***Hospital Accident Benefit not available in NY</li>
                  </ul>
                  <p className="text-avis mt-2">
                    For the full brochure, please{" "}
                    <a
                      className="link-avis"
                      href="https://www.avis.com/content/dam/avis/na/us/common/pdf-files/avis-us-protectionscoverages-brochure-062922.pdf"
                      target="_blank"
                    >
                      click here.
                    </a>
                  </p>
                  <p className="text-avis mt-2">
                    For the policy certificate for General States, please{" "}
                    <a
                      className="link-avis"
                      href="https://www.avis.com/content/dam/avis/na/us/common/pdf-files/avis-pai-cert-general-states.pdf"
                      target="_blank"
                    >
                      click here.
                    </a>
                  </p>
                  <p className="text-avis mt-2">
                    For the policy certificate for New York, please{" "}
                    <a
                      className="link-avis"
                      href="https://www.avis.com/content/dam/avis/na/us/common/pdf-files/avis-pai-cert-ny-feb23.pdf"
                      target="_blank"
                    >
                      click here.
                    </a>
                  </p>
                  <p className="text-avis mt-2">
                    For the policy certificates for Connecticut, Indiana,
                    Kansas, Missouri, Montana, Vermont, Virginia, and
                    Washington, please{" "}
                    <a
                      className="link-avis"
                      href="https://www.avis.com/content/dam/avis/na/us/common/pdf-files/avis-pai-cert-CT-IN-KS-MO-MT-VT-VA-WA-feb23.pdf"
                      target="_blank"
                    >
                      click here.
                    </a>
                  </p>
                </div>
              ) : (
                <div className="col-sm-12">
                  <h1 className="link-avis text-up fw-normal mb-5">
                    {this.props.data}
                  </h1>
                  <p className="text-avis mt-2">
                    ESP, where available, is available only to non-US resident
                    renters. You’ll pay for ESP if you accept it. You’ll be
                    charged the rate per day for a full day even if you don’t
                    have the car for the entire day. ESP provides coverage for
                    travelers in case of illness during the rental period and
                    also coves the renter’s non-US resident passenger traveling
                    companions.
                  </p>
                  <p className="text-avis mt-2">
                    For the full brochure, please{" "}
                    <a
                      className="link-avis"
                      href="https://www.avis.com/content/dam/avis/na/us/common/pdf-files/avis-us-protectionscoverages-brochure-062922.pdf"
                      target="_blank"
                    >
                      click here.
                    </a>
                  </p>
                  <p className="text-avis mt-2">
                    For the policy certificate for General States, please{" "}
                    <a
                      className="link-avis"
                      href="https://www.avis.com/content/dam/avis/na/us/common/pdf-files/avis-esp-certificate-general-states.pdf"
                      target="_blank"
                    >
                      click here.
                    </a>
                  </p>
                  <p className="text-avis mt-2">
                    For the policy certificate for New York, please{" "}
                    <a
                      className="link-avis"
                      href="https://www.avis.com/content/dam/avis/na/us/common/pdf-files/avis-esp-cert-ny-feb23.pdf"
                      target="_blank"
                    >
                      click here.
                    </a>
                  </p>
                  <p className="text-avis mt-2">
                    For the policy certificates for Connecticut, Indiana,
                    Kansas, Missouri, Montana, Vermont, Virginia, and
                    Washington, please{" "}
                    <a
                      className="link-avis"
                      href="https://www.avis.com/content/dam/avis/na/us/common/pdf-files/avis-esp-cert-CT-IN-KS-MO-MT-VT-VA-WA-feb23.pdf"
                      target="_blank"
                    >
                      click here.
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}
