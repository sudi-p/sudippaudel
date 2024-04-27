import { TextField } from '@mui/material';
import React, { ReactNode, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { LuAlertTriangle } from "react-icons/lu";
import { VscClose } from "react-icons/vsc";
import { BsChatFill, BsCheckCircleFill } from "react-icons/bs";

type ContactFormProps = {
  setShowContactForm: (a: boolean) => void,
}
const ContactForm = ({ setShowContactForm }: ContactFormProps) => {
  const form = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const handleSubmit = () => {
    if (nameRef.current && emailRef.current && messageRef.current) {
      if (!nameRef.current.value || !emailRef.current.value || !messageRef.current.value) setError("Please complete the form.")
      else {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            {
              user_name: nameRef.current.value,
              user_email: emailRef.current.value,
              message: messageRef.current.value,
            },
            { publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID!, }
          )
          .then(
            () => {
              setEmailSent(true);
              setError("");
              if (nameRef.current !== null) { nameRef.current.value = ""; }
              if (emailRef.current !== null) { emailRef.current.value = ""; }
              if (messageRef.current !== null) { messageRef.current.value = ""; }
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      }
    }
  };
  return (
    <div className="z-50 fixed inset-0 bg-white overflow-scroll" >
      <div className="flex p-8 border-b border-solid border-gray-300 h-32">
        <span className="font-bold text-4xl">sudipPaudel</span>
        <div
          className="z-30 absolute top-10 right-24 text-5xl hover:rotate-12"
          onClick={() => setShowContactForm(false)}
        >
          <VscClose />
        </div>
      </div>
      <form ref={form} className="mx-auto text-center w-4/5 lg:w-3/5 xl:w-2/5 my-10">
        <div className="text-3xl leading-normal mb-10">
          Thanks for taking the time to reach out.<br />
          How can I help you today?
        </div>
        <div className="flex flex-col sm:flex-row gap-10 w-full mb-10">
          <TextField
            id="standard-multiline-flexible"
            label="Name"
            inputRef={nameRef}
            multiline
            fullWidth
            maxRows={4}
            name="user_name"
            variant="standard"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Email"
            inputRef={emailRef}
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
          inputRef={messageRef}
          label="Message"
          multiline
          rows={6}
          name="message"
          className="mb-12"
          variant="standard"
        />
        {error && (
          <div className="text-red-500 bg-red-100 p-3 mb-8 flex justify-center items-center gap-2"> <LuAlertTriangle />
           {error}</div>
        )}
        {emailSent ? (
          <Button handleClick={() => setEmailSent(false)} primaryColor="#2ecc71">
            <BsCheckCircleFill />Message Sent
          </Button>
        )
          : <Button handleClick={handleSubmit} primaryColor="#3498db">
            <BsChatFill /> Send
          </Button>}
      </form>
    </div>
  )
}

export default ContactForm;
type ButtonProps = {
  primaryColor: string,
  children: ReactNode,
  handleClick: () => void,

}

const Button = function ({ primaryColor, children, handleClick }: ButtonProps) {
  return (
    <div
      onClick={handleClick}
      style={{ borderColor: primaryColor, color: primaryColor }}
      className={`py-3 px-6 flex items-center gap-2 w-60 justify-center rounded-lg m-auto font-bold transition-all duration-200 ease-in cursor-pointer border-2 border-solid`}>
      {children}
    </div>
  )
}