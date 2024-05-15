import React from "react";
import Card from "../../common/card/Card";

const Info = () => {
  return (
    <div className="carsContainer">
      <div className="container py-5 px-4">
        <div className="row py-4">
          <Card
            title="Mission and Values"
            description="We will lead our industry by defining service excellence and building unmatched customer loyalty. Read more about Avis' mission & values."
            link="about-avis/company-information/avis-mission-and-values"
          />
          <Card
            title="Corporate Facts"
            description="Avis Rent A Car System, LLC & its subsidiaries operate one of the world's best-known car rental brands with 5,000+ locations in more than 165 countries."
            link="about-avis/company-information/corporate-facts"
          />
          <Card
            title="Historical Chronology"
            description="Find out more about Avis with this timeline of important events in the history of our company from its founding in 1946 through the present."
            link="about-avis/company-information/historical-chronology"
          />
          <Card
            title="Awards and Recognition"
            description="Year after year, Avis is recognized with high honors from satisfied customers, consumer organizations, and industry associations. Find out more."
            link="about-avis/company-information/awards-and-recognition"
          />
          <Card
            title="Corporate Responsibility"
            description="As an international corporation, and as a local business in the neighborhoods in which we operate, Avis strives to be a strong community leader & role model."
            link="about-avis/company-information/corporate-responsibility"
          />
          <Card
            title="Executive Bios"
            description="Learn more about Avis' leadership and officers with executive bios of our management team."
            link="about-avis/company-information/executive-bios"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
