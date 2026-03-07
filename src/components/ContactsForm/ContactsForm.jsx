import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";

const css = {
  containerDiv: ["w-full"].join(" "),
  contactForm: ["card", "space-y-5", "p-6"].join(" "),
  heading: ["text-xl", "font-bold", "text-slate-900"].join(" "),
  label: ["block", "space-y-2"].join(" "),
  hint: [
    "text-xs",
    "font-semibold",
    "uppercase",
    "tracking-wide",
    "text-slate-500",
  ].join(" "),
};

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const stateContacts = useSelector(selectContacts);
  const stateContactsNames = stateContacts.map((contact) => contact.name);

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    if (stateContactsNames.includes(contact.name)) {
      event.target.reset();
      return alert(`${contact.name} is alredy in contacts`);
    }

    dispatch(addContact(contact));

    event.target.reset();
  };

  return (
    <div className={css.containerDiv}>
      <form className={css.contactForm} onSubmit={handleSubmit}>
        <h3 className={css.heading}>Add new contact</h3>
        <label className={css.label}>
          <span className={css.hint}>Name</span>
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className="field"
            placeholder="e.g. Adrian"
          />
        </label>
        <label className={css.label}>
          <span className={css.hint}>Phone number</span>
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className="field"
            placeholder="+48 123 456 789"
          />
        </label>
        <button type="submit" className="btn-primary w-full">
          Add contact
        </button>
      </form>
    </div>
  );
};
