import React from "react";
import Card from "../../common/card/Card";

const ContentAbout = () => {
  return (
    <div className="carsContainer">
      <div className="container py-5 px-3">
        <h1 className="mb-3 text-black text-up">Company Overview</h1>
        <p className="text-avis mb-5">
          Avis Car Rental and its subsidiaries operate one of the world's
          best-known car rental brands with approximately 5,500 locations in
          more than 165 countries. Avis has a long history of innovation in the
          car rental industry and is one of the world's top brands for customer
          loyalty. Avis is owned by Avis Budget Group, Inc. (NASDAQ: CAR), which
          operates and licenses the brand throughout the world.
        </p>
        <h1 className="mb-3 text-black text-up">Quick History</h1>
        <p className="text-avis mb-1">
          Founded in 1946 by Warren Avis (who sold his interest in 1954), Avis
          was the first company to rent cars from airport locations. The company
          grew rapidly during the 1950's through franchised and corporate-owned
          expansion. In 1963, Avis introduced the award-winning "We try harder®"
          campaign and the tagline remains the company's rallying cry even
          today. Ten years later, Avis launched its innovative Wizard system,
          the company's proprietary reservation technology. Avis changed
          ownership multiple times in the 70's and 80's, becoming employee-owned
          in 1987.
        </p>
        <p className="text-avis mb-5">
          That same year, Avis introduced the Roving Rapid Return, a handheld
          computer terminal allowing customers to bypass the Avis counter. In
          1996, HFS Incorporated acquired Avis, which was then spun off as a
          separate public company, all but the franchising rights, Wizard
          system, and reservation operations. In 2000, the company introduced
          Avis Interactive, the first Internet-based reporting system for
          commercial accounts in the car rental industry, which was
          significantly enhanced and re-launched in 2006. In March 2001, Cendant
          Corporation purchased all of the outstanding shares of Avis Group
          Holdings and later that year moved its world headquarters to
          Parsippany, NJ. In 2006, Cendant Corp. separated into four independent
          companies: Realogy, Wyndham Worldwide, Travelport and Avis Budget
          Group, Inc., which is now the parent company of Avis Car Rental. In
          2011, Avis Budget Group acquires Avis Europe plc. The transaction
          re-unites Avis Budget Group with its licensee for Europe, the Middle
          East, Africa and Asia.
        </p>
      </div>
    </div>
  );
};

export default ContentAbout;
