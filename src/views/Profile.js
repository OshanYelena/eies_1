import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://scontent.fcmb1-2.fna.fbcdn.net/v/t31.18172-8/11411976_440169822835864_5751233334378742710_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=M1HnOur5YXkAX_327Nr&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT-e92JLIT8yBPATG2SYwDZNuaVX-brC3GdvUhyYRiiTPw&oe=631649EC')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="relative pt-10 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Electrical And Information Engineering Society (EIES)
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-20 bg-yellow-500">
          <div className="container  mx-auto px-6">
            <div className="relative  flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      {/* <img
                        alt="..."
                        // src={require("assets/img/EIES LOGO.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px"
                      /> */}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0"></div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
                </div>
                <div className="text-center mt-20">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Vision
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Shaping the future of the department by preparing the
                        undergraduates of the DEIE for a better future through
                        valuable and meaningful experiences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-20">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Mission
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Electrical and Information Engineering Society strives
                        to support undergraduates of DEIE to advance in their
                        careers by allowing them to develop not only academic
                        and technical skills but also leadership, interpersonal
                        and professional skills. And provides opportunities for
                        electrical and information engineering students to
                        embrace rapidly evolving technology advancements and
                        industrial changes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Meet Our EX-COM</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500"></p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"></div>{" "}
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/eies/Screenshot 2022-08-09 at 2.28.07 PM.png")
                        .default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Dr. Subodha Gunawardena
                    </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Senior Treasurer
                    </p>
                    <div className="mt-6"></div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/eies/Screenshot 2022-08-09 at 2.27.59 PM.png")
                        .default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Dr. N.W. Prins</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Committee Member <br /> (staff Member)
                    </p>
                    <div className="mt-6">
                      {/* <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/gihan-dissanayaka-9947b3216/">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"></div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/eies/285060138_2210271425792332_6938791227062502464_n - Gihan Dissanayaka.jpg")
                        .default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Gihan Dissanayaka</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      President
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/gihan-dissanayaka-9947b3216/">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/eies/4.vice president.png").default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Shashika Vimarshana</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Vice President
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/sajitha-wijewantha-7a5a76200">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/eies/2. secretary.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Chathurya Wickramathilaka{" "}
                    </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Secretary
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="http://linkedin.com/in/chathuryawickramathilaka">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/eies/3.ass sec.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Sanduni Dissanayaka</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Assistant Secretary
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/sanduni-dissanayaka-b83101207">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/eies/5.socail sec.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Poorna Manjula </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Social Secretary
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/sajitha-wijewantha-7a5a76200">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/eies/6.junior treasurer.png").default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Kashyapa Rathnasekara{" "}
                    </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Junior Treasurer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/sajitha-wijewantha-7a5a76200">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/eies/16.editor.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Thihara kumarasinghe</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Editor
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href=""></a>
                        <i className="fab fa-linkedin"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/eies/7.committee member.png").default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Thiwanka Silva </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Committee Member
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/sajitha-wijewantha-7a5a76200">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/eies/8.committee member.png").default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Samika Lakshan </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Committee Member
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/sajitha-wijewantha-7a5a76200">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/eies/9.committee member.png").default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Rohan Silva </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Committee Member
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/sajitha-wijewantha-7a5a76200">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/eies/Sachini - Chamathka Sachini.png")
                        .default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Sachini Ranaweera </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Committee member
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/sachini-ranaweera-398964208">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/eies/Image-218_-_Copy__2_-removebg-preview (1) - Sajitha Wijewantha.jpg")
                        .default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Sajitha Wijewantha </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Committee Member
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/sajitha-wijewantha-7a5a76200">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/software/12.software pres.png")
                        .default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jayod Jayasekara </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      President - Software Circle
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <a href="https://www.linkedin.com/in/jayod-kavinda/">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/eies/Photo - Gihan Dissanayaka.png")
                        .default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Bahasuru Fernando </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      President - Telecom Circle
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/bahasurufernando/">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/power/Photo - Nirmani Rathnayaka.jpg")
                        .default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Nirmani Rathnayaka</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      President - Power Circle
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/nirmani-rathnayaka">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={
                      require("assets/img/elec/20200802_125540 - Charitha Maduranga.jpg")
                        .default
                    }
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Charitha Maduranga </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      President - Electronic Circle
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        {" "}
                        <a href="https://www.linkedin.com/in/charithamaduranga-a29796149/">
                          {" "}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
