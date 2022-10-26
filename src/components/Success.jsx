import React from 'react';

export const Success = ({ count }) => {
  return (
		<div class='success-block'>
			<img src='/assets/success.svg' alt='Success' />
			<h3>Sucess!</h3>
			<p>{count} invitation(s) have been sent to users</p>
			<button
				onClick={() => window.location.reload()}
				className='send-invite-btn'
			>
				Back
			</button>
		</div>
	)
};
