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

  state = {
    TextInput_4:
      "jhgjghghjg jhgjhg jhgjhg jhgjg jhgjgjhg jhggjhg jhggjg jhghjgjg j"
  }

  render = () => (
    <View>
      <Image
        resizeMode="center"
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/2_UMRYjuM.jpg"
        }}
        style={styles.Image_2}
      />
      <Text>
        Sample text content jhhgjhg jhgjghjg jhgjhgjgjg jhgjhgjg jhgjhghjg
        jhgjhgg jhgjhgjhg jhgjhgjg jhgj
      </Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Image_2: { width: 100 },
  Text_3: {},
  TextInput_4: {}
})
