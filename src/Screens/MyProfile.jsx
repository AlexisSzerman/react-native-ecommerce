import { Image, StyleSheet, View } from "react-native";
import AddButton from "../Components/AddButton";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../Services/shopServices";
import { colors } from "../Global/Theme";

const MyProfile = ({navigation}) => {

    const {localId, profileImage} = useSelector(state => state.userReducer.value)

    const {data: image} = useGetProfileImageQuery(localId)

    console.log(image);

    const cameraImage = image?.image

    const launchCamera = async () => {
        navigation.navigate('Image Selector')
    };

    console.log(profileImage);

    return (
        <View style={styles.container}>
            {profileImage || cameraImage  ? (
                <Image
                    source={{uri: profileImage || cameraImage}}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require("../Assets/Images/defaultProfile.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <AddButton onPress={launchCamera} title="Add profile picture" />
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: colors.teal,
        flex:1
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});
