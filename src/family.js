export function calcularEdades(padre, hijo) {
    if (hijo * 2 >= padre) {
        return hijo * 2 - padre;
    } else {
        return padre - hijo * 2;
    }
}