import { compilerOptions } from './tsconfig.json';
import { pathsToModuleNameMapper } from 'ts-jest';

const createConfig = (directory: string) => ({
  clearMocks: true,
  coverageDirectory: `coverage/${directory}`,
  moduleNameMapper: {
    ...pathsToModuleNameMapper(
      compilerOptions.paths,
      { prefix: '<rootDir>/' },
    ),
  },
  preset: 'ts-jest',
  roots: [ `<rootDir>/${directory}`],
  testEnvironment: 'node',
});

const server = createConfig('src/');

export default {
  collectCoverage: true,
  projects: [ server ],
}
