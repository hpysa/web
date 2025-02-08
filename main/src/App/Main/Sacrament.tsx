import { Tooltip } from "antd";

export default function Sacrament() {
    return (
        <section>
            <h2>Sacrament Meeting</h2>
            <p>
                <Tooltip title="10380 N 6000 W, Highland, UT 84003">
                    <a href="https://goo.gl/maps/LC6crS6CaqCwwARV9" target="_blank">Strasburg Building </a>
                </Tooltip>
                at 10 am Sunday
            </p>
            <p>If you are planning to, or have already moved your records into the ward. <br /> Please fill out this <a href="https://tinyurl.com/HPYSAQ">questionnaire</a>.</p>
        </section>
    );
}