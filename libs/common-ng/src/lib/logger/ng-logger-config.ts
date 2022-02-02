import { InjectionToken } from '@angular/core';
import { CommonLoggerConfig } from '@intercept-game/common';

export const NG_LOGGER_CONFIG = new InjectionToken<NgLoggerConfig>(
  'NG_LOGGER_CONFIG'
);
export type NgLoggerConfig = CommonLoggerConfig;
