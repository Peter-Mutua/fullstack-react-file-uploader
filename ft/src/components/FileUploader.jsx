import { useState } from 'react';

import axios from 'axios';

const FileUploader = () => {
  // **setting file & fileName state
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  // !*fn to get file & fileName
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  // **fn to upload the file to server
  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        `http://localhost:5000/upload/`,
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className='container col-md-6 mt-5'>
      <center>
        <div className='row'>
          <input className='form-control' 
            type="file" 
            onChange={saveFile} />
        </div>
        <div className='row mt-3'>
          <button type="submit" className='btn btn-success'
            onClick={uploadFile}
          > Upload</button>
        </div>
      </center>
    </div>
  );
}
 
export default FileUploader