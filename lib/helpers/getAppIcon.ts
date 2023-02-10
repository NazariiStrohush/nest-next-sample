import { AppFile } from '../apollo/generated.graphql';

export const getAppIcon = (appFiles: AppFile[] | any) => {
  const obj = appFiles.find((file: AppFile) => file.type === 'APP_ICON');
  const icon = obj?.File?.path;

  return icon;
};
