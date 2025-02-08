import { Collapse, Row, Col } from "antd";
import { lazy, Suspense } from "react";

export default function Activities() {
    const ActivitiesTable = lazy(() => import("./ActivitiesTable"));

    return (
        <section>
            <h2>Ward Activities</h2>
			<Row gutter={60}>
                <Col span={8}>
                    <p>There are ward activities to attend most every week!</p>
                    <ul>
                        <li>The most effective way to get information is the <a href="https://www.facebook.com/groups/heritageparkysa" target="_blank">Ward Facebook</a> page.</li>
                        <li>Upcoming events will also be announced in sacrament meeting each Sunday.</li>
                        <li>FHE activities are often Mondays.</li>
                    </ul>
                </Col>
                <Col span={16}>
                    <Collapse
                        items={[{ 
                            key: '1', 
                            label: 'Upcoming Ward Activities', 
                            children: (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <ActivitiesTable />
                                </Suspense>
                            )
                        }]}
                    />
                </Col>
            </Row>
        </section>
    );
}
