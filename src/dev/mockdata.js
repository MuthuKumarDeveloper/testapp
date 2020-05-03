// Mock Data
const currDate = new Date();
const mockData = {
	firestore: {
		__collection__: {
			users: {
				__doc__: {
					user1: {
						userId: 'user1',
						name: 'Mason Rice',
						country: 'IN',
						state: 'TN',
						phone: '',
						gender: 'male',
						company: 'Squash Apps Private Ltd',
						email: 'rice.mason13@cyces.com',
						job: 'User Experiance Designer',
						experiance: 0,
						code: '123456',
						createdOn: currDate,
					},
				},
			},
		},
	},
};

export default mockData;
