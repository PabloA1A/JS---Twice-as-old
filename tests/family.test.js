import { describe, expect, it } from "vitest";
import { calcularEdades } from "../src/family";

describe('Función calcularEdades', () => {
    it('Edad del padre: 36 y edad del hijo: 7', () => {
        const padre = 36;
        const hijo = 7;
        const resultado = calcularEdades(padre, hijo);
        expect(resultado).toBe(22);
    });

    it('Edad del padre: 55 y edad del hijo: 30', () => {
        const padre = 55;
        const hijo = 30;
        const resultado = calcularEdades(padre, hijo);
        expect(resultado).toBe(5);
    });

    it('Edad del padre: 42 y edad del hijo: 21', () => {
        const padre = 42;
        const hijo = 21;
        const resultado = calcularEdades(padre, hijo);
        expect(resultado).toBe(0);
    });

    it('Edad del padre: 22 y edad del hijo: 1', () => {
        const padre = 22;
        const hijo = 1;
        const resultado = calcularEdades(padre, hijo);
        expect(resultado).toBe(20);
    });

    it('Edad del padre: 29 y edad del hijo: 0', () => {
        const padre = 29;
        const hijo = 0;
        const resultado = calcularEdades(padre, hijo);
        expect(resultado).toBe(29);
    });
});