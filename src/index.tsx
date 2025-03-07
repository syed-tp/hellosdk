import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'hellosdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const FragmentModule = NativeModules.FragmentModule
  ? NativeModules.FragmentModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

// export function multiply(a: number, b: number): Promise<number> {
//   return HelloSdk.multiply(a, b);
// }

// export function getGreeting(name: string): Promise<string> {
//   return HelloSdk.getGreeting(name);
// }

export default FragmentModule;