// Creditos: https://www.youtube.com/watch?v=x7-FEpbUDmI&t=1s

class Subject {
  constructor() {
    this.observers = []; // coleccion de observadores
  }

  subscribe(obs) {
    //recibe el observador
    this.observers.push(obs);
  }

  unsubscribe(obs) {
    this.observers = this.observers.filter((e) => e !== obs); // se elimina observer
  }

  notify(o) {
    // para notificar a los observadores un cambio de estado
    this.observers.forEach((obs) => {
      obs.notify(o); //suponemos que tiene el metodo notify por ser JS.
    });
  }
}

// la siguiente clase heredera de Subject:

class ItemSubject extends Subject {

  constructor(){
    super(); // Invocamos constructor padre
    this.items = [];
  }

  notify(item) {  // o next
    this.items.push(item)
    // informamos a los observadores que algo se agregó:
    super.notify(this); // estamos mandando el objeto mismo en sí.
  }
}

// creamos los observadores:

class ListObserver {

  constructor(tag) {
    this.tag = tag
  }

  notify(subject){ //es necesario que los observadores tengan este método ya que se invoca en la linea 18

    // console.log("observador lista");
    // subject.items.forEach(e => console.log(e))  // ???

    this.tag.innerHTML = '';

    subject.items.forEach(e => {
      let div = document.createElement('div');

      div.innerHTML = `<p>${e.description} <b>${e.amount}</b></p> `;

      this.tag.appendChild(div)
    })

  }
}

// agregamos otro observador:
class TotalObserver {

  constructor(tag) {
    this.tag = tag
  }

  notify(subject) {
    // console.log("observador total");

    let total =
      subject.items.reduce(
        (ac, current ) => 
          ac + parseFloat(current.amount),
      0);

      this.tag.innerHTML = total;
  }
}

// Observador dinámico:
class DynamicObserver {
  constructor(tag, fn) {
    this.tag = tag;
    this.fn = fn;
  }

  notify(subject) {
    this.fn(subject, this.tag)
  }
}