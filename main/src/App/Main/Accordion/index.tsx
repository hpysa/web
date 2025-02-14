import { Collapse } from "antd";
import { Loader2 } from "lucide-react";
import { lazy, Suspense } from "react";

export default function Accordion() {
	const Leadership = lazy(() => import("./Leadership"));
    const Activities = lazy(() => import("./Activities"));

    return (
        <section>
			<Collapse
				className="font-sans"
				accordion
				size="large"
				defaultActiveKey={2}
				items={[
					{ 
                        key: 1,
                        label: 'Ward Leadership', 
                        children: (
                            <Suspense fallback={<Loader2 className="w-full text-primary animate-spin"/>}>
                                <Leadership />
                            </Suspense>
                        )
                    }, 
					{
						key: 2, 
						label: 'Upcoming Ward Activities', 
						children: (
							<Suspense fallback={<Loader2 text-primary className="w-full text-primary animate-spin"/>}>
								<Activities />
							</Suspense>
						)
					}
				]}
			/>
        </section>
    );
}
