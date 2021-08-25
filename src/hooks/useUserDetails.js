import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetails } from '../redux/user-details/userDetailsAction';

const useUserDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.details);
  const userId = useSelector((state) => state.sessionId);
  console.log(user);

  useEffect(() => {
    if (userId.sessionId) {
      fetchUserDetails(userId.sessionId);
    }
  }, [userId, dispatch]);

  return [user, userId];
};

export default useUserDetails;
