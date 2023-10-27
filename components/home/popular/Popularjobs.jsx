import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import { useRouter } from 'expo-router';

import { COLORS, SIZES } from '../../../constants';
import PopularjobCard from '../../common/cards/popular/PopularJobCard';

import styles from './popularjobs.style'
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Popularjobs = () => {
  const router = useRouter(); 
  const isLoading = false;
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text sytle={styles.headerBtn}>show all </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (

         <ActivityIndicator size ="large" colors ={COLORS.primary}/>

          ): error ? (
           <Test>Something went wrong</Test>
           ) : (
           <FlatList  
            data = {[1,2,3,4]}
            renderItem={({ item }) => (
              <PopularjobCard
              item ={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium}}
            horizontal

 
           />
          )
        }
      

      </View>
      
    </View>
  )
}

export default Popularjobs