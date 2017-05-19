import { map } from 'lodash';
import { firebaseAuth, firebaseDatabase } from '../state/firebase';

export const fetchOrderFromFirebase = (orderKey) => {
  const currentUser = firebaseAuth.currentUser;

  const ref = firebaseDatabase.ref(`/users/${currentUser.uid}/orders/${orderKey}`);
  let order;
  ref.on('value', (snapshot) => {
    order = snapshot.val();
  });
  return order;
};

export const fetchOrdersFromFirebase = () => {
  const currentUser = firebaseAuth.currentUser;
  console.log('currentUser.uid', currentUser.uid);
  const ref = firebaseDatabase.ref(`/users/${currentUser.uid}/orders`);

  let orders;
  ref.on('value', (snapshot) => {
    orders = snapshot.val();
  });
  console.log('orders', orders);

  return orders;
};

export const fetchGiftsFromFirebase = (orderKey) => {
  const currentUser = firebaseAuth.currentUser;
  const ref = firebaseDatabase.ref(`/users/${currentUser.uid}/orders/${orderKey}`);

  ref.once('value').then((snapshot) => {
    const order = snapshot.val();
    let gifts = {};
    map(order.gifts, (giftKey) => {
      const refGift = firebaseDatabase.ref(`/products/${giftKey}`);
      refGift.once('value', (snapshotGift) => {
        console.log('snapshotGift.val()', snapshotGift.val());
        gifts[giftKey] = snapshotGift.val();
      });
    });
    console.log('gifts', gifts);
  });
  return {};
};

export default {};
