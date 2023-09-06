import Banner from "@/app/Components/Career/Banner/Banner";
import Career_intro from "@/app/Components/Career/Career_intro/Career_intro";
import Jobs from "@/app/Components/Career/Jobs/Jobs";
import Component from "@/app/Shared/Component/Component";
import React from "react";

const page = () => {
  return (
    <div>
      <Component>
        <Banner />
        <Career_intro />
        <Jobs />
      </Component>
    </div>
  );
};

export default page;
