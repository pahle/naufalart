import React from "react";

const About = () => {
  return (
    <section className="flex sm:mt-16 mt-6">
      {/* <div className="border-2 border-secondary p-8 absolute -bottom-16 left-[50%] -translate-x-[50%] rounded-xl">
        <div className="border-2 border-secondary p-7 rounded-xl relatives"></div>
      </div> */}
      <div className="sectionInfo border-t-2 border-l-2 border-secondary/50 rounded-tl-xl">
        <div className="2xl:p-28 p-16 text-justify flex flex-col items-center">
          <div className="w-full flex justify-center mb-6">
            <h1 className="text-4xl">About Us</h1>
            <p className="text-secondary text-xl">(04)</p>
          </div>
          <p className="2xl:text-xl text-lg">
            Naufal Art merupakan perusahaan pribadi yang
            berdiri pada tahun 2004. Perusahaan ini bergerak
            di bidang kayu, batu, serta furniture yang
            memiliki konsep seni alam.
            <br /> <br />
            Furniture yang diproduksi oleh Naufal Art
            berasal dari akar pohon kayu pilihan yang
            berusia ratusan tahun. Kayu yang digunakan
            merupakan jenis kayu kuat seperti jati, mahoni,
            trembesi, dll. Ragam furniture yang dihasilkan
            berupa meja, kursi, gantungan jaket, tempat
            pajangan, dan berbagai macam produk turunan
            lainnya
          </p>
        </div>
      </div>
      <div className="sectionImg">
        <img
          src="./images/about2.jpg"
          alt="product"
          className="w-full h-full aspect-square object-cover rounded-tr-xl rounded-bl-sm"
        />
      </div>
    </section>
  );
};

export default About;
