import { Card, Tooltip } from "antd";
import { Outlet } from "react-router-dom";
import Announcements from "./Main/Announcements";

export default function Wrapper() {
    return (
		<section className="max-w-4xl flex flex-col mx-auto space-y-8 px-4 lg:px-0">
			<aside className="w-full mt-4 -mb-4">
				<Announcements />
			</aside>
			<header className="flex flex-col items-center justify-center w-full text-center gap-8">

				<img className="" src="https://res.cloudinary.com/hpysa/f_auto,q_auto/hero" />
				<section className="flex flex-col items-center justify-center w-full font-sans gap-8">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary">Heritage Park YSA Ward, 26&ndash;35</h1>
					<div className="flex items-start justify-center w-full mt-4">
						<hr className="flex-grow border-t border-primary" />
						<div className="flex flex-col items-center justify-center -mt-4 md:-mt-[1.125rem] gap-2">
							<span className="px-4 md:px-8 text-2xl md:text-3xl text-primary">Sundays @ 12:30PM</span>
							{/* <Tooltip title="Google Maps">
								<a className="w-fit transition-all group hover:underline hover:text-tertiary" href="https://goo.gl/maps/LC6crS6CaqCwwARV9" target="_blank" aria-label="Heritage Park YSA Google Maps Address">
									<address className="transition-all text-md lg:text-lg text-black not-italic leading-tight group-hover:text-tertiary">
										10380 N 6000 W
										<br/>
										Highland, UT
									</address>
								</a>
							</Tooltip> */}
						</div>
						<hr className="flex-grow border-t border-primary"/> 
					</div> 
				</section>
				<section className="flex justify-center items-center gap-6 lg:gap-8 mb-2 sm:mb-4 w-full">
					<Tooltip title="Google Maps">
						<a className="p-4 rounded-2xl transition-all hover:bg-[#f0f0f0]" href="https://www.google.com/maps/place/10380+N+6000+W,+Highland,+UT+84003/@40.4205076,-111.8041577,17z/data=!3m1!4b1!4m6!3m5!1s0x874d80f314f5e367:0x7ee7372316fb4f66!8m2!3d40.4205035!4d-111.8015828!16s%2Fg%2F11bw4b36_0?coh=245189&entry=tts&g_ep=EgoyMDI1MDIxMS4wIPu8ASoJLDEwMjExNDU1SAFQAw%3D%3D" aria-label="Heritage Park YSA Google Maps Address" target="_blank">
							<img className="size-12 object-contain" src="https://res.cloudinary.com/hpysa/f_auto,q_auto/google.svg" alt="Facebook Logo"/>
						</a>
					</Tooltip>
					<Tooltip title="Apple Maps">
						<a className="p-4 rounded-2xl transition-all hover:bg-[#f0f0f0]" href="https://maps.apple.com/place?address=10380%20N%206000%20W%20St,%20Highland,%20UT%20%2084003,%20United%20States&ll=40.420504,-111.801703&q=10380%20N%206000%20W%20St&t=m" aria-label="Heritage Park YSA Apple Maps Address" target="_blank">
							<img className="size-12 object-contain" src="https://res.cloudinary.com/hpysa/f_auto,q_auto,w_128,h_128/apple.svg" alt="Facebook Logo"/>
						</a>
					</Tooltip>
				</section>
				<section className="grid grid-cols-1 sm:grid-cols-[repeat(2,minmax(15rem,1fr))] grid-rows-2 gap-6 lg:gap-8 w-full mx-auto text-md">
					<Card className="border-0">
						<div className="flex flex-col items-center justify-center p-4 shadow-md sm:p-4 border rounded">
							<span className="sm:text-lg text-primary font-serif font-bold">ACTIVITY NIGHT &#47; FHE</span>
							<span className="font-sans text-base lg:text-lg">Mondays @ 7:00PM</span>
						</div>
					</Card>
					<Card className="border-0">
						<div className="flex flex-col items-center justify-center p-4 shadow-md sm:p-4 border rounded">
							<span className="sm:text-lg text-primary font-serif font-bold">STAKE NIGHT &#47; INSTITUTE</span>
							<span className="font-sans text-base lg:text-lg">Thursdays @ 6:30PM</span>
						</div>
					</Card>
					<Card className="border-0">
						<div className="flex flex-col items-center justify-center p-4 shadow-md sm:p-4 border rounded">
							<span className="sm:text-lg text-primary font-serif font-bold">BISHOP MUGLESTON</span>
							<a className="transition-all font-sans text-base lg:text-lg hover:underline hover:text-tertiary" href="tel:(801) 367-0602" aria-label="Bishop's Phone Number">(801) 367-0602</a>
						</div>
					</Card>
					<Card className="border-0">
						<div className="flex flex-col items-center justify-center p-4 shadow-md sm:p-4 border rounded">
							<span className="sm:text-lg text-primary font-serif font-bold">EXECUTIVE SECRETARY</span>
							<a className="transition-all font-sans text-base lg:text-lg hover:underline hover:text-tertiary" href="tel:(209) 790-9348" aria-label="Executive Secretary's Phone Number">(209) 790-9348</a>
						</div>
					</Card>
				</section>
			</header>
            <main className="flex flex-col gap-8">
                <Outlet />
            </main>
            <footer className="flex items-center justify-center !my-8">
				<small className="font-sans text-base lg:text-lg w-full text-center">
					&copy; {new Date().getFullYear()} &ndash; <a className="transition-all hover:underline hover:text-tertiary" href="/" aria-label="Heritage Park YSA">Heritage Park YSA</a></small>
            </footer>
        </section>
    );
}