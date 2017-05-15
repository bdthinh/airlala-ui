import { firebaseAuth } from '../state/firebase';

export const fetchUserFFB = () => firebaseAuth.currentUser;

export default {};
