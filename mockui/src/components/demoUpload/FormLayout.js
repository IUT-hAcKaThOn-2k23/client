import axios from "axios";
import React, { useState } from "react";

export default function UploadForm() {
  const [name, setName] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [musicFile, setMusicFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [error, setError] = useState("");
  const [uploadResult, setUploadResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("pdf", pdfFile);
    formData.append("image", imageFile);
    formData.append("music", musicFile);
    formData.append("video", videoFile);

    try {
      const response = await axios.post("/upload", formData);
      setUploadResult(response.data);
    } catch (error) {
      console.error(error);
      setError("An error occurred while uploading the files.");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setError("");
  };

  const handlePdfChange = (event) => {
    setPdfFile(event.target.files[0]);
    setError("");
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
    setError("");
  };

  const handleMusicChange = (event) => {
    setMusicFile(event.target.files[0]);
    setError("");
  };

  const handleVideoChange = (event) => {
    setVideoFile(event.target.files[0]);
    setError("");
  };

  return (
    <div className="container" style={{margin : "10%"}} >
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <br/>

      <label>
        PDF file:
        <input
          type="file"
          accept=".pdf"
          onChange={handlePdfChange}
        />
      </label>
      <br/>

      <label>
        Image file:
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      <br/>

      <label>
        Music file:
        <input
          type="file"
          accept="audio/*"
          onChange={handleMusicChange}
        />
      </label>
      <br/>

      <label>
        Video file:
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
        />
      </label>
      <br/>

      <button type="submit" >Submit</button>

      {error && <p>{error}</p>}

      {uploadResult && (
        <div>
          <h2>Upload result:</h2>
          <p>{uploadResult}</p>
        </div>
      )}
    </form>
    </div>
  );
}