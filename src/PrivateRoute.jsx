import { useEffect } from 'react';
import { useAuth } from './Auth/AuthProbider';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/signIn');
        }
    }, [isAuthenticated, navigate]);

    if (isAuthenticated) {
        return children;
    }
    
    return null;
};

export default PrivateRoute;
