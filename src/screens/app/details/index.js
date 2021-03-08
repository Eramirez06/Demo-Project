import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';

//Libs
import { SharedElement } from 'react-navigation-shared-element';
import FastImage from 'react-native-fast-image';

//Custom
import Header from '../../../components/header';
import ContentScreen from '../../../components/content';
import CloseIcon from '../../../components/icons/backIcon';
import { Content } from 'native-base';
import { requestByGenres } from '../../../api/details';
import PlayIcon from '../../../components/icons/playIcon';
import { playVideo } from '../../../utils/playVideo';

class Details extends Component {
  constructor(props) {
    super(props);
    let { navigation } = this.props;
    const data = navigation.getParam('data', {});
    this.state = {
      data,
      genres: '',
      videoId: data.youtubeVideoId ? data.youtubeVideoId : '0ir1qkPXPVM',
    };
  }

  goBack = () => {
    let { navigation } = this.props;
    navigation.goBack();
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    let { data } = this.state;
    const response = await requestByGenres(data.type, data.id);
    let formatArray = [];
    for (const { attributes } of response.data.data) {
      formatArray.push(attributes.name);
    }
    let genres = formatArray.join(', ');
    this.setState({ genres });
  };

  render() {
    let { data, genres, videoId } = this.state;
    return (
      <ContentScreen>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.goBack}
          style={styles.image}>
          <CloseIcon />
        </TouchableOpacity>
        <Content contentContainerStyle={styles.content}>
          <View style={styles.row}>
            <SharedElement id={`item.${data.index}.${data.indexSup}.photo`}>
              <FastImage
                style={styles.img}
                source={{ uri: data.posterImage.large }}
              />
            </SharedElement>
            <View style={styles.complement}>
              <View>
                <Text style={styles.title}>Main title</Text>
                <Text numberOfLines={2} style={styles.desc}>
                  {data.titles.en_jp}
                </Text>
              </View>
              <View>
                <Text style={styles.title}>Cononical title</Text>
                <Text numberOfLines={2} style={styles.desc}>
                  {data.canonicalTitle}
                </Text>
              </View>
              <View>
                <Text style={styles.title}>Type</Text>
                <Text style={styles.desc}>{`${
                  data.showType ? data.showType : data.mangaType
                }(${
                  data.totalLength ? data.totalLength : data.volumeCount
                })`}</Text>
              </View>
              <View>
                <Text style={styles.title}>Year</Text>
                <Text style={styles.desc}>
                  {`${data.startDate} till ${data.endDate}`}
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.title}>Genres</Text>
          <Text style={styles.desc}>{genres}</Text>
          <View style={styles.row2}>
            <View style={styles.half}>
              <Text style={styles.title}>Average Rating</Text>
              <Text style={styles.desc}>
                {data.averageRating ? data.averageRating : 'Not Available'}
              </Text>
              <View style={styles.separator} />
              <Text style={styles.title}>Age Rating</Text>
              <Text style={styles.desc}>
                {data.ageRating ? data.ageRating : 'Not Available'}
              </Text>
            </View>
            <View style={styles.half}>
              <Text style={styles.title}>Episode Duration</Text>
              <Text style={styles.desc}>
                {data.episodeLength ? data.episodeLength : 'Not Available'}
              </Text>
              <View style={styles.separator} />
              <Text style={styles.title}>Airing Status</Text>
              <Text style={styles.desc}>
                {data.status ? data.status : 'Not Available'}
              </Text>
            </View>
          </View>
          <ImageBackground
            style={styles.tumb}
            resizeMode="stretch"
            source={{
              uri: `https://img.youtube.com/vi/${videoId}/0.jpg`,
            }}>
            <TouchableOpacity
              onPress={() => playVideo(videoId)}
              activeOpacity={0.7}
              style={styles.playIcon}>
              <PlayIcon />
            </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.title}>Synopsis</Text>
          <Text style={styles.desc}>{data.synopsis}</Text>
        </Content>
      </ContentScreen>
    );
  }
}

export default Details;
