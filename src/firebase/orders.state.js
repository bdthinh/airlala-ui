import { firebaseAuth, firebaseDatabase } from '../state/firebase';

export const fetchOrderFromFirebase = (orderId) => {
  const currentUser = firebaseAuth.currentUser;
  return firebaseDatabase.ref(`users/${currentUser.uid}/orders/${orderId}`);
};

export default {};
