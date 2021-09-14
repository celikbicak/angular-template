export interface TestData {
  id: string;
  value: string;
}

export function createTestDatas(): TestData[] {
  return [
    {
      id: '1',
      value: 'Value One',
    },
    {
      id: '2',
      value: 'Value Two',
    },
  ];
}
