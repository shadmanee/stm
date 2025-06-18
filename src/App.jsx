import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Check system preference for dark mode on load
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "news",
        "research",
        "projects",
        // "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [tab, setTab] = useState("research");

  const research_projects = [
    {
      title: "PPDHero: Postpartum Depression Support System",
      description:
        "Designed and evaluated a web-based platform to empower new mothers struggling with postpartum depression, achieving SUS score of 84.58 from doctors.",
      tech: ["Web Development", "User Experience", "Health Tech"],
      link: "#",
    },
    {
      title: "Hydroferma: IoT Hydroponic Farming System",
      description:
        "Developed an autonomous hydroponic vertical farming system with ML automation achieving 80% accuracy in real-time decision-making.",
      tech: ["IoT", "Machine Learning", "Image Processing"],
      link: "#",
    },
    {
      title: "Unlocking Voices: Stutter Reduction Apps",
      description:
        "Evaluated usability and accessibility of mobile apps for stutter reduction, identifying 14 usability and 12 accessibility issues.",
      tech: ["Usability Testing", "Accessibility", "Mobile UX"],
      link: "#",
    },
    {
      title: "Surface EMG Signal Classification",
      description:
        "Explored dimensionality reduction techniques for word classification from surface EMG signals achieving 96.28% accuracy with Random Forest.",
      tech: ["Signal Processing", "Dimensionality Reduction", "ML Models"],
      link: "#",
    },
  ];

  const fun_projects = [
    {
      title: "Subscriptia",
      description:
        "Developed a full-stack e-commerce web app for subscription sales—integrating both frontend and backend with Django.",
      tech: ["Django", "HTML/CSS", "JavaScript", "E-commerce"],
      link: "#",
    },
    {
      title: "RFID-based Attendance System",
      description:
        "Built an Arduino-powered system to automate and record attendance using RFID cards and tags.",
      tech: ["Arduino", "RFID", "Embedded Systems"],
      link: "#",
    },
    {
      title: "Sapphire Necklace",
      description:
        "Created a 3D animated video from an original story using Blender—bringing imagination to life through animation.",
      tech: ["Blender", "3D Animation", "Storytelling"],
      link: "#",
    },
    {
      title: "Mental Health during Quarantine",
      description:
        "Produced an animation in Scratch to highlight the importance of mental health during the pandemic.",
      tech: ["Scratch", "Animation", "Awareness"],
      link: "#",
    },
  ];

  const form = useRef();

  useEffect(() => {
    emailjs.init("PM0KSpx2JfOFAhwMv");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_wtzjnzt", "template_3kvx8uj", form.current).then(
      () => {
        alert("Message Sent to Shadmanee!");
        console.log("SUCCESS!");
      },
      (error) => console.log("FAILED...", error)
    );
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } min-h-screen scroll-smooth`}
    >
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b ${
          darkMode
            ? "bg-black/80 border-gray-700"
            : "bg-white/80 border-gray-200"
        } backdrop-blur-md`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl">
              Shadmanee Tasneem Mulk
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {/* Navigation Links */}
                {[
                  "home",
                  "about",
                  "news",
                  "research",
                  "projects",
                  "contact",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item
                        ? darkMode
                          ? "text-teal-400 bg-gray-800"
                          : "text-teal-600 bg-gray-100"
                        : darkMode
                        ? "text-gray-300 hover:text-teal-400 hover:bg-gray-800"
                        : "text-gray-600 hover:text-teal-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}

                {/* Toggle Dark Mode Button */}
                <button
                  onClick={toggleDarkMode}
                  className="ml-4 p-2 rounded-full bg-opacity-70 backdrop-blur-sm transition-all duration-300 focus:outline-none"
                  style={{
                    backgroundColor: darkMode
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.1)",
                    color: darkMode ? "#fff" : "#000",
                  }}
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  darkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 bg-white hover:text-teal-600 hover:bg-gray-100"
                } focus:outline-none`}
              >
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["home", "about", "news", "research", "projects", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item
                      ? darkMode
                        ? "text-teal-400 bg-gray-700"
                        : "text-teal-600 bg-white"
                      : darkMode
                      ? "text-gray-300 hover:text-teal-400 hover:bg-gray-700"
                      : "text-gray-600 hover:text-teal-600 hover:bg-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              )
            )}

            {/* Dark Mode Toggle - Mobile */}
            <button
              onClick={toggleDarkMode}
              className={`flex items-center px-3 py-2 rounded-md text-left transition-all duration-300 ${
                darkMode
                  ? "text-gray-300 hover:text-teal-400 hover:bg-gray-700"
                  : "text-gray-600 bg-gray-100 hover:text-teal-600 hover:bg-white"
              }`}
              aria-label="Toggle Dark Mode"
            >
              <span className="mr-3">
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
            {/* Image Content */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div
                className={`w-80 h-80 ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } overflow-hidden border ${
                  darkMode ? "border-teal-500" : "border-teal-600"
                } rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300`}
              >
                <img
                  src="/stm/images/profile_2.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left tracking-tight">
                Hi, I am Shadmanee.
              </h1>
              {/* <span
                className={`${
                  darkMode ? "text-teal-400" : "text-teal-600"
                } block text-xl md:text-2xl font-medium text-center md:text-left`}
              >
                LLM | Data Science | Human-Centered Computing
              </span> */}

              {/* Attachments Card Section */}
              <div
                className={`mt-4 p-5 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                } border-l-4 ${
                  darkMode ? "border-teal-500" : "border-teal-600"
                }`}
              >
                <ul
                  className={`space-y-3 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-5 h-5 mr-2 mt-0.5 ${
                        darkMode ? "text-teal-400" : "text-teal-600"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span>
                      AI/ML, LLM, Data Science, Human-Centered Computing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-5 h-5 mr-2 mt-0.5 ${
                        darkMode ? "text-teal-400" : "text-teal-600"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Junior Data Scientist at IDARE, Houston, TX</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-5 h-5 mr-2 mt-0.5 ${
                        darkMode ? "text-teal-400" : "text-teal-600"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    <span>
                      MSc in CSE at BRAC University, Dhaka, Bangladesh
                    </span>
                  </li>
                </ul>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
                <a
                  href="#contact"
                  className={`${
                    darkMode
                      ? "bg-teal-500 hover:bg-teal-600 hover:text-white"
                      : "bg-teal-600 hover:bg-teal-700 hover:text-white"
                  } text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg`}
                >
                  Get in Touch
                </a>
                {/* <a
                  href="#projects"
                  className={`${
                    darkMode
                      ? "border border-teal-500 hover:border-teal-400 text-teal-500 hover:text-teal-400"
                      : "border border-teal-500 hover:border-teal-700 text-teal-600 hover:text-teal-700"
                  } px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-sm hover:shadow-md`}
                >
                  View Projects
                </a> */}
                <a
                  href="/stm/files/Shadmanee_Tasneem_Mulk_CV.pdf"
                  download
                  className={`${
                    darkMode
                      ? "border border-teal-500 hover:border-teal-400 text-teal-500 hover:text-teal-400"
                      : "border border-teal-500 hover:border-teal-700 text-teal-600 hover:text-teal-700"
                  } px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-sm hover:shadow-md`}
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} py-16`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>

          <div className="grid grid-cols-1 gap-12 items-start">
            {/* Personal Bio */}
            <div className="space-y-6">
              {" "}
              {/* 👈 Unified spacing using Tailwind's space-y */}
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I am currently pursuing my Master of Science in Computer Science
                and Engineering at BRAC University while working as a Junior
                Data Scientist at{" "}
                <a
                  href="https://idare.io/"
                  className={`${
                    darkMode
                      ? "text-teal-400 hover:text-teal-300"
                      : "text-teal-600 hover:text-teal-700"
                  } inline-flex items-center`}
                >
                  IDARE
                </a>
                , a Houston-based AutoML startup.
              </p>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                My research background and interests broadly span LLM
                engineering, human-centered AI, and high-impact data
                applications. Recently, I've been building LLM-powered, agentic
                systems to turn raw, complex data into interpretable insight
                streams for non-technical decision-makers. As an AI Research
                Apprentice, I designed sustainability-oriented forecasting
                pipelines and prototyped no-code AI tools for the energy sector.
              </p>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Before this, I earned my BSc in CSE from the Military Institute
                of Science and Technology in April 2024. As an undergraduate
                researcher, I have published in international conferences such
                as{" "}
                <a
                  href="https://www.mirlabs.org/isda23/"
                  className={`${
                    darkMode
                      ? "text-teal-400 hover:text-teal-300"
                      : "text-teal-600 hover:text-teal-700"
                  } inline-flex items-center`}
                >
                  ISDA 2023
                </a>{" "}
                and{" "}
                <a
                  href="https://iccit.org.bd/2024/"
                  className={`${
                    darkMode
                      ? "text-teal-400 hover:text-teal-300"
                      : "text-teal-600 hover:text-teal-700"
                  } inline-flex items-center`}
                >
                  ICCIT 2024
                </a>
                .
              </p>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                When I'm not working, you'll find me geeking out over{" "}
                <a
                  href=""
                  className={`${
                    darkMode
                      ? "text-teal-400 hover:text-teal-300"
                      : "text-teal-600 hover:text-teal-700"
                  } inline-flex items-center`}
                >
                  books and TV shows
                </a>{" "}
                or poorly crocheting bucket hats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className={`py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">News</h2>

          <div className="space-y-8">
            {/* Example News Item */}
            <div
              className={`${
                darkMode ? "bg-gray-700" : "bg-white"
              } p-6 rounded-lg shadow-md`}
            >
              <time
                className={`block text-sm mb-2 ${
                  darkMode ? "text-teal-400" : "text-teal-600"
                }`}
              >
                17 June 2025
              </time>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                I'm starting my Masters in CSE at BRAC University!
              </p>
            </div>
            <div
              className={`${
                darkMode ? "bg-gray-700" : "bg-white"
              } p-6 rounded-lg shadow-md`}
            >
              <time
                className={`block text-sm mb-2 ${
                  darkMode ? "text-teal-400" : "text-teal-600"
                }`}
              >
                10 June 2025
              </time>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                Two of my research papers were accepted and published at ICCIT
                2024!
              </p>
            </div>
            <div
              className={`${
                darkMode ? "bg-gray-700" : "bg-white"
              } p-6 rounded-lg shadow-md`}
            >
              <time
                className={`block text-sm mb-2 ${
                  darkMode ? "text-teal-400" : "text-teal-600"
                }`}
              >
                1 May 2025
              </time>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                I got promoted to Junior Data Scientist at IDARE!
              </p>
            </div>
            <div
              className={`${
                darkMode ? "bg-gray-700" : "bg-white"
              } p-6 rounded-lg shadow-md`}
            >
              <time
                className={`block text-sm mb-2 ${
                  darkMode ? "text-teal-400" : "text-teal-600"
                }`}
              >
                2 August 2024
              </time>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                I published my first paper as a co-author at ISDA 2023! Read it{" "}
                <a
                  href=""
                  className={`${
                    darkMode
                      ? "text-teal-400 hover:text-teal-300"
                      : "text-teal-600 hover:text-teal-700"
                  } inline-flex items-center`}
                >
                  here
                </a>
                .
              </p>
            </div>
            <div
              className={`${
                darkMode ? "bg-gray-700" : "bg-white"
              } p-6 rounded-lg shadow-md`}
            >
              <time
                className={`block text-sm mb-2 ${
                  darkMode ? "text-teal-400" : "text-teal-600"
                }`}
              >
                2 May 2024
              </time>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                I got my first job at IDARE as an AI Research Apprentice!
              </p>
            </div>
            <div
              className={`${
                darkMode ? "bg-gray-700" : "bg-white"
              } p-6 rounded-lg shadow-md`}
            >
              <time
                className={`block text-sm mb-2 ${
                  darkMode ? "text-teal-400" : "text-teal-600"
                }`}
              >
                4 April 2024
              </time>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                I graduated with my Bachelor degree in CSE from Military
                Institute of Science and Technology.
              </p>
            </div>

            {/* You can keep adding more updates here */}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section
        id="research"
        className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} py-16`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Research</h2>
          {/* Areas of Interest */}
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            } p-6 rounded-lg`}
          >
            <h3 className="text-2xl font-semibold mb-4">Areas of Interest</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "LLM Engineering & Agentic AI",
                  description:
                    "Building robust LLM-powered systems that automate data analysis and deliver real-time, actionable insights for both technical and non-technical users.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-8 w-8 ${
                        darkMode ? "text-teal-400" : "text-teal-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Human-Centered AI",
                  description:
                    "Designing data-driven solutions for real people—ranging from digital well-being tools to accessible apps for mental health and communication.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-8 w-8 ${
                        darkMode ? "text-teal-400" : "text-teal-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Data Science",
                  description:
                    "Transforming raw, messy data into real-world impact through machine learning, analytics, and interactive visualizations.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-8 w-8 ${
                        darkMode ? "text-teal-400" : "text-teal-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  ),
                },
              ].map((interest, index) => (
                <div
                  key={index}
                  className={`${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  } p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="mb-4">{interest.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">
                    {interest.title}
                  </h3>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Research Areas */}
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            } p-6 rounded-lg`}
          >
            <h3 className="text-2xl font-semibold mb-4">What I’m Working On</h3>
            <ul
              className={`list-disc list-inside ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } space-y-2`}
            >
              <li>
                <b>Automated AI Agents for Data-Rich Domains:</b> Building
                LLM-based chatbots and agentic tools that make raw, complex data
                easy to query, especially in the energy and sustainability
                sectors.
              </li>
              {/* <li>
                <b>Tech for Well-being:</b> Designing digital solutions that support mental health, from postpartum support platforms to communication tools for children.
              </li> */}
              {/* <li>
                <b>IoT-Driven Decision Making:</b> Developing real-time ML models for applications like vertical farming, where sensor data drives smarter automation and crop management.
              </li>
              <li>
                <b>Signal Processing + ML:</b> Exploring dimensionality reduction and machine learning techniques for better understanding signals—like turning muscle activity into actionable insight.
              </li> */}
            </ul>
          </div>
          {/* Featured Publications */}
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            } p-6 rounded-lg`}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Featured Publications
            </h3>
            <ul
              className={`list-disc list-inside ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } space-y-2`}
            >
              <li>
                <a
                  href="https://doi.org/10.1109/ICCIT64611.2024.11022487"
                  className={`${
                    darkMode
                      ? "text-teal-400 hover:text-teal-300"
                      : "text-teal-600 hover:text-teal-700"
                  } underline`}
                >
                  Exploring Dimensionality Reduction Techniques in Word
                  Classification using Surface EMG Signals (ICCIT 2024)
                </a>
              </li>
              <li>
                <a
                  href="https://doi.org/10.1109/ICCIT64611.2024.11022350"
                  className={`${
                    darkMode
                      ? "text-teal-400 hover:text-teal-300"
                      : "text-teal-600 hover:text-teal-700"
                  } underline`}
                >
                  Unlocking Voices: Assessing Usability and Accessibility of
                  Mobile Apps for Stutter Reduction (ICCIT 2024)
                </a>
              </li>
              <li>
                <a
                  href="https://doi.org/10.1007/978-3-031-64850-2_37"
                  className={`${
                    darkMode
                      ? "text-teal-400 hover:text-teal-300"
                      : "text-teal-600 hover:text-teal-700"
                  } underline`}
                >
                  PPDHero: Requirements Elicitation and Development of a System
                  to Empower New Mothers on Postpartum Depression (ISDA 2023)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          {/* Tabs */}
          <div className="flex space-x-4 mb-8">
            <button
              className={`px-6 py-2 rounded-t-lg font-medium focus:outline-none transition-colors duration-200
                ${
                  tab === "research"
                    ? darkMode
                      ? "bg-gray-700 text-teal-400 border-b-2 border-teal-400"
                      : "bg-gray-100 text-teal-600 border-b-2 border-teal-600"
                    : darkMode
                    ? "bg-gray-800 text-gray-300 hover:text-teal-300"
                    : "bg-gray-200 text-gray-600 hover:text-teal-600"
                }`}
              onClick={() => setTab("research")}
            >
              Research
            </button>
            <button
              className={`px-6 py-2 rounded-t-lg font-medium focus:outline-none transition-colors duration-200
                ${
                  tab === "fun"
                    ? darkMode
                      ? "bg-gray-700 text-teal-400 border-b-2 border-teal-400"
                      : "bg-gray-100 text-teal-600 border-b-2 border-teal-600"
                    : darkMode
                    ? "bg-gray-800 text-gray-300 hover:text-teal-300"
                    : "bg-gray-200 text-gray-600 hover:text-teal-600"
                }`}
              onClick={() => setTab("fun")}
            >
              Extracurricular
            </button>
          </div>
          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(tab === "research" ? research_projects : fun_projects).map(
              (project, index) => (
                <div
                  key={index}
                  className={`${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  } rounded-lg overflow-hidden transition-all duration-300`}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 mt-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`${
                            darkMode ? "bg-gray-800" : "bg-gray-300"
                          } px-3 py-1 rounded-full text-xs`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className={`${
                        darkMode
                          ? "text-teal-400 hover:text-teal-300"
                          : "text-teal-600 hover:text-teal-700"
                      } inline-flex items-center`}
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} py-16`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } mb-6`}
              >
                Let’s connect! I’m always excited to exchange ideas and
                collaborate with fellow researchers, grad students, and
                professionals working with LLMs, data science, and AI.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                      darkMode ? "text-teal-400" : "text-teal-600"
                    } mr-3`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>shadmaneetasneemm@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                      darkMode ? "text-teal-400" : "text-teal-600"
                    } mr-3`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                      darkMode ? "text-teal-400" : "text-teal-600"
                    } mr-3`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Available for collaboration</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/shadmanee-tasneem/"
                    className={`${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-500"
                        : "bg-gray-200 hover:bg-gray-300"
                    } p-3 rounded-full transition-colors duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${
                        darkMode ? "text-teal-400" : "text-teal-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:shadmaneetasneemm@gmail.com"
                    className={`${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-500"
                        : "bg-gray-200 hover:bg-gray-300"
                    } p-3 rounded-full transition-colors duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${
                        darkMode ? "text-teal-400" : "text-teal-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=HLc8PGwAAAAJ&hl=en&oi=ao"
                    className={`${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-500"
                        : "bg-gray-200 hover:bg-gray-300"
                    } p-3 rounded-full transition-colors duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${
                        darkMode ? "text-teal-400" : "text-teal-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } p-6 rounded-lg`}
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                {/* Static time field */}
                <input type="hidden" name="time" value="Mar 10 2025 08:46" />

                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } mb-1`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full px-4 py-2 ${
                      darkMode
                        ? "bg-gray-800 border-gray-600"
                        : "bg-white border-gray-300"
                    } border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } mb-1`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-2 ${
                      darkMode
                        ? "bg-gray-800 border-gray-600"
                        : "bg-white border-gray-300"
                    } border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } mb-1`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className={`w-full px-4 py-2 ${
                      darkMode
                        ? "bg-gray-800 border-gray-600"
                        : "bg-white border-gray-300"
                    } border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`${
                    darkMode
                      ? "bg-teal-500 hover:bg-teal-600"
                      : "bg-teal-600 hover:bg-teal-700"
                  } text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${
          darkMode ? "bg-black border-gray-800" : "bg-white border-gray-200"
        } py-8 border-t`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              © 2025 Shadmanee Tasneem Mulk. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <p className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Designed and built with React & TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
