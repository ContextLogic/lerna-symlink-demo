cd monorepo && yarn install && cd -
cd monorepo/node_modules/react && yarn link && cd -
cd monorepo/node_modules/react-dom && yarn link && cd -
cd monorepo/packages/wps-button && yarn link && yarn build && cd -
cd monorepo/packages/wps-button-template && yarn link && yarn build && cd -
cd monorepo/packages/wps-button-template-test && yarn link && yarn build && cd -
cd monorepo/packages/add-button && yarn link && yarn build && cd -
cd monorepo/packages/sub-button && yarn link && yarn build && cd -
cd monorepo/packages/types && yarn link && yarn build && cd -
cd monorepo/packages/wps-button-services-template && yarn link && yarn build && cd -
cd monorepo/packages/wps-button-template-full && yarn link && yarn build && cd -
cd monorepo/packages/wps-button-template-full-gql && yarn link && yarn build && cd -