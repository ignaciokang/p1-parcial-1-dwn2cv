'use strict';

/*
 * KANG, IGNACIO DAMIÁN
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

// Discos:
let discos = [];

// Función Cargar:
const Cargar = () => {
	// Cositas:
	let disco = {
		nombre: '',
		autor: '',
		codigo: 0,
		pistas: [],
	};

	do {
		disco.nombre = prompt('Ingrese nombre del disco');
	} while (!isNaN(disco.nombre) || disco.nombre === '');

	do {
		disco.autor = prompt('Ingrese autor del disco');
	} while (!isNaN(disco.autor) || disco.autor === '');
	do {
		disco.codigo = parseInt(prompt('Ingrese código del disco'));
	} while (isNaN(disco.codigo) || validadorCodigo(disco.codigo));

	do {
		let pista = {
			nombre: '',
			duracion: 0,
		};
		do {
			pista.nombre = prompt('Ingrese nombre de la pista');
		} while (!isNaN(pista.nombre) || pista.nombre === '');

		do {
			pista.duracion = parseInt(
				prompt(
					'Ingrese duración de la pista. El rango de duración es 0 a 7200 segundos.'
				)
			);
		} while (
			isNaN(pista.duracion) ||
			pista.duracion < 0 ||
			pista.duracion > 7200
		);

		disco.pistas.push(pista);
	} while (confirm('Desea agregar otra pista?'));

	discos.push(disco);
	console.log('discos', discos);
};

const Mostrar = () => {
	const discosCargados = document.createElement('p');
	discosCargados.innerText = `Discos cargados: ${discos.length}`;
	document.querySelector('main').append(discosCargados);
	for (let index = 0; index < discos.length; index++) {
		const element = discos[index];

		const section = document.createElement('section');

		const pNombre = document.createElement('p');
		pNombre.innerText = `Disco: ${element.nombre}`;

		const pAutor = document.createElement('p');
		pAutor.innerText = `Autor: ${element.autor}`;

		const pCodigo = document.createElement('p');
		pCodigo.innerText = `Codigo: ${element.codigo}`;

		const numeroPistas = document.createElement('p');
		numeroPistas.innerText = `Numero de pistas: ${element.pistas.length}`;

		section.append(pNombre, pAutor, pCodigo, numeroPistas);
		let total = 0;
		// Recorro las canciones
		for (let i = 0; i < element.pistas.length; i++) {
			const cancion = element.pistas[i];
			total += cancion.duracion;
			const pTitulo = document.createElement('p');
			pTitulo.innerText = `${i + 1}: ${cancion.nombre}`;
			pTitulo.setAttribute('class', 'titulo');

			const pDuracion = document.createElement('p');
			pDuracion.setAttribute('class', 'duracion');

			pDuracion.innerText = `Duracion: ${cancion.duracion}`;
			if (cancion.duracion > 180) {
				pDuracion.setAttribute('id', 'mayorDuracion');
			}
			section.append(pTitulo, pDuracion);
		}
		const duracionTotal = document.createElement('p');
		duracionTotal.innerText = `Duracion Total del disco: ${total} segundos`;

		const duracionPromedio = document.createElement('p');
		duracionPromedio.innerText = `Promedio de duración: ${
			total / element.pistas.length
		} segundos`;
		section.append(duracionTotal, duracionPromedio);

		document.querySelector('main').append(section);
	}
};

const validadorCodigo = (codigo) => {
	for (let index = 0; index < discos.length; index++) {
		if (codigo === discos[index].codigo || codigo < 1 || codigo > 999) {
			alert(
				'El código ingresado ya está en uso o no está entre el rango 1 y 999'
			);
			return true;
		} else {
			return false;
		}
	}
};

//Esta sería mi función para que se pueda mostrar la información de un disco específico mediante su código numérico.
const buscadorDiscos = (codigo) => {
	for (let index = 0; index < discos.length; index++) {
		if (discos[index].codigo === codigo) {
			return discos[index];
		}
	}
};
