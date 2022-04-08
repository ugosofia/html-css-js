interface IUser {
    username: string
    password: string
    email: string
    enable?: boolean
}

interface IThread {
    start(): void
}


interface IRunnable extends IUser {

    run(): void;
}

abstract class IRunner {
    name: string

    constructor() {
    }

    abstract print();
    abstract set();
}

interface IPrinterOut<U, V extends { run(): void}, T, S extends IRunnable> {
    print(param: U, param1: V): void;
    start(param: U, param2?: V, param3?: T): S;
}

class PrinterOut implements IPrinterOut<Object, {}, number, IRunnable> {
    print(param: Object, param1: {}): void {
        throw new Error("Method not implemented")
    }
    start(param: Object, param2?: {}, param3?: number): IRunnable {
        throw new Error("Method not implemented")
    }
}

type Obj = IPrinterOut<Object, {}, number, IRunnable>
declare const globalVar;

