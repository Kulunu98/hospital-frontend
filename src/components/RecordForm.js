import React, { useState, useEffect } from 'react';

const RecordForm = ({ type, onSubmit, initialData = {}, onClose }) => {
  const [formData, setFormData] = useState({
    name: '', age: '', gender: '', address: '', description: '', price: ''
  });

  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(type, formData);
  };

  return (
    <div className="modal">
      <h3>{initialData?._id ? 'Edit' : 'Create'} {type}</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name || ''} onChange={handleChange} required />
        {type === 'patients' ? (
          <>
            <input name="age" placeholder="Age" value={formData.age || ''} onChange={handleChange} />
            <input name="gender" placeholder="Gender" value={formData.gender || ''} onChange={handleChange} />
            <input name="address" placeholder="Address" value={formData.address || ''} onChange={handleChange} />
          </>
        ) : (
          <>
            <input name="description" placeholder="Description" value={formData.description || ''} onChange={handleChange} />
            <input name="price" placeholder="Price" value={formData.price || ''} onChange={handleChange} />
          </>
        )}
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default RecordForm;
