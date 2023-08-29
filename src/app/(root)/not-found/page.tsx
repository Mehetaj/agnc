import Image from 'next/image';
import notfound from '../../../asset/not-found.png'
import Button from '../../Shared/Button/Button';

const NotFound = () => {

   
    return (
        <div style={{ marginTop: ' 100px', marginBottom: '100px' }} className='flex mt-16 justify-between items-center'>
            <div>
                <h1 className='text-[48px] font-bold my-4'>Page Not Found</h1>
                <p className='text-[18px]'>The page you are looking for was removed, <br></br> renamed or might never existed.</p>

                <Button>Go Back</Button>
            </div>
            <Image className='h-[500px] object-contain' src={notfound} alt='' />
        </div>
    );
};

export default NotFound;