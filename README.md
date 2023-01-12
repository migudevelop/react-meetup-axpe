# Scripts principales del proyecto

```
# Levantar el proyecto en modo desarrollo (se levanta el servidor con los mocks)
npm run start:dev

# Levantar el servidor y la aplicación en terminales separas.
npm run server
npm run start

# Lanzar los tests unitarios
npm run test

# Lanzar los tests e2e con cypress
# (se generaran videos de los tests en la carpeta cypress/videos)
npm run test:e2e


```

Se han añadido más scripts en el package.json para ayudarnos en el desarrollo.
# Prueba teorica

El principal problema que detecto es que eso daría error al ejecutarse, esto pasa por que está intentando acceder a service, el cual le has pasado como primer parámetro al forEach y este no está definido en la función que le pasas como segundo parámetro. La forma correcta de utilizar forEach es pasándole una función, para que esto funcione se solucionaría de la siguiente manera:

```
services.forEach((service, index) => {
    // código
}
```

De esta forma podemos acceder tanto a service como a index. Aunque index no haría falta ya que no lo estamos utilizando.

El segundo problema importante que encuentro es un problema de escalabilidad, ya que si el día de mañana nuestra aplicación crece y queremos añadir nuevas formas de servicio o distintos contenidos multimedia nos sería más difícil adaptarlo. También al ir añadiendo nuevos servicios y condicionales en la función, el código se volvería menos legible y cabría la posibilidad de una mayor aparición de bugs, de esta manera una persona que entre nueva en la empresa y que tenga que tocar esta parte podría tener más problema para entenderlo.

La solución que propondría sería crear una clase Servicio con el método getPrice común y que los distintos servicios extiendan de ella sobrescriban el método getPrice, de esta manera el método será el mismo pero cada servicio devolverá un precio diferente según el servicio.

```
class Service {
    /**
        Le pasamos el contenido multimedia en el constructor.
     */
    constructor(multimediaContent){
        this.multimediaContent = multimediaContent
    }

    getMultimediaContent(){
      return this.multimediaContent
    }

    getPrice(){
      // Cada hijo que extienda deberá sobeescribir el metodo
      // devolviendo el preció que le corresponda.
   }
}
```
```
class StreamingService extends Service{
    constructor(multimediaContent){
        super(multimediaContent)
    }
    
    getPrice(){
        return super.getMultimediaContent().getSteamingPrice()
    }
}
```
```
class DownloadService extends Service{
    constructor(multimediaContent){
        super(multimediaContent)
    }
    
    getPrice(){
        return super.getMultimediaContent().getDownloadPrice()
    }
}
```

También haría que la clase MultimediaContent tuviera los métodos getSteamingPrice, getDownloadPrice y fuese una clase común para los contenidos. De esta manera cada contenido podría adaptar más fácilmente el preció sin modificar las demás clases.

```
class MultimediaContent{
    constructor(){
        // Se podrían definir los precios comunes pasandoselo por parametro.
        this.streamingPrice = 50        
        this.downloadPrice = 100        
    }

    getSteamingPrice(){
        return this.streamingPrice;
    }
    
    getDownloadPrice(){
        return this.downloadPrice;
    }
}
```
```
class PremiumContent extends MultimediaContent {
    /**
        Sobreescribimos los metodos para añadirles el coste premium
     */
    getSteamingPrice(){
        return super.getSteamingPrice() + 20
    }

    getDownloadPrice(){
        return super.getDownloadPrice() + 50
    }
}
```

De esta manera el usuario simplemente tendría que utilizar el método getPrice para obtener el precio.

```
class RegisteredUser {
    constructor(services = []) {
      this.services = services;
    }
  
    getTotal() {
      return this.services.map(service => service.getPrice()).reduce((a,b) => a + b, 0);
    }
  }
```


