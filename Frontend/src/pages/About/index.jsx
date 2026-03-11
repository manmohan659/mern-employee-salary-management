import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./About.css";
import aboutImg from '../../assets/images/aboutSipeka.svg'
import '../../shared/Shared.css'
import { BottomLine } from "../../components/atoms";
import { Footer, Navbar } from "../../components";

const About = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            <Navbar />
            <div className="dark:bg-boxdark">
                <div className="parent pt-16 my-16">
                    <div>
                        <motion.div
                            className="mb-10"
                            initial={{ y: -200, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: { duration: 1, type: "spring" },
                            }}
                        >
                            <h3 className="text-neutral text-center dark:text-white">What is SiPeKa?</h3>
                            <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent dark:text-white">
                                About <span className="text-primary">Us</span>
                            </h1>
                            <BottomLine />
                            <p className="text-center text-sm mt-3 font-mono tracking-wide text-primary bg-primary/10 inline-block mx-auto px-4 py-1 rounded-full">
                                Version: v1.4.0
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <motion.div
                                initial={{ x: -200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <img
                                    src={aboutImg}
                                    alt="About SiPeKa"
                                    className="w-100 h-100 transform translate-y-[-12%]"
                                    title="About SiPeKa"
                                />

                            </motion.div>
                            <motion.div
                                initial={{ x: 200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <p className="font-medium text-center translate-y-[-60%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
                                    SiPeKa (Employee Payroll System) is a system used by companies to manage employee payroll efficiently and accurately.
                                    It plays a key role in automating payroll tasks such as salary calculation, attendance processing, and wage payments.
                                </p>
                                <br />
                                <p className="font-medium text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
                                    In SiPeKa, employee data such as personal info, position, and salary level is stored centrally.
                                    Each month, the system retrieves attendance data and calculates salaries accordingly.
                                    This includes factors such as working hours, leave, overtime, and deductions.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                {!isHomePage && <Footer />}
            </div>
        </>
    );
};

export default About;
