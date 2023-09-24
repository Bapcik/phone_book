import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { IContact } from "../interface/interface";
import {
  deleteContactUrl,
  fetchContactUrl,
  updateContactUrl,
} from "../state/thunks";
import Modal from "../Modal/Modal";


export const ContactsList = () => {
  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [editingContactName, setEditingContactName] = useState("");
  const [editingContactPhone, setEditingContactPhone] = useState(0);
  const [editingContactEmail, setEditingContactEmail] = useState("");
  const [editingContactPhoto, setEditingContactPhoto] = useState("");
  const [modal, setModal] = useState<string | null>(null);

  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contact.list);

  useEffect(() => {
    dispatch(fetchContactUrl());
  }, [dispatch]);

  const handleDelete = (contactId: string) => {
    dispatch(deleteContactUrl(contactId));
  };

  const handleEdit = (contact: IContact) => {
    setEditingContactId(contact.id);
    setEditingContactName(contact.name);
    setEditingContactPhone(contact.phone);
    setEditingContactEmail(contact.email);
    setEditingContactPhoto(contact.photo);
  };

  const handleSave = () => {
    if (editingContactId && editingContactName.trim() !== "") {
      dispatch(
        updateContactUrl({
          id: editingContactId,
          name: editingContactName,
          phone: editingContactPhone,
          email: editingContactEmail,
          photo: editingContactPhoto,
        })
      );
      setEditingContactId(null);
      setEditingContactName("");
      setEditingContactPhone(0);
      setEditingContactEmail("");
      setEditingContactPhoto("");
    }
  };
  const handleModal = (contactId: any) => {
    setModal(contactId);
  };

  return (
    <div>
      <h1>Contacts List</h1>
      <ul>
        {contacts.length === 0 ? (
          <p>No Contact</p>
        ) : (
          contacts.map((contact) => (
            <li className="contacts-item" key={contact.id}>
              {editingContactId === contact.id ? (
                <>
                  <input
                    type="text"
                    value={editingContactName}
                    onChange={(e) => setEditingContactName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={editingContactPhone.toString()}
                    onChange={(e) =>
                      setEditingContactPhone(parseFloat(e.target.value))
                    }
                  />
                  <input
                    type="text"
                    value={editingContactEmail}
                    onChange={(e) => setEditingContactEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    value={editingContactPhoto}
                    onChange={(e) => setEditingContactPhoto(e.target.value)}
                  />
                  <button onClick={handleSave}>Save</button>
                </>
              ) : (
                <>
                  <div
                    onClick={() => {
                      handleModal(contact.id);
                    }}
                  >
                    <img src={contact.photo} alt={contact.name} />
                    <h2>{contact.name}</h2>
                  </div>
                  {modal === contact.id && (
                    <Modal show={true} hide={() => setModal(null)}>
                      <div className="modalList">
                        <h2>{contact.name}</h2>
                        <p>Phone: {contact.phone}</p>
                        <p>Email: {contact.email} </p>
                        <img src={contact.photo} alt={contact.name} />
                        <div className="buttonList">
                          <button
                            className="buttonDelete"
                            onClick={() => handleDelete(contact.id)}
                          >
                            Delete
                          </button>
                          <button
                            className="buttonEdit"
                            onClick={() => handleEdit(contact)}
                          >
                            &#9998;
                          </button>
                        </div>
                      </div>
                    </Modal>
                  )}
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
