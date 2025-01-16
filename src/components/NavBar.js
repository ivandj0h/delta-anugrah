"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 right-0 flex items-center justify-between py-4 px-8 bg-transparent text-white">
            <div className="logo">
                <Link href="">
                    <div>
                        <Image
                            src="/images/transparent.png"
                            width={40}
                            height={40}
                        />
                    </div>
                </Link>
            </div>

            <div className="md:absolute md:right-0 md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="z-10 flex items-center justify-center w-10 h-10 rounded-md focus:outline-none">
                    {isOpen ? (
                        <XIcon className="h-10 w-10" />
                    ) : (
                        <MenuIcon className="h-10 w-10" />
                    )}
                </button>
            </div>

            <div
                className={`absolute md:top-5 left-0 right-0 md:mr-5 menu ${
                    isOpen ? "" : "hidden"
                } md:flex`}>
                <ul
                    className={`absolute top-5 md:top-0 left-0 right-0 flex${
                        isOpen ? "-col" : ""
                    } justify-end md:space-x-8 md:w-full`}>
                    <li className="flex justify-center">
                        <a
                            className={`${
                                isOpen ? "my-4" : ""
                            } cursor-pointer hover:text-gray-300`}
                            href="/PDF/PRODUCTCATALOG.pdf"
                            target="_blank">
                            Products
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <a
                            className={`${
                                isOpen ? "my-4" : ""
                            } cursor-pointer hover:text-gray-300`}
                            href="/PDF/COMPANYPROFILE.pdf"
                            target="_blank">
                            Company Profile
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <a
                            className={`${
                                isOpen ? "my-4" : ""
                            } cursor-pointer hover:text-gray-300`}
                            href="#contact">
                            Contact
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <Link
                            className={`${
                                isOpen ? "my-4" : ""
                            } cursor-pointer hover:text-gray-300`}
                            href="#inquiry">
                            <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full cursor-pointer hover:text-gray-300">
                                Request a quote
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
