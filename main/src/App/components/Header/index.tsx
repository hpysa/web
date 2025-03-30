import { Card, Tooltip } from 'antd';
import Banner from './Banner';

const Header = () => (
    <>
        <Banner />
        <header className="flex w-full flex-col items-center justify-center gap-6 text-center sm:gap-8">
            <img className="rounded" src="https://res.cloudinary.com/hpysa/f_auto,q_auto/hero" alt="Jesus Christ" />
            <section className="flex w-full flex-col items-center justify-center gap-6 font-sans sm:gap-8">
                <h1 className="font-serif text-3xl font-bold text-primary sm:text-4xl md:text-5xl">Heritage Park YSA Ward, 26&ndash;35</h1>
                <div className="mt-4 flex w-full items-start justify-center">
                    <hr className="flex-grow border-t border-primary" />
                    <span className="-mt-[1.125rem] px-4 text-2xl uppercase text-primary md:-mt-5 md:px-6">Sundays @ 12:30PM</span>
                    <hr className="flex-grow border-t border-primary" />
                </div>
            </section>
            <section className="mb-2 flex w-full items-center justify-center gap-6 sm:mb-4 sm:mt-2 lg:gap-8">
                <Tooltip title="Google Maps" placement="left">
                    <a
                        className="rounded-2xl p-4 transition-all hover:bg-[#f0f0f0]"
                        href="https://www.google.com/maps/place/10380+N+6000+W,+Highland,+UT+84003/@40.4205076,-111.8041577,17z/data=!3m1!4b1!4m6!3m5!1s0x874d80f314f5e367:0x7ee7372316fb4f66!8m2!3d40.4205035!4d-111.8015828!16s%2Fg%2F11bw4b36_0?coh=245189&entry=tts&g_ep=EgoyMDI1MDIxMS4wIPu8ASoJLDEwMjExNDU1SAFQAw%3D%3D"
                        aria-label="Heritage Park YSA Google Maps Address"
                        target="_blank"
                    >
                        <img className="size-12 object-contain" src="https://res.cloudinary.com/hpysa/f_auto,q_auto/google.svg" alt="Facebook Logo" />
                    </a>
                </Tooltip>
                <Tooltip title="Apple Maps" placement="right">
                    <a
                        className="rounded-2xl p-4 transition-all hover:bg-[#f0f0f0]"
                        href="https://maps.apple.com/place?address=10380%20N%206000%20W%20St,%20Highland,%20UT%20%2084003,%20United%20States&ll=40.420504,-111.801703&q=10380%20N%206000%20W%20St&t=m"
                        aria-label="Heritage Park YSA Apple Maps Address"
                        target="_blank"
                    >
                        <img className="size-12 object-contain" src="https://res.cloudinary.com/hpysa/f_auto,q_auto,w_128,h_128/apple.svg" alt="Facebook Logo" />
                    </a>
                </Tooltip>
            </section>
            <section className="text-md mx-auto grid w-full grid-cols-1 grid-rows-2 gap-6 sm:grid-cols-[repeat(2,minmax(15rem,1fr))] lg:gap-8">
                <Card className="border-0">
                    <div className="flex flex-col items-center justify-center gap-1 rounded border p-4 font-sans text-base uppercase text-primary shadow-md sm:p-4">
                        <span className="font-medium sm:text-lg">BISHOP MUGLESTON</span>
                        <a className="text-tertiary transition-all hover:text-tertiary hover:underline" href="tel:(801) 367-0602" aria-label="Bishop's Phone Number">
                            (801) 367-0602
                        </a>
                    </div>
                </Card>
                <Card className="border-0">
                    <div className="flex flex-col items-center justify-center gap-1 rounded border p-4 font-sans text-base uppercase text-primary shadow-md sm:p-4">
                        <span className="font-medium sm:text-lg">EXECUTIVE SECRETARY</span>
                        <a className="text-tertiary transition-all hover:text-tertiary hover:underline" href="tel:(209) 790-9348" aria-label="Executive Secretary's Phone Number">
                            (209) 790-9348
                        </a>
                    </div>
                </Card>
                <Card className="border-0">
                    <div className="flex flex-col items-center justify-center gap-1 rounded border p-4 font-sans text-base uppercase text-primary shadow-md sm:p-4">
                        <span className="font-medium sm:text-lg">ACTIVITY NIGHT</span>
                        <span>Mondays @ 7:00PM</span>
                    </div>
                </Card>
                <Card className="border-0">
                    <div className="flex flex-col items-center justify-center gap-1 rounded border p-4 font-sans text-base uppercase text-primary shadow-md sm:p-4">
                        <span className="font-medium sm:text-lg">STAKE NIGHT</span>
                        <span>Thursdays @ 6:30PM</span>
                    </div>
                </Card>
            </section>
        </header>
    </>
);

export default Header;
