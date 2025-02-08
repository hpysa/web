import { Row, Col } from "antd";
import { memo } from "react";

import Activities from "./Activities";
import Announcements from "./Announcements";
import StakeNight from "./StakeNight";
import Sacrament from "./Sacrament";
import Interview from "./Interview";
import MoreInfo from "./MoreInfo";

const Main = memo(() => (
    <>  
        <Announcements />
        <hr />
        <Row>
            <Col span={12}>
                <Sacrament />
            </Col>
            <Col span={12}>
                <StakeNight />
            </Col>
        </Row>
        <hr />
        <Activities />
        <hr />
        <Interview />
        <hr />
        <MoreInfo />
    </>
));

export default Main;
