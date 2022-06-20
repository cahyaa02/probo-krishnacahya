import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";

export default function Blogs() {
  useEffect(() => {
    //* Tab Page Title
    document.title = "Blogs";

    //* Enable Bootstrap's Tooltip Everywhere
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div className="blogs">
      <section id="content">
        <div className="container">
          <div className="card" data-aos="fade-up">
            <div className="d-flex">
              <i
                className="bi bi-people-fill"
                data-bs-toggle="tooltip"
                title="Writers"
              ></i>
              &emsp;
              <a
                href="http://bit.ly/nathanaelabel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info"
              >
                Nathanael Abel Arianto
              </a>
              &emsp;&emsp;
              <i
                className="bi bi-stopwatch-fill"
                data-bs-toggle="tooltip"
                title="Estimated Reading Time"
              ></i>
              &emsp;11 minutes
            </div>
            <h3 className="text-center py-5">
              Klasifikasi Tingkat Keganasan Kanker Payudara Menggunakan
              Algoritma K-Nearest Neighbors
            </h3>
            <h5>Latar Belakang</h5>
            <p>
              Kanker merupakan salah satu masalah kesehatan terbesar di dunia.
              Secara global, rasio kasus kanker payudara meningkat dari hari ke
              hari dan menjadi penyebab kematian nomor dua. Pada tahun 2020,
              wanita yang didiagnosis dengan kanker payudara adalah 2,3 juta dan
              kematian terkait adalah 685.000. Kanker payudara adalah kanker
              paling umum di dunia, karena ada 7,8 juta wanita hidup yang
              didiagnosis menderita kanker payudara pada akhir tahun 2020.
              Dibandingkan dengan kanker lainnya, ada lebih banyak tahun hidup
              yang disesuaikan dengan disabilitas yang hilang oleh wanita ke
              payudara.
            </p>
            <p>
              Global Burden of Cancer Study (Globocan) dari World Health
              Organization (WHO) mencatat bahwa total kasus kanker di Indonesia
              pada 2020 mencapai 396.914 kasus dan total kematian sebesar
              234.511 kasus. Penyebab utamanya yaitu karena kondisi lingkungan
              yang tercemar bahan karsinogen, seperti rokok, daging olahan, dsb.
              Sebagai upaya dalam meminimalisir kekeliruan diagnosis kanker
              payudara yang dapat membahayakan penderita, kami terinspirasi
              untuk membuat sebuah proyek yaitu “Klasifikasi Tingkat Keganasan
              Kanker Payudara Menggunakan Algoritma K-Nearest Neighbors.”
            </p>
            <h5>
              Mengapa Menggunakan Klasifikasi K-Nearest Neighbors (KNN) dan
              Apakah Hasilnya?
            </h5>
            <p>
              Sebelum masuk pada klasifikasi menggunakan K-Nearest Neighbors,
              mari kita mengenal terlebih dahulu apa itu Machine Learning dan
              Supervised Learning. Machine Learning adalah cabang dari
              Artificial Intelligence, dimana disiplin ilmu ini meliputi
              perencanaan serta pengembangan algoritma yang memungkinkan
              komputer untuk mengembangkan perilaku berdasarkan data empiris.
              Pada Machine Learning, terdapat algoritma Supervised Learning,
              Unsupervised Learning, dan Reinforcement Learning. Supervised
              Learning sendiri merupakan suatu model Machine Learning yang
              mempelajari data dengan label atau target dimana evaluasi model
              tersebut akan berdasarkan target yang telah ditentukan. Algoritma
              ini terdiri dari dua hal, yaitu regresi dan klasifikasi. Sasaran
              dari klasifikasi adalah untuk memprediksi label kelas dari data
              yang telah ditentukan. Untuk kebutuhan mengklasifikasikan dataset
              kali ini, kita dapat menggunakan salah satu algoritma Supervised
              Learning, yaitu K-Nearest Neighbors.
            </p>
            <p>
              Lebih lanjut, K-Nearest Neighbors adalah algoritma yang dapat
              digunakan dalam klasifikasi data dengan memilih kelas paling umum
              dari K data terdekat dari input itu. Detail proses dari
              klasifikasi menggunakan algoritma ini adalah sebagai berikut:
              <ol>
                <li>Tentukan nilai dari K.</li>
                <li>
                  Hitung jarak titik data yang tidak diketahui kelasnya dari
                  semua data.
                </li>
                <li>
                  Pilih K observasi pada data training terdekat dengan titik
                  data yang tidak diketahui kelasnya.
                </li>
                <li>
                  Prediksi kelas dari data yang tidak diketahui menggunakan
                  kelas mayoritas dari K observasi terdekat tersebut.
                </li>
              </ol>
            </p>

            <p>
              Dalam proyek ini, kami menggunakan algoritma K-Nearest Neighbors
              Classification karena output yang dihasilkan yakni dengan
              mengkategorikan dalam dua label yaitu Benign (jinak) atau
              Malignant (ganas).
            </p>
            <h5>
              Kelebihan dan Kekurangan dari Klasifikasi K-Nearest Neighbors
            </h5>
            <p>
              Kelebihan:
              <ol>
                <li>Efektif untuk mengolah data dalam jumlah banyak.</li>
                <li>
                  Performa tergolong bagus untuk kebutuhan klasifikasi maupun
                  regresi.
                </li>
                <li>Tahan terhadap data training yang riuh.</li>
                <li>
                  Intuitif dan cukup sederhana untuk dipahami dan
                  diimplementasikan.
                </li>
              </ol>
              Kekurangan:
              <ol>
                <li>
                  Memakan waktu komputasi yang tinggi jika data training besar
                  karena jarak masing-masing data diukur pada setiap data test.
                </li>
                <li>
                  Tidak diketahui perhitungan jarak yang paling cocok terhadap
                  dataset tertentu.
                </li>
                <li>Sensitif dengan ciri yang tidak relevan.</li>
              </ol>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
