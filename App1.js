import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const App1 = () => {
const notifications = [
    {
        id: '1',
        title: 'Bước 1 Xác định nhu cầu khách hàng',
        description: 'Vũ Văn Hoàng sắp xếp đến hạn lúc 01/08/2020 9:00',
        time:'20/08/2020, 6:00',
        icon: 'checkmark',
    },
    {
        id: '2',
        title: 'Bạn có khách hàng mới!',
        description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
        time:'20/08/2020, 6:00',
        icon: 'people',
    },
    {
        id: '3',
        title: 'Khách hàng được chia sẻ bị trùng',
        description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
        time:'20/08/2020, 6:00',
        icon: 'people',
    },
    {
        id: '4',
        title: 'Khách hàng được thêm bị trùng',
        description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
        time:'20/08/2020, 6:00',
        icon: 'people',
    },
    {
        id: '5',
        title: 'Công việc sắp hết hạn trong hôm nay',
        description: 'Bạn có 17 công việc sắp hết hạn trong hôm nay.',
        time:'20/08/2020, 6:00',
        icon: 'checkmark',
    },
    {
        id: '6',
        title: 'Công việc đã quá hạn',
        description: 'Bạn có 17 công việc đã quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
        time:'20/08/2020, 6:00',
        icon: 'checkmark',
    },
];

    const renderItem = ({item}) =>(
        <View style = {styles.ItemContainer}>
            <View style = {styles.IconContainer}>
            <Text style = {styles.icon}> {item.icon === 'checkmark' ? '\u2713' : '\u1F464'}</Text>
            </View>
            <View style = {styles.TextContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.time}>{item.time}</Text>
            </View>
        </View>
 
)
return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
    const styles = StyleSheet.create({
        container: {
          flex: 1,
         paddingTop: 50,
        },
        header: {
          fontSize: 20,
          fontWeight: 'bold',
          padding: 16,
          textAlign: 'center',
          backgroundColor: '#fff',
        },
        ItemContainer:{
            padding: 16,
            flexDirection: 'row',
        },
        IconContainer:{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,    
        },
        icon:{
            fontSize: 24,
            color: '#007AFF'
        },
        TextContainer:{
            flex: 1,
        },
        title:{
            fontWeight: 'bold',
            marginBottom: 4,
        },
        description:{
            color: '#555',
            marginBottom: 4,
            
        },
        time: {
            color: '#888',
            fontSize: 12,
          },
      });

    
      export default App1;
