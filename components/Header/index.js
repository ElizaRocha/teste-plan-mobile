import { Image, View } from "react-native";
import styles  from "./style";


function Header(){
    return(
        <View  style={styles.container}>
            <Image
            style={styles.img} 
            source={require('../../assets/logo-planxp.png')}
            />
            <Image style={styles.menu} 
            source={require('../../assets/menu.png')}
            />
        </View>
    )
}

export default Header