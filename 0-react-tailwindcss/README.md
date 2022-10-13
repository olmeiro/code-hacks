
# App.jsx line 19 flex-1:
```
.flex-1 {
    flex: 1 1 0%;
} 
```
    Los 3 valores son: flex-grow | flex-shrink | flex-basis

#### flex-grow:
 de CSS especifica el factor de crecimiento de un elemento flexible. Se especifica qué cantidad de espacio debe ocupar el elemento dentro del contenedor flexible.
 
 #### flex-shrink:
  de CSS especifica el factor de contracción de flexión de un elemento flexible.

      En tu caso 1, es decir, se va a achicar 1 veces más rápido que sus hermanos.

#### La propiedad flex-basis 
      
      de CSS específica la base flexible, la cual es el tamaño inicial de un elemento flexible. Ésta propiedad determina el tamaño de una caja de contenidos a no ser que se haya especificado de otra forma usando box-sizing.

      En tu caso auto, es decir, su tamaño inicial se calculara automáticamente.
      
### notes: 
  https://bobbyhadz.com/blog/react-ref-add-event-listener