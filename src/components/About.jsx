import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
  <div className="2xl:text-xl text-lg xl:hidden">
      {isReadMore ? text.slice(0, 50) : text}
      <span>{isReadMore ? ". . . . ." : ""}</span>
      <div
        onClick={toggleReadMore}
        className="cursor-pointer font-semibold text-justify"
      >
        {isReadMore ? "Read More" : "Show Less"}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="md:pt-16 pt-6">
      
      <div className="w-full flex justify-center mb-6">
        <h1 className="2xl:text-7xl text-6xl pr-2">
          About Us
        </h1>
        <p className="text-secondary text-xl">(04)</p>
      </div>
      <div className="relative overflow-hidden">
      <img
            src="./icons/lines.svg"
            alt="lines"
            className="absolute top-16 w-full h-[calc(100%-5vh)] opacity-25 z-[-20] object-cover -xl:hidden"
          />
      <div className="flex sm:mt-16 mt-6 -xl:border-b-2 -xl:border-secondary/50">
        <div className="sectionInfo xl:border-t-2 xl:border-l-2 border-black/100 rounded-tl-xl">
          <div className="xl:p-28 p-4 text-justify flex flex-col xl:items-center">
            <h1 className="text-4xl mb-6 xl:text-center text-left">
              NaufalArt
            </h1>
            <div className="2xl:text-xl text-lg">
              Naufal Art merupakan perusahaan pribadi yang
              berdiri pada tahun 2004. Perusahaan ini
              bergerak di bidang kayu, batu, serta furniture
              yang memiliki konsep seni alam.
              <br />
              <br />
              <div className="-xl:hidden">
                Furniture yang diproduksi oleh Naufal Art
                berasal dari akar pohon kayu pilihan yang
                berusia ratusan tahun. Kayu yang digunakan
                merupakan jenis kayu kuat seperti jati,
                mahoni, trembesi, dll. Ragam furniture yang
                dihasilkan berupa meja, kursi, gantungan
                jaket, tempat pajangan, dan berbagai macam
                produk turunan lainnya
              </div>
              <ReadMore>
                Furniture yang diproduksi oleh Naufal Art
                berasal dari akar pohon kayu pilihan yang
                berusia ratusan tahun. Kayu yang digunakan
                merupakan jenis kayu kuat seperti jati,
                mahoni, trembesi, dll. Ragam furniture yang
                dihasilkan berupa meja, kursi, gantungan
                jaket, tempat pajangan, dan berbagai macam
                produk turunan lainnya
              </ReadMore>
            </div>
          </div>
        </div>
        <div className="sectionImg -xl:hidden">
          <img
            src="./images/about2.jpg"
            alt="product"
            className="w-full h-full aspect-square object-cover rounded-tr-xl rounded-bl-sm"
          />
        </div>
      </div>
      <div className="flex -xl:border-b-2 -xl:border-secondary/50">
        <div className="sectionImg -xl:hidden">
          <img
            src="./images/about3.jpg"
            alt="product"
            className="w-full h-full aspect-square object-cover rounded-tr-sm"
          />
        </div>
        <div className="sectionInfo xl:border-r-2 border-black/100">
          <div className="xl:p-28 p-4 text-justify flex flex-col xl:items-center">
            <h1 className="text-4xl mb-6 xl:text-center text-left">
              Quality and Design
            </h1>

            <div className="2xl:text-xl text-lg">
              Proses produksi dikerjakan oleh tangan-tangan
              yang terampil di workshop kami. Proses
              pembuatan dimulai dari pemilihan kayu yang
              berusia tua dan mempunyai bentuk yang unik.
              <br />
              <br />
              <div className="-xl:hidden">
                Selanjutnya produk dibentuk sesuai dengan
                fungsinya tetapi tetap mengikuti bentuk asal
                kayu yang menjadikan produk memiliki nilai
                seni yang tinggi. Terakhir proses finishing
                diarahkan sesuai dengan permintaan konsumen
                menggunakan bahan yang berkualitas tinggi.
              </div>
              <ReadMore>
                Selanjutnya produk dibentuk sesuai dengan
                fungsinya tetapi tetap mengikuti bentuk asal
                kayu yang menjadikan produk memiliki nilai
                seni yang tinggi. Terakhir proses finishing
                diarahkan sesuai dengan permintaan konsumen
                menggunakan bahan yang berkualitas tinggi.
              </ReadMore>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:mb-16 mb-6 -xl:border-secondary/50">
        <div className="sectionInfo xl:border-l-2 xl:border-b-2 border-black/100 rounded-bl-xl">
          <div className="xl:p-28 p-4 text-justify flex flex-col xl:items-center">
            <h1 className="text-4xl xl:text-center text-left mb-6">
              Shipping National and Globally
            </h1>
            <div className="2xl:text-xl text-lg">
              Sejak berdiri, Naufal Art berorientasi pada
              pasar ekspor. Negara tujuan ekspor kami yaitu
              Korea, Dubai, Inggris, dan Amerika.
              <br />
              <br />
              <div className="-xl:hidden">
                Namun, kami juga memiliki jasa antar ke
                seluruh Indonesia untuk menjangkau pasar
                lokal yang saat ini sudah mengalami
                kenaikan.
              </div>
              <ReadMore>
                Namun, kami juga memiliki jasa antar ke
                seluruh Indonesia untuk menjangkau pasar
                lokal yang saat ini sudah mengalami
                kenaikan.
              </ReadMore>
            </div>
          </div>
        </div>
        <div className="sectionImg -xl:hidden">
          <img
            src="./images/about4.jpg"
            alt="product"
            className="w-full h-full aspect-square object-cover rounded-br-xl"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
