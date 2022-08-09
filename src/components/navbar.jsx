import React, { useEffect, useState } from 'react';

const Navbar = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.addEventListener('scroll', onScroll, { passive: true });
        return() => window.removeEventListener('scroll', onScroll);
    }, [])

    return(
        <div className={`fixed top-0 w-full z-20`}>
            <div
                className={`${offset > 20 ? 'h-0 py-0 px-0 opacity-0' : 'h-auto px-4 py-2 opacity-100'} overflow-hidden duration-100 bg-gray-900 text-center text-white text-sm font-medium text-gray-400`}><a href="https://swatisahay.com" rel="noreferrer" target="_blank">Visit our online store for exciting <span className='text-teal-400'>offers</span>.</a></div>
            <div className={`duration-100 backdrop-blur-md bg-black/30`}>
                <div className='max-w-7xl mx-auto text-white p-4 flex gap-4 justify-between items-center'>
                    <div className='text-4xl uppercase font-thin'>SWAZZEL</div>
                    <div className='hidden md:flex gap-12'>
                        <a href="https://swatisahay.com" target="_blank" rel="noreferrer" className="text-md font-light hover:opacity-80">Swati Sahay</a>
                        <a href="https://chicankari.com" target="_blank" rel="noreferrer" className="text-md font-light hover:opacity-80">Chicankari</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;