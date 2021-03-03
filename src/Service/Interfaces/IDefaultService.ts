export default interface IDefaultService<T> {
    get(value: any): Promise<T>;
    list(): Promise<T[]>;
    insert(): Promise<T>;
    update(): Promise<T>;
    delete(): Promise<T>;
}