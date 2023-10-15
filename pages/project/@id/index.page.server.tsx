import { Localized } from '@renderer/components/Localized';
import './index.css'

import { Header } from '@renderer/components/NewHeader';
import { readFileSync } from 'fs';
import { readFile } from 'fs/promises';
import { minimatch } from 'minimatch';
import { PropsWithChildren } from 'react';
import { useLang } from '@renderer/useLang';
import { locales } from '@root/locale/locale.types';

function AlarmCharacteristics() {
    return <div className='flex gap-2 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 13q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.713 3.513t-1.924 2.85q-1.213 1.212-2.85 1.925T12 22Zm0-9Zm2.8 4.2l1.4-1.4l-3.2-3.2V8h-2v5.4l3.8 3.8ZM5.6 2.35L7 3.75L2.75 8l-1.4-1.4L5.6 2.35Zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75l1.4-1.4ZM12 20q2.925 0 4.963-2.038T19 13q0-2.925-2.038-4.963T12 6Q9.075 6 7.037 8.038T5 13q0 2.925 2.038 4.963T12 20Z" /></svg>
        <Localized text='project.characteristics.alarm' />
    </div>
}

function CarParkingCharacteristics() {
    return <div className='flex gap-2 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm1.5 3a3.5 3.5 0 0 1 .192 6.995L13.5 14H11v2a1 1 0 0 1-1.993.117L9 16V9a2 2 0 0 1 1.85-1.995L11 7h2.5Zm0 2H11v3h2.5a1.5 1.5 0 0 0 .144-2.993L13.5 9Z" /></g></svg>
        <Localized text='project.characteristics.parking' />
    </div>;
}

function PoolCharacteristics() {
    return <div className='flex gap-2 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15c1.67-.75 3.33-1.5 5-1.83V5a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H10a1 1 0 0 0-1 1v1h5V5a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H17a1 1 0 0 0-1 1v9.94c2-.32 4-1.94 6-1.94v2c-2.22 0-4.44 2-6.67 2c-2.22 0-4.44-2-6.66-2c-2.23 0-4.45 1-6.67 2v-2m12-7H9v2h5V8m0 4H9v1c1.67.16 3.33 1.31 5 1.79V12M2 19c2.22-1 4.44-2 6.67-2c2.22 0 4.44 2 6.66 2c2.23 0 4.45-2 6.67-2v2c-2.22 0-4.44 2-6.67 2c-2.22 0-4.44-2-6.66-2c-2.23 0-4.45 1-6.67 2v-2Z" /></svg>
        <Localized text='project.characteristics.pool' />
    </div>
}

function AirConditioningCharacteristics() {
    return <div className='flex gap-2 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 16a3 3 0 0 1-3 3m11-3a3 3 0 0 0 3 3m-7-3v4M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M7 13v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" /></g></svg>
        <Localized text='project.characteristics.airConditioning' />
    </div>
}

function TerraceCharacteristics() {
    return <div className='flex gap-2 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M1.5 14v3.5a2 2 0 0 0 2 2h2V23m17-9v3.5a2 2 0 0 1-2 2h-2V23M12 8.5V15m-7 1.5h14m-7 0V23M1.5 8.5h21v-2h-.086a5 5 0 0 1-.822-.068l-.396-.066a16 16 0 0 1-8.861-4.65l-.21-.216h-.25l-.21.216a16 16 0 0 1-8.861 4.65l-.396.066a5 5 0 0 1-.822.068H1.5v2Z" /></svg>
        <Localized text='project.characteristics.terrace' />
    </div>
}




const characteristics: { [key: string]: () => JSX.Element } = {
    'alarm': AlarmCharacteristics,
    'terrace': TerraceCharacteristics,
    'airConditioning': AirConditioningCharacteristics,
    'pool': PoolCharacteristics,
    'carParking': CarParkingCharacteristics
}

export function ProjectInfo({ hideTitle = false, project }: { hideTitle?: boolean, project: Project }) {
    return <div className='mx-auto px-16 py-4 flex h-full flex-col justify-between md:justify-center'>
        {!hideTitle && <h1 className='uppercase text-4xl font-bold'>{project.title}</h1>}
        <div className='grid grid-cols-2 grid-flow-row text-primary gap-x-4 gap-y-2 my-4'>
            <div className='font-bold'><Localized text='upcoming.info.type' /></div>
            <div className='font-semibold'><Localized text='upcoming.info.type.apartment' /></div>
            <div className='font-bold'><Localized text='upcoming.info.position' /></div>
            <div className='font-semibold'>{project.location}</div>
            <div className='font-bold'><Localized text='upcoming.info.num-of-apartments' /></div>
            <div className='font-semibold'>{project.details.apartments}</div>
            <div className='font-bold'><Localized text='upcoming.info.total-investment' /></div>
            <div className='font-semibold'>{project.invested}</div>
        </div>
        <button id="project-more" className='cursor-pointer bg-primary px-4 py-2 text-white font-bold hover:bg-white border border-transparent hover:border-primary border-solid hover:text-primary transition-all'>Discover More</button>
    </div>
}

