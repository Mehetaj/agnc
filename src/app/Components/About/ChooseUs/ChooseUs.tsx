import Title from "@/app/Shared/Title/Title";
import background from "../../../../asset/Vector.png";
import Image from "next/image";
import icon1 from "../../../../asset/icon/Component 1.png";
import icon2 from "../../../../asset/icon/Component 2.png";
import icon3 from "../../../../asset/icon/Component 3.png";

const ChooseUs = () => {

    const componentStyle = {
        backgroundColor: '#EBF2FF',
        padding: '40px',
        borderRadius: '5px',
    }

    return (
        <div className="px mx-auto">
            <div>
                <Title >WHY CHOOSE US</Title>
                <h1 className="text-[48px] font-bold">
                    we provide best quality services
                </h1>
            </div>
            {/* create div with four column and three row as card */}
            <div style={{ marginTop: '30px' }} className='grid grid-cols-3 gap-4'>
                <div style={componentStyle} className='flex flex-col items-start'>

                    <Image src={icon1} alt='' />
                    <h1 className='text-[26px] font-bold mt-3'>Fast Development</h1>
                    <p
                        style={{ width: '95%', alignContent: 'justify', fontSize: '17px', marginTop: '30px' }}
                    >
                        World-class user experiences with pixel perfect user interface designs for your digital products.
                    </p>
                </div>
                <div style={componentStyle} className='flex flex-col items-start'>

                    <Image src={icon2} alt='' />
                    <h1 className='text-[26px] font-bold mt-3'>Full Flaxibility</h1>
                    <p
                        style={{ width: '95%', alignContent: 'justify', fontSize: '17px', marginTop: '30px' }}
                    >
                        World-class user experiences with pixel perfect user interface designs for your digital products.
                    </p>
                </div>
                <div style={componentStyle} className='flex flex-col items-start'>

                    <Image src={icon3} alt='' />
                    <h1 className='text-[26px] font-bold mt-3'>Modern Design</h1>
                    <p
                        style={{ width: '95%', alignContent: 'justify', fontSize: '17px', marginTop: '30px' }}
                    >
                        World-class user experiences with pixel perfect user interface designs for your digital products.
                    </p>
                </div>
            </div>
        </div >
    );
};


export default ChooseUs;