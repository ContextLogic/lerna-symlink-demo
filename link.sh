cd monorepo && yarn install && cd -
cd monorepo/node_modules/react && yarn link && cd -
cd monorepo/node_modules/react-dom && yarn link && cd -
cd monorepo/packages/wps-button-template && yarn link && yarn build && cd -