export function ProjectDetails({ project }: { project: Project }) {
    const lang = useLang() as typeof locales[number];
    return <div className='self-center'>
        <div className='flex flex-col sm:flex-row gap-4 items-center'>
            <h1 className='text-4xl font-bold uppercase'>{project.title}</h1>
            <div className='text-end ml-auto'>
                <div className='ml-auto font-bold'>{project.details.apartments} <Localized text='project.apartments' /> - {project.details.totalArea} m<sup>2</sup></div>
            </div>
        </div>
        <div className='sm:columns-2 text-secondary my-4 text-justify'>
            {project.description[lang]}
        </div>
        <div className='flex items-end gap-4 my-10'>
            <h1 className='mx-auto text-2xl sm:text-4xl font-bold uppercase'><Localized text='project.characteristics' /></h1>
        </div>
        <div className='flex flex-wrap text-secondary justify-evenly mt-4 mb-10 items-center gap-4'>
            {project.characteristics.map(ch => {
                const Comp = characteristics[ch];
                return Comp ? <Comp /> : null
            })}
        </div>

        <button data-role="modal-trigger" data-modal-ref="virtual-tour-modal" className='bg-primary px-4 py-2 w-full text-white font-bold hover:bg-white border border-transparent hover:border-primary border-solid hover:text-primary transition-all'>Virtual Tour</button>

    </div>
}

function Modal(props: { id: string } & PropsWithChildren) {
    return <>
        <div data-role='modal' id={props.id} style={{ display: 'none' }} className='fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center lg:bg-black/30 lg:backdrop-blur-sm'>
            <div className='w-full h-full lg:w-8/12 lg:py-4'>
                {props.children}
            </div>
        </div>
    </>
}

