import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/layout/Layout';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const [session, setSession] = useState({});

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER_URL}/auth/authenticate-user`, {
      withCredentials: true,
    })
      .then(({ data }) => {
        const { iat, ...authData } = data; // remove unimportant iat value

        setSession(authData);
      })
      .catch((err) => {
        navigate('/login');
      });
  }, []);

  async function logout() {
    await axios(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, {
      withCredentials: true,
    });

    navigate('/');
  }

  return (
    <Layout>
      <h3>User session:</h3>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <button type="button" onClick={logout}>
        Log out
      </button>
    </Layout>
  );
};

export default DashboardPage;
