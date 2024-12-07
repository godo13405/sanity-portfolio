const CV = () => {
  return (
    <iframe
      style={{
        marginTop: "3rem",
        width: "100vw",
        height: "calc(100vh - 3rem - 100px)",
        border: 0,
      }}
      src="/cv.pdf"
    ></iframe>
  );
};

export default CV;
