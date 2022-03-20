export default
    class Impuesto {
    constructor(mba, ded) {
        this._mba = mba;
        this._ded = ded;
    }

    get mba() {
        return this._mba
    }

    set mba(nuevo_mba) {
        this._mba = nuevo_mba
    }

    get ded() {
        return this._ded;
    }

    set ded(nuevo_ded) {
        this._dad = nuevo_ded
    }
}
