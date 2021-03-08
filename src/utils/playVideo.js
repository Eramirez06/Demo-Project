import { Platform } from 'react-native';

//Libs
import {
  YouTubeStandaloneIOS,
  YouTubeStandaloneAndroid,
} from 'react-native-youtube';

//Custom
import Config from "react-native-config";

export const playVideo = (videoId) => {
  Platform.OS === 'android'
    ? YouTubeStandaloneAndroid.playVideo({
        apiKey: Config.YT_KEY, // Your YouTube Developer API Key
        videoId, // YouTube video ID
      })
    : YouTubeStandaloneIOS.playVideo(videoId)
        .then((message) => console.log(message))
        .catch((errorMessage) => console.error(errorMessage));
};
