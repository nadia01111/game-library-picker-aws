import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 40%;
  background-color: #2d2d2d;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  color: #e8e8e8;
  font-size: 24px;
  text-align: center;
`;

const FileInput = styled.input`
  font-size: 18px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
`;

const FileTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const FileTypeLabel = styled.label`
  color: #e8e8e8;
  font-size: 18px;
  margin-right: 20px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 10px;
  margin-left: 45%;
`;

const ClearBtn = styled.button`
  background-color: lightgray;
  border: none;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 10px;
`;
const UploadFiles = () => {
  const [selectedFileType, setSelectedFileType] = useState('type1'); //Humble Bundle for type1 and Epic Store for type2
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileTypeChange = (event) => {
    setSelectedFileType(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    const url = selectedFileType === 'type1' ? 'https://tranquil-brook-78066.herokuapp.com/importhtml/HBLibrary' : 'https://tranquil-brook-78066.herokuapp.com/importhtml/EGLibrary';
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then((response) => response.text())
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };


  const handleClick = () => {
    fetch("https://tranquil-brook-78066.herokuapp.com/remove-cache", {
      method: "DELETE"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to clean cache");
        }
        console.log("Cache cleaned successfully");
      })
      .catch(error => {
        console.error(error);
      });
    }
  return (
    <Container>
      <Title>Upload File</Title>
      <form onSubmit={handleFormSubmit}>
        <FileInput type="file" onChange={handleFileUpload} />
        <FileTypeContainer>
          <FileTypeLabel> 
            <RadioButton type="radio" value="type1" checked={selectedFileType === 'type1'} onChange={handleFileTypeChange} />
            Humble Bundle
          </FileTypeLabel>
          <FileTypeLabel>
            <RadioButton type="radio" value="type2" checked={selectedFileType === 'type2'} onChange={handleFileTypeChange} />
            Epic Store
          </FileTypeLabel>
        </FileTypeContainer>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
	  <ClearBtn onClick={handleClick}>Clear cache</ClearBtn>
    </Container>
  );
};

export default UploadFiles;
