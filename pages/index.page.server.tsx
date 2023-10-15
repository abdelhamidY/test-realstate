import './index.css'

import logoIcon from '@assets/logos/logo-vertical-white.svg';
import hero from '@assets/a-preview.webp';
import { Header } from '@renderer/components/NewHeader';
import { Localized } from '@renderer/components/Localized';
import { Footer } from '@renderer/components/Footer';

export function Page() {
    return <div className='snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden scroll-smooth' id="scrollRoot">
        <div className='fixed top-0 z-10 left-0 right-0'>
            <Header active='home' type='black' transparent hideLogo />
        </div>
        <section className='h-screen grid grid-rows-1 grid-cols-1 snap-start snap-always' data-header-type='black' data-header-hide-logo="true">
            <div className='hidden md:grid row-start-1 row-span-1 col-start-1 md:grid-cols-2 text-white bg-primary'>
                <div className='relative row-start-1 col-start-1 flex flex-col'>
                    <img src={hero} alt='hero' className='object-cover w-full h-full brightness-90' />
                    <div className='absolute h-full w-full flex justify-center items-center'>
                        <img src={logoIcon} alt='logo' className='w-1/2 animate-[fade-in_1s_ease]' style={{ 'filter': 'drop-shadow(0px 4px 4px rgba(0,0,0,.95))' }} />
                    </div>
                </div>
                <div className='text-end hidden md:grid grid-rows-[1fr_50%_1fr] px-8 shadow-md'>
                    <div className='ml-auto md:w-3/4 mt-auto mb-16 row-start-2 animate-[slide-left_1s_ease-in-out]'>
                        <h1 className='text-6xl font-bold uppercase text-white/90 italic'>See the story in your building.</h1>
                    </div>
                    <div className='hidden md:block row-start-3 text-sm animate-[pop-in_0.5s_ease-in-out_1s_both] text-white/80'>
                        <h3><Localized text='home.first-section.small'/></h3>
                        <h4><Localized text='home.first-section.small2'/></h4>
                    </div>
                </div>
            </div>

            <div className='grid h-screen grid-cols-1 grid-rows-1 md:hidden'>
                <div className='col-start-1 row-start-1 '>
                    <img src={hero} alt='hero' className='object-cover w-full h-full' />
                </div>
                <div className='col-start-1 row-start-1 self-center p-16'>
                    <img src={logoIcon} alt='logo' style={{ 'filter': 'drop-shadow(0px 4px 4px rgba(0,0,0,.95));' }} />
                    <div className='relative mt-16 grid grid-rows-1 grid-cols-1'>
                        <h1 className='row-start-1 col-start-1 text-4xl sm:text-6xl font-bold uppercase text-white/90 italic animate-[slide-up_1s_ease-in-out]'>See the story in your building.</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className='h-screen grid grid-cols-1 grid-rows-1 snap-start snap-always' data-header-type='white'>
            <div className='row-start-1 col-start-1 pointer-events-none brightness-75 -z-10 bg-black' data-role="animated-bg" data-bg-url='/bg-1.webp'></div>
            <div className='row-start-1 col-start-1 text-white flex h-full justify-center items-center text-4xl'>
                <span className='p-8 md:p-0 md:w-1/2 text-center font-bold italic'>
                    <Localized text='home.second-section.hero'/>
                </span>

            </div>
        </section>
        <section className="h-screen flex snap-start snap-always" data-header-type="black" data-header-blur="true">
            <div className='my-auto w-full'>
                <h2 className='text-4xl text-primary font-bold flex flex-col md:flex-row justify-center items-center'>
                    <span><Localized text='numbers.title.golden'/></span>
                    <span className='md:ml-2 text-neutral-800'> <Localized text='numbers.title.black'/></span>
                </h2>
                <div className="grid grid-rows-3 md:grid-cols-[1fr_400px_1fr] md:grid-rows-1 mt-16">
                    <div className='flex flex-col items-center gap-4'>
                        <span className='font-bold text-primary text-7xl md:text-8xl' data-animate-start="0" data-animate-end="6">6</span>
                        <span className='font-bold text-neutral-500'><Localized text={'numbers.projects'} /></span>
                    </div>
                    <div className='flex flex-col items-center gap-4'>

                        <span className='font-bold text-primary text-7xl md:text-8xl'>
                            €
                            <span data-round="2" data-animate-start="0" data-animate-end="7.11">7.11</span>
                            m
                        </span>

                        <span className='font-bold text-neutral-500'><Localized text={'numbers.invested'} /></span>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <span className="font-bold text-primary text-7xl md:text-8xl" data-animate-start="0" data-animate-end="24">24</span>
                        <span className='font-bold text-neutral-500'><Localized text={'numbers.apartments'} /></span>
                    </div>
                </div>
            </div>
        </section>
        <section className='snap-start' data-header-type="white" data-header-hide-logo="true" >
            <Footer/>
        </section>
    </div>
}