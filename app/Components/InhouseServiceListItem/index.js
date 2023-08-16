import React from "react";
import { View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import Text from "../Text";
import Tag from "../Pill";
import color from "../../Utils/color";

const InhouseServiceListItem = (props) => {
    return (
        <View style={{
            height: 50,
            flexDirection: 'row',
            margin: 5,
            backgroundColor: color.white,
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Text style={{ fontWeight: 'normal', fontSize: 18 }}>{props.title}</Text>
            <CheckBox
                disabled={false}
                boxType="square"
                onCheckColor={color.primary}
                onTintColor={color.primary}
                tintColor={color.secondary}
            // value={toggleCheckBox}
            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
        </View >
    );
}

export default InhouseServiceListItem;