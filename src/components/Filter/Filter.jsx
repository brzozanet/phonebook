import { useDispatch } from "react-redux";
import { filteredContact } from "../../redux/contacts/filtersSlice";

const css = {
  containerDiv: ["w-full"].join(" "),
  filterForm: ["card", "space-y-4", "p-6"].join(" "),
  textH3: ["text-lg", "font-bold", "text-slate-900"].join(" "),
  label: ["block", "space-y-2"].join(" "),
  hint: [
    "text-xs",
    "font-semibold",
    "uppercase",
    "tracking-wide",
    "text-slate-500",
  ].join(" "),
};

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    event.preventDefault();
    const name = event.target.value;
    dispatch(filteredContact(name));
  };

  return (
    <div className={css.containerDiv}>
      <form className={css.filterForm}>
        <h3 className={css.textH3}>Find contacts</h3>
        <label className={css.label}>
          <span className={css.hint}>Search by name</span>
          <input
            onChange={handleFilter}
            className="field"
            placeholder="Type a name..."
          />
        </label>
      </form>
    </div>
  );
};
