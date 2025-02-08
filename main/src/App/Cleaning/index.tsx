import { Input, Button } from "antd";
import { useState } from "react";

export default function Cleaning() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <>
            <h2>Church Cleaning</h2>
            <p>Please fill out if you are willing to help with church cleaning</p>
            <section>
                <Input 
                    placeholder="Name" 
                    addonBefore="Name:" 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <Input 
                    placeholder="Phone" 
                    addonBefore="Phone:" 
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                />
            </section>
            <Button 
                type="primary"
                htmlType="submit"
                onClick={e => handleSubmit(e)}
            >
                Submit
            </Button>
        </>
    );
}