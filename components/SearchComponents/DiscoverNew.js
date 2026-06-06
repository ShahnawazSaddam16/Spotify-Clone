import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export default function DiscoverNew() {
  const playlists = [
    {
      image: require("../../assets/albums/image10.jpg"),
      tag: "#falak",
    },
    {
      image: require("../../assets/albums/image11.jpg"),
      tag: "#classic pop",
    },
    {
      image: require("../../assets/albums/image12.jpg"),
      tag: "#sad",
    },
    {
      image: require("../../assets/albums/image13.jpg"),
      tag: "#love",
    },
  ];

  return (
    <View className="mt-8">
      <Text className="text-white text-[22px] ml-3 font-extrabold mb-5">
        Discover something new
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        {playlists.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            className="mr-4"
          >
            <View className="w-[150px] h-[210px] rounded-2xl overflow-hidden">
              <Image
                source={item.image}
                className="w-full h-full"
                resizeMode="cover"
              />

              <View className="absolute bottom-0 left-0 right-0 px-3 py-3">
                <Text className="text-white text-[15px] font-extrabold">
                  {item.tag}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}