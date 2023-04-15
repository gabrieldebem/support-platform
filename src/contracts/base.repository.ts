import { PrismaService } from "src/prisma.service";
export interface IFindMany {
  skip ?: number;
  take ?: number;
  cursor ?: any;
  where ?: any;
  orderBy ?: any;
};

export abstract class BaseRepository<T> {
  constructor(protected readonly prisma: PrismaService) { }

  abstract create(data: any): Promise<T>;
  abstract find(where: any): Promise<T>;
  abstract findMany(params: IFindMany): Promise<T[]>;
  abstract update(where: any, data: any): Promise<T>;
  abstract delete(where: any): Promise<T>;
}
