import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase/index";
import { useProjectStore } from "../stores/store";
const projectStore = useProjectStore();

const getUser = async () => {
  // INPUTS
  const querySnapshot = await getDocs(collection(db, "user"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    let response = doc.data();

    projectStore.username = response?.username;
    projectStore.isUserPremium = response?.isPremium;
    projectStore.email = response?.email;
  });
  console.log("projectStore", projectStore.email);
  console.log("projectStore", projectStore.isUserPremium);
  console.log("projectStore", projectStore.username);

  localStorage.setItem("username", projectStore.username);
  localStorage.setItem("email", projectStore.email);

  console.log("XD", localStorage.getItem("username"));
  console.log("XD", localStorage.getItem("email"));
};

getUser();
