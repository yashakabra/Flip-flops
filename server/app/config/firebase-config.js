import admin from "firebase-admin";
// import serviceAccount from "./serviceAccount.json";
import { assert } from 'console';
import serviceAccount from './serviceAccount.json' assert { type: "json" };
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
