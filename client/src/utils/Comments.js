import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function Comments({service}) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([])

  const CommentsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '2rem',
  marginTop: '1rem',
});

const CommentBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '60%',
  marginBottom: '1rem',
  padding: '1rem',
  backgroundColor: '#f0f4ff',
  borderRadius: '16px',
});

const CommentAuthor = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

const CommentText = styled(Typography)({
  marginBottom: '0.5rem',
});

const CommentInput = styled(TextField)({
  width: '80%',
  marginBottom: '0rem',
});

const SubmitButton = styled(Button)({
  marginTop: '0rem',
});



  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComment('')
  };

  return (
    <CommentsContainer>
      <Typography variant='h5' fontWeight={"bold"} color={"primary"} gutterBottom >Comments:</Typography>
      <CommentBox>
        <CommentAuthor>John Doe</CommentAuthor>
        <CommentText>This is my comment.</CommentText>
      </CommentBox>
      <CommentBox>
        <CommentAuthor>Jane Smith</CommentAuthor>
        <CommentText>Another comment.</CommentText>
      </CommentBox>
      <CommentInput
        label="Add a comment"
        variant="outlined"
        value={comment}
        onChange={handleCommentChange}
        multiline
        rows={4}
      />
      <SubmitButton
        variant="contained"
        color="primary"
        onClick={() => handleSubmit()}
        >
        Submit
      </SubmitButton>
    </CommentsContainer>
  );
}

export default Comments;