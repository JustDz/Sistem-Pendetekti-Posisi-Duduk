import React from "react";
import { Link } from 'react-router-dom'; // Menggunakan Link untuk navigasi

const Hero = () => {
  return (
    <section className="bg-first-bg relative" id="Hero">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          {/*--------------- Home ---------------*/}
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:mt-0 mt-10">
            <p className="text-font-clr font-medium md:text-2xl text-xl mb-4 font-montserrat">
              IOT X Machine Learning
            </p>
            <h1 className="text-font-clr tracking-normal lg:text-6xl text-4xl font-bold lg:leading-snug font-montserrat">
              Sistem Pendeteksi Postur Tubuh
            </h1>
            <p className="text-font-clr font-medium md:text-lg text-base font-montserrat">
              Dengan sistem ini, Anda dapat memantau dan memperbaiki posisi duduk Anda untuk menjaga kesehatan tubuh.
            </p>

            {/*--------------- Button Left ---------------*/}
            <div className="flex h-12 justify-start gap-x-6 dark:text-white">
              {/* Link mengarah ke halaman Stream */}
              <Link
                to="/stream" // Menambahkan Link ke halaman diagnosis
                className="mt-5 group flex h-min items-left disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-violet-500 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900">
                Periksa Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
