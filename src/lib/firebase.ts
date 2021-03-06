import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Constants from 'expo-constants';
/* types */
import { Shop } from '../types/Shop';
import { initialUser, User } from '../types/User';

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

export const getShops = async () => {
  const snapshot = await firebase
    .firestore()
    .collection('shops')
    .orderBy('score', 'desc')
    .get();
  const shops = snapshot.docs.map((doc) => doc.data() as Shop);
  return shops;
};

export const signin = async () => {
  const userCredential = await firebase.auth().signInAnonymously();
  // @ts-ignore
  const { uid } = userCredential.user;
  console.log(uid);
  const userDoc = await firebase.firestore().collection('users').doc(uid).get();
  if (!userDoc.exists) {
    await firebase.firestore().collection('users').doc(uid).set(initialUser);
    return {
      ...initialUser,
      id: uid,
    } as User;
  } else {
    return {
      id: uid,
      ...userDoc.data(),
    } as User;
  }
};
