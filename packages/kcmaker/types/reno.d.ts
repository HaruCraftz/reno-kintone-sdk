declare namespace reno {
  type EnvironmentValue = "development" | "staging" | "production";

  type Profile = {
    env: EnvironmentValue;
    baseUrl: string;
    username: string;
    password: string;
    proxy?: string;
  };

  type Profiles = Record<EnvironmentValue, Profile>;

  type AppConfig = Record<string, any> & {
    appId: number;
    apiTokens: Record<string, string>;
    viewId: Record<string, string>;
    cdn: {
      scope: string;
      desktop: {
        js: string[];
        css: string[];
      };
      mobile: {
        js: string[];
      };
    };
  };

  type AppsConfig = Record<string, AppConfig>;
}
