import React, { useEffect, useState } from 'react';
import {
  fetchPatients,
  fetchMedicines,
  createRecord,
  updateRecord,
  deleteRecord
} from '../services/api';
import DataTable from '../components/DataTable';
import RecordForm from '../components/RecordForm';
import ViewModal from '../components/ViewModal';

const Home = () => {
  const [data, setData] = useState([]);
  const [formType, setFormType] = useState(null);
  const [editData, setEditData] = useState(null);
  const [viewData, setViewData] = useState(null);

  const loadData = async () => {
    const [patients, medicines] = await Promise.all([fetchPatients(), fetchMedicines()]);
    setData([
      ...patients.data.map((p) => ({ ...p, type: 'patients' })),
      ...medicines.data.map((m) => ({ ...m, type: 'medicines' }))
    ]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreate = (type) => {
    setFormType(type);
    setEditData(null);
  };

  const handleSubmit = async (type, formData) => {
    if (formData._id) {
      await updateRecord(type, formData._id, formData);
    } else {
      await createRecord(type, formData);
    }
    setFormType(null);
    await loadData();
  };

  const handleEdit = (record) => {
    setFormType(record.type);
    setEditData(record);
  };

  const handleDelete = async (record) => {
    await deleteRecord(record.type, record._id);
    await loadData();
  };

  return (
    <div className="container">
      <h1>Hospital Management</h1>
      <button className="create-btn" onClick={() => handleCreate('patients')}>Create Patient</button>
      <button className="create-btn" onClick={() => handleCreate('medicines')}>Create Medicine</button>
      <DataTable
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={setViewData}
      />

      {formType && (
        <RecordForm
          type={formType}
          onSubmit={handleSubmit}
          onClose={() => setFormType(null)}
          initialData={editData || {}}
        />
      )}

      {viewData && <ViewModal data={viewData} onClose={() => setViewData(null)} />}
    </div>
  );

};

export default Home;