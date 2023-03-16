import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import Quill styles
import 'react-quill/dist/quill.bubble.css'; // optional theme
import 'react-quill/dist/quill.core.css'; // minimal styles

function QuillEditor() {
  const [text, setText] = useState('');

  function handleChange(value) {
    setText(value);
  }
console.log(text)
  return (
    <ReactQuill
    style={{ height: '225px', fontSize: '18pt' }}
      value={text}
      onChange={handleChange}
      modules={{
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote'],
          [{ 'header': 1 }, { 'header': 2 }], // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],

          [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
          [{ 'direction': 'rtl' }], // text direction
          [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'font': [] }],
          [{ 'align': [] }],
          ['clean'] // remove formatting button
        ]
      }}
      formats={[
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]}
      placeholder="Type here..."
      theme="snow" // or "bubble"
    />
  );
}

export default QuillEditor