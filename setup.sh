cd project/symlink-project/node_modules/react && yarn link && cd -
cd project/symlink-project/node_modules//react-dom && yarn link && cd -
cd monorepo/packages/wps-button && yarn link && yarn install && yarn link react && yarn link react-dom && cd -
cd project/symlink-project && yarn link wps-button
yarn && yarn dev