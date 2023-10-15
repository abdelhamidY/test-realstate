import logoIcon from './assets/logo_hor.png';
import globeIcon from './assets/globe.svg';

import logoWhiteHq from './assets/logo-white-hq.png';
import left01 from './assets/stacked.png';
import parking from './assets/parking.jpg';
import camera from './assets/camera-g2a624b0a8_1920.jpg';
import doctors from './assets/doctors-g9dfe823c1_1920.jpg';
import parchi from './assets/parchi.jpeg';
import upcoming from './assets/a-preview.webp';
import upcomingBg from './assets/bg-last-section.png';
import { Localized } from './Localized';
import {useLang} from '../useLang';
import { Footer } from './Footer';


function ServiceCard({ order, number, title, description, image }) {
    return (
        <div className="card" data-visibility-anim="slide-up" style={{ '--animation-order': order }}>
            <img
                src={image} />
            <div className="darken-card"></div>
            <div className="content">
                <div className="header">
                    <div>
                        <Localized text={title} />
                    </div>
                    <div className="number">{number}</div>
                </div>
                <div className="description">
                    <Localized text={description} />
                </div>
            </div>
        </div>
    );
}


export function MainPage() {

    const cards = [
        {
            title: 'services.card.parking',
            description: 'services.card.parking.desc',
            number: '01',
            image: parking
        },
        {
            title: 'services.card.security',
            description: 'services.card.security.desc',
            number: '02',
            image: camera
        },
        {
            title: 'services.card.hospital',
            description: 'services.card.hospital.desc',
            number: '03',
            image: doctors
        },
        {
            title: 'services.card.children-park',
            description: 'services.card.children-park.desc',
            number: '04',
            image: parchi
        }
    ];

    const lang = useLang();

    return <>
            <nav id="header" className="nav-header">
                <div style={{padding: '10px'}}>
                    <div className="logo-container" style={{height: '100%'}}>
                        <img className="logo" src={logoIcon} style={{height: '100%'}}/>
                    </div>
                </div>
                <div>
                    <a href={lang === 'it' ? '/it/about' : '/en/about'} className='menu-link'><Localized text={'about-us'} /></a>
                    <a id="goto-contact">Contatti</a>
                    <div className="language-selector">
                        <img className="globe" src={globeIcon} width="20px" />
                        <a id="goto-lang" href={lang === 'it' ? '/en' : '/'}><Localized text={'lang'} /></a>
                    </div>
                </div>
            </nav>
            <div className="main-content">
                <section className="landing-section">
                    <div className="landing-container">
                        <img src={logoWhiteHq} width="150" />
                        <span>
                            <Localized text={'slogan.pre'} />
                            <span className="luxury"><Localized text={'luxury'} /></span>
                            <Localized text={'slogan.post'} />
                        </span>
                    </div>
                    <div className="landing-separator"></div>
                    <div className="landing-separator-2"></div>
                </section>
                <section style={{ position: 'relative' }} className="first-section" data-visibility-anim="slide-up">
                    <div className="container">
                        <div className="first-section__image-container">
                            <img style={{ width: '100%' }} src={left01} />
                        </div>
                        <div className="first-section__text-container">
                            <h3 style={{borderBottom: '3px solid var(--primary-color)', paddingBottom: '4px'}}><Localized text={'about-us'} /></h3>
                            <div style={{ color: 'rgb(74, 74, 74)' }}>
                                <p style={{ marginBottom: '1rem' }}><span style={{ color: 'var(--primary-color)' }}>Luca</span> Real Estate, <Localized text={'about-us.first-text'} /></p>
                                <p><Localized text={'about-us.second-text'} /></p>
                            </div>
                        </div>
                        <div className="section-separator"></div>
                        <div className="section-separator-2"></div>
                    </div>
                </section>
                <section className="second-section">
                    <div className="container">
                        <h2><Localized text={'numbers.title.golden'} /><span style={{ color: 'rgb(82 82 82)' }}><Localized text={'numbers.title.black'} /></span></h2>
                        <div className="second-section__number-container">
                            <div>
                                <span data-animate-start="0" data-animate-end="6">6</span>
                                <span><Localized text={'numbers.projects'} /></span>
                            </div>
                            <div>

                                <span>
                                    €
                                    <span data-round="2" className="num" data-animate-start="0" data-animate-end="7.11">7.11</span>
                                    m
                                </span>

                                <span><Localized text={'numbers.invested'} /></span>
                            </div>
                            <div>
                                <span className="num" data-animate-start="0" data-animate-end="24">24</span>
                                <span><Localized text={'numbers.apartments'} /></span>
                            </div>
                        </div>
                    </div>
                </section>
                
{/*                 <section className="third-section">
                    <h2><Localized text={'services.title'}/></h2>
                    <div className="container" >
                        <div className="third-section__card-container">
                            {cards.map((c, idx) => (<ServiceCard order={idx} {...c} />))}
                        </div>
                    </div>
                </section> */}
            
                <section className="upcoming-section">
                    <img className="upcoming-section__background" src={upcomingBg} />
                    <div className="container">
                        <div className="upcoming-section__title"><Localized text={'upcoming.title'}/></div>
                        <div className="upcoming-section__info-container" style={{'min-height': '400px','maxWidth': '896px'}} data-visibility-anim="slide-up">
                            <img src={upcoming} style={{'objectFit': 'cover', height: '100%'}}/>
                            <div className="upcoming-section__info-list">
                                <span>Casa del Sole</span>
                                <div className="info-container__list">
                                    <div><Localized text='upcoming.info.type'/></div>
                                    <div><Localized text='upcoming.info.type.apartment'/></div>
                                    <div><Localized text='upcoming.info.position'/></div>
                                    <div><Localized text='upcoming.info.position.milan'/></div>
                                    <div><Localized text='upcoming.info.num-of-apartments'/></div>
                                    <div>3</div>
                                    <div><Localized text='upcoming.info.total-investment'/></div>
                                    <div>€ 539.200</div>
                                </div>
                                <div className="info-container__download-container">
                                    <a href={`/${lang}/projects/casa-del-sole`} className="info-container__download" style={{'textDecoration': 'none'}}>
                                        <Localized text='goto-project'/>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
    </>
}