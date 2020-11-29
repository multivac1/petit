import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB_skfPpbNJ8KnA2MYxzIo6NcxB3sV8k-s',
    authDomain: 'petit-7890d.firebaseapp.com',
    databaseURL: 'https://petit-7890d.firebaseio.com',
    projectId: 'petit-7890d',
    storageBucket: 'petit-7890d.appspot.com',
    messagingSenderId: '805064486427',
    appId: '1:805064486427:web:673d4365593aa86fa6d2be',
    measurementId: 'G-TEMR0WBEV2',
};

const DB = firebase.initializeApp(firebaseConfig);

export const GetDBFirebase = () => firebase.firestore(DB);

//////////////////////////////////////////////////////////

export function GetAll(collection) {
    const productosCollections = GetDBFirebase().collection(collection);

    return productosCollections
        .get()
        .then((result) => {
            if (result.size === 0) {
            console.log("Sin resultados");
        }
        let ret = [];
        result.docs.forEach((doc) => {
           ret = [...ret, doc.data()];
        });

        return ret;
    })
    .catch((error) => console.log(error))
    .finally(() => {});
}

//////////////////////////////////////////////////////////

/*
export function getById(id) {
    const producto = GetDBFirebase().collection("items").doc(id);

    return producto
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Producto inexistente");
        }

        let ret = [];
        doc.docs.forEach((doc) => {
           ret = [...ret, doc.data()];
        });

        return ret;

      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }
  */