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
    }
	
}
 
////////////////////////////////////////////
// BOOTSTRAP
////////////////////////////////////////////
OJO.bootstrap();