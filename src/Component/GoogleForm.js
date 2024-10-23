import React from 'react';

function GoogleForm() {
  return (
    <div className="google-form-container">
      {/* Other website content can go here */}
      <iframe
        title="Google Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScAZvF9BVciTmmxMXseqY03_ni_0f7TGhLnR-0IGYkcYAbXbw/viewform?embedded=true"
        width="100%"
        height="856"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading...
      </iframe>
    </div>
  );
}

export default GoogleForm;
