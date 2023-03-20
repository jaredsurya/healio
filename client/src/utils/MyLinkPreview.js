import React, { useState } from 'react'
import LinkPreview from 'link-preview-js';

console.log(LinkPreview); // Make sure this outputs the LinkPreview class


function MyLinkPreview() {
  const [previewData, setPreviewData] = useState(null);

  async function fetchPreviewData() {
    const data = await LinkPreview.getPreview('https://leafletjs.com/');
    setPreviewData(data);
  }

  if (!previewData) {
    return (
      <div>
        <button onClick={fetchPreviewData}>Load preview</button>
      </div>
    );
  }

  return (
    <div>
      <img src={previewData.image} alt="Preview" />
      <h2>{previewData.title}</h2>
      <p>{previewData.description}</p>
    </div>
  );
}


export default MyLinkPreview
