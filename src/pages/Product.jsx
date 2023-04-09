import {
  Navbar,
  Hero,
  Benefits,
  Products,
  About,
  Testimonials,
  Contact,
  Footer,
  ProductList,
} from "../components";

const Product = () => {
  return (
    <>
      <div className="bg-[#FFFCF9]/90 w-full overflow-hidden">
        <img
          src="./icons/lines.svg"
          alt="lines"
          className="absolute w-full h-full opacity-25 z-[-20] object-cover"
        />

        <div className="flexCenter md:paddingX">
          <div className="boxWidth">
            <Navbar />
          </div>
        </div>

        <div className="paddingX flexStart">
          <div className="boxWidth">
            <ProductList />
          </div>
        </div>

        <div className="paddingX flexStart">
          <div className='boxWidth'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
