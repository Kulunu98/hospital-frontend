import React from 'react';

const DataTable = ({ data, onEdit, onDelete, onView }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Info</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={`${row.type}-${row._id}`}>
            <td>{row.type}</td>
            <td>{row.name}</td>
            <td>{row.age || row.price || '-'}</td>
            <td>
              <button onClick={() => onView(row)}>View</button>
              <button onClick={() => onEdit(row)}>Edit</button>
              <button onClick={() => onDelete(row)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;