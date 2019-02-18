import { computeNumberOfApiPages } from "./compute-number-of-api-pages";

fdescribe("computeNumberOfApiPages", () => {
  exampleTest({page: 1, pageSize: 5, apiPageSize: 10, expectedApiPage: 1});
  exampleTest({page: 1, pageSize: 7, apiPageSize: 10, expectedApiPage: 1});
  exampleTest({page: 2, pageSize: 7, apiPageSize: 10, expectedApiPage: 2});
  exampleTest({page: 3, pageSize: 7, apiPageSize: 10, expectedApiPage: 2});
  exampleTest({page: 4, pageSize: 7, apiPageSize: 10, expectedApiPage: 1});
  exampleTest({page: 1, pageSize: 10, apiPageSize: 10, expectedApiPage: 1});
  exampleTest({page: 1, pageSize: 15, apiPageSize: 10, expectedApiPage: 2});
  exampleTest({page: 1, pageSize: 25, apiPageSize: 10, expectedApiPage: 3});

  function exampleTest(testCase: { page: number, pageSize: number, apiPageSize: number, expectedApiPage: number }) {
    const {page, pageSize, apiPageSize, expectedApiPage} = testCase
    it(JSON.stringify(testCase), () => {
      const result = computeNumberOfApiPages({page, pageSize, apiPageSize});
      expect(result).toBe(expectedApiPage);
    });
  }
});
