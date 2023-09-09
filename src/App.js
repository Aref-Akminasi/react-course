import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [formData, setFormData] = useState();
  const submitForm = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <Header />
      <Form onSubmitForm={submitForm} />
      {formData ? (
        <Table data={formData} />
      ) : (
        <h2 className="fall-back-text">No investment calculated yet.</h2>
      )}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
