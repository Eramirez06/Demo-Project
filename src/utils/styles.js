import { Dimensions, Platform } from 'react-native';

//env
import Config from "react-native-config";

export const { width, height } = Dimensions.get(
  Platform.OS === 'ios' ? 'screen' : 'window',
);

export const resize = (size, type = 'width') => {
  const currentSize = type === 'width' ? Config.WIDTH_DESIGN : Config.HEIGHT_DESIGN;
  const diviceSize = type === 'width' ? width : height;
  const percent = (size * 100) / currentSize;
  const percentJS = percent / 100;

  return diviceSize * percentJS;
};

export const Bold = 'Oxygen-Bold';
export const Light = 'Oxygen-Light';
export const Regular = 'Oxygen-Regular';
