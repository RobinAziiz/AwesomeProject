import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image  } from 'react-native';

const HomePage = () => {
    const meetings = [
        { title: 'Team Meeting', room: 'ThunderBird', from: '10:00', to: '11:00' },
        { title: 'Client Call', room: 'Cabin T', from: '12:00', to: '13:00' },
        { title: 'Client Call', room: 'Cabin A', from: '17:00', to: '18:00' },
        { title: 'Client Call', room: 'Mustang', from: '22:00', to: '23:00' },
      ];
      const rooms = [
        { image: require('../assets/meetingPic1.png'), name: 'Thunderbird', description: 'Effektivt og moderne møterom med stor skjerm og web-kamera.' },
        { image: require('../assets/meetingPic2.png'), name: 'Cabin A', description: 'Små effektive møterom med god lyddemping og egen skjerm.' },
        { image: require('../assets/meetingPic3.png'), name: 'Cabin T', description: 'Små effektive møterom med god lyddemping og egen skjerm.' },
        { image: require('../assets/meetingPic4.png'), name: 'Mustang', description: 'Eksklusivt og luftig rom med skylight.' },
      ];

  return (
    <ScrollView style={styles.container}>
      {/* Section 1 */}
      <View style={styles.section1}>
        <View style={styles.rectangle}>
          <Text style={styles.rectangleTitle}>Dagens lunch</Text>
          <Text style={styles.rectangleText}>Kyckling med ris</Text>
        </View>
      </View>

      {/* Section 2 */}
      <View style={styles.section2}>
        <Text style={styles.sectionTitle}>Bokningar idag</Text>
        <View style={styles.bookingsContainer}>
          <TouchableOpacity style={styles.bookingButton} onPress={() => {}}>
            <Text style={styles.bookingButtonText}>Boka möterum</Text>
            <Image source={require('../assets/plus.png')}  
                style={styles.buttonImage}
            />
          </TouchableOpacity>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bookingsScroll}>
            {meetings.map((meeting, index) => (
              <View key={index} style={styles.meetingItem}>
                <Text style={styles.meetingTitle}>{meeting.title}</Text>
                <Text>{meeting.room}</Text>
                <Text>{meeting.from} - {meeting.to}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Section 3 */}
      <View style={styles.section3}>
        <Text style={styles.sectionTitle}>Tillgängliga rum</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.roomsScroll}>
          {rooms.map((room, index) => (
            <View key={index} style={styles.roomItem}>
              <Image source={room.image} style={styles.roomImage} />
              <Text style={styles.roomName}>{room.name}</Text>
              <Text style={styles.roomDescription}>{room.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section1: {
    borderBottomRightRadius: '40',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },

  rectangle: {
    backgroundColor: '#1C1B1F',
    padding: 20, 
    borderRadius: 10, 
  },
  rectangleTitle: {
    color: '#FFFFFF',
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 8, 
  },
  rectangleText: {
    color: '#FFFFFF',
  },


  section2: {
    borderBottomRightRadius: '30',
    borderTopLeftRadius: '30',
    backgroundColor: '#F0F0F0',
    padding: 16,
  },
  bookingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookingButton: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingButtonText: {
    color: '#000000',
  },
  buttonImage: {
    width: 20, 
    height: 20,  
    marginTop: 8,
    backgroundColor: 'grey',
    borderRadius: '10',
  },

  bookingsScroll: {
    flex: 1,
  },
  booking: {
    padding: 16,
  },

  meetingItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  meetingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },


  section3: {
    borderTopLeftRadius: '30',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bookings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roomItem: {
    backgroundColor: '#F0F0F0', 
    padding: 16,
    margin: 8,
    borderRadius: 8,
    width: 160,
    alignItems: 'center',
  },
  roomImage: {
    width: 140,
    height: 100,
    borderRadius: 8, 
    marginBottom: 8,
  },
  roomName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  roomDescription: {
    fontSize: 12,
    textAlign: 'left',
  },

});

export default HomePage;
