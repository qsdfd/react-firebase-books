import React from 'react';

const AuthError = authError => {
  return (
    <div className="red-text center">
      {authError ? <p>{authError}</p> : null}
    </div>
  );
};

export default AuthError;
