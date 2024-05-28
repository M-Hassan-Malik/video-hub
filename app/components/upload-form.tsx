'use client';

import React, { useState } from 'react';

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if(!file)  return alert("NO Filel")

    var formdata = new FormData();
    formdata.append("files", file);

    var requestOptions = {method: 'POST', body: formdata };

    const response = await fetch("/api/upload", requestOptions);
    const result = await response.text();
    console.log(result);
  };

  return (
    <div>
      <input type="file" accept="video/mp4" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadForm;
