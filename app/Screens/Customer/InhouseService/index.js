import * as React from 'react';
import { FlatList, View } from 'react-native';
import color from '../../../Utils/color';
import Text from '../../../Components/Text';
import ProductListItem from '../../../Components/ProductListItem';
import Button from '../../../Components/Button';
import InhouseServiceListItem from '../../../Components/InhouseServiceListItem';
import TextInput from '../../../Components/TextInput';

const data = [
    {
        id: 1,
        title: 'Sofa Cleaning',
    },
    {
        id: 2,
        title: 'House Cleaning',
    },
    {
        id: 3,
        title: 'Bathroom Cleaning'
    },
    {
        id: 4,
        title: 'Kitchen Cleaning',
    },
    {
        id: 5,
        title: 'Bedroom Cleaning',
    }
]

export default InhouseService = () => {
    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: color.white }}>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'normal', fontSize: 28 }}>In-House Services</Text>
                <Text style={{ fontWeight: 'normal', fontSize: 16, textAlign: 'justify', color: color.gray }}>Dhobi Ghar wants to bring ease in your life. We provide best house cleaning services. Kindly select the options mentioned below.</Text>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'center' }}>
                <View style={{ marginVertical: 5 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <InhouseServiceListItem title={item.title} />}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <TextInput name="Write a Note" multiline numberOfLines={5} onChange={() => { }} />
                </View>
            </View>
            <View style={{ flex: 0.2, justifyContent: 'center' }}>
                <Button name="Place Order" />
            </View>
        </View >
    )
}