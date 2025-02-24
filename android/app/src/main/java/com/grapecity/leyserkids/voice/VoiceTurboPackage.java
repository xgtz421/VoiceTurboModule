package com.grapecity.leyserkids.voice;

import androidx.annotation.NonNull;

import com.facebook.react.BaseReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;

import java.util.HashMap;
import java.util.Map;

public class VoiceTurboPackage extends BaseReactPackage {

  @Override
  public NativeModule getModule(String name, @NonNull ReactApplicationContext reactContext) {
    if (name.equals(VoiceTurboModule.NAME)) {
      return new VoiceTurboModule(reactContext);
    } else {
      return null;
    }
  }

  @Override
  public ReactModuleInfoProvider getReactModuleInfoProvider() {
    return new ReactModuleInfoProvider() {
      @Override
      public Map<String, ReactModuleInfo> getReactModuleInfos() {
        Map<String, ReactModuleInfo> map = new HashMap<>();
        map.put(VoiceTurboModule.NAME, new ReactModuleInfo(
                VoiceTurboModule.NAME,       // name
                VoiceTurboModule.NAME,       // className
                false, // canOverrideExistingModule
                false, // needsEagerInit
                false, // isCXXModule
                true   // isTurboModule
        ));
        return map;
      }
    };
  }
}
