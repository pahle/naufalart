import React from 'react'

const Shipping = () => {
  return (
    <section className="flex sm:mb-16 mb-6">
      <div className="sectionInfo border-l-2 border-b-2 border-secondary rounded-bl-xl">
        <div className="2xl:p-28 p-16 text-justify">
          <h1 className="text-4xl text-center mb-8">
            Shipping National and Globally
          </h1>
          <p className="2xl:text-xl text-lg">
            Sejak berdiri, Naufal Art berorientasi pada pasar ekspor. Negara tujuan ekspor kami yaitu  Korea, Dubai, Inggris, dan Amerika.
            <br /> <br />
            Namun, kami juga memiliki jasa antar ke seluruh Indonesia untuk menjangkau pasar lokal yang saat ini sudah mengalami kenaikan. 
          </p>
        </div>
      </div>
      <div className="sectionImg">
        <img
          src="./images/about4.jpg"
          alt="product"
          className="w-full h-full aspect-square object-cover rounded-br-xl"
        />
      </div>
    </section>
  )
}

export default Shipping