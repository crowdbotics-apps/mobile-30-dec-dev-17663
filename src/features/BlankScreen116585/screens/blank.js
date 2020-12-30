import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_17: true }

  render = () => (
    <View>
      <View>
        <View style={styles.View_6} />
        <View style={styles.View_7}>
          <Image
            source={{
              uri:
                "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/2_rM446w7.jpg"
            }}
          />
          <Switch
            trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
            style={styles.Switch_17}
            value={this.state.Switch_17}
            onValueChange={nextChecked =>
              this.setState({ Switch_17: nextChecked })
            }
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_5: {},
  View_6: { width: 300 },
  View_7: { width: 300, height: 200 },
  Image_15: {},
  Switch_17: { alignSelf: "flex-start" }
})
