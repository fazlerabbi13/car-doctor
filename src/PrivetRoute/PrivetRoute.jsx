import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const routeLocation = useLocation();
    console.log(routeLocation)

    if (loading) {
        return <span className="loading loading-spinner text-info"></span>
    }

    if (!user?.email) {
       return <Navigate state={location.pathname} to='/login' />
    }

    return children ;
};

export default PrivetRoute;