import {useForm} from "react-hook-form";
// eslint-disable-next-line

export const SearchBox = ({inputMethod}) => {
  const { register, handleSubmit, reset } = useForm();

  const getInputId = (data) => {
    inputMethod(data.locationId);
    reset({
      locationId: ""
    });
  }

  return (
    <form onSubmit={handleSubmit(getInputId)} className="filter">
      <input
        type="number"
        placeholder="Location ID" {...register("locationId", {min:0})}
      />
      <button className="searchButton">Search</button>
    </form>
  );
};

export default SearchBox;
