import { computeFirstApiResultIndex } from "./compute-first-api-result-index";

export function computeNumberOfApiPages(args: { page: number, pageSize: number, apiPageSize: number }): number {
  const {pageSize, apiPageSize} = args;

  return Math.ceil((computeFirstApiResultIndex(args) + pageSize) / apiPageSize);
}
