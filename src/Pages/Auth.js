import React from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ authenticate }) => {
  const navigate = useNavigate();
  const onClick = () => {
    authenticate();
    navigate('dashboard');
  };

  return <div>Auth</div>;
};

export default Auth;
