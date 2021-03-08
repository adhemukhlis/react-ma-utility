exports.printMsg = function ( ) {
	console.log( "This is a message from the demo package" );
};
exports.initGlobalUtility = ({ useGlobalDevStatus, useGlobalDevLog }) => {
	if ( useGlobalDevLog ) {
		window.devLog = process.env.NODE_ENV === 'development' ? console
			.log
			.bind( console ) : ( ) => {};
		window.devLog( `%c ---------- window.devLog - the logs with window.devLog are only shown while in development mode 👌 ----------`, `color:#FCD639; font-size: 1.4em; background-color: transparent; padding:10px; border: 2px dashed #FCD639; border-radius: 0.8em;` );
	}
	if ( useDevStatus ) {
		window.onDevelopment = process.env.NODE_ENV === 'development';
	}
}