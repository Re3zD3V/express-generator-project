const express = require( 'express' );
const router = express.Router();

// GET create user account
router.get( '/', ( req, res, next ) => {
	res.render( 'signup', null );
});

// POST request parameters/form
router.post( '/signup', ( req, res, next ) => {
	const body = req.body; // normally comes from a post form

	res.json( {
		confirmation: 'success',
		data: body
	} )
});

module.exports = router;