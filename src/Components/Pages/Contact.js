import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (name && email && message) {
      emailjs
        .sendForm(
          "service_nr9smfo",
          "template_da8b04c",
          form.current,
          "NU1AbEAbbOjC8_grS"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message Sent", {
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    if (!name) {
      toast.error("Name is required", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!email) {
      toast.error("Email is required", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!message) {
      toast.error("Message is required", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="my-28">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-300 text-gray-900">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="text-gray-600">
              Contact with our team to get more <br /> information about our
              services.
            </div>
          </div>
          <img
            src="assets/svg/doodle.svg"
            alt=""
            className="p-6 h-52 md:h-64"
          />
        </div>
        <form
          onSubmit={sendEmail}
          ref={form}
          novalidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label for="name" className="text-sm">
              Full name
            </label>
            <input
              name="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-gray-200"
            />
          </div>
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full p-3 rounded bg-gray-200"
            />
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea
              name="message"
              rows="3"
              className="w-full p-3 rounded bg-gray-200"
              spellcheck="false"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold btn btn-outline tracking-wide uppercase rounded bg-pink-500 text-gray-900 border-0"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
