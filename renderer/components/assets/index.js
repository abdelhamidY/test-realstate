const splides = document.querySelectorAll('*[data-role="splide"]');
let sps = [];
splides.forEach(sp => {
    sp.addEventListener('tab@open', (ev) => {
        if (ev.target !== sp)
            return;
        console.log(ev);
        sps.forEach(sp => sp.destroy());
        sps = [];
        queueMicrotask(() => {
            const splide = new Splide(sp, {
                type: 'loop',
                autoplay: 'play',
            });
            splide.mount();
            sps.push(splide);
        })
    })
});


document.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        document.getElementById('header')?.classList.add('header-active');
    } else {
        document.getElementById('header')?.classList.remove('header-active');
    }
}, { passive: true })

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add(e.target.dataset['visibilityAnim']);
        }
    })
}, { threshold: 0.2 });

const sections = document.querySelectorAll("[data-visibility-anim]");
sections.forEach(s => observer.observe(s));


const animeObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const el = e.target;
            if (!(el instanceof HTMLElement))
                return;
            if (el.dataset['animated'])
                return;
            el.dataset['animated'] = true;
            const start = Number.parseFloat(el.dataset['animateStart']);
            const end = Number.parseFloat(el.dataset['animateEnd']);
            const round = el.dataset['round'] ? Number.parseInt(el.dataset['round']) : 0;
            el.textContent = el.dataset['animateStart'];
            const holder = { value: start };
            anime({
                targets: holder,
                value: end,
                textContent: end,
                easing: 'easeOutQuad',
                update: () => el.textContent = (Math.round(holder.value * Math.pow(10, round)) / Math.pow(10, round)).toFixed(round)
            })
        }
    })
}, { threshold: 0.2 });

const elements = document.querySelectorAll("[data-animate-start][data-animate-end]");

elements.forEach(el => animeObserver.observe(el));

window.scrollX = 0;


const gotoContact = document.getElementById('goto-contact');
gotoContact?.addEventListener('click', e => {
    window.scrollTo(0, document.body.scrollHeight);
});

/*
    ################################
                  Tabs
    ################################
*/

const tabTriggers = document.querySelectorAll("*[data-tab-role='trigger']");

function selectTab(group, tabName) {
    const el = document.querySelector(`*[data-tab-role='tab'][data-tab-group='${group}'][data-tab='${tabName}']`);
    el.dispatchEvent(new CustomEvent('tab@open', { bubbles: false }));

    document.querySelectorAll(`*[data-tab-role='tab'][data-tab-group='${group}']`).forEach(tab => {
        if (tabName === tab.dataset['tab']) {
            tab.dispatchEvent(new CustomEvent('tab@open', { bubbles: false }));
            tab.classList.remove('hidden');
            tab.dataset['selected'] = 'true';
        } else {
            tab.classList.add('hidden');
            tab.dataset['selected'] = 'false';
        }

    })

    document.querySelectorAll(`*[data-tab-role='trigger'][data-tab-group='${group}']`).forEach(tr => {
        if (tabName === tr.dataset['tab'])
            tr.dataset['selected'] = 'true';
        else
            tr.dataset['selected'] = 'false';
    })
}

tabTriggers.forEach(el => {
    const tabName = el.dataset['tab'];
    const group = el.dataset['tabGroup'];

    if (el.dataset['selected'] === 'true') {
        document.querySelectorAll(`*[data-tab-role='tab'][data-tab-group='${group}'][data-tab='${tabName}']`).forEach(el => {
            el.classList.remove('hidden');
            el.dispatchEvent(new CustomEvent('tab@open', { bubbles: false }));
        });
    }

    el.addEventListener('click', () => selectTab(group, tabName));
})


