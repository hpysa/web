import { lazy, Suspense } from "react";
import { Collapse } from "antd";

const WardLeadership = () => {
    const LeadershipList = lazy(() => import("./LeaderList"));
    const EQList = lazy(() => import("./EQList"));
    const RSList = lazy(() => import("./RSList"));
    const SSList = lazy(() => import("./SSList"));

    return (
        <section>
            <h2>More Information</h2>
            <Collapse
                items={[
                    { 
                        key: '1', 
                        label: 'Ward Leadership', 
                        children: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <LeadershipList />
                            </Suspense>
                        )
                    }, 
                    { 
                        key: '2', 
                        label: 'Elders\' Quorum Presidency', 
                        children: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <EQList />
                            </Suspense>
                        )
                    },
                    { 
                        key: '3', 
                        label: 'Relief Society Presidency', 
                        children: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <RSList />
                            </Suspense>
                        )
                    },
                    { 
                        key: '4', 
                        label: 'Sunday School Committee', 
                        children: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <SSList />
                            </Suspense>
                        )
                    },
                ]}
            />
        </section>
    );
} 

export default WardLeadership;
