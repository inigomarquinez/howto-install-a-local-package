# [HOWTO] Install a local package

This is a demo repository to show different alternatives on how we can install a **local** package and *publish* it locally so it can be installed on another project without having to publish it at [npm](https://www.npmjs.com/) to test it.

The demo consists of two repositories:

- [This repo](https://github.com/inigomarquinez/howto-install-a-local-package) contains the project that will use the package locally installed.
- [This repo](https://github.com/inigomarquinez/howto-develop-a-package-locally) contains the local package we want to iteratively test.

## Alternatives

### [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link)

This npm command creates a symlink to a package folder.

Package linking is a two-step process:

1. First, `npm link` in a package folder will create a symlink in the global folder `{prefix}/lib/node_modules/<package>` that links to the package where the npm link command was executed. It will also link any bins in the package to `{prefix}/bin/{name}`.

2. Next, in some other location, `npm link package-name` will create a symbolic link from globally-installed package-name to `node_modules/` of the current folder.

In our case, we need to run these commands when located in the roor folder of this repository to be able to use the local package:

```bash
npm link @ks/my-local-package # link-install the package
```

Take a look at the following image, where we can see that after running `npm link @ks/my-local-package` we can find in the `node_modules` folder a symlink to the local package:

![symlink](/assests/symlink.png)


### <Alternative #2>

### <Alternative #3>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/inigomarquinez"><img src="https://avatars.githubusercontent.com/u/25435858?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Íñigo Marquínez</b></sub></a><br /><a href="https://github.com/inigomarquinez/howto-install-a-local-package/commits?author=inigomarquinez" title="Code">💻</a></td>
    <td align="center"><a href="https://instagram.com/baumannzone"><img src="https://avatars.githubusercontent.com/u/5422102?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jorge Baumann</b></sub></a><br /><a href="https://github.com/inigomarquinez/howto-install-a-local-package/commits?author=baumannzone" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/robertoHeCi"><img src="https://avatars.githubusercontent.com/u/58053533?v=4?s=100" width="100px;" alt=""/><br /><sub><b>robertoHeCi</b></sub></a><br /><a href="https://github.com/inigomarquinez/howto-install-a-local-package/commits?author=robertoHeCi" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!