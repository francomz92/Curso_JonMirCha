/*
   27) Programa una clase llamada Pelicula.

   La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
   - Todos los datos del objeto son obligatorios.
   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
      7 restantes números.
   - Valida que el título no rebase los 100 caracteres.
   - Valida que el director no rebase los 50 caracteres.
   - Valida que el año de estreno sea un número entero de 4 dígitos.
   - Valida que el país o paises sea introducidos en forma de arreglo.
   - Valida que los géneros sean introducidos en forma de arreglo.
   - Valida que los géneros introducidos esten dentro de los géneros 
      aceptados*.
   - Crea un método estático que devuelva los géneros aceptados*.
   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
      decimal de una posición.
   - Crea un método que devuelva toda la ficha técnica de la película.
   - Apartir de un arreglo con la información de 3 películas genera 3 
      instancias de la clase de forma automatizada e imprime la ficha técnica 
      de cada película.

   * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

const GENEROS_ACEPTADOS = [
   'Action',
   'Adult',
   'Adventure',
   'Animation',
   'Biography',
   'Comedy',
   'Crime',
   'Documentary',
   'Drama',
   'Family',
   'Fantasy',
   'Film Noir',
   'Game-Show',
   'History',
   'Horror',
   'Musical',
   'Music',
   'Mystery',
   'News',
   'Reality-TV',
   'Romance',
   'Sci-Fi',
   'Short',
   'Sport',
   'Talk-Show',
   'Thriller',
   'War',
   'Western',
];

class Pelicula {
   constructor(IMDB, titulo, director, anioEstreno, paisOrigen, generos, calificacion) {
      this.validators(IMDB, titulo, director, anioEstreno, paisOrigen, generos, calificacion),
         (this.IMDB = IMDB),
         (this.titulo = titulo),
         (this.director = director),
         (this.anioEstreno = anioEstreno),
         (this.paisOrigen = paisOrigen),
         (this.generos = generos),
         (this.calificacion = calificacion);
   }

   validators(IMDB, titulo, director, anioEstreno, paisOrigen, generos, calificacion) {
      this._validate_IMDB(IMDB);
      this._validate_titulo(titulo);
      this._validate_director(director);
      this._validate_anioEstreno(anioEstreno);
      this._validate_paisOrigen(paisOrigen);
      this._validate_generos(generos);
      this._validate_calificacion(calificacion);
   }

   _validate_IMDB(IMDB) {
      if (IMDB.length !== 9) {
         throw new Error('El IMDB debe tener 9 caracteres.');
      }
      if (typeof parseInt(IMDB.slice(0, 2)) === NaN) {
         throw new Error('Los primeros 2 caracteres del IMDB deben ser letras.');
      }
      if (typeof parseInt(IMDB.slice(2)) !== 'number' || parseInt(IMDB.slice(2)).toString().length !== 7) {
         throw new Error('Los últimos 7 valores del IMDB deben ser numéricos.');
      }
   }

   _validate_titulo(titulo) {
      if (titulo.length > 100) {
         throw new Error('El título no debe ser mayor a los 100 caracteres.');
      }
   }

   _validate_director(director) {
      if (director.length > 50) {
         throw new Error('El título no debe ser mayor a los 50 caracteres.');
      }
   }

   _validate_anioEstreno(anioEstreno) {
      if (!Number.isInteger(anioEstreno)) {
         throw new Error('El año debe ser un número entero.');
      }
      if (anioEstreno.toString().length !== 4) {
         throw new Error('El año de estreno debe tener 4 digitos.');
      }
   }

   _validate_paisOrigen(paisOrigen) {
      if (paisOrigen instanceof Array === false) {
         throw new Error('Pais de origen debe ser un array.');
      }
   }

   _validate_generos(generos) {
      if (generos instanceof Array === false) {
         throw new Error('Pais de origen debe ser un array.');
      }
      for (const genero of generos) {
         if (!GENEROS_ACEPTADOS.includes(genero)) {
            throw new Error(`Erro, los generos permitidos son ${GENEROS_ACEPTADOS}`);
         }
      }
   }

   _validate_calificacion(calificacion) {
      if (typeof calificacion !== 'number') {
         throw new Error('La calificación debe ser un número.');
      }
      if (calificacion < 0 || calificacion > 10) {
         throw new Error('La calificación debe ser un valor numérico entre 0 y 10');
      }
      if (calificacion.toString().length > 3) {
         throw new Error('La calificación no debe tener más de un decimal.');
      }
   }

   static generosAceptados() {
      return GENEROS_ACEPTADOS;
   }

   toString() {
      return `IMDB: ${this.IMDB}, Título: ${this.titulo}, Director: ${this.director}, Año de estreno: ${this.anioEstreno}, Pais/es de origen: ${this.paisOrigen}, Genero/s: ${this.generos}, Calificación: ${this.calificacion}`;
   }
}

let pelicula = new Pelicula('ab2123456', 'Un título', 'Ricardo Darin', 2007, ['Argentina'], ['Action'], 9.7);

console.log(Pelicula.generosAceptados());
console.log(pelicula);
console.log(pelicula.toString());