{
    const carousels = document.querySelectorAll("*[data-scroll-role='container']");

    carousels.forEach(carousel => {
        const name = carousel.dataset['scrollName'];
        const items = carousel.children;

        const prev = [...document.querySelectorAll("*[data-scroll-role='prev']")].find((it) => it.dataset['scrollName'] === name);
        const next = [...document.querySelectorAll("*[data-scroll-role='next']")].find((it) => it.dataset['scrollName'] === name);

        prev.addEventListener('click', ev => {
            const index = [...items].findIndex(it => it.dataset['scrollActive'] === 'true');
            for (const item of items) {
                item.dataset['scrollActive'] = (Number.parseInt(item.dataset['scrollIndex']) === newIndex);
            }
        });

        next.addEventListener('click', ev => {
            const index = [...items].findIndex(it => it.dataset['scrollActive'] === 'true');
            const newIndex = ((index + 1) % items.length);
            for (const item of items) {
                item.dataset['scrollActive'] = (Number.parseInt(item.dataset['scrollIndex']) === newIndex);
            }
        });

        carousel.addEventListener('scroll', ev => {
            const offsets = [...items].map(it => it.offsetLeft + (it.width / 2)).sort((a, b) => (a - b));
            const current = carousel.scrollLeft;
            let i = 0;
            while (current > offsets[i] && i < offsets.length) {
                i++;
            }

            const indicators = [...document.querySelectorAll("*[data-scroll-role='indicator']")]
                .filter(ind => ind.dataset['scrollName'] === name);

            for (const indicator of indicators) {
                indicator.dataset['scrollActive'] = (i === Number.parseInt(indicator.dataset['scrollIndex']));
            }

            for (const item of items) {
                item.dataset['scrollActive'] = (i === Number.parseInt(item.dataset['scrollIndex']));
            }
        }, { passive: true })
    });
}


let lastY = 0;
const header = document.getElementById("header");
if (header) {
    document.addEventListener('scroll', ev => {
        const currentY = window.scrollY;

        if (currentY < lastY) {
            header.style.opacity = 1;
        } else {
            header.style.removeProperty("opacity");
        }

        lastY = currentY;
    }, { passive: true });
}

/*
    ################################
                Modals
    ################################
*/

const modals = [...document.querySelectorAll("[data-role='modal']")];

document.addEventListener('keyup', () => {
    modals.forEach(m => m.style.display = 'none')
});

for (const modal of modals) {
    modal.addEventListener('click', e => {
        if (e.target === modal)
            modal.style.display = 'none';
    })
}

const triggers = [...document.querySelectorAll("[data-role='modal-trigger']")]

for (const trigger of triggers) {
    const modalId = trigger.dataset['modalRef'];
    trigger.addEventListener('click', e => {
        const modal = modals.find(m => m.id === modalId);
        if (!modal)
            return;
        history.pushState({ modalOpen: modalId }, "")
        modal.style.removeProperty('display');
    });
}

window.addEventListener('popstate', (e) => {
    modals.forEach(m => m.style.display = 'none')

    if (e.state && 'modalOpen' in e.state)
        e.preventDefault()
})

function getTabElement(group, tabName){
    return document.querySelector(`*[data-tab-role='tab'][data-tab-group='${group}'][data-tab='${tabName}']`);
}

const projectDetails = document.querySelector("#project-details");
const projectTabContainer = document.getElementById("project-tab-container");

let projectTab = 'info';

async function switchProjectTab(){
    projectTabContainer.style.overflowY = 'hidden';
    projectTabContainer.style.overflowX = 'hidden';
    const exitingEl = getTabElement('project', projectTab);
    const exitKeyframes = [
        {transform: 'translateX(0%)'}, 
        {transform: 'translateX(-100vw)'}
    ]
    const exitAnim = exitingEl.animate(exitKeyframes, {duration: 1000, easing: 'ease'}).finished;

    const rotateAnim = projectDetails.animate([
        {transform: 'rotate(0)'},
        {transform: 'rotate(180deg)'}
    ], {duration: 250, easing: 'ease', fill: 'forwards', direction: projectTab === 'info' ? 'normal' : 'reverse'});

    projectTab = projectTab === 'info' ? 'details' : 'info';
    exitingEl.style.position = 'absolute';

    const enteringEl = getTabElement('project', projectTab);

    enteringEl.classList.remove('hidden');
    const enterKeyframes = [
        {transform: 'translateX(100vw)'}, 
        {transform: 'translateX(0%)'}
    ]
    const enterAnim = enteringEl.animate(enterKeyframes, {duration: 1000, easing: 'ease'}).finished;

    await Promise.allSettled([exitAnim, enterAnim, rotateAnim]);

    //projectDetails.classList.add('rotate')

    exitingEl.style.removeProperty('position');
    enteringEl.style.removeProperty('position');
    projectTabContainer.style.removeProperty('overflowY');
   
    selectTab('project', projectTab)
}

