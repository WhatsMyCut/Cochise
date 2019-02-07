/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 * lint-ignore-no-undef
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './src/app.json';

AppRegistry.registerComponent(appName, () => App);
// eslint-disable-next-line no-undef
// AppRegistry.runApplication('App', { rootTag: document.getElementById('body') });
