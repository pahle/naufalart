import React from "react";

const Quality = () => {
  return (
    <section className="flex justify">
      <div className="sectionImg -xl:hidden">
        <img
          src="./images/about3.jpg"
          alt="product"
          className="w-full h-full aspect-square object-cover rounded-tr-sm"
        />
      </div>
      <div className="sectionInfo xl:border-r-2 border-secondary/50">
        <div className="2xl:p-28 xl:p-16 text-justify flex flex-col xl:items-center">
          <h1 className="text-4xl mb-6 xl:text-center text-right">
            Quality and Design
          </h1>

          <p className="2xl:text-xl text-lg">
            Proses produksi dikerjakan oleh tangan-tangan
            yang terampil di workshop kami. Proses pembuatan
            dimulai dari pemilihan kayu yang berusia tua dan
            mempunyai bentuk yang unik. Selanjutnya produk
            dibentuk sesuai dengan fungsinya tetapi tetap
            mengikuti bentuk asal kayu yang menjadikan
            produk memiliki nilai seni yang tinggi. Terakhir
            proses finishing diarahkan sesuai dengan
            permintaan konsumen menggunakan bahan yang
            berkualitas tinggi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;
