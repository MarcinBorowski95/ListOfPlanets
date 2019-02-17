export function computeFirstApiResultIndex(args: { page: number, pageSize: number, apiPageSize: number }): number {
  const {page, pageSize, apiPageSize} = args;

  return ((page - 1) * pageSize % apiPageSize);
}
