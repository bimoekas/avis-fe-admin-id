import React from "react";
import Card from "../../common/card/Card";

const ContentFraudScam = () => {
  return (
    <div className="carsContainer">
      <div className="container py-5 px-4">
        <div className="row">
          <Card
            title="Faq"
            description="Here you will find answers to common questions about shipping, payment, returns, and more. Discover the information you need for a smooth shopping experience on our site."
            link="https://faq.avis.co.uk/"
          />
          <Card
            title="Terms and Condition"
            description="Read our terms and conditions to understand your rights and obligations when using our site. Discover information about payments, shipping, returns, privacy policy, and site usage terms. By reading our terms and conditions, you agree to comply with all rules established for the use of our site."
            link="https://www.avis.co.uk/TermsAndCondition"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentFraudScam;
