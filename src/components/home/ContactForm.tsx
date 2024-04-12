import { TextField } from '@mui/material';
import React, { useEffect, useRef } from 'react'
import { VscClose } from "react-icons/vsc";

type ContactFormProps = {
  setShowContactForm: (a: boolean) => void,
}
const ContactForm = ({ setShowContactForm }: ContactFormProps) => {
  const nameRef = useRef();
  const handleSubmit = () => {

  }
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
      <div className="m-auto text-center w-2/5 mt-20">
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
            ref=nameRef
            variant="standard"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Email"
            multiline
            fullWidth
            maxRows={4}
            variant="standard"
          />
        </div>
        <TextField
          id="standard-multiline-static"
          fullWidth
          label="Message"
          multiline
          rows={4}
          className="mb-12"
          variant="standard"
        />
        <div className="btn">Send</div>
      </div>
    </div>
  )
}

export default ContactForm;