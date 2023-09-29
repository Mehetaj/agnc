import Banner from "@/app/Components/Privacy/Banner/Banner";
import ChangeCookiePolicy from "@/app/Components/Privacy/ChangeCookiePolicy/ChangeCookiePolicy";
import ChangeToThisPolicy from "@/app/Components/Privacy/ChangeTothisPolicy/ChangeToThisPolicy";
import Info_we_collect from "@/app/Components/Privacy/Info_we_collect/Info_we_collect";
import Privacy_intro from "@/app/Components/Privacy/Intro/Privacy_intro";
import ManagingCookies from "@/app/Components/Privacy/ManagingCookeis/ManagingCookies";
import PrivacyContactUs from "@/app/Components/Privacy/PrivacyContactUs/PrivacyContactUs";
import Table_of_content from "@/app/Components/Privacy/Table_of_Content/Table_of_content";
import ThirdPirtyWebService from "@/app/Components/Privacy/ThirdPartyWebsitesAndServices/ThirdPirtyWebService";
import TypeOfCookies from "@/app/Components/Privacy/TypeOfCookies/TypeOfCookies";
import WhatAreCookies from "@/app/Components/Privacy/WhatsAreCookies/WhatAreCookies";
import ChildrenPrivacy from "@/app/Components/Privacy/childred_privacy/ChildrenPrivacy";
import CookingTracking from "@/app/Components/Privacy/cookies_and_tracking_tech/CookingTracking";
import Information_sharing from "@/app/Components/Privacy/information_sharing/Information_sharing";
import Security from "@/app/Components/Privacy/security/Security";
import Use_of_information from "@/app/Components/Privacy/use_of_information/Use_of_information";
import YourChoice from "@/app/Components/Privacy/you_choice/yourChoice";
import Component from "@/app/Shared/Component/Component";
import React from "react";

const Privacy_policy = () => {
  //className="text-[32px] font-bold my-6"

  return (
    <div>
        <Banner />
      <div className="bg-[#F7FAFF] dark:bg-[#061126]">
        <Component>
          <div className="flex gap-20 mt-20  mx-auto px-10">
            <div className="text-[#2D3D59] dark:text-white w-full max-w-[850px] text-[20px]">
              <Privacy_intro />
              <Info_we_collect />
              <Use_of_information />
              <Information_sharing />
              <Security />
              <CookingTracking />
              <YourChoice />
              <ChildrenPrivacy />
              <ChangeToThisPolicy />
              <WhatAreCookies />
              <TypeOfCookies />
              <ManagingCookies />
              <ThirdPirtyWebService />
              <ChangeCookiePolicy />
              <PrivacyContactUs />
            </div>
            <div>
              <Table_of_content />
            </div>
          </div>
        </Component>
      </div>
    </div>
  );
};

export default Privacy_policy;
