const Checkbox = ({ label, id }) => {
  return (
    <div>
      <input type="checkbox" id={id} />
      <label htmlFor={id} className="px-[0.3rem]">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
