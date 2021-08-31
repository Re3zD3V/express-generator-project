var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Welcome to My Awesome Site' });
});

/* GET query parameters. */
router.get('/user-occupation', function(req, res, next) {
	const name = req.query.name;
	const occupation = req.query.occupation;

	const data = {
		name: name,
		occupation: occupation
	}

	res.render( 'userOccupation', data);
});

/* GET parameter. */
// router.get('/:path', function(req, res, next) {
// 	const path = req.params.path;

// 	res.json(
// 		{
// 			path: path
// 		}
// 	);
// });


/* GET parameter with semi fixed path. */
router.get('/product/:productid', function(req, res, next) {
	const productid = req.params.productid;

	res.json(
		{
			productid: productid
		}
	);
});

/* GET multiple parameters. */
router.get('/:username/:post', function(req, res, next) {
	const username = req.params.username;
	const post = req.params.post;

	res.json(
		{
			username: username,
			post: post
		}
	);
});

module.exports = router;
