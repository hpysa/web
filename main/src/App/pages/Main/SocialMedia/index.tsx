import { Tooltip } from 'antd';

const SocialMedia = () => (
    <section className="my-6 grid grid-cols-[repeat(2,minmax(5rem,1fr))] place-items-center xxs:grid-cols-4 sm:my-8 lg:my-12">
        <Tooltip title="Ward Locator">
            <a className="rounded-2xl p-4 transition-all hover:bg-[#f0f0f0] focus:hover:bg-[#f0f0f0] sm:p-5" href="https://maps.churchofjesuschrist.org/wards/472190" aria-label="Heritage Park YSA Ward Locator" target="_blank">
                <img className="size-16 rounded-lg xxs:size-12 sm:size-20 sm:rounded-2xl lg:size-24" src="https://res.cloudinary.com/hpysa/f_auto,q_auto,w_128,h_128/lds.png" alt="Church of Jesus Christ of Latter-Day Saints Logo" />
            </a>
        </Tooltip>
        <Tooltip title="Facebook Group">
            <a className="rounded-2xl p-4 transition-all hover:bg-[#f0f0f0] sm:p-5" href="https://www.facebook.com/groups/heritageparkysa" aria-label="Heritage Park YSA Facebook Group" target="_blank">
                <img className="size-16 xxs:size-12 sm:size-20 lg:size-24" src="https://res.cloudinary.com/hpysa/f_auto,q_auto,w_128,h_128/facebook.svg" alt="Facebook Logo" />
            </a>
        </Tooltip>
        <Tooltip title="Instagram Account">
            <a className="rounded-2xl p-4 transition-all hover:bg-[#f0f0f0] sm:p-5" href="https://www.instagram.com/heritageparkactivities" aria-label="Heritage Park YSA Instagram Account" target="_blank">
                <img className="size-16 xxs:size-12 sm:size-20 lg:size-24" src="https://res.cloudinary.com/hpysa/f_auto,q_auto,w_128,h_128/instagram.svg" alt="Instagram Logo" />
            </a>
        </Tooltip>
        <Tooltip title="WhatsApp Community">
            <a className="rounded-2xl p-4 transition-all hover:bg-[#f0f0f0] sm:p-5" href="https://chat.whatsapp.com/BHFdmPIzCZvEqX6HmaHnTM" aria-label="Heritage Park YSA WhatsApp Community" target="_blank">
                <img className="size-16 xxs:size-12 sm:size-20 lg:size-24" src="https://res.cloudinary.com/hpysa/f_auto,q_auto,w_128,h_128/whatsapp-alt.svg" alt="WhatsApp Logo" />
            </a>
        </Tooltip>
    </section>
);

export default SocialMedia;
