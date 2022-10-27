import React from "react";

export default function Section() {
  return (
    <div className="mt-[90px]  ">
      <div className="flex gap-8 flex-col lg:flex-row items-center container m-auto">
        <div>
          <img
            className="hidden md:block  px-[60px] xl:max-w-[500px] max-w-[400px] "
            src="/section/1.webp"
            alt=""
          />
        </div>

        <div className="">
          <p className="md:text-5xl text-2xl font-bold"> WHO WE ARE?</p>
          <p className="pt-[30px]">
            We are your Startup team.We provide purpose-built, high-caliber,
            product-focused teams.We produce well-designed, engaging, and secure
            custom web apps.{" "}
          </p>
          <hr className="mt-[30px]" />
          <div>
            <div className="flex md:divide-x flex-col md:flex-row ">
              <div>
                <div className="mt-[30px] flex justify-center md:justify-start">
                  <img src="/section/num_years.svg" alt="" />
                </div>
                <p className="font-bold text-[22px] pt-[20px]">
                  Years of Expertise
                </p>
                <p className="text-[14px] pt-[5px]">
                  Learning. Unlearning. Relearning. Growing. This is what has
                  kept us going to achieve new heights of success throughout
                  these years.
                </p>
              </div>

              <div className="mt-[30px] text-[16px] md:text-justify md:pl-[30px]">
                <p className="">
                  {" "}
                  <b>
                    {" "}
                    We offer everything you need for web app development and
                    ongoing support, including: custom development, performance
                    optimization, cloud-based deployment, API development and
                    integration, continuous quality assurance, and
                    round-the-clock SaaS support.
                  </b>
                </p>

                <div className="text-[14px]">
                  <p className="pt-[10px]">
                    <strong>-</strong> We produce well-designed, engaging, and
                    secure custom web apps
                  </p>
                  <p className="pt-[10px]">
                    <strong>-</strong> Our web applications are designed to
                    scale with your organization
                  </p>
                  <p className="pt-[10px]">
                    <strong>-</strong> We understand that the interconnectedness
                    of web apps can be a double-edged sword so we scrutinize our
                    web apps for security
                  </p>
                  <p className="pt-[10px]">
                    <strong>-</strong> We work on cutting-edge technology and
                    enterprise solutions for solving real-world problems and
                    help businesses become bigger & better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
