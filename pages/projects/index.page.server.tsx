import { Header } from '@renderer/components/NewHeader';
import './index.css'

import preview from '@assets/a-preview.webp';
import { useLang } from '@renderer/useLang';
import { Footer } from '@renderer/components/Footer';
import { readFileSync, readdirSync } from 'fs';
import { minimatch } from 'minimatch';
import { Localized } from '@renderer/components/Localized';



function ProjectPreview({ project }: { project: Project }) {
    const lang = useLang();
    return <div className='w-full h-full'>
        <a href={'/' + lang + '/project/' + project.id} className='grid grid-cols-1 grid-rows-1 mx-auto h-full transition-transform group max-w-xl text-primary rounded-md overflow-hidden'>
            <img className='row-start-1 col-start-1 object-cover w-full h-full group-hover:scale-105 transition-transform' src={project.hero} />
            <div className='self-end row-start-1 col-start-1 w-full backdrop-brightness-50 py-4 px-2 font-bold'>
                {project.title}
            </div>
        </a>
    </div>
}

export function Page(pageProps: Awaited<ReturnType<typeof onBeforeRender>>['pageContext']['pageProps']) {

    const projects = pageProps.projects;
    const middle = (projects.length / 2) << 0;

    const toProjectPreview = (project: Project, index: number) => <div data-slide={index} style={{ scale: index === middle ? '1' : '.85' }} className='h-full'>
        <ProjectPreview project={project} />
    </div>;

    return <div className='flex flex-col bg-base-white overflow-x-hidden'>
        <div className='min-h-screen flex flex-col'>
            <Header active='projects' type='black' transparent={false} />
            <main className='flex flex-col  flex-grow'>
                <h2 className='font-bold text-2xl uppercase my-4 mx-auto'><Localized text='projects.our'/></h2>

                <div className='grid grid-cols-1 grid-rows-1  my-4 h-full  flex-grow'>
                    <div className='row-start-1 col-start-1 h-full z-10 flex justify-between items-center mx-4 pointer-events-none my-auto'>
                        <button type='button' id='prevSlide' className='rounded-full p-2 bg-white shadow-md hover:scale-105  transition-[transform] pointer-events-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-8' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button type='button' id='nextSlide' className='rounded-full p-2 bg-white shadow-md hover:scale-105 transition-[transform] pointer-events-auto'>
                            <svg className='rotate-180 w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                    </div>
                    <div id="projectSlider" className='row-start-1 col-start-1 grid grid-cols-[70vw_70vw_70vw_70vw_70vw] -translate-x-[calc(140vw-15vw)] my-auto'>
                        {projects.map(toProjectPreview)}
                    </div>
                </div>
            </main>
        </div>
        <Footer />
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
    id: string,
    hero: string,
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
    description: string,
    characteristics: string[],
    map: string,
    planimetry: string,
    virtualTours: string[]
}


export async function onBeforeRender() {
    const projectsNames = readdirSync('projects').filter(p => minimatch(p, '*.json'));

    const projects = projectsNames.map(p => ({id: p.substring(0, p.length - '.json'.length), ...JSON.parse(readFileSync('projects/' + p).toString('utf-8'))}))
        .map(projectInfo => ({
            id: projectInfo.id,
            hero: getURL(getResource(projectInfo.hero)),
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
        } as Project));

    return {
        pageContext: {
            pageProps: { projects }
        }
    };
}