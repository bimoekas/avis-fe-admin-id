import React from "react";
import { Link } from "react-router-dom";
import CardPrivacy from "./CardPrivacy";

const ContentPrivacy = () => {
  const handleTopScroll = () => {
    const element = document.getElementById("privacy");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container py-4 text-dark" id="welcome">
      <p className="mb-3">
        Welcome to the Privacy Notice of the Avis and Budget companies within
        the Avis Budget Group, Inc. and their subsidiaries and affiliates,
        including, without limitation Avis Rent A Car System, LLC, Budget Rent A
        Car System, Inc., Payless Car Rental, Inc. and Budget Truck Rental, LLC
        (we refer to these companies as <b>“ABG,” “we,” “us,”</b> or{" "}
        <b>“our”</b> in this Privacy Notice). This Privacy Notice does not apply
        to Zipcar. This Privacy Notice covers the personal information we
        collect, use and disclose through your use of our websites, mobile
        applications (<b>“Apps”</b>), products and services, either online or
        offline (collectively, <b>“services”</b>). However, this Privacy Notice
        is not a contract and does not create any legal rights or obligations
        not otherwise provided by law. In some cases, we may provide additional
        disclosures or privacy notices specific to certain products, services,
        or programs. Those additional disclosures supplement, and are to be read
        in conjunction with, this Privacy Notice.
      </p>
      <p className="mb-3">
        <b>Updates to This Privacy Notice</b>
      </p>
      <p className="mb-3">
        When we make changes to this Privacy Notice, we will post the changes
        here and revise the “Last Updated” date at the top of this page. If we
        make a change that significantly affects your rights, we will notify you
        through appropriate communication channels (such as by way of a
        prominent posting on our websites and in our Apps), prior to the change
        becoming effective. If you have an account with us, we may also notify
        you about material changes to this Privacy Notice by e-mail (sent to the
        e-mail address provided in your account), through our Apps, or as
        otherwise required or permitted by law. Any changes to this Privacy
        Notice will become effective upon posting of the revised Privacy Notice.
      </p>
      <p className="mb-3">
        Use of our websites, Apps, products and services following the posting
        of a new Privacy Notice constitutes your acceptance of the revised
        Privacy Notice then in effect. As such, we encourage you to review this
        site from time to time for the latest information on our privacy
        practices.{" "}
      </p>
      <p className="mb-3">
        <b>Licensees Disclosures</b>
      </p>
      <p className="mb-3">
        Many independent locations or franchises, which we refer to as
        “licensees,” use our names but are not owned or controlled by us. This
        Privacy Notice does not apply to the processing of your personal
        information by these independent licensees.{" "}
        <Link className="link-avis text-decoration-none">Click here</Link> to
        learn more about licensees.
      </p>
      <p className="mb-3">
        <b>Region-Specific Disclosures</b>
      </p>
      <p className="mb-3">
        <b>
          <i>United States Residents:</i>
        </b>{" "}
        If you reside in the State of California or Virginia in the United
        States, please{" "}
        <Link className="link-avis text-decoration-none">Click here</Link> for
        additional U.S. State-specific privacy disclosures.
      </p>
      <p className="mb-3">
        <b>
          <i>United Kingdom and European Union Residents:</i>
        </b>{" "}
        If you reside in the United Kingdom or European Union, please use the
        appropriate website for your location, which can be found{" "}
        <Link className="link-avis text-decoration-none">here</Link> , rather
        than using this website.
      </p>
      <div className="row my-4 d-xl-flex d-none">
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
      <hr />
      <p className="mt-5 mb-3">
        If you have questions, comments, or suggestions, you can always contact
        us using any of the ways described in the{" "}
        <Link className="link-avis text-decoration-none">CONTACT US</Link>{" "}
        section.
      </p>
      <div className="pt-5" id="types_information">
        <p className="mb-3 mt-5" style={{ fontSize: "20px" }}>
          <b>1. THE TYPES OF INFORMATION WE COLLECT, AND HOW WE COLLECT THEM</b>
        </p>
        <p className="mb-3">
          We collect information from you, directly and through third parties,
          in accordance with this Privacy Notice any time you contact us,
          interact with us in person, through our services or on third-party
          platforms, or use our websites, Apps, products or services. If you do
          not provide the information we request, we may not be able to provide
          our products or services to you.
        </p>
        <p className="mb-3">
          <b>
            <u>Personal Information.</u>
          </b>
        </p>
        <ul className="similarCarOpt ps-5 mb-3">
          <li>
            Some of the information we collect can personally identify you,
            including, for example, your name and contact information,
            birthdate, government identification, payment information,
            membership ID, program ID, whether you are a part of a corporate or
            rewards program, payment arrangements, insurance arrangements, and
            information related to your rentals or use of products or services
            we provide or enable. For example, when you make a reservation, or
            join one of our programs, we collect your personal information such
            as: your name and contact information; birthdate; driver license and
            other appropriate government identification; payment information,
            including credit or debit card information (we collect security
            codes when you make a payment, but we do not keep them); information
            to process your discounts, such as coupons, discount codes, and
            membership numbers or codes; and other information that may be
            necessary to rent you a vehicle, provide you with services, contact
            you about these services or verify your identity. If you participate
            in an insurance program through us or are involved in an accident or
            property damage, we may collect additional information about your
            insurance provider and/or coverage.
          </li>
          <li>
            We may record or monitor any call you make to us for quality
            control, to enforce our rights, or for training or similar purposes.
            We may collect photos and videos in some instances, such as when you
            choose to share them with us in connection with one of our optional
            membership services or on social media or when we receive a notice
            of a traffic violation that includes a picture or video. Our rental
            locations may also be equipped with cameras and/or video security
            surveillance systems.
          </li>
          <li>
            When you download, visit or use our websites or Apps or interact
            with us using e-mail, texts or other forms of electronic
            communication, we may we use cookies, pixel tags, beacons, scripts
            and similar technologies to automatically collect certain
            information, including, for example, your IP addresses, MAC
            addresses, device identifier, browser type, Internet service
            provider (“ISP”), location, how you interact with our websites
            and/or Apps, referral/exit sites, operating system, date/time stamp,
            and clickstream data.
          </li>
          <li>
            We also collect personal information about you from third parties,
            including information from third party travel booking channels;
            service providers; licensees; airlines, hotels, membership clubs,
            payment card companies, advertisers and other partners; from your
            employer; from your social media services consistent with your
            information sharing settings on such services; and from other
            third-party sources that are lawfully entitled to share your
            information with us.
          </li>
          <li>
            We may collect information about relevant health conditions when
            necessary to provide adaptive driving devices.
          </li>
        </ul>
        <p className="mb-3">
          <b>
            <u>Connected Car Data</u>
          </b>
        </p>
        <ul className="similarCarOpt ps-5 mb-3">
          <li>
            Some of our rental vehicles are connected cars. A connected car is a
            vehicle equipped with features, telematics systems, on-board
            devices, or built-in services and technologies that are capable of
            collecting data about the vehicle and its use, including, for
            example, the vehicle’s condition, damage and accident events and
            records, performance, operation and diagnostic data, information on
            mileage, acceleration, braking, speed, fuel consumption, fuel level,
            tire pressure, odometer, location and direction, and other
            vehicle-related information (collectively,{" "}
            <b>“Connected Car Data”</b> or <b>“Vehicle Data”</b>). Typically,
            this information is associated with the vehicle only and maintained
            as non-personal information, as described in the Non-Personal
            Information section below. If we link this information to you, we
            will treat it as personal information.
          </li>
          <li>
            Use of features and built-in services and technologies in connected
            cars are subject to the terms and conditions posted by the vehicle
            manufacturer and/or the technology provider, which may include
            system and service limitations, warranty exclusions, limitations of
            liability, wireless service provider terms, and user
            responsibilities. Some or all of these features are turned on at all
            times, even when other services or other media in the vehicle are
            turned off. If you are unsure whether your rental vehicle is a
            connected car, please speak to a member of our team at the rental
            location or contact the Rental Station Manager. Details on the
            connected car features in our rental vehicles are also set out in
            the “Vehicle Details” section of the Rental Agreement. We cannot
            guarantee that a vehicle without connected car features will be
            available at your time of rental.
          </li>
          <li>
            Depending on the technology used in your rental vehicle, vehicle
            manufacturers and built-in services such as ‘Apple CarPlay’ or
            ‘OnStar’ may also collect Connected Car Data or other personal
            information from the vehicle pursuant to their privacy policies. For
            more information about this third party information collection,
            please refer to the{" "}
            <Link className="link-avis text-decoration-none">
              Third Party Collection
            </Link>{" "}
            section below.
          </li>
        </ul>
        <p className="mb-3">
          <b>
            <u>Location Information</u>
          </b>
        </p>
        <ul className="similarCarOpt ps-5 mb-3">
          <li>
            We may collect information about your location from our websites,
            your mobile devices, and your visits to our locations. You may{" "}
            <Link className="link-avis text-decoration-none">opt out</Link> of
            our collection of information about your location from mobile
            devices at any time by turning off transmission of geolocation data
            and push notifications on each of your mobile devices.
          </li>
          <li>
            We may also at times connect certain location-related Connected Car
            Data to you.
          </li>
        </ul>
        <p className="mb-3">
          <b>
            <u>Non-Personal Information</u>
          </b>
        </p>
        <ul className="similarCarOpt ps-5 mb-3">
          <li>
            We may also collect or transform information so that it is
            maintained in a form that is not linked to a particular individual,
            such as vehicle information that is not connected to a passenger or
            other aggregated, de-identified or anonymized information
            (“non-personal information”). This Privacy Notice does not apply to
            non-personal information, which we collect, use and disclose for a
            variety of purposes. However, any non-personal information that is
            linked to or combined with personal information, where permitted by
            law, will be treated as personal information subject to this Privacy
            Notice.
          </li>
        </ul>
        <p className="mb-3">
          <b>
            <u>Biometric Information</u>
          </b>
        </p>
        <ul className="similarCarOpt ps-5 mb-3">
          <li>
            QuickPass Biometric Identity Verification: Avis and Budget may offer
            customers contactless rental experiences through our QuickPass
            service. We rely on trusted third-party identity verification
            providers to facilitate customer identity verification using
            biometric facial comparison technology to provide customers the
            QuickPass service.
          </li>
        </ul>
        <p className="mb-3 ms-5">
          In order to verify a customer’s identity through this process, the
          customer is asked to capture an image of their driver’s license and
          take a real-time selfie image of their face. Our identity verification
          providers then use a combination of machine learning tools and
          statistical algorithms to confirm the authenticity of the driver’s
          license and perform a biometric facial comparison to determine whether
          the faces contained in the driver’s license and selfie image belong to
          the same person. Through this process, the verification provider will
          typically generate a “confidence score” representing the confidence
          level that the images of the individuals match, which we or the
          relevant provider may use in determining the level of confidence that
          the individual submitting the selfie image is the same person as the
          individual on the driver’s license.
        </p>
        <p className="mb-3 ms-5">
          We do not receive any facial biometric information generated from the
          images, and we contractually require our integrated identity
          verification providers who process this information on our behalf to
          destroy the images and any biometric information promptly after
          processing in accordance with a data retention schedule. We do not
          use, disclose or retain facial biometric information for any other
          commercial purpose.
        </p>
        <p className="mb-3 ms-5">
          In some circumstances, we may rely on an independent third-party
          identity verification provider that requires our customers to create
          and maintain an account directly with the provider on the provider’s
          own site or service. If a customer creates an account with one of our
          third-party identity verification providers, the provider’s processing
          of personal information, including biometric information, will be
          subject to the provider’s own terms and privacy policy (which will be
          presented to the customer during the provider’s account creation
          process). In this circumstance, the provider may retain a copy of the
          customer’s selfie image and/or driver’s license (as well as the
          biometric facial geometry extracted from the images) for the purposes
          and length of time described in that provider’s privacy policy,
          including for the purpose of streamlining future identity verification
          attempts using that provider’s identity verification platform. Please
          review the provider’s privacy policy closely to understand how your
          personal information, including biometric information, will be used,
          disclosed and retained by the identity verification provider.{" "}
        </p>
        <ul className="similarCarOpt ps-5 mb-5">
          <li>
            <u>Mobile Application Authentication:</u> Some of our mobile
            applications require you to log in to access your account or
            interact with your connected car. We may provide you the ability to
            log in or authenticate yourself using facial, fingerprint or other
            biometric recognition technology available through your mobile
            device. If you choose to utilize these login features, information
            about your facial geometry, your fingerprint or other biometric
            information will be collected by your mobile device for
            authentication purposes. We do not store or have access to this
            biometric information. Instead, your mobile device will perform the
            biometric authentication process and only let us know whether the
            authentication was successful. If the authentication was successful,
            you will be able to access the applicable mobile application or
            feature without separately providing your credentials.
          </li>
        </ul>
      </div>
      <div className="pt-5" id="how_used_information">
        <p className="mb-3 mt-5" style={{ fontSize: "20px" }}>
          <b>2. HOW INFORMATION IS USED</b>
        </p>
        <p className="mb-3">
          <b>
            <u>Personal Information</u>
          </b>
        </p>
        <p className="mb-3">We use your personal information to:</p>
        <ul className="similarCarOpt ps-5 mb-3">
          <li>
            fulfill or meet the reason you provided the information, such as to
            create your account, process your transaction or respond to your
            inquiry;
          </li>
          <li>
            operate, maintain, and provide you with our websites, Apps, products
            and services;
          </li>
          <li>
            recognize you and remember your information when you return to our
            websites and services;
          </li>
          <li>
            verify your identity and confirm the authenticity of your identity
            documents;
          </li>
          <li>
            provide you with additional services or functionalities (for
            example, to facilitate contactless rentals, to provide remote
            lock/unlock, to remote disable engine/cancel ignition, and to
            automatically receive the vehicle location, odometer, fuel level and
            other information in connection with your rental);
          </li>
          <li>
            administer your rental, manage your rental records and to calculate
            your fees (for example, to automatically record the start of your
            rental, any exchange or upgrades, and the fuel or mileage usage and
            charges);
          </li>
          <li>
            communicate information regarding your reservation or rental. These
            communications are transactional or service related and will be sent
            via email, text, push notification or phone calls;
          </li>
          <li>
            diagnose problems, analyze trends, and assess our performances;
          </li>
          <li>provide roadside assistance;</li>
          <li>provide you with discounts;</li>
          <li>improve our operations and services;</li>
          <li>better understand our customers’ preferences;</li>
          <li>better understand how our vehicles are being used;</li>
          <li>
            tailor and personalize our services, promotions and offers to our
            customers, including targeted offers and ads relevant to your
            interests through our websites, Apps, third-party sites, or on other
            devices you may use;
          </li>
          <li>
            testing, training, research, analysis and development of our
            products and services;
          </li>
          <li>maintain our fleet;</li>
          <li>recover lost, stolen or towed rental vehicles;</li>
          <li>
            interact with you in person, through our services, via email, text
            message, push notification, phone calls or on third-party platforms
            (such as social media sites);
          </li>
          <li>
            provide you with, and improve, relevant marketing (including via
            email, direct mail, phone or text message) or offers from us and our
            partners, and to inform our advertising and marketing campaigns;
          </li>
          <li>run our contests, sweepstakes or promotions;</li>
          <li>enable third-party vehicle applications and services;</li>
          <li>improve road safety and reduce traffic;</li>
          <li>
            evaluate, negotiate, or conduct a merger, divestiture,
            restructuring, reorganization, dissolution, or other sale or
            transfer of some or all of ABG’s assets, whether as a going concern
            or as part of bankruptcy, liquidation, or similar proceeding, in
            which personal information held by ABG about consumers is among the
            assets transferred or is otherwise relevant to the evaluation,
            negotiation or conduct of the transaction.
          </li>
          <li>
            respond to legally binding requests from law enforcement, regulatory
            authorities or other third parties;
          </li>
          <li>
            maintain the safety, security, and integrity of our or another’s
            premises, property, services or other assets, including ABG
            vehicles, technology assets and business;
          </li>
          <li>
            defend, protect or enforce our rights or applicable terms of
            service;
          </li>
          <li>prevent fraud or the recurrence of fraud;</li>
          <li>assist in the event of an emergency; and</li>
          <li>comply with applicable law.</li>
        </ul>
        <p className="mb-3">
          We use cookies, pixel tags, beacons, scripts and similar technologies
          to adjust and optimize our content to your preferences, to provide you
          with useful functionalities, to remember your previous rentals and
          your travel preferences, to help us make our website, Apps, products
          and services more convenient and efficient, to improve our services,
          to help us analyze usage trends and patterns, and to tailor online
          advertisements by us and our partners to you, and we may use
          third-party vendors to assist with these efforts. Our third-party
          vendors and partners may use these technologies to collect information
          about your online activities over time and across different websites
          or online services when you use or interact with our website and other
          online services.
        </p>
        <p className="mb-3">
          We may also use third party tools to monitor user experience
          information on our Website. These tools automatically record how you
          interact with our Website including mouse clicks and movements, page
          scrolling and any text keyed into website forms. We use this
          information for site analytics, optimization and to improve website
          usability. We also use analytic software, such as Google Analytics and
          others, to help us to better understand how our websites and Apps
          function on your device and for research and development. We may also
          utilize certain forms of display advertising and other advanced
          features through Google Analytics, such as Remarketing with Google
          Analytics, which uses third-party cookies (such as the DoubleClick
          advertising cookie) or other third-party cookies together to inform,
          optimize, and display ads based on your past visits to the services.
          For information on how Google Analytics collects and processes data,
          as well as how you can control information sent to Google, review
          Google's site “How Google uses data when you use our partners’ sites
          or apps” located at
          <Link className="link-avis text-decoration-none">
            www.google.com/policies/privacy/partners/
          </Link>{" "}
          and you can learn about Google Analytics’ currently available
          opt-outs, including the Google Analytics Browser Ad-On, at{" "}
          <Link className="link-avis text-decoration-none">
            https://tools.google.com/dlpage/gaoptout/
          </Link>
          .
        </p>
        <p className="mb-3">
          We may use third party platforms to help us promote interest-based
          advertisements to you or to offer integration with third-party
          services (such as the Facebook Like button). These providers use
          cookies or similar tracking technologies to collect information about
          your use of our websites, including our mobile apps, over time so that
          they may deliver the integrated services or play or display ads on our
          services, on other websites, apps or services you may use, and on
          other devices you may use. We may share a common account identifier
          (such as a hashed email address or user ID) with our third-party
          advertising partners to help identify you across devices. We and our
          third-party partners use this information to facilitate integrated
          services or to make the advertisements you see online more relevant to
          your interests, as well as to provide advertising-related services
          such as reporting, attribution, analytics and market research. You
          have options when it comes to cookies and other web tracking tools.
        </p>
        <p className="mb-3">
          You can set your browser or device to refuse all cookies or to
          indicate when a cookie is being sent. However, some features or
          services may not function properly without cookies.
        </p>
        <p className="mb-3">
          We use information about your location (including, at times, by
          linking personal information with location information of the rental
          vehicle you are using) primarily to locate our nearest rental
          location, send you location-based notifications (i.e., nearby special
          offers), arrival and return notifications, vehicle location, and
          upgrade availabilities. We also use information about your location
          for the same purposes we use your personal information, including to
          provide you with, and improve, relevant marketing or offers from us
          and our partners.
        </p>
        <p className="mb-3">
          <b>
            <u>Data Retention</u>
          </b>
        </p>
        <p className="mb-3">
          We may retain your information for as long as you have an account with
          Avis, Budget, Payless, or Budget Truck Rental, as needed to provide
          you our services, or as otherwise necessary for the processing
          purpose(s) for which the information was originally collected and any
          other legitimate business purpose, including, for legal, archival,
          accounting, and/or audit purposes.
        </p>
        <p className="mb-3">
          To determine the appropriate duration of the retention of personal
          information, we consider the amount, nature, and sensitivity of the
          personal information, the potential risk of harm from unauthorized use
          or disclosure of personal information, and whether we can attain our
          objectives by other means, as well as our legal, regulatory, tax,
          accounting, and other applicable obligations.
        </p>
        <p className="mb-3">
          Once retention of the personal information is no longer necessary for
          the purposes outlined above, we will either delete or deidentify the
          personal information or, if this is not possible (for example, because
          personal information has been stored in backup archives), then we will
          not further process the personal information until deletion or
          deidentification is possible.
        </p>
        <p className="mb-3">
          <b>
            <u>Your Opt-Out Choices</u>
          </b>
        </p>
        <ul className="similarCarOpt ps-5 mb-3">
          <li>
            <u>If you would like to opt-out of receiving marketing e-mails:</u>{" "}
            Click the “unsubscribe” at the bottom of an e-mail we sent you, or
            log into your account and update your profile, or contact any
            customer service representative.
          </li>
          <li>
            <u>
              If you would like to opt-out of receiving marketing text messages:
            </u>{" "}
            For Avis, text the word “STOP” in response to the text message you
            receive. For Budget, text the word “STOP” in response to the text
            message you receive. For more information about our text message
            communications and your options for opting out, as well as
            additional terms, please see our SMS Policy <Link>here</Link>.
          </li>
          <li>
            <u>
              If you would like to opt-out of receiving tailored online
              advertisements from us and our partners:
            </u>{" "}
            Set your browser or device to refuse all cookies or to indicate when
            a cookie is being sent. Check your specific browser’s website to
            learn how to adjust your cookie settings. Please note that if you
            opt-out of tailored advertising, you will continue to receive
            general ads. To learn about online advertising and your choices
            click here:
            <Link className="link-avis text-decoration-none">
              http://www.networkadvertising.org/choices/
            </Link>{" "}
            or{" "}
            <Link className="link-avis text-decoration-none">
              http://www.aboutads.info/choices/
            </Link>{" "}
            (if you are a US visitor) or{" "}
            <Link className="link-avis text-decoration-none">
              http://www.networkadvertising.org/choices/
            </Link>{" "}
            or{" "}
            <Link className="link-avis text-decoration-none">
              http://youradchoices.ca/choices/
            </Link>{" "}
            (if you are a Canadian visitor). You may control your advertising
            preferences or opt-out of certain Google advertising products by
            visiting the Google Ads Preferences Manager, currently available at{" "}
            <Link className="link-avis text-decoration-none">
              https://google.com/ads/preferences
            </Link>
            . Some ABG companies partner with an advertising company (Rokt). To
            the extent ABG companies have partnered with Rokt, you may also opt
            out of certain advertising offers provided by our advertising
            partner, Rokt, by following the instructions set forth in Rokt’s
            Privacy Policy, currently available at{" "}
            <Link className="link-avis text-decoration-none">
              https://rokt.com/privacy-policy/
            </Link>
            . You must perform the opt-out on each browser or device you use.
            These opt-out choices may not affect online advertising that is not
            cookie-based. Some of these opt-outs may not be effective unless
            your browser is set to accept cookies. If you delete cookies, change
            your browser settings, switch browsers or computers, or use another
            operating system, you may need to opt-out again. Please note that
            when you “opt-out” of receiving interest-based advertisements, this
            does not mean you will no longer see advertisements from us or on
            our services. In addition, third parties may still use cookies to
            collect information about your use of our services, including for
            analytics and fraud prevention as well as any other non-advertising
            purpose.
          </li>
          <li>
            <u>
              You can stop sharing the location information of your mobile
              device through the applicable ABG App by turning off location
              services or by uninstalling the App. If you would like to
              uninstall the ABG app:
            </u>{" "}
            Use the standard uninstall processes as may be available as part of
            your mobile device or via the application marketplace or network
            from which you downloaded the app.
          </li>
        </ul>
        <p className="mb-5">
          You may also be able to limit mobile interest-based advertising
          through the settings on your mobile device by selecting “limit ad
          tracking” (iOS) or “opt-out of interest based ads” (Android). You may
          also be able to opt-out of some – but not all – interest-based ads
          served by mobile ad networks by visiting{" "}
          <Link className="link-avis text-decoration-none">
            http://youradchoices.com/appchoices
          </Link>{" "}
          and downloading the mobile AppChoices app. You may be able to limit
          the use of location data for advertising purposes by adjusting your
          location services settings on your mobile device.
        </p>
      </div>
      <div className="pt-5" id="how_shared_information">
        <p className="mb-3 mt-5" style={{ fontSize: "20px" }}>
          <b>3. HOW INFORMATION IS SHARED</b>
        </p>
        <p className="mb-3">
          To facilitate the uses of personal information identified in this
          Privacy Notice, we may share your personal information with a variety
          of third parties, including our service partners and business
          partners.
        </p>
        <p className="mb-3">
          We may share your personal information with our third-party service
          providers and partners to help us with our marketing and promotional
          projects, such as managing our social media pages, running contests,
          sweepstakes and other promotions, or to comply with your directions or
          any additional consent you have provided us.
        </p>
        <p className="mb-3">
          In addition, Budget Truck may share your personal information with
          third parties who use this information to provide you with information
          and marketing messages about products or services that may interest
          you. These parties may use your information in accordance with their
          own privacy policies and terms.
        </p>
        <p className="mb-3">
          If you are renting with a corporate, membership or other similar
          commercial entity account, we may share personal information with the
          organization that manages the account for their own purposes. We
          recommend you review their privacy policy to learn more about their
          privacy practices.
        </p>
        <p className="mb-3">
          We and our business and promotional partners send you information
          about products and services you may like. For example, we may help to
          arrange hotel rentals, flights or other services from our business
          partners, and share personal information with our business partners in
          order to provide those services and facilitate your reservations. We
          may also work with third parties, such as our airline and payment card
          partners, to allow us and our partners to deliver advertisements to
          our shared customers. Our partners may be able to provide more
          relevant offers to you based upon information that we share about your
          rentals, as well as information in your loyalty program profile.
          Additionally, we may allow third-party partners to recognize you when
          you visit that partner’s website or app, or to recognize you as one of
          their customers when you visit our websites or apps so that they may
          provide more relevant offers to you. You may{" "}
          <Link className="link-avis text-decoration-none">opt out of</Link>{" "}
          receiving marketing and promotional e-mails and text messages from us
          and our business and promotional partners. Please note that revoking
          consent to receive marketing and promotional e-mails and text messages
          does not affect our non-promotional or non-marketing communications,
          including, for example, communications about the status and activities
          of your accounts, billing communications, responses to your requests,
          post-service feedback or survey requests, confirmations, and similar
          communications.
        </p>
        <p className="mb-3">
          We may share website usage information, including searches,
          transaction and profile information (but not your name) with our
          partners for the purpose of making the online advertisements on our
          websites and other websites that display our advertisements more
          relevant.
        </p>
        <p className="mb-3">
          We may also let you share some of our online content on social media
          websites through hosted sharing links and icons. We do not track or
          store a record of each time a third party shares our online content.
          If you choose to participate in posting or sharing activities, you
          should remember that it may be viewed by the public via ABG’s website,
          in RSS feeds, APIs (application program interfaces) and may also be
          made available to other websites. As a result, your public activities
          may appear on third-party websites, blogs, or feeds. ABG is not
          responsible for the information that may be shared publicly. Our
          websites may include social media features, such as the Facebook Like
          button. These features may collect your IP address, which page you are
          visiting on our website, and may set a cookie so that the Like button
          feature works properly. Any social media feature is governed by the
          privacy policies of the website providing the feature. We encourage
          you to read the privacy policies of any website you visit.
        </p>
        <p className="mb-3">
          We may share your personal information with law enforcement and
          regulatory authorities or other third parties as required or permitted
          by law, including for the purpose of:
        </p>
        <ul className="similarCarOpt ps-5 mb-3">
          <li>
            responding to a subpoena, court order or other legal processes;
          </li>
          <li>defending, protecting or enforcing our rights;</li>
          <li>assisting in the event of an emergency; and</li>
          <li>complying with applicable law.</li>
        </ul>
        <p className="mb-3">
          We may also share personal information with third parties in the event
          of an actual or potential merger or acquisition, consolidation, change
          in control, transfer of assets, bankruptcy, reorganization, or
          liquidation. To the extent that local laws require it, we will provide
          you notice on our websites or via e-mail of our intent to transfer
          personal information to a third party for this purpose.
        </p>
        <p className="mb-3">
          <b>
            <u>Personal Location Information.</u>
          </b>
        </p>
        <p className="mb-3">
          We only share information about your location with:
        </p>
        <ul className="similarCarOpt ps-5 mb-3">
          <li>
            our third-party service providers to help provide our services or
            third-party services you have requested;
          </li>
          <li>
            third-parties for whom you have provided consent, including, for
            example, with partners who provide location-based marketing; or
          </li>
          <li>
            law enforcement and regulatory authorities or other third parties as
            required or permitted by law, including for the purpose of:
          </li>
        </ul>
        <ul className="ps-4 pt-4 mb-5 privacylist">
          <li>
            responding to a subpoena, court order or other legal processes;
          </li>
          <li>defending, protecting or enforcing our rights;</li>
          <li>to locate an overdue or suspected stolen or lost vehicle</li>
          <li>assisting in the event of an emergency; and</li>
          <li>complying with applicable law.</li>
        </ul>
      </div>
      <div className="pt-5" id="how_protected_information">
        <p className="mb-3 mt-5" style={{ fontSize: "20px" }}>
          <b>4. HOW INFORMATION IS PROTECTED</b>
        </p>
        <p className="mb-5">
          The security of personal information is important to us. We take
          reasonable steps designed to protect personal information from
          unauthorized use, access, disclosure, alteration, destruction or loss.
          You are responsible for keeping your account safe. Do not share your
          passcode, membership and pin numbers with anyone. Please be mindful
          that hackers and scammers may impersonate us or our website. For more
          information about phishing, please visit
          https://www.consumer.ftc.gov/articles/0003-phishing. If you suspect an
          unauthorized use or security breach of your information, you must
          notify our{" "}
          <Link className="link-avis text-decoration-none">
            customer service
          </Link>{" "}
          as soon as possible! We are not responsible or liable for any loss or
          damage if your account passcode, membership numbers and pin numbers
          are stolen or used inappropriately.
        </p>
      </div>
      <div className="pt-5" id="children_privacy">
        <p className="mb-3 mt-5" style={{ fontSize: "20px" }}>
          <b>5. CHILDREN’S PRIVACY</b>
        </p>
        <p className="mb-5">
          Our websites, Apps, products, and services are not for children under
          the age of 13. We do not knowingly collect or solicit personal
          information from children under the age of 13. If you are under the
          age of 13, please do not use our websites or online services or
          otherwise provide us with any personal information either directly or
          by other means. If you think we have received personal information
          from a child under the age of 13, please contact us immediately. If we
          learn that any personal information we have collected has been
          provided by a child under the age of 13, we will promptly delete that
          personal information.
        </p>
      </div>
      <div className="pt-5" id="third_party_collection">
        <p className="mb-3 mt-5" style={{ fontSize: "20px" }}>
          <b>6. THIRD PARTY COLLECTION</b>
        </p>
        <p className="mb-3">
          Our websites and Apps may include links to and from third-party
          websites, plug-ins and applications. This Privacy Notice does not
          apply to those third-party services, and we do not control how
          personal information is collected or used on those third-party
          services, so please review the privacy policy of any third-party
          service you visit.
        </p>
        <p className="mb-3">
          Many ABG branded locations or franchises are independently owned and
          operated. This Privacy Notice does not apply to the processing of your
          personal information by these independent locations or franchises.
          Click <Link className="link-avis text-decoration-none">here</Link> to
          learn more about independent locations or franchises.
        </p>
        <p className="mb-5">
          Depending on the technology used in your rental vehicle, vehicle
          manufacturers and built-in services, such as OnStar, Uconnect,
          Bluetooth, Apple CarPlay, and Android Auto, may also collect Connected
          Car Data from our vehicles pursuant to their privacy policy and share
          the Connected Car Data with us. Please note, Connected Car Data may be
          received by the manufacturer of the connected car or the owner of the
          built-in service prior to it being received by us. We encourage you to
          review the manufacturer’s and the relevant built-in service’s privacy
          policies and other terms and conditions related to Connected Car Data
          to understand what personal information is being collected from the
          connected car and the purposes for which it is being collected. If you
          choose to sync your information or a device to the car (using
          Bluetooth, USB or otherwise), data from you or your device may be
          accessed and stored on the car’s systems, such as the infotainment
          system.{" "}
          <b>
            Please always unpair your device and ensure that you take the
            necessary steps to remove your information from the system when you
            return the car at the end of your rental period. If you do not do
            this, your information may be retained in the system and could be
            accessed by anyone who is authorized to use the car
          </b>
          . We are not responsible for any data that is left in the vehicle as a
          result of your use.
        </p>
      </div>
      <div className="pt-5" id="contact_us">
        <p className="mb-3 mt-5" style={{ fontSize: "20px" }}>
          <b>7. CONTACT US</b>
        </p>
        <p className="mb-4">
          If you have questions, comments, or suggestions, you can always
          contact us in the following ways. We may need to verify your identity
          before assisting with your request.
        </p>
        <table
          border="1"
          cellspacing="0"
          cellpadding="0"
          className="tablePrivacy mb-5"
        >
          <tbody>
            <tr>
              <td width="400" valign="top">
                <p>
                  <b>&nbsp;I want to…</b>
                </p>
                <p>&nbsp;</p>
              </td>
              <td width="400" valign="top">
                <p>
                  <b>&nbsp;How to reach us</b>
                </p>
              </td>
            </tr>
            <tr>
              <td width="292" valign="top">
                <p>&nbsp;Contact Avis customer service</p>
              </td>
              <td width="331" valign="top">
                <p>&nbsp;Phone: 1-800-352-7900</p>
                <p>
                  &nbsp;E-mail:&nbsp;{" "}
                  <Link className="link-avis text-decoration-none">
                    custserv@avis.com
                  </Link>
                </p>
                <p>
                  &nbsp;Mail:&nbsp;&nbsp;&nbsp;&nbsp; P.O. Box
                  699000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Tulsa, OK 74169-9000
                </p>
                <p>&nbsp;Hours of Operation: 7:30am-7:30pm CST</p>
                <p>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td width="292" valign="top">
                <p>&nbsp;Contact Budget customer service</p>
              </td>
              <td width="331" valign="top">
                <p>&nbsp;Phone: 1-800-621-2844</p>
                <p>
                  &nbsp;E-mail:&nbsp;{" "}
                  <Link
                    className="link-avis text-decoration-none"
                    to="mailto:budgetcustomerservice@budgetgroup.com"
                  >
                    budgetcustomerservice@budgetgroup.com
                  </Link>
                </p>
                <p>
                  &nbsp;Mail:&nbsp;&nbsp;&nbsp;&nbsp; P.O. Box 699000
                  <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Tulsa,
                  OK 74169-9000
                </p>
                <p>&nbsp;Hours of Operation: 7:30am-7:30pm CST</p>
                <p>&nbsp;</p>
              </td>
            </tr>

            <tr>
              <td width="292" valign="top">
                <p>&nbsp;Contact Budget Truck Rental customer service</p>
              </td>
              <td width="331" valign="top">
                <p>
                  &nbsp;Phone: 1-800-462-8343
                  <br /> &nbsp;E-mail:&nbsp;{" "}
                  <Link
                    className="link-avis text-decoration-none"
                    to="mailto:btr-customerserviceVAB@avisbudget.com"
                  >
                    btr-customerserviceVAB@avisbudget.com
                  </Link>
                  <br /> &nbsp;Mail:&nbsp;&nbsp;&nbsp;&nbsp; P.O. Box 699000
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Tulsa, OK
                  74169-9000
                </p>
                <p>&nbsp;Hours of Operation: 7:30am-7:30pm CST</p>
                <p>&nbsp;</p>
              </td>
            </tr>

            <tr>
              <td width="292" valign="top">
                <p>&nbsp;Contact Payless customer service</p>
              </td>
              <td width="331" valign="top">
                <p>&nbsp;Phone: 1-800-729-5377</p>
                <p>
                  &nbsp;E-mail:&nbsp;&nbsp;
                  <Link
                    className="link-avis text-decoration-none"
                    to="mailto:customerservice@paylesscar.com"
                  >
                    customerservice@paylesscar.com
                  </Link>
                </p>
                <p>
                  &nbsp;Mail:&nbsp;&nbsp;&nbsp;&nbsp; P.O. Box
                  699000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Tulsa, OK 74169-9000
                </p>
                <p>&nbsp;Hours of Operation: 7:30am-7:30pm CST</p>
                <p>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td width="292" valign="top">
                <p id="accessupdate">
                  &nbsp;Access, update or correct some of my information
                </p>
              </td>
              <td width="331" valign="top">
                <p>
                  &nbsp;(1) Log into your account and update your profile; or
                </p>
                <p>
                  &nbsp;(2) Contact any customer service representative above
                </p>
                <p>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td width="292" valign="top">
                <p>
                  &nbsp;·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ask
                  questions regarding ABG’s Privacy Notice and practices
                </p>
                <p>
                  &nbsp;·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notify
                  ABG that we may have received personal information of a child
                  under 13
                </p>
              </td>
              <td width="331" valign="top">
                <p>
                  &nbsp;E-mail:&nbsp;{" "}
                  <Link
                    className="link-avis text-decoration-none"
                    to="mailto:ABGprivacy@avisbudget.com"
                  >
                    ABGprivacy@avisbudget.com
                  </Link>
                </p>
                <p>&nbsp;Mail:&nbsp;&nbsp;&nbsp;&nbsp; Avis Budget Group</p>
                <p>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;6 Sylvan Way
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Parsippany, NJ
                  07054
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Attn: Privacy
                  Officer
                </p>
                <p>&nbsp;Phone: 866-284-7669</p>
                <p>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td width="292" valign="top">
                <p>
                  &nbsp;Request to stop receiving marketing e-mails from ABG
                </p>
              </td>
              <td width="331" valign="top">
                <p>
                  &nbsp;(1) Click “unsubscribe” at the bottom of an e-mail we
                  sent you; or
                </p>
                <p>
                  &nbsp;(2) Log into your account and update your profile; or
                </p>
                <p>
                  &nbsp;(3) Contact any customer service representative above
                </p>
                <p>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td width="292" valign="top">
                <p>
                  &nbsp;Request to stop receiving marketing text messages from
                  Avis and/or Budget
                </p>
              </td>
              <td width="331" valign="top">
                <p>
                  Text the word “STOP” to any marketing text message you
                  receive.
                </p>
                <p>&nbsp;</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pt-5" id="independent_locations">
        <p className="mb-3 mt-5" style={{ fontSize: "20px" }}>
          <b>8. INDEPENDENT LOCATIONS</b>
        </p>
        <p className="mb-3">
          Please note, many Avis, Budget, Payless and Budget Truck locations are
          owned and operated by an independent licensee and not owned or
          controlled by ABG or any ABG affiliate or subsidiary. This Privacy
          Notice only applies to our processing of your personal information and
          does not apply to the processing of your personal information by an
          independent licensee. Each of these independent licensees is
          responsible for its own collection and processing of personal
          information and may collect, use or disclose personal information
          differently than described in this Privacy Notice.{" "}
        </p>
        <p className="mb-5">
          In particular, the licensee is responsible for its own collection and
          processing of payments and may engage in its own e-mail campaigns and
          other forms of marketing to you. Because we do not control the
          independent licensee’s use of personal information and we are not
          responsible for the independent licensee’s compliance with applicable
          privacy laws, you should direct any questions about a licensee’s
          privacy practices to the specific licensee.
        </p>
      </div>
      <div className="pt-5" id="state_privacy">
        <p className="mb-3 mt-5" style={{ fontSize: "20px" }}>
          <b>9. Additional U.S. State Privacy Disclosures</b>
        </p>
        <p className="mb-3">
          <b>
            <i>Nevada Residents:</i>
          </b>{" "}
          If you are a resident of the state of Nevada in the United States,
          please note Chapter 603A of the Nevada Revised Statutes permits a
          Nevada resident to opt out of future sales of certain covered
          information that a website operator has collected or will collect
          about the resident. To submit such a request, please contact us at{" "}
          <Link className="link-avis text-decoration-none">
            ABGprivacy@avisbudget.com
          </Link>{" "}
          with the subject line “Nevada Opt-Out”.
        </p>
        <p className="mb-3">
          <b>
            <i>California and Virginia Residents:</i>
          </b>{" "}
          These U.S. State Privacy Disclosures (the{" "}
          <b>“U.S. State Disclosures”</b>) supplement the information contained
          in our Privacy Notice and apply solely to individual residents of the
          States of California and Virginia (<b>"consumers"</b> or <b>"you"</b>
          ).
        </p>
        <p className="mb-3">
          <b>
            <u>Collection and Use of Personal Information</u>
          </b>
        </p>
        <p className="mb-3">
          <u>Personal Information Collected</u>
        </p>
        <p className="mb-3">
          As described in more detail in{" "}
          <Link className="link-avis text-decoration-none">
            The Types of Information We Collect, And How We Collect Them
          </Link>{" "}
          section of the{" "}
          <Link className="link-avis text-decoration-none">Privacy Notice</Link>
          , we collect the following categories of personal{" "}
          <span className="link-avis text-decoration-none">information</span>:
        </p>
        <p className="mb-3">
          ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Identifiers,</b> such as your name,
          address, phone number, email address, date of birth, passport or other
          government identification information, driver’s license information,
          account information, membership or program ID, or other similar
          identifiers.
        </p>
        <p className="mb-3">
          ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Customer Records,</b> such as
          driver’s license number, fraudulent activity flags, insurance provider
          and coverage information, health information, passport number, debit
          card information, credit card information, bank account information or
          other payment or financial information.
        </p>
        <p className="mb-3">
          ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <b>Protected Classification Characteristics,</b> such as age, gender,
          and relevant disability information for providing adaptive driving
          devices.
        </p>
        <p className="mb-3">
          ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Commercial Information,</b> such as
          information about whether you are part of a corporate or rewards
          program, products or services purchased or considered and your use of
          our services, including reservation details.
        </p>
        <p className="mb-3">
          ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Biometric Information,</b> such as
          facial geometry used solely by our third-party partners for identity
          verification purposes. We do not receive any biometric information
          generated from these processes.
        </p>
        <p className="mb-3">
          ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Internet/Network Information,</b>{" "}
          such as device information, log, and analytics data.
        </p>
        <p className="mb-3">
          ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Geolocation Data,</b> such as
          information about your physical location collected from geolocation
          features on your device or ABG vehicle, including your IP address and
          GPS (e.g. latitude and/or longitude).
        </p>
        <p className="mb-3">
          ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Sensory Information,</b> such as
          pictures and videos you provide us or we record in connection with our
          services or the surveillance of our premises, and audio recordings of
          phone calls between you and us, where permitted by law.
        </p>
        <p className="mb-3">
          ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <b>Professional/Employment Information</b>, including the business or
          organization you are associated with and, where applicable, your title
          with that business or organization and information relating to your
          role with the business or organization
        </p>
        <p className="mb-3">
          ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Other Personal Information,</b> such as your travel or flight
          information, your driving records, claim information, driver behavior
          information and additional information you provide to us directly or
          through a third-party service, including messages you send us through
          our services or make available to us on social media.
        </p>
        <p className="mb-3">
          ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Inferences,</b> including information generated from your use of
          our websites and your driving, vehicle and rental history reflecting
          your preferences.
        </p>
        <p className="mb-3 text-decoration-underline">
          Sources of Personal Information
        </p>
        <p className="mb-3">
          We collect personal information directly from you, from your browser
          or device when you interact with our websites, Apps and other online
          services, from your ABG vehicle, and from our business partners and
          affiliates, ABG licensees, third parties you direct to share
          information with us, and other third-party information providers. For
          representatives of our business customers, vendors, service providers
          and other third parties, we also collect personal information from the
          entity you represent.{" "}
        </p>
        <p className="mb-3 text-decoration-underline">
          Purposes for Collection
        </p>
        <p className="mb-3">
          We collect personal information about you for the purposes described
          in the How Information Is Used section of our Privacy Notice. For
          representatives of our business customers, vendors, service providers
          and other third parties, we also collect your personal information to
          maintain an ongoing relationship between us and the entity you
          represent and to contact you in connection with our relationship with
          the entity you represent.
        </p>
        <p className="mb-3 text-decoration-underline">Sensitive Information</p>
        <p className="mb-3">
          Some of the categories of personal information we collect may be
          classified as “sensitive” under certain U.S. state privacy laws
          (“sensitive information”), including government identifiers (such as
          driver’s license numbers), payment card information, biometric
          information (collected and processed by our service providers),
          precise geolocation data and relevant health information when
          necessary to provide adaptive driving devices. We use this sensitive
          information for the purposes set forth in the How Information Is Used
          section of our Privacy Notice to the extent necessary for the
          operation of our Services, to enter into and perform a contract with
          you, to comply with legal and regulatory requirements, to protect the
          life or physical safety of anyone or as otherwise permissible for our
          own internal purposes consistent with laws.
        </p>
        <p className="mb-3 text-decoration-underline">
          Deidentified Information
        </p>
        <p className="mb-3">
          We may at times receive, or process personal information to create,
          deidentified information that can no longer reasonably be used to
          infer information about, or otherwise be linked to, a particular
          individual or household. Where we maintain deidentified information,
          we will maintain and use the information in deidentified form and not
          attempt to reidentify the information except as required or permitted
          by law.
        </p>
        <p className="mb-3">
          <b>
            <u>
              Personal Information Disclosure, Sale and Use for Targeted
              Advertising
            </u>
          </b>
        </p>
        <p className="mb-3">
          <u>Disclosure</u>
        </p>
        <p className="mb-3">
          As described in more detail in the How Information is Shared section
          of our Privacy Notice, we may disclose the categories of personal
          information identified above to the following categories of third
          parties for various business purposes: our affiliate companies,
          licensees, security providers, service providers, business partners,
          marketing providers and partners, ad networks and advertising
          partners, analytics providers, social networks, other businesses as
          needed to provide our services, and certain third parties where you
          have requested or provided consent, in connection with a corporate
          transaction, or where we are required by law or in connection with
          other legal process.
        </p>
        <p className="mb-3">
          <u>Sale and Targeted Advertising</u>
        </p>
        <p className="mb-3">
          Unless you have exercised your right to opt-out, we have sold or may
          sell in the future, Identifiers (such as your name, email address and
          contact information), Commercial Information (such as products sold or
          considered), Internet/Network Information (such as analytics data),
          and Inferences (generated from your interactions with our services) to
          third parties who may use this information to communicate with you or
          to offer you products and services that may be of interest to you,
          such as services relating to your vehicle rental or moving or
          home-related services.
        </p>
        <p className="mb-3">
          We may also sell or disclose personal information (including
          Identifiers, Commercial Information, Internet/Network Information, and
          Inferences) to certain third-party ad networks, social networks and
          advertising partners to deliver targeted advertising (also known as
          “cross-context behavioral advertising”) and personalized content to
          you on our services, on other sites and services you may use, and
          across other devices you may use, as well as to provide
          advertising-related services such as reporting, attribution,
          analytics, and market research.
        </p>
        <p className="mb-3">
          However, we do not sell the personal information of consumers we know
          to be less than 16 years of age or share such information for targeted
          advertising purposes.
        </p>
        <p className="mb-3">
          Depending on your state of residency and subject to certain legal
          limitations and exceptions, you may be able to limit or opt-out of the
          sale of personal information or the processing of personal information
          for purposes of targeted advertising (as described in the Your Privacy
          Choices section below).
        </p>
        <p className="mb-3">
          <u>Sensitive Information</u>
        </p>
        <p className="mb-5">
          Although sensitive information may be disclosed for a business purpose
          as described above, we do not sell sensitive information, nor do we
          process or otherwise share sensitive information for the purpose of
          targeted advertising. Nonetheless, depending on your state of
          residency and subject to certain legal limitations and exceptions, you
          may be able to limit, or withdraw your consent for, our processing of
          sensitive information (as described in the Your Privacy Choices
          section below), except where the processing of your sensitive
          information is necessary to provide you the services or otherwise
          required by law.
        </p>
        <p className="mb-3">
          <b>
            <u>Your Privacy Choices</u>
          </b>
        </p>
        <p className="mb-3">
          Depending on your state of residency and subject to certain legal
          limitations and exceptions, you may be able to exercise some or all of
          the following rights:
        </p>
        <table
          border="1"
          cellspacing="0"
          cellpadding="0"
          width="0"
          className="tablePrivacy mb-3"
        >
          <tbody>
            <tr>
              <td width="198">
                <p>
                  <b>The Right to Know</b>
                </p>
              </td>
              <td width="480">
                <p>
                  The right to confirm whether we are processing personal
                  information about you, and under California law only, to
                  obtain certain personalized details about the personal
                  information we have collected about you, including:
                </p>
                <ul className="similarCarOpt px-5">
                  <li>The categories of personal information collected;</li>
                  <li>
                    The categories of sources of the personal information;
                  </li>
                  <li>
                    The purposes for which the personal information were
                    collected;
                  </li>
                  <li>
                    The categories of personal information disclosed to third
                    parties (if any), and the categories of recipients to whom
                    this personal information were disclosed;
                  </li>
                  <li>
                    The categories of personal information shared for targeted
                    or cross-context behavioral advertising purposes (if any),
                    and the categories of recipients to whom the personal
                    information were disclosed for these purposes; and
                  </li>
                  <li>
                    The categories of personal information sold (if any) and the
                    categories of third parties to whom the personal information
                    was sold.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td width="198">
                <p>
                  <b>The Right to Access &amp; Portability</b>
                </p>
              </td>
              <td width="480">
                <p>
                  The right to obtain access to the personal information we have
                  collected about you and, where required by law, the right to
                  obtain a copy of the personal information in a portable and,
                  to the extent technically feasible, readily usable format that
                  allows you to transmit the data to another entity without
                  hindrance.
                </p>
              </td>
            </tr>
            <tr>
              <td width="198">
                <p>
                  <b>The Right to Correction</b>
                </p>
              </td>
              <td width="480">
                The right to correct inaccuracies in your personal information,
                taking into account the nature of the personal information and
                the purposes of the processing of the personal information.
              </td>
            </tr>
            <tr>
              <td width="198">
                <p>
                  <b>The Right to Control Over Sensitive Information</b>
                </p>
              </td>
              <td width="480">
                <p>
                  The right to exercise control over our collection and
                  processing of certain sensitive information.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td width="198">
                <b>The Right to Opt-Out of Targeted Advertising</b>
              </td>
              <td width="480">
                <p>
                  The right to direct us not to use or share personal
                  information for certain targeted advertising purposes.
                </p>
              </td>
            </tr>
            <tr>
              <td width="198">
                <b>The Right to Opt-Out of Sales</b>
              </td>
              <td width="480">
                <p>
                  The right to direct us not to sell personal information we
                  have collected about you to third parties.&nbsp;
                </p>
              </td>
            </tr>
            <tr>
              <td width="198">
                <b>The Right to Request Deletion</b>
              </td>
              <td width="480">
                <p>
                  The right to request the deletion of personal information we
                  maintain about you.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mb-5">
          Depending on your state of residency, you may also have the right not
          to receive retaliatory or discriminatory treatment in connection with
          a request to exercise the above rights. In addition, if the exercise
          of these rights limits our ability to process personal information
          (such as in the case of a deletion request), we may no longer be able
          to provide you our products and services or engage with you in the
          same manner.
        </p>
        <p className="mb-3 pt-5" id="your-privacy">
          <b>
            <u>Submitting Privacy Rights Requests</u>
          </b>
        </p>
        <p className="mb-3">
          {" "}
          Please note, when you submit a request to us, that request will only
          be processed with respect to the ABG brand to which you have submitted
          such request.
        </p>
        <p className="mb-3">
          <u>
            To Exercise Your Right to Know, Access, Portability, Correction,
            Opt-Out Rights in Relation to Sensitive Information, or Deletion
          </u>
        </p>
        <p className="mb-3">
          {" "}
          To exercise your right to know, access, portability, control over
          sensitive information, and/or deletion, please submit a request by:
        </p>
        <p className="mb-3">
          For Avis, Budget, Budget Truck, or Payless: Filling out our form by
          clicking here:{" "}
          <Link className="link-avis text-decoration-none">
            U.S. State Resident Rights Request Form
          </Link>
          , or calling 866-284-7669.
        </p>
        <p className="mb-3">
          To exercise your right to correction, please submit a request by
          emailing{" "}
          <Link className="link-avis text-decoration-none">
            profile.updates@avisbudget.com
          </Link>{" "}
          or calling 1-800-352-7900.
        </p>
        <p className="mb-3">
          We will need to verify your identity before processing your request,
          which will generally either require the matching of sufficient
          information you provide us to the information we maintain about you in
          our systems, or the successful log-in to your account (if applicable).
          As a result, in most cases, we require requests to include full name,
          date of birth, address, last four digits of your driver’s license
          number, state of driver’s license issuance, and email address. We may
          at times need to request additional personal information from you,
          taking into consideration our relationship with you and the
          sensitivity of your request.
        </p>
        <p className="mb-3">
          In certain circumstances, we may decline a request to exercise the
          rights described above, particularly where we are unable to verify
          your identity, if the rights of another individual might be violated
          or as otherwise permitted by law.
        </p>
        <p className="mb-3">
          <u>
            To Exercise Opt-Out Rights in Relation to Targeted Advertising or
            Personal Data Sales
          </u>
        </p>
        <p className="mb-3">
          To exercise your opt-outs rights in relation to targeted advertising
          or personal data sales, please submit a request by:
        </p>
        <p className="mb-3">
          For Cookie-Based Sales & Targeted Advertising Opt-Outs: By visiting{" "}
          <Link className="link-avis text-decoration-none">
            www.privacyrights.info
          </Link>{" "}
          or{" "}
          <Link className="link-avis text-decoration-none">
            https://optout.privacyrights.info/?c=1
          </Link>
          , you can also opt out from sales of this type of personal information
          by businesses that participate in the DAA’s CCPA Opt-Out Tool. To make
          opt-out requests related to mobile apps on your device for businesses
          participating in the DAA’s CCPA App-based Opt-Out Tool, you can
          download the appropriate app at{" "}
          <Link className="link-avis text-decoration-none">
            www.youradchoices.com/appchoices
          </Link>
          . In addition, you may follow the other steps set forth in the Your
          Opt-Out Choices section of the Privacy Notice to further exercise
          control over cookies and related technologies. Please note these
          opt-outs are browser specific. You must reset your preference if you
          clear cookies or use a different browser or device.
        </p>
        <p className="mb-3">
          <i>For Avis, Budget, or Payless Non-Cookie-Based Opt-Outs:</i> Filling
          out our form by clicking here:{" "}
          <Link className="link-avis text-decoration-none">
            U.S. State Resident Opt-Out Form
          </Link>
          , or calling 866-284-7669.
        </p>
        <p className="mb-3">
          <i>For Budget Truck Non-Cookie-Based Opt-Outs:</i> Filling out our
          form by clicking here:{" "}
          <Link className="link-avis text-decoration-none">
            U.S. State Resident Opt-Out Form
          </Link>
          , or calling 866-284-7669.
        </p>
        <p className="mb-3">
          <b>
            <u>Appealing Privacy Rights Decisions</u>
          </b>
        </p>
        <p className="mb-5">
          Depending on your state of residency, you may be able to appeal a
          decision we have made in connection with your privacy rights request.
          Please submit all appeals requests by replying to the communication
          resolving your original request or emailing us at{" "}
          <Link className="link-avis text-decoration-none">
            ABGprivacy@avisbudget.com.
          </Link>
        </p>
        <p className="mb-3">
          <b>
            <u>Authorized Agent</u>
          </b>
        </p>
        <p className="mb-5">
          In certain circumstances, you are permitted to use an authorized agent
          to submit requests on your behalf through the designated methods set
          forth above where we can verify the authorized agent’s authority to
          act on your behalf. In order to verify the authorized agent’s
          authority, we generally require evidence of either (i) a valid power
          of attorney or (ii) a signed letter containing your name and contact
          information, the name and contact information of the authorized agent,
          and a statement of authorization for the request. Depending on the
          evidence provided and your state of residency, we may still need to
          separately reach out to you to confirm the authorized agent has
          permission to act on your behalf and to verify your identity in
          connection with the request.
        </p>
        <p className="mb-3">
          <b>
            <u>California Notice of Financial Incentive</u>
          </b>
        </p>
        <p className="mb-3">
          The following disclosures only apply to residents of the State of
          California.
        </p>
        <p className="mb-3">
          We may choose to provide programs and other offerings intended to
          provide benefits to eligible participants that qualify as financial
          incentives under certain privacy laws. For example, the financial
          incentives we may choose to make available to interested individuals
          may include loyalty or membership programs, as well as discounts,
          coupons and other special offers for engaging with us.
        </p>
        <p className="mb-3">
          To obtain access to certain of these programs and other offerings, we
          may ask to collect or share an interested individual’s personal
          information, including name, contact information, and purchase
          history. We have determined that the value of any of these programs
          and other offerings are reasonably related to the value of the
          personal information we would receive and otherwise process in
          connection with these programs and offerings, based on our reasonable
          but sole determination. We estimate the value of the personal
          information we would receive and otherwise process in connection with
          these programs and offerings by considering the expense we would incur
          in collecting and processing the personal information, as well as the
          expenses related to facilitating the program or offering.
        </p>
        <p className="mb-3">
          The terms applicable to each program and other offering will be
          provided at the time an eligible individual is offered an opportunity
          to participate. Interested individuals can opt-in to these financial
          incentives by following the instructions presented at the time the
          offer is made. Participating individuals may withdraw from our
          programs and other offerings at any time by following the instructions
          provided in connection with each offering or emailing us at{" "}
          <Link className="link-avis text-decoration-none">
            ABGprivacy@avisbudget.com
          </Link>
          .
        </p>
        <div className="topContainer">
          <div className="top d-xl-block d-none" onClick={handleTopScroll}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/icon/arrow.png`}
              width={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPrivacy;
