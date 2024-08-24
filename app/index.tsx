import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  const HandleButton = (): void => {

  }
  return (
    <SafeAreaView className="bg-slate-900 h-full">
      <View className="items-center justify-center w-full">
        <View className="items-center justify-center bg-slate-500 mx-2 my-4 rounded-xl">
          <Text className="text-white text-3xl font-extrabold m-1">Widgets</Text>
        </View>
      </View>
      <View className="items-center justify-center mx-2 my-5 px-2 w-40">
        <CustomButton
          title="Widget 1"
          handlePress={HandleButton}
          ContainerStyles={'w-full h-10'}
          textStyles={'text-2xl font-bold'}
        />
      </View>

    </SafeAreaView>
  );
}
