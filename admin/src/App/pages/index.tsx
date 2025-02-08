import { lazy } from 'react';

const now = (new Date()).toLocaleDateString('en-US');

export const Activities = lazy(() => import('./Activities')); 
export const BuildingKeys = lazy(() => import('./BuildingKeys'));


export const InvalidRoutes = () => (
    <section>
        <h2>This page does not exist</h2>
        <p>Try a different route or go to <a href="https://hpysa.org">HPYSA</a>.</p>
    </section>
);

export const Success = () => (
    <>
        <h2>Success</h2>
        <p>Successful submission at {now}.</p>
    </>
);

export const WIP = () => (
    <section>
        <h2>Current work in progress</h2>
        <p>Coming soon...</p>
    </section>
);
