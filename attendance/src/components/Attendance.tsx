import { useMutation } from '@tanstack/react-query';
import { useState, memo, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Button, Input, Spin } from "antd";
import axios from "axios";

const Attendance = memo(() => {
  const [ip, setIP] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [loading, setLoading] = useState(false);

  const date: string = new Date().toLocaleDateString('en-US');
  const type: string = useParams().type || "";

  useEffect(() => { 
    const getData = async () => {
      const res = await axios.get("https://api.ipify.org/?format=json");
      setIP(res.data.ip);
    };

    getData();
  }, []);

  const postAttendance = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (!fName || !lName) {
      alert("Please enter your first and last name.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('First Name', fName);
    formData.append('Last Name', lName);
    formData.append('IP Address', ip);
    formData.append('Type', type);

    try {
      const apiUrl = "https://script.google.com/macros/s/AKfycbxQIBedkfDLfEvcYTy5M3yA77wVM697cLTiL_KabDw5x73Aw9nEN-9mX8Iq8sXFsxvfBA/exec";
      const res = await axios.post(apiUrl, formData);
      (res.status !== 200) ? 
        alert("There was an error. Please try again.") : 
        window.location.href = "/success";
    } catch (error) {
      console.error(error);
      alert("There was an error. Please try again.");
    }
  }
  
  const { mutate: handleSubmit } = useMutation({
    mutationKey: ['attendance'],
    mutationFn: postAttendance
  });

  let subTitle: string = "";
  if (type === "eq") {
    subTitle = "Elder's Quorum";
  } else if (type === "rs") {
    subTitle = "Relief Society";
  } else if (type === "ss") {
    subTitle = "Sunday School";
  }

  if (type === "" || subTitle === "") return (<></>);

  return (
    <>
      <header>
        <h1>Attendance</h1>
        <h2>{subTitle}</h2>
      </header>
      <section>
        <p>Thank you for participating in {subTitle}.</p>
        <p>Please fill out the form below to mark your attendance for {date}.</p>
      </section>
      { loading ? <p><Spin/>Loading...</p> :
        <form>
          <Input 
            addonBefore="First Name"
            placeholder="First Name"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <Input
            addonBefore="Last Name"
            placeholder="Last Name"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <Button 
            type="primary"
            htmlType="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      }
    </>
  );
});

export default Attendance;