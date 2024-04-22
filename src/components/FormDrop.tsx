import React, { useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '@/utils/zustand/auth.store';
const FormDropdown = ( {type} :{type:string}) => {
    let auth=useAuthStore()
    
  const [formData, setFormData] = useState({});

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    axios.post(`/api/create/${type}`, formData)
      .then(response => {
        // handle successful response
      })
      .catch(error => {
        // handle error
      });
  };

  const generateInputFields = () => {
    switch (type) {
      case 'user':
        return (
          <>
            <input type="text" name="username" onChange={handleInputChange} />
            <input type="text" name="email" onChange={handleInputChange} />
          </>
        );
      case 'post':
        return (
          <>
            <input type="text" name="title" onChange={handleInputChange} />
            <input type="text" name="content" onChange={handleInputChange} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {generateInputFields()}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormDropdown;