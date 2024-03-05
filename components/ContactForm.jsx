"use client";

import {useState} from "react";

export default function ContactForm() {
    const [fullname,setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [error,setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Full name:",fullname);
        console.log("Email",email);
        console.log("Message",message);

        const res= await fetch("api/contact",{
            method:"POST",
            headers: {
                "Content-type": "applicaiton/json",
            },
            body:JSON.stringify({
                fullname,
                email,
                message,
            }),
        });

        const {msg} = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setFullname("");
            setEmail("");
            setMessage("");
        }
    };
    
    return (
    <>
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form
              onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Full Name
                      </label>
                      <input
                        onChange={(e) => setFullname(e.target.value)}
                        value={fullname}
                        type="fullname"
                        id="'setFullname"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Enter Email
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        id="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Enter Message
                      </label>
                      <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-green-500 px-9 py-4 text-white text-base font-medium shadow-submit duration-300 hover:bg-green-600 dark:shadow-submit-dark"type="submit">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>

              <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>

            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
          </div>
        </div>
      </div>
    </section>

    </>
  );
}