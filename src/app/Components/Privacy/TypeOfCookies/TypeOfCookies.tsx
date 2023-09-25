import React from "react";

const TypeOfCookies = () => {
  return (
    <div>
      <h1 className="text-[32px] font-bold my-6">Types of Cookies We Use</h1>
      <p className="my-6">
        Essential Cookies: These cookies are necessary for the proper
        functioning of our website and cannot be disabled in our systems. They
        are usually set in response to your actions, such as setting your
        privacy preferences, logging in, or filling in forms. You can set your
        browser to block or alert you about these cookies, but some parts of the
        website may not function properly.
      </p>
      <p>
        Analytics Cookies: We use analytics cookies to collect information about
        how visitors use our website, such as the pages they visit, the time
        spent on each page, and any errors encountered. This data helps us
        improve the performance and usability of our website. The information
        collected is aggregated and anonymous.
      </p>
      <p className="mt-6">
        Advertising Cookies: These cookies are used to deliver personalized
        advertisements based on your browsing behavior and interests. They are
        placed by third-party advertising networks with our permission. These
        cookies remember that you have visited our website and may share this
        information with other organizations, such as advertisers.
      </p>
    </div>
  );
};

export default TypeOfCookies;