export function MobileProjectDetails() {
    return <div className='self-center'>
        <div className='flex gap-4 items-center'>
            <h1 className='text-4xl font-bold uppercase'>Cascina del sole</h1>
            <div className='text-end ml-auto'>
                <div className='ml-auto font-bold'>3 apartments - 236 m<sup>2</sup></div>
            </div>
        </div>
        <div className='md:columns-2 text-secondary my-4 text-justify'>
            Experience the ultimate in luxurious urban living with The Metropolitan floor plan. This spacious open-concept design features high-end finishes throughout and offers breathtaking views of the surrounding skyline from your private balcony. Discover the convenience of living in the heart of the city with this exceptional apartment plan.\nExperience the ultimate in luxurious urban living with The Metropolitan floor plan. This spacious open-concept design features high-end finishes throughout and offers breathtaking views of the surrounding skyline from your private balcony. Discover the convenience of living in the heart of the city with this exceptional apartment plan.\nExperience the ultimate in luxurious urban living with The Metropolitan floor plan. This spacious open-concept design features high-end finishes throughout and offers breathtaking views of the surrounding skyline from your private balcony. Discover the convenience of living in the heart of the city with this exceptional apartment plan.
        </div>

        <button data-role="modal-trigger" data-modal-ref="virtual-tour-modal" className='bg-primary px-4 py-2 w-full text-white font-bold hover:bg-white border border-transparent hover:border-primary border-solid hover:text-primary transition-all'>Virtual Tour</button>

        <div className='flex items-end gap-4 mt-10'>
            <h1 className='text-4xl font-bold uppercase'>CHARACTERISTICS</h1>
        </div>
        <div className='flex flex-wrap text-secondary justify-evenly mt-4 mb-10 items-center gap-4'>
            <div className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 13q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.713 3.513t-1.924 2.85q-1.213 1.212-2.85 1.925T12 22Zm0-9Zm2.8 4.2l1.4-1.4l-3.2-3.2V8h-2v5.4l3.8 3.8ZM5.6 2.35L7 3.75L2.75 8l-1.4-1.4L5.6 2.35Zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75l1.4-1.4ZM12 20q2.925 0 4.963-2.038T19 13q0-2.925-2.038-4.963T12 6Q9.075 6 7.037 8.038T5 13q0 2.925 2.038 4.963T12 20Z" /></svg>
                <span>Alarm</span>
            </div>
            <div className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 16a3 3 0 0 1-3 3m11-3a3 3 0 0 0 3 3m-7-3v4M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M7 13v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" /></g></svg>
                <span>Air Conditioning</span>
            </div>
            <div className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M1.5 14v3.5a2 2 0 0 0 2 2h2V23m17-9v3.5a2 2 0 0 1-2 2h-2V23M12 8.5V15m-7 1.5h14m-7 0V23M1.5 8.5h21v-2h-.086a5 5 0 0 1-.822-.068l-.396-.066a16 16 0 0 1-8.861-4.65l-.21-.216h-.25l-.21.216a16 16 0 0 1-8.861 4.65l-.396.066a5 5 0 0 1-.822.068H1.5v2Z" /></svg>
                <span>Terrace</span>
            </div>
            <div className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15c1.67-.75 3.33-1.5 5-1.83V5a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H10a1 1 0 0 0-1 1v1h5V5a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H17a1 1 0 0 0-1 1v9.94c2-.32 4-1.94 6-1.94v2c-2.22 0-4.44 2-6.67 2c-2.22 0-4.44-2-6.66-2c-2.23 0-4.45 1-6.67 2v-2m12-7H9v2h5V8m0 4H9v1c1.67.16 3.33 1.31 5 1.79V12M2 19c2.22-1 4.44-2 6.67-2c2.22 0 4.44 2 6.66 2c2.23 0 4.45-2 6.67-2v2c-2.22 0-4.44 2-6.67 2c-2.22 0-4.44-2-6.66-2c-2.23 0-4.45 1-6.67 2v-2Z" /></svg>
                <span>Pool</span>
            </div>
            <div className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm1.5 3a3.5 3.5 0 0 1 .192 6.995L13.5 14H11v2a1 1 0 0 1-1.993.117L9 16V9a2 2 0 0 1 1.85-1.995L11 7h2.5Zm0 2H11v3h2.5a1.5 1.5 0 0 0 .144-2.993L13.5 9Z" /></g></svg>
                <span>Car Parking</span>
            </div>
        </div>

        <div className='flex items-end gap-4 mt-10'>
            <h1 className='mx-auto text-2xl sm:text-4xl font-bold uppercase'>Location</h1>
        </div>
        <div className='flex flex-wrap text-secondary justify-evenly mt-4 mb-10 items-center gap-4'>
            <iframe className="w-full" src="" width="600" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
}

export function MobileVersion() {
    return <div className='block md:hidden relative min-h-screen'>
        <div className='fixed top-0 left-0 right-0 z-10'>
            <Header active='projects' type='white' transparent />
        </div>
        <div className='min-h-screen grid grid-cols-1 grid-rows-[2.5fr_1fr]' data-header-type="white">
            <div className='pointer-events-none brightness-90 -z-10 relative' data-role="animated-bg" data-bg-url='/bg-2.jpg'>
                <div className='absolute top-0 left-0 h-full flex items-center justify-center text-white font-bold text-5xl uppercase italic text-center drop-shadow-lg' >
                    La cascina del sole
                </div>
            </div>
            <div className='self-end flex bg-base-white h-full'>
                {/*<ProjectInfo hideTitle />*/}
            </div>
        </div>
        <div id="mobile-details" className='min-h-screen bg-base-white p-8' data-header-type="black">
            <MobileProjectDetails />
        </div>
    </div>
}

