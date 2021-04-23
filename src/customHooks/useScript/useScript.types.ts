type UseScriptOptions = {
  async?: boolean;
  dataSet?: { [key: string]: string };
  defer?: boolean;
  id?: string;
  onLoad?: () => void;
  shouldCheckForExisting?: boolean;
  src?: string;
};

type UseScriptReturn = [boolean, ErrorEvent];

type UseScript = (options: UseScriptOptions) => UseScriptReturn;

export type { UseScript };
