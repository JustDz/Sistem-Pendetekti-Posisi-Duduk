import React from "react";

const About = () => {
  return (
    <div className="relative" id="About">
      <div className="bg-second-bg py-12 font-montserrat ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <header className="text-center">
            <h2 className="text-xl text-red-600 font-semibold tracking-wide uppercase">
              About System
            </h2>

            {/*--------------- Pengenalan sistem ---------------*/}
            <p className="text-font-clr mt-4 text-6xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              Pengenalan Sistem
            </p>

            <p className="text-font-clr mt-6 font-medium text-justify text-xl lg:mx-auto">
              Sistem pemantauan posisi duduk ini dirancang untuk membantu
              memonitor dan menganalisis posisi tubuh pengguna saat duduk,
              dengan tujuan untuk meningkatkan kenyamanan dan mencegah masalah
              kesehatan seperti nyeri punggung, postur tubuh yang buruk, dan
              masalah terkait lainnya.
            </p>
          </header>

          {/*--------------- Jenis Posisi Duduk ---------------*/}
          <div className="mt-16 space-y-12">
            {/* Posisi Duduk yang Baik */}
            <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0">
              {/* Gambar */}
              <div className="flex-2 lg:order-1 mb-6 lg:mb-0">
                <img
                  src="/assets/baiq.png"
                  alt="Posisi Duduk yang Baik"
                  className="max-w-[300px] mx-auto rounded-lg shadow-lg mr-6"
                />
              </div>

              {/* Teks */}
              <div className="flex-1 lg:order-2 text-left">
                <h3 className="text-2xl font-semibold text-font-clr">
                  Posisi Duduk yang Baik
                </h3>
                <p className="mt-4 text-lg text-font-clr">
                  Posisi duduk yang baik adalah ketika tubuh tegak dengan
                  punggung lurus, bahu rileks, dan kaki menapak di lantai dengan
                  sudut 90 derajat pada lutut. Kepala dan leher sejajar dengan
                  tubuh.
                </p>
              </div>
            </div>

            {/* Posisi Duduk yang Buruk */}
            <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0">
              {/* Gambar */}
              <div className="flex-2 lg:order-2 mb-6 lg:mb-0">
                <img
                  src="/assets/buruq.png"
                  alt="Posisi Duduk yang Buruk"
                  className="max-w-[300px] mx-auto rounded-lg shadow-lg ml-6"
                />
              </div>

              {/* Teks */}
              <div className="flex-1 text-left lg:order-1">
                <h3 className="text-2xl font-semibold text-font-clr">
                  Posisi Duduk yang Buruk
                </h3>
                <p className="mt-4 text-lg text-font-clr">
                  Posisi duduk yang buruk dapat terjadi saat punggung
                  membungkuk, bahu tertarik ke depan, atau kaki tidak menyentuh
                  lantai. Hal ini dapat menyebabkan nyeri punggung dan masalah
                  postur tubuh jangka panjang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
