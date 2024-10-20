import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer
            className="bg-gray-800 text-white border-t border-gray-700 bg-cover bg-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1590502148726-931b4b16b63a?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Background image URL
            }}
        >
            <div className="mx-auto w-full max-w-screen-xl p-4 lg:p-6">
                <div className="text-center mb-4">
                    <h2 className="text-lg font-bold text-gray-300">
                        "Sports do not build character. They reveal it."
                    </h2>
                </div>
                <div className="md:flex md:justify-between">
                    <div className="mb-4 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <h1 className="mr-3 text-2xl font-bold text-gray-100">MatchPlay</h1> {/* MatchPlay Logo */}
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:gap-4 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-sm font-bold text-gray-200">Explore</h2>
                            <ul className="text-gray-400">
                                <li className="mb-2">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-bold text-gray-200">Connect</h2>
                            <ul className="text-gray-400">
                                <li className="mb-2">
                                    <Link to="/discord" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog" className="hover:underline">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-bold text-gray-200">Legal</h2>
                            <ul className="text-gray-400">
                                <li className="mb-2">
                                    <Link to="/privacy" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="hover:underline">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-gray-700" />
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <span className="text-sm text-gray-200 text-center">
                        © 2023 MatchPlay. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
