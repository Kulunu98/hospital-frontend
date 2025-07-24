// /src/components/LoginForm.js
import React from 'react';

const LoginForm = ({ email, password, error, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        required
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        required
        onChange={onChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
