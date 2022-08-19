import React from 'react'

const Footer = () => {
    return(
        <div className='bg-black'>
            <div className='max-w-7xl mx-auto p-4'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center text-white py-10'>
                    <div className='mb-12 md:mb-0'>
                        <div className='text-4xl uppercase font-thin'>SWAZZEL</div>
                        <p className='text-xs uppercase'>Clothing line from the looms of Swazzel.</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 md:gap-4'>
                        <div className=''>
                            <a href="https://chicankari.com" target="_blank" rel="noreferrer" className="px-10 pb-3 pt-4 border text-md hover:bg-white hover:bg-opacity-10 duration-200">Visit Chicankari Store</a>
                        </div>
                        <div className=''>
                            <a href="https://swatisahay.com" target="_blank" rel="noreferrer" className="px-10 pb-3 pt-4 border text-md hover:bg-white hover:bg-opacity-10 duration-200">Visit label by Swati Sahay</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;