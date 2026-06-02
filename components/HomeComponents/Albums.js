import { View, Text, Image, ScrollView } from "react-native";
import { PRIMARY_COLOR, RADIUS_LARGE } from "../../theme/theme";

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

const NewReleases = [
  {
    name: "My terrible mind",
    artist: "Talha Anjum",
    type: "Complination",
    image: require("../../assets/albums/image8.jpg"),
  },
  {
    name: "Dil ke Parday",
    artist: "Asim Azhar",
    type: "Playlists",
    image: require("../../assets/albums/image7.jpg"),
  },
  {
    name: "Two Tones",
    artist: "Young Stunners",
    type: "Playlists",
    image: require("../../assets/albums/image6.jpg"),
  },
  {
    name: "Pasoori",
    artist: "Ali Sethi",
    type: "Single",
    image: require("../../assets/albums/image9.jpg"),
  },
];

const ForYou = [
  {
    name: "Your Mix 1",
    artist: "Made for you",
    type: "For You",
    image: require("../../assets/albums/image10.jpg"),
  },
  {
    name: "Daily Vibes",
    artist: "Based on your taste",
    type: "For You",
    image: require("../../assets/albums/image11.jpg"),
  },
  {
    name: "Chill Zone",
    artist: "Relax & focus",
    type: "For You",
    image: require("../../assets/albums/image12.jpg"),
  },
  {
    name: "Focus Beats",
    artist: "Productivity mix",
    type: "For You",
    image: require("../../assets/albums/image13.jpg"),
  },
];

const CardSection = ({ title, data }) => {
  return (
    <View>
      <View className="ml-4 mb-3 mt-6">
        <Text className="text-white text-[22px] font-extrabold">{title}</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <View
            key={index}
            className="mx-4"
            style={{
              borderRadius: RADIUS_LARGE,
            }}
          >
            <View className="flex flex-col items-start">
              <Image
                source={item.image}
                className="w-[120px] h-[120px] rounded-xl"
              />

              <Text className="text-[#B3B3B3] text-[12px] mt-1">
                {item.type}
              </Text>

              <Text className="text-white text-[18px] font-bold">
                {item.name}
              </Text>

              <Text className="text-[#B3B3B3] text-[14px] mt-1 w-[120px]">
                {item.artist}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default function AlbumsSection() {
  return (
    <View className="pt-5">
      <CardSection title="Recommended for today" data={Albums} />
      <CardSection title="New Releases for You" data={NewReleases} />
      <CardSection title="For You – What You Want" data={ForYou} />
    </View>
  );
}
