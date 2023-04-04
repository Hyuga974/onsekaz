import { ConfigModuleOptions } from '@nestjs/config';

export const appConfig: ConfigModuleOptions = {
  envFilePath: ['.env', '.env.development'],
  isGlobal: true,
  cache: true,
  expandVariables: true,
};
