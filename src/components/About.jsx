import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
  <div className="md:text-lg text-md text-secondary font-poppins xl:hidden">
      {isReadMore ? text.slice(0, 40) : text}
      <span>{isReadMore ? ". . . " : ""}</span>
      <div
        onClick={toggleReadMore}
        className="cursor-pointer font-semibold text-justify md:text-lg text-md text-secondary font-poppins"
      >
        {isReadMore ? "Read More" : "Show Less"}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="paddingY">
        <h1 className="2xl:text-7xl text-6xl pr-2 text-center">
          About Us
        </h1>
      <div className="relative overflow-hidden">
      <img
            src="./icons/lines.svg"
            alt="lines"
            className="absolute top-16 w-full h-[calc(100%-5vh)] opacity-25  -z-10 object-cover -xl:hidden"
          />
      <div className="flex -xl:flex-col-reverse sm:mt-16 mt-6 -xl:border-2 rounded-xl -xl:border-secondary/50">
        <div className="sectionInfo xl:border-t-2 xl:border-l-2 border-secondary/50 rounded-tl-xl">
          <div className="xl:p-28 p-4 text-justify flex flex-col xl:items-center">
            <h1 className="text-4xl mb-6 xl:text-center text-left">
              NaufalArt
            </h1>
            <div className="md:text-lg text-md text-secondary font-poppins">
              Naufal Art merupakan perusahaan pribadi yang
              berdiri pada tahun 2004. Perusahaan ini
              bergerak di bidang kayu, batu, serta furniture
              yang memiliki konsep seni alam.
              <br />
              <br />
              <div className="-xl:hidden md:text-lg text-md text-secondary font-poppins">
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
        <div className="flex-1 flex flexCenter">
          <img
            src="./images/about2.jpg"
            alt="product"
            className="w-full h-full -xl:p-1 xl:aspect-square aspect-video object-cover -xl:rounded-2xl xl:rounded-tr-xl"
          />
        </div>
      </div>
      <div className="flex -xl:flex-col -xl:border-2 rounded-xl -xl:my-4 -xl:border-secondary/50">
        <div className="flex-1 flex flexCenter">
          <img
            src="./images/about3.jpg"
            alt="product"
            className="w-full h-full -xl:p-1 xl:aspect-square aspect-video object-cover -xl:rounded-2xl"
          />
        </div>
        <div className="sectionInfo xl:border-r-2 border-secondary/50">
          <div className="xl:p-28 p-4 text-justify flex flex-col xl:items-center">
            <h1 className="text-4xl mb-6 xl:text-center text-left">
              Quality and Design
            </h1>

            <div className="md:text-lg text-md text-secondary font-poppins">
              Proses produksi dikerjakan oleh tangan-tangan
              yang terampil di workshop kami. Proses
              pembuatan dimulai dari pemilihan kayu yang
              berusia tua dan mempunyai bentuk yang unik.
              <br />
              <br />
              <div className="-xl:hidden md:text-lg text-md text-secondary font-poppins">
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
      <div className="flex -xl:flex-col-reverse sm:mb-16 mb-6 -xl:border-2 rounded-xl -xl:border-secondary/50">
        <div className="sectionInfo xl:border-l-2 xl:border-b-2 border-secondary/50 rounded-bl-xl">
          <div className="xl:p-28 p-4 text-justify flex flex-col xl:items-center">
            <h1 className="xl:text-4xl text-[2rem] xl:text-center text-left mb-6">
              Shipping National and Globally
            </h1>
            <div className="md:text-lg text-md text-secondary font-poppins">
              Sejak berdiri, Naufal Art berorientasi pada
              pasar ekspor. Negara tujuan ekspor kami yaitu
              Korea, Dubai, Inggris, dan Amerika.
              <br />
              <br />
              <div className="-xl:hidden md:text-lg text-md text-secondary font-poppins">
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
        <div className="flex-1 flex flexCenter">
          <img
            src="./images/about4.jpg"
            alt="product"
            className="w-full h-full -xl:p-1 xl:aspect-square aspect-video object-cover -xl:rounded-2xl xl:rounded-br-xl"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
