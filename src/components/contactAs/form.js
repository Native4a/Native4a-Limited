import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import useContactForm from '../../hook/useContactForm';

const Form = () => {
    const form = useRef();
    const contactForm = useContactForm();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e1l76qn', 'template_hawc0j8', form.current, 'bm-LSlW5GT_wxLF0d')
            .then((result) => {
                console.log(result.text);
                console.log("send")
                setStatus('SUCCESS');
            }, (error) => {
                console.log(error.text);
                console.log("FAILED...", error);
            });
    };
    return (
        <div>
            {contactForm.map((item, index) => {
                const {
                    fieldsName,
                    fieldsEmail,
                    fieldsPhone,
                    fieldsWebsite,
                    fieldServices,
                    fieldFindus,
                    fieldMessage } = item;
                return (
                    <div className='px-4 md:px-0' key={index}>
                        <form ref={form} onSubmit={sendEmail}>
                            <label className="block">
                                <input
                                    name="user_name"
                                    type="text"
                                    className="p-3 my-4 block w-full rounded-md shadow-sm"
                                    placeholder={fieldsName}
                                    required/>
                            </label>
                            <label className="block">
                                <input
                                    name="user_phone"
                                    type="text"
                                    className="p-3 my-4 block w-full rounded-md shadow-sm"
                                    placeholder={fieldsPhone}
                                    required/>
                            </label>
                            <label className="block" for="emails">
                                <input
                                    name="user_email"
                                    type="email"
                                    multiple
                                    className="p-3 my-4 block w-full rounded-md shadow-sm"
                                    placeholder={fieldsEmail}
                                    required/>
                            </label>
                            <label className="block">
                                <input
                                    name='user_website'
                                    type="text"
                                    className="p-3 my-4 block w-full rounded-md shadow-sm"
                                    placeholder={fieldsWebsite} />
                            </label>
                            <label className="block">
                                <select
                                    name='use_usenquiryService'
                                    id="usenquiryService"
                                    className="p-3 my-4 block w-full rounded-md shadow-sm"
                                    placeholder={fieldServices[0]}
                                    required>
                                    <option value={fieldServices[0]} selected>{fieldServices[0]}</option>
                                    <option value={fieldServices[1]}>{fieldServices[1]}</option>
                                    <option value={fieldServices[2]}>{fieldServices[2]}</option>
                                    <option value={fieldServices[3]}>{fieldServices[3]}</option>
                                    <option value={fieldServices[4]}>{fieldServices[4]}</option>
                                    <option value={fieldServices[5]}>{fieldServices[5]}</option>
                                </select>
                            </label>
                            <label className="block">
                                <select
                                    name='use_findUs'
                                    id="findUs"
                                    className="p-3 my-4 block w-full rounded-md shadow-sm"
                                    placeholder={fieldFindus[0]}
                                    required>
                                    <option value={fieldFindus[0]} selected>{fieldFindus[0]}</option>
                                    <option value={fieldFindus[1]}>{fieldFindus[1]}</option>
                                    <option value={fieldFindus[2]}>{fieldFindus[2]}</option>
                                    <option value={fieldFindus[3]}>{fieldFindus[3]}</option>
                                    <option value={fieldFindus[4]}>{fieldFindus[4]}</option>
                                    <option value={fieldFindus[5]}>{fieldFindus[5]}</option>
                                </select>
                            </label>
                            <label className="block">
                                <textarea
                                    name="message"
                                    className="p-3 my-4 block w-full rounded-md shadow-sm"
                                    rows="6"
                                    cols="40"
                                    placeholder={fieldMessage}
                                    required>
                                </textarea>
                            </label>
                            {status && renderAlert()}
                            <input
                                type="submit"
                                value="立即報價"
                                className="cursor-pointer border rounded-full border-black text-black px-7 py-1.5 font-black text-xl hover:bg-amber-400 active:bg-amber-500" />
                        </form>
                    </div>
                );
            })}
        </div>
    );
};

const renderAlert = () => (
    <div className='text-green-600 mb-5'>
        <p>message submitted successfully!</p>
    </div>
)
export default Form