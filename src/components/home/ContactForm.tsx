import { TextField } from '@mui/material';
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { MdDone } from "react-icons/md";
import { VscClose } from "react-icons/vsc";

type ContactFormProps = {
  setShowContactForm: (a: boolean) => void,
}
const ContactForm = ({ setShowContactForm }: ContactFormProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);
  const handleSubmit = () => {
    if (form.current !== null) {
      setEmailSent(true)
      form.current.reset();
      //   emailjs
      //     .sendForm(
      //       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      //       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      //       form.current,
      //       { publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,}
      //     )
      //     .then(
      //       () => {
      //         console.log('SUCCESS!');
      //       },
      //       (error) => {
      //         console.log('FAILED...', error.text);
      //       },
      //     );
    }
  };
  return (
    <div className="z-20 fixed inset-0 bg-white overflow-hidden" >
      <div className="flex p-10 border-b border-solid border-gray-300 h-32">
        <span className="font-bold text-4xl">sudipPaudel</span>
        <div
          className="z-30 absolute top-10 right-24 text-5xl hover:rotate-12"
          onClick={() => setShowContactForm(false)}
        >
          <VscClose />
        </div>
      </div>
      <form ref={form} className="m-auto text-center w-2/5 mt-20">
        <div className="text-3xl leading-normal mb-12">
          Thanks for taking the time to reach out.<br />
          How can I help you today?
        </div>
        <div className="flex gap-10 w-full mb-12">
          <TextField
            id="standard-multiline-flexible"
            label="Name"
            multiline
            fullWidth
            maxRows={4}
            name="user_name"
            variant="standard"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Email"
            multiline
            fullWidth
            maxRows={4}
            name="user_email"
            variant="standard"
          />
        </div>
        <TextField
          id="standard-multiline-static"
          fullWidth
          label="Message"
          multiline
          rows={4}
          name="message"
          className="mb-12"
          variant="standard"
        />
        {emailSent ? <div className="p-3 flex items-center gap-1 w-max rounded-md m-auto font-bold  bg-green-300 transition-all duration-200 ease-in"><MdDone/>Sent</div> : <div onClick={handleSubmit} className="btn"> Send</div>}
      </form>
    </div>
  )
}

export default ContactForm;

