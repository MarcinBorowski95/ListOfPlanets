import { computeApiPage } from "./compute-api-page";

fdescribe("computeApiPage", () => {
  exampleTest({page: 1, pageSize: 5, apiPageSize: 10, expectedApiPage: 1});
  exampleTest({page: 2, pageSize: 5, apiPageSize: 10, expectedApiPage: 1});
  exampleTest({page: 3, pageSize: 5, apiPageSize: 10, expectedApiPage: 2});
  exampleTest({page: 4, pageSize: 5, apiPageSize: 10, expectedApiPage: 2});
  exampleTest({page: 4, pageSize: 10, apiPageSize: 10, expectedApiPage: 4});
  exampleTest({page: 4, pageSize: 15, apiPageSize: 10, expectedApiPage: 5});
  exampleTest({page: 4, pageSize: 25, apiPageSize: 10, expectedApiPage: 8});

  function exampleTest(testCase: { page: number, pageSize: number, apiPageSize: number, expectedApiPage: number }) {
    const {page, pageSize, apiPageSize, expectedApiPage} = testCase
    it(JSON.stringify(testCase), () => {
      const result = computeApiPage({page, pageSize, apiPageSize});
      expect(result).toBe(expectedApiPage);
    });
  }
});
