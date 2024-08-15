import { Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text onPress={()=> router.push('(tabs)')}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
