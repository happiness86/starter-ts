import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index',
    './src/cli.ts',
  ],
  outDir: 'dist',
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    output: {
      dir: 'dists',
    },
  },
})
