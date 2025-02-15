import useIpAddress from '@/hooks/useIpAddress';
import { Button, Input, Select, Spin } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import Chocolate from './Chocolate';
import FormSections from './FormSections';
import YesNoSelector from './YesNoSelector';

const apiUrl = "https://script.google.com/macros/s/AKfycbyAeWthC460ALMkODk348BbCEd3GgWtyX_Mqi8kkgSOba3-hOYtJwmueAY3vdHMQzpg/exec";

const Form = () => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState("Highland");
    const [zip, setZip] = useState('');
    const [stay, setStay] = useState('');
    const [plans, setPlans] = useState('');
    const [calling, setCalling] = useState('');
    const [sacrament, setSacrament] = useState("No");
    const [teaching, setTeaching] = useState('');
    const [music, setMusic] = useState('');
    const [share, setShare] = useState('');
    const [otherTalents, setOtherTalents] = useState('');
    const [candy, setCandy] = useState('');

    const [loading, setLoading] = useState(false);
    const ip = useIpAddress();

    const handleSubmit = async (e: any) => {
        setLoading(true);
        e.preventDefault();

        if (!fName || !lName || !dob || !gender || !address || !zip || !city) {
            alert('Missing Required Fields. Please try again.');
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('IP Address', ip);
        formData.append('First Name', fName);
        formData.append('Last Name', lName);
        formData.append('Date of Birth', dob);
        formData.append('Gender', gender);
        formData.append('Address', address);
        formData.append('City', city);
        formData.append('Zip', zip);
        formData.append('Length of Stay', stay);
        formData.append('Future Plans', plans);
        formData.append('Serve in the Ward', `Calling: ${calling}; Sacrament: ${sacrament}; Teaching: ${teaching}`);
        formData.append('Talents', `Music: ${music}; Willing to Share: ${share}; Other Talents: ${otherTalents}`);
        formData.append('Chocolate', candy);

        try {
            const { status } = await axios.post(apiUrl, formData);
            if (status !== 200) {
                alert(`Sorry ${fName}, there was an error. Please try again.`);
            } else {
                alert(`Thank you ${fName} for joining our ward!`);
                window.location.href = `/`;
            }
        } catch (error) {
			alert(`Sorry ${fName}, there was an error. Please try again.`);
            console.error(error);
        }

        setLoading(false);
    };

    return (
        <form>
            <section>
                <FormSections title="Personal Information" />
                <div>
                    <Input 
                        placeholder="First Name" 
                        addonBefore="First Name" 
                        onChange={(e) => setfName(e.target.value)} 
                        value={fName} 
                    />
                    <Input 
                        placeholder="Last Name" 
                        addonBefore="Last Name" 
                        onChange={(e) => setlName(e.target.value)}
                        value={lName}
                    />
                    <Input 
                        placeholder="DOB" 
                        addonBefore="Birthday" 
                        onChange={(e) => setDob(e.target.value)}
                        value={dob}
                    />
                </div>
                <div>
                    Gender
                    <Select 
                        onChange={(e) => setGender(e)} 
                        value={gender}
                    >
                        <Select.Option value="">Select</Select.Option>
                        <Select.Option value="Male">Male</Select.Option>
                        <Select.Option value="Female">Female</Select.Option>
                    </Select>
                </div>
            </section>
            
            <section>
                <FormSections title="Address" />
                <Input 
                    placeholder="Address" 
                    addonBefore="Address" 
                    onChange={(e) => setAddress(e.target.value)} 
                    value={address} 
                />
                <Input 
                    placeholder="Zip" 
                    addonBefore="Zip" 
                    onChange={(e) => setZip(e.target.value)}
                    value={zip}
                />
                <Input 
                    placeholder="City"
                    addonBefore="City"
                    onChange={(e) => setCity(e.target.value)} 
                    value={city}
                />
            </section>

            <section>    
                <FormSections title="Future Plans" />
                <div>
                    How long are you planning to stay in the ward area?
                    <Select 
                        onChange={(e) => setStay(e)} 
                        value={stay}
                    >
                        <Select.Option value="">Select</Select.Option>
                        <Select.Option value="Not Sure">Not Sure</Select.Option>
                        <Select.Option value="Less than 3 months">Less than 3 months</Select.Option>
                        <Select.Option value="Between 3-6 months">Between 3-6 months</Select.Option>
                        <Select.Option value="Over 6 months">Over 6 months</Select.Option>
                        <Select.Option value="Year">A year or longer</Select.Option>
                    </Select>
                </div>
                <br />
                <Input 
                    placeholder="Future Plans" 
                    addonBefore="What is next for you?" 
                    onChange={(e) => setPlans(e.target.value)}
                    value={plans}
                />
            </section>

            <section>
                <FormSections title="Service" />
                <YesNoSelector 
                    title="Are you willing to receive a calling?" 
                    value={calling} 
                    set={setCalling} 
                />
                <YesNoSelector
                    title="Would you like to teach a lesson for Sunday School, EQ or RS?"
                    value={teaching}
                    set={setTeaching}
                />
                { gender == "Male" && 
                    <YesNoSelector
                        title="Would you like to help bless or pass the sacrament?"
                        value={sacrament}
                        set={setSacrament}
                    />
                }
            </section>

            <section>
                <FormSections title="Talents" />
                <YesNoSelector
                    title="Do you have any musical talents?"
                    value={music}
                    set={setMusic}
                />
                { 
                    (music === "Yes") &&
                    <YesNoSelector 
                        title="Would you be willing to preforming music in sacrament meeting?"
                        value={share}
                        set={setShare}
                    />
                }
                <br />
                <Input 
                    placeholder="Other Talents" 
                    addonBefore="Do you have any Other Talents" 
                    onChange={(e) => setOtherTalents(e.target.value)}
                    value={otherTalents}
                />
            </section>
            
            <Chocolate value={candy} set={setCandy} />

            <br /><br />
            {
                loading ?
                <div>
                    <Spin />
                    Loading ...
                </div> :
                <Button 
                    type="primary"
                    htmlType="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Submit
                </Button>
            }            
        </form>
    );
}

export default Form;