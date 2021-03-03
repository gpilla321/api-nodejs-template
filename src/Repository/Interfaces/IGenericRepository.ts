export default interface IGenericRepository<T> {
    insert(item: T): Promise<boolean>;
    update(item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
    get(value: any): Promise<T>;
    list(): Promise<T[]>;
}