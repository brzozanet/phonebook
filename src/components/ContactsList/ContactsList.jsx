import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectVisibleContacts } from "../../redux/contacts/selectors";

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteContact(id));

  if (!contacts.length) {
    return <p className="text-sm text-slate-500">No contacts found yet.</p>;
  }

  return (
    <ul className="space-y-3">
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <span className="text-sm font-medium text-slate-700 sm:text-base">
            <span className="font-bold text-slate-900">{contact.name}</span>:{" "}
            {contact.number}
          </span>
          <button
            type="button"
            className="rounded-lg border border-rose-200 px-3 py-1.5 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
