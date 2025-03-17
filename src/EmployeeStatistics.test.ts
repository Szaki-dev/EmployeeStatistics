import { it, expect, describe, beforeEach } from 'vitest';
import { EmployeeStatistics } from './EmployeeStatistics';
import { Employee } from './Employee';

let egyikHalmaz = [
    { name: 'Kiss Pista', age: 25, salary: 200000 },
    { name: 'Nagy Béla', age: 30, salary: 300000 },
    { name: 'Kovács János', age: 35, salary: 250000 }
] as Employee[];
let masikHalmaz = [
    { name: 'Kiss Pista', age: 40, salary: 100000 },
    { name: 'Nagy András', age: 40, salary: 700000 },
    { name: 'Kovács János', age: 18, salary: 350000 },
    { name: 'Kis Anna', age: 52, salary: 400000 }
] as Employee[];

let egyikES: EmployeeStatistics;
let masikES: EmployeeStatistics;

beforeEach(() => {
    egyikES = new EmployeeStatistics(egyikHalmaz);
    masikES = new EmployeeStatistics(masikHalmaz);
});

describe('Konstruktor teszt', () => {
    it('Ha nem kap listat hibat dob', () => {
        expect(() => new EmployeeStatistics(undefined!)).toThrow();
        expect(() => new EmployeeStatistics(null!)).toThrow();
    });
    it('Ha jó listát kap nem dob hibát', () => {
        expect(() => new EmployeeStatistics(egyikHalmaz)).not.toThrow();
        expect(() => new EmployeeStatistics(masikHalmaz)).not.toThrow();
    });
});

describe('getAverageSalary', () => {
    it('Ures ES-re hibat dob', () => {
        let uresES = new EmployeeStatistics([]);
        expect(() => uresES.getAverageSalary()).toThrow();
    });
    it('Visszaadja a bérek átlagát', () => {
        expect(egyikES.getAverageSalary()).toBe(250000);
        expect(masikES.getAverageSalary()).toBe(387500);
    });
})

describe('getMaxSalary', () => {
    it('Ures ES-re hibat dob', () => {
        let uresES = new EmployeeStatistics([]);
        expect(() => uresES.getMaxSalary()).toThrow();
    });
    it('Visszaadja a legnagyobb bért', () => {
        expect(egyikES.getMaxSalary()).toBe(300000);
        expect(masikES.getMaxSalary()).toBe(700000);
    });
})

describe('getMinSalary', () => {
    it('Ures ES-re hibat dob', () => {
        let uresES = new EmployeeStatistics([]);
        expect(() => uresES.getMinSalary()).toThrow();
    });
    it('Visszaadja a legkisebb bért', () => {
        expect(egyikES.getMinSalary()).toBe(200000);
        expect(masikES.getMinSalary()).toBe(100000);
    });
})

describe('getAverageAge', () => {
    it('Ures ES-re hibat dob', () => {
        let uresES = new EmployeeStatistics([]);
        expect(() => uresES.getAverageAge()).toThrow();
    });
    it('Visszaadja a dolgozók átlag életkorát', () => {
        expect(egyikES.getAverageAge()).toBe(30);
        expect(masikES.getAverageAge()).toBe(37.5);
    });
})

describe('getHighestPaidEmployee', () => {
    it('Ures ES-re hibat dob', () => {
        let uresES = new EmployeeStatistics([]);
        expect(() => uresES.getHighestPaidEmployee()).toThrow();
    });
    it('Vissza adja a legjobban kereső dolgozó nevét', () => {
        expect(egyikES.getHighestPaidEmployee()).toBe('Nagy Béla');
        expect(masikES.getHighestPaidEmployee()).toBe('Nagy András');
    });
})

