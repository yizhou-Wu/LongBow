import NaviBar from "./NaviBar";

const About = () => {
  return (
    <>
    <NaviBar />
    <div className="container">
    <div className="text">
      <p>Welcome to Longbow Material, where quality meets craftsmanship. Originating from Southwest Florida, our journey began with a vision to redefine the supply of building materials, focusing on premium offerings such as luxury vinyl planks and vinyl flooring.</p>
      <p>Longbow Material has quickly established itself as a trusted partner for builders with commitment to excellence. In collaboration with our dedicated builder partners, Longbow Material has expanded its product range to include door hardware, cabinet hardware, and, more recently, tub & shower surrounds.</p>
      <p>At Longbow Material, we understand that every detail matters in construction, and that's why we strive to be a one-stop shop for builders. Our mission is clear – to provide builders with not only a vast selection of premium materials but also an assurance of quality that stands the test of time.</p>
      <p>As we continue to grow and innovate, Longbow Material remains steadfast in its commitment to delivering excellence. Join us on this journey, where every project is an opportunity to transform spaces with the finest materials and a dedication to perfection.</p>
    </div>
    <style jsx>{`
      h1 {
        font-size: 2em;
        margin-bottom: 20px;
      }
      
      p {
        margin-bottom: 20px;
      }

      .text {
        margin-top: 4rem;
        padding: 2rem;
      }
      `}
    </style>
    </div>
    </>
  );
};

export default About;
