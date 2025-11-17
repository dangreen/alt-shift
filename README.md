# alt-shift

## Project setup

1. First, you need to install Node.js and pnpm. You can do it using [asdf](https://asdf-vm.com/). Just install [nodejs](https://github.com/asdf-vm/asdf-nodejs) and [pnpm](https://github.com/jonathanmorley/asdf-pnpm) plugins and then run `asdf install` in the project root directory. Or you can install it manually from the official websites: [Node.js](https://nodejs.org/en/) and [pnpm](https://pnpm.io/). See the `.tool-versions` file for the required versions.
2. Run `pnpm install` to install the dependencies.
3. Create a `.env.local` file in the project root directory. You can copy the `.env.example` file and set the values.

```sh
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf plugin add pnpm
asdf install
pnpm install
pnpm updateGitHooks # install git hooks
cp .env.example .env.local
```

## Development

Available scripts:

- `pnpm dev` - starts the development server.
- `pnpm build` - builds the project.
- `pnpm build:sprite` - generates SVG sprite from icons.
- `pnpm preview` - starts the preview server. You need to build the project first.
- `pnpm storybook` - starts the Storybook server.
- `pnpm build:storybook` - builds the Storybook project.
- `pnpm clear` - clears dist directories.
- `pnpm lint` - runs ESLint and Stylelint.
- `pnpm lint:scripts` - runs ESLint.
- `pnpm lint:styles` - runs Stylelint.
- `pnpm format` - runs ESLint and Stylelint with auto-fix.
- `pnpm format:scripts` - runs ESLint with auto-fix.
- `pnpm format:styles` - runs Stylelint with auto-fix.
- `pnpm test` - runs lint and type checking.
- `pnpm test:types` - runs TypeScript type checking.
- `pnpm commit` - starts the conventional commit wizard.
- `pnpm updateGitHooks` - updates git hooks.
