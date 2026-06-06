import { View, Text, Image } from "react-native";

export default function BrowseAll() {
  const categories = [
    {
      title: "Music",
      image: require("../../assets/albums/image10.jpg"),
      color: "#E91E63",
    },
    {
      title: "Live Events",
      image: require("../../assets/albums/image11.jpg"),
      color: "#8A2BE2",
    },
    {
      title: "Made For You",
      image: require("../../assets/albums/image12.jpg"),
      color: "#9B59B6",
    },
    {
      title: "Upcoming Releases",
      image: require("../../assets/albums/image13.jpg"),
      color: "#0B7A65",
    },
    {
      title: "Pop",
      image: require("../../assets/albums/image10.jpg"),
      color: "#1E88E5",
    },
    {
      title: "Hip-Hop",
      image: require("../../assets/albums/image11.jpg"),
      color: "#D35400",
    },
    {
      title: "Podcast",
      image: require("../../assets/albums/image12.jpg"),
      color: "#2ECC71",
    },
    {
      title: "Charts",
      image: require("../../assets/albums/image13.jpg"),
      color: "#C0392B",
    },
  ];

  return (
    <>
      <View className="ml-3 mt-10">
        <Text className="text-white text-[24px] font-extrabold">
          Browse All
        </Text>
      </View>

      <View className="flex-row flex-wrap justify-between px-3 mt-6">
        {categories.map((item, index) => (
          <View
            key={index}
            className="w-[48%] h-32 rounded-2xl overflow-hidden mb-4"
            style={{ backgroundColor: item.color }}
          >
            <Text className="text-white text-2xl font-bold p-4">
              {item.title}
            </Text>

            <Image
              source={item.image}
              className="absolute bottom-0 right-0 w-16 h-16 rounded-lg"
            />
          </View>
        ))}
      </View>
    </>
  );
}