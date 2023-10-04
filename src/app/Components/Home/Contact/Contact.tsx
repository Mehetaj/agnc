import Image from "next/image";
import hello_text from "../../../../asset/hello.png";
import Component from "@/app/Shared/Component/Component";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-[#226CE5] dark:bg-[#10223F]">
      <div id="contact_component">
        <Component>
          <div className="py-20 my-16 h-full items-center text-white lg:flex justify-between">
            <div>
              <Image className="mb-8" src={hello_text} alt="" />

              <h1 className="text-[48px] font-bold ">
                Have a project to work <br className="hidden lg:flex" /> with?
                Let’s talk!
              </h1>
            </div>

            <div>
              <p className="text-[20px] my-6">
                We’re a team of creatives who are excited about unique{" "}
                <br className="hidden lg:flex" /> ideas and help fin-tech
                companies to create amazing <br className="hidden lg:flex" />{" "}
                identity by crafting top-notch UI/UX.
              </p>
              <Link
                className="bg-white dark:bg-[#10223F] dark:text-white px-6 py-3 w-full lg:w-[150px] text-[#226CE5] font-bold  border border-blue-600 rounded-md"
                href="contact"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Component>
      </div>
    </div>
  );
};

export default Contact;
