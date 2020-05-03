// Client
class Client {
	constructor() {
		this._app = null;
		this._companyId = null;
	}

	initialize(app) {
		this._app = app;
	}

	firestore() {
		return this._app.firestore();
	}
}

export default new Client();
