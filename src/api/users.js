// UserApi Api
import BaseApi from './base';

class UserApi extends BaseApi {
	getUser() {
		const userId = 'user1';

		return this._masterCollection('users')
			.doc(userId)
			.get()
			.then((userDoc) => {
				if (userDoc.exists) {
					return Promise.resolve(this._convertUserObject(userDoc));
				}
				return Promise.resolve(null);
			});
	}

	/* Private Functions */
	_convertUserObject(doc) {
		const docData = doc.data();

		const user = {
			id: doc.id,
			userId: docData.userId,
			name: docData.name || '',
			phone: docData.phone || '',
			state: docData.state || '',
			email: docData.email || '',
			company: docData.company || '',
			job: docData.job || '',
			code: docData.code || 0,
			country: docData.country || '',
			experiance: docData.experiance || '',
			createdOn: this._getDateValue(docData.createdOn) || new Date(),
		};

		return user;
	}
}

export default new UserApi();
