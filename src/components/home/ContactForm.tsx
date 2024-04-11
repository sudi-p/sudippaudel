import { TextField } from '@mui/material';
import React from 'react'
import { VscClose } from "react-icons/vsc";

type ContactFormProps = {
  setShowContactForm: (a: boolean) => void,
}
const ContactForm = ({ setShowContactForm }: ContactFormProps) => {
  return (
    <div className="z-20 absolute top-0 bottom-0 right-0 left-0 bg-white" >
      <div
        className="z-30 absolute top-10 right-28 text-5xl hover:rotate-12"
        onClick={() => setShowContactForm(false)}
      >
        <VscClose />
      </div>
      <div className="m-auto text-center w-1/3 mt-32">
        Thanks for taking the time to reach out.<br />
        How can I help you today?
        <div className="flex gap-10 w-full">
          <TextField
            id="standard-multiline-flexible"
            label="Name"
            multiline
            fullWidth
            maxRows={4}
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
          variant="standard"
        />

      </div>
    </div>
  )
}

export default ContactForm;