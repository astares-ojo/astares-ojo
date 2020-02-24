var atom = require('./astares-atom');

class OJO {
	
	/**
	 * Boostrap entry
	 */
	static bootstrap() {
		[Array, Number, Boolean, Date, Math].forEach(function(element) {   
            atom.Namespace.mapObjectToNamespace(element, "js.lang"); 	        
        });
    }
	
}
 
////////////////////////////////////////////
// BOOTSTRAP
////////////////////////////////////////////
OJO.bootstrap();