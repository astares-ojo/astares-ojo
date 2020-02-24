(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
module.exports = {
/*
 * A namespace
 */
Namespace : class Namespace {

/////////////////////////////////////////////////////////////////////////////////////
    // STATIC ACCESSING
    /////////////////////////////////////////////////////////////////////////////////////

	/**
	 * Return the global object which is either self, or window or the defined global object
	 * {return} the global object
	 */
	static global() {
		if (typeof self !== 'undefined') { return self; }      //eslint-disable-line no-undef
		if (typeof window !== 'undefined') { return window; }  //eslint-disable-line no-undef
		if (typeof global !== 'undefined') { return global; }  //eslint-disable-line no-undef
		throw new Error('No global object');
    }

    /////////////////////////////////////////////////////////////////////////////////////
    // STATIC UTILITIES
    /////////////////////////////////////////////////////////////////////////////////////

    /**
     * Return a new unique ID
     */
    static createUniqueID() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
      };
    

	/**
	 * Map the given object to the given Namespace.
	 * 
	 * @param {*} object 
	 * @param {*} namespaceName 
	 */
    static mapObjectToNamespace(object, namespaceName) {
		if (typeof object !== 'undefined') {       
		      (Namespace.create(namespaceName))[object.name] = object;
		}
		return object;  
	}

	/**
	 * Create a new namespace.
	 * {@param} {String} namespace the fully qualified 
	 * {return} the created Namespace
	 */
	static create(namespace) {
		 var path = '';
		    return namespace.split('.').reduce(function(holder, name){
		    if(holder[name] == undefined) {
		        path = path + name;
		        var ns = new Namespace(path); 
		        holder[name] = holder[name] || ns;
		        path = path + '.';
		    }
		    return holder[name];
		  }, Namespace.global());
	}

 	/**
	 * Return a new instance of the receiver
     * {@param} {String} - 
	 * {return} a new instance with the given name
	 */

	constructor(newName) {
        this.name = newName;
        this._ooid = Namespace.createUniqueID(); 
	}
	
	toString() {
		return this._name;
	}
   
}

}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
var atom = require('./astares-atom');

class OJO {
	
	/**
	 * Boostrap entry
	 */
	static bootstrap() {
		Math.name = "Math"; 	// give math a name (as it has none by default)
		[Object, Function, Symbol, Error, EvalError, RangeError, Date, Array, Number, Boolean, Date, Math].forEach(function(element) {   
            atom.Namespace.mapObjectToNamespace(element, "js.lang"); 	        
		});		

		atom.Namespace.mapObjectToNamespace(atom.Namespace, "ojo.lang.reflect");
    }
	
}
 
////////////////////////////////////////////
// BOOTSTRAP
////////////////////////////////////////////
OJO.bootstrap();

},{"./astares-atom":1}]},{},[2]);
