import { computeFirstApiResultIndex } from "./computeFirstApiResultIndex";

fdescribe("computeFirstApiResultIndex", () => {
  exampleTest({page: 1, pageSize: 5, apiPageSize: 10, expectedApiPage: 0});
  exampleTest({page: 2, pageSize: 5, apiPageSize: 10, expectedApiPage: 5});
  exampleTest({page: 3, pageSize: 5, apiPageSize: 10, expectedApiPage: 0});
  exampleTest({page: 4, pageSize: 5, apiPageSize: 10, expectedApiPage: 5});
  exampleTest({page: 2, pageSize: 7, apiPageSize: 10, expectedApiPage: 7});
  exampleTest({page: 3, pageSize: 7, apiPageSize: 10, expectedApiPage: 4});
  exampleTest({page: 2, pageSize: 10, apiPageSize: 10, expectedApiPage: 0});
  exampleTest({page: 2, pageSize: 15, apiPageSize: 10, expectedApiPage: 5});
  exampleTest({page: 2, pageSize: 25, apiPageSize: 10, expectedApiPage: 5});

  function exampleTest(testCase: { page: number, pageSize: number, apiPageSize: number, expectedApiPage: number }) {
    const {page, pageSize, apiPageSize, expectedApiPage} = testCase
    it(JSON.stringify(testCase), () => {
      const result = computeFirstApiResultIndex({page, pageSize, apiPageSize});
      expect(result).toBe(expectedApiPage);
    });
  }
});
