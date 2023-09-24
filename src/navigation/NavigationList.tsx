import { NavLink, Route, Routes } from "react-router-dom";
import "./NavigationList.css";
import { ContactsList } from "../components/ContactsList";
import { ContactsAdd } from "../components/ContactsAdd";

export const NavigationList = () => {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Contacts List</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add new contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ContactsList />} />
        <Route path="/add" element={<ContactsAdd />} />
      </Routes>
    </div>
  );
};
