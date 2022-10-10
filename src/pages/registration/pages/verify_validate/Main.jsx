// Library
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// Styles
import './styles/Phone.css';
import './styles/Tab.css';
import './styles/Desktop.css';

// Components
import OnBad from './components/OnBad';
import OnSuccess from './components/OnSuccess';
import OnInvalid from './components/OnInvalid';

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

function Main() {
  // Hook Query
  const query = useQuery();

  // Hook State
  const [resVerifData, setResVerifData] = useState(false);
  const [waLink, setWaLink] = useState('');
  const [resMessage, setResMesage] = useState('');

  // Handler
  useEffect(() => {
    if (query.get('userId') && query.get('verifyToken')) {
      axios.post('https://pemrograman.me/api/v1/members/verify', {
        userId: query.get('userId'),
        verifyToken: query.get('verifyToken'),
      }, { timeout: 10000 }).then((res) => {
        if (res.status === 200) {
          if (res.data.success === true) {
            setResVerifData('success');
            setWaLink(res.data.data.link);
          }
        }
      }).catch((err) => {
        if (err.code === 'ERR_NETWORK') {
          setResVerifData('bad');
        } else if (err.code === 'ECONNABORTED') {
          setResVerifData('bad');
        } else if (err.response.data.success === false) {
          setResVerifData('invalid');
          setResMesage(err.response.data.message);
          if(err.response.data.message === 'Member is already verified') {
            // setWaLink(err.response.data.data.link);
          }
        } else if (err.response.status === 400) {
          setResVerifData('bad');
        }
      });
    } else {
      setResVerifData('bad');
    }
  }, []);

  if (resVerifData === 'success') {
    return (<OnSuccess waLink={waLink} />);
  } else if (resVerifData === 'invalid') {
    return(<OnInvalid resMessage={resMessage} userId={query.get('userId')} resendToken={query.get('resendToken')} email={query.get('email')} waLink={waLink} />)
  } else if(resVerifData === 'bad') {
    return (<OnBad />)
  }
  
}

export default Main;
