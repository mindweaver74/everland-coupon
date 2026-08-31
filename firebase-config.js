// ============================================================
// Firebase 프로젝트 설정
// Firebase 콘솔 > 프로젝트 설정 > 일반 > "내 앱"에서 복사한 값을
// 아래 firebaseConfig 안에 그대로 붙여넣으세요.
// (참고 문서: README.md 의 "1. Firebase 프로젝트 만들기" 참고)
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBU-_KT24VWPGG0Hu1LANB2gLSkIxmTWs",
  authDomain: "everland-coupon.firebaseapp.com",
  projectId: "everland-coupon",
  storageBucket: "everland-coupon.firebasestorage.app",
  messagingSenderId: "218514759435",
  appId: "1:218514759435:web:8308f4ecac02f218b24c0e",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
