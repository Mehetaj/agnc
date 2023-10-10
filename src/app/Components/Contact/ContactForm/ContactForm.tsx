import Button from "@/app/Shared/Button/Button";
import Title from "@/app/Shared/Title/Title";
import icon1 from '../../../../asset/social/Icon 1.png'
import icon2 from '../../../../asset/social/Icon 2.png'
import icon3 from '../../../../asset/social/Icon 3.png'
import icon4 from '../../../../asset/social/Icon 4.png'
import Image from "next/image";


const ContactForm = () => {


    return (
        <>

            <div className="mt-20 mb-40">

                <Title>Say Hi👋</Title>
                <h1 className="font-bold text-[48px]">Send us a Message</h1>

                <div className="mt-10 flex items-start gap-10 ">
                    <form className=" w-[687px] p-12 bg-[#bbddef1a]">
                        <div className="mb-6">
                            <label className="block mb-5 text-sm font-medium text-gray-900 dark:text-white">Name*</label>
                            <input type="text" className="form-control h-[60px] input w-[567px] bg-[#d6e6ffa5]" required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-5 text-sm font-medium text-gray-900 dark:text-white">Email*</label>
                            <input type="email" className="form-control h-[60px] input w-[567px] bg-[#d6e6ffa5]" required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-5 text-sm font-medium text-gray-900 dark:text-white">Company (Optional)</label>
                            <input type="text" className="form-control h-[60px] input w-[567px] bg-[#d6e6ffa5]" required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-5 text-sm font-medium text-gray-900 dark:text-white">Message*</label>
                            <textarea className="form-control  input w-[567px] h-[160px] bg-[#d6e6ffa5]" required />
                        </div>
                        <Button>
                            <button>Send Message</button>
                        </Button>
                    </form>
                    <div className="w-[481px]">
                        <h1 className="text-[24px] font-bold ">Email</h1>
                        <p className="mt-4 mb-8 text-[20px]">0199999999999</p>
                        <hr />
                        <h1 className="text-[24px] font-bold mt-8">Phone</h1>
                        <p className="mt-4 mb-8 text-[20px]">hello@Bytezenith.com</p>
                        <hr />
                        <h1 className="text-[24px] font-bold mt-8">Address</h1>
                        <p className="mt-4 mb-8 text-[20px]">House 336,Road 02, Block-D <br /> Bashundhara R/A, Dhaka 1229</p>
                        <hr />
                        <h1 className="text-[24px] font-bold mt-8">Opening</h1>
                        <p className="mt-4 mb-8 text-[20px]">10am - 6pm, Friday Close</p>
                        <hr />
                        <h1 className="text-[24px] font-bold mt-8">Follow us</h1>
                        <div className="flex gap-9 mt-9">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                            <img src={icon3} alt="" />
                            <img src={icon4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;