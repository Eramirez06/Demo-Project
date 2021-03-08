import storage from '@react-native-firebase/storage';
import moment from 'moment';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const defaultMetadata = {
  contentType: 'image/jpeg',
}

const defaultName = moment().format('HHmmss');

const instance = storage();

export const asyncGetPicture = async () => {
	return new Promise((resolve) => {
		launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        resolve(response);
      },
    );
	});
};

export const asyncTakePicture = async () => {
	return new Promise((resolve) => {
		launchCamera({ mediaType: 'photo'}, (response) => {
      resolve(response);
    });
	});
};

const uploadAsset = async (reference, uri, name = defaultName, metadata = defaultMetadata) => {
  return new Promise((resolve, reject) => {
    instance
      .ref(reference)
      .child(name)
      .putFile(uri, metadata)
      .then(uploadedFile => {
        resolve(uploadedFile.downloadURL);
      }).catch(error => {
        reject(error);
      });
  });
}

export default uploadAsset;