import React, { Fragment, useState } from 'react'
import { Image, Text, View, Modal, TouchableWithoutFeedback, Linking } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Card({ title, src, genero, sinopse, trailer }) {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <Fragment>
            <Modal
                visible={modalOpen}
                transparent={true}
                animationType="fade"
            >
                <View style={style.modalContent}>
                    <Text style={style.titleFilme}>
                        {title}
                    </Text>
                    <Text style={style.sinopse}>
                        {sinopse}
                    </Text>
                        <Text style={style.trailer} onPress={() => Linking.openURL(`${trailer}`)}>
                            Clique aqui e veja o Trailer.
                        </Text>
                    <Icon
                        name="window-close-o" size={30} color="red"
                        onPress={() => setModalOpen(false)}
                    />
                </View>
            </Modal>
            <TouchableWithoutFeedback onPress={() => setModalOpen(true)}>
                <View style={style.card}>
                    <Image style={style.cardFilme} source={src} />
                    <Text style={style.cardTitle}>{title}</Text>
                    <Text style={style.cardGenero}>
                        {genero}
                    </Text>
                    <View style={style.cardNota}>
                        <Icon name="heart-o" size={16} color="red" />
                        <Text style={style.nota}>
                            8.0
        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </Fragment>
    );
}