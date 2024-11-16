import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Facebook } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';

interface LoginFormProps {
  onLogin: () => void;
  onShowRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onShowRegister }) => {
  const { loginWithRedirect } = useAuth0();

  const buttonVariants = {
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full"
    >
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-pink-600 text-transparent bg-clip-text mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-600">Access your personalized healthcare journey</p>
      </motion.div>

      <div className="space-y-4">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}
          className="w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 shadow-sm"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          <span>Continue with Google</span>
        </motion.button>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => loginWithRedirect({ connection: 'facebook' })}
          className="w-full bg-[#1877F2] text-white py-3 px-4 rounded-xl hover:bg-[#1864D9] transition-colors flex items-center justify-center space-x-2"
        >
          <Facebook className="w-5 h-5" />
          <span>Continue with Facebook</span>
        </motion.button>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => loginWithRedirect()}
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-green-700 hover:to-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Mail className="w-5 h-5" />
          <span>Continue with Email</span>
        </motion.button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onShowRegister}
            className="text-blue-600 font-semibold hover:underline"
          >
            Register now
          </motion.button>
        </p>
      </div>
    </motion.div>
  );
};