import React from "react";

const DashboardMonitoring: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen mt-">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt">
        {/* Header */}
        <header className="p-6 bg-gray-800 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold">Monitoring Postur Tubuh</h1>
        </header>

        {/* Main Content */}
        <main className="pt-6 pb-6">
          {/* Dashboard Monitoring */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Dashboard Monitoring Postur
            </h2>

            {/* Status Postur */}
            <div className="mb-6">
              <h3 className="text-xl font-medium">Status Postur Saat Ini</h3>
              <p className="text-lg mt-2">
                Postur Anda saat ini:
                <span className="font-bold text-green-500">Baik</span>
              </p>
              <p className="text-sm mt-1">Durasi: 2 Jam 30 Menit</p>
            </div>

            {/* Waktu Postur */}
            <div className="mb-6">
              <h3 className="text-xl font-medium">Waktu Postur</h3>
              <p className="text-sm mt-2">
                Postur baik telah dipertahankan selama 2 Jam 30 Menit.
              </p>
            </div>

            {/* Pengingat */}
            <div className="mb-6">
              <h3 className="text-xl font-medium">Pengingat</h3>
              <p className="text-sm mt-2">
                Jangan lupa untuk sesekali memperbaiki posisi duduk Anda agar
                tetap sehat!
              </p>
            </div>
          </section>

          {/* Riwayat Postur */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Riwayat Postur</h2>

            {/* Table Riwayat */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="px-4 py-2 text-left">Tanggal</th>
                    <th className="px-4 py-2 text-left">Status Postur</th>
                    <th className="px-4 py-2 text-left">Durasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-600">
                    <td className="px-4 py-2">2024-12-05 08:00</td>
                    <td className="px-4 py-2">Buruk</td>
                    <td className="px-4 py-2">30 Menit</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="px-4 py-2">2024-12-04 14:00</td>
                    <td className="px-4 py-2">Baik</td>
                    <td className="px-4 py-2">1 Jam 15 Menit</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="px-4 py-2">2024-12-03 10:30</td>
                    <td className="px-4 py-2">Buruk</td>
                    <td className="px-4 py-2">45 Menit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Grafik Postur */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Grafik Postur</h2>

            {/* Dummy Grafik */}
            <div className="bg-gray-700 w-full h-64 flex justify-center items-center text-xl font-bold text-gray-400">
              [Grafik Postur Tubuh]
            </div>

            <p className="text-sm mt-2 text-center">
              Visualisasi grafik postur tubuh berdasarkan data yang tercatat.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardMonitoring;
