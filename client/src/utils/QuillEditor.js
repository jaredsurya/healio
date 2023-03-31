import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import Quill styles
import 'react-quill/dist/quill.bubble.css'; // optional theme
import 'react-quill/dist/quill.core.css'; // minimal styles

function QuillEditor({bio, setBio}) {

  function handleChange(value) {
    setBio(value);
  }

  return (
    <ReactQuill
    style={{ height: '225px', fontSize: '18pt' }}
      value={bio}
      onChange={handleChange}
      modules={{
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote'],
          [{ 'header': 1 }, { 'header': 2 }], // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'direction': 'rtl' }], // text direction
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['clean'] // remove formatting button
        ]
      }}
      formats={[
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]}
      placeholder="Use this space to write it all out..."
      theme="snow" // or "bubble"
    />
  );
}

export default QuillEditor