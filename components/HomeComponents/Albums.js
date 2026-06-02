import { View, Text, Image, ScrollView } from "react-native";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  RADIUS_LARGE,
} from "../../theme/theme";

const Albums = [
  {
    name: "Strings Hits",
    artist: "Faisal Kapadia, Bilal Masood",
    type: "Compilation",
    image: require("../../assets/albums/image1.jpg"),
  },
  {
    name: "Midnight Vibes",
    artist: "Arijit Singh",
    type: "Album",
    image: require("../../assets/albums/image5.jpg"),
  },
  {
    name: "Lo-Fi Dreams",
    artist: "Various Artists",
    type: "Playlist",
    image: require("../../assets/albums/image3.jpg"),
  },
  {
    name: "Golden Era",
    artist: "Nusrat Fateh Ali Khan",
    type: "Compilation",
    image: require("../../assets/albums/image2.jpg"),
  },
];

export default function AlbumsSection() {
  return (
    <View className="pt-5" style={{ backgroundColor: PRIMARY_COLOR }}>
      <View className="ml-4 mb-3">
        <Text className="text-white text-[22px] font-extrabold">
          Recommended for today
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Albums.map((item, index) => (
          <View
            key={index}
            className="flex-row items-center mx-4 p-4"
            style={{
            borderRadius: RADIUS_LARGE,
              width: "auto",
            }}
          >
            <View className="flex flex-col justify-start items-start">
            <Image
              source={item.image}
              className="w-[120px] h-[120px] rounded-xl block m-auto"
            />

            <View className="ml-4">
              <Text className="text-white text-[18px] font-bold">
                {item.name}
              </Text>

                <Text className="text-[#B3B3B3] text-[12px] mt-1">
                {item.type}
              </Text>

              <Text className="text-[#B3B3B3] text-[14px] mt-1 w-[100px] line-clamp-1">
                {item.artist}
              </Text>

            </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}