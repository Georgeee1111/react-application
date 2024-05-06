const Box = ({ children }) => {
  return (
    <div className="border border-pink-300 rounded-[1.5rem] p-4 mb-4 backdrop-blur-3xl">
      {children}
    </div>
  );
};

export default Box;
