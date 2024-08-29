import { View, Text, SafeAreaView, AppRegistry } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { MyWidget } from "./nayi-file";

const App = () => {
  const HandleButton = (): void => {};

  return (
    <SafeAreaView className="bg-slate-900 h-full">
      <View className="items-center justify-center w-full">
        <View className="items-center justify-center bg-slate-500 mx-2 my-4 rounded-xl">
          <Text className="text-white text-3xl font-extrabold m-1">
            Widgets
          </Text>
        </View>
      </View>
      <View className="items-center justify-center mx-2 my-4 w-40">
        <CustomButton
          title="Widget 1"
          handlePress={HandleButton}
          ContainerStyles={"w-full"}
          textStyles={"text-2xl font-bold"}
        />
        <View className="flex flex-col items-center justify-center">
          <CustomButton
            title="Hello"
            handlePress={HandleButton}
            ContainerStyles="mt-4"
          />
          <CustomButton
            title="Hello"
            handlePress={HandleButton}
            ContainerStyles="mt-4"
          />
          <CustomButton
            title="Hello"
            handlePress={HandleButton}
            ContainerStyles="mt-4"
          />
          <CustomButton
            title="Hello"
            handlePress={HandleButton}
            ContainerStyles="mt-4"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
