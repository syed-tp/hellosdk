package com.hellosdk

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class HelloSdkModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  fun multiply(a: Double, b: Double, promise: Promise) {
    promise.resolve(a * b)
  }
  
  @ReactMethod
  fun getGreeting(name: String, promise: Promise) {
    val greetingMessage = "Hello, $name! I'm SDK."
    promise.resolve(greetingMessage)
  }

  companion object {
    const val NAME = "HelloSdk"
  }
}
