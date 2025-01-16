"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mqkvakda");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <form id="inquiry" onSubmit={handleSubmit} className="mx-8 mb-8">
            <div className="mb-4">
                <label htmlFor="name" className="text-gray-700 font-medium">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="organization"
                    className="text-gray-700 font-medium">
                    Organization
                </label>
                <input
                    id="organization"
                    type="text"
                    name="organization"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                />
                <ValidationError
                    prefix="Organization"
                    field="organization"
                    errors={state.errors}
                    className="text-red-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="text-gray-700 font-medium">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500"
                />
            </div>
            <button
                type="submit"
                disabled={state.submitting}
                className="bg-primary text-white font-medium py-2 px-4 focus:outline-none rounded-full">
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
