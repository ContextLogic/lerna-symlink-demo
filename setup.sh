cd monorepo && yarn install && cd -
cd monorepo/node_modules/react && yarn link && cd -
cd monorepo/node_modules/react-dom && yarn link && cd -
cd monorepo/packages/wps-button && yarn link && yarn build && cd -
cd monorepo/packages/lego-button && yarn link && yarn build && cd -
cd project/symlink-project && yarn link wps-button && yarn link lego-button && yarn link react && yarn link react-dom
yarn install && yarn dev