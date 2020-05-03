// Firebase sdk
import MockFirebase from 'mock-cloud-firestore';

import mockData from './mockdata';

class FirebaseApp {
	constructor() {
		this._mockFirebase = new MockFirebase(mockData.firestore);
	}

	firestore() {
		return this._mockFirebase.firestore();
	}
}

export default new FirebaseApp();
