export default class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }

    calcularImpuesto() {
        return (this._impuesto.mba - this._impuesto.ded) * 0.21;

    }
}