import React, { useState } from 'react';
const  FeedBack =()=>{
  const [status, setStatus] = useState('approved');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the feedback to the instructor (example using fetch API)
    const data = { status, feedback };

    fetch('https://b7a12-summer-camp-server-side-roksana-barna.vercel.app/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Feedback submitted:', data);
        // Optionally, display a success message to the user
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
        // Optionally, display an error message to the user
      });

    // Reset the form fields
    setStatus('approved');
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="status">Status:</label>
      <select className='bg-green-400'
        id="status"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="approved">Approved</option>
        <option value="denied">Denied</option>
      </select>

      <label htmlFor="feedback">Feedback:</label>
      <textarea
      className='bg-green-100'
        id="feedback"
        name="feedback"
        rows="4"
        cols="50"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>

      <button type="submit" className=' rounded-xl   text-red-400'>Submit</button>
    </form>
  );
}

export default FeedBack;
