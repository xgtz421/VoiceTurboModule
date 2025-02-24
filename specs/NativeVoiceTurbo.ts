import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

type Callback = (error: string) => void;

type SpeechType = {
  EXTRA_LANGUAGE_MODEL: string;
  EXTRA_MAX_RESULTS: string;
  EXTRA_PARTIAL_RESULTS: string;
  REQUEST_PERMISSIONS_AUTO: string;
  RECOGNIZER_ENGINE: string;
};

export interface Spec extends TurboModule {
  destroySpeech: (callback: Callback) => void;
  startSpeech: (
    locale: string,
    opts: SpeechType,
    callback: (error: string) => void
  ) => void;
  stopSpeech: (callback: Callback) => void;
  cancelSpeech: (callback: Callback) => void;
  isSpeechAvailable: (
    callback: (isAvailable: boolean, error: string) => void
  ) => void;
  getSpeechRecognitionServices(): Promise<string[]>;
  isRecognizing: (callback: (Recognizing: boolean) => void) => void;
}

export type SpeechStartEvent = {
  error?: boolean;
};

export type SpeechRecognizedEvent = {
  isFinal?: boolean;
};

export type SpeechResultsEvent = {
  value?: string[];
};

export type SpeechErrorEvent = {
  error?: {
    code?: string;
    message?: string;
  };
};

export type SpeechEndEvent = {
  error?: boolean;
};

export type SpeechVolumeChangeEvent = {
  value?: number;
};


export default TurboModuleRegistry.getEnforcing<Spec>('VoiceTurbo');
