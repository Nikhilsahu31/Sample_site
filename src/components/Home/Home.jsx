import React from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <section className="h-screen flex items-center justify-center bg-gray-100 text-slate-900">
            <div className="max-w-4xl text-center px-6">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                >
                    Hi, I'm NIKHIL
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl mb-8"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    A passionate Web Developer with a focus on building responsive, high-quality websites and web applications. I turn complex ideas into simple, beautiful, and functional digital experiences.
                </motion.p>
                <motion.div
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <Link
                        to="/about"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg md:text-xl"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-slate-900 font-bold py-3 px-6 rounded-lg text-lg md:text-xl"
                    >
                        Contact Me
                    </Link>
                </motion.div>
                <motion.div
                    className="mt-12 text-lg md:text-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <p>
                        I specialize in modern JavaScript frameworks like React. Whether you're looking to build a new website or improve an existing one, I’m here to help you achieve your goals.
                    </p>
                </motion.div>
                
            </div>
        </section>
    );
};

export default Home;
