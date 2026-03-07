import { Filter } from "../../components/Filter/Filter";
import { ContactsForm } from "../../components/ContactsForm/ContactsForm";
import { ContactsList } from "../../components/ContactsList/ContactsList";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";

const css = {
  containerDiv: ["grid", "gap-6", "md:grid-cols-[340px,1fr]"].join(" "),
  stack: ["space-y-4"].join(" "),
  contactsDiv: ["card", "p-6", "sm:p-7"].join(" "),
};

const Phonebook = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <div className={css.containerDiv}>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
      </HelmetProvider>
      <div className={css.stack}>
        <ContactsForm />
        <Filter />
      </div>
      <div className={css.contactsDiv}>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Your contacts
        </h2>
        {isLoading ? (
          <p className="text-sm text-slate-500">Loading contacts...</p>
        ) : (
          <ContactsList />
        )}
        {isError && (
          <p className="mt-4 text-sm font-medium text-rose-600">
            Something went wrong. Try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default Phonebook;
