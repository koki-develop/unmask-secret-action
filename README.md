# Unmask Secret Action

[![GitHub Release](https://img.shields.io/github/v/release/koki-develop/unmask-secret-action)](https://github.com/koki-develop/unmask-secret-action/releases/latest)
[![CI](https://img.shields.io/github/actions/workflow/status/koki-develop/unmask-secret-action/ci.yml?branch=main&logo=github&style=flat&label=ci)](https://github.com/koki-develop/unmask-secret-action/actions/workflows/ci.yml)
[![Build](https://img.shields.io/github/actions/workflow/status/koki-develop/unmask-secret-action/build.yml?branch=main&logo=github&style=flat&label=build)](https://github.com/koki-develop/unmask-secret-action/actions/workflows/build.yml)

Unmask a secret value.

## Usage

```yaml
- uses: koki-develop/unmask-secret-action@v1
  with:
    secret: ${{ secrets.SOME_SECRET }}
```

![](./assets/demo.png)

## LICENSE

[MIT](./LICENSE)
