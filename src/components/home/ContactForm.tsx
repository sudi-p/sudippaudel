import { TextField } from "@mui/material";
import React, { ReactNode, useState } from "react";
import emailjs from "@emailjs/browser";
import { LuAlertTriangle } from "react-icons/lu";
import { VscClose } from "react-icons/vsc";
import { BsChatFill, BsCheckCircleFill } from "react-icons/bs";

type ContactFormProps = {
  setShowContactForm: (a: boolean) => void;
};

const ContactForm = ({ setShowContactForm }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please complete all form fields.");
      setEmailSent(false);
      return;
    }

    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      setEmailSent(false);
      return;
    }

    setError("");
    setIsSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: name.trim(),
          user_email: email.trim(),
          message: message.trim(),
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID! },
      );

      setEmailSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (emailError) {
      console.log("FAILED...", emailError);
      setError("Could not send your message right now. Please try again.");
      setEmailSent(false);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-cyan-900/90 px-4 py-8 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200/80 bg-white/95 shadow-2xl">
        <div className="relative border-b border-slate-200 px-8 py-6">
          <p className="mb-2 inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
            Contact
          </p>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
            Thanks for taking the time to reach out. Share a bit about your
            project, challenge, or idea and I&apos;ll get back to you soon.
          </p>
          <button
            type="button"
            aria-label="Close contact form"
            className="absolute right-6 top-6 rounded-full border border-slate-300 p-2 text-2xl text-slate-600 transition hover:-rotate-6 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-800"
            onClick={() => setShowContactForm(false)}
          >
            <VscClose />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 px-6 py-8 sm:px-8 sm:py-10"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <TextField
              id="contact-name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              name="user_name"
              variant="filled"
              InputProps={{ disableUnderline: true }}
            />
            <TextField
              id="contact-email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              name="user_email"
              variant="filled"
              InputProps={{ disableUnderline: true }}
            />
          </div>

          <TextField
            id="contact-message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            label="Message"
            multiline
            rows={6}
            name="message"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />

          {error && (
            <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              <LuAlertTriangle />
              {error}
            </div>
          )}

          {emailSent && !error && (
            <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              <BsCheckCircleFill />
              Message sent successfully.
            </div>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              I usually respond within 24-48 hours.
            </p>
            <Button primaryColor="#0f172a" type="submit" disabled={isSending}>
              {emailSent ? <BsCheckCircleFill /> : <BsChatFill />}
              {isSending
                ? "Sending..."
                : emailSent
                  ? "Message Sent"
                  : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

type ButtonProps = {
  primaryColor: string;
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
};

const Button = ({
  primaryColor,
  children,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      style={{
        backgroundColor: primaryColor,
        borderColor: primaryColor,
      }}
      className="inline-flex min-w-52 items-center justify-center gap-2 rounded-xl border-2 px-6 py-3 font-semibold text-white transition duration-200 ease-in hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
    >
      {children}
    </button>
  );
};
