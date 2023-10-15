import './index.css'

import hero1 from '@assets/about-us/hero-1.jpg';
import hero2 from '@assets/about-us/hero-2.jpg';
import hero3 from '@assets/about-us/hero-3.jpg';
import { Footer } from '@renderer/components/Footer';
import { Localized } from '@renderer/components/Localized';
import { Header } from '@renderer/components/NewHeader';



export function Page() {
    return <div id="scrollRoot" className='h-screen snap-y snap-proximity overflow-y-scroll scroll-smooth'>
        <div className='snap-start'>
            <Header active='about' type='black' transparent={false} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 min-h-[calc(100vh-6rem)] bg-cover bg-center snap-end' style={{ backgroundImage: 'url(' + hero1 + ')' }}>
            <div className='backdrop-blur backdrop-brightness-50 text-white p-8 flex flex-col'>
                <h1 className='uppercase text-6xl text-white font-bold'><Localized text='about-us.vision.title' /></h1>
                <div className='text-sm flex flex-col gap-2 mt-8 text-primary justify-center h-full'>
                    <span><Localized text='about-us.vision.first-text' /></span>
                    <span><Localized text='about-us.vision.second-text' /></span>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 min-h-screen bg-cover bg-center snap-start snap-always' style={{ backgroundImage: 'url(' + hero2 + ')' }}>
            <div className='backdrop-blur flex flex-col min-h-screen backdrop-brightness-50 text-white p-8 col-start-2'>
                <h1 className='uppercase text-6xl text-white font-bold'><Localized text='about-us.mission.title' /></h1>
                <div className='text-sm flex flex-col justify-center gap-2 text-primary grow p-4'>
                    <span><Localized text='about-us.mission' /></span>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 min-h-screen bg-cover bg-center snap-start snap-always' style={{ backgroundImage: 'url(' + hero3 + ')' }}>
            <div className='flex flex-col min-h-screen backdrop-blur backdrop-brightness-50 text-white p-8'>
                <h1 className='uppercase text-6xl text-white font-bold'><Localized text='about-us.goal.title' /></h1>
                <div className='text-sm flex flex-col justify-center gap-2 text-primary grow py-4'>
                    <span><Localized text='about-us.goal' /></span>
                </div>
            </div>
        </div>
        <div className='snap-start'>
            <Footer />
        </div>
    </div>
}