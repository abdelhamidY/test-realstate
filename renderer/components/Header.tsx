
import logo from '@assets/logo-white-hq.png';
import logoText from '@assets/logo-complete-white.webp';

export interface HeaderProps {
    group: string,
    title: string,
    subtitle: string,
    bg?: string
}

export function Header({ bg = '#F7F7F7', ...props }: HeaderProps) {
    return (
        <header className='bg-[#39353B] px-8 py-4 relative overflow-hidden isolate'>
            <div className='absolute top-0 left-[-50%] -rotate-45 origin-center h-96 w-[110vw]  bg-[#404040] -z-10'></div>
            <div className='flex justify-between items-center'>
                <a href='/' className='flex mb-8 mt-4'>
                    <h2 className='text-white font-bold text-4xl h-16 object-fill'>
                        <img alt='Luca Real Estate' className='h-full' src={logoText} />
                    </h2>
                    <h3 className='text-[#9B9B9B]'>{props.subtitle}</h3>
                </a>
                <h1 className='text-2xl text-primary font-bold group'>
                    {props.group}
                    <div className='h-2 w-1/2 bg-primary ml-auto group-hover:w-full transition-[width]'></div>
                </h1>
            </div>
            <div className='absolute top-full left-[-10px] right-0 rotate-[1.25deg] xl:rotate-[1deg] w-[110vw]  origin-bottom-right h-16' style={{ backgroundColor: bg }}></div>
        </header>
    )
}