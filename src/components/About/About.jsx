
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";





function About() {
  
    
    const [data, setData] = useState([])
     fetch('https://api.github.com/users/Nikhilsahu31')
     .then(response => response.json())
     .then(data => setData(data))
    
    
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-center text-gray-800 mb-8 "
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About Me
                </motion.h2>
                <motion.div
                    className="flex flex-col md:flex-row items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <img
                           className="rounded-full shadow-lg w-full"
                           src={data.avatar_url}
                            alt="Avatar pic"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <motion.h3
                            className="text-3xl font-semibold text-gray-800 mb-4"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Hi, I'm NIKHIL
                        </motion.h3>
                        <motion.p
                            className="text-lg text-gray-600 mb-6"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            I’m a passionate web developer with a strong background in front-end technologies, specializing in creating beautiful, functional, and responsive websites. I love turning ideas into reality using code. With a deep understanding of HTML, CSS, JavaScript, and modern frameworks like React, I build seamless user experiences.
                        </motion.p>
                        <motion.p
                            className="text-lg text-gray-600 mb-6"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            With a keen eye for detail and a commitment to delivering high-quality work, I stay updated with the latest industry trends to ensure that every project I work on is not only functional but also visually stunning.
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                HTML5
                            </span>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                CSS3
                            </span>
                            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                JavaScript
                            </span>
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                React
                            </span>
                            <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                Tailwind
                            </span>
                            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                Git & GitHub
                            </span>
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                Responsive Design
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
   
  )
}

export default About

    