export function Page(pageProps: Awaited<ReturnType<typeof onBeforeRender>>['pageContext']['pageProps']) {

    const project = pageProps.project;

    return <div id="scrollRoot" className='h-screen overflow-y-scroll scroll-smooth'>
        {/* <MobileVersion /> */}
        <div className='min-h-screen grid grid-rows-[min-content_auto_100vh] grid-cols-[1fr] md:grid-cols-[1fr_70px_1fr] md:grid-rows-[min-content_1fr] md:bg-base-white relative'>
            <div className='row-start-1 col-start-1 md:row-start-1 md:col-start-1 col-span-3 z-10 h-min bg-base-white md:bg-transparent'>
                <Header active='projects' type='black' transparent />
            </div>
            <div className='row-start-2 col-start-1 md:row-start-2 md:col-start-1 flex relative bg-base-white' id="project-tab-container">
                <div data-selected='true' data-tab-role="tab" data-tab-group='project' data-tab='info' className='data-[selected="true"]:flex hidden h-full'>
                    <ProjectInfo project={project} />
                </div>
                <div data-selected='false' data-tab-role="tab" data-tab-group='project' data-tab='details' className='data-[selected="true"]:flex hidden px-4 md:px-16 py-4 h-full'>
                    <ProjectDetails project={project} />
                </div>
            </div>
            <div className='hidden bg-secondary row-start-1 col-start-2 row-span-2 sticky top-0 z-10 h-screen md:flex items-center justify-center text-white'>
                <button type='button' id="project-details">
                    <span className='sr-only'>Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
            </div>

            <div className='row-start-1 col-start-1 row-span-3 w-screen md:w-auto -z-10 md:z-0 md:row-start-1 md:col-start-3 md:row-span-2 bg-center bg-cover sticky top-0 h-screen pointer-events-none' data-role="animated-bg" data-bg-url={project.rawVirtualTour}>
                
            </div>


            <div id="map" className='fixed w-full -translate-y-full transition-transform pointer-events-auto flex justify-end'>
                    <iframe className="w-screen h-screen md:w-1/2  md:h-screen -z-10" src={project.map} style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>


            <button id="map-btn" data-role='animate-btn' data-target="map" data-animation="slide-up" className='fixed z-[9999] bottom-4 right-4 p-3 rounded-full bg-base-white hover:-translate-y-1 shadow-lg text-secondary pointer-events-auto transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </button>
        </div>
        <Modal id="virtual-tour-modal">
            {project.virtualTours.length === 1 ?
                <iframe allowFullScreen={true} className='w-full h-full' src={project.virtualTours[0]} />
                :
                <div className='flex flex-col h-full bg-black'>
                    {project.virtualTours.map((virtualTour, idx) => <iframe key={virtualTour} data-tab-role="tab" data-tab-group="vt-group" data-tab={'vt-' + idx} allowFullScreen={true} className={'w-full h-full hidden'} src={virtualTour} loading='lazy' />)}
                    <div className='flex gap-4 py-2 justify-center bg-black'>
                        {
                            project.virtualTours.map((_, idx) => <button key={idx} className='hover:bg-black/10 text-neutral-400 w-8 h-8 data-[selected="true"]:text-primary data-[selected="true"]:font-bold data-[selected="true"]:border-b-2 border-primary ' data-tab-role="trigger" data-tab-group="vt-group" data-tab={'vt-' + idx} data-selected={idx === 0}>{idx + 1}</button>)
                        }
                    </div>
                </div>
            }
        </Modal>
    </div>
}

const resourceMap: Record<string, string> = JSON.parse(readFileSync('url.map.json').toString('utf-8'));

function getResources(filter: string) {
    return Object.keys(resourceMap).filter(res => minimatch(res, filter));
}

function getResource(name: string) {
    if (!(name in resourceMap))
        throw new Error('unknown resource: ' + name);
    return name;
}

function getURL(resource: string) {
    return resourceMap[resource] ?? 'invalid-resource';
}


function resolveImages(imageGroups: any[]) {
    return imageGroups.map((ig: any) => {
        const images = getResources(ig.imagesFilter).map(getURL);
        return {
            name: ig.name,
            images
        }
    });
}

type Project = {
    hero: string,
    rawVirtualTour: string,
    title: string,
    location: string,
    invested: string,
    imageGroups: {
        name: string,
        images: string[]
    }[],
    details: {
        totalArea: string,
        apartments: string
    },
    description: { [key in typeof locales[number]]: string },
    characteristics: string[],
    map: string,
    planimetry: string,
    virtualTours: string[]
}

export async function onBeforeRender(pageContext: { routeParams: { id: string } }) {
    const projectId = pageContext.routeParams.id;
    const projectInfo = JSON.parse((await readFile('projects/' + projectId + '.json')).toString('utf-8'));

    const project = {
        hero: getURL(getResource(projectInfo.hero)),
        rawVirtualTour: projectInfo.rawVirtualTour,
        title: projectInfo.title,
        location: projectInfo.location,
        invested: projectInfo.invested,
        imageGroups: resolveImages(projectInfo.imageGroups),
        details: projectInfo.details,
        description: projectInfo.description,
        characteristics: projectInfo.characteristics,
        map: projectInfo.map,
        planimetry: getURL(getResource(projectInfo.planimetry)),
        virtualTours: projectInfo.virtualTours
    } as Project;

    return {
        pageContext: {
            pageProps: { projectId, project }
        }
    };
}

export async function prerender() {
    const projects = ['cascina-del-sole', 'visconti-di-modrone'];
    return projects.map(proj => '/project/' + proj);
}