import { RabbitLegacy, enc } from "crypto-js";
exports.initGlobalUtility = ({ useDevStatus, useDevLog, useLocalhostStatus, disableReactDevTools }) => {
	if ( useDevLog ) {
		window.devLog = process.env.NODE_ENV === 'development' ? console
			.log
			.bind( console ) : ( ) => {};
		window.devLog( `%c ---------- window.devLog - the logs with window.devLog are only shown while in development mode 👌 ----------`, `color:#FCD639; font-size: 1.4em; background-color: transparent; padding:10px; border: 2px dashed #FCD639; border-radius: 0.8em;` );
	}
	if ( useDevStatus ) {
		window.devStatus = process.env.NODE_ENV === 'development';
	}
	if ( useLocalhostStatus ) {
		window.localhostStatus = Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match( /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/ ));
	}
	if ( disableReactDevTools ) {
		if ( typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object" ) {
			for (let [key,value]of Object.entries( window.__REACT_DEVTOOLS_GLOBAL_HOOK__ )) {
				window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value == "function" ? ( ) => {} : null;
			}
		}
	}
}
exports.cryptoRabbitEncrypt = ({ text, password }) => {
	return RabbitLegacy.encrypt( text.toString( ), password ).toString( );
}
exports.cryptoRabbitDecrypt = ({ encrypted, password }) => {
	return RabbitLegacy
		.decrypt( encrypted, password )
		.toString( enc.Utf8 );
}
exports.setCookie = ({ header, value, ages }) => {
	const d = new Date( );
	d.setTime(d.getTime( ) + ( ages * 24 * 60 * 60 * 1000 ));
	const expires = `expires=${ d.toUTCString( ) }`;
	document.cookie = `${ header }=${ value };${ expires };path=/`;
}
exports.getCookie = ( header ) => {
	const cname = header + "=";
	const decodedCookie = decodeURIComponent( document.cookie );
	const ca = decodedCookie.split( ';' );
	for ( let i = 0; i < ca.length; i += 1 ) {
		let c = ca[i];
		while ( c.charAt( 0 ) === ' ' ) {
			c = c.substring( 1 );
		}
		if ( c.indexOf( cname ) === 0 ) {
			const value = c.substring( cname.length, c.length );
			return value === 'true' ? true : value === 'false' ? false : value === '' ? undefined : value;
		}
	}
	return "";
}
exports.setSession = ( header, value ) => {
	return window
		.sessionStorage
		.setItem(header, JSON.stringify( value ));
}
exports.getSession = ( header ) => {
	return JSON.parse(window.sessionStorage.getItem( header ));
}
exports.deleteSession = ( header ) => {
	return window
		.sessionStorage
		.removeItem( header );
}
exports.clearSession = ( ) => {
	return window
		.sessionStorage
		.clear( );
}
exports.greeterWord = ( name ) => {
	const currentHour = new Date( ).getHours( );
	const text = `Good ${ currentHour >= 3 && currentHour < 12 ? 'Morning' : currentHour >= 12 && currentHour < 15 ? 'Afternoon' : currentHour >= 15 && currentHour < 20 ? 'Evening' : currentHour >= 20 || currentHour < 3 ? 'Night' : '' }, ${ name }!`;
	return text;
}
exports.idrCurrencyFormatter = ( val ) => {
	return val === undefined || val === '' ? 'Rp -' : new Intl
		.NumberFormat("id", {
		style: "currency",
		currency: 'IDR'
	})
		.format( val )
		.replace( /(\.|,)00$/g, '' );
}
exports.idrCurrencyParser = ( val ) => {
	try {
		if ( typeof val === "string" && !val.length ) {
			val = "0.0";
		}
		const group = new Intl
			.NumberFormat( 'id' )
			.format( 1111 )
			.replace( /1/g, "" );
		const decimal = new Intl
			.NumberFormat( 'id' )
			.format( 1.1 )
			.replace( /1/g, "" );
		var reversedVal = val.replace( new RegExp( "\\" + group, "g" ), "" );
		reversedVal = reversedVal.replace( new RegExp( "\\" + decimal, "g" ), "." );
		reversedVal = reversedVal.replace( /[^0-9.]/g, "" );
		const digitsAfterDecimalCount = ( reversedVal.split( "." )[ 1 ] || [ ]).length;
		const needsDigitsAppended = digitsAfterDecimalCount > 2;
		if ( needsDigitsAppended ) {
			reversedVal = reversedVal * Math.pow( 10, digitsAfterDecimalCount - 2 );
		}
		return Number.isNaN( reversedVal ) ? 0 : reversedVal;
	} catch ( error ) {
		console.error( error );
	}
};
exports.isJsonString = ( str ) => {
	try {
		const parsing_test = JSON.parse( str );
		if ( typeof parsing_test === 'number' ) {
			return false;
		} else if ( typeof parsing_test === 'boolean' ) {
			return false;
		}
	} catch ( e ) {
		return false;
	}
	return true;
}
exports.promiseAll = async({ funcList }) => await Promise.all( funcList );