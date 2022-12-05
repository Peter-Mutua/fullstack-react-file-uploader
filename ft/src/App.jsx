import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import FileUploader from "./components/FileUploader";

const App = () => {
  return (
    <div className='container'>
      <h2>
        <center>
          React and Node File Uploader
        </center>
      </h2>
      
      <FileUploader/>
    </div>
  );
}

export default App;
