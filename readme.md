# Introduction

This technical test has been designed to evaluate your ability to build decoupled, robust and well tested software. We don't intend to evaluate your algorithm, syntax or language proficiency here.

# Goal

The idea of this technical test is to refactor the provided code to make it more testable and more decoupled. You can both change the code itself and add as many tests as you find necessary.

# Rules

- You can change the code implementation as much as you want as long as the behavior stay the same (end result and side effects).
- You can add as many test types as you want (unit, acceptance, end to end, integration...).
- The `./src/dependencies` folder is read only and cannot be modified (consider it as your `node_modules`) but you are free to encapsulate those dependencies in dedicated modules to abstract them.
- You can (and are encouraged) to split the `src/index.ts` file into as many file as you want and create a folder structure arround it.
- You can add dependencies to the `package.json` file but it should be not necessary. Don't hesitate to explain why if you do.

# Advices

- Following a hexagonal architecture might help you to acheive the goal of this test.
- As you can see there is no real "finish line", you can stop this exercice whenever you think it's complete. That being said, as the code is pretty simple, you should not spend more than an hour to complete this task.
- Even if this test goal is to improve the testability of this code, the real end goal is to improve the overall quality of this app architecture.
- Don't forget to document how to launch your new test suites.
- The `./src/test.unit.ts` is only here as a (bad) example and should be deleted.

# Instructions

Start by cloning this repository

    git clone git@github.com:juliensnz/technical-test.git

Install dependencies

    yarn install

Transpile typescript code to javascript

    yarn build

Run command:

    yarn newsletter:send

_You should see a log in your console saying that a newsletter has been send_

Launch the existing test suite:

    yarn test
