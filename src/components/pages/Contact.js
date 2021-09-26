import React, {useState} from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {

    // hook to manage form data
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    function handleChange(evt) {
        if (evt.target.name === 'email') {
            const isVal = validateEmail(evt.target.value);
            console.log(isVal);
            if (!isVal) {
                setErrorMessage('Invalid Email!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!evt.target.value.length) {
                setErrorMessage(`${evt.target.name} required!`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [evt.target.name]: evt.target.value })
        }
    }
    // console.log(formState)

    // to handle the form submit
    function handleSubmit(evt) {
        evt.preventDefault();
        // console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;