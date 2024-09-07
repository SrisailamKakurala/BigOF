import React, {useContext, useEffect} from 'react'
import Cookies from 'js-cookie';
import { AuthContext } from '../Contexts/AuthContext';

const farmerDashBoard = () => {

  const { setIsAuthenticated, setLoading } = useContext(AuthContext);

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    console.log('accessToken: ' + accessToken)
    const userData = localStorage.getItem('userData');
    if (userData || accessToken) {
      setIsAuthenticated(true); // Set to true if user details exist
    }
  }, []);

  return (
    <div className='bg-black w-[100vw] h-screen'>farmerDashBoard</div>
  )
}

export default farmerDashBoard