import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const initialUser: Omit<UserData, "id"> = {
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: { lat: "", lng: "" }
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: ""
  }
};

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<Omit<UserData, "id">>(initialUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value }
      }));
    } else if (name.startsWith("geo.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value }
        }
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value }
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...user, id: Date.now() });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input className="w-full border p-2 rounded" name="name" placeholder="Name" value={user.name} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="username" placeholder="Username" value={user.username} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="address.street" placeholder="Street" value={user.address.street} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="address.suite" placeholder="Suite" value={user.address.suite} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="address.city" placeholder="City" value={user.address.city} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="address.zipcode" placeholder="Zipcode" value={user.address.zipcode} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="geo.lat" placeholder="Latitude" value={user.address.geo.lat} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="geo.lng" placeholder="Longitude" value={user.address.geo.lng} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="website" placeholder="Website" value={user.website} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="company.name" placeholder="Company Name" value={user.company.name} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="company.catchPhrase" placeholder="Catch Phrase" value={user.company.catchPhrase} onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="company.bs" placeholder="BS" value={user.company.bs} onChange={handleChange} required />
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-700 text-white">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;