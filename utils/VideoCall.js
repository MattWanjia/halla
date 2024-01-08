import firestore from "firebase/firestore";
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

//const db = firestore();

const firebaseConfig = {
    apiKey: "AIzaSyA82Tz0gdHAgdOTCrO8gGCxDYrNtMrm_nk",
    authDomain: "halla-c894c.firebaseapp.com",
    projectId: "halla-c894c",
    storageBucket: "halla-c894c.appspot.com",
    messagingSenderId: "823501560675",
    appId: "1:823501560675:web:531a015a0571538d115156",
    measurementId: "G-2PPK9EWF1W"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

const createOffer = async (user) => {
  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  const offerData = {
    sdp: offer.sdp,
    type: offer.type,
  };
  await db.collection("offers").doc(user).set(offerData);
};

const createAnswer = async (user, offerData) => {
  const pc = new RTCPeerConnection();
  await pc.setRemoteDescription(new RTCSessionDescription(offerData));
  const answer = await pc.createAnswer();
  await pc.setLocalDescription(answer);
  const answerData = {
    sdp: answer.sdp,
    type: answer.type,
  };
  await db.collection("answers").doc(user).set(answerData);
};
