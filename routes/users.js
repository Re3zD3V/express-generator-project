var express = require('express');
var router = express.Router();

const profiles = {
	gkachrida: {
		name: {
			firstname: 'ghizlane',
			lastname: 'kachrida'
		},
		company: 'self',
		languages: ['javascript', 'react', 'nodejs', 'php']
	},
	sjobs: {
		name: {
			firstname: 'steve',
			lastname: 'jobs'
		},
		company: 'apple',
		languages: ['objective-c', 'swift', 'c++']
	},
	bgates: {
		name: {
			firstname: 'bill',
			lastname: 'gates'
		},
		company: 'microsoft',
		languages: ['c', 'c#', 'java']
	},
}

/* GET root path */
router.get('/', ( req, res, next ) => {
	const data = {
		profiles : profiles
	};
	res.render( 'profiles', data );
});

/* GET add profile */
router.get('/new', ( req, res, next ) => {
	res.render( 'addProfile', null );
});

/* POST new profile */
router.post('/post', ( req, res, next ) => {
	const body = req.body;
	body.txtLanguages = body.txtLanguages.split(', ');

	profiles[body.txtUsername] = {
		name: {
			firstname: body.txtFirstname,
			lastname: body.txtLastname
		},
		company: body.txtCompany,
		languages: body.txtLanguages
	};

	res.redirect( '/profiles');
});

/* GET multiple parameters. */
router.get('/:username', function(req, res, next) {
	const username = req.params.username;
	const profile = profiles[username];

	if(profile == null) {
		res.json(
			{
				code: 404,
				message: `The profile of ${username} couldn't be found !`
			}
		);
		return;
	}
		
	res.render( 'profile', profile );
});

/* GET users listing. */
// router.get('/', function(req, res, next) {
// 	res.send('respond with a resource');
// });

module.exports = router;
