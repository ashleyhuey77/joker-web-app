import {jest} from '@jest/globals'

jest.mock("../../components/views/dashboard/PassPercentage", () => {
  return {
    PassPercentage: () => {
      return <mock-pass-percentage data-testid="pp"/>;
    },
  }
});
