export interface IFindMany {
  skip?: number;
  take?: number;
  cursor?: any;
  where?: any;
  orderBy?: any;
}

export interface IBaseRepository<T> {
  create(data: any): Promise<T>;
  find(where: any): Promise<T | undefined>;
  findMany(params?: IFindMany): Promise<T[] | undefined>;
  update(where: any, data: any): Promise<T | undefined>;
  delete(where: any): Promise<T | undefined>;
}
