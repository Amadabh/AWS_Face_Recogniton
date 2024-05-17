import React, { useState } from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';


let nextid = 0;

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
});

function Face() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [selectedFile, setSelectedFile] = useState([]);
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

  const handleUpload = (event) => {
    const file = event.target.files[0];
    console.log("file",file)
    setSelectedFile([...selectedFile,{id:nextid++,file:file}])
    if (file) {
      const src = URL.createObjectURL(file);
      setVideoSrc(src);
      // console.log("Video src",src)
    }
  };
  


  const handleSubmit = async()=>{
    console.log("selected file",selectedFile)
    selectedFile.map(async(file) => {
      // console.log("file",file.file.name);
      console.log("filname",file.file.name)

      
    const response = await axios({
      method: "GET",
      url: API_ENDPOINT,
    });
    console.log("response.data.uploadURL: ",response.data.uploadURL)
    
    const result = await fetch(response.data.uploadURL, {
      method: "PUT",
      body: file.file,
    });

    console.log("Result",result)
      
  })


    setSelectedFile([])
    
  }

  return (
    <div className="App flex justify-center items-center h-screen">
      {/* <div className=''> */}
      <div className="mx-auto bg-black" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // height: '80vh'
        }}>
      <Card variant="outlined" style={{width:'300px',height:"auto",  backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        shadowColor: '#000000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,}}>
        <CardContent>
          <h2 className='text-center text-lg'>Face Recognition</h2>
          <div className='flex justify-center'>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              className="mt-4"
            >
              Upload Video
              <VisuallyHiddenInput
                accept="video/*"
                type="file"
                onChange={handleUpload}
              />
            </Button>

            
            {videoSrc && (
            <div className="mt-10" style={{marginTop:'10px'}}>

      {selectedFile.map(file => (
          <li style={{listStyleType:'none'} } key={file.id}>{file.file.name}{' '}  <button onClick={() => {
            setSelectedFile(
              selectedFile.filter(f =>
                f.id !== file.id
              )
            );
          }}>
            X
          </button></li>

        ))}
              {/* {selectedFile.name} */}
              
            </div>
          )}
          </div>
    
        </CardContent>

        <Button variant="contained" onClick={handleSubmit} endIcon={<SendIcon />} color="success">
  Send
</Button>
      </Card>

      
      </div>
  
{/* 
      </div> */}
      
    </div>
  );
}

export default Face;