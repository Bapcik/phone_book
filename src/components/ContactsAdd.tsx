import { useState } from "react";
import { useDispatch } from "react-redux";
import { IContact } from "../interface/interface";
import { addContactUrl } from "../state/thunks";

interface DishFormProps {
  contact?: IContact | null;
}

export const ContactsAdd: React.FC<DishFormProps> = ({ contact }) => {
  const dispatch = useDispatch();
  const [lastUsedId, setLastUsedId] = useState<number>(0);
  const [name, setName] = useState(contact ? contact.name : "");
  const [phone, setPhone] = useState(contact ? contact.phone.toString() : "");
  const [email, setEmail] = useState(contact ? contact.email : "");
  const [photo, setPhoto] = useState(contact ? contact.photo : "");

  const generateUniqueId = (): string => {
    setLastUsedId((prevId) => prevId + 1);
    return (lastUsedId + 1).toString();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContact: IContact = {
      id: contact ? contact.id : generateUniqueId(),
      name,
      phone: parseFloat(phone),
      email,
      photo,
    };

    dispatch(addContactUrl(newContact));

    setName("");
    setPhone("");
    setEmail("");
    setPhoto("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add New Contact</h2>
        <div className="addContact">
          <label>
            Name:
            <input
              className="addInput"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Phone:
            <input
              className="addInput"
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              className="addInput"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Photo:
            <input
              className="addInput"
              type="url"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
          </label>
          <button type="submit">{"Add"}</button>
        </div>
      </form>
    </div>
  );
};
