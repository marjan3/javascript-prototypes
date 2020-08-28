export default class {
    cache;
    getText(key) {
        // get key for what language ?
        // 1. get text locally
        if (this.cache.contains(key)) {
            return this.cache.get(key);
        } else {
            const text = this.getTextFromService(key);
            this.cache.put(key, text);
            return text;
        }
    }

    getTextFromService(key) {
        return undefined;
    }
    // Each instance has texts (in different languages)
    // 1 Instance = 1 excel, Each Language in separate sheet
    // How to manage downloading ?
    // Get portions of texts ?
    // Get whole texts ?
    // download all texts in the beginning ?
};

import firebase from "firebase";

class TextsProvider {

    constructor() {
        // Setup Firebase
        var config = {
            apiKey: "AIzaSyAi_yuJciPXLFr_PYPeU3eTvtXf8jbJ8zw",
            authDomain: "vue-demo-537e6.firebaseapp.com",
            databaseURL: "https://vue-demo-537e6.firebaseio.com"
        };

        firebase.initializeApp(config);
    }

    getText(location) {

        const usersRef = firebase.database().ref(location.collection);

        window.console.log(usersRef);
    }
}
