// AuthPage.tsx or any other parent component
import React from 'react';
import AuthForm from '../components/AuthForm';
import Header from '../components/Header';

const AuthPage: React.FC = () => {
  return (
    <div>
        <Header />
        <div className="container mx-auto px-4">
            <AuthForm />
        </div>
    </div>
  );
};

export default AuthPage;
