import {AppRegistry} from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';
import {name as appName} from './app.json';
import _ from 'lodash';
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
// if (Platform.OS === 'android') {
//     if (typeof Symbol === 'undefined') {
//       if (Array.prototype['@@iterator'] === undefined) {
//         Array.prototype['@@iterator'] = function() {
//           let i = 0;
//           return {
//             next: () => ({
//               done: i >= this.length,
//               value: this[i++],
//             }),
//           };
//         };
//       }
//     }
//   }
AppRegistry.registerComponent(appName, () => App);