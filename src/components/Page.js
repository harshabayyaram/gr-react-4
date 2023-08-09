import React from "react";
import Card from "./Card";
import profile1 from "../images/profile.jpg";
import profile2 from "../images/profile2.jpg";

function Page() {
  return (
    <div className="flex">
      <Card
        designation={[ "Film Director","Film producer"]}
        fee="$14/hour"
        name="Jeffrey Abrams"
        age = "51"
        location="New York, United States"
        bio="Abrams was born in newyork city and raised in los angeles"
        profile={profile1}
        lastDate = "2023-08-08T20:11:00"
      />

      <Card
        designation={["Actor", "Film Director"]}
        fee="$9/hour"
        name="Baltasar kormakur"
        age = "52"
        location="Reykjavik, Iceland"
        bio="Icelandic actor, theater and film director, and film producer."
        profile={profile2}
        lastDate = "2023-08-09T20:00:00"
      />
    </div>
  );
}

export default Page;
