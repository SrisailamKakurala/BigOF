import React, {useContext} from 'react'
import Cookies from 'js-cookie';
import { AuthContext } from '../Contexts/AuthContext';

const farmerDashBoard = () => {

  const { setIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    console.log('accessToken: ' + accessToken)
    const farmerDets = localStorage.getItem('farmerDets');
    if (farmerDets || accessToken) {
      setIsAuthenticated(true); // Set to true if user details exist
    }
  }, []);

  return (
    <div>farmerDashBoard</div>
  )
}

export default farmerDashBoard