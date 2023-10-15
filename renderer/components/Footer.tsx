
import { Localized } from './Localized';
import logoWhite from '@assets/logos/logo-vertical-white.svg';

export function Footer() {
    return (
        <footer id="footer" className="grid p-4 grid-rows-3 justify-center items-center md:grid-rows-1 md:grid-cols-3 bg-base-black text-white">
            <img className='mx-auto md:ml-16 my-auto w-32' src={logoWhite}  />
            <div>
                <h3 className='font-bold text-primary py-4'>Luca Real Estate S.R.L.</h3>
                <ol>
                    <li className="text-with-label flex gap-2 items-center py-2 text-white group">
                        <div className="label  transition-colors text-neutral-300 "><Localized text='footer.vat' /></div>
                        <div>127586201962</div>
                    </li>
                    <li className="text-with-label flex gap-2 items-center py-2 text-white group">
                        <div className="label  transition-colors text-neutral-300 "><Localized text='footer.capital' /></div>
                        <div>€ 1.000.000 i.v.</div>
                    </li>
                </ol>
            </div>
            <div>
                <h3 className='font-bold text-primary py-4'><Localized text='footer.contact-us' /></h3>
                <ol>
                    <li className="text-with-icon group flex gap-2 text-white fill-white py-2">
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
    )
}