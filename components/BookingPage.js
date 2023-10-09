import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

import ThunderBird from '../assets/meetingPic1.png';
import CabinA from '../assets/meetingPic2.png';
import CabinT from '../assets/meetingPic3.png';
import Mustang from '../assets/meetingPic4.png';

const roomTypes = [
  { label: 'Select Room Type', value: null },
  { label: 'Room Type 1', value: 'type1' },
  { label: 'Room Type 2', value: 'type2' },
];

const BookingPage = ({navigation}) => {
  const [roomType, setRoomType] = useState(null);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [currentPicker, setCurrentPicker] = useState('startDate');

  const onDateChange = (event, selectedDate) => {
    const newDate = selectedDate || dates[currentPicker];
    setDates(prevDates => ({ ...prevDates, [currentPicker]: newDate }));
  };

  const rooms = [
    { 
      image: ThunderBird,
      name: 'Thunderbird',
      description: 'Effektivt og moderne møterom med stor skjerm og web-kamera.',
      capacity: 4,
    },
    { 
      image: Mustang,
      name: 'Mustang',
      description: 'Eksklusivt og luftig rom med skylight.',
      capacity: 4,
    },
    { 
      image: CabinT,
      name: 'Cabin A',
      description: 'Små effektive møterom med god lyddemping og egen skjerm.',
      capacity: 4,
    },
    { 
      image: CabinA,
      name: 'Cabin T',
      description: 'Små effektive møterom med god lyddemping og egen skjerm.',
      capacity: 4,
    },
   
  ];

  return (
    <View style={styles.container}>
      <View style={styles.filterSection}>
        {/* Room Type Selector */}
        <TouchableOpacity 
          style={styles.inputField} 
          onPress={() => setShowPicker(!showPicker)}
        >
          <Text>{roomType ? roomTypes.find(rt => rt.value === roomType).label : 'Välj rumstyp'}</Text>
        </TouchableOpacity>
        {showPicker && (
         <Picker
         selectedValue={roomType}
         onValueChange={(itemValue, itemIndex) => {
           setRoomType(itemValue);
           setShowPicker(false);
         }}
       >
         {roomTypes.map((rt, index) => (
           <Picker.Item key={index} label={rt.label} value={rt.value} />
         ))}
       </Picker>
        )}

        {/* Date Selector */}
        <TouchableOpacity 
          style={styles.inputField}
          onPress={() => {
            setCurrentPicker('startDate');
            setShowDatePicker(true);
          }}
        >
           <Text>
            {dates.startDate.getHours()}:{String(dates.startDate.getMinutes()).padStart(2, '0')} -    
            {dates.endDate.getHours()}:{String(dates.endDate.getMinutes()).padStart(2, '0')}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <>
            <Text style={styles.pickerHeaderText}>
              {currentPicker === 'startDate' ? 'Välj start tid' : 'Välj slut tid'}
            </Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={dates[currentPicker]}
              mode="time"
              is24Hour={true}
              display="spinner"
              onChange={onDateChange}
              minuteInterval={15}
            />
            <Button 
              title={currentPicker === 'startDate' ? 'Nästa' : 'Klar'} 
              onPress={() => {
                if (currentPicker === 'startDate') {
                  setCurrentPicker('endDate');
                } else {
                  setShowDatePicker(false);
                  setCurrentPicker('startDate');
                }
              }} 
            />
          </>
        )}
      </View>

      <View style={styles.listSection}>
        <FlatList 
          data={rooms}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.roomItem}
              onPress={() => navigation.navigate('BookingDetailPage', { room: item })}
            >
              <Image source={{ uri: item.imageUri }} style={styles.roomImage} />
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>Kapacitet: {item.capacity}</Text>
              <View style={styles.reserveButton}>
                <Text>Reservera</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  filterSection: {
    width: '100%',
    padding: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: '30',
    borderBottomRightRadius: '30',
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 16,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  pickerHeaderText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
  },

  listSection: {
    flex: 1,
    width: '100%',
    padding:'10%'
  },
  roomItem: {
    backgroundColor: 'grey',
    margin: 8,
    height: 150,  // eller önskad höjd
    borderRadius: 10,  // lägger till rundade hörn
    overflow: 'hidden', // ser till att bilden följer rundade hörn
    justifyContent: 'flex-end', // positionerar texten i botten av boxen
  },
  roomImage: {
    width: '100%',
    height: '100%',
    position: 'absolute', // gör att bilden täcker hela boxen
  },
  roomText: {
    backgroundColor: 'rgba(0,0,0,0.5)', // halvtransparent svart
    color: 'white', // vit text
    padding: 8,
  },
  reserveButton: {
    backgroundColor: 'lightblue',
    padding: 8,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default BookingPage;
