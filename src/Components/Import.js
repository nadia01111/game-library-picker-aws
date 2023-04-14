import styled from "styled-components";
import { useEffect, useState } from "react";

const Import = () => {

    const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);
   
    
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};
    
      const handleSubmission = async (event) => {
        event.preventDefault();
        const formData = new FormData();
		formData.append('File', selectedFile);

        fetch(
			'https://tranquil-brook-78066.herokuapp.com/testhtml',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
                console.log(formData);
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
        
      };
    
  
      return (
          <Wrapper>
			<input type="file" name="file" onChange={changeHandler} />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
          </Wrapper>
       
      );
    }
    

const  Wrapper = styled.div``;

export default Import;
