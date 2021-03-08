import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

//Libs
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';

//Images
import like from '../../assets/images/like.png';
import unLike from '../../assets/images/unlike.png';

const Categories = ({ title, data, onPress, indexSup }) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        contentContainerStyle={styles.container}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Cards
            onPress={onPress}
            {...item}
            indexSup={indexSup}
            index={index}
          />
        )}
      />
    </>
  );
};

export const Cards = ({
  attributes,
  onPress,
  index,
  indexSup,
  id,
  type,
  small,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        onPress('Details', { ...attributes, index, indexSup, id, type })
      }
      activeOpacity={0.6}>
      <SharedElement id={`item.${index}.${indexSup}.photo`}>
        <FastImage
          resizeMode="stretch"
          source={{ uri: attributes.posterImage.large }}
          style={small ? styles.small : styles.containerCard}
        />
      </SharedElement>
      <TouchableOpacity style={styles.absoluteLike}>
        <Image resizeMode="contain" source={like} />
      </TouchableOpacity>
      <Text style={styles.titleCard}>{attributes.canonicalTitle}</Text>
    </TouchableOpacity>
  );
};

export default Categories;
