import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
  id,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>
      <p className="text-gray-600 mb-2">
        <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
      </p>
      <p className="text-gray-600 mb-2">{phone}</p>
      <p className="text-gray-600 mb-2">
        <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{website}</a>
      </p>
      <p className="text-gray-600 mb-2">{company.name}</p>
      <p className="text-gray-600">{address.city}</p>
      <div className="mt-4 text-sm text-gray-500">User ID: {id}</div>
    </div>
  );
};

export default UserCard;