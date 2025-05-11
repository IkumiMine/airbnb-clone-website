import Card from '../../components/Card';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Home = ({ properties, filterModal, loginModal, setCurrentPath }) => {  
    
    // Get current url path name
    let location = useLocation();
    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname, setCurrentPath]);

    return (
        <div className={`mt-[2rem] ${filterModal || loginModal ? 'overflow-hidden h-[calc(100vh-187px)]' : ''}`}>
            <Card properties={properties} />
            <div className='flex flex-col justify-between items-center pt-[3rem]'>
                <p className='text-lg font-semibold tracking-tight text-font-black mb-[1rem]'>Continue exploring castles</p>
                <div className='text-md font-semibold tracking-tight text-white bg-black rounded-[0.5rem] px-[1rem] py-[0.7rem] cursor-pointer'>Show more</div>
            </div>
        </div>
    )
}

export default Home;