if (projectDetails) {
    projectDetails.addEventListener('click', _ => switchProjectTab());
}



const projectMore = document.querySelectorAll("#project-more");
projectMore.forEach(el => el.addEventListener('click', _ => switchProjectTab()));


/*
    ################################
            Project Slide
    ################################
*/

let animating = false;
const slideShow = document.getElementById("projectSlider");


const slideForwardAnimation = [
    { translate: "0" },
    { translate: "70vw" },
];

const slideBackwardAnimation = [
    { translate: "0" },
    { translate: "-70vw" },
];

const slideGrow = [
    { scale: ".85" },
    { scale: "1" },
];



const slides = [...document.querySelectorAll(`[data-slide]`)];
let index = (slides.length / 2) << 0;

/**
 * 
 * @param {unknown[]} array 
 * @param {number} center 
 * @param {number} radius 
 * @returns 
 */
function windowOf(array, center, radius = 2) {
    if (array.length === 0)
        return [];
    const window = [];
    let order = 0;
    for (let i = center - radius; i <= center + radius; i++) {
        const normalizedIndex = i < 0 ? i + array.length : i;
        const arrayIndex = normalizedIndex % array.length;
        const clone = array[arrayIndex].cloneNode(true);
        clone.dataset.order = order++;
        window.push(clone);
    }
    return window;
}

const prevSlideButton = document.getElementById("prevSlide");
const nextSlideButton = document.getElementById("nextSlide");

prevSlideButton?.addEventListener('click', _ => slide(-1))
nextSlideButton?.addEventListener('click', _ => slide(1))

updateSlidingWindow();

let slideAnimations = [];
let start = 0;
let touchX = 0;
let lastDirection = 0;
let locked = false;

let currentX = 0;

slides.forEach(sl => {
    sl.addEventListener('touchend', ev => {
        const delta = -(start-touchX);
        currentX += delta;
    });
    sl.addEventListener('touchstart', ev => {
        const touch = ev.touches[0];
        const { clientX } = touch;
        start = clientX;
        touchX = clientX;
    })
    sl.addEventListener('touchmove', ev => {
        const touch = ev.touches[0];
        const { clientX } = touch;
        touchX = clientX;
        const delta = -(start-touchX);

        slideShow.style.translate = currentX + delta + "px";

        const centers = slides.map(sl => sl.getBoundingClientRect().x + sl.getBoundingClientRect().width / 2)
            .map(c => c - window.screen.width/2);

        
        
        const scale = centers
            .map(c => Math.min(Math.max(Math.abs(2*c / window.screen.width), 0), 1));

        slides.forEach((sl, idx) => sl.style.scale = (1-0.85) * (1-scale[idx]) + 0.85);
    });
})


async function updateSlidingWindow() {
    const newSlides = windowOf(slides, index)
        .map(v => v ?? document.createElement('div'));

    newSlides.forEach(s => {
        s.style.scale = Number.parseInt(s.dataset.order) === 2 ? '1' : '.85';
    })

    slideWindow = newSlides;

    if (slideWindow.length > 0)
        slideShow.replaceChildren(...slideWindow);
}

