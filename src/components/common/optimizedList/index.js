import React, { useState, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

import EmptyState, { Loading } from '../../../components/common/loading';
import Categories, { Cards } from '../../categories';

const List = ({ 
    key,
    data,
    isLoading,
    refreshing,
    onRefresh,
    onPress,
    numColumns,
    onEndReached,
    contentContainerStyle,
    isSearching
}) => {

    const keyExtractor = useCallback((item) => item.title, []);
    const renderItem = useCallback(({ item, index }) => {
        if(isSearching) return <Cards small indexSup={index} onPress={onPress} {...item} />;
        return <Categories indexSup={index} onPress={onPress} {...item} />;
    }, []);
    
    return (
        <FlatList
            key={key}
            style={styles.content}
            data={data}
            contentContainerStyle={contentContainerStyle}
            numColumns={numColumns}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ListEmptyComponent={
              isLoading ? (
                <Loading />
              ) : (
                <EmptyState text='We do not have data to display' />
              )
            }
            refreshing={refreshing}
            onRefresh={onRefresh}
            showsVerticalScrollIndicator={false}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
          />
    );
}

List.defaultProps = {
    key: '',
    data: [],
    isLoading: false,
    refreshing: false,
    isSearching: false,
    onRefresh: () => {},
    onEndReached: () => {},
    onPress: () => {},
    numColumns: 1,
    contentContainerStyle: {},
};

List.propTypes = {
    key: PropTypes.string,
    numColumns: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isLoading: PropTypes.bool,
    refreshing: PropTypes.bool,
    isSearching: PropTypes.bool,
    onRefresh: PropTypes.func,
    onPress: PropTypes.func,
    onEndReached: PropTypes.func,
};

export default List;
