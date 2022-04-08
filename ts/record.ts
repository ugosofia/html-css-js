export interface IRecords {
    id: string;
    name: string;
    age?: number;
    description: string;
}

export interface IRecordsOperation<Z> {
    loadRecord(param: Z): Z | null;
    printData<Z>(): void;
}

export abstract class RecordsImpl implements IRecordsOperation<IRecords> {
    
    record: IRecords;
    constructor({ id, name, age, description }: IRecords) {
        this.record.id = id;
        this.record.name = name;
        this.record.age = age;
        this.record.description = description;
    }
    
    printData<IRecords>(): void {
        this.record = this.loadRecord(null);
    }

    loadRecord(record:IRecords): IRecords | null{
        record.id = "1";
        record.name = "Californication";
        record.age = 12;
        record.description = "Red Hot Chili Peppers Californication";
        return record;
    }

}