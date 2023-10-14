type Props = {
  title: string;
  handleFilter: (subject: string) => void;
  activeFilter: string;
};

const FilterBtn = ({ title, handleFilter, activeFilter }: Props) => {
  return (
    <>
      <button
        onClick={() => handleFilter(title)}
        className={`border-2 border-button-blue-default rounded-xl text-button-blue-default
         font-semibold text-2xl py-2 px-4 mr-5 mb-5 ${activeFilter === title ? "bg-button-blue-default text-white" : ""}`} >
        {title}
      </button>
    </>
  );
};

export default FilterBtn;
