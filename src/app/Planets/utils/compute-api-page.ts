export function computeApiPage(args:{page: number, pageSize: number, apiPageSize: number}): number {
  const{page, pageSize, apiPageSize} = args;

  return Math.ceil((((page-1)*pageSize)+1)/apiPageSize);
}
