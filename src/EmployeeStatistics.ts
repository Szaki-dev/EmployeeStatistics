import { Employee } from "./Employee";

export class EmployeeStatistics {
    private employees: Employee[];

    constructor(employees: Employee[]) {
        if (!employees) {
            throw new Error("A dolgozók megadása kötelező");
        }
        this.employees = employees;
    }

    private checkUres() {
        if (this.employees.length === 0) {
            throw new Error("Nincsenek dolgozók az adatbázisban");
        }
    }

    getAverageSalary(): number {
        this.checkUres();
        let ossz = 0;
        this.employees.forEach(e => ossz += e.salary);
        return ossz / this.employees.length;
    }

    getMaxSalary(): number {
        this.checkUres();
        let max = this.employees[0].salary;
        this.employees.forEach(e => { if(e.salary > max) max = e.salary });
        return max;
    }

    getMinSalary(): number {
        this.checkUres();
        let min = this.employees[0].salary;
        this.employees.forEach(e => { if(e.salary < min) min = e.salary });
        return min;
    }

    getAverageAge(): number {
        this.checkUres();
        let ossz = 0;
        this.employees.forEach(e => ossz += e.age);
        return ossz / this.employees.length;
    }

    getHighestPaidEmployee(): string {
        this.checkUres();
        let maxSalary = this.getMaxSalary();
        return this.employees.find(e => e.salary === maxSalary)!.name;
    }
}
