import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'hellosdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const HelloSdk = NativeModules.HelloSdk
  ? NativeModules.HelloSdk
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return HelloSdk.multiply(a, b);
}

export function getGreeting(name: string): Promise<string> {
  return Promise.resolve(`${name} Hello, I'm SDK!.`);
}
