import { Text, View , Image , ScrollView , TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function Index() {
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'white'
      }}
    >
      <ScrollView >
        <View >
          <Image
            style={{ width: "100%", height: 600 }}
            source={require("../assets/images/pic5.jpg")}
          />
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 27, fontWeight: "bold" , marginBottom:20 }}>
            Finance App
          </Text>
          <Text style={{textAlign:'center' , lineHeight:20 , fontSize:16 , marginBottom:20}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo sjksai  Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur</Text>
          
          
      
          <TouchableOpacity onPress={()=> router.push('(tabs)')}  style={{ width:'100%' ,  borderRadius:20 , borderWidth:13   , marginBottom:10}} >
                    <Text style={{fontSize:20 , fontWeight:'bold' , width:'100%' , color:'white'  , textAlign:'center' , backgroundColor:'black' , paddingVertical:5 }}>Start</Text>
                </TouchableOpacity>
          
      
       
        </View>

           
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
     width: "100%",
     alignItems: "center",
     paddingTop: 30,
     height:'100%',
     borderTopRightRadius:20,
     borderTopLeftRadius:20,
     backgroundColor:'#ffffff',
     marginTop:-20,
     paddingHorizontal:20
  },

  
})
