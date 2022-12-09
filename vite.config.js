import { defineConfig } from 'vite';

export default defineConfig({
  // プロジェクトルート（index.html）を'/'から'src'へ変更
  // https://ja.vitejs.dev/config/shared-options.html#root
  root: 'src',
  // build後のindex.html内にあるパス指定を絶対パス'/'から相対パス'./'にする
  // https://ja.vitejs.dev/config/shared-options.html#base
  base: './',
  server: {
    // npm run dev時にlocalhostで立ち上げる
    // https://github.com/vitejs/vite/discussions/3396
    host: true,
  },
  build: {
    // build先のdistがプロジェクトルート上（index.htmlと同じ場所）に生成されるのを変更、生成先をトップディレクトリにするようにindex.htmlから見た相対パスで指定
    // https://ja.vitejs.dev/config/build-options.html#build-outdir
    outDir: '../dist',
    // dist生成先がプロジェクトルートでないのでbuild時に/distを空にするのをやめてしまうが、強制的に空にさせる。
    // https://ja.vitejs.dev/config/build-options.html#build-emptyoutdir
    emptyOutDir: true,
  },
});
