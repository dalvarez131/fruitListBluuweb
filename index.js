const app = new Vue({
    el: '#app',
    data: {
        title: 'Fruits List in Vue',
        fruits: [{ nombre: 'Manzana', cantidad: 10},
        { nombre: 'Pera', cantidad: 0}],
        inputFruit: ''
    },
    methods: {
        addFruit () {
            let fruitInput = this.inputFruit.charAt(0).toUpperCase() + this.inputFruit.slice(1);
            this.fruits.push({nombre: fruitInput, cantidad: 0});
            this.inputFruit = ''
        },
        lessFruit (cantidadFruta) {
            if (cantidadFruta > 0) {
                cantidadFruta--;
            }
            return cantidadFruta;
        },
        total () {
            let total = [];
            Object.entries(this.fruits).forEach(([key, val]) => {
                total.push(val.cantidad) // the value of the current key.
            });

            return total.reduce(function(total, num){ return total + num }, 0);

        }
    },
});