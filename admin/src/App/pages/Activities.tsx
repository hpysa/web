import { memo, useState } from "react";
import { Input, Button } from "antd";

const Activities = memo(() => {
    const [date, setDate] = useState("");
    const [activity, setActivity] = useState("");
    const [location, setLocation] = useState("");

    return (
        <section>
            <h2>Activities</h2>
            <form>
                <Input 
                    addonBefore="Date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <Input 
                    addonBefore="Activity"
                    placeholder="Activity"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                />
                <Input 
                    addonBefore="Location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <Button 
                    type="primary"
                    htmlType="submit"
                >
                    Submit
                </Button>
            </form>
        </section>
    );
});

export default Activities;