async function slide(direction = 1) {
    if (animating)
        return;
    animating = true;
    const animation = slideShow.animate(direction === 1 ? slideBackwardAnimation : slideForwardAnimation, { duration: 500, easing: 'cubic-bezier(0.5, 1, 0.89, 1)' });
    
    let nextOrder = 2 + direction;

    const slide = document.querySelector(`[data-order='2']`);
    slide.animate(slideGrow, { duration: 500, direction: 'reverse', easing: 'ease' });
    
    index += direction;
    if (index < 0)
        index = slides.length - 1;
    else if (index >= slides.length)
        index = 0;

    const nextSlide = document.querySelector(`[data-order='${nextOrder}']`);
    nextSlide.animate(slideGrow, { duration: 500, easing: 'ease' })
    await animation.finished;
    updateSlidingWindow();
    animating = false;
}

/*
    ################################
            Animated Background
    ################################
*/

const animatedBackgrounds = document.querySelectorAll("[data-role='animated-bg']");

animatedBackgrounds.forEach(bg => {
    const loadObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const el = e.target;
                if (!(el instanceof HTMLElement))
                    return;
                const panorama = new PANOLENS.ImagePanorama(bg.dataset.bgUrl);
                const viewer = new PANOLENS.Viewer({ output: 'console', container: bg, autoRotate: true, autoRotateSpeed: 1, controlBar: false });
                viewer.add(panorama);
                loadObserver.disconnect();
            }
        })
    }, { threshold: 0.5 });
    
    loadObserver.observe(bg);
})


/*
    ##################################
            Color Changing Header
    ##################################
*/

const newHeader = document.querySelector("header");
if (newHeader) {

    const scrollRoot = document.querySelector("#scrollRoot") ?? undefined;
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const el = e.target;
                if (!(el instanceof HTMLElement))
                    return;

                const type = el.dataset['headerType'];
                newHeader.dataset['type'] = type;

                const hideLogo = el.dataset['headerHideLogo'];
                if (hideLogo !== undefined) {
                    newHeader.dataset['hideLogo'] = hideLogo;
                } else {
                    newHeader.dataset['hideLogo'] = false;
                }

                const blur = el.dataset['headerBlur'];
                if (blur !== undefined) {
                    newHeader.dataset['blur'] = blur;
                } else {
                    newHeader.dataset['blur'] = false;
                }
            }
        })
    }, { root: scrollRoot, threshold: 0.8 });

    const sections = document.querySelectorAll("[data-header-type]");
    sections.forEach(el => sectionObserver.observe(el));
}


/*
    ##################################
                Mobile Menu
    ##################################
*/

document.querySelectorAll("[data-role='menu-open']").forEach(el => {
    el.addEventListener('click', () => document.querySelectorAll("[data-menu-open]").forEach(men => men.dataset.menuOpen = true));
})

document.querySelectorAll("[data-role='menu-close']").forEach(el => {
    el.addEventListener('click', () => document.querySelectorAll("[data-menu-open]").forEach(men => men.dataset.menuOpen = false));
})



/*
    ##################################
             Map Button
    ##################################
*/

const animations = {
    'slide-up': [
        {transform: 'translateY(100%)'},
        {transform: 'translateY(0)'}
    ],
    'slide-out-down': [
        {transform: 'translateY(0)'},
        {transform: 'translateY(100%)'}
    ]
}

const mapBtn = document.getElementById("map-btn");
let showingMap = false;
let mapAnimating = false;
if (mapBtn){
    mapBtn.addEventListener('click', _ => {
       if (mapAnimating)
        return;

        mapAnimating = true;
        const target = document.getElementById(mapBtn.dataset.target);
        const animationName = showingMap ? 'slide-out-down' : 'slide-up';
        const animation = animations[animationName];
        
        showingMap = !showingMap;
        target.animate(animation, {duration: 1000, easing: 'ease', fill: 'forwards'})
            .finished
            .then(an => an.commitStyles())
            .then(_ => mapAnimating = false);
    });
}


/*
    ##################################
               Scroll In to View
    ##################################
*/

const scrollInToViewButtons = document.querySelectorAll("*[data-role='scroll-btn'][data-target]");

scrollInToViewButtons.forEach(el => {
    el.addEventListener('click', ev => {
        const targetQuery = el.dataset.target;
        const target = document.querySelector(targetQuery);
        if (target)
            target.scrollIntoView();
    });
})