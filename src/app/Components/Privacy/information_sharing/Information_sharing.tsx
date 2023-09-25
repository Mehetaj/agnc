import React from "react";

const Information_sharing = () => {
  return (
    <div>
      <h1 className="text-[32px] font-bold my-6">Information Sharing</h1>
      <h1>
        We understand the importance of keeping your personal information
        confidential. We do not sell, trade, or rent your personal information
        to third parties without your consent. However, we may share your
        information in the following circumstances:
      </h1>

      <ul className='my-2 ml-7 list-disc'>
        <li>
          With trusted third-party service providers who assist us in operating
          our website and delivering our services. These providers have agreed
          to keep your information confidential.
        </li>
        <li>
          To comply with legal requirements, enforce our policies, or protect
          our rights, property, or safety.
        </li>
        <li>
          In the event of a merger, acquisition, or sale of all or a portion of
          our assets, your information may be transferred to the acquiring
          entity.
        </li>
      </ul>
    </div>
  );
};

export default Information_sharing;
