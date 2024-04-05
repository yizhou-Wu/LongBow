const CoverSlider = () => {
  return (
    <>
      <div className="test">Hello</div>
      <style jsx>{`
        .test {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          height: 100vh;
          background-size: cover;
        }
      `}</style>
    </>
  );
};

export default CoverSlider;
