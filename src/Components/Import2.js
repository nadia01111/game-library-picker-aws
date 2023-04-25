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

const UploadFiles = () => {
  const [selectedFileType, setSelectedFileType] = useState('type1');

  const handleFileUpload = (event) => {
    // Handle file upload logic here
    console.log(event.target.files);
  };

  const handleFileTypeChange = (event) => {
    setSelectedFileType(event.target.value);
  };

  return (
    <Container>
      <Title>Upload Files</Title>
      <FileInput type="file" onChange={handleFileUpload} multiple />
      <FileTypeContainer>
        <FileTypeLabel>
          <RadioButton type="radio" value="type1" checked={selectedFileType === 'type1'} onChange={handleFileTypeChange} />
          Type 1
        </FileTypeLabel>
        <FileTypeLabel>
          <RadioButton type="radio" value="type2" checked={selectedFileType === 'type2'} onChange={handleFileTypeChange} />
          Type 2
        </FileTypeLabel>
      </FileTypeContainer>
    </Container>
  );
};

export default UploadFiles;
