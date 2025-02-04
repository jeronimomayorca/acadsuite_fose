/*!
 * Biblioteca de JavaScript jQuery v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation y otros colaboradores
 * Publicado bajo la licencia MIT
 * https://jquery.org/license
 *
 * Fecha: 2023-08-28T13:37Z
 */
( función ( global, fábrica ) {

	"utilizar estricto";

	si ( tipode módulo === "objeto" y tipode módulo.exportaciones === "objeto" ) {

		// Para entornos CommonJS y similares a CommonJS donde se necesita una `ventana` adecuada
		// está presente, ejecuta la fábrica y obtiene jQuery.
		// Para entornos que no tienen una `ventana` con un `documento`
		// (como Node.js), exponer una fábrica como module.exports.
		// Esto acentúa la necesidad de crear una verdadera «ventana».
		// por ejemplo var jQuery = require("jquery")(ventana);
		// Consulte el ticket trac-14549 para obtener más información.
		módulo.exportaciones = global.documento ?
			fábrica(global, verdadero):
			función( w ) {
				si ( !w.documento ) {
					generar nuevo Error( "jQuery requiere una ventana con un documento" );
				}
				devuelve fábrica( w );
			};
	} demás {
		fábrica( global );
	}

// Pase esto si la ventana aún no está definida
} )( tipo de ventana !== "indefinido" ? ventana : esta, función( ventana, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lanza excepciones cuando el código no estricto (por ejemplo, ASP.NET 4.5) accede al modo estricto
// arguments.callee.caller (trac-13335). Pero a partir de jQuery 3.0 (2016), el modo estricto debería ser común
// es suficiente con que todos esos intentos estén protegidos en un bloque try.
"utilizar estricto";

var arr = [];

var getProto = Objeto.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? función( matriz ) {
	devolver arr.flat.call( matriz );
} : función( matriz ) {
	devolver arr.concat.apply( [], matriz );
};


var push = arr.push;

var indexOf = arr.indexOf;

var clase2tipo = {};

var toString = clase2type.toString;

var hasOwn = clase2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call(Objeto);

var soporte = {};

var esFuncion = funcion esFuncion( obj ) {

		// Compatibilidad: Chrome <=57, Firefox <=52
		// En algunos navegadores, typeof devuelve "función" para elementos HTML <object>
		// (es decir, `typeof document.createElement( "object" ) === "function"`).
		// No queremos clasificar *ningún* nodo DOM como una función.
		// Compatibilidad: QtWeb <=3.8.5, WebKit <=534.34, herramienta wkhtmltopdf <=0.12.5
		// Además, para el antiguo WebKit, typeof devuelve "función" para las colecciones HTML
		// (por ejemplo, `typeof document.getElementsByTagName("div") === "función"`). (gh-4756)
		devuelve typeof obj === "función" && typeof obj.nodeType !== "número" &&
			tipo de obj.item !== "función";
	};


var esVentana = función esVentana( obj ) {
		devuelve obj != null && obj === obj.window;
	};


var documento = ventana.documento;



	var atributos de script preservados = {
		tipo: verdadero,
		src: verdadero,
		nonce: verdadero,
		noModule: verdadero
	};

	función DOMEval( código, nodo, doc ) {
		doc = doc || documento;

		var yo, val,
			script = doc.createElement( "script" );

		script.text = código;
		si (nodo) {
			para ( i en preservedScriptAttributes ) {

				// Compatibilidad: Firefox 64+, Edge 18+
				// Algunos navegadores no admiten la propiedad "nonce" en los scripts.
				// Por otro lado, simplemente usar `getAttribute` no es suficiente.
				// el atributo `nonce` se restablece a una cadena vacía cada vez que
				// se convierte en conectado al contexto de navegación.
				// Ver https://github.com/whatwg/html/issues/2369
				// Ver https://html.spec.whatwg.org/#nonce-attributes
				// La comprobación `node.getAttribute` se agregó por el bien de
				// `jQuery.globalEval` para que pueda falsificar un nodo que contenga nonce
				// a través de un objeto.
				val = nodo[ i ] || nodo.getAttribute && nodo.getAttribute( i );
				si ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


función toType(obj) {
	si (obj == null) {
		devuelve obj + "";
	}

	// Compatibilidad: solo Android <=2.3 (RegExp funcional)
	devolver tipo de obj === "objeto" || tipo de obj === "función" ?
		class2type[ toString.call( obj ) ] || "objeto" :
		tipo de obj;
}
/* Símbolo global */
// Definir este global en .eslintrc.json crearía el peligro de usar el global
// sin protección en otro lugar, parece más seguro definir global solo para este módulo



var versión = "3.7.1",

	rhtmlSufijo = /HTML$/i,

	// Definir una copia local de jQuery
	jQuery = función(selector, contexto) {

		// El objeto jQuery es en realidad solo el constructor init 'mejorado'
		// Necesita init si se llama a jQuery (solo permite que se genere un error si no se incluye)
		devuelve nuevo jQuery.fn.init(selector, contexto);
	};

jQuery.fn = jQuery.prototype = {

	// La versión actual de jQuery que se está utilizando
	jquery: versión,

	constructor: jQuery,

	// La longitud predeterminada de un objeto jQuery es 0
	longitud: 0,

	toArray: función() {
		devolver slice.call( esto );
	},

	// Obtener el elemento N en el conjunto de elementos coincidentes O
	// Obtener todo el conjunto de elementos coincidentes como una matriz limpia
	obtener: función(num) {

		// Devuelve todos los elementos en una matriz limpia
		si ( num == nulo ) {
			devolver slice.call( esto );
		}

		// Devuelve solo un elemento del conjunto
		devuelve num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Tome una matriz de elementos y empújela hacia la pila
	// (devolviendo el nuevo conjunto de elementos coincidentes)
	pushStack: función( elementos ) {

		// Construir un nuevo conjunto de elementos coincidentes con jQuery
		var ret = jQuery.merge( this.constructor(), elems );

		// Agrega el objeto antiguo a la pila (como referencia)
		ret.prevObject = esto;

		// Devuelve el conjunto de elementos recién formado
		volver ret;
	},

	// Ejecutar una devolución de llamada para cada elemento en el conjunto coincidente.
	cada: función( devolución de llamada ) {
		devuelve jQuery.each(this, callback);
	},

	mapa: función( devolución de llamada ) {
		devuelve esto.pushStack( jQuery.map( esto, función( elem, i ) {
			devolver llamada de retorno.call( elem, i, elem );
		} ) );
	},

	rebanada: función() {
		devuelve esto.pushStack( slice.apply( this, argumentos ) );
	},

	primero:función() {
		devuelve esto.eq( 0 );
	},

	último: función() {
		devuelve esto.eq(-1);
	},

	incluso: función() {
		devuelve esto.pushStack( jQuery.grep( esto, función( _elem, i ) {
			devuelve ( i + 1 ) % 2;
		} ) );
	},

	impar: función() {
		devuelve esto.pushStack( jQuery.grep( esto, función( _elem, i ) {
			devuelve i % 2;
		} ) );
	},

	eq: función( i ) {
		var len = esta.longitud,
			j = +i + ( i < 0 ? len : 0 );
		devuelve esto.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	fin: función() {
		devuelve este.prevObject || este.constructor();
	},

	//Solo para uso interno.
	// Se comporta como un método de Array, no como un método jQuery.
	empujar: empujar,
	ordenar: arr.ordenar,
	empalme: arr.empalme
};

jQuery.extend = jQuery.fn.extend = función() {
	opciones var, nombre, src, copiar, copyIsArray, clonar,
		objetivo = argumentos[ 0 ] || {},
		yo = 1,
		longitud = argumentos.longitud,
		profundo = falso;

	// Manejar una situación de copia profunda
	si ( tipo de objetivo === "booleano" ) {
		profundo = objetivo;

		// Omite el booleano y el objetivo
		objetivo = argumentos[ i ] || {};
		yo++;
	}

	// Manejar caso cuando el objetivo es una cadena o algo así (posible en copia profunda)
	si ( tipo de objetivo !== "objeto" && !isFunction( objetivo ) ) {
		objetivo = {};
	}

	// Extiende jQuery si solo se pasa un argumento
	si ( i === longitud ) {
		objetivo = esto;
		i--;
	}

	para ( ; i < longitud; i++ ) {

		// Tratar solo con valores no nulos/indefinidos
		si ( ( opciones = argumentos[ i ] ) != null ) {

			//Ampliar el objeto base
			para (nombre en opciones) {
				copiar = opciones[ nombre ];

				// Prevenir la contaminación del prototipo de objeto
				// Evitar bucles interminables
				si ( nombre === "__proto__" || destino === copia ) {
					continuar;
				}

				// Recurra si estamos fusionando objetos simples o matrices
				si ( profundo && copia && ( jQuery.isPlainObject( copia ) ||
					( copyIsArray = Array.isArray( copia ) ) ) ) {
					src = target[ nombre ];

					// Asegúrese de que el tipo sea adecuado para el valor de origen
					si ( copyIsArray && !Array.isArray( src ) ) {
						clon = [];
					} de lo contrario si ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clon = {};
					} demás {
						clon = src;
					}
					copyIsArray = falso;

					// Nunca muevas los objetos originales, clónalos
					target[ nombre ] = jQuery.extend( deep, clone, copy );

				// No introduzca valores indefinidos
				} de lo contrario si ( copia !== indefinido ) {
					objetivo[ nombre ] = copia;
				}
			}
		}
	}

	// Devuelve el objeto modificado
	objetivo de retorno;
};

jQuery.extend( {

	// Único para cada copia de jQuery en la página
	expando: "jQuery" + ( versión + Math.random() ).replace( /\D/g, "" ),

	// Supongamos que jQuery está listo sin el módulo listo
	isReady: verdadero,

	error: función(msg) {
		lanzar nuevo Error(msg);
	},

	noop: función() {},

	isPlainObject: función(obj) {
		var proto, Ctor;

		// Detectar negativos obvios
		// Utilice toString en lugar de jQuery.type para capturar objetos host
		si ( !obj || toString.call( obj ) !== "[objeto Objeto]" ) {
			devuelve falso;
		}

		proto = obtenerProto(obj);

		// Los objetos sin prototipo (por ejemplo, `Object.create( null )`) son simples
		si ( !proto ) {
			devuelve verdadero;
		}

		// Los objetos con prototipo son simples si fueron construidos por una función de objeto global
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		devuelve tipo de Ctor === "función" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: función(obj) {
		var nombre;

		para (nombre en obj) {
			devuelve falso;
		}
		devuelve verdadero;
	},

	// Evalúa un script en un contexto proporcionado; vuelve al contexto global
	// si no se especifica.
	globalEval: función( código, opciones, doc ) {
		DOMEval( código, { nonce: opciones && opciones.nonce }, doc );
	},

	cada: función(obj, devolución de llamada) {
		var longitud, i = 0;

		si ( esArrayLike ( obj ) ) {
			longitud = obj.longitud;
			para ( ; i < longitud; i++ ) {
				si ( devolución de llamada.llamada( obj[ i ], i, obj[ i ] ) === falso ) {
					romper;
				}
			}
		} demás {
			para ( yo en obj ) {
				si ( devolución de llamada.llamada( obj[ i ], i, obj[ i ] ) === falso ) {
					romper;
				}
			}
		}

		devuelve obj;
	},


	// Recuperar el valor de texto de una matriz de nodos DOM
	texto: función( elem ) {
		nodo var,
			ret = "",
			yo = 0,
			tipoNodo = elem.tipoNodo;

		si ( !tipoNodo) {

			// Si no hay ningún tipo de nodo, se espera que sea una matriz
			mientras ( ( nodo = elem[ i++ ] ) ) {

				// No atravesar nodos de comentarios
				ret += jQuery.text( nodo );
			}
		}
		si ( tipoNodo === 1 || tipoNodo === 11 ) {
			devuelve elem.textContent;
		}
		si ( tipoNodo === 9 ) {
			devuelve elem.documentElement.textContent;
		}
		si ( tipoNodo === 3 || tipoNodo === 4 ) {
			devuelve elem.nodeValue;
		}

		// No incluya nodos de instrucciones de procesamiento ni comentarios

		volver ret;
	},

	// los resultados son solo para uso interno
	makeArray: función( arr, resultados ) {
		var ret = resultados || [];

		si ( arr != null ) {
			si (isArrayLike( Objeto( arr ) ) ) {
				jQuery.merge(ret,
					tipo de arr === "cadena" ?
						[arr]: arr
				);
			} demás {
				push.call( ret, arr );
			}
		}

		volver ret;
	},

	inArray: función( elem, arr, i ) {
		devolver arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: función( elemento ) {
		var espacio de nombres = elem && elem.URI del espacio de nombres,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Suponga que existe HTML cuando documentElement aún no existe, como dentro de
		//fragmentos de documento.
		devuelve !rhtmlSuffix.test( espacio de nombres || docElem && docElem.nodeName || "HTML" );
	},

	// Compatibilidad: solo Android <=4.0, solo PhantomJS 1
	// push.apply(_, arraylike) lanza una excepción en el antiguo WebKit
	fusionar: función(primero, segundo) {
		var len = +segundo.longitud,
			j = 0,
			i = primera.longitud;

		para ( ; j < len; j++ ) {
			primero[ i++ ] = segundo[ j ];
		}

		primero.longitud = i;

		regresa primero;
	},

	grep: función( elems, devolución de llamada, invertir ) {
		var devolución de llamada inversa,
			coincidencias = [],
			yo = 0,
			longitud = elems.length,
			callbackExpect = !invertir;

		// Recorre la matriz, guardando solo los elementos
		// que pasan la función validadora
		para ( ; i < longitud; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			si ( callbackInverse !== callbackExpect ) {
				coincidencias.push( elems[ i ] );
			}
		}

		partidos de vuelta;
	},

	// arg es solo para uso interno
	mapa: función( elementos, devolución de llamada, arg ) {
		var longitud, valor,
			yo = 0,
			ret = [];

		// Recorrer la matriz, traduciendo cada uno de los elementos a sus nuevos valores
		si ( isArrayLike ( elementos ) ) {
			longitud = elems.length;
			para ( ; i < longitud; i++ ) {
				valor = devolución de llamada ( elems [ i ], i, arg );

				si ( valor != nulo ) {
					ret.push( valor );
				}
			}

		//Recorre cada tecla del objeto,
		} demás {
			para ( i en elementos ) {
				valor = devolución de llamada ( elems [ i ], i, arg );

				si ( valor != nulo ) {
					ret.push( valor );
				}
			}
		}

		// Aplanar cualquier matriz anidada
		retorna plano( ret );
	},

	// Un contador GUID global para objetos
	guía: 1,

	// jQuery.support no se usa en Core pero otros proyectos adjuntan su
	// propiedades para que exista.
	apoyo: apoyo
} );

si ( tipo de Símbolo === "función" ) {
	jQuery.fn[ Símbolo.iterador ] = arr[ Símbolo.iterador ];
}

// Rellenar el mapa class2type
jQuery.each( "Booleano Número Cadena Función Matriz Fecha RegExp Objeto Error Símbolo".split( " " ),
	función( _i, nombre ) {
		class2type[ "[objeto " + nombre + "]" ] = nombre.toLowerCase();
	} );

función isArrayLike(obj) {

	// Soporte: solo iOS 8.2 real (no reproducible en simulador)
	// Se utiliza la comprobación `in` para evitar errores JIT (gh-2145)
	// hasOwn no se utiliza aquí debido a falsos negativos
	// respecto a la longitud de la lista de nodos en IE
	var length = !!obj && "length" en obj && obj.length,
		tipo = toType(obj);

	si ( esFuncion( obj ) || esVentana( obj ) ) {
		devuelve falso;
	}

	tipo de retorno === "matriz" || longitud === 0 ||
		tipo de longitud === "número" && longitud > 0 && ( longitud - 1 ) en obj;
}


función nodeName( elem, nombre ) {

	devuelve elem.nodeName && elem.nodeName.toLowerCase() === nombre.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var empalme = arr.empalme;


var espacios en blanco = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = nueva expresión regular(
	"^" + espacio en blanco + "+|((?:^|[^\\\\])(?:\\\\.)*)" + espacio en blanco + "+$",
	"gramo"
);




// Nota: un elemento no se contiene a sí mismo
jQuery.contains = función( a, b ) {
	var bup = b && b.parentNode;

	devolver un === bup || !!( bup && bup.tipodenodo === 1 && (

		// Compatibilidad: IE 9 - 11+
		// IE no tiene `contiene` en SVG.
		a.contiene ?
			a.contiene( bup ):
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// Serialización de cadenas/identificadores CSS
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

función fcssescape( ch, asCodePoint ) {
	si ( comoCodePoint ) {

		// U+0000 NULL se convierte en U+FFFD CARÁCTER DE REEMPLAZO
		si ( ch === "\0" ) {
			devuelve "\uFFFD";
		}

		// Los caracteres de control y (dependiendo de la posición) los números se escapan como puntos de código
		devuelve ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Otros caracteres ASCII potencialmente especiales se escapan mediante una barra invertida
	devuelve "\\" + ch;
}

jQuery.escapeSelector = función(sel) {
	retorna (sel + "").replace(rcssescape, fcssescape);
};




var preferenceDoc = documento,
	pushNative = empujar;

( función() {

yo soy,
	Expr,
	contexto más externo,
	ordenarEntrada,
	tieneDuplicado,
	push = pushNativo,

	//Variables de documentos locales
	documento,
	elementodocumento,
	documentoIsHTML,
	rbuggyQSA,
	partidos,

	// Datos específicos de la instancia
	expando = jQuery.expando,
	ejecuciones de directorio = 0,
	hecho = 0,
	claseCache = crearCache(),
	tokenCache = crearCache(),
	compiladorCache = crearCache(),
	no nativoSelectorCache = createCache(),
	sortOrder = función( a, b ) {
		si ( a === b ) {
			hasDuplicate = verdadero;
		}
		devuelve 0;
	},

	booleanos = "marcado|seleccionado|async|autofocus|autoplay|controles|aplazar|deshabilitado|oculto|ismap|" +
		"bucle|múltiple|abierto|solo lectura|obligatorio|con alcance",

	// Expresiones regulares

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identificador = "(?:\\\\[\\da-fA-F]{1,6}" + espacio en blanco +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Selectores de atributos: https://www.w3.org/TR/selectors/#attribute-selectors
	atributos = "\\[" + espacio en blanco + "*(" + identificador + ")(?:" + espacio en blanco +

		// Operador (captura 2)
		"*([*^$|!~]?=)" + espacio en blanco +

		// "Los valores de los atributos deben ser identificadores CSS [captura 5] o cadenas [captura 3 o captura 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identificador + "))|)" +
		espacio en blanco + "*\\]",

	pseudos = ":(" + identificador + ")(?:\\((" +

		// Para reducir la cantidad de selectores que necesitan tokenizarse en el prefiltro, prefiera los argumentos:
		// 1. citado (captura 3; captura 4 o captura 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*) \")|" +

		// 2. simple (captura 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + atributos + ")*)|" +

		// 3. cualquier otra cosa (captura 2)
		".*" +
		")\\)|)",

	// Espacios iniciales y finales sin escape, capturando algunos caracteres que no son espacios en blanco que preceden a estos últimos
	rwhitespace = new RegExp( espacio en blanco + "+", "g"),

	rcomma = new RegExp( "^" + espacio en blanco + "*," + espacio en blanco + "*" ),
	rleadingCombinator = new RegExp( "^" + espacios en blanco + "*([>+~]|" + espacios en blanco + ")" +
		espacio en blanco + "*"),
	rdescend = new RegExp( espacio en blanco + "|>" ),

	rpseudo = nueva RegExp( pseudos ),
	ridentificador = nueva expresión regular ( "^" + identificador + "$" ),

	expresión de coincidencia = {
		ID: nueva RegExp( "^#(" + identificador + ")" ),
		CLASE: nueva RegExp( "^\\.(" + identificador + ")" ),
		ETIQUETA: nueva RegExp( "^(" + identificador + "|[*])" ),
		ATTR: nueva RegExp( "^" + atributos ),
		PSEUDO: nueva expresión regular ( "^" + pseudos ),
		NIÑO: nueva RegExp(
			"^:(solo|primero|último|nésimo|nésimo-último)-(hijo|de-tipo)(?:\\(" +
				espacio en blanco + "*(par|impar|(([+-]|)(\\d*)n|)" + espacio en blanco + "*(?:([+-]|)" +
				espacio en blanco + "*(\\d+)|))" + espacio en blanco + "*\\)|)", "i" ),
		bool: nueva RegExp( "^(?:" + booleanos + ")$", "i" ),

		// Para usar en bibliotecas que implementan .is()
		// Usamos esto para la coincidencia de POS en `select`
		needsContext: nueva RegExp( "^" + espacio en blanco +
			"*[>+~]|:(par|impar|eq|gt|lt|nésimo|primero|último)(?:\\(" + espacio en blanco +
			"*((?:-\\d)?\\d*)" + espacio en blanco + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:entrada|seleccionar|área de texto|botón)$/i,
	encabezado = /^h\d$/i,

	// Selectores de ID, TAG o CLASE fácilmente analizables y recuperables
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rhermano = /[+~]/,

	// Escapes CSS
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + espacio en blanco +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = función( escape, no hexadecimal ) {
		var alto = "0x" + escape.slice( 1 ) - 0x10000;

		si ( no hexadecimal ) {

			// Quitar el prefijo de barra invertida de una secuencia de escape no hexadecimal
			devuelve noHex;
		}

		// Reemplazar una secuencia de escape hexadecimal con el punto de código Unicode codificado
		// Soporte: IE <=11+
		// Para valores fuera del Plano Multilingüe Básico (BMP), construya manualmente un
		// pareja sustituta
		¿devuelve alto < 0?
			Cadena.fromCharCode(alto + 0x10000):
			Cadena.fromCharCode( alto >> 10 | 0xD800, alto y 0x3FF | 0xDC00 );
	},

	// Se utiliza para iframes; consulte `setDocument`.
	// Compatibilidad: IE 9 - 11+, Edge 12 - 18+
	// Eliminar el contenedor de funciones provoca un "Permiso denegado"
	// error en IE/Edge.
	unloadHandler = función() {
		establecerDocumento();
	},

	inDisabledFieldset = agregarCombinador(
		función( elem ) {
			devolver elem.disabled === verdadero && nodeName( elem, "conjunto de campos" );
		},
		{ dir: "parentNode", siguiente: "leyenda" }
	);

// Compatibilidad: solo IE <=9
// Acceder a document.activeElement puede generar errores inesperados
// https://bugs.jquery.com/ticket/13393
función safeActiveElement() {
	intentar {
		devolver documento.activeElement;
	} captura ( err ) { }
}

// Optimizar para push.apply( _, NodeList )
intentar {
	empujar.aplicar(
		( arr = slice.call(preferredDoc.childNodes ) ),
		nodos secundarios de DocPreferred
	);

	// Compatibilidad: Android <=4.0
	// Detectar errores silenciosos en push.apply
	// eslint-disable-next-line no-expresiones-sin-uso
	arr[preferredDoc.childNodes.length].nodeType;
} captura ( e ) {
	empujar = {
		aplicar: función( objetivo, els ) {
			pushNative.apply( objetivo, slice.call( els ) );
		},
		llamar: función(objetivo) {
			pushNative.apply( objetivo, slice.call( argumentos, 1 ) );
		}
	};
}

función find(selector, contexto, resultados, semilla) {
	var m, i, elem, nid, coincidencia, grupos, newSelector,
		newContext = contexto && contexto.ownerDocument,

		// El tipo de nodo predeterminado es 9, ya que el contexto predeterminado es el documento
		nodeType = contexto ? contexto.nodeType : 9;

	resultados = resultados || [];

	// Regreso anticipado de llamadas con selector o contexto no válido
	si ( tipo de selector !== "cadena" || !selector ||
		tipoNodo !== 1 && tipoNodo !== 9 && tipoNodo !== 11 ) {

		devolver resultados;
	}

	// Intenta abreviar las operaciones de búsqueda (en lugar de los filtros) en documentos HTML
	si ( !semilla ) {
		setDocument( contexto );
		contexto = contexto || documento;

		si (documentoIsHTML) {

			// Si el selector es suficientemente simple, intente usar un método DOM "get*By*"
			// (excepto el contexto DocumentFragment, donde los métodos no existen)
			si ( tipoNodo !== 11 && ( coincidencia = rquickExpr.exec( selector ) ) ) {

				// Selector de identificación
				si ( ( m = coincidencia[ 1 ] ) ) {

					// Contexto del documento
					si ( tipoNodo === 9 ) {
						si ( ( elem = contexto.getElementById( m ) ) ) {

							// Compatibilidad: solo IE 9
							// getElementById puede hacer coincidir elementos por nombre en lugar de ID
							si ( elem.id === m ) {
								push.call( resultados, elem );
								devolver resultados;
							}
						} demás {
							devolver resultados;
						}

					// Contexto del elemento
					} demás {

						// Compatibilidad: solo IE 9
						// getElementById puede hacer coincidir elementos por nombre en lugar de ID
						si ( nuevoContexto && ( elem = nuevoContexto.getElementById( m ) ) &&
							find.contains( contexto, elemento ) &&
							elemento.id === m ) {

							push.call( resultados, elem );
							devolver resultados;
						}
					}

				// Selector de tipo
				} de lo contrario si ( coincide[ 2 ] ) {
					push.apply( resultados, context.getElementsByTagName( selector ) );
					devolver resultados;

				// Selector de clase
				} de lo contrario si ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( resultados, contexto.getElementsByClassName( m ) );
					devolver resultados;
				}
			}

			// Aprovecha querySelectorAll
			si ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test(selector ) ) ) {

				nuevoSelector = selector;
				newContext = contexto;

				// qSA considera elementos fuera de una raíz de alcance al evaluar elementos secundarios o
				// combinadores descendientes, que no es lo que queremos.
				// En tales casos, solucionamos el problema prefijando cada selector en el
				// lista con un selector de ID que hace referencia al contexto del alcance.
				// La técnica también debe utilizarse cuando se utiliza un combinador líder.
				// como tales, los selectores no son reconocidos por querySelectorAll.
				// Gracias a Andrew Dupont por esta técnica.
				si (nodoType === 1 &&
					( rdescend.test(selector ) || rleadingCombinator.test(selector ) ) ) {

					// Ampliar el contexto para los selectores hermanos
					nuevoContexto = rsibling.test( selector ) && testContext( contexto.parentNode ) ||
						contexto;

					// Podemos usar :scope en lugar del truco ID si el navegador
					// lo admite & si no estamos cambiando el contexto.
					// Compatibilidad: IE 11+, Edge 17 - 18+
					// IE/Edge a veces arroja un error de "Permiso denegado" cuando
					// comparación estricta de dos documentos; las comparaciones superficiales funcionan.
					// eslint-deshabilitar-siguiente-linea eqeqeq
					si ( nuevoContexto != contexto || !soporte.ámbito ) {

						// Captura el ID de contexto y configurándolo primero si es necesario
						si ( ( nid = contexto.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} demás {
							contexto.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefija cada selector en la lista
					grupos = tokenizar( selector );
					i = grupos.longitud;
					mientras ( yo-- ) {
						grupos[ i ] = ( nid ? "#" + nid : ":ámbito" ) + " " +
							toSelector( grupos[ i ] );
					}
					newSelector = grupos.join( "," );
				}

				intentar {
					push.apply( resultados,
						nuevoContext.querySelectorAll( nuevoSelector )
					);
					devolver resultados;
				} captura(qsaError) {
					no nativoSelectorCache( selector, verdadero );
				} finalmente {
					si ( nid === expando ) {
						contexto.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// Todos los demás
	devolver select( selector.replace( rtrimCSS, "$1" ), contexto, resultados, semilla );
}

/**
 * Crear cachés de clave-valor de tamaño limitado
 * @returns {function(string, object)} Devuelve los datos del objeto después de almacenarlos en sí mismo con
 * nombre de la propiedad la cadena (con sufijo de espacio) y (si el caché es más grande que Expr.cacheLength)
 * eliminar la entrada más antigua
 */
función createCache() {
	var claves = [];

	función caché( clave, valor ) {

		// Utilice (tecla + " ") para evitar colisiones con las propiedades del prototipo nativo
		// (ver https://github.com/jquery/sizzle/issues/157)
		si ( teclas.push( tecla + " " ) > Expr.cacheLength ) {

			// Conservar únicamente las entradas más recientes
			eliminar caché[keys.shift()];
		}
		devolver ( cache[ clave + " " ] = valor );
	}
	devolver caché;
}

/**
 * Marcar una función para uso especial mediante el módulo selector jQuery
 * @param {Función} fn La función a marcar
 */
función markFunction( fn ) {
	fn[expando] = verdadero;
	devolver fn;
}

/**
 * Soporte para pruebas utilizando un elemento
 * @param {Función} fn Pasa el elemento creado y devuelve un resultado booleano
 */
función assert( fn ) {
	var el = document.createElement( "conjunto de campos" );

	intentar {
		devuelve !!fn( el );
	} captura ( e ) {
		devuelve falso;
	} finalmente {

		// Eliminar de su padre por defecto
		si ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// liberar memoria en IE
		el = nulo;
	}
}

/**
 * Devuelve una función para usar en pseudos para tipos de entrada
 * @param {Cadena} tipo
 */
función createInputPseudo( tipo ) {
	función de retorno ( elem ) {
		devuelve nodeName( elem, "input" ) && elem.type === tipo;
	};
}

/**
 * Devuelve una función para usar en pseudos para botones
 * @param {Cadena} tipo
 */
función createButtonPseudo( tipo ) {
	función de retorno ( elem ) {
		devolver ( nombreNodo( elem, "entrada" ) || nombreNodo( elem, "botón" ) ) &&
			elem.type === tipo;
	};
}

/**
 * Devuelve una función para usar en pseudos para :enabled/:disabled
 * @param {Boolean} deshabilitado verdadero para :deshabilitado; falso para :habilitado
 */
función createDisabledPseudo( deshabilitado ) {

	// Falsos positivos conocidos: deshabilitado: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	función de retorno ( elem ) {

		// Solo ciertos elementos pueden coincidir con :enabled o :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		si ( "formulario" en elem ) {

			// Verificar la discapacidad heredada en elementos no discapacitados relevantes:
			// * elementos asociados al formulario enumerados en un conjunto de campos deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opción en un optgroup deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos estos elementos tienen una propiedad "formularia".
			si ( elem.parentNode && elem.disabled === falso ) {

				// Los elementos de opción difieren a un grupo de opciones padre si está presente
				si ( "etiqueta" en elem ) {
					si ( "etiqueta" en elem.parentNode ) {
						devolver elem.parentNode.disabled === deshabilitado;
					} demás {
						devolver elem.disabled === deshabilitado;
					}
				}

				// Compatibilidad: IE 6 - 11+
				// Utilice la propiedad de acceso directo isDisabled para comprobar si hay ancestros del conjunto de campos deshabilitados
				devolver elem.isDisabled === deshabilitado ||

					// Donde no hay isDisabled, verificar manualmente
					elem.isDisabled !== !deshabilitado &&
						inDisabledFieldset( elem ) === deshabilitado;
			}

			devolver elem.disabled === deshabilitado;

		// Intente descartar los elementos que no se pueden deshabilitar antes de confiar en la propiedad deshabilitada.
		// Algunas víctimas quedan atrapadas en nuestra red (etiqueta, leyenda, menú, pista), pero no debería
		// incluso existir en ellos, y mucho menos tener un valor booleano.
		} de lo contrario si ( "etiqueta" en elem ) {
			devolver elem.disabled === deshabilitado;
		}

		// Los elementos restantes no están habilitados ni deshabilitados
		devuelve falso;
	};
}

/**
 * Devuelve una función para usar en pseudos para posicionales
 * @param {Función} fn
 */
función createPositionalPseudo( fn ) {
	devolver markFunction(función(argumento) {
		argumento = +argumento;
		devolver markFunction(función(semilla, coincidencias) {
			variedad j,
				matchIndexes = fn( [], semilla.longitud, argumento ),
				i = matchIndexes.longitud;

			// Coincide con los elementos encontrados en los índices especificados
			mientras ( yo-- ) {
				si ( semilla[ ( j = matchIndexes[ i ] ) ] ) {
					semilla[ j ] = !( coincidencias[ j ] = semilla[ j ] );
				}
			}
		} );
	} );
}

/**
 * Comprueba la validez de un nodo como contexto de selector de jQuery
 * @param {Elemento|Objeto=} contexto
 * @returns {Elemento|Objeto|Booleano} El nodo de entrada si es aceptable, de lo contrario un valor falso
 */
función testContext( contexto ) {
	devuelve contexto && tipo de contexto.getElementsByTagName !== "indefinido" && contexto;
}

/**
 * Establece variables relacionadas con el documento una vez en función del documento actual
 * @param {Elemento|Objeto} [nodo] Un elemento u objeto de documento que se utilizará para configurar el documento.
 * @returns {Object} Devuelve el documento actual
 */
función setDocument( nodo ) {
	var subVentana,
		doc = nodo ? nodo.ownerDocument || nodo : preferenceDoc;

	// Regresar antes si el documento no es válido o ya está seleccionado
	// Compatibilidad: IE 11+, Edge 17 - 18+
	// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-deshabilitar-siguiente-linea eqeqeq
	si ( doc == documento || doc.nodeType !== 9 || !doc.documentElement ) {
		documento de devolución;
	}

	// Actualizar variables globales
	documento = doc;
	documentElement = documento.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( documento );

	// Compatibilidad: solo iOS 7, IE 9 - 11+
	// Los navegadores más antiguos no admitían «coincidencias» sin prefijo.
	coincidencias = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Compatibilidad: IE 9 - 11+, Edge 12 - 18+
	// Acceder a documentos iframe después de la descarga arroja errores de "permiso denegado"
	// (ver trac-13936).
	// Limite la solución a IE y Edge Legacy; a pesar de que Edge 15+ implementa `matches`,
	// todas las versiones de IE 9+ y Edge Legacy también implementan `msMatchesSelector`.
	si (documentElement.msMatchesSelector &&

		// Compatibilidad: IE 11+, Edge 17 - 18+
		// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
		// dos documentos; las comparaciones superficiales funcionan.
		// eslint-deshabilitar-siguiente-linea eqeqeq
		PreferredDoc != documento &&
		( subVentana = documento.defaultView ) && subVentana.top !== subVentana ) {

		// Compatibilidad: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "descargar", unloadHandler );
	}

	// Soporte: IE <10
	// Verificar si getElementById devuelve elementos por nombre
	// Los métodos getElementById dañados no recogen nombres establecidos mediante programación,
	// así que use una prueba indirecta getElementsByName
	soporte.getById = assert( función( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		devuelve !documento.getElementsByName ||
			!documento.getElementsByName(jQuery.expando).length;
	} );

	// Compatibilidad: solo IE 9
	// Verificar si es posible hacer matchesSelector
	// en un nodo desconectado.
	soporte.disconnectedMatch = assert( función( el ) {
		return coincidencias.call( el, "*" );
	} );

	// Compatibilidad: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge no admiten la pseudoclase :scope.
	soporte.ámbito = assert(función() {
		devolver documento.querySelectorAll( ":scope" );
	} );

	// Compatibilidad: solo Chrome 105 - 111, solo Safari 15.4 - 16.3
	// Asegúrese de que el argumento `:has()` se analice sin piedad.
	// Incluimos `*` en la prueba para detectar implementaciones con errores que son
	// indulgente _selectivamente_ (específicamente cuando la lista incluye al menos
	// un selector válido).
	// Tenga en cuenta que tratamos la falta total de soporte para `:has()` como si fuera
	// soporte compatible con especificaciones, lo cual está bien porque el uso de `:has()` en tales
	// Los entornos fallarán en la ruta qSA y recurrirán al recorrido jQuery
	// de todos modos.
	support.cssHas = assert(función() {
		intentar {
			documento.querySelector( ":has(*,:jqfake)" );
			devuelve falso;
		} captura ( e ) {
			devuelve verdadero;
		}
	} );

	// Filtro de ID y búsqueda
	si ( soporte.getById ) {
		Expr.filter.ID = función( id ) {
			var attrId = id.replace( runescape, funescape );
			función de retorno ( elem ) {
				devuelve elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = función( id, contexto ) {
			si ( tipo de contexto.getElementById !== "indefinido" && documentIsHTML ) {
				var elem = contexto.getElementById( id );
				devolver elemento ? [ elemento ] : [];
			}
		};
	} demás {
		Expr.filter.ID = función( id ) {
			var attrId = id.replace( runescape, funescape );
			función de retorno ( elem ) {
				var nodo = typeof elem.getAttributeNode !== "indefinido" &&
					elem.getAttributeNode( "id" );
				nodo de retorno && nodo.valor === attrId;
			};
		};

		// Compatibilidad: solo IE 6 - 7
		// getElementById no es confiable como atajo de búsqueda
		Expr.find.ID = función( id, contexto ) {
			si ( tipo de contexto.getElementById !== "indefinido" && documentIsHTML ) {
				var nodo, i, elementos,
					elem = contexto.getElementById( id );

				si ( elemento ) {

					// Verificar el atributo id
					nodo = elem.getAttributeNode( "id" );
					si ( nodo && nodo.valor === id ) {
						devuelve [ elem ];
					}

					// Recurrir a getElementsByName
					elems = contexto.getElementsByName( id );
					yo = 0;
					mientras ( ( elem = elems[ i++ ] ) ) {
						nodo = elem.getAttributeNode( "id" );
						si ( nodo && nodo.valor === id ) {
							devuelve [ elem ];
						}
					}
				}

				devolver [];
			}
		};
	}

	// Etiqueta
	Expr.find.TAG = función(etiqueta, contexto) {
		si ( tipo de contexto.getElementsByTagName !== "indefinido" ) {
			devolver contexto.getElementsByTagName(etiqueta);

		// Los nodos DocumentFragment no tienen gEBTN
		} demás {
			devolver contexto.querySelectorAll(etiqueta);
		}
	};

	// Clase
	Expr.find.CLASS = función(nombreClase, contexto) {
		si ( tipo de contexto.getElementsByClassName !== "indefinido" && documentIsHTML ) {
			devolver contexto.getElementsByClassName( className );
		}
	};

	/* QSA/selector de coincidencias
	-------------------------------------------------- -------------------- */

	// Compatibilidad con QSA y matchesSelector

	rbuggyQSA = [];

	// Construir expresiones regulares QSA
	// Estrategia Regex adoptada de Diego Perini
	afirmar(función(el) {

		var entrada;

		documentElement.appendChild(el).innerHTML =
			"<a id='" + expando + "' href='' deshabilitado='deshabilitado'></a>" +
			"<seleccionar id='" + expando + "-\r\\' deshabilitado='deshabilitado'>" +
			"<opción seleccionada=''></opción></seleccionar>";

		// Compatibilidad: solo iOS <=7 - 8
		// Los atributos booleanos y el "valor" no se tratan correctamente en algunos documentos XML
		si ( !el.querySelectorAll( "[seleccionado]" ).length ) {
			rbuggyQSA.push( "\\[" + espacios en blanco + "*(?:valor|" + booleanos + ")" );
		}

		// Compatibilidad: solo iOS <=7 - 8
		si ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Compatibilidad: solo iOS 8
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// El selector combinador hermano `selector#id` en la página falla
		si ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Compatibilidad: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// En algunos tipos de documentos, estos selectores no funcionarían de forma nativa.
		// Probablemente esto esté bien, pero por compatibilidad con versiones anteriores queremos mantenerlo.
		// manejándolos a través del recorrido jQuery en jQuery 3.x.
		si ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":marcado" );
		}

		// Soporte: Aplicaciones nativas de Windows 8
		// Los atributos de tipo y nombre están restringidos durante la asignación de .innerHTML
		entrada = document.createElement( "entrada" );
		entrada.setAttribute( "tipo", "oculto" );
		el.appendChild( entrada ).setAttribute( "nombre", "D" );

		// Compatibilidad: IE 9 - 11+
		// El selector :disabled de IE no selecciona los elementos secundarios de los conjuntos de campos deshabilitados
		// Compatibilidad: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// En algunos tipos de documentos, estos selectores no funcionarían de forma nativa.
		// Probablemente esto esté bien, pero por compatibilidad con versiones anteriores queremos mantenerlo.
		// manejándolos a través del recorrido jQuery en jQuery 3.x.
		documentElement.appendChild( el ).disabled = verdadero;
		si ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":habilitado", ":deshabilitado" );
		}

		// Compatibilidad: IE 11+, Edge 15 - 18+
		// IE 11/Edge no encuentra elementos en una consulta `[name='']` en algunos casos.
		// Agregar un atributo temporal al documento antes de que funcione la selección
		// en torno al tema.
		// Curiosamente, IE 10 y versiones anteriores no parecen tener el problema.
		entrada = document.createElement( "entrada" );
		entrada.setAttribute( "nombre", "" );
		el.appendChild( entrada );
		si ( !el.querySelectorAll( "[nombre='']" ).length ) {
			rbuggyQSA.push( "\\[" + espacio en blanco + "*nombre" + espacio en blanco + "*=" +
				espacio en blanco + "*(?:''|\"\")" );
		}
	} );

	si ( !support.cssHas ) {

		// Compatibilidad: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Nuestro mecanismo habitual `try-catch` no detecta archivos no compatibles de forma nativa.
		// pseudo-clases dentro de `:has()` (como `:has(:contains("Foo"))`)
		// en navegadores que analizan el argumento `:has()` como una lista de selectores indulgente.
		// https://drafts.csswg.org/selectors/#relational ahora requiere el argumento
		// debe analizarse sin piedad, pero los navegadores aún no se han ajustado por completo.
		rbuggyQSA.push( ":tiene" );
	}

	rbuggyQSA = rbuggyQSA.length && nueva expresión regular (rbuggyQSA.join( "|" ) );

	/* Ordenamiento
	-------------------------------------------------- -------------------- */

	// Ordenación del documento
	sortOrder = función( a, b ) {

		// Marcar para eliminar duplicados
		si ( a === b ) {
			hasDuplicate = verdadero;
			devuelve 0;
		}

		// Ordenar según la existencia del método si solo una entrada tiene compareDocumentPosition
		var comparar = !a.compareDocumentPosition - !b.compareDocumentPosition;
		si (comparar) {
			devolver comparar;
		}

		// Calcular la posición si ambas entradas pertenecen al mismo documento
		// Compatibilidad: IE 11+, Edge 17 - 18+
		// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
		// dos documentos; las comparaciones superficiales funcionan.
		// eslint-deshabilitar-siguiente-linea eqeqeq
		comparar = ( a.documentoPropietario || a ) == ( b.documentoPropietario || b ) ?
			a.compareDocumentPosition( b ):

			// De lo contrario sabemos que están desconectados.
			1;

		// Nodos desconectados
		si (comparar & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === comparar ) ) {

			// Elija el primer elemento que esté relacionado con nuestro documento preferido
			// Compatibilidad: IE 11+, Edge 17 - 18+
			// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
			// dos documentos; las comparaciones superficiales funcionan.
			// eslint-deshabilitar-siguiente-linea eqeqeq
			si ( a === documento || a.ownerDocument == preferenceDoc &&
				buscar.contiene(preferredDoc, a) ) {
				devuelve -1;
			}

			// Compatibilidad: IE 11+, Edge 17 - 18+
			// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
			// dos documentos; las comparaciones superficiales funcionan.
			// eslint-deshabilitar-siguiente-linea eqeqeq
			si ( b === documento || b.ownerDocument == preferenceDoc &&
				buscar.contiene(preferredDoc, b ) ) {
				devuelve 1;
			}

			// Mantener el orden original
			¿devolver sortInput?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		devolver comparar & 4 ? -1 : 1;
	};

	documento de devolución;
}

find.matches = función( expr, elementos ) {
	devolver find( expr, null, null, elementos );
};

buscar.matchesSelector = función( elem, expr ) {
	setDocument( elemento );

	si (documentoIsHTML &&
		!nonnativeSelectorCache[expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.prueba( expr ) ) ) {

		intentar {
			var ret = coincidencias.call( elem, expr );

			// matchesSelector de IE 9 devuelve falso en nodos desconectados
			si ( ret || soporte.desconectadoMatch ||

					// Además, se dice que los nodos desconectados están en un documento.
					// fragmento en IE 9
					elem.documento && elem.documento.tiponodo !== 11 ) {
				volver ret;
			}
		} captura ( e ) {
			no nativoSelectorCache( expr, verdadero );
		}
	}

	devolver find( expr, documento, null, [ elem ] ).length > 0;
};

find.contains = función( contexto, elemento ) {

	// Establezca las variables del documento si es necesario
	// Compatibilidad: IE 11+, Edge 17 - 18+
	// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-deshabilitar-siguiente-linea eqeqeq
	si ( ( contexto.propietarioDocumento || contexto ) != documento ) {
		setDocument( contexto );
	}
	devuelve jQuery.contains( contexto, elemento );
};


find.attr = función( elem, nombre ) {

	// Establezca las variables del documento si es necesario
	// Compatibilidad: IE 11+, Edge 17 - 18+
	// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-deshabilitar-siguiente-linea eqeqeq
	si ( ( elem.ownerDocument || elem ) != documento ) {
		setDocument( elemento );
	}

	var fn = Expr.attrHandle[ nombre.toLowerCase() ],

		// No se deje engañar por las propiedades de Object.prototype (ver trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, nombre.toLowerCase() ) ?
			fn( elemento, nombre, !documentIsHTML ):
			indefinido;

	si ( val !== indefinido ) {
		retorna val;
	}

	devuelve elem.getAttribute( nombre );
};

buscar.error = funcion( msg ) {
	generar nuevo Error( "Error de sintaxis, expresión no reconocida: " + msg );
};

/**
 * Clasificación de documentos y eliminación de duplicados.
 * @param {ArrayLike} resultados
 */
jQuery.uniqueSort = función( resultados ) {
	elemento var,
		duplicados = [],
		j = 0,
		yo = 0;

	// A menos que *sabamos* que podemos detectar duplicados, asumimos su presencia
	//
	// Compatibilidad: Android <=4.0+
	// Las pruebas para detectar duplicados son impredecibles, por lo que supongamos que no podemos
	// depende de la detección de duplicados en todos los navegadores sin una clasificación estable.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( resultados, 0 );
	sort.call( resultados, sortOrder );

	si ( tiene Duplicado ) {
		mientras ( ( elem = resultados[ i++ ] ) ) {
			si ( elem === resultados[ i ] ) {
				j = duplicados.push( i );
			}
		}
		mientras ( j-- ) {
			splice.call( resultados, duplicados[ j ], 1 );
		}
	}

	// Borrar la entrada después de ordenar para liberar objetos
	// Ver https://github.com/jquery/sizzle/pull/225
	sortInput = nulo;

	devolver resultados;
};

jQuery.fn.uniqueSort = función() {
	devuelve esto.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
};

Expr = jQuery.expr = {

	// Puede ser ajustado por el usuario
	longitud de caché: 50,

	createPseudo: marcarFunción,

	coincidencia: matchExpr,

	atributoManejador: {},

	encontrar: {},

	relativo: {
		">": { dir: "parentNode", primero: verdadero },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", primero: verdadero },
		"~": { dir: "hermano anterior" }
	},

	prefiltro: {
		ATTR: función(coincidir) {
			coincidencia[ 1 ] = coincidencia[ 1 ].reemplazar( runescape, funescape );

			// Mueva el valor dado a match[3] ya sea entre comillas o sin comillas
			coincidencia[ 3 ] = ( coincidencia[ 3 ] || coincidencia[ 4 ] || coincidencia[ 5 ] || "" )
				.reemplazar( runescape, funescape );

			si ( coincide[ 2 ] === "~=" ) {
				coincidencia[ 3 ] = " " + coincidencia[ 3 ] + " ";
			}

			devuelve match.slice( 0, 4 );
		},

		NIÑO: función(coincidir) {

			/* coincide con matchExpr["CHILD"]
				1 tipo (solo|nésimo|...)
				2 ¿qué (hijo|de-tipo)
				3 argumentos (par|impar|\d*|\d*n([+-]\d+)?|...)
				4 componente xn del argumento xn+y ([+-]?\d*n|)
				5 signo del componente xn
				6 x del componente xn
				7 signo del componente y
				8 y del componente y
			*/
			coincidencia[ 1 ] = coincidencia[ 1 ].toLowerCase();

			si ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requiere argumento
				si ( !match[ 3 ] ) {
					buscar.error( match[ 0 ] );
				}

				// parámetros numéricos x e y para Expr.filter.CHILD
				// recuerda que los valores falso/verdadero se convierten respectivamente a 0/1
				coincidencia[ 4 ] = +( coincidencia[ 4 ] ?
					coincidencia[ 5 ] + ( coincidencia[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "par" || match[ 3 ] === "impar" )
				);
				coincidencia[ 5 ] = +( ( coincidencia[ 7 ] + coincidencia[ 8 ] ) || coincidencia[ 3 ] === "impar" );

			// otros tipos prohíben argumentos
			} de lo contrario si ( coincide[ 3 ] ) {
				buscar.error( match[ 0 ] );
			}

			partido de vuelta;
		},

		PSEUDO: función(coincidir) {
			exceso de var,
				sin comillas = !match[ 6 ] && match[ 2 ];

			si ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				devuelve nulo;
			}

			// Aceptar los argumentos citados tal como están
			si ( coincide[ 3 ] ) {
				coincidencia[ 2 ] = coincidencia[ 4 ] || coincidencia[ 5 ] || "";

			// Eliminar caracteres sobrantes de los argumentos no entrecomillados
			} else if ( sin comillas && rpseudo.test( sin comillas ) &&

				// Obtener el excedente de tokenize (recursivamente)
				(exceso = tokenizar( sin comillas, verdadero ) ) &&

				// avanzar al siguiente paréntesis de cierre
				( exceso = sin comillas.indexOf( ")", sin comillas.longitud - exceso ) - sin comillas.longitud ) ) {

				// el exceso es un índice negativo
				match[ 0 ] = match[ 0 ].slice( 0, exceso );
				match[ 2 ] = sin comillas.slice( 0, exceso );
			}

			// Devuelve solo las capturas necesarias para el método de pseudofiltro (tipo y argumento)
			devuelve match.slice( 0, 3 );
		}
	},

	filtro: {

		ETIQUETA: función(nodeNameSelector) {
			var nombreNodoEsperado = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			devolver nodeNameSelector === "*" ?
				función() {
					devuelve verdadero;
				} :
				función( elem ) {
					devuelve nodeName( elem, expectedNodeName );
				};
		},

		CLASE: función(nombreClase) {
			var patrón = classCache[ className + " " ];

			patrón de retorno ||
				( patrón = nueva expresión regular ( "(^|" + espacio en blanco + ")" + nombreClase +
					"(" + espacio en blanco + "|$)" ) ) &&
				classCache(nombreClase, función(elem) {
					devolver patrón.test(
						tipo de elem.className === "cadena" && elem.className ||
							tipo de elem.getAttribute !== "indefinido" &&
								elem.getAttribute( "clase" ) ||
							""
					);
				} );
		},

		ATTR: función(nombre, operador, comprobar) {
			función de retorno ( elem ) {
				var resultado = find.attr( elem, nombre );

				si ( resultado == nulo ) {
					operador de retorno === "!=";
				}
				si ( !operador ) {
					devuelve verdadero;
				}

				resultado += "";

				si ( operador === "=" ) {
					devolver resultado === comprobar;
				}
				si ( operador === "!=" ) {
					devolver resultado !== comprobar;
				}
				si ( operador === "^=" ) {
					devolver cheque && resultado.indexOf( cheque ) === 0;
				}
				si ( operador === "*=" ) {
					devolver cheque && resultado.indexOf( cheque ) > -1;
				}
				si ( operador === "$=" ) {
					devolver cheque && resultado.slice( -check.length ) === cheque;
				}
				si ( operador === "~=" ) {
					devolver ( " " + resultado.replace( rwhitespace, " " ) + " " )
						.indexOf( comprobar ) > -1;
				}
				si ( operador === "|=" ) {
					devolver resultado === comprobar || resultado.slice( 0, comprobar.length + 1 ) === comprobar + "-";
				}

				devuelve falso;
			};
		},

		NIÑO: función( tipo, qué, _argumento, primero, último ) {
			var simple = tipo.slice( 0, 3 ) !== "nth",
				adelante = tipo.slice( -4 ) !== "último",
				ofType = what === "de tipo";

			devolver primero === 1 y último === 0 ?

				// Atajo para :nth-*(n)
				función( elem ) {
					devuelve !!elem.parentNode;
				} :

				función( elem, _context, xml ) {
					var cache, externalCache, nodo, nodeIndex, inicio,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						padre = elem.parentNode,
						nombre = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = falso;

					si ( padre ) {

						// :(primero|último|único)-(hijo|de-tipo)
						si (simple) {
							mientras ( dir ) {
								nodo = elem;
								mientras ( ( nodo = nodo[ dir ] ) ) {
									si ( deTipo ?
										nodeName(nodo, nombre):
										nodo.nodeType === 1 ) {

										devuelve falso;
									}
								}

								// Invertir dirección para :only-* (si aún no lo hemos hecho)
								inicio = dir = tipo === "solo" && !inicio && "siguienteHermano";
							}
							devuelve verdadero;
						}

						inicio = [ adelante ? padre.primerHijo : padre.últimoHijo ];

						// non-xml :nth-child(...) almacena datos de caché en `parent`
						si ( reenviar && useCache ) {

							// Busca `elem` desde un índice previamente almacenado en caché
							externalCache = padre[expando] || ( padre[expando] = {});
							caché = caché externa[ tipo ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							nodo = nodeIndex && parent.childNodes[ nodeIndex ];

							mientras ( ( nodo = ++nodeIndex && nodo && nodo[ dir ] ||

								// Volver a buscar `elem` desde el principio
								( diff = nodeIndex = 0 ) || inicio.pop() ) ) {

								// Cuando se encuentran, almacena en caché los índices en `parent` y los interrumpe
								si ( nodo.nodeType === 1 && ++diff && nodo === elem ) {
									externalCache[ tipo ] = [ dirruns, nodeIndex, diff ];
									romper;
								}
							}

						} demás {

							// Utilice el índice del elemento previamente almacenado en caché si está disponible
							si ( usarCache ) {
								externalCache = elem[ expando ] || ( elemento[ expando ] = {} );
								caché = caché externa[ tipo ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-hijo(...)
							// o :nth-last-child(...) o :nth(-last)?-of-type(...)
							si ( diff === falso ) {

								// Utilice el mismo bucle que el anterior para buscar `elem` desde el principio
								mientras ( ( nodo = ++nodeIndex && nodo && nodo[ dir ] ||
									( diff = nodeIndex = 0 ) || inicio.pop() ) ) {

									si ( ( deTipo ?
										nodeName(nodo, nombre):
										nodo.nodeType === 1 ) &&
										++diferencia ) {

										// Almacenar en caché el índice de cada elemento encontrado
										si ( usarCache ) {
											externalCache = nodo[expando] ||
												( nodo[ expando ] = {} );
											externalCache[ tipo ] = [ dirruns, diff ];
										}

										si ( nodo === elem ) {
											romper;
										}
									}
								}
							}
						}

						// Incorpore el desplazamiento y luego compárelo con el tamaño del ciclo
						diff -= último;
						devolver diff === primero || ( diff % primero === 0 && diff / primero >= 0 );
					}
				};
		},

		PSEUDO: función( pseudo, argumento ) {

			// Los nombres de pseudoclases no distinguen entre mayúsculas y minúsculas
			// https://www.w3.org/TR/selectores/#pseudo-clases
			// Priorizar por distinción entre mayúsculas y minúsculas en caso de que se agreguen pseudo-personalizados con letras mayúsculas
			// Recuerde que setFilters hereda de pseudos
			argumentos variables,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "pseudo no admitido: " + pseudo );

			// El usuario puede usar createPseudo para indicar que
			//Se necesitan argumentos para crear la función de filtro
			// tal como lo hace jQuery
			si ( fn[expando ] ) {
				devuelve fn( argumento );
			}

			// Pero mantenemos el soporte para firmas antiguas
			si ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argumento ];
				devuelve Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() )?
					markFunction( función( semilla, coincidencias ) {
						var idx,
							coincidente = fn(semilla, argumento),
							i = longitud coincidente;
						mientras ( yo-- ) {
							idx = indexOf.call( semilla, coincidente[ i ] );
							semilla[ idx ] = !( coincidencias[ idx ] = coincidencia[ i ] );
						}
					} ) :
					función( elem ) {
						devuelve fn( elem, 0, args );
					};
			}

			devolver fn;
		}
	},

	pseudos: {

		// Pseudos potencialmente complejos
		no: markFunction(función(selector) {

			// Recortar el selector pasado para compilar
			// para evitar tratar los caracteres iniciales y finales
			// espacios como combinadores
			var entrada = [],
				resultados = [],
				matcher = compilar( selector.replace( rtrimCSS, "$1" ) );

			¿devuelve el comparador[expando]?
				markFunction( función( semilla, coincidencias, _contexto, xml ) {
					elemento var,
						no coincidente = matcher(semilla, nulo, xml, []),
						i = semilla.longitud;

					// Coincide con elementos que no coinciden con `matcher`
					mientras ( yo-- ) {
						si ( ( elem = no coincidente[ i ] ) ) {
							semilla[ i ] = !( coincide[ i ] = elem );
						}
					}
				} ) :
				función( elem, _context, xml ) {
					entrada[ 0 ] = elem;
					matcher( entrada, nulo, xml, resultados );

					// No conserve el elemento
					// (ver https://github.com/jquery/sizzle/issues/299)
					entrada[ 0 ] = nulo;
					devuelve !resultados.pop();
				};
		} ),

		tiene: markFunction(función(selector) {
			función de retorno ( elem ) {
				devolver buscar( selector, elem ).length > 0;
			};
		} ),

		contiene: markFunction( función( texto ) {
			texto = texto.replace( runescape, funescape );
			función de retorno ( elem ) {
				devolver ( elem.textContent || jQuery.text( elem ) ).indexOf( texto ) > -1;
			};
		} ),

		// "Si un elemento está representado por un selector :lang()
		// se basa únicamente en el valor de idioma del elemento
		// siendo igual al identificador C,
		// o comenzando con el identificador C seguido inmediatamente de "-".
		// La coincidencia de C con el valor de idioma del elemento se realiza sin distinguir entre mayúsculas y minúsculas.
		//El identificador C no tiene que ser un nombre de idioma válido."
		// https://www.w3.org/TR/selectores/#lang-pseudo
		idioma: markFunction( función( idioma ) {

			// El valor del idioma debe ser un identificador válido
			si ( !ridentificador.prueba( lang || "" ) ) {
				find.error( "idioma no compatible: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			función de retorno ( elem ) {
				var elemLang;
				hacer {
					si ( ( elemLang = documentIsHTML ?
						elemento.idioma:
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						devolver elemLang === idioma || elemLang.indexOf( idioma + "-" ) === 0;
					}
				} mientras (( elem = elem.parentNode ) && elem.nodeType === 1 );
				devuelve falso;
			};
		} ),

		// Misceláneas
		objetivo: función( elem ) {
			var hash = ventana.ubicacion && ventana.ubicacion.hash;
			devuelve hash && hash.slice( 1 ) === elem.id;
		},

		raíz: función( elem ) {
			devolver elem === documentElement;
		},

		foco: función( elem ) {
			devolver elemento === safeActiveElement() &&
				documento.hasFocus() &&
				!!( elem.tipo || elem.href || ~elem.tabIndex );
		},

		// Propiedades booleanas
		habilitado: createDisabledPseudo(falso),
		deshabilitado: createDisabledPseudo( true ),

		comprobado: función( elem ) {

			// En CSS3, :checked debe devolver tanto los elementos marcados como los seleccionados
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			devolver ( nombreNodo( elem, "entrada") && !!elem.checked) ||
				( nodeName( elem, "opción" ) && !!elem.selected );
		},

		seleccionado: función( elem ) {

			// Soporte: IE <=11+
			// Accediendo a la propiedad selectedIndex
			// obliga al navegador a tratar la opción predeterminada como
			// seleccionado cuando está en un grupo de opciones.
			si ( elem.parentNode ) {
				// eslint-disable-next-line no-expresiones-sin-uso
				elem.parentNode.selectedIndex;
			}

			devuelve elem.selected === verdadero;
		},

		// Contenido
		vacío: función( elem ) {

			// https://www.w3.org/TR/selectores/#empty-pseudo
			// :empty es negado por el elemento (1) o nodos de contenido (texto: 3; cdata: 4; referencia de entidad: 5),
			// pero no por otros (comentario: 8; instrucción de procesamiento: 7; etc.)
			// nodeType < 6 funciona porque los atributos (2) no aparecen como hijos
			para ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				si ( elem.nodeType < 6 ) {
					devuelve falso;
				}
			}
			devuelve verdadero;
		},

		padre: función( elem ) {
			devuelve !Expr.pseudos.empty( elem );
		},

		// Tipos de elementos/entradas
		encabezado: función( elem ) {
			devolver rheader.test( elem.nodeName );
		},

		entrada: función( elem ) {
			retorna rinputs.test( elem.nodeName );
		},

		botón: función( elem ) {
			devuelve nodoName( elem, "entrada" ) && elem.type === "botón" ||
				nodeName( elem, "botón" );
		},

		texto: función( elem ) {
			var atributo;
			devuelve nodeName( elem, "entrada") && elem.type === "texto" &&

				// Soporte: solo IE <10
				// Aparecen nuevos valores de atributos HTML5 (por ejemplo, "búsqueda")
				// con elem.type === "texto"
				( ( attr = elem.getAttribute( "tipo" ) ) == null ||
					attr.toLowerCase() === "texto" );
		},

		// Posición en la colección
		primero: createPositionalPseudo(función() {
			retorna [ 0 ];
		} ),

		último: createPositionalPseudo(función(_matchIndexes, longitud) {
			devuelve [longitud - 1];
		} ),

		eq: createPositionalPseudo(función(_matchIndexes, longitud, argumento) {
			devolver [ argumento < 0 ? argumento + longitud : argumento ];
		} ),

		incluso: createPositionalPseudo(función(matchIndexes, longitud) {
			var i = 0;
			para ( ; i < longitud; i += 2 ) {
				matchIndexes.push( i );
			}
			devuelve matchIndexes;
		} ),

		impar: createPositionalPseudo(función(matchIndexes, longitud) {
			var i = 1;
			para ( ; i < longitud; i += 2 ) {
				matchIndexes.push( i );
			}
			devuelve matchIndexes;
		} ),

		lt: createPositionalPseudo( función( matchIndexes, longitud, argumento ) {
			var yo;

			si ( argumento < 0 ) {
				i = argumento + longitud;
			} de lo contrario si ( argumento > longitud ) {
				i = longitud;
			} demás {
				i = argumento;
			}

			para ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			devuelve matchIndexes;
		} ),

		gt: createPositionalPseudo(función(matchIndexes, longitud, argumento) {
			var i = argumento < 0 ? argumento + longitud : argumento;
			para ( ; ++i < longitud; ) {
				matchIndexes.push( i );
			}
			devuelve matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Agregar pseudos de tipo botón/entrada
para ( i en { radio: verdadero, casilla de verificación: verdadero, archivo: verdadero, contraseña: verdadero, imagen: verdadero } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
para ( i en { enviar: verdadero, restablecer: verdadero } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// API sencilla para crear nuevos setFilters
función setFilters() {}
setFilters.prototype = Expr.filtros = Expr.pseudos;
Expr.setFilters = nuevo setFilters();

función tokenize( selector, parseOnly ) {
	var coincidente, coincidencia, tokens, tipo,
		hasta ahora, grupos, prefiltros,
		en caché = tokenCache[ selector + " " ];

	si (en caché) {
		devolver parseOnly? 0 : cached.slice( 0 );
	}

	hasta ahora = selector;
	grupos = [];
	preFiltros = Expr.preFilter;

	mientras ( hasta ahora ) {

		// Coma y primera ejecución
		si ( !coincidente || ( coincidencia = rcomma.exec( soFar ) ) ) {
			si ( coincide ) {

				// No consuma comas finales como válidas
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			grupos.push( ( tokens = [] ) );
		}

		coincidido = falso;

		// Combinadores
		si ( ( coincidencia = rleadingCombinator.exec( soFar ) ) ) {
			coincidido = match.shift();
			fichas.push( {
				valor: coincidente,

				// Lanza combinadores descendientes al espacio
				tipo: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice( coincidente.longitud );
		}

		// Filtros
		para (escriba en Expr.filter) {
			si ( ( match = matchExpr[ tipo ].exec( soFar ) ) && ( !preFilters[ tipo ] ||
				( coincidencia = preFilters[ tipo ]( coincidencia ) ) ) ) {
				coincidido = match.shift();
				fichas.push( {
					valor: coincidente,
					tipo: tipo,
					cerillas: cerillas
				} );
				soFar = soFar.slice( coincidente.longitud );
			}
		}

		si ( !coincidió ) {
			romper;
		}
	}

	// Devuelve la longitud del exceso no válido
	// si solo estamos analizando
	// De lo contrario, arroja un error o devuelve tokens
	si (parseOnly) {
		devuelve soFar.length;
	}

	volver hasta ahora ?
		buscar.error( selector ):

		// Almacenar en caché los tokens
		tokenCache( selector, grupos ).slice( 0 );
}

función toSelector( tokens ) {
	var i = 0,
		len = tokens.longitud,
		selector = "";
	para ( ; i < len; i++ ) {
		selector += tokens[ i ].valor;
	}
	selector de retorno;
}

función addCombinator(combinador, comparador, base) {
	var dir = combinador.dir,
		saltar = combinador.siguiente,
		clave = saltar || dir,
		checkNonElements = base && clave === "parentNode",
		hechoNombre = hecho++;

	devuelve combinador.primero?

		// Verificar con el ancestro más cercano/elemento precedente
		función( elemento, contexto, xml ) {
			mientras ( ( elem = elem[ dir ] ) ) {
				si ( elem.nodeType === 1 || comprobarNoElementos ) {
					devuelve matcher( elem, context, xml );
				}
			}
			devuelve falso;
		} :

		// Verificar con todos los elementos antecesores/precedentes
		función( elemento, contexto, xml ) {
			var caché antiguo, caché externo,
				newCache = [ dirruns, doneName ];

			// No podemos establecer datos arbitrarios en los nodos XML, por lo que no se benefician del almacenamiento en caché del combinador
			si (xml) {
				mientras ( ( elem = elem[ dir ] ) ) {
					si ( elem.nodeType === 1 || comprobarNoElementos ) {
						si ( matcher( elem, contexto, xml ) ) {
							devuelve verdadero;
						}
					}
				}
			} demás {
				mientras ( ( elem = elem[ dir ] ) ) {
					si ( elem.nodeType === 1 || comprobarNoElementos ) {
						externalCache = elem[ expando ] || ( elemento[ expando ] = {} );

						si ( saltar && nodeName( elem, saltar ) ) {
							elem = elem[ dir ] || elem;
						} de lo contrario si ( ( oldCache = externalCache[ clave ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Asignar a newCache para que los resultados se propaguen hacia atrás a los elementos anteriores
							devolver ( newCache[ 2 ] = oldCache[ 2 ] );
						} demás {

							// Reutilizar newcache para que los resultados se propaguen hacia atrás a los elementos anteriores
							externalCache[ clave ] = newCache;

							// Un resultado acertado significa que hemos terminado; un error significa que tenemos que seguir comprobando.
							si ( ( newCache[ 2 ] = matcher( elem, contexto, xml ) ) ) {
								devuelve verdadero;
							}
						}
					}
				}
			}
			devuelve falso;
		};
}

función elementMatcher( coincidencias ) {
	devuelve matchers.length > 1 ?
		función( elemento, contexto, xml ) {
			var i = comparadores.length;
			mientras ( yo-- ) {
				si ( !matchers[ i ]( elem, contexto, xml ) ) {
					devuelve falso;
				}
			}
			devuelve verdadero;
		} :
		comparadores[ 0 ];
}

función multipleContextos(selector, contextos, resultados) {
	var i = 0,
		len = contextos.longitud;
	para ( ; i < len; i++ ) {
		find( selector, contextos[ i ], resultados );
	}
	devolver resultados;
}

función condensar( no coincidente, mapa, filtro, contexto, xml ) {
	elemento var,
		nuevoNo coincidente = [],
		yo = 0,
		len = longitud no coincidente,
		mapeado = mapa != nulo;

	para ( ; i < len; i++ ) {
		si ( ( elem = no coincidente[ i ] ) ) {
			si ( !filtro || filtro( elem, contexto, xml ) ) {
				nuevoUnmatched.push( elem );
				si ( mapeado ) {
					mapa.push( i );
				}
			}
		}
	}

	devuelve nuevoNo coincidente;
}

función setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	si ( postFilter && ! postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	si ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher(postFinder, postSelector);
	}
	devolver markFunction(función(semilla, resultados, contexto, xml) {
		var temp, i, elem, matcherOut,
			preMapa = [],
			postMapa = [],
			preexistente = resultados.longitud,

			// Obtener elementos iniciales de la semilla o del contexto
			elems = semilla ||
				multipleContextos( selector || "*",
					contexto.nodeType ? [ contexto ] : contexto, [] ),

			// Prefiltro para obtener la entrada del comparador, preservando un mapa para la sincronización de los resultados iniciales
			matcherIn = preFilter && ( semilla || !selector ) ?
				condensar( elementos, preMap, preFilter, contexto, xml ):
				elementos;

		si (comparador) {

			// Si tenemos un postFinder, o una semilla filtrada, o un postFilter sin semilla
			// o resultados preexistentes,
			matcherOut = postFinder || (semilla ? preFilter : preexistente || postFilter ) ?

				//...es necesario un procesamiento intermedio
				[] :

				// ...de lo contrario, utilice los resultados directamente
				resultados;

			// Encuentra coincidencias primarias
			matcher( matcherIn, matcherOut, contexto, xml );
		} demás {
			matcherOut = matcherIn;
		}

		// Aplicar postFilter
		si ( postFilter ) {
			temperatura = condensar( matcherOut, postMap );
			postFilter( temp, [], contexto, xml );

			// Anule la coincidencia de los elementos fallidos moviéndolos nuevamente a matcherIn
			i = longitud de temperatura;
			mientras ( yo-- ) {
				si ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		si ( semilla ) {
			si ( postFinder || preFilter ) {
				si (postFinder) {

					// Obtenga el matcherOut final condensando este intermedio en contextos postFinder
					temperatura = [];
					i = matcherOut.longitud;
					mientras ( yo-- ) {
						si ( ( elem = matcherOut[ i ] ) ) {

							// Restaurar matcherIn ya que elem aún no es una coincidencia final
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( nulo, ( matcherOut = [] ), temp, xml );
				}

				// Mueva los elementos coincidentes de la semilla a los resultados para mantenerlos sincronizados
				i = matcherOut.longitud;
				mientras ( yo-- ) {
					si ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( semilla, elem ): preMap[ i ] ) > -1 ) {

						semilla[ temp ] = !( resultados[ temp ] = elem );
					}
				}
			}

		// Agregar elementos a los resultados, a través de postFinder si está definido
		} demás {
			matcherOut = condensar(
				matcherOut === ¿resultados?
					matcherOut.splice( preexistente, matcherOut.length ) :
					emparejadorFuera
			);
			si (postFinder) {
				postFinder( null, resultados, matcherOut, xml );
			} demás {
				push.apply( resultados, matcherOut );
			}
		}
	} );
}

función matcherFromTokens(tokens) {
	var checkContext, comparador, j,
		len = tokens.longitud,
		principalRelativo = Expr.relativo[ tokens[ 0 ].tipo ],
		implicitRelative = Relativo principal || Expr.relativo[ " " ],
		i = ¿líderRelativo? 1 : 0,

		// El comparador fundamental garantiza que los elementos sean accesibles desde los contextos de nivel superior.
		matchContext = addCombinator(función(elemento) {
			devolver elemento === checkContext;
		}, implícitoRelativo, verdadero ),
		matchAnyContext = addCombinator(función(elemento) {
			devolver indexOf.call( checkContext, elem ) > -1;
		}, implícitoRelativo, verdadero ),
		comparadores = [ función ( elem, contexto, xml ) {

			// Compatibilidad: IE 11+, Edge 17 - 18+
			// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
			// dos documentos; las comparaciones superficiales funcionan.
			// eslint-deshabilitar-siguiente-linea eqeqeq
			var ret = ( !relativoLíder && ( xml || contexto != contextoMásExterno ) ) || (
				( checkContext = contexto ).nodeType ?
					matchContext( elemento, contexto, xml ):
					matchAnyContext( elemento, contexto, xml ) );

			// Evite quedarse colgado del elemento
			// (ver https://github.com/jquery/sizzle/issues/299)
			checkContext = nulo;
			volver ret;
		} ];

	para ( ; i < len; i++ ) {
		si ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			emparejadores = [ addCombinator( elementMatcher( emparejadores ), emparejador ) ];
		} demás {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Devuelve un valor especial al ver un comparador posicional
			si ( matcher[ expando ] ) {

				// Busque el siguiente operador relativo (si lo hay) para un manejo adecuado
				j = ++i;
				para ( ; j < len; j++ ) {
					si ( Expr.relativo[ tokens[ j ].tipo ] ) {
						romper;
					}
				}
				devuelve setMatcher(
					i > 1 && elementoMatcher( coincidencias ),
					i > 1 && aSelector(

						// Si el token anterior era un combinador descendiente, inserte un elemento cualquiera implícito `*`
						tokens.slice( 0, i - 1 )
							.concat( { valor: tokens[ i - 2 ].tipo === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					comparador,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector(tokens)
				);
			}
			matchers.push(comparador);
		}
	}

	devolver elementMatcher (coincidentes);
}

función matcherFromGroupMatchers(elementMatchers, setMatchers) {
	var porSet = setMatchers.length > 0,
		porElement = elementMatchers.length > 0,
		superMatcher = función(semilla, contexto, xml, resultados, más externo) {
			var elem, j, comparador,
				conteo coincidente = 0,
				yo = "0",
				no coincidente = semilla && [],
				conjuntoMatched = [],
				contextBackup = contextoexterno,

				// Siempre debemos tener elementos semilla o contexto más externo
				elems = semilla || porElemento && Expr.find.TAG( "*", más externo ),

				// Utilice dirruns enteros solo si este es el comparador más externo
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.longitud;

			si (más externo) {

				// Compatibilidad: IE 11+, Edge 17 - 18+
				// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
				// dos documentos; las comparaciones superficiales funcionan.
				// eslint-deshabilitar-siguiente-linea eqeqeq
				outermostContext = contexto == documento || contexto || más externo;
			}

			// Agregar elementos pasando elementMatchers directamente a los resultados
			// Compatibilidad: solo iOS <=7 - 9
			// Tolerar la coincidencia de propiedades de NodeList (IE: "length"; Safari: <number>)
			// elementos por id. (ver trac-14142)
			para ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				si ( porElemento && elem ) {
					j = 0;

					// Compatibilidad: IE 11+, Edge 17 - 18+
					// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
					// dos documentos; las comparaciones superficiales funcionan.
					// eslint-deshabilitar-siguiente-linea eqeqeq
					si ( !contexto && elem.ownerDocument != documento ) {
						setDocument( elemento );
						xml = !documentIsHTML;
					}
					mientras ( ( matcher = elementMatchers[ j++ ] ) ) {
						si ( matcher( elem, contexto || documento, xml ) ) {
							push.call( resultados, elem );
							romper;
						}
					}
					si (más externo) {
						ejecuciones_de_directorios = ejecuciones_de_directoriosUnique;
					}
				}

				// Seguimiento de elementos no coincidentes para filtros establecidos
				si ( porSet ) {

					//Habrán pasado por todos los comparadores posibles.
					si ( ( elem = !matcher && elem ) ) {
						conteo coincidente--;
					}

					// Alarga la matriz para cada elemento, coincida o no
					si ( semilla ) {
						no coincidente.push( elem );
					}
				}
			}

			// `i` es ahora el recuento de elementos visitados anteriormente y lo agrega a `matchedCount`
			// hace que este último no sea negativo.
			conteocombinado += i;

			// Aplicar filtros de conjunto a elementos no coincidentes
			// NOTA: Esto se puede omitir si no hay elementos no coincidentes (es decir, `matchedCount`
			// es igual a `i`), a menos que no hayamos visitado _ningún_ elemento en el bucle anterior porque tenemos
			// sin comparadores de elementos y sin semilla.
			// Incrementar una cadena inicial "0" `i` permite que `i` siga siendo una cadena solo en ese caso
			// caso, que dará como resultado un "00" `matchedCount` que difiere de `i` pero también es
			// numéricamente cero.
			if (porSet && i! == matchedCount) {
				j = 0;
				mientras ( ( comparador = setMatchers[ j++ ] ) ) {
					matcher( no coincidente, setMatched, contexto, xml );
				}

				si ( semilla ) {

					// Reintegrar las coincidencias de elementos para eliminar la necesidad de ordenar
					si ( matchedCount > 0 ) {
						mientras ( yo-- ) {
							si ( !( no coincidente[ i ] || conjunto coincidente[ i ] ) ) {
								setMatched[ i ] = pop.call( resultados );
							}
						}
					}

					// Descartar los valores de marcador de posición de índice para obtener solo las coincidencias reales
					setMatched = condensar( setMatched );
				}

				// Añadir coincidencias a los resultados
				push.apply( resultados, setMatched );

				// Los conjuntos sin semillas coinciden con varios emparejadores exitosos que estipulan la clasificación
				si (más externo && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( resultados );
				}
			}

			// Anular la manipulación de variables globales por comparadores anidados
			si (más externo) {
				ejecuciones_de_directorios = ejecuciones_de_directoriosUnique;
				contextoExterno = ContextoCopiaDeSeguridad;
			}

			retorno inigualable;
		};

	volver porSet ?
		Función de marca (superMatcher):
		superMatcher;
}

función compilar( selector, match /* Solo para uso interno */ ) {
	yo soy,
		establecerMatchers = [],
		elementoMatchers = [],
		en caché = compilerCache[ selector + " " ];

	si ( !en caché ) {

		// Generar una función de funciones recursivas que se puedan utilizar para comprobar cada elemento
		si ( !coincidencia ) {
			coincidir = tokenizar( selector );
		}
		i = coincidencia.longitud;
		mientras ( yo-- ) {
			en caché = matcherFromTokens( match[ i ] );
			si ( en caché[ expando ] ) {
				setMatchers.push(en caché);
			} demás {
				elementMatchers.push(en caché);
			}
		}

		// Almacenar en caché la función compilada
		en caché = compilerCache( selector,
			matcherFromGroupMatchers( elementoMatchers, setMatchers ) );

		// Guardar selector y tokenización
		en caché.selector = selector;
	}
	devuelve en caché;
}

/**
 * Una función de selección de bajo nivel que funciona con jQuery compilado
 * funciones del selector
 * @param {String|Function} selector Un selector o una función precompilada
 * Función selectora creada con jQuery selector compile
 * @param {Elemento} contexto
 * @param {Array} [resultados]
 * @param {Array} [semilla] Un conjunto de elementos con los que comparar
 */
función seleccionar(selector, contexto, resultados, semilla) {
	var i, tokens, token, tipo, buscar,
		compilado = tipo de selector === "función" && selector,
		match = !seed && tokenize( ( selector = compilado.selector || selector ) );

	resultados = resultados || [];

	// Intenta minimizar las operaciones si solo hay un selector en la lista y ninguna semilla
	// (lo cual nos garantiza el contexto)
	si ( coincidencia.longitud === 1 ) {

		// Reducir el contexto si el selector compuesto principal es un ID
		tokens = coincidencia[ 0 ] = coincidencia[ 0 ].slice( 0 );
		si ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				contexto.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			contexto = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				contexto
			) || [] )[ 0 ];
			si ( !contexto ) {
				devolver resultados;

			// Los comparadores precompilados seguirán verificando la ascendencia, así que sube un nivel
			} de lo contrario si ( compilado ) {
				contexto = contexto.parentNode;
			}

			selector = selector.slice( tokens.shift().valor.longitud );
		}

		// Obtener un conjunto de semillas para la coincidencia de derecha a izquierda
		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
		mientras ( yo-- ) {
			token = tokens[ i ];

			// Abortar si acertamos un combinador
			si ( Expr.relativo[ ( tipo = token.tipo ) ] ) {
				romper;
			}
			si ( ( buscar = Expr.buscar[ tipo ] ) ) {

				// Búsqueda, ampliación del contexto para los principales combinadores hermanos
				si ( ( semilla = encontrar(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].tipo ) &&
						testContext( contexto.parentNode ) || contexto
				) ) ) {

					// Si la semilla está vacía o no quedan tokens, podemos regresar antes
					tokens.splice( i, 1 );
					selector = semilla.longitud && toSelector( tokens );
					si ( !selector ) {
						push.apply( resultados, semilla );
						devolver resultados;
					}

					romper;
				}
			}
		}
	}

	// Compilar y ejecutar una función de filtrado si no se proporciona ninguna
	// Proporcione `match` para evitar la retokenización si modificamos el selector anterior
	( compilado || compilar( selector, coincidencia ) )(
		semilla,
		contexto,
		!documentoEsHTML,
		resultados,
		!contexto || rsibling.test( selector ) && testContext( contexto.parentNode ) || contexto
	);
	devolver resultados;
}

// Tareas únicas

// Compatibilidad: Android <=4.0 - 4.1+
// Estabilidad de clasificación
soporte.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Inicializar contra el documento predeterminado
establecerDocumento();

// Compatibilidad: Android <=4.0 - 4.1+
// Los nodos separados se suceden *unos a otros* de manera confusa
soporte.sortDetached = assert( función( el ) {

	// Debería devolver 1, pero devuelve 4 (siguiente)
	devuelve el.compareDocumentPosition(document.createElement("campo" ) ) & 1;
} );

jQuery.find = buscar;

// Obsoleto
jQuery.expr[ : " ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// Estos siempre han sido privados, pero solían documentarse como parte de
// Sizzle así que mantengámoslos por ahora por motivos de compatibilidad con versiones anteriores.
buscar.compilar = compilar;
buscar.seleccionar = seleccionar;
buscar.setDocument = setDocument;
encontrar.tokenize = tokenizar;

buscar.escape = jQuery.escapeSelector;
buscar.getText = jQuery.text;
buscar.isXML = jQuery.isXMLDoc;
buscar.selectores = jQuery.expr;
encontrar.soporte = jQuery.soporte;
buscar.uniqueSort = jQuery.uniqueSort;

	/* habilitar eslint */

} )();


var dir = función (elem, dir, hasta) {
	var coincidente = [],
		truncar = hasta !== indefinido;

	mientras ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		si ( elem.nodeType === 1 ) {
			si ( truncar && jQuery( elem ).is( hasta ) ) {
				romper;
			}
			coincidente.push( elem );
		}
	}
	retorno coincidente;
};


var hermanos = función(n, elem) {
	var coincidente = [];

	para ( ; n; n = n.nextHermano ) {
		si ( n.nodeType === 1 && n !== elem ) {
			emparejado.push( n );
		}
	}

	retorno coincidente;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implementar la misma funcionalidad para filtrar y no
función winnow( elementos, calificador, no ) {
	si ( isFunction ( calificador ) ) {
		devuelve jQuery.grep( elementos, función( elem, i ) {
			devuelve !!calificador.call( elem, i, elem ) !== no;
		} );
	}

	// Elemento único
	si ( calificador.nodeType ) {
		devuelve jQuery.grep( elementos, función( elem ) {
			retorna ( elem === calificador ) !== no;
		} );
	}

	// Array de elementos (jQuery, argumentos, Array)
	si ( calificador tipoof !== "cadena" ) {
		devuelve jQuery.grep( elementos, función( elem ) {
			return ( indexOf.call( calificador, elem ) > -1 ) !== no;
		} );
	}

	// Filtrado directamente para selectores simples y complejos
	devuelve jQuery.filter( calificador, elementos, no );
}

jQuery.filter = función(expr, elems, not) {
	var elem = elems[ 0 ];

	si no ) {
		expr = ":no(" + expr + ")";
	}

	si ( elems.length === 1 && elem.nodeType === 1 ) {
		devolver jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	devuelve jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
		devuelve elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	buscar: función(selector) {
		var yo, ret,
			len = esta.longitud,
			yo = esto;

		si ( tipo de selector !== "cadena" ) {
			devuelve esto.pushStack( jQuery( selector ).filter( función() {
				para ( i = 0; i < len; i++ ) {
					si ( jQuery.contains( self[ i ], this ) ) {
						devuelve verdadero;
					}
				}
			} ) );
		}

		ret = este.pushStack( [] );

		para ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		devolver len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filtro: función(selector) {
		devuelve esto.pushStack( winnow( esto, selector || [], falso ) );
	},
	no: función(selector) {
		devuelve esto.pushStack( winnow( esto, selector || [], verdadero ) );
	},
	es: función(selector) {
		volver !!winnow(
			este,

			// Si se trata de un selector posicional/relativo, verifique la pertenencia al conjunto devuelto
			// entonces $("p:first").is("p:last") no devolverá verdadero para un documento con dos "p".
			tipo de selector === "cadena" && rneedsContext.test( selector ) ?
				jQuery(selector):
				selector || [],
			FALSO
		).longitud;
	}
} );


// Inicializar un objeto jQuery


// Una referencia central a la raíz jQuery(document)
var raízjQuery,

	// Una forma sencilla de comprobar cadenas HTML
	// Priorizar #id sobre <tag> para evitar XSS a través de location.hash (trac-9521)
	// Reconocimiento estricto de HTML (trac-11290: debe comenzar con <)
	// Atajo simple para mayúsculas y minúsculas para mayor velocidad
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = función( selector, contexto, raíz ) {
		var coincidencia, elem;

		// MANEJAR: $(""), $(nulo), $(indefinido), $(falso)
		si ( !selector ) {
			devuelve esto;
		}

		// El método init() acepta una rootjQuery alternativa
		// para que migrar pueda soportar jQuery.sub (gh-2101)
		raíz = raíz || rootjQuery;

		// Manejar cadenas HTML
		si ( tipo de selector === "cadena" ) {
			si (selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.longitud >= 3 ) {

				// Suponga que las cadenas que comienzan y terminan con <> son HTML y omita la verificación de expresiones regulares
				coincidencia = [ nulo, selector, nulo ];

			} demás {
				coincidencia = rquickExpr.exec(selector);
			}

			// Coincide con el html o asegúrate de que no se especifique ningún contexto para #id
			si ( coincide && ( coincide[ 1 ] || ! contexto ) ) {

				// MANEJAR: $(html) -> $(matriz)
				si ( coincide[ 1 ] ) {
					contexto = contexto instancia de jQuery ? contexto[ 0 ] : contexto;

					// La opción para ejecutar scripts es verdadera para compatibilidad con versiones anteriores
					// Permitir intencionalmente que se genere el error si parseHTML no está presente
					jQuery.merge( esto, jQuery.parseHTML(
						partido[ 1 ],
						contexto && contexto.nodeType ? contexto.ownerDocument || contexto : documento,
						verdadero
					) );

					// MANEJAR: $(html, propiedades)
					si ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( contexto ) ) {
						para (coincidir en contexto) {

							// Las propiedades del contexto se llaman como métodos si es posible
							si ( esFuncion( esto[ coincidir ] ) ) {
								este[coincidencia](contexto[coincidencia]);

							// ...y de lo contrario se establecen como atributos
							} demás {
								este.attr(coincidencia, contexto[coincidencia]);
							}
						}
					}

					devuelve esto;

				// MANEJO: $(#id)
				} demás {
					elem = documento.getElementById( match[ 2 ] );

					si ( elemento ) {

						// Inyectar el elemento directamente en el objeto jQuery
						esto[ 0 ] = elem;
						esto.longitud = 1;
					}
					devuelve esto;
				}

			// MANEJAR: $(expr, $(...))
			} de lo contrario si ( !contexto || contexto.jquery ) {
				retorna ( contexto || raíz ).find( selector );

			// MANEJAR: $(expr, contexto)
			// (que es equivalente a: $(context).find(expr)
			} demás {
				devuelve este.constructor( contexto ).find( selector );
			}

		// MANEJADOR: $(DOMElement)
		} de lo contrario si ( selector.nodeType ) {
			esto[ 0 ] = selector;
			esto.longitud = 1;
			devuelve esto;

		// MANEJAR: $(función)
		// Atajo para documento listo
		} de lo contrario si ( esFuncion( selector ) ) {
			devuelve root.ready !== indefinido ?
				raíz.ready(selector):

				// Ejecutar inmediatamente si no está listo
				selector(jQuery);
		}

		devuelve jQuery.makeArray( selector, este );
	};

// Dale a la función init el prototipo jQuery para su posterior instanciación
init.prototipo = jQuery.fn;

// Inicializar referencia central
rootjQuery = jQuery( documento );


var rparentsprev = /^(?:padres|prev(?:Hasta|Todos))/,

	// Métodos garantizados para producir un conjunto único cuando se parte de un conjunto único
	garantizadoÚnico = {
		niños:cierto,
		Contenido: verdadero,
		siguiente: verdadero,
		anterior: verdadero
	};

jQuery.fn.extend( {
	tiene: función(objetivo) {
		var objetivos = jQuery( objetivo, este ),
			l = objetivos.longitud;

		devuelve este.filtro(función() {
			var i = 0;
			para ( ; i < l; i++ ) {
				si ( jQuery.contains( esto, objetivos[ i ] ) ) {
					devuelve verdadero;
				}
			}
		} );
	},

	más cercano: función(selectores, contexto) {
		var cur,
			yo = 0,
			l = esta.longitud,
			coincidido = [],
			objetivos = tipo de selectores !== "cadena" && jQuery( selectores );

		// Los selectores posicionales nunca coinciden, ya que no hay contexto de _selección_
		si ( !rneedsContext.test( selectores ) ) {
			para ( ; i < l; i++ ) {
				para ( cur = this[ i ]; cur && cur !== contexto; cur = cur.parentNode ) {

					// Omitir siempre fragmentos de documentos
					si ( cur.nodeType < 11 && ( objetivos ?
						objetivos.índice( cur ) > -1 :

						// No pases elementos no esenciales a jQuery#find
						cur.tipo de nodo === 1 &&
							jQuery.find.matchesSelector(cur, selectores) ) ) {

						coincidente.push( cur );
						romper;
					}
				}
			}
		}

		devuelve esto.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched ): matched );
	},

	// Determinar la posición de un elemento dentro del conjunto
	índice: función( elem ) {

		// Sin argumentos, devuelve el índice en el padre
		si ( !elem ) {
			devolver ( este[0] y este[0].parentNode) ? este.first().prevAll().length: -1;
		}

		// Índice en el selector
		si ( tipo de elemento === "cadena") {
			devuelve indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Localiza la posición del elemento deseado
		devuelve indexOf.call( esto,

			// Si recibe un objeto jQuery, se utiliza el primer elemento
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	añadir: función(selector, contexto) {
		devuelve esto.pushStack(
			jQuery.uniqueSort(
				jQuery.merge(this.get(), jQuery(selector, contexto) )
			)
		);
	},

	addBack: función(selector) {
		devuelve esto.add( selector == null ?
			este.prevObject : este.prevObject.filter( selector )
		);
	}
} );

función hermano(cur, dir) {
	mientras ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	devuelve cur;
}

jQuery.each( {
	padre: función( elem ) {
		var padre = elem.parentNode;
		devolver padre && padre.nodeType !== 11 ? padre : null;
	},
	padres: función( elem ) {
		devolver dir( elem, "parentNode" );
	},
	padresHasta: función( elem, _i, hasta ) {
		devolver dir( elem, "parentNode", hasta );
	},
	siguiente: función( elem ) {
		devuelve hermano( elem, "nextSibling" );
	},
	anterior: función( elem ) {
		devuelve hermano( elem, "hermanoanterior" );
	},
	siguienteTodo: función( elem ) {
		devolver dir( elem, "nextSibling" );
	},
	prevAll: función( elem ) {
		retorna dir( elem, "previousSibling" );
	},
	siguienteHasta: función( elem, _i, hasta ) {
		devolver dir( elem, "nextSibling", hasta );
	},
	prevHasta: función( elem, _i, hasta ) {
		devuelve dir( elem, "previousSibling", hasta );
	},
	hermanos: función( elem ) {
		devuelve hermanos( ( elem.parentNode || {} ).firstChild, elem );
	},
	niños: función( elem ) {
		devuelve hermanos( elem.firstChild );
	},
	contenido: función( elem ) {
		si ( elem.contentDocument != null &&

			// Compatibilidad: IE 11+
			// Los elementos <object> sin atributo `data` tienen un objeto
			// `contentDocument` con un prototipo `null`.
			getProto( elem.contentDocument ) ) {

			devuelve elem.contentDocument;
		}

		// Compatibilidad: solo IE 9 - 11, solo iOS 7, solo navegador Android <=4.3
		// Trate el elemento de plantilla como uno normal en los navegadores que
		// no lo apoyo
		si ( nombreNodo( elem, "plantilla")) {
			elem = elem.contenido || elem;
		}

		devuelve jQuery.merge( [], elem.childNodes );
	}
}, función( nombre, función ) {
	jQuery.fn[ nombre ] = función( hasta, selector ) {
		var coincidente = jQuery.map( this, fn, hasta );

		si ( nombre.slice( -5 ) !== "Hasta" ) {
			selector=hasta;
		}

		si ( selector && tipo de selector === "cadena" ) {
			coincidente = jQuery.filter( selector, coincidente );
		}

		si ( this.length > 1 ) {

			// Eliminar duplicados
			si ( !guaranteedUnique[ nombre ] ) {
				jQuery.uniqueSort( coincidente );
			}

			// Orden inverso para padres* y derivados anteriores
			si ( rparentsprev.test( nombre ) ) {
				coincidente.reverse();
			}
		}

		devuelve este.pushStack( coincidente );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convertir opciones con formato de cadena en opciones con formato de objeto
función createOptions(opciones) {
	var objeto = {};
	jQuery.each(opciones.match(rnothtmlwhite) || [], función(_, bandera) {
		objeto[bandera] = verdadero;
	} );
	devolver objeto;
}

/*
 * Cree una lista de devolución de llamadas utilizando los siguientes parámetros:
 *
 * opciones: una lista opcional de opciones separadas por espacios que cambiarán cómo
 * la lista de devolución de llamada se comporta como un objeto de opción más tradicional
 *
 * De manera predeterminada, una lista de devolución de llamadas actuará como una lista de devolución de llamadas de eventos y puede ser
 * "disparado" varias veces.
 *
 *Posibles opciones:
 *
 * una vez: garantizará que la lista de devolución de llamadas solo se pueda activar una vez (como una diferida)
 *
 * memoria: mantendrá un registro de los valores anteriores y llamará a cualquier devolución de llamada agregada
 * después de que la lista haya sido disparada inmediatamente con el último "memorizado"
 * valores (como un diferido)
 *
 * único: garantizará que una devolución de llamada solo se pueda agregar una vez (sin duplicados en la lista)
 *
 * stopOnFalse: interrumpir llamadas cuando una devolución de llamada devuelve falso
 *
 */
jQuery.Callbacks = función(opciones) {

	// Convierte opciones de formato de cadena a formato de objeto si es necesario
	// (primero verificamos en caché)
	opciones = tipo de opciones === "cadena" ?
		createOptions(opciones):
		jQuery.extend( {}, opciones );

	var // Marca para saber si la lista se está activando actualmente
		disparo,

		// Último valor de fuego para listas inolvidables
		memoria,

		// Marcar para saber si la lista ya fue activada
		despedido,

		// Bandera para evitar disparos
		bloqueado,

		// Lista de devolución de llamadas actual
		lista = [],

		// Cola de datos de ejecución para listas repetibles
		cola = [],

		// Índice de la devolución de llamada que se está activando actualmente (modificado mediante agregar o quitar según sea necesario)
		índice de disparo = -1,

		// Devoluciones de llamadas de fuego
		fuego = funcion() {

			// Imponer disparo único
			bloqueado = bloqueado || opciones.once;

			// Ejecutar devoluciones de llamadas para todas las ejecuciones pendientes,
			// respetando las modificaciones de firingIndex y los cambios en tiempo de ejecución
			despedido = despedido = verdadero;
			para ( ; cola.longitud; índiceDeDisparo = -1 ) {
				memoria = cola.shift();
				mientras ( ++firingIndex < lista.length ) {

					// Ejecutar devolución de llamada y verificar terminación anticipada
					si ( lista[ índiceDeDisparo ]. aplicar( memoria[ 0 ], memoria[ 1 ] ) === falso &&
						opciones.stopOnFalse ) {

						// Salta al final y olvida los datos para que .add no se vuelva a activar
						firingIndex = lista.longitud;
						memoria = falso;
					}
				}
			}

			// Olvídate de los datos si hemos terminado con ellos.
			si ( !opciones.memoria ) {
				memoria = falso;
			}

			disparo = falso;

			// Limpia si terminamos de disparar para siempre
			si ( bloqueado ) {

				// Mantenga una lista vacía si tenemos datos para futuras llamadas adicionales
				si ( memoria ) {
					lista = [];

				// De lo contrario, este objeto se gasta.
				} demás {
					lista = "";
				}
			}
		},

		// Objeto de devolución de llamadas actual
		yo mismo = {

			//Agrega una devolución de llamada o una colección de devoluciones de llamada a la lista
			añadir: función() {
				si ( lista ) {

					// Si tenemos memoria de una ejecución anterior, deberíamos disparar después de agregar
					si ( memoria && ! disparo ) {
						firingIndex = lista.length - 1;
						cola.push( memoria );
					}

					(función agregar(args) {
						jQuery.each(argumentos, función(_, arg) {
							si ( esFuncion( arg ) ) {
								si ( !opciones.unique || !self.has( arg ) ) {
									lista.push( arg );
								}
							} de lo contrario si ( arg && arg.length && toType( arg ) !== "cadena" ) {

								// Inspeccionar recursivamente
								añadir( arg );
							}
						} );
					} )( argumentos );

					si ( memoria && ! disparo ) {
						fuego();
					}
				}
				devuelve esto;
			},

			// Eliminar una devolución de llamada de la lista
			eliminar: función() {
				jQuery.each( argumentos, función( _, arg ) {
					índice var;
					mientras ( ( índice = jQuery.inArray( arg, lista, índice ) ) > -1 ) {
						lista.splice( índice, 1 );

						// Manejar índices de activación
						si ( índice <= índiceDeDisparo ) {
							índice de disparo--;
						}
					}
				} );
				devuelve esto;
			},

			// Comprueba si una devolución de llamada determinada está en la lista.
			// Si no se proporciona ningún argumento, devuelve si la lista tiene o no devoluciones de llamadas adjuntas.
			tiene: función( fn ) {
				devolver fn ?
					jQuery.inArray(función, lista) > -1:
					lista.longitud > 0;
			},

			// Eliminar todas las devoluciones de llamadas de la lista
			vacío: función() {
				si ( lista ) {
					lista = [];
				}
				devuelve esto;
			},

			// Deshabilitar .fire y .add
			// Anular cualquier ejecución actual/pendiente
			// Borrar todas las devoluciones de llamadas y valores
			deshabilitar: función() {
				bloqueado = cola = [];
				lista = memoria = "";
				devuelve esto;
			},
			deshabilitado: función() {
				devuelve !lista;
			},

			// Deshabilitar .fire
			// También deshabilite .add a menos que tengamos memoria (ya que no tendría efecto)
			// Anular cualquier ejecución pendiente
			bloqueo: función() {
				bloqueado = cola = [];
				si ( !memoria && !disparo ) {
					lista = memoria = "";
				}
				devuelve esto;
			},
			bloqueado: función() {
				volver !!bloqueado;
			},

			// Llamar a todas las devoluciones de llamadas con el contexto y los argumentos dados
			fireWith: función( contexto, argumentos ) {
				si ( !bloqueado ) {
					argumentos = argumentos || [];
					args = [ contexto, args.slice ? args.slice() : args ];
					cola.push(argumentos);
					si ( !disparando ) {
						fuego();
					}
				}
				devuelve esto;
			},

			// Llamar a todas las devoluciones de llamadas con los argumentos dados
			fuego: función() {
				self.fireWith( esto, argumentos );
				devuelve esto;
			},

			// Para saber si las devoluciones de llamadas ya se han llamado al menos una vez
			disparado: función() {
				regresa !!despedido;
			}
		};

	regresar yo mismo;
};


función Identidad( v ) {
	devolver v;
}
función Lanzador( ex ) {
	lanzar ex;
}

función adoptarValor(valor, resolver, rechazar, sinValor) {
	método var;

	intentar {

		// Primero verifique el aspecto de la promesa para privilegiar el comportamiento sincrónico
		si ( valor && esFuncion( ( metodo = valor.promesa ) ) ) {
			método.call( valor ).done( resolver ).fail( rechazar );

		// Otros elementos
		} de lo contrario si ( valor && esFuncion( ( metodo = valor.then ) ) ) {
			método.call( valor, resolver, rechazar );

		// Otros no-entornos
		} demás {

			// Controle los argumentos de `resolve` permitiendo que Array#slice convierta el booleano `noValue` en un entero:
			// * falso: [ valor ].slice( 0 ) => resolve( valor )
			// * verdadero: [ valor ].slice( 1 ) => resolve()
			resolver.apply( indefinido, [ valor ].slice( sinValor ) );
		}

	// Para Promesas/A+, convertir excepciones en rechazos
	// Dado que jQuery.when no desenvuelve thenables, podemos omitir las comprobaciones adicionales que aparecen en
	// Aplazado#then para suprimir condicionalmente el rechazo.
	} captura ( valor ) {

		// Compatibilidad: solo Android 4.0
		// Las funciones de modo estricto invocadas sin .call/.apply obtienen el contexto del objeto global
		rechazar.aplicar( indefinido, [ valor ] );
	}
}

jQuery.extend( {

	Diferido: función(func) {
		var tuplas = [

				// acción, agregar oyente, devoluciones de llamadas,
				// ... .then manejadores, índice de argumento, [estado final]
				[ "notificar", "progreso", jQuery.Callbacks( "memoria" ),
					jQuery.Callbacks( "memoria" ), 2 ],
				[ "resolver", "hecho", jQuery.Callbacks( "una vez memoria" ),
					jQuery.Callbacks( "una vez memoria" ), 0, "resuelto" ],
				[ "rechazar", "fallar", jQuery.Callbacks( "una vez memoria" ),
					jQuery.Callbacks("una vez memoria" ), 1, "rechazado" ]
			],
			estado = "pendiente",
			promesa = {
				estado: función() {
					estado de retorno;
				},
				siempre: función() {
					diferido.done( argumentos ).fail( argumentos );
					devuelve esto;
				},
				"captura": función( fn ) {
					devolver promesa.then( null, fn );
				},

				// Mantener la tubería para compatibilidad con versiones anteriores
				tubería: función( /* fnDone, fnFail, fnProgress */ ) {
					var fns = argumentos;

					devuelve jQuery.Deferred(función(newDefer) {
						jQuery.each( tuplas, función( _i, tupla ) {

							// Asigna tuplas (progreso, hecho, falla) a argumentos (hecho, falla, progreso)
							var fn = isFunction( fns[ tupla[ 4 ] ] ) && fns[ tupla[ 4 ] ];

							// deferred.progress(function() { enlazar a newDefer o newDefer.notify })
							// deferred.done(function() { enlazar a newDefer o newDefer.resolve })
							// deferred.fail(function() { enlazar a newDefer o newDefer.reject })
							diferido[ tupla[ 1 ] ]( función() {
								var devuelto = fn && fn.apply( this, arguments );
								si ( devuelto && isFunction ( devuelto.promesa ) ) {
									devuelto.promesa()
										.progress( nuevoAplazar.notificar )
										.done( nuevoAplazamiento.resolver )
										.fail( nuevoAplazar.rechazar );
								} demás {
									newDefer[ tupla[ 0 ] + "Con" ](
										este,
										fn ? [ devuelto ] : argumentos
									);
								}
							} );
						} );
						fns = nulo;
					} ).promesa();
				},
				entonces: función( onFulfilled, onRejected, onProgress ) {
					var profundidad máxima = 0;
					función resolver( profundidad, diferido, manejador, especial ) {
						función de retorno() {
							var que = esto,
								args = argumentos,
								podríaLanzar = función() {
									var regresó, entonces;

									// Soporte: Sección Promesas/A+ 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignorar intentos de doble resolución
									si ( profundidad < maxDepth ) {
										devolver;
									}

									devuelto = manejador.aplicar( eso, argumentos );

									// Soporte: Sección Promesas/A+ 2.3.1
									// https://promisesaplus.com/#point-48
									si ( devuelto === diferido.promesa() ) {
										lanzar nuevo TypeError( "Entonces habilita la auto-resolución" );
									}

									// Soporte: Promesas/A+ secciones 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recuperar `then` solo una vez
									entonces = devolvió &&

										// Soporte: Promesas/A+ sección 2.3.4
										// https://promisesaplus.com/#point-64
										// Solo se comprueba la capacidad de los objetos y funciones
										(tipo de retorno === "objeto" ||
											tipo devuelto === "función" ) &&
										regresó.luego;

									// Manejar un thenable devuelto
									si ( esFuncion( entonces ) ) {

										// Los procesadores especiales (notifican) solo esperan la resolución
										si (especial) {
											entonces.llamar(
												regresó,
												resolver(maxDepth, diferido, Identidad, especial),
												resolver(maxDepth, diferido, Lanzador, especial)
											);

										// Los procesadores normales (resolve) también se conectan al progreso
										} demás {

											// ...y no tenga en cuenta los valores de resolución anteriores
											profundidad máxima++;

											entonces.llamar(
												regresó,
												resolver(maxDepth, diferido, Identidad, especial),
												resolver(maxDepth, diferido, Lanzador, especial),
												resolver(maxDepth, diferido, Identidad,
													diferido.notificarCon )
											);
										}

									// Manejar todos los demás valores devueltos
									} demás {

										// Sólo los controladores sustitutos pasan el contexto
										// y múltiples valores (comportamiento no especificado)
										si ( manejador !== Identidad ) {
											que = indefinido;
											args = [ devuelto ];
										}

										// Procesar el/los valor(es)
										// El proceso predeterminado es resolver
										( especial || diferido.resolveWith )( eso, argumentos );
									}
								},

								// Sólo los procesadores normales (resolución) capturan y rechazan excepciones
								proceso = especial ?
									Podría lanzar:
									función() {
										intentar {
											podríaLanzar();
										} captura ( e ) {

											si ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook(e,
													proceso.error );
											}

											// Soporte: Sección Promesas/A+ 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorar excepciones posteriores a la resolución
											si ( profundidad + 1 >= maxDepth ) {

												// Sólo los controladores sustitutos pasan el contexto
												// y múltiples valores (comportamiento no especificado)
												si ( manejador !== Lanzador ) {
													que = indefinido;
													argumentos = [ e ];
												}

												diferido.rejectWith( eso, argumentos );
											}
										}
									};

							// Soporte: Sección Promesas/A+ 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resuelva las promesas inmediatamente para esquivar el falso rechazo de
							// errores subsiguientes
							si ( profundidad ) {
								proceso();
							} demás {

								// Llamar a un gancho opcional para registrar el error, en caso de excepción
								// ya que de lo contrario se pierde cuando la ejecución se vuelve asincrónica
								si ( jQuery.Deferred.getErrorHook ) {
									proceso.error = jQuery.Deferred.getErrorHook();

								// El alias obsoleto del anterior. Si bien el nombre sugiere
								// devolviendo la pila, no una instancia de error, jQuery solo pasa
								// directamente a `console.warn` para que ambos funcionen; una instancia
								// simplemente coopera mejor con los mapas de origen.
								} de lo contrario si ( jQuery.Deferred.getStackHook ) {
									proceso.error = jQuery.Deferred.getStackHook();
								}
								ventana.setTimeout( proceso );
							}
						};
					}

					devuelve jQuery.Deferred(función(newDefer) {

						// manejadores_de_progreso.add( ... )
						tuplas[ 0 ][ 3 ].add(
							resolver(
								0,
								nuevoAplazar,
								esFuncion( enProgreso )?
									en progreso :
									Identidad,
								nuevoAplazar.notificarCon
							)
						);

						// controladores_cumplidos.add( ... )
						tuplas[ 1 ][ 3 ].add(
							resolver(
								0,
								nuevoAplazar,
								esFuncion(enCumplido) ?
									enCumplido:
									Identidad
							)
						);

						// manejadores_rechazados.add( ... )
						tuplas[ 2 ][ 3 ].add(
							resolver(
								0,
								nuevoAplazar,
								esFuncion( enRechazado ) ?
									enRechazado:
									Lanzador
							)
						);
					} ).promesa();
				},

				// Obtenga una promesa para este aplazamiento
				// Si se proporciona obj, el aspecto de promesa se agrega al objeto
				promesa: función(obj) {
					devolver obj != null ? jQuery.extend( obj, promesa ) : promesa;
				}
			},
			diferido = {};

		// Agregar métodos específicos de la lista
		jQuery.each( tuplas, función( i, tupla ) {
			var lista = tupla[ 2 ],
				stateString = tupla[ 5 ];

			// promesa.progreso = lista.agregar
			// promesa.hecho = lista.agregar
			// promesa.falla = lista.agregar
			promesa[ tupla[ 1 ] ] = lista.add;

			// Manejar estado
			si ( cadena de estado ) {
				lista.add(
					función() {

						// estado = "resuelto" (es decir, cumplido)
						// estado = "rechazado"
						estado = cadenaDeEstado;
					},

					// devoluciones de llamadas rechazadas.deshabilitar
					// devoluciones de llamadas cumplidas.deshabilitar
					tuplas[3-i][2].deshabilitar,

					// rechazados_manipuladores.deshabilitar
					// controladores_cumplidos.deshabilitar
					tuplas[3 - i][3].deshabilitar,

					// bloqueo de devoluciones de llamadas de progreso
					tuplas[ 0 ][ 2 ].lock,

					// manejadores_de_progreso.bloqueo
					tuplas[ 0 ][ 3 ].lock
				);
			}

			// manejadores_de_progreso.fire
			// controladores_cumplidos.fire
			// manejadores rechazados.fire
			lista.add( tupla[ 3 ].fire );

			// diferido.notificar = función() { diferido.notificarCon(...) }
			// diferido.resolve = function() { diferido.resolveWith(...) }
			// diferido.rechazar = función() { diferido.rechazarCon(...) }
			diferido[ tupla[ 0 ] ] = función() {
				diferido[ tupla[ 0 ] + "Con" ]( esto === diferido ? indefinido : esto, argumentos );
				devuelve esto;
			};

			// diferido.notificarCon = lista.dispararCon
			// diferido.resolveWith = lista.fireWith
			// diferido.rejectWith = lista.fireWith
			diferido[ tupla[ 0 ] + "Con" ] = lista.fireWith;
		} );

		//Haz de lo diferido una promesa
		promesa.promesa( diferida );

		// Llamar a la función dada si existe alguna
		si (func) {
			func.call( diferido, diferido );
		}

		//¡Todo listo!
		devolución diferida;
	},

	// Ayudante diferido
	cuando: función( valor_único ) {
		variedad

			// recuento de subordinados incompletos
			restante = argumentos.longitud,

			// recuento de argumentos no procesados
			i = restante,

			// datos de cumplimiento subordinados
			resolverContextos = Matriz( i ),
			resolveValues ​​= slice.call( argumentos ),

			// el primario diferido
			primario = jQuery.Deferred(),

			// Fábrica de devolución de llamadas subordinada
			updateFunc = función( i ) {
				función de retorno (valor) {
					resolverContextos[ i ] = esto;
					resolveValues[ i ] = argumentos.length > 1 ? slice.call( argumentos ): valor;
					si ( !(--restante) ) {
						primario.resolveWith( resolverContextos, resolverValores );
					}
				};
			};

		// Se adoptan argumentos simples y vacíos como Promise.resolve
		si ( restante <= 1 ) {
			adoptarValor( valor_único, primario.hecho( updateFunc( i ) ).resolver, primario.rechazar,
				!restante );

			// Utilice .then() para desenvolver los thenables secundarios (cf. gh-3000)
			si (primary.state() === "pendiente" ||
				esFuncion( resolverValores[ i ] && resolverValores[ i ].then ) ) {

				devuelve primario.then();
			}
		}

		// Se agregan varios argumentos como si fueran elementos de la matriz Promise.all
		mientras ( yo-- ) {
			adoptarValor( resolverValores[ i ], updateFunc( i ), primario.rechazar );
		}

		devolver primaria.promesa();
	}
} );


// Estos suelen indicar un error del programador durante el desarrollo,
// advertir sobre ellos lo antes posible en lugar de aceptarlos por defecto.
var rerrorNames = /^(Eval|Interno|Rango|Referencia|Sintaxis|Tipo|URI)Error$/;

// Si se define `jQuery.Deferred.getErrorHook`, `asyncError` es un error
// capturado antes de la barrera asíncrona para obtener la causa del error original
// que de otro modo podrían quedar ocultos.
jQuery.Deferred.exceptionHook = función( error, asyncError ) {

	// Compatibilidad: solo IE 8 - 9
	// La consola existe cuando las herramientas de desarrollo están abiertas, lo que puede suceder en cualquier momento
	si ( ventana.consola && ventana.consola.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Excepción diferida: " + error.message,
			error.pila, asyncError );
	}
};




jQuery.readyException = función( error ) {
	ventana.setTimeout(función() {
		lanzar error;
	} );
};




// El diferido utilizado en DOM listo
var readyList = jQuery.Deferred();

jQuery.fn.ready = función( fn ) {

	lista lista
		.entonces(fn)

		// Envuelva jQuery.readyException en una función para que la búsqueda
		// sucede en el momento del manejo de errores en lugar de la devolución de llamada
		// registro.
		.catch(función(error) {
			jQuery.readyException(error);
		} );

	devuelve esto;
};

jQuery.extend( {

	// ¿Está el DOM listo para usarse? Establézcalo como verdadero una vez que ocurra.
	isReady: falso,

	// Un contador para rastrear cuántos elementos hay que esperar antes
	// Se activa el evento listo. Ver trac-6781
	listoEspera: 1,

	// Manejar cuando el DOM está listo
	listo: función(esperar) {

		// Anular si hay retenciones pendientes o ya estamos listos
		si ( esperar === verdadero ? --jQuery.readyWait : jQuery.isReady ) {
			devolver;
		}

		//Recuerda que el DOM está listo
		jQuery.isReady = verdadero;

		// Si se activa un evento DOM Ready normal, decremente y espere si es necesario
		si ( espera !== verdadero && --jQuery.readyWait > 0 ) {
			devolver;
		}

		// Si hay funciones enlazadas, para ejecutar
		readyList.resolveWith( documento, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// El controlador de eventos listo y el método de autolimpieza
función completada() {
	document.removeEventListener( "DOMContentLoaded", completado );
	window.removeEventListener( "carga", completado );
	jQuery.ready();
}

// Captura los casos en los que se llama a $(document).ready()
// después de que el evento del navegador ya haya ocurrido.
// Compatibilidad: solo IE <=9 - 10
// Los IE antiguos a veces indican "interactivo" demasiado pronto
si (document.readyState === "completo" ||
	(document.readyState !== "cargando" && !document.documentElement.doScroll ) ) {

	// Manejarlo de forma asincrónica para permitir que los scripts tengan la oportunidad de retrasar la preparación.
	ventana.setTimeout( jQuery.ready );

} demás {

	// Utilice la práctica devolución de llamada de evento
	document.addEventListener( "DOMContentLoaded", completado );

	// Una alternativa a window.onload, que siempre funcionará
	ventana.addEventListener( "carga", completado );
}




// Método multifuncional para obtener y establecer valores de una colección
// Los valores se pueden ejecutar opcionalmente si es una función
var acceso = función( elems, fn, clave, valor, encadenable, emptyGet, raw ) {
	var i = 0,
		len = elementos.longitud,
		volumen = clave == nulo;

	// Establece muchos valores
	si ( toType( clave ) === "objeto" ) {
		encadenable = verdadero;
		para ( i en clave ) {
			acceso( elems, fn, i, key[ i ], verdadero, emptyGet, raw );
		}

	// Establece un valor
	} de lo contrario si ( valor !== indefinido ) {
		encadenable = verdadero;

		si ( !isFunction( valor ) ) {
			crudo = verdadero;
		}

		si (a granel) {

			// Las operaciones masivas se ejecutan en todo el conjunto
			si ( crudo ) {
				fn.call( elementos, valor );
				fn = nulo;

			// ...excepto cuando se ejecutan valores de función
			} demás {
				a granel = fn;
				fn = función( elem, _key, valor ) {
					devuelve bulk.call( jQuery( elem ), valor );
				};
			}
		}

		si ( fn ) {
			para ( ; i < len; i++ ) {
				función(
					elems[ i ], clave, crudo ?
						valor :
						valor.call( elems[ i ], i, fn( elems[ i ], clave ) )
				);
			}
		}
	}

	si ( encadenable ) {
		elementos de retorno;
	}

	// Obtiene
	si (a granel) {
		devolver fn.call( elems );
	}

	devolver len ? fn( elems[ 0 ], clave ): emptyGet;
};


// Coincide con la cadena discontinua para camelizar
var rmsPrefijo = /^-ms-/,
	rdashAlpha = /-([az])/g;

// Utilizado por camelCase como devolución de llamada a replace()
función fcamelCase(_all, letra) {
	devolver letra.toUpperCase();
}

// Convierte guiones en camelCase; utilizado por los módulos CSS y de datos
// Compatibilidad: IE <=9 - 11, Edge 12 - 15
// Microsoft olvidó incluir el prefijo de su proveedor (trac-9572)
función camelCase( cadena ) {
	devolver cadena.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = función( propietario ) {

	// Acepta solo:
	// - Nodo
	// - Nodo.ELEMENT_NODE
	// - Nodo.DOCUMENT_NODE
	// - Objeto
	// - Cualquier
	devolver propietario.nodeType === 1 || propietario.nodeType === 9 || !( +propietario.nodeType );
};




función Datos() {
	esto.expando = jQuery.expando + Data.uid++;
}

Datos.uid = 1;

Datos.prototipo = {

	caché: función( propietario ) {

		// Verificar si el objeto propietario ya tiene un caché
		var valor = propietario[ this.expando ];

		// Si no, crea uno
		si ( !valor ) {
			valor = {};

			// Podemos aceptar datos de nodos que no sean elementos en navegadores modernos,
			// pero no deberíamos, ver trac-8335.
			// Siempre devuelve un objeto vacío.
			si ( acceptData ( propietario ) ) {

				// Si es un nodo que es poco probable que se convierta en cadena o se repita en un bucle
				// utilizar asignación simple
				si ( propietario.nodeType ) {
					propietario[ this.expando ] = valor;

				// De lo contrario, asegúrelo en una propiedad no enumerable
				// configurable debe ser verdadero para permitir que la propiedad sea
				// se elimina cuando se eliminan los datos
				} demás {
					Objeto.defineProperty(propietario, this.expando, {
						valor: valor,
						configurable: verdadero
					} );
				}
			}
		}

		valor de retorno;
	},
	conjunto: función( propietario, datos, valor ) {
		propiedad var,
			caché = this.cache( propietario );

		// Identificador: [ propietario, clave, valor ] argumentos
		// Utilice siempre la tecla camelCase (gh-2257)
		si ( tipo de datos === "cadena" ) {
			cache[ camelCase( datos ) ] = valor;

		// Identificador: [ propietario, { propiedades } ] argumentos
		} demás {

			// Copiar las propiedades una por una al objeto de caché
			para (prop en datos) {
				caché[ camelCase( prop ) ] = datos[ prop ];
			}
		}
		devolver caché;
	},
	obtener: función( propietario, clave ) {
		tecla de retorno === ¿indefinido?
			this.cache( propietario ):

			// Utilice siempre la tecla camelCase (gh-2257)
			propietario[ this.expando ] && propietario[ this.expando ][ camelCase( clave ) ];
	},
	acceso: función( propietario, clave, valor ) {

		// En los casos en que:
		//
		// 1. No se especificó ninguna clave
		// 2. Se especificó una clave de cadena, pero no se proporcionó ningún valor
		//
		// Tome la ruta de "lectura" y permita que el método get la determine
		// qué valor devolver, respectivamente:
		//
		// 1. Todo el objeto de caché
		// 2. Los datos almacenados en la clave
		//
		si ( clave === indefinido ||
				( ( clave && tipo de clave === "cadena") && valor === indefinido) ) {

			devuelve esto.get( propietario, clave );
		}

		// Cuando la clave no es una cadena, o es tanto una clave como un valor
		// se especifican, establecen o amplían (objetos existentes) con:
		//
		// 1. Un objeto de propiedades
		// 2. Una clave y un valor
		//
		this.set( propietario, clave, valor );

		// Dado que la ruta "establecida" puede tener dos posibles puntos de entrada
		// devuelve los datos esperados en función de la ruta tomada[*]
		valor de retorno !== indefinido ? valor : clave;
	},
	eliminar: función(propietario, clave) {
		yo soy,
			caché = propietario[ this.expando ];

		si (caché === indefinido) {
			devolver;
		}

		si ( clave !== indefinido ) {

			// Admite matrices o cadenas de claves separadas por espacios
			si ( Array.isArray( clave ) ) {

				// Si la clave es una matriz de claves...
				// Siempre configuramos claves camelCase, así que elimínelas.
				clave = clave.map( camelCase );
			} demás {
				clave = camelCase( clave );

				// Si existe una clave con espacios, úsela.
				// De lo contrario, crea una matriz haciendo coincidir los espacios que no sean en blanco
				clave = ¿clave en caché?
					[ llave ] :
					( clave.match( rnothtmlwhite ) || [] );
			}

			i = clave.longitud;

			mientras ( yo-- ) {
				eliminar caché[ clave[ i ] ];
			}
		}

		// Eliminar expando si no hay más datos
		si ( clave === indefinido || jQuery.isEmptyObject( caché ) ) {

			// Soporte: Chrome <=35 - 45
			// El rendimiento de Webkit y Blink se ve afectado al eliminar propiedades
			// de los nodos DOM, por lo que se establece como indefinido en su lugar
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (error restringido)
			si ( propietario.nodeType ) {
				propietario[ this.expando ] = indefinido;
			} demás {
				eliminar propietario[this.expando];
			}
		}
	},
	hasData: función( propietario ) {
		var cache = propietario[ this.expando ];
		devuelve caché !== indefinido && !jQuery.isEmptyObject( caché );
	}
};
var dataPriv = nuevos Datos();

var datosUsuario = nuevos Datos();



// Resumen de la implementación
//
// 1. Aplicar compatibilidad superficial y semántica de API con la rama 1.9.x
// 2. Mejorar la capacidad de mantenimiento del módulo reduciendo el almacenamiento.
// rutas a un único mecanismo.
// 3. Utilice el mismo mecanismo único para admitir datos "privados" y "de usuario".
// 4. _Nunca_ exponga datos "privados" al código del usuario (TODO: eliminar _datos, _eliminar datos)
// 5. Evite exponer detalles de implementación en objetos de usuario (por ejemplo, propiedades expando)
// 6. Proporcionar un camino claro para la actualización de la implementación de WeakMap en 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[AZ]/g;

función getData(datos) {
	si (datos === "verdadero") {
		devuelve verdadero;
	}

	si (datos === "falso") {
		devuelve falso;
	}

	si (datos === "nulos") {
		devuelve nulo;
	}

	// Solo convierte a un número si no cambia la cadena
	si (datos === +datos + "" ) {
		devolver +datos;
	}

	si ( rbrace.test( datos ) ) {
		devuelve JSON.parse( datos );
	}

	devolver datos;
}

función dataAttr( elem, clave, datos ) {
	var nombre;

	// Si no se encontró nada internamente, intente obtener cualquier
	// datos del atributo data-* de HTML5
	si (datos === indefinido && elem.nodeType === 1) {
		nombre = "datos-" + clave.replace( rmultiDash, "-$&" ).toLowerCase();
		datos = elem.getAttribute( nombre );

		si ( tipo de datos === "cadena" ) {
			intentar {
				datos = obtenerDatos( datos );
			} captura ( e ) {}

			// Nos aseguramos de configurar los datos para que no se modifiquen más adelante
			dataUser.set( elem, clave, datos );
		} demás {
			datos = indefinido;
		}
	}
	devolver datos;
}

jQuery.extend( {
	hasData: función( elem ) {
		devolver datosUser.hasData( elem ) || datosPriv.hasData(elem);
	},

	datos: función( elem, nombre, datos ) {
		devolver datosUser.access( elem, nombre, datos );
	},

	removeData: función( elemento, nombre ) {
		dataUser.remove( elem, nombre );
	},

	// TODO: Ahora que todas las llamadas a _data y _removeData han sido reemplazadas
	// con llamadas directas a los métodos dataPriv, estos pueden quedar obsoletos.
	_data: función( elemento, nombre, datos ) {
		devolver datosPriv.access( elem, nombre, datos );
	},

	_removeData: función( elem, nombre ) {
		dataPriv.remove( elem, nombre );
	}
} );

jQuery.fn.extend( {
	datos: función( clave, valor ) {
		var i, nombre, datos,
			elem = este[ 0 ],
			attrs = elem && elem.atributos;

		// Obtiene todos los valores
		si ( clave === indefinida ) {
			si ( este.longitud ) {
				datos = datosUser.get( elem );

				si ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.longitud;
					mientras ( yo-- ) {

						// Compatibilidad: solo IE 11
						// Los elementos attrs pueden ser nulos (trac-14894)
						si ( atributos[i]) {
							nombre = attrs[ i ].nombre;
							si ( nombre.indexOf( "datos-" ) === 0 ) {
								nombre = camelCase( nombre.slice( 5 ) );
								dataAttr( elem, nombre, data[ nombre ] );
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", verdadero);
				}
			}

			devolver datos;
		}

		// Establece múltiples valores
		si ( tipo de clave === "objeto" ) {
			devuelve esto.each( función() {
				dataUser.set( esto, clave );
			} );
		}

		devolver acceso( esto, función( valor ) {
			var datos;

			// El objeto jQuery que llama (elemento coincide) no está vacío
			// (y por lo tanto tiene un elemento que aparece en este [0]) y el
			// El parámetro `value` no estaba indefinido. Un objeto jQuery vacío
			// dará como resultado "undefined" para elem = this[ 0 ] que
			// lanza una excepción si se intenta leer un caché de datos.
			si ( elem && valor === indefinido ) {

				//Intentar obtener datos de la caché
				// La clave siempre estará en formato camelCased en Data
				datos = datosUser.get( elem, clave );
				si (datos !== indefinido) {
					devolver datos;
				}

				// Intentar "descubrir" los datos en
				// Datos personalizados HTML5-* atributos
				datos = dataAttr( elem, clave );
				si (datos !== indefinido) {
					devolver datos;
				}

				Lo intentamos mucho, pero los datos no existen.
				devolver;
			}

			//Establecer los datos...
			esto.each(función() {

				// Siempre almacenamos la clave en formato camelCased
				dataUser.set(este, clave, valor);
			} );
		}, null, valor, argumentos.longitud > 1, null, verdadero );
	},

	removeData: función( tecla ) {
		devuelve esto.each( función() {
			dataUser.remove( esto, clave );
		} );
	}
} );


jQuery.extend( {
	cola: función( elemento, tipo, datos ) {
		var cola;

		si ( elemento ) {
			tipo = ( tipo || "fx" ) + "cola";
			cola = dataPriv.get( elem, tipo );

			// Acelera la eliminación de la cola saliendo rápidamente si se trata solo de una búsqueda
			si (datos) {
				si ( !cola || Array.isArray( datos ) ) {
					cola = dataPriv.access( elem, tipo, jQuery.makeArray( datos ) );
				} demás {
					cola.push( datos );
				}
			}
			cola de retorno || [];
		}
	},

	desencolar: función( elemento, tipo ) {
		tipo = tipo || "fx";

		var cola = jQuery.queue( elem, tipo ),
			longitudInicio = longitud de cola,
			fn = cola.shift(),
			ganchos = jQuery._queueHooks( elemento, tipo ),
			siguiente = función() {
				jQuery.dequeue( elemento, tipo );
			};

		// Si se quita la cola de efectos, elimine siempre el centinela de progreso
		si ( fn === "en progreso" ) {
			fn = cola.shift();
			longitud inicial--;
		}

		si ( fn ) {

			// Agregue un centinela de progreso para evitar que la cola de efectos se
			// sacado de la cola automáticamente
			si ( tipo === "fx" ) {
				cola.unshift( "en progreso" );
			}

			// Limpiar la última función de detención de la cola
			eliminar ganchos.stop;
			fn.call( elem, siguiente, ganchos );
		}

		si ( !startLength && ganchos ) {
			ganchos.vacío.fuego();
		}
	},

	// No público: genera un objeto queueHooks o devuelve el actual
	_queueHooks: función( elemento, tipo ) {
		var clave = tipo + "queueHooks";
		devuelve datosPriv.get( elem, clave ) || datosPriv.access( elem, clave, {
			vacío: jQuery.Callbacks( "una vez memoria" ).add( función() {
				dataPriv.remove( elem, [ tipo + "cola", clave ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	cola: función(tipo, datos) {
		var establecedor = 2;

		si ( tipo de tipo !== "cadena" ) {
			datos = tipo;
			tipo = "fx";
			setter--;
		}

		si ( argumentos.length < setter ) {
			devuelve jQuery.queue( this[ 0 ], tipo );
		}

		devolver datos === ¿indefinido?
			este :
			esto.each(función() {
				var cola = jQuery.queue( this, tipo, datos );

				// Asegurar un gancho para esta cola
				jQuery._queueHooks( este, tipo );

				si ( tipo === "fx" && cola[ 0 ] !== "en progreso" ) {
					jQuery.dequeue(este, tipo);
				}
			} );
	},
	desencolar: función(tipo) {
		devuelve esto.each( función() {
			jQuery.dequeue(este, tipo);
		} );
	},
	clearQueue: función(tipo) {
		devuelve esto.queue( tipo || "fx", [] );
	},

	// Obtener una promesa resuelta cuando hay colas de un determinado tipo
	// se vacían (fx es el tipo por defecto)
	promesa: función( tipo, obj ) {
		variable temporal,
			cuenta = 1,
			aplazar = jQuery.Deferred(),
			elementos = esto,
			i = esta.longitud,
			resolver = función() {
				si ( !(--count) ) {
					defer.resolveWith( elementos, [ elementos ] );
				}
			};

		si ( tipo de tipo !== "cadena" ) {
			obj = tipo;
			tipo = indefinido;
		}
		tipo = tipo || "fx";

		mientras ( yo-- ) {
			tmp = dataPriv.get( elementos[ i ], tipo + "queueHooks" );
			si ( tmp && tmp.vacío ) {
				contar++;
				tmp.empty.add( resolver );
			}
		}
		resolver();
		devolver aplazar.promesa( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).fuente;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


var cssExpand = [ "Arriba", "Derecha", "Abajo", "Izquierda" ];

var documentElement = documento.documentElement;



	var isAttached = función( elem ) {
			devuelve jQuery.contains( elem.ownerDocument, elem );
		},
		compuesto = { compuesto: verdadero };

	// Compatibilidad: solo IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2
	// Verificar la conexión entre los límites del shadow DOM cuando sea posible (gh-3504)
	// Compatibilidad: solo iOS 10.0-10.2
	// Las primeras versiones de iOS 10 admiten `attachShadow` pero no `getRootNode`,
	// lo que genera errores. Necesitamos verificar `getRootNode`.
	si (documentElement.getRootNode) {
		isAttached = función( elem ) {
			devuelve jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( compuesto ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = función( elem, el ) {

		// isHiddenWithinTree podría llamarse desde la función jQuery#filter;
		// en ese caso, el elemento será el segundo argumento
		elem = el || elem;

		// El estilo en línea triunfa sobre todo
		devolver elem.style.display === "ninguno" ||
			elemento.estilo.mostrar === "" &&

			// De lo contrario, verifique el estilo calculado
			// Soporte: Firefox <=43 - 45
			// Los elementos desconectados pueden tener una visualización calculada: ninguna, por lo que primero confirme que el elemento está
			// en el documento.
			está adjunto( elemento ) &&

			jQuery.css( elem, "mostrar" ) === "ninguno";
	};



función adjustCSS( elem, prop, valueParts, tween ) {
	var ajustado, escala,
		maxIteraciones = 20,
		valorActual = interpolación ?
			función() {
				devolver tween.cur();
			} :
			función() {
				devuelve jQuery.css( elem, prop, "" );
			},
		inicial = valorActual(),
		unidad = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Se requiere el cálculo del valor inicial para posibles desajustes de unidades
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[prop ] || unidad !== "px" && +inicial ) &&
			rcssNum.exec(jQuery.css(elem, propiedad) );

	si ( initialInUnit && initialInUnit[ 3 ] !== unidad ) {

		// Soporte: Firefox <=54
		// Reducir a la mitad el valor objetivo de la iteración para evitar interferencias de los límites superiores de CSS (gh-2144)
		inicial = inicial / 2;

		// Unidades de confianza informadas por jQuery.css
		unidad = unidad || initialInUnit[ 3 ];

		// Aproximación iterativa desde un punto de partida distinto de cero
		inicialEnUnidad = +inicial || 1;

		mientras (maxIteraciones--) {

			// Evaluamos y actualizamos nuestra mejor conjetura (duplicando las conjeturas que resultan en cero).
			// Finalizar si la escala es igual o cruza 1 (lo que hace que el producto antiguo*nuevo no sea positivo).
			jQuery.style( elem, prop, initialInUnit + unidad );
			si ( ( 1 - escala ) * ( 1 - ( escala = valorActual() / inicial || 0.5 ) ) <= 0 ) {
				maxIteraciones = 0;
			}
			initialInUnit = initialInUnit / escala;

		}

		inicialEnUnidad = inicialEnUnidad * 2;
		jQuery.style( elem, prop, initialInUnit + unidad );

		// Asegúrese de actualizar las propiedades de interpolación más adelante
		valorPartes = valorPartes || [];
	}

	si (valorPartes) {
		inicialEnUnidad = +inicialEnUnidad || +inicial || 0;

		// Aplicar desplazamiento relativo (+=/-=) si se especifica
		ajustado = valorPartes[ 1 ] ?
			initialInUnit + ( valorPartes[ 1 ] + 1 ) * valorPartes[ 2 ] :
			+valorPartes[ 2 ];
		si ( interpolación ) {
			tween.unit = unidad;
			tween.start = inicialEnUnidad;
			tween.end = ajustado;
		}
	}
	retorno ajustado;
}


var predeterminadoDisplayMap = {};

función getDefaultDisplay( elem ) {
	temperatura variable,
		doc = elem.propietarioDocumento,
		nombreNodo = elem.nombreNodo,
		display = defaultDisplayMap[nodeName];

	si (mostrar) {
		volver a mostrar la pantalla;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	mostrar = jQuery.css( temp, "mostrar" );

	temp.parentNode.removeChild( temp );

	si (mostrar === "ninguno") {
		display = "bloque";
	}
	defaultDisplayMap[nodeName] = pantalla;

	volver a mostrar la pantalla;
}

función showHide( elementos, mostrar ) {
	var pantalla, elemento,
		valores = [],
		índice = 0,
		longitud = elementos.longitud;

	// Determinar un nuevo valor de visualización para los elementos que necesitan cambiar
	para ( ; índice < longitud; índice++ ) {
		elem = elementos[índice];
		si ( !elem.style ) {
			continuar;
		}

		pantalla = elem.style.display;
		si ( mostrar ) {

			// Dado que forzamos la visibilidad sobre elementos ocultos en cascada, una acción inmediata (y lenta)
			// Se requiere una verificación en este primer bucle a menos que tengamos un valor de visualización no vacío (ya sea
			// en línea o a punto de ser restaurado)
			si (mostrar === "ninguno") {
				valores[índice] = dataPriv.get(elem, "mostrar") || null;
				si ( !valores[índice] ) {
					elem.style.display = "";
				}
			}
			si ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				valores[índice] = getDefaultDisplay(elem);
			}
		} demás {
			si ( mostrar !== "ninguno" ) {
				valores[índice] = "ninguno";

				//Recuerda lo que estamos sobrescribiendo
				dataPriv.set( elem, "mostrar", mostrar );
			}
		}
	}

	// Establezca la visualización de los elementos en un segundo bucle para evitar el reflujo constante
	para (índice = 0; índice < longitud; índice++) {
		si ( valores[índice] != null ) {
			elementos[ índice ].style.display = valores[ índice ];
		}
	}

	elementos de retorno;
}

jQuery.fn.extend( {
	mostrar: función() {
		devolver showHide( esto, verdadero );
	},
	ocultar: función() {
		devolver showHide( esto );
	},
	alternar: función(estado) {
		si ( tipo de estado === "booleano" ) {
			estado de retorno ? this.show() : this.hide();
		}

		devuelve esto.each( función() {
			si ( isHiddenWithinTree ( esto ) ) {
				jQuery( esto ).show();
			} demás {
				jQuery( esto ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:casilla de verificación|radio)$/i );

var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^módulo$|\/(?:java|ecma)script/i );



( función() {
	var fragmento = documento.createDocumentFragment(),
		div = fragmento.appendChild( documento.createElement( "div" ) ),
		entrada = document.createElement( "entrada" );

	// Compatibilidad: solo Android 4.0 - 4.3
	// Verificar estado perdido si el nombre está configurado (trac-11217)
	// Soporte: Aplicaciones web de Windows (WWA)
	// `name` y `type` deben usar .setAttribute para WWA (trac-14901)
	entrada.setAttribute( "tipo", "radio" );
	input.setAttribute( "marcado", "marcado" );
	entrada.setAttribute( "nombre", "t" );

	div.appendChild( entrada );

	// Compatibilidad: solo Android <=4.1
	// El WebKit más antiguo no clona correctamente el estado marcado en los fragmentos
	soporte.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Compatibilidad: solo IE <=11
	// Asegúrese de que el valor predeterminado del área de texto (y la casilla de verificación) esté clonado correctamente
	div.innerHTML = "<área de texto>x</área de texto>";
	soporte.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Compatibilidad: solo IE <=9
	// IE <=9 reemplaza las etiquetas <option> con su contenido cuando se insertan fuera de
	// el elemento seleccionado.
	div.innerHTML = "<opción></opción>";
	soporte.opcion = !!div.lastChild;
} )();


//Tenemos que cerrar estas etiquetas para soportar XHTML (trac-13200)
var wrapMap = {

	// Los analizadores XHTML no insertan elementos mágicamente en el
	// de la misma manera que lo hacen los analizadores de sopa de etiquetas. Por lo tanto, no podemos acortar
	// esto omitiendo <tbody> u otros elementos requeridos.
	thead: [ 1, "<tabla>", "</tabla>" ],
	columna: [ 2, "<tabla><grupo de columnas>", "</grupo de columnas></tabla>" ],
	tr: [ 2, "<tabla><tbody>", "</tbody></tabla>" ],
	td: [ 3, "<tabla><tbody><tr>", "</tr></tbody></tabla>" ],

	_predeterminado: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Compatibilidad: solo IE <=9
si ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<seleccionar múltiple='múltiple'>", "</seleccionar>" ];
}


función getAll( contexto, etiqueta ) {

	// Compatibilidad: solo IE <=9 - 11
	// Utilice typeof para evitar la invocación de métodos sin argumentos en objetos host (trac-15151)
	var ret;

	si ( tipo de contexto.getElementsByTagName !== "indefinido" ) {
		ret = contexto.getElementsByTagName( etiqueta || "*" );

	} de lo contrario si ( tipo de contexto.querySelectorAll !== "indefinido" ) {
		ret = context.querySelectorAll( etiqueta || "*" );

	} demás {
		ret = [];
	}

	si ( etiqueta === indefinido || etiqueta && nodeName( contexto, etiqueta ) ) {
		devuelve jQuery.merge( [ contexto ], ret );
	}

	volver ret;
}


// Marcar los scripts como ya evaluados
función setGlobalEval( elementos, refElements ) {
	var i = 0,
		l = elementos.longitud;

	para ( ; i < l; i++ ) {
		datosPriv.conjunto(
			elementos[ i ],
			"evaluación global",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

función buildFragment( elementos, contexto, scripts, selección, ignorado ) {
	var elem, tmp, etiqueta, envoltura, adjunto, j,
		fragmento = contexto.createDocumentFragment(),
		nodos = [],
		yo = 0,
		l = elementos.longitud;

	para ( ; i < l; i++ ) {
		elem = elems[ i ];

		si ( elemento || elemento === 0 ) {

			//Agregar nodos directamente
			si ( toType( elem ) === "objeto" ) {

				// Compatibilidad: solo Android <=4.0, solo PhantomJS 1
				// push.apply(_, arraylike) lanza una excepción en el antiguo WebKit
				jQuery.merge( nodos, elem.nodeType ? [ elem ] : elem );

			// Convertir un nodo que no sea HTML en un nodo de texto
			} de lo contrario si ( !rhtml.test( elem ) ) {
				nodos.push( contexto.createTextNode( elem ) );

			// Convertir HTML en nodos DOM
			} demás {
				tmp = tmp || fragmento.appendChild( contexto.createElement( "div" ) );

				// Deserializar una representación estándar
				etiqueta = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[etiqueta] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Desciende a través de los envoltorios hasta el contenido correcto
				j = envolver[ 0 ];
				mientras ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Compatibilidad: solo Android <=4.0, solo PhantomJS 1
				// push.apply(_, arraylike) lanza una excepción en el antiguo WebKit
				jQuery.merge( nodos, tmp.childNodes );

				// Recuerde el contenedor de nivel superior
				tmp = fragmento.primerHijo;

				// Asegúrese de que los nodos creados estén huérfanos (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Eliminar el contenedor del fragmento
	fragmento.textContent = "";

	yo = 0;
	mientras ( ( elem = nodos[ i++ ] ) ) {

		// Omitir elementos que ya están en la colección de contexto (trac-4087)
		si ( selección && jQuery.inArray( elem, selección ) > -1 ) {
			si ( ignorado ) {
				ignorado.push( elem );
			}
			continuar;
		}

		adjunto = isAttached( elem );

		// Añadir al fragmento
		tmp = getAll(fragmento.appendChild(elem), "script" );

		// Conservar el historial de evaluación del script
		si (adjunto) {
			setGlobalEval(temporal);
		}

		// Captura ejecutables
		si (scripts) {
			j = 0;
			mientras ( ( elem = tmp[ j++ ] ) ) {
				si ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	devolver fragmento;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

función returnTrue() {
	devuelve verdadero;
}

función returnFalse() {
	devuelve falso;
}

función en( elem, tipos, selector, datos, fn, uno ) {
	var origFn, tipo;

	// Los tipos pueden ser un mapa de tipos/controladores
	si ( tipo de tipos === "objeto" ) {

		// ( tipos-Objeto, selector, datos )
		si ( tipo de selector !== "cadena" ) {

			// ( tipos-Objeto, datos )
			datos = datos || selector;
			selector = indefinido;
		}
		para ( tipo en tipos ) {
			on( elem, tipo, selector, datos, tipos[ tipo ], uno );
		}
		elemento de retorno;
	}

	si (datos == nulo && fn == nulo) {

		// ( tipos, función )
		función = selector;
		datos = selector = indefinido;
	} de lo contrario si ( fn == null ) {
		si ( tipo de selector === "cadena" ) {

			// (tipos, selector, función)
			fn = datos;
			datos = indefinido;
		} demás {

			// (tipos, datos, función)
			fn = datos;
			datos = selector;
			selector = indefinido;
		}
	}
	si ( fn === falso ) {
		fn = devolverFalso;
	} de lo contrario si ( !fn ) {
		elemento de retorno;
	}

	si ( uno === 1 ) {
		origFn = fn;
		fn = función( evento ) {

			// Se puede utilizar un conjunto vacío, ya que el evento contiene la información
			jQuery().off( evento );
			devolver origFn.apply( esto, argumentos );
		};

		// Use el mismo guid para que quien llama pueda eliminarlo usando origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	devuelve elem.each(función() {
		jQuery.event.add(este, tipos, función, datos, selector);
	} );
}

/*
 * Funciones auxiliares para gestionar eventos: no forman parte de la interfaz pública.
 * Felicitaciones a la biblioteca addEvent de Dean Edwards por muchas de las ideas.
 */
jQuery.evento = {

	global: {},

	añadir: función( elem, tipos, manejador, datos, selector ) {

		var handleObjIn, manejadorDeEvento, tmp,
			eventos, t, handleObj,
			especial, manejadores, tipo, espacios de nombres, origType,
			elemData = datosPriv.get( elem );

		// Adjunte eventos únicamente a objetos que acepten datos
		si ( !acceptData( elem ) ) {
			devolver;
		}

		// El llamador puede pasar un objeto de datos personalizados en lugar del controlador
		si ( manejador.manejador ) {
			handleObjIn = manejador;
			controlador = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Asegúrese de que los selectores no válidos generen excepciones en el momento de la conexión
		// Evaluar contra documentElement en caso de que elem sea un nodo que no sea un elemento (por ejemplo, document)
		si (selector) {
			jQuery.find.matchesSelector(documentElement, selector);
		}

		// Asegúrese de que el controlador tenga una identificación única, que se utilizará para encontrarlo o eliminarlo más tarde
		si ( !handler.guid ) {
			manejador.guid = jQuery.guid++;
		}

		// Inicialice la estructura de eventos del elemento y el controlador principal, si este es el primero
		si ( !( eventos = elemData.eventos ) ) {
			eventos = elemData.events = Object.create( null );
		}
		si ( !( manejadorDeEvento = elemData.handle ) ) {
			manejadorDeEventos = elemData.handle = function( e ) {

				// Descarta el segundo evento de un jQuery.event.trigger() y
				// cuando se llama a un evento después de que se ha descargado una página
				devuelve tipo de jQuery !== "indefinido" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ): indefinido;
			};
		}

		// Manejar múltiples eventos separados por un espacio
		tipos = ( tipos || "" ).match( rnothtmlwhite ) || [ "" ];
		t = tipos.longitud;
		mientras ( t-- ) {
			tmp = rtypenamespace.exec( tipos[ t ] ) || [];
			tipo = origType = tmp[ 1 ];
			espacios de nombres = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Debe haber un tipo, no se pueden adjuntar controladores que solo abarquen espacios de nombres
			si ( !tipo ) {
				continuar;
			}

			// Si el evento cambia su tipo, utilice los controladores de eventos especiales para el tipo modificado
			especial = jQuery.evento.especial[ tipo ] || {};

			// Si se define el selector, determina el tipo de API de evento especial; de lo contrario, se proporciona el tipo
			tipo = ( selector ? especial.delegateType : especial.bindType ) || tipo;

			// Actualización especial basada en el tipo recién restablecido
			especial = jQuery.evento.especial[ tipo ] || {};

			// handleObj se pasa a todos los controladores de eventos
			handleObj = jQuery.extend( {
				tipo: tipo,
				tipoOrig: tipoOrig,
				datos: datos,
				manejador: manejador,
				guid: manejador.guid,
				selector: selector,
				necesitaContexto: selector && jQuery.expr.match.necesitaContexto.test( selector ),
				espacio de nombres: espacios de nombres.join( "." )
			}, manejarObjIn );

			// Inicializamos la cola del controlador de eventos si somos los primeros
			si ( !( manejadores = eventos[ tipo ] ) ) {
				manejadores = eventos[ tipo ] = [];
				manejadores.delegateCount = 0;

				// Utilice addEventListener solo si el controlador de eventos especiales devuelve falso
				si ( !special.setup ||
					special.setup.call( elem, datos, espacios de nombres, eventHandle ) === false ) {

					si ( elem.addEventListener ) {
						elem.addEventListener( tipo, manejadorDeEvento );
					}
				}
			}

			si ( especial.add ) {
				especial.add.call( elem, handleObj );

				si ( !handleObj.handler.guid ) {
					handleObj.handler.guid = manejador.guid;
				}
			}

			// Agregar a la lista de manejadores del elemento, delegados al frente
			si (selector) {
				manejadores.splice( manejadores.delegateCount++, 0, handleObj );
			} demás {
				manejadores.push( handleObj );
			}

			// Realice un seguimiento de los eventos que se han utilizado alguna vez, para optimizarlos
			jQuery.event.global[ tipo ] = verdadero;
		}

	},

	// Separar un evento o un conjunto de eventos de un elemento
	eliminar: función( elem, tipos, manejador, selector, mappedTypes ) {

		var j, conteo original, temporal,
			eventos, t, handleObj,
			especial, manejadores, tipo, espacios de nombres, origType,
			elemData = datosPriv.hasData( elem ) && datosPriv.get( elem );

		si ( !elemData || !( eventos = elemData.eventos ) ) {
			devolver;
		}

		// Una vez para cada tipo.namespace en tipos; el tipo puede omitirse
		tipos = ( tipos || "" ).match( rnothtmlwhite ) || [ "" ];
		t = tipos.longitud;
		mientras ( t-- ) {
			tmp = rtypenamespace.exec( tipos[ t ] ) || [];
			tipo = origType = tmp[ 1 ];
			espacios de nombres = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Desvincular todos los eventos (en este espacio de nombres, si se proporciona) para el elemento
			si ( !tipo ) {
				para (escriba eventos) {
					jQuery.event.remove( elem, tipo + tipos[ t ], controlador, selector, verdadero );
				}
				continuar;
			}

			especial = jQuery.evento.especial[ tipo ] || {};
			tipo = ( selector ? especial.delegateType : especial.bindType ) || tipo;
			manejadores = eventos[ tipo ] || [];
			tiempo = tiempo[ 2 ] &&
				nueva RegExp( "(^|\\.)" + espacios de nombres.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Eliminar eventos coincidentes
			origCount = j = manejadores.length;
			mientras ( j-- ) {
				handleObj = manejadores[ j ];

				si ( ( tiposMapeDate || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					manejadores.splice( j, 1 );

					si ( handleObj.selector ) {
						manejadores.delegateCount--;
					}
					si (especial.eliminar) {
						especial.eliminar.llamada( elem, handleObj );
					}
				}
			}

			// Eliminar el controlador de eventos genérico si eliminamos algo y no existen más controladores
			// (evita la posibilidad de una recursión sin fin durante la eliminación de controladores de eventos especiales)
			si ( origCount && !handlers.length ) {
				si ( !special.teardown ||
					especial.teardown.call( elem, espacios de nombres, elemData.handle ) === falso ) {

					jQuery.removeEvent( elem, tipo, elemData.handle );
				}

				eliminar eventos[tipo];
			}
		}

		// Eliminar datos y el expando si ya no se utilizan
		si ( jQuery.isEmptyObject( eventos ) ) {
			dataPriv.remove( elem, "manejar eventos" );
		}
	},

	despacho: función( nativeEvent ) {

		var i, j, ret, emparejado, handleObj, handlerQueue,
			args = new Array( argumentos.longitud ),

			// Crea un jQuery.Event que se pueda escribir a partir del objeto de evento nativo
			evento = jQuery.event.fix( nativeEvent ),

			manejadores = (
				dataPriv.get(this, "eventos") ||Object.create(null)
			)[ tipo.evento ] || [],
			especial = jQuery.evento.especial[ evento.tipo ] || {};

		// Utilice jQuery.Event corregido en lugar del evento nativo (de solo lectura)
		args[ 0 ] = evento;

		para ( i = 1; i < argumentos.longitud; i++ ) {
			args[ i ] = argumentos[ i ];
		}

		evento.delegateTarget = esto;

		// Llama al gancho preDispatch para el tipo mapeado y déjalo salir si lo deseas
		si ( especial.preDispatch && especial.preDispatch.call( este, evento ) === falso ) {
			devolver;
		}

		// Determinar controladores
		handlerQueue = jQuery.event.handlers.call( this, evento, manejadores );

		// Ejecute primero a los delegados; es posible que quieran detener la propagación debajo de nosotros
		yo = 0;
		mientras ( ( coincidente = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			evento.currentTarget = coincidente.elem;

			j = 0;
			mientras ( ( handleObj = matched.handlers[ j++ ] ) &&
				!evento.isImmediatePropagationStopped() ) {

				// Si el evento tiene espacio de nombres, entonces cada controlador solo se invoca si es
				// especialmente universal o sus espacios de nombres son un superconjunto del evento.
				si ( !event.rnamespace || handleObj.namespace === falso ||
					evento.rnamespace.test( handleObj.namespace ) ) {

					evento.handleObj = handleObj;
					evento.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( coincidente.elem, args );

					si ( ret !== indefinido ) {
						si ( ( evento.resultado = ret ) === falso ) {
							evento.preventDefault();
							evento.stopPropagation();
						}
					}
				}
			}
		}

		// Llamar al gancho postDispatch para el tipo asignado
		si ( especial.postDispatch ) {
			especial.postDispatch.call( este, evento );
		}

		devolver evento.resultado;
	},

	manejadores: función( evento, manejadores ) {
		var i, handleObj, sel, manejadores coincidentes, selectores coincidentes,
			manejadorQueue = [],
			delegateCount = manejadores.delegateCount,
			cur = evento.objetivo;

		// Encontrar controladores de delegados
		si (delegadoCount &&

			// Soporte: IE <=9
			// Árboles de instancias SVG de agujero negro <use> (trac-13180)
			cur.tipo de nodo &&

			// Soporte: Firefox <=42
			// Suprimir clics que violan las especificaciones e indican un botón de puntero no principal (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Compatibilidad: solo IE 11
			// ...pero no los "clics" de las teclas de flecha de las entradas de radio, que pueden tener el `botón` -1 (gh-2343)
			!( tipo.evento === "clic" && botón.evento >= 1 ) ) {

			para ( ; cur !== esto; cur = cur.parentNode || esto ) {

				// No comprobar elementos no válidos (trac-13208)
				// No procesar clics en elementos deshabilitados (trac-6911, trac-8165, trac-11382, trac-11764)
				si ( cur.nodeType === 1 && !( evento.type === "clic" && cur.disabled === verdadero ) ) {
					manejadores coincidentes = [];
					Selectores coincidentes = {};
					para ( i = 0; i < delegateCount; i++ ) {
						handleObj = manejadores[ i ];

						// No entre en conflicto con las propiedades de Object.prototype (trac-13203)
						sel = handleObj.selector + " ";

						si (matchedSelectors[sel] === indefinido) {
							Selectores coincidentes[sel] = handleObj.needsContext?
								jQuery(sel, this).index(cur) > -1:
								jQuery.find(sel, this, null, [ cur ]).length;
						}
						si ( selectores coincidentes [sel ] ) {
							manejadores coincidentes.push( handleObj );
						}
					}
					si (matchedHandlers.length) {
						handlerQueue.push( { elem: cur, manejadores: matchedHandlers } );
					}
				}
			}
		}

		// Agregue los controladores restantes (vinculados directamente)
		cur = esto;
		si ( delegateCount < manejadores.length ) {
			handlerQueue.push( { elem: cur, manejadores: manejadores.slice( delegateCount ) } );
		}

		retorna handlerQueue;
	},

	addProp: función(nombre, gancho) {
		Objeto.defineProperty(jQuery.Event.prototype, nombre, {
			enumerable: verdadero,
			configurable: verdadero,

			obtener: isFunction( gancho ) ?
				función() {
					si ( este.eventooriginal ) {
						retorno gancho( this.originalEvent );
					}
				} :
				función() {
					si ( este.eventooriginal ) {
						devuelve este.originalEvent[ nombre ];
					}
				},

			conjunto: función(valor) {
				Objeto.defineProperty(este, nombre, {
					enumerable: verdadero,
					configurable: verdadero,
					escribible: verdadero,
					valor: valor
				} );
			}
		} );
	},

	arreglo: función(originalEvent) {
		devolver originalEvent[jQuery.expando] ?
			Evento original:
			nuevo jQuery.Event(originalEvent);
	},

	especial: {
		carga: {

			// Evitar que los eventos de image.load activados se transmitan a window.load
			noBubble: verdadero
		},
		haga clic: {

			// Utilice eventos nativos para garantizar el estado correcto de las entradas verificables
			configuración: función(datos) {

				// Para compresibilidad mutua con _default, reemplace el acceso `this` con una variable local.
				// `|| data` es un código muerto cuyo único propósito es preservar la variable a través de la minimización.
				var el = esto || datos;

				// Reclama el primer manejador
				si ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "entrada" ) ) {

					// dataPriv.set( el, "hacer clic", ... )
					apalancamientoNativo( el, "clic", verdadero );
				}

				// Devuelve falso para permitir el procesamiento normal en el llamador
				devuelve falso;
			},
			disparador: función(datos) {

				// Para compresibilidad mutua con _default, reemplace el acceso `this` con una variable local.
				// `|| data` es un código muerto cuyo único propósito es preservar la variable a través de la minimización.
				var el = esto || datos;

				// Forzar la configuración antes de activar un clic
				si ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "entrada" ) ) {

					apalancamientoNativo( el, "clic" );
				}

				// Devuelve un valor no falso para permitir la propagación normal de la ruta del evento
				devuelve verdadero;
			},

			// Para lograr coherencia entre navegadores, suprima el .click() nativo en los enlaces
			// También lo evitamos si actualmente estamos dentro de una pila de eventos nativos aprovechada
			_predeterminado: función( evento ) {
				var objetivo = evento.objetivo;
				devuelve rcheckableType.test(objetivo.tipo) &&
					objetivo.click && nodeName( objetivo, "entrada") &&
					dataPriv.get( objetivo, "clic" ) ||
					nodeName( objetivo, "a" );
			}
		},

		antes de descargar: {
			postDispatch: función( evento ) {

				// Compatibilidad: Firefox 20+
				// Firefox no avisa si el campo returnValue no está configurado.
				si ( evento.resultado !== indefinido && evento.eventoOriginal ) {
					evento.eventooriginal.valorDeRetorno = evento.resultado;
				}
			}
		}
	}
};

// Asegúrese de la presencia de un detector de eventos que controle los eventos activados manualmente.
// eventos sintéticos interrumpiendo el progreso hasta que se vuelvan a invocar en respuesta a
// eventos *nativos* que se activan directamente, lo que garantiza que los cambios de estado se realicen
// ya ocurrió antes de que se invocaran otros oyentes.
función apalancamientoNativo( el, tipo, isSetup ) {

	// La falta de `isSetup` indica una llamada de activación, que debe forzar la configuración a través de jQuery.event.add
	si ( !isSetup ) {
		si ( dataPriv.get( el, tipo ) === indefinido ) {
			jQuery.event.add( el, tipo, returnTrue );
		}
		devolver;
	}

	// Registra el controlador como un controlador universal especial para todos los espacios de nombres de eventos
	dataPriv.set (el, tipo, falso);
	jQuery.event.add( el, tipo, {
		espacio de nombres: falso,
		manejador: función( evento ) {
			resultado var,
				guardado = dataPriv.get( this, type );

			si ( ( evento.isTrigger & 1 ) && este[ tipo ] ) {

				// Interrumpir el procesamiento del evento sintético externo .trigger()ed
				si ( !guardado ) {

					// Almacena argumentos para usar al manejar el evento nativo interno
					// Siempre habrá al menos un argumento (un objeto de evento), por lo que esta matriz
					// no se confundirá con un objeto de captura sobrante.
					guardado = slice.call( argumentos );
					dataPriv.set(este, tipo, guardado);

					// Activa el evento nativo y captura su resultado
					este[tipo]();
					resultado = dataPriv.get( este, tipo );
					dataPriv.set(este, tipo, falso);

					si ( guardado !== resultado ) {

						// Cancelar el evento sintético externo
						evento.stopImmediatePropagation();
						evento.preventDefault();

						devolver resultado;
					}

				// Si este es un evento sintético interno para un evento con un sustituto burbujeante
				// (enfoque o desenfoque), suponga que el sustituto ya se propagó desde el disparador
				// el evento nativo y evitar que vuelva a suceder aquí.
				// Técnicamente, esto genera un orden incorrecto con respecto a `.trigger()` (en el que el
				// el sustituto burbujeante se propaga *después* de la base no burbujeante), pero eso parece
				//menos malo que la duplicación.
				} de lo contrario si ( ( jQuery.event.special[ tipo ] || {} ).delegateType ) {
					evento.stopPropagation();
				}

			// Si se trata de un evento nativo activado anteriormente, ahora todo está en orden.
			// Dispara un evento sintético interno con los argumentos originales
			} de lo contrario si ( guardado ) {

				//...y capturar el resultado
				dataPriv.set(este, tipo, jQuery.event.trigger(
					guardado[ 0 ],
					guardado.slice( 1 ),
					este
				) );

				// Anular el manejo del evento nativo por todos los controladores jQuery mientras se permite
				// controladores nativos en el mismo elemento para ejecutar. En el objetivo, esto se logra
				// deteniendo la propagación inmediata solo en el evento jQuery. Sin embargo,
				// el evento nativo se vuelve a envolver con uno jQuery en cada nivel del
				// propagación, por lo que la única forma de detenerla para jQuery es detenerla para
				// todos a través de `stopPropagation()` nativo. Esto no es un problema para
				// enfoque/desenfoque que no crea burbujas, pero también impide hacer clic en las casillas de verificación
				// y radios. Aceptamos esta limitación.
				evento.stopPropagation();
				evento.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = función( elemento, tipo, identificador ) {

	// Este "si" es necesario para objetos simples
	si ( elem.removeEventListener ) {
		elem.removeEventListener( tipo, identificador );
	}
};

jQuery.Event = función( origen, propiedades ) {

	// Permitir la instanciación sin la palabra clave 'new'
	si ( !( esta instancia de jQuery.Event ) ) {
		devuelve nuevo jQuery.Event( src, props );
	}

	// Objeto de evento
	si ( origen && tipo origen ) {
		este.originalEvent = src;
		este.tipo = src.tipo;

		// Es posible que los eventos que aparecen en el documento hayan sido marcados como evitados
		// por un controlador más abajo en el árbol; refleja el valor correcto.
		esto.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === indefinido &&

				// Compatibilidad: solo Android <=2.3
				src.returnValue === ¿falso?
			devuelveVerdadero :
			devuelveFalso;

		// Crear propiedades de destino
		// Compatibilidad: solo Safari <=6 - 7
		// El objetivo no debe ser un nodo de texto (trac-504, trac-13143)
		este.objetivo = ( src.objetivo && src.objetivo.tiponodo === 3 ) ?
			src.target.parentNode :
			src.objetivo;

		este.currentTarget = src.currentTarget;
		este.relatedTarget = src.relatedTarget;

	// Tipo de evento
	} demás {
		este.tipo = src;
	}

	// Coloque las propiedades proporcionadas explícitamente en el objeto de evento
	si (props) {
		jQuery.extend( esto, propiedades );
	}

	// Crea una marca de tiempo si el evento entrante no tiene una
	este.timeStamp = src && src.timeStamp || Fecha.ahora();

	// Marcarlo como arreglado
	esto[jQuery.expando] = verdadero;
};

// jQuery.Event se basa en eventos DOM3 según lo especificado por el enlace del lenguaje ECMAScript
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: devuelve falso,
	isPropagationStopped: devuelve falso,
	isImmediatePropagationStopped: devuelve falso,
	isSimulated: falso,

	preventDefault: función() {
		var e = este.eventooriginal;

		esto.isDefaultPrevented = returnTrue;

		si ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	detenerPropagación: función() {
		var e = este.eventooriginal;

		esto.isPropagationStopped = returnTrue;

		si ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: función() {
		var e = este.eventooriginal;

		esto.isImmediatePropagationStopped = returnTrue;

		si ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		esto.stopPropagation();
	}
};

// Incluye todos los accesorios de eventos comunes, incluidos los accesorios específicos de KeyEvent y MouseEvent
jQuery.each( {
	teclaAlt: verdadero,
	burbujas: cierto,
	cancelable: verdadero,
	changedTouches: verdadero,
	teclaCtrl: verdadero,
	detalle: cierto,
	faseEvento: verdadero,
	metaKey: verdadero,
	pageX: verdadero,
	pageY: verdadero,
	teclaMayúscula: verdadero,
	Ver: verdadero,
	"char": verdadero,
	código: verdadero,
	charCode: verdadero,
	clave: verdadero,
	código clave: verdadero,
	botón: verdadero,
	botones: verdadero,
	clienteX: verdadero,
	clienteY: verdadero,
	offsetX: verdadero,
	offsetY: verdadero,
	pointerId: verdadero,
	pointerType: verdadero,
	pantallaX: verdadero,
	screenY: verdadero,
	objetivoTouches: verdadero,
	toElement: verdadero,
	Toca: cierto,
	cual: cierto
}, jQuery.event.addProp );

jQuery.each( { foco: "enfoque en", desenfoque: "enfoque fuera" }, función( tipo, delegateType ) {

	función focusMappedHandler(nativeEvent) {
		si ( documento.documentMode ) {

			// Compatibilidad: IE 11+
			// Adjunte un único controlador de enfoque/enfoque en el documento mientras alguien lo desea
			// enfoque/desenfoque. Esto se debe a que los primeros son sincrónicos en IE mientras que los segundos
			// son asincrónicos. En otros navegadores, todos esos controladores se invocan de forma sincrónica.

			// `handle` de datos privados ya envolvería el evento, pero necesitamos
			// para cambiar el `tipo` aquí.
			var identificador = dataPriv.get (esto, "identificador"),
				evento = jQuery.event.fix( nativeEvent );
			evento.type = nativeEvent.type === "focusin" ? "focus" : "desenfoque";
			evento.isSimulated = verdadero;

			// Primero, maneja el enfoque de entrada y el enfoque de salida
			manejar( eventonativo );

			// ...luego, maneja el enfoque/desenfoque
			//
			// el enfoque/desenfoque no burbujean mientras que el enfoque entrante/desenfocado sí lo hacen; simule el primero solo
			// invocando el controlador en el nivel inferior.
			si ( evento.objetivo === evento.objetivoactual ) {

				// La parte de configuración llama a `leverageNative`, que, a su vez, llama
				// `jQuery.event.add`, por lo que el identificador del evento ya se habrá configurado
				//en este punto.
				manejar( evento );
			}
		} demás {

			// Para navegadores que no sean IE, adjunte un único controlador de captura en el documento
			// mientras alguien quiere enfocar/enfocar.
			jQuery.event.simulate(tipoDelegado, eventoNativo.objetivo,
				jQuery.event.fix( evento nativo ) );
		}
	}

	jQuery.event.special[ tipo ] = {

		// Utilice un evento nativo si es posible para que la secuencia de desenfoque/enfoque sea correcta
		configuración: función() {

			var adjunta;

			// Reclama el primer manejador
			// dataPriv.set( esto, "foco", ... )
			// dataPriv.set( esto, "desenfoque", ... )
			apalancamientoNativo(este, tipo, verdadero);

			si ( documento.documentMode ) {

				// Compatibilidad: IE 9 - 11+
				// Usamos el mismo controlador nativo para enfocar y enfocar (y enfocar y desenfocar)
				// Por lo tanto, necesitamos coordinar las partes de instalación y desmontaje entre esos eventos.
				// Utilice `delegateType` como clave ya que `type` ya es utilizado por `leverageNative`.
				adjunta = dataPriv.get( this, delegateType );
				si ( !adjunta ) {
					esto.addEventListener(delegadoType, focusMappedHandler);
				}
				dataPriv.set( this, delegateType, ( adjunta || 0 ) + 1 );
			} demás {

				// Devuelve falso para permitir el procesamiento normal en el llamador
				devuelve falso;
			}
		},
		disparador: función() {

			// Forzar la configuración antes del disparador
			apalancamientoNativo(este, tipo);

			// Devuelve un valor no falso para permitir la propagación normal de la ruta del evento
			devuelve verdadero;
		},

		desmontaje: función() {
			var adjunta;

			si ( documento.documentMode ) {
				adjunta = dataPriv.get( this, delegateType ) - 1;
				si ( !adjunta ) {
					esto.removeEventListener(delegadoType, focusMappedHandler);
					dataPriv.remove(este, delegateType);
				} demás {
					dataPriv.set(este, delegateType, adjunta);
				}
			} demás {

				// Devuelve falso para indicar que se debe aplicar el desmontaje estándar
				devuelve falso;
			}
		},

		// Suprime el enfoque nativo o el desenfoque si estamos actualmente dentro
		// una pila de eventos nativos aprovechada
		_predeterminado: función( evento ) {
			devuelve datosPriv.get( evento.target, tipo );
		},

		tipoDelegado: tipoDelegado
	};

	// Soporte: Firefox <=44
	// Firefox no tiene eventos focus(in | out)
	// Ticket relacionado - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Compatibilidad: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// Los eventos focus(in | out) se activan después de los eventos focus y blur,
	// lo cual es una violación de la especificación - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Ticket relacionado: https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Compatibilidad: IE 9 - 11+
	// Para preservar el orden relativo de los eventos de enfoque/enfoque y de enfoque/desenfoque garantizado en la rama 3.x,
	// adjunte un único controlador para ambos eventos en IE.
	jQuery.event.special[tipoDelegado] = {
		configuración: función() {

			// Identificador: nodos regulares (a través de `this.ownerDocument`), ventana
			// (a través de `this.document`) y documento (a través de `this`).
			var doc = este.ownerDocument || este.documento || este,
				dataHolder = documento.documentMode ? esto: doc,
				adjunta = dataPriv.get (titular de datos, tipo de delegado);

			// Compatibilidad: IE 9 - 11+
			// Usamos el mismo controlador nativo para enfocar y enfocar (y enfocar y desenfocar)
			// Por lo tanto, necesitamos coordinar las partes de instalación y desmontaje entre esos eventos.
			// Utilice `delegateType` como clave ya que `type` ya es utilizado por `leverageNative`.
			si ( !adjunta ) {
				si ( documento.documentMode ) {
					esto.addEventListener(delegadoType, focusMappedHandler);
				} demás {
					doc.addEventListener( tipo, focusMappedHandler, verdadero );
				}
			}
			dataPriv.set (titular de datos, tipo de delegado, (adjunta || 0) + 1);
		},
		desmontaje: función() {
			var doc = este.ownerDocument || este.documento || este,
				dataHolder = documento.documentMode ? esto: doc,
				adjunta = dataPriv.get (dataHolder, delegadoType) - 1;

			si ( !adjunta ) {
				si ( documento.documentMode ) {
					esto.removeEventListener(delegadoType, focusMappedHandler);
				} demás {
					doc.removeEventListener( tipo, focusMappedHandler, verdadero );
				}
				dataPriv.remove (titular de datos, tipo de delegado);
			} demás {
				dataPriv.set (titular de datos, tipo de delegado, archivos adjuntos);
			}
		}
	};
} );

// Crear eventos de entrada/salida del mouse utilizando controles de mouseover/out y tiempo de evento
// para que la delegación de eventos funcione en jQuery.
// Haga lo mismo para pointerenter/pointerleave y pointerover/pointerout
//
// Compatibilidad: solo Safari 7
// Safari envía mouseenter con demasiada frecuencia; consulte:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// para la descripción del error (también existía en versiones anteriores de Chrome).
jQuery.each( {
	mouseenter: "pasar el ratón por encima",
	mouseleave: "salir del ratón",
	pointerenter: "puntero sobre",
	pointerleave: "puntero saliente"
}, función( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: arreglar,
		bindType: arreglar,

		manejar: función( evento ) {
			var ret,
				objetivo = esto,
				relacionado = evento.objetivorelacionado,
				handleObj = evento.handleObj;

			// Para mouseenter/leave llame al controlador si el relacionado está fuera del objetivo.
			// NB: No hay ningún objetivo relacionado si el mouse salió o ingresó a la ventana del navegador
			si ( !relacionado || ( relacionado !== objetivo && !jQuery.contains( objetivo, relacionado ) ) ) {
				evento.type = handleObj.origType;
				ret = handleObj.handler.apply( esto, argumentos );
				evento.type = arreglo;
			}
			volver ret;
		}
	};
} );

jQuery.fn.extend( {

	en: función( tipos, selector, datos, fn ) {
		retorna en( esto, tipos, selector, datos, función );
	},
	uno: función( tipos, selector, datos, fn ) {
		retorna en( esto, tipos, selector, datos, función, 1 );
	},
	off: función( tipos, selector, fn ) {
		var handleObj, tipo;
		si ( tipos && tipos.preventDefault && tipos.handleObj ) {

			// (evento) enviado jQuery.Event
			handleObj = tipos.handleObj;
			jQuery( tipos.delegateTarget ).off(
				handleObj.espacio de nombres ?
					handleObj.origType + "." + handleObj.espacio de nombres:
					manejarObj.origType,
				selector de objeto de manejo,
				manejador de objeto de manejo
			);
			devuelve esto;
		}
		si ( tipo de tipos === "objeto" ) {

			// ( tipos-objeto [, selector] )
			para ( tipo en tipos ) {
				this.off( tipo, selector, tipos[ tipo ] );
			}
			devuelve esto;
		}
		si ( selector === falso || tipo de selector === "función" ) {

			// ( tipos [, fn] )
			función = selector;
			selector = indefinido;
		}
		si ( fn === falso ) {
			fn = devolverFalso;
		}
		devuelve esto.each( función() {
			jQuery.event.remove( este, tipos, función, selector );
		} );
	}
} );


variedad

	// Compatibilidad: solo IE <=10 - 11, Edge 12 - 13
	// En IE/Edge, el uso de grupos de expresiones regulares aquí provoca ralentizaciones graves.
	// Consulte https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<estilo|<enlace/i,

	// checked="marcado" o comprobado
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefiere un tbody sobre su tabla padre para contener nuevas filas
función manipulaciónObjetivo( elem, contenido ) {
	si ( nombreNodo( elemento, "tabla") &&
		nodeName( contenido.nodeType !== 11 ? contenido : contenido.firstChild, "tr" ) ) {

		devuelve jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	elemento de retorno;
}

// Reemplazar/restaurar el atributo de tipo de los elementos del script para una manipulación segura del DOM
función deshabilitarScript( elem ) {
	elem.type = ( elem.getAttribute( "tipo" ) !== null ) + "/" + elem.type;
	elemento de retorno;
}
función restoreScript( elem ) {
	si ( ( elem.type || "" ).slice( 0, 5 ) === "verdadero/" ) {
		elem.type = elem.type.slice( 5 );
	} demás {
		elem.removeAttribute( "tipo" );
	}

	elemento de retorno;
}

función cloneCopyEvent( src, dest ) {
	var i, l, tipo, pdataOld, udataOld, udataCur, eventos;

	si ( destino.tiponodo !== 1 ) {
		devolver;
	}

	// 1. Copiar datos privados: eventos, controladores, etc.
	si ( dataPriv.hasData( src ) ) {
		pdataOld = datosPriv.get( src );
		eventos = pdataOld.eventos;

		si ( eventos ) {
			dataPriv.remove( dest, "manejar eventos" );

			para (escriba eventos) {
				para ( i = 0, l = eventos[tipo].longitud; i < l; i++ ) {
					jQuery.event.add( destino, tipo, eventos[ tipo ][ i ] );
				}
			}
		}
	}

	// 2. Copiar datos del usuario
	si (datosUsuario.hasData(src)) {
		udataOld = datosUsuario.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Corregir errores de IE, ver pruebas de soporte
función fixInput( origen, destino ) {
	var nodeName = dest.nodeName.toLowerCase();

	// No se puede conservar el estado marcado de una casilla de verificación o un botón de opción clonados.
	si ( nombreNodo === "entrada" && rcheckableType.test( src.type ) ) {
		destino comprobado = origen comprobado;

	// No se puede devolver la opción seleccionada al estado seleccionado predeterminado al clonar opciones
	} de lo contrario si ( nombreNodo === "entrada" || nombreNodo === "áreaDeTexto" ) {
		dest.valorPredeterminado = src.valorPredeterminado;
	}
}

función domManip(colección, argumentos, devolución de llamada, ignorado) {

	// Aplanar cualquier matriz anidada
	args = plano( args );

	fragmento var, primero, scripts, hasScripts, nodo, doc,
		yo = 0,
		l = colección.longitud,
		iNoClone = l - 1,
		valor = args[ 0 ],
		valorEsFuncion = esFuncion( valor );

	// No podemos clonar fragmentos de nodo que contengan elementos marcados en WebKit
	si (valorEsFuncion ||
			( l > 1 && tipo de valor === "cadena" &&
				!support.checkClone && rchecked.test( valor ) ) ) {
		devuelve colección.each( función( índice ) {
			var self = colección.eq( índice );
			si (valorEsFuncion) {
				args[ 0 ] = valor.call( this, index, self.html() );
			}
			domManip(self, args, devolución de llamada, ignorado);
		} );
	}

	si ( l ) {
		fragmento = buildFragment(args, colección[ 0 ].ownerDocument, falso, colección, ignorado );
		primero = fragmento.primerHijo;

		si (fragmento.nodoshijos.longitud === 1) {
			fragmento = primero;
		}

		// Requiere contenido nuevo o un interés en elementos ignorados para invocar la devolución de llamada
		si ( primero || ignorado ) {
			scripts = jQuery.map( getAll( fragmento, "script" ), deshabilitarScript );
			hasScripts = scripts.longitud;

			// Utilice el fragmento original para el último elemento
			// en lugar del primero porque puede acabar
			// se vacia incorrectamente en ciertas situaciones (trac-8070).
			para ( ; i < l; i++ ) {
				nodo = fragmento;

				si ( i !== iNoClone ) {
					nodo = jQuery.clone( nodo, verdadero, verdadero );

					// Conservar referencias a scripts clonados para su posterior restauración
					si (tiene Scripts) {

						// Compatibilidad: solo Android <=4.0, solo PhantomJS 1
						// push.apply(_, arraylike) lanza una excepción en el antiguo WebKit
						jQuery.merge( scripts, getAll( nodo, "script" ) );
					}
				}

				callback.call( colección[ i ], nodo, i );
			}

			si (tiene Scripts) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Volver a habilitar scripts
				jQuery.map( scripts, restaurarScript );

				// Evaluar scripts ejecutables en la primera inserción del documento
				para ( i = 0; i < hasScripts; i++ ) {
					nodo = scripts[ i ];
					si ( rscriptType.test( nodo.type || "" ) &&
						!dataPriv.access( nodo, "globalEval" ) &&
						jQuery.contains(doc, nodo) ) {

						si ( nodo.src && ( nodo.tipo || "" ).toLowerCase() !== "módulo" ) {

							// Dependencia AJAX opcional, pero no ejecutará scripts si no está presente
							si ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( nodo.src, {
									nonce: nodo.nonce || nodo.getAttribute( "nonce" )
								}, doc );
							}
						} demás {

							// Desempaquetar una sección CDATA que contiene contenido de script. Esto no debería ser
							// necesario ya que en los documentos XML ya no son visibles cuando
							// inspeccionando el contenido de los elementos y en los documentos HTML no tienen
							// pero estamos preservando esa lógica para compatibilidad con versiones anteriores.
							// Esto se eliminará por completo en la versión 4.0. Consulte gh-4904.
							DOMEval( nodo.textContent.replace( rcleanScript, "" ), nodo, doc );
						}
					}
				}
			}
		}
	}

	recogida de devolución;
}

función eliminar( elem, selector, keepData ) {
	nodo var,
		nodos = selector ? jQuery.filter( selector, elem ) : elem,
		yo = 0;

	para ( ; ( nodo = nodos[ i ] ) != null; i++ ) {
		si ( !keepData && nodo.nodeType === 1 ) {
			jQuery.cleanData(getAll(nodo));
		}

		si ( nodo.parentNode ) {
			si ( keepData && isAttached( nodo ) ) {
				setGlobalEval( getAll( nodo, "script" ) );
			}
			nodo.parentNode.removeChild( nodo );
		}
	}

	elemento de retorno;
}

jQuery.extend( {
	htmlPrefilter: función(html) {
		devolver html;
	},

	clon: función( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clon = elem.cloneNode( verdadero ),
			inPage = está adjunto( elem );

		// Solucionar problemas de clonación de IE
		si ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elemento ) ) {

			// Evitamos jQuery#find aquí por razones de rendimiento:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll(clonar);
			srcElements = obtenerTodo( elemento );

			para ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput(elementos_src[i], elementos_destino[i]);
			}
		}

		// Copiar los eventos del original al clon
		si (datosYEventos) {
			si ( deepDataAndEvents ) {
				srcElementos = srcElementos || obtenerTodos(elemento);
				destElements = destElements || obtenerTodo(clonar);

				para ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent(srcElements[i], destElements[i]);
				}
			} demás {
				cloneCopyEvent( elem, clon );
			}
		}

		// Conservar el historial de evaluación del script
		destElements = getAll(clonar, "script" );
		si ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Devuelve el conjunto clonado
		devolver clon;
	},

	cleanData: función( elementos ) {
		var datos, elem, tipo,
			especial = jQuery.evento.especial,
			yo = 0;

		para ( ; ( elem = elems[ i ] ) !== indefinido; i++ ) {
			si ( aceptarDatos( elem ) ) {
				si ( ( datos = elem[ datosPriv.expando ] ) ) {
					si (datos.eventos) {
						para (escriba en datos.eventos) {
							si ( especial[tipo]) {
								jQuery.event.remove( elemento, tipo );

							// Este es un atajo para evitar la sobrecarga de jQuery.event.remove
							} demás {
								jQuery.removeEvent( elem, tipo, datos.handle );
							}
						}
					}

					// Compatibilidad: Chrome <=35 - 45+
					// Asignar undefined en lugar de utilizar delete, ver Data#remove
					elem[ dataPriv.expando ] = indefinido;
				}
				si ( elem[datosUsuario.expando ] ) {

					// Compatibilidad: Chrome <=35 - 45+
					// Asignar undefined en lugar de utilizar delete, ver Data#remove
					elem[ dataUser.expando ] = indefinido;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	separar: función(selector) {
		devolver eliminar(este, selector, verdadero);
	},

	eliminar: función(selector) {
		devolver eliminar(este, selector);
	},

	texto: función( valor ) {
		devolver acceso( esto, función( valor ) {
			valor de retorno === ¿indefinido?
				jQuery.text(este):
				esto.vacío().cada( función() {
					si ( este.tipoNodo === 1 || este.tipoNodo === 11 || este.tipoNodo === 9 ) {
						este.textContent = valor;
					}
				} );
		}, null, valor, argumentos.longitud );
	},

	añadir: función() {
		devuelve domManip(this, argumentos, función(elem) {
			si ( este.tipoNodo === 1 || este.tipoNodo === 11 || este.tipoNodo === 9 ) {
				var objetivo = manipulaciónObjetivo(este, elem);
				objetivo.appendChild( elem );
			}
		} );
	},

	anteponer: función() {
		devuelve domManip(this, argumentos, función(elem) {
			si ( este.tipoNodo === 1 || este.tipoNodo === 11 || este.tipoNodo === 9 ) {
				var objetivo = manipulaciónObjetivo(este, elem);
				objetivo.insertBefore( elem, objetivo.firstChild );
			}
		} );
	},

	antes: función() {
		devuelve domManip(this, argumentos, función(elem) {
			si ( este.parentNode ) {
				este.parentNode.insertBefore( elem, this );
			}
		} );
	},

	después: función() {
		devuelve domManip(this, argumentos, función(elem) {
			si ( este.parentNode ) {
				este.parentNode.insertBefore( elem, este.nextSibling );
			}
		} );
	},

	vacío: función() {
		elemento var,
			yo = 0;

		para ( ; ( elem = this[ i ] ) != null; i++ ) {
			si ( elem.nodeType === 1 ) {

				// Prevenir fugas de memoria
				jQuery.cleanData( getAll( elem, false ) );

				// Eliminar cualquier nodo restante
				elem.textContent = "";
			}
		}

		devuelve esto;
	},

	clon: función(datosAndEventos, deepDataAndEventos) {
		datosAndEvents = datosAndEvents == nulo? falso: datos y eventos;
		deepDataAndEvents = deepDataAndEvents == nulo? datos y eventos: datos y eventos profundos;

		devuelve este.map(función() {
			devuelve jQuery.clone( esto, datosYEventos, datosYEventos profundos );
		} );
	},

	html: función( valor ) {
		devolver acceso( esto, función( valor ) {
			var elem = este[ 0 ] || {},
				yo = 0,
				l = esta.longitud;

			si ( valor === indefinido && elem.nodeType === 1 ) {
				devuelve elem.innerHTML;
			}

			// Veamos si podemos tomar un atajo y simplemente usar innerHTML
			si ( tipo de valor === "cadena" && !rnoInnerhtml.test( valor ) &&
				!wrapMap[ ( rtagName.exec( valor ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				valor = jQuery.htmlPrefilter( valor );

				intentar {
					para ( ; i < l; i++ ) {
						elem = este[ i ] || {};

						// Eliminar nodos de elementos y evitar fugas de memoria
						si ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = valor;
						}
					}

					elemento = 0;

				// Si el uso de innerHTML genera una excepción, utilice el método de respaldo
				} captura ( e ) {}
			}

			si ( elemento ) {
				este.empty().append( valor );
			}
		}, null, valor, argumentos.longitud );
	},

	reemplazarCon: función() {
		var ignorado = [];

		// Realice los cambios, reemplazando cada elemento de contexto no ignorado con el nuevo contenido
		devuelve domManip(this, argumentos, función(elem) {
			var padre = este.parentNode;

			si ( jQuery.inArray( esto, ignorado ) < 0 ) {
				jQuery.cleanData(getAll(esto));
				si ( padre ) {
					padre.replaceChild( elem, este );
				}
			}

		// Forzar la invocación de devolución de llamada
		}, ignorado );
	}
} );

jQuery.each( {
	appendTo: "agregar",
	prependTo: "anteponer",
	insertBefore: "antes",
	insertAfter: "después",
	replaceAll: "reemplazar con"
}, función( nombre, original ) {
	jQuery.fn[ nombre ] = función( selector ) {
		elementos var,
			ret = [],
			insertar = jQuery( selector ),
			último = insertar.longitud - 1,
			yo = 0;

		para ( ; i <= último; i++ ) {
			elems = i === último ? este : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elementos );

			// Compatibilidad: solo Android <=4.0, solo PhantomJS 1
			// .get() porque push.apply(_, arraylike) se lanza en el antiguo WebKit
			push.apply( ret, elems.get() );
		}

		devuelve esto.pushStack(ret);
	};
} );
var rnumnonpx = nueva expresión regular( "^(" + pnum + ")(?!px)[az%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = función( elem ) {

		// Compatibilidad: solo IE <=11, Firefox <=30 (trac-15098, trac-14150)
		// IE muestra elementos creados en ventanas emergentes
		// Mientras tanto, FF agrega elementos de marco a través de "defaultView.getComputedStyle"
		var vista = elem.ownerDocument.defaultView;

		si ( !vista || !vista.opener ) {
			vista = ventana;
		}

		devolver vista.getComputedStyle( elem );
	};

var swap = función( elem, opciones, devolución de llamada ) {
	var ret, nombre,
		viejo = {};

	// Recuerde los valores antiguos e inserte los nuevos
	para (nombre en opciones) {
		antiguo[ nombre ] = elem.style[ nombre ];
		elem.style[ nombre ] = opciones[ nombre ];
	}

	ret = devolución de llamada.call( elem );

	// Revertir los valores antiguos
	para (nombre en opciones) {
		elem.style[ nombre ] = old[ nombre ];
	}

	volver ret;
};


var rboxStyle = nueva RegExp( cssExpand.join( "|" ), "i" );



( función() {

	// La ejecución de las pruebas pixelPosition y boxSizingReliable requiere solo un diseño
	// para que se ejecuten al mismo tiempo para guardar el segundo cálculo.
	función calculateStyleTests() {

		// Este es un singleton, necesitamos ejecutarlo solo una vez
		si ( !div ) {
			devolver;
		}

		contenedor.style.cssText = "posición:absoluta;izquierda:-11111px;ancho:60px;" +
			"margen superior:1px;relleno:0;borde:0";
		div.style.cssTexto =
			"posición:relativa;pantalla:bloque;tamaño del cuadro:cuadro del borde;desbordamiento:desplazamiento;" +
			"margen:automático;borde:1px;relleno:1px;" +
			"ancho:60%;superior:1%";
		documentElement.appendChild( contenedor ).appendChild( div );

		var divStyle = ventana.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Compatibilidad: solo Android 4.0 - 4.3, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Compatibilidad: solo Android 4.0 - 4.3, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Algunos estilos vuelven con valores porcentuales, aunque no deberían
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

		// Compatibilidad: solo IE 9 - 11
		// Detectar errores en la información sobre las dimensiones del contenido de los elementos box-sizing:border-box
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Compatibilidad: solo IE 9
		// Detectar desbordamiento: desplazamiento irregular (gh-3699)
		// Soporte: Chrome <=64
		// No se deje engañar cuando el zoom afecta offsetWidth (gh-4029)
		div.style.position = "absoluto";
		scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;

		documentElement.removeChild( contenedor );

		// Anula el div para que no se almacene en la memoria y
		// También será una señal de que ya se han realizado comprobaciones.
		div = nulo;
	}

	función roundPixelMeasures( medida ) {
		devuelve Math.round( parseFloat( medida ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		confiableTrDimensionsVal, confiableMarginLeftVal,
		contenedor = documento.createElement( "div" ),
		div = documento.createElement( "div" );

	// Finalizar antes en entornos limitados (sin navegador)
	si ( !div.style ) {
		devolver;
	}

	// Compatibilidad: solo IE <=9 - 11
	// El estilo del elemento clonado afecta al elemento fuente clonado (trac-8908)
	div.style.backgroundClip = "cuadro de contenido";
	div.cloneNode(true).style.backgroundClip = "";
	soporte.clearCloneStyle = div.style.backgroundClip === "caja de contenido";

	jQuery.extend( soporte, {
		boxSizingReliable: función() {
			calcularPruebasDeEstilo();
			devuelve boxSizingReliableVal;
		},
		pixelBoxStyles: función() {
			calcularPruebasDeEstilo();
			devuelve pixelBoxStylesVal;
		},
		pixelPosition: función() {
			calcularPruebasDeEstilo();
			devuelve pixelPositionVal;
		},
		reliableMarginLeft: función() {
			calcularPruebasDeEstilo();
			devuelve reliableMarginLeftVal;
		},
		Tamaño del cuadro de desplazamiento: función() {
			calcularPruebasDeEstilo();
			devuelve scrollboxSizeVal;
		},

		// Compatibilidad: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge informa erróneamente `getComputedStyle` de filas de tabla con ancho/alto
		// establecido en CSS mientras las propiedades `offset*` informan valores correctos.
		// El comportamiento en IE 9 es más sutil que en las versiones más nuevas y pasa
		// algunas versiones de esta prueba; ¡asegúrate de no pasarla allí!
		//
		// Compatibilidad: Firefox 70+
		// Solo Firefox incluye anchos de borde
		// en dimensiones calculadas. (gh-4529)
		reliableTrDimensions: función() {
			var tabla, tr, trChild, trStyle;
			si ( reliableTrDimensionsVal == null ) {
				tabla = document.createElement( "tabla" );
				tr = documento.createElement( "tr" );
				trChild = documento.createElement( "div" );

				tabla.style.cssText = "posición:absoluta;izquierda:-11111px;colapso-del-borde:separado";
				tr.style.cssText = "tamaño de caja:caja de contenido;borde:1px sólido";

				// Compatibilidad: Chrome 86+
				// La altura establecida a través de cssText no se aplica.
				// La altura calculada luego regresa como 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Compatibilidad: Android 8 Chrome 86+
				// En nuestro iframe bodyBackground.html,
				// la visualización de todos los elementos div se establece en "en línea",
				// lo que causa un problema solo en Android 8 Chrome 86.
				// Asegurarse de que el div sea `display: block`
				// soluciona este problema.
				trChild.style.display = "bloque";

				elementodocumento
					.appendChild(tabla)
					.appendChild(tr)
					.appendChild(trChild);

				trStyle = ventana.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt(trStyle.borderTopWidth, 10) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild(tabla);
			}
			devuelve reliableTrDimensionsVal;
		}
	} );
} )();


función curCSS( elem, nombre, calculado ) {
	var ancho, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( nombre ),

		// Compatibilidad: Firefox 51+
		// Recuperando el estilo antes de calcularlo de alguna manera
		// corrige un problema con la obtención de valores incorrectos
		// sobre elementos separados
		estilo = elem.style;

	calculado = calculado || getStyles( elem );

	// getPropertyValue es necesario para:
	// .css('filter') (solo IE 9, trac-12537)
	// .css('--propiedadpersonalizada) (gh-3144)
	si (calculado) {

		// Compatibilidad: IE <=9 - 11+
		// IE solo admite `"float"` en `getPropertyValue`; en estilos calculados
		// Solo está disponible como "cssFloat". Ya no modificamos las propiedades.
		// enviado a `.css()` aparte de camelCasing, por lo que debemos verificar ambos.
		// Normalmente, esto crearía una diferencia en el comportamiento: si
		// `getPropertyValue` devuelve una cadena vacía, el valor devuelto
		// por `.css()` sería `undefined`. Este suele ser el caso para
		// elementos desconectados. Sin embargo, en IE incluso los elementos desconectados
		// sin estilos devuelve `"none"` para `getPropertyValue( "float" )`
		ret = calculado.getPropertyValue( nombre ) || calculado[ nombre ];

		si ( isCustomProp && ret ) {

			// Compatibilidad: Firefox 105+, Chrome <=105+
			// La especificación requiere recortar los espacios en blanco para las propiedades personalizadas (gh-4926).
			// Firefox solo recorta los espacios en blanco iniciales. Chrome simplemente los contrae.
			// tanto los espacios iniciales como los finales forman un solo espacio.
			//
			// Regrese a "undefined" si se devuelve una cadena vacía.
			// Esto contrae una definición faltante con propiedad definida
			// y se establece en una cadena vacía, pero no hay una API estándar
			// permitiéndonos diferenciarlos sin penalizar el rendimiento
			// y devolver "undefined" se alinea con el jQuery más antiguo.
			//
			// rtrimCSS trata U+000D RETORNO DE CARRO y U+000C AVANCE DE FORMULARIO
			// como espacio en blanco mientras que CSS no lo hace, pero esto no es un problema
			// porque el preprocesamiento CSS los reemplaza con U+000A SALTO DE LÍNEA
			// (que *es* un espacio en blanco CSS)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || indefinido;
		}

		si ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, nombre );
		}

		// Un homenaje al "increíble hack de Dean Edwards"
		// El navegador de Android devuelve un porcentaje para algunos valores,
		// pero el ancho parece ser confiablemente píxeles.
		// Esto va en contra del borrador de especificación CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		si ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( nombre ) ) {

			//Recordar los valores originales
			ancho = estilo.ancho;
			minWidth = estilo.minWidth;
			anchomáximo = estilo.anchomáximo;

			// Introduzca los nuevos valores para obtener un valor calculado
			estilo.minWidth = estilo.maxWidth = estilo.width = ret;
			ret = ancho calculado;

			// Revertir los valores modificados
			estilo.ancho = ancho;
			estilo.minWidth = minWidth;
			estilo.maxWidth = anchomáximo;
		}
	}

	devolver ret !== indefinido ?

		// Compatibilidad: solo IE <=9 - 11
		// IE devuelve el valor zIndex como un entero.
		ret + "" :
		retirado;
}


función addGetHookIf( condiciónFn, hookFn ) {

	// Define el gancho, comprobaremos en la primera ejecución si es realmente necesario.
	devolver {
		obtener: función() {
			si ( condiciónFn() ) {

				// No se necesita el gancho (o no es posible usarlo debido a
				// a la dependencia faltante), elimínela.
				eliminar esto.get;
				devolver;
			}

			// Se necesita gancho; redefínalo para que la prueba de soporte no se ejecute nuevamente.
			devolver ( this.get = hookFn ).apply( this, argumentos );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	estiloVacío = document.createElement( "div" ).style,
	vendedorProps = {};

// Devuelve una propiedad con prefijo de proveedor o indefinida
función vendorPropName( nombre ) {

	// Verificar nombres de proveedores con prefijo
	var capName = nombre[ 0 ].toUpperCase() + nombre.slice( 1 ),
		i = cssPrefixes.longitud;

	mientras ( yo-- ) {
		nombre = cssPrefixes[ i ] + capName;
		si (nombre en estilo vacío) {
			devolver nombre;
		}
	}
}

// Devuelve una propiedad con prefijo de proveedor o jQuery.cssProps potencialmente asignada
función finalPropName( nombre ) {
	var final = jQuery.cssProps[ nombre ] || vendorProps[ nombre ];

	si (final) {
		volver final;
	}
	si (nombre en estilo vacío) {
		devolver nombre;
	}
	devolver vendorProps[ nombre ] = vendorPropName( nombre ) || nombre;
}


variedad

	// Intercambiable si la pantalla es ninguna o comienza con la tabla
	// excepto "tabla", "celda de tabla" o "título de tabla"
	// Consulte aquí los valores de visualización: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(ninguno|tabla(?!-c[ea]).+)/,
	cssShow = { posición: "absoluta", visibilidad: "oculta", visualización: "bloque" },
	cssNormalTransform = {
		Espaciado entre letras: "0",
		Peso de la fuente: "400"
	};

función setPositiveNumber( _elem, valor, restar ) {

	// Cualquier valor relativo (+/-) ya ha sido
	// normalizado en este punto
	var matches = rcssNum.exec( valor );
	¿partidos de vuelta?

		// Protéjase contra una "resta" indefinida, por ejemplo, cuando se utiliza como en cssHooks
		Math.max( 0, coincide[ 2 ] - ( restar || 0 ) ) + ( coincide[ 3 ] || "px" ) :
		valor;
}

función boxModelAdjustment( elem, dimensión, caja, isBorderBox, estilos, calculatedVal ) {
	var i = dimensión === "ancho" ? 1 : 0,
		extra = 0,
		delta = 0,
		margenDelta = 0;

	// Puede que no sea necesario realizar ningún ajuste
	si ( caja === ( isBorderBox ? "borde" : "contenido" ) ) {
		devuelve 0;
	}

	para ( ; i < 4; i += 2 ) {

		// Ambos modelos de caja excluyen el margen
		// Cuente el margen delta por separado para agregarlo solo después del ajuste del margen de desplazamiento.
		// Esto es necesario para que los márgenes negativos funcionen con `outerHeight( true )` (gh-3982).
		si (caja === "margen") {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, estilos );
		}

		// Si llegamos aquí con un cuadro de contenido, estamos buscando "relleno" o "borde" o "margen"
		si ( !isBorderBox ) {

			//Añadir relleno
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, estilos );

			// Para "borde" o "margen", agregue borde
			si ( caja !== "relleno" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Ancho", verdadero, estilos );

			// Pero aún así manténgalo bajo control de otra manera
			} demás {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Ancho", verdadero, estilos );
			}

		// Si llegamos aquí con un cuadro de borde (contenido + relleno + borde), estamos buscando "contenido" o
		// "relleno" o "margen"
		} demás {

			// Para "contenido", restar relleno
			si ( caja === "contenido") {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, estilos );
			}

			// Para "contenido" o "relleno", restar borde
			si ( caja !== "margen" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Ancho", true, estilos );
			}
		}
	}

	// Tenga en cuenta el margen de desplazamiento positivo del cuadro de contenido cuando se solicite proporcionando calculateVal
	si ( !isBorderBox && valor_computado >= 0 ) {

		// offsetWidth/offsetHeight es una suma redondeada de contenido, relleno, margen de desplazamiento y borde
		// Suponiendo que el margen de desplazamiento es entero, reste el resto y redondee hacia abajo
		delta += Matemática.máx( 0, Matemática.ceil(
			elem[ "desplazamiento" + dimensión[ 0 ].toUpperCase() + dimensión.slice( 1 ) ] -
			valorComputado -
			delta-
			extra -
			0,5

		// Si se desconoce offsetWidth/offsetHeight, no podemos determinar el margen de desplazamiento del cuadro de contenido
		// Utilice un cero explícito para evitar NaN (gh-3964)
		) ) || 0;
	}

	devuelve delta + marginDelta;
}

función getWidthOrHeight( elemento, dimensión, extra ) {

	// Comenzar con el estilo calculado
	var estilos = getStyles (elem),

		// Para evitar forzar un reflujo, solo obtengamos boxSizing si lo necesitamos (gh-4322).
		// Cuadro de contenido falso hasta que sepamos que es necesario saber el valor verdadero.
		boxSizingNeeded = !support.boxSizingReliable() || adicional,
		isBorderBox = tamaño de caja necesario &&
			jQuery.css( elem, "boxSizing", falso, estilos ) === "border-box",
		valorIsBorderBox = esBorderBox,

		val = curCSS( elemento, dimensión, estilos ),
		offsetProp = "desplazamiento" + dimensión[ 0 ].toUpperCase() + dimensión.slice( 1 );

	// Soporte: Firefox <=54
	// Devuelve un valor que no sea un píxel y que pueda generar confusión, o finge ignorancia, según corresponda.
	si ( rnumnonpx.test( val ) ) {
		si ( !extra ) {
			retorna val;
		}
		val = "automático";
	}


	// Compatibilidad: solo IE 9 - 11
	// Utilice offsetWidth/offsetHeight cuando el tamaño del cuadro no sea confiable.
	// En esos casos, se puede confiar en que el valor calculado sea border-box.
	si ( ( !support.boxSizingReliable() && isBorderBox ||

		// Compatibilidad: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge informa erróneamente `getComputedStyle` de filas de tabla con ancho/alto
		// establecido en CSS mientras las propiedades `offset*` informan valores correctos.
		Curiosamente, en algunos casos IE 9 no sufre este problema.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Volver a offsetWidth/offsetHeight cuando el valor sea "automático"
		// Esto sucede con los elementos en línea sin una configuración explícita (gh-3571)
		val === "automático" ||

		// Compatibilidad: solo Android <=4.1 - 4.3
		// Utilice también offsetWidth/offsetHeight para dimensiones en línea informadas incorrectamente (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "mostrar", false, estilos ) === "en línea" ) &&

		// Asegúrese de que el elemento esté visible y conectado
		elem.getClientRects().longitud ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, estilos ) === "border-box";

		// Cuando esté disponible, offsetWidth/offsetHeight son las dimensiones aproximadas del cuadro de borde.
		// Cuando no esté disponible (por ejemplo, SVG), suponga que el tamaño de la caja no es confiable e interprete
		// valor recuperado como una dimensión del cuadro de contenido.
		valueIsBorderBox = offsetProp en elem;
		si ( valorIsBorderBox ) {
			val = elem[offsetProp];
		}
	}

	// Normalizar "" y automático
	val = parseFloat( val ) || 0;

	// Ajuste para el modelo de caja del elemento
	devolver (val +
		Ajuste del modelo de caja(
			elemento,
			dimensión,
			extra || ( isBorderBox ? "borde" : "contenido")
			valorIsBorderBox,
			estilos,

			// Proporcione el tamaño calculado actual para solicitar el cálculo del margen de desplazamiento (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Agregue ganchos de propiedad de estilo para anular el valor predeterminado
	// comportamiento de obtener y establecer una propiedad de estilo
	Ganchos CSS: {
		opacidad: {
			obtener: función( elem, calculado ) {
				si (calculado) {

					// Siempre deberíamos obtener un número de vuelta de la opacidad
					var ret = curCSS( elem, "opacidad" );
					devolver ret === "" ? "1" : retirado;
				}
			}
		}
	},

	// No agregue automáticamente "px" a estas propiedades posiblemente sin unidades
	cssNumber: {
		animationIterationCount: verdadero,
		relación de aspecto: verdadero,
		borderImageSlice: verdadero,
		columnCount: verdadero,
		flexGrow: verdadero,
		flexShrink: verdadero,
		Peso de fuente: verdadero,
		gridArea: verdadero,
		gridColumn: verdadero,
		gridColumnEnd: verdadero,
		gridColumnStart: verdadero,
		gridRow: verdadero,
		gridRowEnd: verdadero,
		gridRowStart: verdadero,
		alturaDeLínea: verdadero,
		opacidad: verdadera,
		orden: verdadero,
		huérfanos: cierto,
		escala: verdadera,
		viudas: cierto,
		zIndex: verdadero,
		zoom: verdadero,

		// Relacionado con SVG
		fillOpacity: verdadero,
		Opacidad de inundación: verdadera,
		stopOpacity: verdadero,
		strokeMiterlimit: verdadero,
		strokeOpacity: verdadero
	},

	// Agregue las propiedades cuyos nombres desea corregir antes
	// establecer u obtener el valor
	Propiedades CSS: {},

	// Obtener y establecer la propiedad de estilo en un nodo DOM
	estilo: función( elemento, nombre, valor, extra ) {

		// No establezca estilos en los nodos de texto y comentarios
		si ( !elem || elem.tipoNodo === 3 || elem.tipoNodo === 8 || !elem.estilo ) {
			devolver;
		}

		//Asegúrate de que estamos trabajando con el nombre correcto
		var ret, tipo, ganchos,
			origName = camelCase( nombre ),
			isCustomProp = rcustomProp.test( nombre ),
			estilo = elem.style;

		// Asegúrate de que estamos trabajando con el nombre correcto. No lo hacemos.
		// quiero consultar el valor si es una propiedad CSS personalizada
		// ya que son definidos por el usuario.
		si ( !isCustomProp ) {
			nombre = nombrePropfinal(nombreorigen);
		}

		// Obtiene el gancho para la versión con prefijo y luego para la versión sin prefijo
		ganchos = jQuery.cssHooks[ nombre ] || jQuery.cssHooks[ nombreOrig ];

		// Comprobamos si estamos estableciendo un valor
		si ( valor !== indefinido ) {
			tipo = tipo de valor;

			// Convertir "+=" o "-=" a números relativos (trac-7345)
			si ( tipo === "cadena" && ( ret = rcssNum.exec( valor ) ) && ret[ 1 ] ) {
				valor = ajustarCSS( elemento, nombre, ret );

				// Corrige el error trac-9237
				tipo = "numero";
			}

			// Asegúrese de que los valores nulos y NaN no estén configurados (trac-7116)
			si ( valor == nulo || valor !== valor ) {
				devolver;
			}

			// Si se pasó un número, agregue la unidad (excepto para ciertas propiedades CSS)
			// La comprobación isCustomProp se puede eliminar en jQuery 4.0 cuando solo agregamos automáticamente
			// "px" a unos pocos valores codificados.
			si ( tipo === "número" && !isCustomProp ) {
				valor += ret && ret[ 3 ] || ( jQuery.cssNumber[ nombreOrig ] ? "" : "px" );
			}

			// Los accesorios background-* afectan los valores del clon original
			si ( !support.clearCloneStyle && valor === "" && nombre.indexOf( "fondo" ) === 0 ) {
				estilo[ nombre ] = "heredar";
			}

			// Si se proporcionó un gancho, use ese valor; de lo contrario, simplemente configure el valor especificado
			si ( !hooks || !( "establecido" en ganchos ) ||
				( valor = hooks.set( elem, valor, extra ) ) !== indefinido ) {

				si ( esCustomProp ) {
					estilo.setProperty( nombre, valor );
				} demás {
					estilo[ nombre ] = valor;
				}
			}

		} demás {

			// Si se proporcionó un gancho, obtenga el valor no calculado desde allí
			si (ganchos && "obtener" en ganchos &&
				( ret = hooks.get( elem, false, extra ) ) !== indefinido ) {

				volver ret;
			}

			// De lo contrario, simplemente obtenga el valor del objeto de estilo
			estilo de retorno[nombre];
		}
	},

	css: función( elem, nombre, extra, estilos ) {
		var val, num, ganchos,
			origName = camelCase( nombre ),
			isCustomProp = rcustomProp.test( nombre );

		// Asegúrate de que estamos trabajando con el nombre correcto. No lo hacemos.
		// quiero modificar el valor si es una propiedad CSS personalizada
		// ya que son definidos por el usuario.
		si ( !isCustomProp ) {
			nombre = nombrePropfinal(nombreorigen);
		}

		// Pruebe el nombre con prefijo seguido del nombre sin prefijo
		ganchos = jQuery.cssHooks[ nombre ] || jQuery.cssHooks[ nombreOrig ];

		// Si se proporcionó un gancho, obtenga el valor calculado desde allí
		si ( ganchos && "obtener" en ganchos ) {
			val = hooks.get( elem, true, extra );
		}

		// De lo contrario, si existe una forma de obtener el valor calculado, úsela
		si ( val === indefinido ) {
			val = curCSS( elem, nombre, estilos );
		}

		// Convertir "normal" en valor calculado
		si ( val === "normal" && nombre en cssNormalTransform ) {
			val = cssNormalTransform[ nombre ];
		}

		// Convierte en numérico si se forzó o se proporcionó un calificador y val parece numérico
		si ( extra === "" || extra ) {
			num = parseFloat( val );
			devolver extra === verdadero || ¿Es finito (núm)? número || 0: valor;
		}

		retorna val;
	}
} );

jQuery.each( [ "alto", "ancho" ], función ( _i, dimensión ) {
	jQuery.cssHooks[dimensión] = {
		obtener: función( elem, calculado, extra ) {
			si (calculado) {

				// Ciertos elementos pueden tener información de dimensión si los mostramos de forma invisible
				// pero debe tener un estilo de visualización actual que se beneficie
				devuelve rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Compatibilidad: Safari 8+
					// Las columnas de la tabla en Safari tienen offsetWidth distinto de cero y cero
					// getBoundingClientRect().width a menos que se cambie la visualización.
					// Compatibilidad: solo IE <=11
					// Ejecución de getBoundingClientRect en un nodo desconectado
					// en IE arroja un error.
					( !elem.getClientRects().longitud || !elem.getBoundingClientRect().ancho ) ?
					intercambiar( elem, cssShow, función() {
						devuelve getWidthOrHeight( elemento, dimensión, extra );
					} ) :
					getWidthOrHeight( elemento, dimensión, extra );
			}
		},

		conjunto: función( elemento, valor, extra ) {
			var coincide,
				estilos = getStyles( elem ),

				// Solo lee styles.position si la prueba tiene posibilidades de fallar
				// para evitar forzar un reflujo.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					estilos.posición === "absoluta",

				// Para evitar forzar un reflujo, solo recuperamos boxSizing si lo necesitamos (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || adicional,
				isBorderBox = tamaño de caja necesario &&
					jQuery.css( elem, "boxSizing", falso, estilos ) === "border-box",
				restar = extra ?
					Ajuste del modelo de caja(
						elemento,
						dimensión,
						extra,
						esBorderBox,
						estilos
					) :
					0;

			// Tenga en cuenta las dimensiones poco fiables del cuadro de borde comparando el desplazamiento* con los valores calculados y
			// simulando un cuadro de contenido para obtener borde y relleno (gh-3699)
			si ( esBorderBox && scrollboxSizeBuggy ) {
				restar -= Math.ceil(
					elem[ "desplazamiento" + dimensión[ 0 ].toUpperCase() + dimensión.slice( 1 ) ] -
					parseFloat( estilos[ dimensión ] ) -
					boxModelAdjustment( elemento, dimensión, "borde", falso, estilos ) -
					0,5
				);
			}

			// Convertir a píxeles si es necesario ajustar el valor
			si ( restar && ( coincide = rcssNum.exec( valor ) ) &&
				( coincide con[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimensión ] = valor;
				valor = jQuery.css( elem, dimensión );
			}

			devuelve setPositiveNumber( elemento, valor, restar );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( soporte.reliableMarginLeft,
	función( elem, calculado ) {
		si (calculado) {
			return ( parseFloat( curCSS( elem, "marginLeft") ) ||
				elem.getBoundingClientRect().izquierda -
					swap( elem, { margenIzquierdo: 0 }, función() {
						devuelve elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// Animate utiliza estos ganchos para expandir propiedades.
jQuery.each( {
	margen: "",
	relleno: "",
	borde: "Ancho"
}, función( prefijo, sufijo ) {
	jQuery.cssHooks[ prefijo + sufijo ] = {
		expandir: función( valor ) {
			var i = 0,
				expandido = {},

				// Asume un solo número si no es una cadena
				partes = tipo de valor === "cadena" ? valor.split( " " ) : [ valor ];

			para ( ; i < 4; i++ ) {
				expandido[ prefijo + cssExpand[ i ] + sufijo ] =
					partes[ i ] || partes[ i - 2 ] || partes[ 0 ];
			}

			retorno ampliado;
		}
	};

	si ( prefijo !== "margen" ) {
		jQuery.cssHooks[ prefijo + sufijo ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: función( nombre, valor ) {
		devolver acceso(este, función(elem, nombre, valor) {
			estilos var, len,
				mapa = {},
				yo = 0;

			si ( Array.isArray( nombre ) ) {
				estilos = getStyles( elem );
				len = nombre.longitud;

				para ( ; i < len; i++ ) {
					mapa[ nombre[ i ] ] = jQuery.css( elem, nombre[ i ], false, estilos );
				}

				mapa de retorno;
			}

			valor de retorno !== indefinido ?
				jQuery.style( elemento, nombre, valor ):
				jQuery.css( elemento, nombre );
		}, nombre, valor, argumentos.longitud > 1 );
	}
} );


función Tween( elem, opciones, prop, fin, facilitación ) {
	devuelve nuevo Tween.prototype.init( elem, opciones, prop, fin, facilitación );
}
jQuery.Tween = Interpolación;

Tween.prototipo = {
	constructor: Tween,
	init: función( elem, opciones, prop, fin, facilitación, unidad ) {
		este.elem = elem;
		esto.prop = prop;
		esto.easing = facilitación || jQuery.easing._default;
		esto.opciones = opciones;
		este.inicio = este.ahora = este.cur();
		esto.fin = fin;
		esta.unidad = unidad || ( jQuery.cssNumber[prop ] ? "" : "px" );
	},
	cur: función() {
		var ganchos = Tween.propHooks[ this.prop ];

		devolver ganchos && ganchos.get ?
			ganchos.get( esto ):
			Tween.propHooks._default.get( esto );
	},
	ejecutar: función(porcentaje) {
		var aliviado,
			ganchos = Tween.propHooks[ this.prop ];

		si (esta.opciones.duracion) {
			esto.pos = eased = jQuery.easing[ esto.easing ](
				porcentaje, esta.opciones.duración * porcentaje, 0, 1, esta.opciones.duración
			);
		} demás {
			esto.pos = facilitado = porcentaje;
		}
		esto.ahora = ( esto.fin - esto.inicio ) * facilitado + esto.inicio;

		si (esta.opciones.paso) {
			esta.opciones.paso.llamada(este.elem, este.ahora, este );
		}

		si ( ganchos && ganchos.set ) {
			ganchos.set( este );
		} demás {
			Tween.propHooks._default.set( esto );
		}
		devuelve esto;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_por defecto: {
		obtener: función(tween) {
			var resultado;

			// Utilice una propiedad en el elemento directamente cuando no es un elemento DOM,
			// o cuando no existe ninguna propiedad de estilo coincidente.
			si (tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				devuelve tween.elem[ tween.prop ];
			}

			// Pasar una cadena vacía como tercer parámetro a .css se ejecutará automáticamente
			// intenta un parseFloat y vuelve a una cadena si el análisis falla.
			// Los valores simples como "10px" se analizan como flotantes;
			// Los valores complejos como "rotate(1rad)" se devuelven tal como están.
			resultado = jQuery.css( tween.elem, tween.prop, "" );

			// Las cadenas vacías, nulas, indefinidas y "automáticas" se convierten a 0.
			devolver !resultado || resultado === "auto" ? 0 : resultado;
		},
		conjunto: función( interpolación ) {

			// Utilice el gancho de paso para compatibilidad con versiones anteriores.
			// Utilice cssHook si está ahí.
			// Utilice .style si está disponible y utilice propiedades simples cuando estén disponibles.
			si ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ interpolación ]( interpolación );
			} de lo contrario si ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[tween.prop] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != nulo ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} demás {
				tween.elem[ tween.prop ] = tween.ahora;
			}
		}
	}
};

// Compatibilidad: solo IE <=9
// Enfoque basado en el pánico para configurar cosas en nodos desconectados
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	conjunto: función( interpolación ) {
		si ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.ahora;
		}
	}
};

jQuery.easing = {
	lineal: función( p ) {
		devolver p;
	},
	oscilación: función( p ) {
		devuelve 0,5 - Math.cos( p * Math.PI ) / 2;
	},
	_predeterminado: "oscilación"
};

jQuery.fx = Tween.prototype.init;

// Punto de extensión de compatibilidad con versiones anteriores a 1.8
jQuery.fx.step = {};




variedad
	fxAhora, en progreso,
	rfxtypes = /^(?:alternar|mostrar|ocultar)$/,
	rrun = /queueHooks$/;

función schedule() {
	si ( en progreso ) {
		si ( documento.hidden === falso && ventana.requestAnimationFrame ) {
			ventana.requestAnimationFrame(programación);
		} demás {
			ventana.setTimeout( horario, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Las animaciones creadas sincrónicamente se ejecutarán sincrónicamente
función createFxNow() {
	ventana.setTimeout(función() {
		fxNow = indefinido;
	} );
	devolver ( fxNow = Fecha.now() );
}

// Generar parámetros para crear una animación estándar
función genFx(tipo, includeWidth) {
	var cual,
		yo = 0,
		attrs = { altura: tipo };

	// Si incluimos el ancho, el valor del paso es 1 para hacer todos los valores de cssExpand,
	// De lo contrario, el valor del paso es 2 para omitir Izquierda y Derecha
	incluirAncho = incluirAncho ? 1 : 0;
	para ( ; i < 4; i += 2 - incluirAncho ) {
		cual = cssExpand[ i ];
		attrs[ "margen" + cual ] = attrs[ "relleno" + cual ] = tipo;
	}

	si (incluyeAncho) {
		attrs.opacidad = attrs.ancho = tipo;
	}

	devolver atributos;
}

función createTween( valor, propiedad, animación ) {
	var entre,
		colección = ( Animación.tweeners[prop] || [] ).concat( Animación.tweeners[ "*" ] ),
		índice = 0,
		longitud = colección.length;
	para ( ; índice < longitud; índice++ ) {
		si ( ( interpolación = colección[ índice ].call( animación, propiedad, valor ) ) ) {

			//Hemos terminado con esta propiedad
			volver interpolación;
		}
	}
}

función defaultPrefilter( elem, props, opts ) {
	var prop, valor, alternar, ganchos, oldfire, propTween, restoreDisplay, mostrar,
		isBox = "ancho" en propiedades || "alto" en propiedades,
		anim = esto,
		origen = {},
		estilo = elem.style,
		oculto = elem.nodeType && isHiddenWithinTree( elem ),
		datosMostrar = datosPriv.get( elem, "fxshow" );

	// Las animaciones que saltan la cola secuestran los ganchos de efectos
	si ( !opts.queue ) {
		ganchos = jQuery._queueHooks( elem, "fx" );
		si ( hooks.unqueued == null ) {
			ganchos.unqueued = 0;
			oldfire = ganchos.vacío.fuego;
			ganchos.vacío.fuego = función() {
				si ( !hooks.unqueued ) {
					fuego viejo();
				}
			};
		}
		ganchos.unqueued++;

		anim.siempre(función() {

			// Asegúrese de que se llame al controlador completo antes de que esto se complete
			anim.siempre(función() {
				ganchos.unqueued--;
				si ( !jQuery.queue( elem, "fx" ).length ) {
					ganchos.vacío.fuego();
				}
			} );
		} );
	}

	// Detectar animaciones para mostrar/ocultar
	para (prop en props) {
		valor = props[prop];
		si ( rfxtypes.test ( valor ) ) {
			eliminar propiedades[prop];
			alternar = alternar || valor === "alternar";
			si ( valor === ( oculto ? "ocultar" : "mostrar" ) ) {

				// Finge estar oculto si esto es un "espectáculo" y
				// todavía hay datos de una función de mostrar/ocultar detenida
				si ( valor === "mostrar" && dataShow && dataShow[prop ] !== indefinido ) {
					oculto = verdadero;

				// Ignorar todos los demás datos que no se muestran ni ocultan
				} demás {
					continuar;
				}
			}
			orig[ prop ] = mostrar datos && mostrar datos [ prop ] || jQuery.style(elem, prop);
		}
	}

	// Salir si esto es una operación sin efecto como .hide().hide()
	propTween = !jQuery.isEmptyObject(props);
	si ( !propTween && jQuery.isEmptyObject( orig ) ) {
		devolver;
	}

	// Restringir los estilos de "desbordamiento" y "visualización" durante las animaciones de cuadro
	si ( isBox && elem.nodeType === 1 ) {

		// Compatibilidad: IE <=9 - 11, Edge 12 - 15
		// Registre los 3 atributos de desbordamiento porque IE no infiere la abreviatura
		// de overflowX y overflowY con valores idénticos y Edge solo refleja
		// el valor overflowX allí.
		opts.overflow = [ estilo.overflow, estilo.overflowX, estilo.overflowY ];

		// Identificar un tipo de visualización, prefiriendo los datos antiguos de mostrar/ocultar sobre la cascada CSS
		restaurarPantalla = dataShow && dataShow.display;
		si (restaurarPantalla == null) {
			restaurarPantalla = dataPriv.get( elem, "mostrar" );
		}
		mostrar = jQuery.css( elem, "mostrar" );
		si (mostrar === "ninguno") {
			si (restaurarPantalla) {
				mostrar = restaurarPantalla;
			} demás {

				// Obtener valores no vacíos forzando temporalmente la visibilidad
				mostrarOcultar([elem], verdadero);
				restaurarPantalla = elem.estilo.pantalla || restaurarPantalla;
				mostrar = jQuery.css( elem, "mostrar" );
				mostrarOcultar( [ elem ] );
			}
		}

		// Animar elementos en línea como bloques en línea
		si ( mostrar === "en línea" || mostrar === "bloque-en-línea" && restaurarPantalla != null ) {
			si ( jQuery.css( elem, "float" ) === "ninguno" ) {

				// Restaurar el valor de visualización original al final de las animaciones de mostrar/ocultar puras
				si ( !propTween ) {
					anim.done(función() {
						estilo.display = restaurarPantalla;
					} );
					si (restaurarPantalla == null) {
						pantalla = estilo.pantalla;
						restoreDisplay = display === "ninguno" ? "" : display;
					}
				}
				estilo.display = "bloque-en-linea";
			}
		}
	}

	si (opts.overflow) {
		estilo.overflow = "oculto";
		anim.siempre(función() {
			estilo.overflow = opts.overflow[ 0 ];
			estilo.overflowX = opts.overflow[ 1 ];
			estilo.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implementar animaciones para mostrar/ocultar
	propTween = falso;
	para (prop en orig) {

		// Configuración general de mostrar/ocultar para la animación de este elemento
		si ( !propTween ) {
			si (datosMostrar) {
				si ( "oculto" en dataShow ) {
					oculto = dataShow.hidden;
				}
			} demás {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Almacenar oculto/visible para alternar, de modo que `.stop().toggle()` "invierta"
			si ( alternar ) {
				dataShow.hidden = !oculto;
			}

			// Mostrar elementos antes de animarlos
			si ( oculto ) {
				mostrarOcultar([elem], verdadero);
			}

			/* eslint-disable función sin bucle */

			anim.done(función() {

				/* eslint-enable función sin bucle */

				// El paso final de una animación de "ocultar" es en realidad ocultar el elemento.
				si ( !oculto ) {
					mostrarOcultar( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				para (prop en orig) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Configuración por propiedad
		propTween = createTween( oculto ? dataShow[ prop ] : 0, prop, anim );
		si ( !(prop en dataShow ) ) {
			dataShow[prop] = propTween.start;
			si ( oculto ) {
				propTween.fin = propTween.inicio;
				propTween.inicio = 0;
			}
		}
	}
}

función propFilter(props, specialEasing) {
	var índice, nombre, facilitación, valor, ganchos;

	// camelCase, specialEasing y pase de cssHook de expansión
	para (índice en propiedades) {
		nombre = camelCase(índice);
		facilitación = specialEasing[ nombre ];
		valor = props[índice];
		si ( Array.isArray( valor ) ) {
			facilitación = valor[ 1 ];
			valor = props[ índice ] = valor[ 0 ];
		}

		si ( índice !== nombre ) {
			props[nombre] = valor;
			eliminar props[índice];
		}

		ganchos = jQuery.cssHooks[ nombre ];
		si ( ganchos && "expandir" en ganchos ) {
			valor = hooks.expand( valor );
			eliminar props[nombre];

			// No exactamente $.extend, esto no sobrescribirá las claves existentes.
			// Reutilizando 'índice' porque tenemos el "nombre" correcto
			para (índice en valor) {
				si ( !( índice en propiedades ) ) {
					props[índice] = valor[índice];
					specialEasing[índice] = facilitación;
				}
			}
		} demás {
			specialEasing[ nombre ] = facilitación;
		}
	}
}

función Animación( elemento, propiedades, opciones ) {
	resultado var,
		interrumpido,
		índice = 0,
		longitud = Animación.prefiltros.longitud,
		diferido = jQuery.Deferred().always( función() {

			// No coincida con el elemento en el selector :animated
			eliminar tick.elem;
		} ),
		garrapata = función() {
			si (detenido) {
				devuelve falso;
			}
			var tiempoActual = fxNow || crearFxNow(),
				restante = Math.max( 0, animación.tiempodeinicio + animación.duración - tiempoactual ),

				// Compatibilidad: solo Android 2.3
				// Un error de bloqueo arcaico no nos permitirá usar `1 - ( 0.5 || 0 )` (trac-12497)
				temp = restante / duración de la animación || 0,
				porcentaje = 1 - temperatura,
				índice = 0,
				longitud = animación.tweens.length;

			para ( ; índice < longitud; índice++ ) {
				animación.tweens[ índice ].run( porcentaje );
			}

			deferred.notifyWith( elem, [ animación, porcentaje, restante ] );

			// Si hay más por hacer, ceda el paso.
			si ( porcentaje < 1 && longitud ) {
				devolver restante;
			}

			// Si se trata de una animación vacía, sintetiza una notificación de progreso final
			si ( !longitud ) {
				diferido.notificarCon( elem, [ animación, 1, 0 ] );
			}

			//Resolver la animación y reportar su conclusión
			diferido.resolveWith( elem, [ animación ] );
			devuelve falso;
		},
		animación = diferida.promesa( {
			elemento: elemento,
			propiedades: jQuery.extend( {}, propiedades ),
			opciones: jQuery.extend( verdadero, {
				Facilitación especial: {},
				facilitación: jQuery.easing._default
			}, opciones ),
			Propiedades originales: propiedades,
			originalOptions: opciones,
			horaInicio: fxNow || crearFxNow(),
			duración: opciones.duración,
			preadolescentes: [],
			createTween: función(prop, fin) {
				var tween = jQuery.Tween( elem, animación.opts, prop, fin,
					animación.opts.specialEasing[prop] || animación.opts.easing );
				animación.tweens.push( interpolación );
				volver interpolación;
			},
			detener: función( gotoEnd ) {
				índice var = 0,

					// Si vamos hasta el final, queremos ejecutar todos los preadolescentes.
					// de lo contrario omitiremos esta parte
					longitud = gotoEnd ? animación.tweens.length : 0;
				si (detenido) {
					devuelve esto;
				}
				detenido = verdadero;
				para ( ; índice < longitud; índice++ ) {
					animación.tweens[ índice ].run( 1 );
				}

				// Resolver cuando reproducimos el último cuadro; de lo contrario, rechazar
				si ( gotoEnd ) {
					diferido.notificarCon( elem, [ animación, 1, 0 ] );
					diferido.resolveWith( elem, [ animación, gotoEnd ] );
				} demás {
					diferido.rejectWith( elem, [ animación, gotoEnd ] );
				}
				devuelve esto;
			}
		} ),
		props = animación.props;

	propFilter(props, animación.opts.specialEasing);

	para ( ; índice < longitud; índice++ ) {
		resultado = Animación.prefilters[ índice ].call( animación, elem, props, animación.opts );
		si ( resultado ) {
			si ( esFuncion( resultado.detener ) ) {
				jQuery._queueHooks( animación.elem, animación.opts.queue ).stop =
					resultado.stop.bind( resultado );
			}
			devolver resultado;
		}
	}

	jQuery.map(props, createTween, animación);

	si ( esFuncion( animación.opts.start ) ) {
		animación.opts.start.call( elem, animación );
	}

	// Adjuntar devoluciones de llamadas desde las opciones
	animación
		.progress( animación.opts.progress )
		.done( animación.opts.done, animación.opts.complete )
		.fail( animación.opts.fail )
		.siempre( animación.opts.siempre );

	jQuery.fx.timer(
		jQuery.extend( marca, {
			elemento: elemento,
			anim: animación,
			cola: animation.opts.queue
		} )
	);

	animación de retorno;
}

jQuery.Animation = jQuery.extend( Animación, {

	preadolescentes: {
		"*": [ función(prop, valor) {
			var tween = this.createTween(prop, valor);
			adjustCSS( tween.elem, prop, rcssNum.exec( valor ), tween );
			volver interpolación;
		} ]
	},

	tweener: función(props, devolución de llamada) {
		si ( esFuncion( props ) ) {
			devolución de llamada = propiedades;
			accesorios = [ "*" ];
		} demás {
			accesorios = accesorios.match(rnothtmlwhite);
		}

		propiedad var,
			índice = 0,
			longitud = props.length;

		para ( ; índice < longitud; índice++ ) {
			prop = props[índice];
			Animación.tweeners[prop] = Animación.tweeners[prop] || [];
			Animación.tweeners[prop].unshift(callback);
		}
	},

	prefiltros: [predeterminadoPrefilter],

	prefiltro: función( devolución de llamada, anteponer ) {
		si ( anteponer ) {
			Animación.prefilters.unshift( devolución de llamada );
		} demás {
			Animación.prefilters.push( devolución de llamada );
		}
	}
} );

jQuery.speed = función(velocidad, facilitación, función) {
	var opt = velocidad && tipo de velocidad === "objeto" ? jQuery.extend( {}, velocidad ) : {
		completar: fn || !fn && facilitación ||
			isFunction(velocidad) && velocidad,
		duración: velocidad,
		facilitación: fn && facilitación || facilitación && !isFunction( facilitación ) && facilitación
	};

	// Ir al estado final si los efectos están desactivados
	si ( jQuery.fx.off ) {
		opt.duración = 0;

	} demás {
		si ( tipo de opt.duración !== "número" ) {
			si ( opt.duration en jQuery.fx.speeds ) {
				opt.duración = jQuery.fx.speeds[ opt.duración ];

			} demás {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalizar opt.queue - verdadero/indefinido/nulo -> "fx"
	si ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Puesta en cola
	opt.old = opt.complete;

	opt.complete = función() {
		si ( esFuncion( opt.old ) ) {
			opt.old.call( esto );
		}

		si ( opt.queue ) {
			jQuery.dequeue( esto, opt.queue );
		}
	};

	volver opt;
};

jQuery.fn.extend( {
	fadeTo: función (velocidad, hasta, facilitación, devolución de llamada) {

		// Mostrar todos los elementos ocultos después de establecer la opacidad en 0
		devuelve esto.filter( isHiddenWithinTree ).css( "opacidad", 0 ).show()

			// Animar al valor especificado
			.end().animate( { opacidad: a }, velocidad, facilitación, devolución de llamada );
	},
	animar: función(prop, velocidad, facilitación, devolución de llamada) {
		var vacío = jQuery.isEmptyObject(prop),
			optall = jQuery.speed(velocidad, facilitación, devolución de llamada),
			hacerAnimación = función() {

				// Opere sobre una copia de propiedad para que no se pierda la facilitación por propiedad
				var anim = Animación( this, jQuery.extend( {}, prop ), optall );

				// Animaciones vacías, o la finalización se resuelve inmediatamente
				si ( vacío || dataPriv.get( this, "finish") ) {
					anim.stop( verdadero );
				}
			};

		hacerAnimación.finish = hacerAnimación;

		devuelve vacío || optall.queue === falso ?
			esto.each(hacerAnimación):
			esta.queue( optall.queue, doAnimation );
	},
	detener: función( tipo, clearQueue, gotoEnd ) {
		var stopQueue = función(ganchos) {
			var stop = ganchos.stop;
			eliminar ganchos.stop;
			detener( gotoEnd );
		};

		si ( tipo de tipo !== "cadena" ) {
			gotoEnd = borrarCola;
			clearQueue = tipo;
			tipo = indefinido;
		}
		si (borrarCola) {
			esta.queue( tipo || "fx", [] );
		}

		devuelve esto.each( función() {
			var dequeue = verdadero,
				índice = tipo != null && tipo + "queueHooks",
				temporizadores = jQuery.timers,
				datos = dataPriv.get( esto );

			si (índice) {
				si ( datos[índice] && datos[índice].stop) {
					stopQueue( datos[ índice ] );
				}
			} demás {
				para (índice en datos) {
					si ( datos[ índice ] && datos[ índice ].stop && rrun.test( índice ) ) {
						stopQueue( datos[ índice ] );
					}
				}
			}

			para ( índice = temporizadores.longitud; índice--; ) {
				si (temporizadores[índice].elem === este &&
					( tipo == null || temporizadores[ índice ]. cola === tipo ) ) {

					temporizadores[ índice ].anim.stop( gotoEnd );
					dequeue = falso;
					temporizadores.splice(índice, 1);
				}
			}

			// Iniciar el siguiente en la cola si el último paso no fue forzado.
			// Los temporizadores actualmente llamarán a sus devoluciones de llamadas completas, que
			// se quitará de la cola pero solo si fueron gotoEnd.
			si ( sacar de la cola || !gotoEnd ) {
				jQuery.dequeue(este, tipo);
			}
		} );
	},
	terminar: función(tipo) {
		si ( tipo !== falso ) {
			tipo = tipo || "fx";
		}
		devuelve esto.each( función() {
			índice var,
				datos = datosPriv.get( este ),
				cola = datos[ tipo + "cola" ],
				ganchos = datos[ tipo + "queueHooks" ],
				temporizadores = jQuery.timers,
				longitud = cola ? cola.longitud : 0;

			// Habilitar la bandera de finalización en datos privados
			datos.finish = verdadero;

			// Vacíe la cola primero
			jQuery.queue( este, tipo, [] );

			si ( ganchos && ganchos.stop ) {
				hooks.stop.call( esto, verdadero );
			}

			// Busca animaciones activas y termínalas.
			para ( índice = temporizadores.longitud; índice--; ) {
				si ( temporizadores[ índice ].elem === este y temporizadores[ índice ].queue === tipo ) {
					temporizadores[índice].anim.stop(verdadero);
					temporizadores.splice(índice, 1);
				}
			}

			// Busque animaciones en la cola anterior y termínelas
			para (índice = 0; índice < longitud; índice++) {
				si ( cola[índice] && cola[índice].finish) {
					cola[ índice ].finish.call( este );
				}
			}

			// Desactivar la bandera de finalización
			eliminar datos.finish;
		} );
	}
} );

jQuery.each( [ "alternar", "mostrar", "ocultar" ], función( _i, nombre ) {
	var cssFn = jQuery.fn[ nombre ];
	jQuery.fn[ nombre ] = función( velocidad, facilitación, devolución de llamada ) {
		retorno velocidad == null || tipo de velocidad === "booleano" ?
			cssFn.apply( esto, argumentos ):
			this.animate( genFx( nombre, verdadero ), velocidad, facilitación, devolución de llamada );
	};
} );

// Generar atajos para animaciones personalizadas
jQuery.each( {
	slideDown: genFx( "mostrar" ),
	slideUp: genFx( "ocultar" ),
	slideToggle: genFx( "alternar" ),
	fadeIn: { opacidad: "mostrar" },
	fadeOut: { opacidad: "ocultar" },
	fadeToggle: { opacidad: "alternar" }
}, función( nombre, propiedades ) {
	jQuery.fn[ nombre ] = función( velocidad, facilitación, devolución de llamada ) {
		devuelve esto.animate(props, velocidad, facilitación, devolución de llamada);
	};
} );

jQuery.timers = [];
jQuery.fx.tick = función() {
	temporizador var,
		yo = 0,
		temporizadores = jQuery.timers;

	fxNow = Fecha.ahora();

	para ( ; i < temporizadores.longitud; i++ ) {
		temporizador = temporizadores[ i ];

		// Ejecute el temporizador y retírelo de forma segura cuando haya terminado (permitiendo la extracción externa)
		si ( !timer() && temporizadores[ i ] === temporizador ) {
			temporizadores.splice( i--, 1 );
		}
	}

	si ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = indefinido;
};

jQuery.fx.timer = función( temporizador ) {
	jQuery.timers.push( temporizador );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = función() {
	si ( en progreso ) {
		devolver;
	}

	enProgreso = verdadero;
	cronograma();
};

jQuery.fx.stop = función() {
	enProgreso = nulo;
};

jQuery.fx.velocidades = {
	lento: 600,
	rápido: 200,

	// Velocidad predeterminada
	_predeterminado: 400
};


// Basado en el complemento de Clint Helfers, con permiso.
jQuery.fn.delay = función( tiempo, tipo ) {
	tiempo = jQuery.fx ? jQuery.fx.speeds[ tiempo ] || tiempo : tiempo;
	tipo = tipo || "fx";

	devuelve esto.queue( tipo, función( siguiente, ganchos ) {
		var timeout = ventana.setTimeout( siguiente, tiempo );
		ganchos.stop = función() {
			ventana.clearTimeout( tiempo de espera );
		};
	} );
};


( función() {
	var entrada = document.createElement( "entrada" ),
		seleccionar = document.createElement( "seleccionar" ),
		opt = select.appendChild(document.createElement("opción" ) );

	entrada.type = "casilla de verificación";

	// Compatibilidad: solo Android <=4.3
	// El valor predeterminado para una casilla de verificación debe ser "activado"
	soporte.checkOn = entrada.valor !== "";

	// Compatibilidad: solo IE <=11
	// Debe acceder a selectedIndex para seleccionar las opciones predeterminadas
	soporte.optSelected = opt.seleccionado;

	// Compatibilidad: solo IE <=11
	// Una entrada pierde su valor después de convertirse en una radio
	entrada = document.createElement( "entrada" );
	entrada.valor = "t";
	entrada.type = "radio";
	soporte.radioValue = entrada.valor === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: función( nombre, valor ) {
		devolver acceso( this, jQuery.attr, nombre, valor, argumentos.length > 1 );
	},

	removeAttr: función( nombre ) {
		devuelve esto.each( función() {
			jQuery.removeAttr( este, nombre );
		} );
	}
} );

jQuery.extend( {
	attr: función( elemento, nombre, valor ) {
		var ret, ganchos,
			nType = elem.nodeType;

		// No obtener ni establecer atributos en nodos de texto, comentarios y atributos
		si ( nTipo === 3 || nTipo === 8 || nTipo === 2 ) {
			devolver;
		}

		// Retorno a prop cuando no se admiten atributos
		si ( tipo de elem.getAttribute === "indefinido") {
			devuelve jQuery.prop( elem, nombre, valor );
		}

		// Los ganchos de atributos están determinados por la versión en minúsculas
		// Toma el gancho necesario si hay alguno definido
		si ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			ganchos = jQuery.attrHooks[ nombre.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( nombre ) ? boolHook : indefinido );
		}

		si ( valor !== indefinido ) {
			si ( valor === nulo ) {
				jQuery.removeAttr( elemento, nombre );
				devolver;
			}

			si (ganchos && "establecido" en ganchos &&
				( ret = hooks.set( elem, valor, nombre ) ) !== indefinido ) {
				volver ret;
			}

			elem.setAttribute( nombre, valor + "" );
			valor de retorno;
		}

		si ( ganchos && "obtener" en ganchos && ( ret = hooks.get( elem, nombre ) ) !== null ) {
			volver ret;
		}

		ret = jQuery.find.attr( elem, nombre );

		// Los atributos inexistentes devuelven nulo, normalizamos a indefinido
		devolver ret == null ? indefinido : ret;
	},

	Ganchos de atributos: {
		tipo: {
			conjunto: función( elemento, valor ) {
				si ( !support.radioValue && valor === "radio" &&
					nodeName( elem, "entrada" ) ) {
					var val = elem.valor;
					elem.setAttribute( "tipo", valor );
					si ( val ) {
						elem.valor = val;
					}
					valor de retorno;
				}
			}
		}
	},

	removeAttr: función( elemento, valor ) {
		nombre var,
			yo = 0,

			// Los nombres de atributos pueden contener caracteres de espacio en blanco que no sean HTML
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = valor && valor.match( rnothtmlwhite );

		si ( attrNames && elem.nodeType === 1 ) {
			mientras ( ( nombre = attrNames[ i++ ] ) ) {
				elem.removeAttribute( nombre );
			}
		}
	}
} );

// Ganchos para atributos booleanos
boolHook = {
	conjunto: función( elemento, valor, nombre ) {
		si ( valor === falso ) {

			// Eliminar atributos booleanos cuando se establece en falso
			jQuery.removeAttr( elemento, nombre );
		} demás {
			elem.setAttribute( nombre, nombre );
		}
		devolver nombre;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), función( _i, nombre ) {
	var getter = attrHandle[ nombre ] || jQuery.find.attr;

	attrHandle[ nombre ] = función( elem, nombre, isXML ) {
		var ret, manejar,
			nombre_minúscula = nombre.toLowerCase();

		si ( !isXML ) {

			// Evite un bucle infinito eliminando temporalmente esta función del captador
			handle = attrHandle[ nombre_minúscula ];
			attrHandle[ nombre_minúscula ] = ret;
			ret = getter( elem, nombre, isXML ) != null ?
				Nombre en minúsculas:
				nulo;
			attrHandle[ nombre_minúscula ] = identificador;
		}
		volver ret;
	};
} );




var rfocusable = /^(?:entrada|seleccionar|área de texto|botón)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: función(nombre, valor) {
		devolver acceso( this, jQuery.prop, nombre, valor, argumentos.length > 1 );
	},

	removeProp: función( nombre ) {
		devuelve esto.each( función() {
			eliminar esto[ jQuery.propFix[ nombre ] || nombre ];
		} );
	}
} );

jQuery.extend( {
	prop: función( elemento, nombre, valor ) {
		var ret, ganchos,
			nType = elem.nodeType;

		// No obtener ni establecer propiedades en nodos de texto, comentarios y atributos
		si ( nTipo === 3 || nTipo === 8 || nTipo === 2 ) {
			devolver;
		}

		si ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Arreglar el nombre y adjuntar ganchos
			nombre = jQuery.propFix[ nombre ] || nombre;
			ganchos = jQuery.propHooks[ nombre ];
		}

		si ( valor !== indefinido ) {
			si (ganchos && "establecido" en ganchos &&
				( ret = hooks.set( elem, valor, nombre ) ) !== indefinido ) {
				volver ret;
			}

			retorna ( elem[ nombre ] = valor );
		}

		si ( ganchos && "obtener" en ganchos && ( ret = hooks.get( elem, nombre ) ) !== null ) {
			volver ret;
		}

		devuelve elem[nombre];
	},

	Ganchos de apoyo: {
		índice de tabulación: {
			obtener: función( elem ) {

				// Compatibilidad: solo IE <=9 - 11
				// elem.tabIndex no siempre devuelve el
				// valor correcto cuando no se ha establecido explícitamente
				// Utilice la recuperación de atributos adecuada (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				si ( índice de tabulación ) {
					devuelve parseInt( tabindex, 10 );
				}

				si (
					rfocusable.test( elem.nombreNodo ) ||
					rclickable.test( elem.nombreNodo ) &&
					elemento.href
				) {
					devuelve 0;
				}

				devuelve -1;
			}
		}
	},

	Corrección de propiedades: {
		"para": "htmlPara",
		"clase": "nombreClase"
	}
} );

// Compatibilidad: solo IE <=11
// Accediendo a la propiedad selectedIndex
// obliga al navegador a respetar la configuración seleccionada
// en la opción
// El captador garantiza que se seleccione una opción predeterminada
// cuando está en un optgroup
// La regla de eslint "no-unused-expressions" está deshabilitada para este código
// ya que considera tales adhesiones noop
si ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		obtener: función( elem ) {

			/* eslint no-unused-expressions: "desactivado" */

			var padre = elem.parentNode;
			si ( padre && padre.parentNode ) {
				padre.parentNode.selectedIndex;
			}
			devuelve nulo;
		},
		conjunto: función( elem ) {

			/* eslint no-unused-expressions: "desactivado" */

			var padre = elem.parentNode;
			si ( padre ) {
				padre.selectedIndex;

				si ( padre.parentNode ) {
					padre.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each([
	"índice de pestaña",
	"Solo lectura",
	"longitud máxima",
	"Espaciado entre celdas",
	"Relleno de celdas",
	"filaSpan",
	"colSpan",
	"UsarMapa",
	"marcoBorde",
	"contenidoEditable"
], función() {
	jQuery.propFix[ esto.toLowerCase() ] = esto;
} );




	// Eliminar y contraer espacios en blanco según la especificación HTML
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	función stripAndCollapse( valor ) {
		var tokens = valor.match(rnothtmlwhite) || [];
		devuelve tokens.join( " " );
	}


función obtenerClase( elem ) {
	devuelve elem.getAttribute && elem.getAttribute( "clase" ) || "";
}

función clasesToArray( valor ) {
	si ( Array.isArray( valor ) ) {
		valor de retorno;
	}
	si ( tipo de valor === "cadena" ) {
		valor de retorno.match( rnothtmlwhite ) || [];
	}
	devolver [];
}

jQuery.fn.extend( {
	addClass: función( valor ) {
		var nombresDeClase, cur, valorCur, nombreDeClase, i, valorFinal;

		si ( esFuncion( valor ) ) {
			devuelve esto.each( función( j ) {
				jQuery( this ).addClass( valor.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( valor );

		si ( classNames.length ) {
			devuelve esto.each( función() {
				curValue = obtenerClase( esto );
				cur = este.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				si (cur) {
					para ( i = 0; i < classNames.length; i++ ) {
						nombreClase = nombresClase[ i ];
						si ( cur.indexOf( " " + nombreClase + " " ) < 0 ) {
							cur += nombreClase + " ";
						}
					}

					// Solo asignar si es diferente para evitar una representación innecesaria.
					valorFinal = stripAndCollapse( cur );
					si ( valor_cur !== valor_final ) {
						este.setAttribute( "clase", valorfinal );
					}
				}
			} );
		}

		devuelve esto;
	},

	removeClass: función( valor ) {
		var nombresDeClase, cur, valorCur, nombreDeClase, i, valorFinal;

		si ( esFuncion( valor ) ) {
			devuelve esto.each( función( j ) {
				jQuery( this ).removeClass( valor.call( this, j, getClass( this ) ) );
			} );
		}

		si ( !argumentos.longitud ) {
			devuelve esto.attr( "clase", "" );
		}

		classNames = classesToArray( valor );

		si ( classNames.length ) {
			devuelve esto.each( función() {
				curValue = obtenerClase( esto );

				// Esta expresión está aquí para una mejor compresibilidad (ver addClass)
				cur = este.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				si (cur) {
					para ( i = 0; i < classNames.length; i++ ) {
						nombreClase = nombresClase[ i ];

						// Eliminar *todas* las instancias
						mientras ( cur.indexOf( " " + nombreClase + " " ) > -1 ) {
							cur = cur.replace( " " + nombreClase + " ", " " );
						}
					}

					// Solo asignar si es diferente para evitar una representación innecesaria.
					valorFinal = stripAndCollapse( cur );
					si ( valor_cur !== valor_final ) {
						este.setAttribute( "clase", valorfinal );
					}
				}
			} );
		}

		devuelve esto;
	},

	toggleClass: función(valor, stateVal) {
		var classNames, nombreClase, i, self,
			tipo = tipo de valor,
			isValidValue = tipo === "cadena" || Array.isArray( valor );

		si ( esFuncion( valor ) ) {
			devuelve esto.each( función( i ) {
				jQuery(este).toggleClass(
					valor.call( this, i, getClass( this ), stateVal ),
					estadoVal
				);
			} );
		}

		si ( tipo de estadoVal === "booleano" && esValido ) {
			devolver stateVal ? this.addClass( valor ): this.removeClass( valor );
		}

		classNames = classesToArray( valor );

		devuelve esto.each( función() {
			si ( esValorValido ) {

				// Alternar nombres de clases individuales
				yo = jQuery( esto );

				para ( i = 0; i < classNames.length; i++ ) {
					nombreClase = nombresClase[ i ];

					// Verifique cada nombre de clase dado, lista separada por espacios
					si ( self.hasClass( nombreClase ) ) {
						self.removeClass( nombreClase );
					} demás {
						self.addClass( nombreClase );
					}
				}

			// Alternar el nombre de toda la clase
			} de lo contrario si ( valor === indefinido || tipo === "booleano" ) {
				nombreClase = obtenerClase( this );
				si ( nombreClase ) {

					// Almacenar className si está configurado
					dataPriv.set(este, "__className__", nombreDeClase);
				}

				// Si el elemento tiene un nombre de clase o si nos pasan `falso`,
				// luego elimine el nombre de clase completo (si había uno, lo anterior lo guardó).
				// De lo contrario, recupera lo que hayas guardado previamente (si hay algo),
				// volviendo a la cadena vacía si no se almacenó nada.
				si ( este.setAttribute ) {
					este.setAttribute( "clase",
						nombreClase || valor === falso ?
							"" :
							dataPriv.get(este, "__nombreClase__" ) || ""
					);
				}
			}
		} );
	},

	tieneClase: función( selector ) {
		var nombreClase, elemento,
			yo = 0;

		nombreClase = " " + selector + " ";
		mientras ( ( elem = this[ i++ ] ) ) {
			si ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( nombreClase ) > -1 ) {
				devuelve verdadero;
			}
		}

		devuelve falso;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: función( valor ) {
		ganchos var, ret, valueIsFunction,
			elem = este[ 0 ];

		si ( !argumentos.longitud ) {
			si ( elemento ) {
				ganchos = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				si (ganchos &&
					"obtener" en ganchos &&
					( ret = hooks.get( elem, "valor" ) ) !== indefinido
				) {
					volver ret;
				}

				ret = elem.valor;

				// Manejar los casos de cadenas más comunes
				si ( tipo de ret === "cadena" ) {
					devolver ret.replace( rreturn, "" );
				}

				// Manejar casos donde el valor es nulo/indefinido o número
				devolver ret == nulo? "" : retirado;
			}

			devolver;
		}

		valorEsFuncion = esFuncion( valor );

		devuelve esto.each( función( i ) {
			var val;

			si ( este.nodeType !== 1 ) {
				devolver;
			}

			si (valorEsFuncion) {
				val = valor.call( this, i, jQuery( this ).val() );
			} demás {
				val = valor;
			}

			// Tratar nulo/indefinido como ""; convertir números a cadena
			si ( val == null ) {
				val = "";

			} de lo contrario si ( tipo de val === "número" ) {
				val += "";

			} de lo contrario si ( Array.isArray( val ) ) {
				val = jQuery.map( val, función( valor ) {
					valor de retorno == nulo ? "" : valor + "";
				} );
			}

			ganchos = jQuery.valHooks[ este.tipo ] || jQuery.valHooks[ este.nombreNodo.toLowerCase() ];

			// Si el conjunto devuelve indefinido, vuelva a la configuración normal
			if ( !hooks || !( "establecer" en ganchos ) || hooks.set( this, val, "valor" ) === indefinido ) {
				este.valor = val;
			}
		} );
	}
} );

jQuery.extend( {
	Ganchos de valor: {
		opción: {
			obtener: función( elem ) {

				var val = jQuery.find.attr( elem, "valor" );
				devuelve val != null ?
					valor :

					// Compatibilidad: solo IE <=10 - 11
					// option.text genera excepciones (trac-14686, trac-14858)
					// Eliminar y contraer espacios en blanco
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		seleccionar: {
			obtener: función( elem ) {
				var valor, opción, i,
					opciones = elem.opciones,
					índice = elem.selectedIndex,
					uno = elem.type === "seleccione-uno",
					valores = uno ? null : [],
					máx = uno ? índice + 1 : opciones.longitud;

				si (índice < 0) {
					i = máx;

				} demás {
					i = uno ? índice : 0;
				}

				// Recorrer todas las opciones seleccionadas
				para ( ; i < máx; i++ ) {
					opción = opciones[ i ];

					// Compatibilidad: solo IE <=9
					// IE8-9 no actualiza lo seleccionado después de restablecer el formulario (trac-2551)
					si ( ( opción.seleccionada || i === índice ) &&

							// No devuelva opciones que estén deshabilitadas o en un grupo de opciones deshabilitado
							!opción.deshabilitada &&
							( !opcion.parentNode.disabled ||
								!nodeName(opción.parentNode, "optgroup" ) ) ) {

						// Obtener el valor específico para la opción
						valor = jQuery( opción ).val();

						// No necesitamos una matriz para una selección
						si ( uno ) {
							valor de retorno;
						}

						// Las selecciones múltiples devuelven una matriz
						valores.push( valor );
					}
				}

				valores de retorno;
			},

			conjunto: función( elemento, valor ) {
				var optionSet, opción,
					opciones = elem.opciones,
					valores = jQuery.makeArray( valor ),
					i = opciones.longitud;

				mientras ( yo-- ) {
					opción = opciones[ i ];

					/* eslint-disable no-cond-assign */

					si (opción.seleccionada =
						jQuery.inArray( jQuery.valHooks.option.get( opción ), valores ) > -1
					) {
						optionSet = verdadero;
					}

					/* eslint-enable no-cond-assign */
				}

				// Obligar a los navegadores a comportarse de manera coherente cuando se establece un valor no coincidente
				si ( !opciónConjunto) {
					elem.selectedIndex = -1;
				}
				valores de retorno;
			}
		}
	}
} );

// Captador/establecedor de radios y casillas de verificación
jQuery.each( [ "radio", "casilla de verificación" ], función() {
	jQuery.valHooks[ esto ] = {
		conjunto: función( elemento, valor ) {
			si ( Array.isArray( valor ) ) {
				devolver ( elem.checked = jQuery.inArray( jQuery( elem ).val(), valor ) > -1 );
			}
		}
	};
	si ( !support.checkOn ) {
		jQuery.valHooks[this].get = función(elem) {
			devolver elem.getAttribute( "valor" ) === null ? "on" : elem.valor;
		};
	}
} );




// Devuelve jQuery para la inclusión de solo atributos
var ubicación = ventana.ubicación;

var nonce = { guid: Fecha.ahora() };

var rquery = ( /\?/ );



// Análisis de XML entre navegadores
jQuery.parseXML = función(datos) {
	var xml, parserErrorElem;
	si ( !datos || tipode datos !== "cadena" ) {
		devuelve nulo;
	}

	// Compatibilidad: solo IE 9 - 11
	// IE lanza parseFromString con entrada no válida.
	intentar {
		xml = (nueva ventana.DOMParser()).parseFromString(datos, "texto/xml");
	} captura ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	si ( !xml || parserErrorElem ) {
		jQuery.error( "XML no válido: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, función( el ) {
					devuelve el.textContent;
				} ).join( "\n" ) :
				datos
		) );
	}
	devolver xml;
};


var rfocusMorph = /^(?:enfoqueenfoco|enfoquefueradesenfoque)$/,
	stopPropagationCallback = función( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.evento, {

	disparador: función( evento, datos, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, identificador, especial, lastElement,
			eventPath = [ elem || documento ],
			tipo = hasOwn.call( evento, "tipo" ) ? evento.tipo : evento,
			espacios de nombres = hasOwn.call( evento, "espacio de nombres" ) ? evento.espaciodenombres.split( "." ) : [];

		cur = último elemento = tmp = elem = elem || documento;

		// No realice eventos en nodos de texto y comentarios
		si ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			devolver;
		}

		// El enfoque/desenfoque se transforma en enfoque entrante/saliente; asegúrese de que no los estemos disparando ahora mismo
		si ( rfocusMorph.test( tipo + jQuery.event.triggered ) ) {
			devolver;
		}

		si ( tipo.indexOf( "." ) > -1 ) {

			// Disparador con espacio de nombres; crea una expresión regular para que coincida con el tipo de evento en handle()
			espacios de nombres = tipo.split( "." );
			tipo = espacios de nombres.shift();
			espacios de nombres.sort();
		}
		ontype = tipo.indexOf( : " ) < 0 && "on" + tipo;

		// El llamador puede pasar un objeto jQuery.Event, un objeto o simplemente una cadena de tipo evento
		evento = evento[ jQuery.expando ] ?
			evento :
			nuevo jQuery.Event( tipo, tipo de evento === "objeto" && evento );

		// Máscara de bits del disparador: & 1 para controladores nativos; & 2 para jQuery (siempre verdadero)
		evento.isTrigger = onlyHandlers ? 2 : 3;
		evento.namespace = espaciosdenombres.join( "." );
		evento.rnamespace = evento.namespace ?
			nueva RegExp( "(^|\\.)" + espacios de nombres.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			nulo;

		// Limpiar el evento en caso de que se esté reutilizando
		evento.resultado = indefinido;
		si ( !evento.objetivo ) {
			evento.objetivo = elem;
		}

		// Clona cualquier dato entrante y antepone el evento, creando la lista de argumentos del controlador
		datos = datos == nulo ?
			[ evento ] :
			jQuery.makeArray(datos, [evento]);

		// Permitir que eventos especiales se dibujen fuera de las líneas
		especial = jQuery.evento.especial[ tipo ] || {};
		si ( !onlyHandlers && disparador.especial && disparador.especial.apply( elem, datos ) === falso ) {
			devolver;
		}

		// Determinar la ruta de propagación del evento con antelación, según la especificación de eventos del W3C (trac-9951)
		// Burbuja hacia arriba al documento, luego a la ventana; busque una variable global ownerDocument (trac-9724)
		si ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = especial.delegateType || tipo;
			si ( !rfocusMorph.test( bubbleType + tipo ) ) {
				cur = cur.parentNode;
			}
			para ( ; cur; cur = cur.parentNode ) {
				eventPath.push(cur);
				tmp = actual;
			}

			// Solo agregamos una ventana si llegamos al documento (por ejemplo, no un objeto simple o un DOM separado)
			si ( tmp === ( elem.ownerDocument || documento ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || ventana );
			}
		}

		// Controladores de incendios en la ruta de eventos
		yo = 0;
		mientras ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			últimoElemento = cur;
			evento.tipo = i > 1 ?
				tipo de burbuja:
				especial.bindType || tipo;

			// Manejador jQuery
			manejar = ( dataPriv.get(cur, "eventos") || Objeto.create(null))[ evento.type] &&
				dataPriv.get( cur, "manejar" );
			si ( manejar ) {
				manejar.aplicar( cur, datos );
			}

			// Manejador nativo
			manejar = ontype && cur[ ontype ];
			si ( manejar && manejar.aplicar && aceptarDatos( cur ) ) {
				evento.resultado = manejar.aplicar( cur, datos );
				si ( evento.resultado === falso ) {
					evento.preventDefault();
				}
			}
		}
		evento.type = tipo;

		// Si nadie impidió la acción predeterminada, hazlo ahora
		si ( !onlyHandlers && !event.isDefaultPrevented() ) {

			si ( ( !special._default ||
				especial._default.apply( eventPath.pop(), datos ) === falso ) &&
				aceptarDatos( elemento ) ) {

				// Llamar a un método DOM nativo en el objetivo con el mismo nombre que el evento.
				// No realice acciones predeterminadas en la ventana, ahí es donde deben estar las variables globales (trac-6170)
				if ( ontype && isFunction( elem[ tipo ] ) && !isWindow( elem ) ) {

					// No vuelva a activar un evento onFOO cuando llamamos a su método FOO()
					tmp = elem[ontype];

					si (tmp) {
						elem[ontype] = nulo;
					}

					// Evitar que se vuelva a activar el mismo evento, ya que lo hemos incluido arriba
					jQuery.event.triggered = tipo;

					si ( evento.isPropagationStopped() ) {
						lastElement.addEventListener( tipo, stopPropagationCallback );
					}

					elem[ tipo ]();

					si ( evento.isPropagationStopped() ) {
						lastElement.removeEventListener( tipo, stopPropagationCallback );
					}

					jQuery.event.triggered = indefinido;

					si (tmp) {
						elem[ontype] = tmp;
					}
				}
			}
		}

		devolver evento.resultado;
	},

	// Aprovecha un evento de donante para simular uno diferente
	// Se utiliza solo para eventos `focus(in | out)`
	simular: función(tipo, elemento, evento) {
		var e = jQuery.extend(
			nuevo jQuery.Event(),
			evento,
			{
				tipo: tipo,
				isSimulated: verdadero
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	disparador: función(tipo, datos) {
		devuelve esto.each( función() {
			jQuery.event.trigger( tipo, datos, este );
		} );
	},
	triggerHandler: función(tipo, datos) {
		var elem = este[ 0 ];
		si ( elemento ) {
			devuelve jQuery.event.trigger( tipo, datos, elemento, verdadero );
		}
	}
} );


variedad
	corchete = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|botón|imagen|reset|archivo)$/i,
	rsubmittable = /^(?:entrada|seleccionar|área de texto|keygen)/i;

función buildParams( prefijo, obj, tradicional, agregar ) {
	var nombre;

	si ( Array.isArray( obj ) ) {

		// Serializar el elemento de la matriz.
		jQuery.each(obj, función(i, v) {
			si ( tradicional || rbracket.test( prefijo ) ) {

				// Trate cada elemento de la matriz como un escalar.
				agregar( prefijo, v );

			} demás {

				// El elemento no es escalar (matriz u objeto), codifique su índice numérico.
				construirParams(
					prefijo + "[" + ( tipo de v === "objeto" && v != null ? i : "" ) + "]",
					en,
					tradicional,
					agregar
				);
			}
		} );

	} de lo contrario si ( !tradicional && toType( obj ) === "objeto" ) {

		// Serializar el elemento del objeto.
		para (nombre en obj) {
			buildParams( prefijo + "[" + nombre + "]", obj[ nombre ], tradicional, agregar );
		}

	} demás {

		// Serializar elemento escalar.
		agregar( prefijo, obj );
	}
}

// Serializar una matriz de elementos de formulario o un conjunto de
// clave/valores en una cadena de consulta
jQuery.param = función( a, tradicional ) {
	prefijo var,
		s = [],
		agregar = función( clave, valorOFunción ) {

			// Si el valor es una función, invocarla y utilizar su valor de retorno
			var valor = esFuncion( valorOFuncion ) ?
				valorOFuncion() :
				valorOFuncion;

			s[ s.length ] = encodeURIComponent( clave ) + "=" +
				encodeURIComponent( valor == null ? "" : valor );
		};

	si ( a == nulo ) {
		devolver "";
	}

	// Si se pasó una matriz, suponga que es una matriz de elementos de formulario.
	si ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serializar los elementos del formulario
		jQuery.each( a, función() {
			agregar( este.nombre, este.valor );
		} );

	} demás {

		// Si es tradicional, codifique de la forma "antigua" (la forma 1.3.2 o anterior
		// lo hizo), de lo contrario, codifique los parámetros de forma recursiva.
		para ( prefijo en a ) {
			buildParams( prefijo, a[ prefijo ], tradicional, agregar );
		}
	}

	// Devuelve la serialización resultante
	devolver s.join( "&" );
};

jQuery.fn.extend( {
	serializar: función() {
		devuelve jQuery.param(this.serializeArray());
	},
	serializeArray: función() {
		devuelve este.map(función() {

			// Puede agregar propHook para "elementos" para filtrar o agregar elementos de formulario
			var elementos = jQuery.prop( this, "elementos" );
			devolver elementos ? jQuery.makeArray( elementos ) : this;
		} ).filter( función() {
			var tipo = este.tipo;

			// Utilice .is( ":disabled" ) para que fieldset[disabled] funcione
			devuelve este.nombre && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( este.nombreNodo ) && !rsubmitterTypes.test( tipo ) &&
				( este.checked || !rcheckableType.test( tipo ) );
		} ).map( función( _i, elem ) {
			var val = jQuery( esto ).val();

			si ( val == null ) {
				devuelve nulo;
			}

			si ( Array.isArray( val ) ) {
				devuelve jQuery.map( val, función( val ) {
					devolver { nombre: elem.name, valor: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			devolver { nombre: elem.name, valor: val.replace( rCRLF, "\r\n" ) };
		} ).conseguir();
	}
} );


variedad
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	encabezados = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: detección de protocolo local
	rlocalProtocol = /^(?:acerca de|aplicación|almacenamiento de la aplicación|.+-extensión|archivo|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocolo = /^\/\//,

	/* Prefiltros
	 * 1) Son útiles para introducir tipos de datos personalizados (consulte ajax/jsonp.js para ver un ejemplo)
	 * 2) Estos se denominan:
	 * - ANTES de solicitar un transporte
	 * - DESPUÉS de la serialización del parámetro (s.data es una cadena si s.processData es verdadero)
	 * 3) la clave es el tipo de datos
	 * 4) Se puede utilizar el símbolo general "*"
	 * 5) la ejecución comenzará con el tipo de datos de transporte y LUEGO continuará hasta "*" si es necesario
	 */
	prefiltros = {},

	/*Enlaces de transporte
	 * 1) la clave es el tipo de datos
	 * 2) Se puede utilizar el símbolo general "*"
	 * 3) La selección comenzará con el tipo de datos de transporte y LUEGO pasará a "*" si es necesario
	 */
	transportes = {},

	// Evitar la secuencia de caracteres del prólogo de comentarios (trac-10098); debe apaciguar la pelusa y evadir la compresión
	todos los tipos = "*/".concat( "*" ),

	// Etiqueta de anclaje para analizar el origen del documento
	origenAnchor = documento.createElement( "a" );

origenAnchor.href = ubicación.href;

// "Constructor" base para jQuery.ajaxPrefilter y jQuery.ajaxTransport
función addToPrefiltersOrTransports( estructura ) {

	// dataTypeExpression es opcional y el valor predeterminado es "*"
	función de retorno (dataTypeExpression, func) {

		si ( tipo de expresión de tipo de datos !== "cadena" ) {
			func = expresiónTipoDatos;
			expresiónDeTipoDeDatos = "*";
		}

		var tipo de datos,
			yo = 0,
			tiposDeDatos = tiposDeDatosExpresión.toLowerCase().match( rnothtmlwhite ) || [];

		si ( esFuncion( func ) ) {

			// Para cada tipo de datos en la expresión dataTypeExpression
			mientras ( ( tipoDatos = tiposDatos[i++])) {

				// Anteponer si se solicita
				si ( tipoDatos[0] === "+") {
					tipoDeDatos = tipoDeDatos.slice( 1 ) || "*";
					( estructura[ tipoDatos ] = estructura[ TipoDatos ] || [] ).unshift( func );

				// De lo contrario, anexar
				} demás {
					( estructura[ tipoDatos ] = estructura[ TipoDatos ] || [] ).push( func );
				}
			}
		}
	};
}

// Función de inspección básica para prefiltros y transportes
función inspectPrefiltersOrTransports( estructura, opciones, originalOptions, jqXHR ) {

	var inspeccionado = {},
		buscandoTransporte = ( estructura === transportes );

	función inspeccionar( tipoDatos ) {
		var seleccionada;
		inspeccionado[ tipoDatos ] = verdadero;
		jQuery.each( estructura[ tipoDatos ] || [], función( _, prefiltroOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory(opciones, opcionesoriginales, jqXHR);
			si ( tipo de datos TipoDeTransporte === "cadena" &&
				!buscandoTransporte && !inspeccionado[ dataTypeOrTransport ] ) {

				opciones.dataTypes.unshift( dataTypeOrTransport );
				inspeccionar( dataTypeOrTransport );
				devuelve falso;
			} de lo contrario si ( buscandoTransporte ) {
				devuelve !( seleccionado = dataTypeOrTransport );
			}
		} );
		devolver seleccionado;
	}

	devolver inspeccionar(opciones.dataTypes[0]) || !inspeccionado[ "*"] && inspeccionar( "*");
}

// Una extensión especial para las opciones de Ajax
// que acepta opciones "planas" (para no extenderse demasiado)
// Corrige el problema trac-9887
función ajaxExtend( objetivo, src ) {
	clave var, profunda,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	para ( clave en src ) {
		si ( src[ clave ] !== indefinido ) {
			( flatOptions[ clave ] ? objetivo : ( deep || ( deep = {} ) ) )[ clave ] = src[ clave ];
		}
	}
	si ( profundo ) {
		jQuery.extend( verdadero, objetivo, profundo );
	}

	objetivo de retorno;
}

/* Maneja las respuestas a una solicitud ajax:
 * - encuentra el tipo de datos correcto (media entre el tipo de contenido y el tipo de datos esperado)
 * - devuelve la respuesta correspondiente
 */
función ajaxHandleResponses( s, jqXHR, respuestas ) {

	var ct, tipo, finalDataType, firstDataType,
		contenidos = s.contenidos,
		tiposDeDatos = s.TiposDeDatos;

	// Eliminar el tipo de datos automático y obtener el tipo de contenido en el proceso
	mientras ( tiposDeDatos[0] === "*" ) {
		tipos de datos.shift();
		si ( ct === indefinido ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Tipo-de-contenido" );
		}
	}

	// Comprobamos si estamos tratando con un tipo de contenido conocido
	si ( ct ) {
		para (escribir en el contenido) {
			si ( contenido[tipo] && contenido[tipo].prueba(ct)) {
				dataTypes.unshift( tipo );
				romper;
			}
		}
	}

	// Verificamos si tenemos una respuesta para el tipo de datos esperado
	si ( dataTypes[ 0 ] en respuestas ) {
		tipoDatosfinal = tiposDatos[0];
	} demás {

		// Pruebe los tipos de datos convertibles
		para (escriba respuestas) {
			si ( !dataTypes[ 0 ] || s.converters[ tipo + " " + dataTypes[ 0 ] ] ) {
				finalDataType = tipo;
				romper;
			}
			si ( !primerTipoDato ) {
				firstDataType = tipo;
			}
		}

		// O simplemente usa el primero
		finalDataType = finalDataType || primer tipo de datos;
	}

	// Si encontramos un tipo de datos
	//Agregamos el tipo de datos a la lista si es necesario
	// y devolver la respuesta correspondiente
	si ( tipoDatosFinal ) {
		si ( tipoDatosFinal !== tiposDatos[0]) {
			tiposDeDatos.unshift( tipoDeDatosFinal );
		}
		devolver respuestas[finalDataType];
	}
}

/* Conversiones de cadena dada la solicitud y la respuesta original
 * También establece los campos responseXXX en la instancia jqXHR
 */
función ajaxConvert( s, respuesta, jqXHR, isSuccess ) {
	var conv2, actual, conv, tmp, prev,
		convertidores = {},

		// Trabajar con una copia de dataTypes en caso de que necesitemos modificarlo para la conversión
		tiposDeDatos = s.TiposDeDatos.slice();

	// Crear mapa de convertidores con claves en minúsculas
	si ( tiposDeDatos[1]) {
		para ( conv en s.converters ) {
			convertidores[ conv.toLowerCase() ] = s.convertidores[ conv ];
		}
	}

	actual = dataTypes.shift();

	// Convertir a cada tipo de datos secuencial
	mientras ( actual ) {

		si ( s.responseFields[actual]) {
			jqXHR[ s.responseFields[ actual ] ] = respuesta;
		}

		// Aplicar el filtro de datos si se proporciona
		si ( !prev && isSuccess && s.dataFilter ) {
			respuesta = s.dataFilter( respuesta, s.dataType );
		}

		prev = actual;
		actual = dataTypes.shift();

		si (actual) {

			// Solo hay trabajo por hacer si el tipo de datos actual no es automático
			si ( actual === "*" ) {

				actual = anterior;

			// Convertir la respuesta si el tipo de datos anterior no es automático y difiere del actual
			} de lo contrario si ( anterior !== "*" && anterior !== actual ) {

				// Busque un convertidor directo
				conv = convertidores[ prev + " " + actual ] || convertidores[ "* " + actual ];

				// Si no se encuentra ninguno, busque un par
				si ( !conv ) {
					para ( conv2 en convertidores ) {

						// Si conv2 genera la salida actual
						tmp = conv2.split( " " );
						si ( tmp[ 1 ] === actual ) {

							// Si el valor anterior se puede convertir en una entrada aceptada
							conv = convertidores[ prev + " " + tmp[ 0 ] ] ||
								convertidores[ "* " + tmp[ 0 ] ];
							si ( conv ) {

								// Convertidores de equivalencia condensada
								si ( conv === verdadero ) {
									conv = convertidores[ conv2 ];

								// De lo contrario, inserte el tipo de datos intermedio
								} de lo contrario si ( convertidores[ conv2 ] !== verdadero ) {
									actual = tmp[ 0 ];
									tiposdedatos.unshift( tmp[ 1 ] );
								}
								romper;
							}
						}
					}
				}

				//Aplicar convertidor (si no es una equivalencia)
				si ( conv !== verdadero ) {

					// A menos que se permita que los errores burbujeen, captúrelos y devuélvalos
					si ( conv && s.throws ) {
						respuesta = conv( respuesta );
					} demás {
						intentar {
							respuesta = conv( respuesta );
						} captura ( e ) {
							devolver {
								estado: "parsererror",
								error: conv ? e : "No hay conversión de " + prev + " a " + current
							};
						}
					}
				}
			}
		}
	}

	devolver { estado: "éxito", datos: respuesta };
}

jQuery.extend( {

	// Contador para mantener el número de consultas activas
	activo: 0,

	// Caché de encabezado modificado por última vez para la próxima solicitud
	Última modificación: {},
	etiqueta electrónica: {},

	Configuraciones de ajax: {
		URL: ubicación.href,
		tipo: "GET",
		isLocal: rlocalProtocol.test( ubicación.protocolo ),
		global: verdadero,
		processData: verdadero,
		async: verdadero,
		tipoContenido: "application/x-www-form-urlencoded; conjunto de caracteres=UTF-8",

		/*
		tiempo de espera: 0,
		datos: nulos,
		tipo de datos: nulo,
		nombre de usuario: null,
		contraseña: nula,
		caché: nulo,
		lanza: falso,
		tradicional: falso,
		encabezados: {},
		*/

		acepta: {
			"*": todos los tipos,
			texto: "texto/sin formato",
			html: "texto/html",
			xml: "aplicación/xml, texto/xml",
			json: "aplicación/json, texto/javascript"
		},

		Contenido: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		Campos de respuesta: {
			xml: "respuestaXML",
			texto: "respuestaTexto",
			json: "respuestaJSON"
		},

		// Convertidores de datos
		// Las claves separan los tipos de origen (o "*" general) y destino con un solo espacio
		convertidores: {

			// Convertir cualquier cosa a texto
			"* texto": Cadena,

			// Texto a html (verdadero = sin transformación)
			"texto html": verdadero,

			// Evaluar el texto como una expresión json
			"texto json": JSON.parse,

			// Analizar texto como xml
			"texto xml": jQuery.parseXML
		},

		// Para opciones que no deben extenderse en profundidad:
		// puedes agregar tus propias opciones personalizadas aquí si
		// y cuando creas uno que no debería ser
		// extensión profunda (ver ajaxExtend)
		Opcionesplanas: {
			URL: verdadero,
			contexto: cierto
		}
	},

	// Crea un objeto de configuración completo en el destino
	// con campos ajaxSettings y settings.
	// Si se omite el objetivo, escribe en ajaxSettings.
	ajaxSetup: función(objetivo, configuración) {
		¿devolver configuración?

			// Construyendo un objeto de configuración
			ajaxExtend( ajaxExtend( objetivo, jQuery.ajaxSettings ), configuraciones ) :

			// Ampliación de ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, objetivo);
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefiltros ),
	ajaxTransport: addToPrefiltersOrTransports( transportes ),

	// Método principal
	ajax: función(url, opciones) {

		// Si la URL es un objeto, simular la firma anterior a la 1.5
		si ( tipo de url === "objeto" ) {
			opciones = url;
			url = indefinido;
		}

		// Fuerza a que las opciones sean un objeto
		opciones = opciones || {};

		transporte var,

			// URL sin parámetro anti-caché
			URL de caché,

			// Encabezados de respuesta
			cadena de encabezados de respuesta,
			cabeceras de respuesta,

			// controlador de tiempo de espera
			temporizador de tiempo de espera,

			//Variable de limpieza de URL
			urlAncla,

			// Estado de la solicitud (se vuelve falso al enviar y verdadero al finalizar)
			terminado,

			// Para saber si se deben enviar eventos globales
			fuegoGlobales,

			// Variable de bucle
			i,

			// parte no almacenada en caché de la URL
			sin almacenar en caché,

			// Crea el objeto de opciones final
			s = jQuery.ajaxSetup( {}, opciones ),

			// Contexto de devoluciones de llamadas
			callbackContext = s.context || s,

			// El contexto para eventos globales es callbackContext si es un nodo DOM o una colección jQuery
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery )?
				jQuery(contexto de devolución de llamada):
				jQuery.evento,

			// Aplazamientos
			diferido = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "una vez memoria" ),

			// Devoluciones de llamadas dependientes del estado
			códigoDeEstado = s.códigoDeEstado || {},

			// Encabezados (se envían todos a la vez)
			encabezados de solicitud = {},
			NombresDeEncabezadosDeSolicitación = {},

			// Mensaje de aborto predeterminado
			strAbort = "cancelado",

			// Falso xhr
			jqXHR = {
				listoEstado: 0,

				// Construye una tabla hash de encabezados si es necesario
				getResponseHeader: función( clave ) {
					var coincidencia;
					si (completado) {
						si ( !responseHeaders ) {
							encabezados de respuesta = {};
							mientras ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( coincidencia[ 2 ] );
							}
						}
						coincidencia = responseHeaders[ clave.toLowerCase() + " " ];
					}
					devolver coincidencia == null ? null : match.join( ", " );
				},

				// Cadena sin formato
				getAllResponseHeaders: función() {
					¿retorno completado? responseHeadersString: null;
				},

				// Almacena en caché el encabezado
				setRequestHeader: función( nombre, valor ) {
					si ( completado == nulo ) {
						nombre = requestHeadersNames[ nombre.toLowerCase() ] =
							requestHeadersNames[ nombre.toLowerCase() ] || nombre;
						requestHeaders[ nombre ] = valor;
					}
					devuelve esto;
				},

				// Anula el encabezado de tipo de contenido de respuesta
				overrideMimeType: función( tipo ) {
					si ( completado == nulo ) {
						s.mimeType = tipo;
					}
					devuelve esto;
				},

				// Devoluciones de llamadas dependientes del estado
				código de estado: función (mapa) {
					código var;
					si ( mapa ) {
						si (completado) {

							// Ejecutar las devoluciones de llamadas apropiadas
							jqXHR.siempre( mapa[ jqXHR.estado ] );
						} demás {

							// Agregue de forma diferida las nuevas devoluciones de llamadas de manera que se conserven las antiguas
							para (código en el mapa) {
								statusCode[ código ] = [ statusCode[ código ], map[ código ] ];
							}
						}
					}
					devuelve esto;
				},

				//Cancelar la solicitud
				abortar: función(estadoTexto) {
					var textofinal = textoestado || strAbortar;
					si ( transporte ) {
						transporte.abort( textoFinal );
					}
					hecho( 0, textoFinal );
					devuelve esto;
				}
			};

		// Adjuntar aplazamientos
		promesa diferida( jqXHR );

		// Agregar protocolo si no se proporciona (los prefiltros podrían esperarlo)
		// Manejar URL falsas en el objeto de configuración (trac-10093: consistencia con la firma anterior)
		// También usamos el parámetro url si está disponible
		s.url = ( ( url || s.url || ubicación.href ) + "" )
			.replace( rprotocolo, ubicación.protocolo + "//" );

		// Opción de método de alias para escribir según el ticket trac-12004
		s.type = opciones.metodo || opciones.type || s.metodo || s.type;

		// Extraer lista de tipos de datos
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// Una solicitud entre dominios es necesaria cuando el origen no coincide con el origen actual.
		si ( s.crossDomain == null ) {
			urlAnchor = documento.createElement( "a" );

			// Compatibilidad: IE <=8 - 11, Edge 12 - 15
			// IE lanza una excepción al acceder a la propiedad href si la URL está mal formada.
			// por ejemplo http://ejemplo.com:80x/
			intentar {
				urlAnchor.href = s.url;

				// Compatibilidad: solo IE <=8 - 11
				// La propiedad de host de Anchor no está configurada correctamente cuando s.url es relativo
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocolo + "//" + urlAnchor.host;
			} captura ( e ) {

				// Si hay un error al analizar la URL, supongamos que es crossDomain,
				// Puede ser rechazado por el transporte si no es válido
				s.crossDomain = verdadero;
			}
		}

		// Convertir datos si aún no son una cadena
		si ( s.data && s.processData && tipo de s.data !== "cadena" ) {
			s.data = jQuery.param( s.data, s.tradicional );
		}

		// Aplicar prefiltros
		inspectPrefiltersOrTransports( prefiltros, s, opciones, jqXHR );

		// Si la solicitud se canceló dentro de un prefiltro, deténgase allí
		si (completado) {
			devuelve jqXHR;
		}

		// Podemos activar eventos globales a partir de ahora si se nos solicita.
		// No active eventos si jQuery.event no está definido en un escenario de uso de AMD (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Esté atento a un nuevo conjunto de solicitudes
		si (fireGlobals && jQuery.active++ === 0) {
			jQuery.event.trigger("ajaxStart" );
		}

		// Poner el tipo en mayúsculas
		s.type = s.type.toUpperCase();

		// Determinar si la solicitud tiene contenido
		s.hasContent = !rnoContent.test( s.type );

		// Guarda la URL en caso de que estemos jugando con If-Modified-Since
		// y/o encabezado If-None-Match más adelante
		// Eliminar hash para simplificar la manipulación de URL
		cacheURL = s.url.replace( rhash, "" );

		// Más opciones de manejo para solicitudes sin contenido
		si ( !s.tieneContenido ) {

			//Recuerda el hash para que podamos volver a ponerlo
			sin almacenar en caché = s.url.slice( cacheURL.length );

			// Si los datos están disponibles y deben procesarse, agregue los datos a la URL
			si ( s.data && ( s.processData || tipo de s.data === "cadena" ) ) {
				cachéURL += ( rquery.test( cachéURL ) ? "&" : "?" ) + s.data;

				// trac-9682: eliminar datos para que no se utilicen en un posible reintento
				eliminar s.data;
			}

			// Agregue o actualice el parámetro anti-caché si es necesario
			si ( s.cache === falso ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				sin almacenar en caché = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					sin almacenar en caché;
			}

			// Coloque hash y anti-cache en la URL que se solicitará (gh-1732)
			s.url = cacheURL + uncached;

		// Cambie '%20' a '+' si este es el contenido del cuerpo del formulario codificado (gh-2658)
		} de lo contrario si ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Establezca el encabezado If-Modified-Since y/o If-None-Match, si está en modo ifModified.
		si ( s.ifModified ) {
			si ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "Si-se-modificó-desde", jQuery.lastModified[ cacheURL ] );
			}
			si ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "Si no hay coincidencia", jQuery.etag[ cacheURL ] );
			}
		}

		// Establezca el encabezado correcto, si se envían datos
		si ( s.datos && s.tieneContenido && s.tipoContenido !== falso || opciones.tipoContenido ) {
			jqXHR.setRequestHeader( "Tipo-de-contenido", s.contentType );
		}

		// Establezca el encabezado Accepts para el servidor, según el tipo de datos
		jqXHR.setRequestHeader(
			"Aceptar",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.acepta[ s.tiposdedatos[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.acepta[ "*" ]
		);

		// Verificar la opción de encabezados
		para ( i en s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Permitir encabezados/tipos MIME personalizados y cancelación anticipada
		si (s.antesDeEnviar&&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === falso || completado ) ) {

			// Anular si aún no lo hizo y regresar
			devolver jqXHR.abort();
		}

		// Abortar ya no es una cancelación
		strAbort = "abortar";

		// Instalar devoluciones de llamadas en diferidos
		completeDeferred.add( s.complete );
		jqXHR.done( s.éxito );
		jqXHR.fail( s.error );

		// Obtener transporte
		transporte = inspectPrefiltersOrTransports( transportes, s, opciones, jqXHR );

		// Si no hay transporte, abortamos automáticamente
		si ( !transporte ) {
			done( -1, "Sin transporte" );
		} demás {
			jqXHR.readyState = 1;

			// Enviar evento global
			si (fireGlobals) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// Si la solicitud se canceló dentro de ajaxSend, deténgase allí
			si (completado) {
				devuelve jqXHR;
			}

			// Se acabó el tiempo
			si ( s.async && s.timeout > 0 ) {
				timeoutTimer = ventana.setTimeout(función() {
					jqXHR.abort( "tiempo de espera" );
				}, s.tiempo de espera);
			}

			intentar {
				completado = falso;
				transporte.send( requestHeaders, hecho );
			} captura ( e ) {

				// Volver a lanzar excepciones posteriores a la finalización
				si (completado) {
					lanzar e;
				}

				// Propagar otros como resultados
				hecho(-1, e);
			}
		}

		// Devolución de llamada cuando todo esté hecho
		función realizada(estado, nativeStatusText, respuestas, encabezados) {
			var isSuccess, éxito, error, respuesta, modificado,
				estadoTexto = estadoTexto nativo;

			// Ignorar invocaciones repetidas
			si (completado) {
				devolver;
			}

			completado = verdadero;

			// Borrar el tiempo de espera si existe
			si ( timeoutTimer ) {
				ventana.clearTimeout( timeoutTimer );
			}

			// Desreferenciar el transporte para la recolección temprana de basura
			// (no importa cuánto tiempo se utilizará el objeto jqXHR)
			transporte = indefinido;

			// Encabezados de respuesta de caché
			responseHeadersString = encabezados || "";

			// Establecer estado listo
			jqXHR.readyState = estado > 0 ? 4 : 0;

			// Determinar si tiene éxito
			isSuccess = estado >= 200 && estado < 300 || estado === 304;

			// Obtener datos de respuesta
			si ( respuestas ) {
				respuesta = ajaxHandleResponses( s, jqXHR, respuestas );
			}

			// Utilice un convertidor noop para el script faltante pero no si es jsonp
			si ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "script de texto" ] = function() {};
			}

			// Convertir sin importar qué (de esa manera los campos responseXXX siempre están configurados)
			respuesta = ajaxConvert( s, respuesta, jqXHR, isSuccess );

			// Si tiene éxito, maneja el encadenamiento de tipos
			si ( esÉxito ) {

				// Establezca el encabezado If-Modified-Since y/o If-None-Match, si está en modo ifModified.
				si ( s.ifModified ) {
					modificado = jqXHR.getResponseHeader( "Última modificación" );
					si ( modificado ) {
						jQuery.lastModified[ cacheURL ] = modificado;
					}
					modificado = jqXHR.getResponseHeader( "etag" );
					si ( modificado ) {
						jQuery.etag[ cacheURL ] = modificado;
					}
				}

				// si no hay contenido
				si ( estado === 204 || s.type === "HEAD" ) {
					statusText = "sin contenido";

				// si no se modifica
				} de lo contrario si ( estado === 304 ) {
					statusText = "no modificado";

				// Si tenemos datos, vamos a convertirlos
				} demás {
					statusText = respuesta.estado;
					éxito = respuesta.data;
					error = respuesta.error;
					esÉxito = !error;
				}
			} demás {

				// Extraer el error de statusText y normalizarlo para los no abortos
				error = textoDeEstado;
				si ( estado || !textoDeEstado ) {
					estadoTexto = "error";
					si (estado < 0) {
						estado = 0;
					}
				}
			}

			// Establecer datos para el objeto xhr falso
			jqXHR.status = estado;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Éxito/Error
			si ( esÉxito ) {
				diferido.resolveWith(callbackContext, [ éxito, statusText, jqXHR ] );
			} demás {
				diferido.rejectWith(callbackContext, [ jqXHR, statusText, error ] );
			}

			// Devoluciones de llamadas dependientes del estado
			jqXHR.statusCode( código de estado );
			código de estado = indefinido;

			si (fireGlobals) {
				globalEventContext.trigger( esSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? éxito : error ] );
			}

			// Completo
			completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ] );

			si (fireGlobals) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Manejar el contador AJAX global
				si ( !(--jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop" );
				}
			}
		}

		devuelve jqXHR;
	},

	getJSON: función (url, datos, devolución de llamada) {
		devuelve jQuery.get(url, datos, devolución de llamada, "json");
	},

	getScript: función(url, devolución de llamada) {
		devuelve jQuery.get(url, indefinido, devolución de llamada, "script" );
	}
} );

jQuery.each( [ "obtener", "publicar" ], función( _i, método ) {
	jQuery[método] = función(url, datos, devolución de llamada, tipo) {

		// Cambiar argumentos si se omitió el argumento de datos
		si ( esFuncion( datos ) ) {
			tipo = tipo || devolución de llamada;
			devolución de llamada = datos;
			datos = indefinido;
		}

		// La URL puede ser un objeto de opciones (que luego debe tener .url)
		devuelve jQuery.ajax( jQuery.extend( {
			dirección URL: dirección URL,
			tipo: método,
			tipoDeDatos: tipo,
			datos: datos,
			éxito: devolución de llamada
		}, jQuery.isPlainObject(url) && url) );
	};
} );

jQuery.ajaxPrefilter(función(es) {
	var yo;
	para ( i en s.headers ) {
		si ( i.toLowerCase() === "tipo-contenido" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = función(url, opciones, doc) {
	devuelve jQuery.ajax( {
		dirección URL: dirección URL,

		// Haga esto explícito, ya que el usuario puede anularlo a través de ajaxSetup (trac-11264)
		tipo: "GET",
		tipo de datos: "script",
		caché: verdadero,
		async: falso,
		global: falso,

		// Solo evalúa la respuesta si es exitosa (gh-4126)
		// dataFilter no se invoca para respuestas de error, por lo que se utiliza en su lugar
		// El convertidor predeterminado es un poco complicado pero funciona.
		convertidores: {
			"script de texto": function() {}
		},
		dataFilter: función(respuesta) {
			jQuery.globalEval( respuesta, opciones, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: función(html) {
		var envolver;

		si ( esto[ 0 ] ) {
			si ( esFuncion( html ) ) {
				html = html.call( este[ 0 ] );
			}

			// Los elementos alrededor de los cuales se envolverá el objetivo
			envolver = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			si ( este[ 0 ].parentNode ) {
				envolver.insertBefore( esto[ 0 ] );
			}

			wrap.map(función() {
				var elem = esto;

				mientras ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				elemento de retorno;
			} ).append( esto );
		}

		devuelve esto;
	},

	wrapInner: función( html ) {
		si ( esFuncion( html ) ) {
			devuelve esto.each( función( i ) {
				jQuery( esto ).wrapInner( html.call( esto, i ) );
			} );
		}

		devuelve esto.each( función() {
			var self = jQuery( esto ),
				contenido = self.contents();

			si ( contenido.longitud ) {
				contenidos.wrapAll( html );

			} demás {
				yo mismo.append( html );
			}
		} );
	},

	envolver: función( html ) {
		var htmlIsFunction = esFuncion( html );

		devuelve esto.each( función( i ) {
			jQuery( esto ).wrapAll( htmlIsFunction ? html.call( esto, i ): html );
		} );
	},

	desenrollar: función(selector) {
		este.padre( selector ).no( "cuerpo" ).cada( función() {
			jQuery( esto ).replaceWith( esto.childNodes );
		} );
		devuelve esto;
	}
} );


jQuery.expr.pseudos.hidden = función( elem ) {
	devuelve !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = función( elem ) {
	devuelve !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = función() {
	intentar {
		devolver nueva ventana.XMLHttpRequest();
	} captura ( e ) {}
};

var xhrSuccessStatus = {

		// El protocolo de archivo siempre genera el código de estado 0, se supone que es 200
		0:200,

		// Compatibilidad: solo IE <=9
		// trac-1450: a veces IE devuelve 1223 cuando debería ser 204
		1223:204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

soporte.cors = !!xhrSupported && ( "conCredenciales" en xhrSupported );
soporte.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(función(opciones) {
	var devolución de llamada, errorCallback;

	// Solo se permite el uso entre dominios si es compatible mediante XMLHttpRequest
	si ( soporte.cors || xhrSupported && !opciones.crossDomain ) {
		devolver {
			enviar: función( encabezados, completo ) {
				yo soy,
					xhr = opciones.xhr();

				xhr.abierto(
					opciones.tipo,
					opciones.url,
					opciones.async,
					opciones.nombreusuario,
					opciones.contraseña
				);

				// Aplicar campos personalizados si se proporcionan
				si (opciones.xhrFields) {
					para ( i en opciones.xhrFields ) {
						xhr[ i ] = opciones.xhrFields[ i ];
					}
				}

				// Anule el tipo MIME si es necesario
				si (opciones.mimeType && xhr.overrideMimeType) {
					xhr.overrideMimeType(opciones.mimeType);
				}

				// X-Solicitado-Con encabezado
				// Para solicitudes entre dominios, considerando que las condiciones para una verificación previa son
				//Similar a un rompecabezas, simplemente nunca lo armamos para estar seguros.
				// (siempre se puede configurar según cada solicitud o incluso usando ajaxSetup)
				// Para solicitudes del mismo dominio, no cambiará el encabezado si ya se proporcionó.
				si ( !opciones.crossDomain && !headers[ "X-Solicitado-Con" ] ) {
					encabezados["X-Requested-With"] = "XMLHttpRequest";
				}

				// Establecer encabezados
				para ( i en encabezados ) {
					xhr.setRequestHeader( i, encabezados[ i ] );
				}

				// Llamar de vuelta
				devolución de llamada = función (tipo) {
					función de retorno() {
						si ( devolución de llamada ) {
							devolución de llamada = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = nulo;

							si ( tipo === "abortar" ) {
								xhr.abortar();
							} de lo contrario si ( tipo === "error" ) {

								// Compatibilidad: solo IE <=9
								// En una interrupción nativa manual, IE9 arroja
								// errores en cualquier acceso a propiedad que no sea readyState
								si ( tipo de xhr.status !== "número" ) {
									completar( 0, "error" );
								} demás {
									completo(

										// Archivo: el protocolo siempre devuelve el estado 0; consulte trac-8605, trac-14207
										estado xhr,
										xhr.texto de estado
									);
								}
							} demás {
								completo(
									xhrSuccessStatus[ xhr.estado ] || xhr.estado,
									xhr.estadoTexto,

									// Compatibilidad: solo IE <=9
									// IE9 no tiene XHR2 pero incluye binario (trac-11426)
									// Para XHR2 sin texto, deje que quien lo llama lo gestione (gh-2498)
									( xhr.responseType || "texto" ) !== "texto" ||
									tipo de xhr.responseText !== "cadena" ?
										{ binario: xhr.response } :
										{ texto: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Escuchar eventos
				xhr.onload = devolución de llamada();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Compatibilidad: solo IE 9
				// Utilice onreadystatechange para reemplazar onabort
				// para manejar abortos no detectados
				si ( xhr.onabort !== indefinido ) {
					xhr.onabort = errorCallback;
				} demás {
					xhr.onreadystatechange = función() {

						// Verificar readyState antes del tiempo de espera a medida que cambia
						si ( xhr.readyState === 4 ) {

							// Permitir que se llame a onerror primero,
							// pero eso no manejará un aborto nativo
							// Además, guarde errorCallback en una variable
							// ya que no se puede acceder a xhr.onerror
							ventana.setTimeout(función() {
								si ( devolución de llamada ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Crea la devolución de llamada de aborto
				callback = callback( "abortar" );

				intentar {

					// Envíe la solicitud (esto puede generar una excepción)
					xhr.send( opciones.hasContent && opciones.data || null );
				} captura ( e ) {

					// trac-14683: Solo volver a lanzar si esto aún no ha sido notificado como un error
					si ( devolución de llamada ) {
						lanzar e;
					}
				}
			},

			abortar: función() {
				si ( devolución de llamada ) {
					llamar de vuelta();
				}
			}
		};
	}
} );




// Evitar la ejecución automática de scripts cuando no se proporcionó un tipo de datos explícito (consulte gh-2432)
jQuery.ajaxPrefilter(función(es) {
	si ( s.crossDomain ) {
		s.contents.script = falso;
	}
} );

// Instalar script dataType
jQuery.ajaxSetup( {
	acepta: {
		script: "texto/javascript, aplicación/javascript, " +
			"aplicación/ecmascript, aplicación/x-ecmascript"
	},
	Contenido: {
		secuencia de comandos: /\b(?:java|ecma)secuencia de comandos\b/
	},
	convertidores: {
		"script de texto": función( texto ) {
			jQuery.globalEval( texto );
			devolver texto;
		}
	}
} );

// Manejar el caso especial de caché y crossDomain
jQuery.ajaxPrefilter( "script", función(es) {
	si ( s.cache === indefinido ) {
		s.cache = falso;
	}
	si ( s.crossDomain ) {
		s.type = "OBTENER";
	}
} );

// Etiqueta de script de enlace hack transporte
jQuery.ajaxTransport( "script", función(es) {

	// Este transporte solo se ocupa de solicitudes entre dominios o forzadas por atributos.
	si ( s.crossDomain || s.scriptAttrs ) {
		var script, devolución de llamada;
		devolver {
			enviar: función(_, completa) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { conjunto de caracteres: s.scriptCharset, origen: s.url } )
					.on( "error de carga", devolución de llamada = función (evt) {
						script.eliminar();
						devolución de llamada = nulo;
						si (evento) {
							completar( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Utilice la manipulación DOM nativa para evitar nuestro truco AJAX domManip
				documento.head.appendChild( script[ 0 ] );
			},
			abortar: función() {
				si ( devolución de llamada ) {
					llamar de vuelta();
				}
			}
		};
	}
} );




var antiguasCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Configuración predeterminada de jsonp
jQuery.ajaxSetup( {
	jsonp: "devolución de llamada",
	jsonpCallback: función() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		esto[devolución de llamada] = verdadero;
		devolver devolución de llamada;
	}
} );

// Detectar, normalizar opciones e instalar devoluciones de llamadas para solicitudes jsonp
jQuery.ajaxPrefilter( "json jsonp", función( s, originalSettings, jqXHR ) {

	var callbackName, sobrescrito, responseContainer,
		jsonProp = s.jsonp !== falso && ( rjsonp.test( s.url ) ?
			"URL":
			tipo de s.data === "cadena" &&
				( s.contentType || "" )
					.indexOf( "aplicacion/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "datos"
		);

	// Manejar si el tipo de datos esperado es "jsonp" o tenemos un parámetro para establecer
	si ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Obtener el nombre de la devolución de llamada, recordando el valor preexistente asociado con él
		nombreDeDevoluciónDeCallback = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback():
			s.jsonpCallback;

		// Insertar devolución de llamada en la URL o en los datos del formulario
		si (jsonProp) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} de lo contrario si ( s.jsonp !== falso ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Utilice el convertidor de datos para recuperar json después de la ejecución del script
		s.converters["script json"] = función() {
			si ( !contenedorDeRespuesta ) {
				jQuery.error( callbackName + " no fue llamado" );
			}
			devolver respuestaContainer[ 0 ];
		};

		// Forzar tipo de datos json
		s.dataTypes[ 0 ] = "json";

		//Instalar devolución de llamada
		sobrescrito = ventana[callbackName];
		ventana[callbackName] = función() {
			responseContainer = argumentos;
		};

		// Función de limpieza (se activa después de los convertidores)
		jqXHR.siempre(función() {

			// Si el valor anterior no existía, elimínelo
			si ( sobrescrito === indefinido ) {
				jQuery(ventana).removeProp(callbackName);

			// De lo contrario, restaure el valor preexistente
			} demás {
				ventana[callbackName] = sobrescrito;
			}

			// Guardar como gratuito
			si ( s[nombreDeDevoluciónDeCall]) {

				// Asegúrate de que la reutilización de las opciones no arruine las cosas.
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Guarde el nombre de devolución de llamada para uso futuro
				oldCallbacks.push( nombreDevoluciónDeCall );
			}

			// Llamamos si fuera una función y tenemos una respuesta
			si ( responseContainer && isFunction( sobrescrito ) ) {
				sobrescrito( responseContainer[ 0 ] );
			}

			responseContainer = sobrescrito = indefinido;
		} );

		// Delegar al script
		devuelve "script";
	}
} );




// Compatibilidad: solo Safari 8
// En Safari 8, los documentos se crean mediante document.implementation.createHTMLDocument
// colapsar formas hermanas: la segunda se convierte en un hijo de la primera.
//Por este motivo, esta medida de seguridad debe estar deshabilitada en Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
soporte.createHTMLDocument = (función() {
	var cuerpo = documento.implementacion.createHTMLDocument( "" ).cuerpo;
	cuerpo.innerHTML = "<formulario></formulario><formulario></formulario>";
	devuelve cuerpo.childNodes.length === 2;
} )();


// El argumento "datos" debe ser una cadena de html
// contexto (opcional): si se especifica, el fragmento se creará en este contexto,
// por defecto es documento
// keepScripts (opcional): si es verdadero, incluirá los scripts pasados ​​en la cadena html
jQuery.parseHTML = función(datos, contexto, keepScripts) {
	si ( tipo de datos !== "cadena" ) {
		devolver [];
	}
	si ( tipo de contexto === "booleano" ) {
		keepScripts = contexto;
		contexto = falso;
	}

	var base, analizado, scripts;

	si ( !contexto ) {

		// Detener la ejecución inmediata de scripts o controladores de eventos en línea
		// mediante el uso de document.implementation
		si ( soporte.createHTMLDocument ) {
			contexto = documento.implementacion.createHTMLDocument( "" );

			// Establezca el href base para el documento creado
			// así que cualquier elemento analizado con URL
			// se basan en la URL del documento (gh-2965)
			base = contexto.createElement( "base" );
			base.href = documento.ubicación.href;
			contexto.head.appendChild( base );
		} demás {
			contexto=documento;
		}
	}

	analizado = rsingleTag.exec( datos );
	scripts = !keepScripts && [];

	// Etiqueta única
	si (analizado) {
		devolver [ context.createElement( parsed[ 1 ] ) ];
	}

	analizado = buildFragment( [ datos ], contexto, scripts );

	si ( scripts && scripts.length ) {
		jQuery(scripts).eliminar();
	}

	devuelve jQuery.merge( [], parsed.childNodes );
};


/**
 * Cargar una URL en una página
 */
jQuery.fn.load = función(url, parámetros, devolución de llamada) {
	selector var, tipo, respuesta,
		yo = esto,
		apagado = url.indexOf( " " );

	si ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// Si es una función
	si ( esFuncion( parametros ) ) {

		// Suponemos que es la devolución de llamada
		devolución de llamada = parámetros;
		params = indefinido;

	// De lo contrario, crea una cadena de parámetros
	} de lo contrario si (params && typeof params === "objeto" ) {
		tipo = "POST";
	}

	// Si tenemos elementos a modificar hacemos la solicitud
	si ( self.length > 0 ) {
		jQuery.ajax( {
			dirección URL: dirección URL,

			// Si la variable "tipo" no está definida, se utilizará el método "GET".
			// Hacer explícito el valor de este campo ya que
			// el usuario puede anularlo a través del método ajaxSetup
			tipo: tipo || "GET",
			tipo de datos: "html",
			datos: parámetros
		} ).done( función( textoRespuesta ) {

			// Guardar la respuesta para usarla en la devolución de llamada completa
			respuesta = argumentos;

			yo mismo.html(selector ?

				// Si se especificó un selector, ubique los elementos correctos en un div ficticio
				// Excluir scripts para evitar errores de "Permiso denegado" en IE
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ):

				// De lo contrario, utilice el resultado completo
				respuestaTexto );

		// Si la solicitud tiene éxito, esta función obtiene "datos", "estado", "jqXHR"
		// pero se ignoran porque la respuesta se estableció arriba.
		// Si falla, esta función obtiene "jqXHR", "status", "error"
		} ).siempre( devolución de llamada && función( jqXHR, estado ) {
			yo mismo.cada(función() {
				callback.apply( esto, respuesta || [ jqXHR.responseText, estado, jqXHR ] );
			} );
		} );
	}

	devuelve esto;
};




jQuery.expr.pseudos.animated = función( elem ) {
	devuelve jQuery.grep( jQuery.timers, función( fn ) {
		devolver elem === fn.elem;
	} ).longitud;
};




jQuery.offset = {
	setOffset: función( elem, opciones, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calcularPosition,
			posición = jQuery.css( elem, "posición" ),
			curElem = jQuery( elem ),
			accesorios = {};

		// Establezca la posición primero, en caso de que la parte superior/izquierda se establezcan incluso en el elemento estático
		si (posición === "estática") {
			elem.style.position = "relativo";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "arriba" );
		curCSSLeft = jQuery.css( elem, "izquierda" );
		calcularPosición = (posición === "absoluta" || posición === "fija" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Es necesario poder calcular la posición si
		// arriba o izquierda es automático y la posición es absoluta o fija
		si ( calcularPosición ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.izquierda;

		} demás {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		si ( esFuncion( opciones ) ) {

			// Utilice jQuery.extend aquí para permitir la modificación del argumento de coordenadas (gh-1848)
			opciones = opciones.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		si (opciones.top != null ) {
			props.top = (opciones.top - curOffset.top) + curTop;
		}
		si (opciones.izquierda != null ) {
			props.left = (opciones.left - curOffset.left) + curLeft;
		}

		si ( "usando" en opciones ) {
			opciones.using.call( elem, props );

		} demás {
			curElem.css(props);
		}
	}
};

jQuery.fn.extend( {

	// offset() relaciona el cuadro del borde de un elemento con el origen del documento
	desplazamiento: función(opciones) {

		// Conservar el encadenamiento para el setter
		si ( argumentos.longitud ) {
			opciones de retorno === ¿indefinido?
				este :
				esto.cada(función(i) {
					jQuery.offset.setOffset( esto, opciones, i );
				} );
		}

		var rect, ganar,
			elem = este[ 0 ];

		si ( !elem ) {
			devolver;
		}

		// Devuelve ceros para elementos desconectados y ocultos (visualización: ninguno) (gh-2310)
		// Compatibilidad: solo IE <=11
		// Ejecutar getBoundingClientRect en un
		// El nodo desconectado en IE genera un error
		si ( !elem.getClientRects().length ) {
			retorna { arriba: 0, izquierda: 0 };
		}

		// Obtenga la posición relativa del documento agregando el desplazamiento de la ventana gráfica a gBCR relativo a la ventana gráfica
		rect = elem.getBoundingClientRect();
		ganar = elem.ownerDocument.defaultView;
		devolver {
			parte superior: rect.top + win.pageYOffset,
			izquierda: rect.left + win.pageXOffset
		};
	},

	// position() relaciona el cuadro de margen de un elemento con el cuadro de relleno de su elemento padre desplazado
	// Esto corresponde al comportamiento del posicionamiento absoluto CSS
	posición: función() {
		si ( !esto[ 0 ] ) {
			devolver;
		}

		var offsetParent, desplazamiento, doc,
			elem = este[ 0 ],
			parentOffset = { arriba: 0, izquierda: 0 };

		// posición: los elementos fijos están desplazados respecto de la ventana gráfica, que siempre tiene un desplazamiento cero
		si ( jQuery.css( elem, "posición" ) === "fijo" ) {

			// Supongamos que la posición fija implica la disponibilidad de getBoundingClientRect
			desplazamiento = elem.getBoundingClientRect();

		} demás {
			desplazamiento = este.desplazamiento();

			// Tenga en cuenta el elemento padre desplazado *real*, que puede ser el documento o su elemento raíz
			// cuando se identifica un elemento posicionado estáticamente
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			mientras (desplazamientoParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "posición" ) === "estático" ) {

				offsetParent = offsetParent.parentNode;
			}
			si ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorpora bordes en su desplazamiento, ya que están fuera de su origen de contenido
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", verdadero);
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", verdadero );
			}
		}

		// Restar los desplazamientos de los padres y los márgenes de los elementos
		devolver {
			parte superior: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			izquierda: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// Este método devolverá documentElement en los siguientes casos:
	// 1) Para el elemento dentro del iframe sin offsetParent, este método retornará
	// documentElement de la ventana principal
	// 2) Para el elemento oculto o separado
	// 3) Para el cuerpo o elemento html, es decir, en el caso del nodo html, se retornará a sí mismo.
	//
	// pero esas excepciones nunca se presentaron como casos de uso de la vida real
	// y podrían considerarse como resultados más preferibles.
	//
	// Sin embargo, esta lógica no está garantizada y puede cambiar en cualquier momento en el futuro.
	offsetParent: función() {
		devuelve este.map(función() {
			var offsetParent = este.offsetParent;

			mientras ( offsetParent && jQuery.css( offsetParent, "posición" ) === "estático" ) {
				offsetParent = offsetParent.offsetParent;
			}

			devolver offsetParent || documentElement;
		} );
	}
} );

// Crea los métodos scrollLeft y scrollTop
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, función( método, propiedad ) {
	var top = "pageYOffset" === propiedad;

	jQuery.fn[método] = función(val) {
		devolver acceso(este, función(elem, método, val) {

			// Fusionar documentos y ventanas
			var ganar;
			si ( esVentana( elem ) ) {
				ganar = elem;
			} de lo contrario si ( elem.nodeType === 9 ) {
				ganar = elem.defaultView;
			}

			si ( val === indefinido ) {
				devolver win ? win[prop] : elem[método];
			}

			si (ganar) {
				ganar.scrollTo(
					!top ? val : win.pageXOffset,
					arriba? val : win.pageYOffset
				);

			} demás {
				elem[metodo] = val;
			}
		}, método, val, argumentos.longitud );
	};
} );

// Compatibilidad: Safari <=7 - 9.1, Chrome <=37 - 49
// Agregue los cssHooks superiores/izquierdos usando jQuery.fn.position
// Error de Webkit: https://bugs.webkit.org/show_bug.cgi?id=29084
// Error de parpadeo: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle devuelve el porcentaje cuando se especifica para arriba/izquierda/abajo/derecha;
// En lugar de hacer que el módulo CSS dependa del módulo de desplazamiento, simplemente compruébelo aquí
jQuery.each( [ "arriba", "izquierda" ], función( _i, propiedad ) {
	jQuery.cssHooks[prop] = addGetHookIf(soporte.pixelPosition,
		función( elem, calculado ) {
			si (calculado) {
				calculado = curCSS( elem, prop );

				// Si curCSS devuelve un porcentaje, se vuelve al desplazamiento
				devolver rnumnonpx.test(calculado) ?
					jQuery( elem ).position()[ prop ] + "px" :
					calculado;
			}
		}
	);
} );


// Crea los métodos innerHeight, innerWidth, height, width, outerHeight y outerWidth
jQuery.each( { Altura: "altura", Ancho: "ancho" }, función( nombre, tipo ) {
	jQuery.each( {
		relleno: "interior" + nombre,
		contenido: tipo,
		"": "exterior" + nombre
	}, función(predeterminadoExtra, funcName) {

		// El margen es solo para outerHeight y outerWidth
		jQuery.fn[funcName] = función(margen, valor) {
			var encadenable = argumentos.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margen === verdadero || valor === verdadero ? "margen" : "borde" );

			devolver acceso(este, función(elem, tipo, valor) {
				var doc;

				si ( esVentana( elem ) ) {

					// $( window ).outerWidth/Height devuelve w/h incluyendo barras de desplazamiento (gh-1729)
					devolver funcName.indexOf( "externo" ) === 0 ?
						elem[ "interior" + nombre ] :
						elem.document.documentElement[ "cliente" + nombre ];
				}

				// Obtener el ancho o alto del documento
				si ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// O bien scroll[Ancho/Alto] o offset[Ancho/Alto] o cliente[Ancho/Alto],
					// el que sea mayor
					devuelve Math.max(
						elem.body[ "scroll" + nombre ], doc[ "scroll" + nombre ],
						elem.body[ "desplazamiento" + nombre ], doc[ "desplazamiento" + nombre ],
						doc[ "cliente" + nombre ]
					);
				}

				valor de retorno === ¿indefinido?

					// Obtener el ancho o la altura del elemento, solicitando pero no forzando parseFloat
					jQuery.css( elemento, tipo, extra ):

					// Establecer el ancho o la altura del elemento
					jQuery.style( elemento, tipo, valor, extra );
			}, tipo, encadenable ? margen: indefinido, encadenable );
		};
	} );
} );


jQuery.each([
	"ajaxInicio",
	"ajaxDetener",
	"ajaxCompletado",
	"Error de ajax",
	"ajaxÉxito",
	"ajaxEnviar"
], función( _i, tipo ) {
	jQuery.fn[ tipo ] = función( fn ) {
		devuelve esto.on( tipo, función );
	};
} );




jQuery.fn.extend( {

	enlazar: función( tipos, datos, fn ) {
		devuelve esto.on( tipos, null, datos, fn );
	},
	desvincular: función( tipos, fn ) {
		devuelve esto.off( tipos, null, fn );
	},

	delegado: función( selector, tipos, datos, fn ) {
		devuelve esto.on( tipos, selector, datos, función );
	},
	anular delegación: función(selector, tipos, fn) {

		// ( espacio de nombres ) o ( selector, tipos [, fn] )
		devolver argumentos.longitud === 1 ?
			esto.off(selector, "**") :
			this.off( tipos, selector || "**", fn );
	},

	pasar el cursor: función (fnOver, fnOut) {
		devuelve esto
			.on( "entrar con el ratón", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "desenfoque, enfoque, enfoque externo, cambio de tamaño, desplazamiento, clic, doble clic") +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"cambiar seleccionar enviar tecla abajo pulsar tecla arriba menú contextual" ).split( " " ),
	función( _i, nombre ) {

		// Manejar la vinculación de eventos
		jQuery.fn[ nombre ] = función( datos, fn ) {
			devolver argumentos.length > 0 ?
				this.on( nombre, null, datos, función ) :
				este.trigger( nombre );
		};
	}
);




// Compatibilidad: solo Android <=4.0
//Asegúrate de recortar BOM y NBSP
// Requiere que la "ejecución de espacios en blanco" comience desde un espacio que no sea en blanco
// para evitar el comportamiento O(N^2) cuando el motor intentaría hacer coincidir "\s+$" en cada posición de espacio.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Vincula una función a un contexto, aplicando opcionalmente de forma parcial cualquier
// argumentos.
// jQuery.proxy está obsoleto para promover estándares (específicamente Function#bind)
// Sin embargo, no está previsto que se elimine en el corto plazo.
jQuery.proxy = función(fn, contexto) {
	var tmp, argumentos, proxy;

	si ( tipo de contexto === "cadena" ) {
		tmp = fn[ contexto ];
		contexto = fn;
		función = temporal;
	}

	// Comprobación rápida para determinar si el objetivo es invocable, en la especificación
	// esto lanza un TypeError, pero simplemente devolveremos undefined.
	si ( !isFunction( fn ) ) {
		devuelve indefinido;
	}

	// Enlace simulado
	args = slice.call( argumentos, 2 );
	proxy = función() {
		devolver fn.apply( contexto || esto, args.concat( slice.call( argumentos ) ) );
	};

	// Establezca el guid del controlador único en el mismo que el controlador original, para que pueda eliminarse
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	devolver proxy;
};

jQuery.holdReady = función( retener ) {
	si (mantener) {
		jQuery.readyWait++;
	} demás {
		jQuery.ready( verdadero );
	}
};
jQuery.isArray = Matriz.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nombreNodo;
jQuery.isFunction = esFunción;
jQuery.isWindow = esVentana;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Fecha.ahora;

jQuery.isNumeric = función(obj) {

	// A partir de jQuery 3.0, isNumeric está limitado a
	// cadenas y números (primitivos u objetos)
	// que se puede convertir en números finitos (gh-2662)
	var tipo = jQuery.type( obj );
	devolver ( tipo === "número" || tipo === "cadena") &&

		// parseFloat NaNs conversión numérica de falsos positivos ("")
		// ...pero malinterpreta las cadenas de números iniciales, particularmente los literales hexadecimales ("0x...")
		// la resta fuerza los infinitos a NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = función( texto ) {
	devolver texto == null ?
		"" :
		( texto + "" ).replace( rtrim, "$1" );
};



// Regístrese como un módulo AMD con nombre, ya que jQuery se puede concatenar con otros
// archivos que pueden usar define, pero no a través de un script de concatenación adecuado que
// comprende módulos AMD anónimos. Un AMD con nombre es el más seguro y robusto
// forma de registrarse. Se utiliza jquery en minúsculas porque los nombres de los módulos AMD son
// derivado de los nombres de archivo, y jQuery normalmente se entrega en minúsculas
// nombre del archivo. Haga esto después de crear el global para que si un módulo AMD desea
// para llamar a noConflict para ocultar esta versión de jQuery, funcionará.

// Tenga en cuenta que para lograr la máxima portabilidad, las bibliotecas que no sean jQuery deberían
// se declaran como módulos anónimos y evitan establecer un valor global si un
// El cargador AMD está presente. jQuery es un caso especial. Para obtener más información, consulte
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

si ( tipo de define === "función" && define.amd ) {
	define( "jquery", [], función() {
		devuelve jQuery;
	} );
}




variedad

	// Mapa sobre jQuery en caso de sobrescritura
	_jQuery = ventana.jQuery,

	// Mapa sobre el $ en caso de sobrescritura
	_$ = ventana.$;

jQuery.noConflict = función( profunda ) {
	si ( ventana.$ === jQuery ) {
		ventana.$ = _$;
	}

	si ( profundo && ventana.jQuery === jQuery ) {
		ventana.jQuery = _jQuery;
	}

	devuelve jQuery;
};

// Exponer jQuery y $ identificadores, incluso en AMD
// (trac-7102#comentario:10, https://github.com/jquery/jquery/pull/557)
// y CommonJS para emuladores de navegador (trac-13566)
si ( tipo de noGlobal === "indefinido") {
	ventana.jQuery = ventana.$ = jQuery;
}




devuelve jQuery;
} );