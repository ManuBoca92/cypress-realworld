# cypress-realworld

To open **cypress** run `yarn cypress:open`

## Linting

Eslint is used for linting. To run **eslint** use `yarn lint` command

To fix eslint errors run `yarn lint --fix`

## Formatting

Prettier is used to format the code automatically on save. To run **prettier** manually, please use this command `yarn format`

## CI/CD

I used **CircleCI** as the CI/CD tool.

### Artifacts

#### Code coverage

E2E code coverage collected during each test is stored under **artifacts** tab and can be found at `coverage/lcov-report/index.html`

#### Test reporter

I used **mochawesome** test report for this project and the test report for all tests are store on the **artifacts** tab on circleci
