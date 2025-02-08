import { FormEvent, useState } from "react"; 

const BuildingKeys = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxLDiKD3ja-axyR4NKp-Dbl2t5eUihrnPqUWeIi-EK66l1BprPd9Nsqm2xu6w7D7LzfuQ/exec';
    
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit(true);

        const data = new FormData(e.currentTarget);

        fetch(scriptURL, { method: 'POST', body: data})
            .then(res => (res && (location.href = '/success')))
            .catch(error => {
                console.error('Error!', error.message);
                setSubmit(false);
            });
    }

    return (
        <>
            <h2>Building Keys</h2>
            <form name="submit-to-google-sheet" method="POST" id="keys" onSubmit={e => handleSubmit(e)}>
                <section>
                    <label htmlFor="name">Name (First & Last): </label> <br />
                    <input type="text" id="name" name="name" />
                </section>
                <section>
                    <label htmlFor="calling">Calling(s): </label> <br />
                    <input type="text" id="calling" name="calling" />
                </section>
                <section>
                    <label htmlFor="keycode">Key Code: </label> <br />
                    <input type="text" id="keycode" name="keycode"/>
                </section>
                <br /><br />
                <button type="submit" disabled={submit}> Submit </button>
            </form>
        </>  
    );
}

export default BuildingKeys;
