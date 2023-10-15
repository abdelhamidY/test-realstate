
import logo from '@assets/logos/logo-full-black.png';
import logoWhite from '@assets/logos/logo-full-white.png';
import globeIcon from '@assets/globe.svg';
import { useLang } from '@renderer/useLang';
import { Localized } from './Localized';
import { usePageContext } from '@renderer/usePageContext';
import { PageContextBuiltIn } from 'vite-plugin-ssr/types';

export interface HeaderProps {
    active: string;
    type?: 'black' | 'white';
    transparent: boolean;
    hideLogo?: boolean;
    blur?: boolean;
}

export function Header({ active, type, transparent = false, hideLogo = false, blur = false }: HeaderProps) {

    const style = (active: boolean) => active ? "bg-secondary font-bold rounded-full px-4 group-data-[type='white']:text-black" : "";
    const bg = transparent ? 'bg-transparent' : 'bg-base-white';
    const lang = useLang();
    const page = usePageContext() as PageContextBuiltIn | undefined;

    const otherLang = lang === 'it' ? 'en' : 'it';
    const otherPage = '/' + otherLang + page?.urlPathname;

    return <header data-type={type} data-hide-logo={hideLogo} data-blur={blur} className={'transition-colors flex group h-24 px-8 md:px-16 items-center justify-between data-[blur="true"]:backdrop-blur-sm ' + bg}>
        <div className='h-full group-data-[hide-logo="true"]:opacity-0 transition-opacity'>
            <img src={logo} alt="logo" className='group-data-[type="black"]:block hidden py-6 h-full object-contain' />
            <img src={logoWhite} alt="logo" className='group-data-[type="white"]:block hidden py-6 h-full object-contain' />
        </div>
        <div className='hidden md:flex gap-4 uppercase group-data-[type="white"]:text-white'>
            <a href={'/' + lang + ''} className={style(active === 'home') + ' transition-colors w-max duration-150'}>Home</a>
            <a href={'/' + lang + '/about'} className={style(active === 'about') + ' transition-colors w-max duration-150'}><Localized text='menu.about-us' /></a>
            <a href={'/' + lang + '/projects'} className={style(active === 'projects') + ' transition-colors w-max duration-150'}><Localized text='menu.projects' /></a>
            <a href='#footer' data-role="scroll-btn" data-target="#footer" className={style(active === 'contact-us') + ' transition-colors w-max duration-150'}><Localized text='menu.contact-us' /></a>
            <div className="flex gap-2 items-center">
                <img className='w-5 h-5 group-data-[type="black"]:brightness-0 transition-[filter]' src={globeIcon} alt='globe' />
                <a href={otherPage}><Localized text={'lang'} /></a>
            </div>
        </div>
        <div className='group-data-[type="white"]:text-white md:hidden'>
            <a data-role='menu-open'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </a>
            <div data-menu-open="false" className="hidden data-[menu-open='true']:block fixed top-0 left-0 bottom-0 w-screen bg-black z-20 text-white uppercase p-4">
                <a data-role='menu-close' className='fixed top-0 right-0 p-8 text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </a>
                <div className='col-start-1 row-start-1 flex flex-col h-full'>
                    <a href={'/' + lang + ''} className={'row-start-1 p-4 ' + (active === 'home' ? 'text-primary font-bold' : '')}>Home</a>
                    <a href={'/' + lang + '/about'} className={'p-4 ' + (active === 'about' ? 'text-primary font-bold' : '')}><Localized text='menu.about-us' /></a>
                    <a href={'/' + lang + '/projects'} className={'p-4 ' + (active === 'projects' ? 'text-primary font-bold' : '')}><Localized text='menu.projects' /></a>
                    <div className="p-4 flex gap-2 items-center text-white">
                        <img className='w-5 h-5 transition-[filter]' src={globeIcon} alt='globe' />
                        <a href={otherPage}><Localized text={'lang'} /></a>
                    </div>
                    <footer className="mt-auto flex p-4 justify-center items-center bg-base-black text-white">

                        <div>
                            <h3 className='font-bold text-primary py-4'><Localized text='footer.contact-us' /></h3>
                            <ol>
                                <li className="text-with-icon group flex gap-2 text-white fill-white py-2 items-center">
                                    <div className="w-[15px] transition-[fill] group-hover:fill-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512">
                                            <path
                                                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/jqTi2D8nR9XeXRk1A">Via della Guastalla, 11 - 20122 Milano</a>
                                    </div>
                                </li>
                                <li className="text-with-icon group flex gap-2 text-white fill-white py-2">
                                    <div className="w-[15px] transition-[fill] group-hover:fill-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <a href="tel:+393779522376">+39 3779522376</a>
                                    </div>
                                </li>
                                <li className="text-with-icon group flex gap-2 text-white fill-white py-2">
                                    <div className="w-[15px] transition-[fill] group-hover:fill-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <a href="mailto:info@lucarealestate.it">info@lucarealestate.it</a>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </header>
}