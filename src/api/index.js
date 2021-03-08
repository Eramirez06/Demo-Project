import { Keyboard } from 'react-native';
import axios from 'axios';

//env
import Config from "react-native-config";

const instance = axios.create({
  baseURL: Config.BASE_URL,
});

type dispatchRequestProps = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: String,
};

export const dispatchRequest = async (
  request: dispatchRequestProps,
  dismissKeyboard = true,
) => {
  instance.defaults.headers.common['Content-Type'] = 'application/vnd.api+json';
  instance.defaults.headers.common['Accept'] = 'application/vnd.api+json';

  try {
    dismissKeyboard && Keyboard.dismiss();

    const resource = await instance(request);
    return Promise.resolve(resource);
  } catch (error) {
    console.log('error', error.response);
    console.log('paso');
    return Promise.reject(error);
  }
};
