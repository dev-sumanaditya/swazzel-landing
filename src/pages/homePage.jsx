import React from 'react'
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const HomePage = () => {
    return(
        <div>
            <Navbar />
            <div className='min-h-screen bg-cover bg-center bg-no-repeat' style={{background: `url('${process.env.PUBLIC_URL}/images/bg1.jpg')`}}>
                <div className='h-full pt-32 flex flex-col-reverse lg:flex-row max-w-7xl mx-auto p-4 pb-20 lg:pb-0'>
                    <div className='w-full lg:w-1/2 pt-10 lg:pt-24'>
                        <div className='text-white text-center lg:text-left'>
                            <h1 className='text-xl md:text-3xl lg:text-4xl font-extralight'>From the looms of<br/>
                                <span className='text-6xl md:text-8xl lg:text-9xl text-animated-bg font-bold'>SWAZZEL</span>
                            </h1>
                            <p className='text-base lg:text-lg text-gray-400 w-full lg:w-3/4'>Perfectly handcrafted fashion for the new generation of leaders, learners & explorers.</p>
                            <div className='mt-10'>
                                <a href="https://swatisahay.com" target="_blank" rel="noreferrer" className="px-10 py-3 border text-xl hover:bg-white hover:bg-opacity-10 duration-200">Visit Store</a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <img src={`${process.env.PUBLIC_URL}/images/1c.png`} className="w-2/3 md:w-1/2 lg:w-full mx-auto select-none" alt="woman in black derss" />
                    </div>
                </div>
            </div>

            <div className='bg-black/90'>
                <div class="m-scroll relative h-12 overflow-hidden">
                    <div class="m-scroll__title py-2 border-t border-b border-white/50 flex items-center justify-start whitespace-nowrap absolute top-0 left-0">
                        <div className='flex scroll-text text-white/40 gap-32'>
                            {
                                ['Fashion','Trend','Style','Latest', 'buzz', 'craze', 'wardrobe', 'glow','collection', 'winter', 'summer', 'classic', 'bold', 'elegant', 'forward', 'glam', 'costume', 'Fabric', 'Casual', 'basic'].map((item, index) => {
                                    return(
                                        <div className='text-lg font-black uppercase tracking-widest' key={index}>{item}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='py-8 md:py-16'>
                    <div className='max-w-7xl mx-auto p-4'>
                        <h3 className='text-2xl font-bold text-white/40 uppercase mb-8'>Our Brands</h3>
                        <div className='flex flex-col-reverse md:flex-row gap-14'>
                            <div className='w-full md:w-1/2'>
                                <h1 className='text-4xl font-light text-white'>Label by <span className='text-orange-300 uppercase'>Swati Sahay.</span></h1>
                                <p className='text-white/80 mt-4 text-sm md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in nulla. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Mauris rhoncus aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes. Mattis nunc sed blandit libero volutpat sed cras ornare. Cursus sit amet dictum sit. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque.</p>
                                <div className='mt-10'>
                                    <a href="https://swatisahay.com" target="_blank" rel="noreferrer" className="px-10 py-3 border text-white text-xl hover:bg-white hover:bg-opacity-10 duration-200">Visit Store</a>
                                </div>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <img src={`${process.env.PUBLIC_URL}/images/swati-sahay.png`} className="w-full" alt="swati sahay website screengrab" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-10 bg-black/60'></div>

            <div className='bg-black/40'>
                <div className='max-w-7xl mx-auto py-10 md:py-16 px-4'>
                    <h3 className='text-2xl font-bold text-black/40 uppercase mb-8'>Our Brands</h3>
                    <div className='flex flex-col-reverse md:flex-row gap-14'>
                        <div className='w-full md:w-1/2'>
                            <h1 className='text-4xl font-base text-white'><span className='text-gray-800 uppercase'>Chicankari.</span></h1>
                            <p className='text-black/80 mt-4 text-sm md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in nulla. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Mauris rhoncus aenean vel elit. Sociis natoque penatibus et magnis dis parturient montes. Mattis nunc sed blandit libero volutpat sed cras ornare. Cursus sit amet dictum sit. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque.</p>
                            <div className='mt-10'>
                                <a href="https://chicankari.com" target="_blank" rel="noreferrer" className="px-10 py-3 border border-black text-xl hover:bg-white hover:bg-opacity-10 duration-200">Visit Store</a>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img src={`${process.env.PUBLIC_URL}/images/chicankari.png`} className="w-full" alt="chicankari website screengrab" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-10 bg-black/60'></div>

            <Footer />
        </div>
    )
}

export default HomePage;