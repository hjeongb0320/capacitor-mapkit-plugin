export interface MapkitPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
