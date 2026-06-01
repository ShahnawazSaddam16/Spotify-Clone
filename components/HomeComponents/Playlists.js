import React from "react";
import { View, Text, Image } from "react-native";

import { SURFACE_COLOR } from "../../theme/theme";

const PlaylistCards = [
  {
    name: "Butt Networks",
    image: require("../../assets/playlists/image2.png"),
  },
  {
    name: "Liked Songs",
    image: require("../../assets/playlists/image5.jpg"),
  },
  {
    name: "Dhurandar -- The Revenge",
    image: require("../../assets/playlists/image1.webp"),
  },
  {
    name: "Aadat -- Kalyug",
    image: require("../../assets/playlists/image3.jpg"),
  },
  {
    name: "Top Hits 2000s,",
    image: require("../../assets/playlists/image4.jpg"),
  },
];

const Playlists = () => {
  return (
    <View className="mt-20 px-5 flex-row flex-wrap justify-between">
      {PlaylistCards.map((item, index) => (
        <View
          key={index}
          className="w-[48%] mb-4 flex-row items-center gap-3 p-4 rounded-[10px]"
          style={{
            backgroundColor: SURFACE_COLOR,
          }}
        >
          <Image source={item.image} className="w-10 h-10 object-cover" />
          <Text className="text-white text-[13px] font-semibold flex-1">
            {item.name}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Playlists;
