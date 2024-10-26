import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function FileUpload({ category }) {
  const [message, setMessage] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    axios.post(`http://localhost:5000/api/files/upload/${category}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      setMessage(`File uploaded for ${category}`);
    })
    .catch((error) => {
      setMessage('Error uploading file');
      console.error(error);
    });
  }, [category]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.xlsx, .xls',
    multiple: false,
  });

  return (
    <div {...getRootProps()} className="p-3 border border-primary rounded">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here...</p>
      ) : (
        <p>Drag & drop an Excel file here, or click to select a file</p>
      )}
      <Button variant="primary" className="mt-2">Upload {category} File</Button>
      {message && <Alert className="mt-3">{message}</Alert>}
    </div>
  );
}

export default FileUpload;
