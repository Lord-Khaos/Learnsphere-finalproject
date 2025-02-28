/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Rating.css'; // Import the CSS file for styling

const Rating = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    if (rating > 0 && comment.trim()) {
      onSubmit({ rating, comment });
      setRating(0);
      setComment('');
    } else {
      alert('Please provide a rating and a comment.');
    }
  };

  return (
    <div className="rating-container" style={{width: "100%"}}>
      <h3 style={{textAlign:'center'}}>Rate this course</h3><br />
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`star ${rating >= index + 1 ? 'filled' : ''}`}
            onClick={() => handleRatingChange(index + 1)}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment"
        rows="4"
        cols="50"
        className="comment-box"
      />
      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </div>
  );
};

export default Rating;