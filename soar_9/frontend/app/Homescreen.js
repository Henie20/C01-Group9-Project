import React, {useEffect, useState} from 'react';
import { View, Text, Pressable, FlatList, TouchableOpacity, Modal, Button, Linking, Alert} from 'react-native';
import { Divider } from 'react-native-paper';
import { sample } from '../sample-apps.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
import { load, isLoggedIn, logout } from '../services/apiServices.js';
import i18n from './Translations/PrimaryLanguage.js';
import { getStyles } from './Styling/Styles.js';
import TTS from './text-to-speech/TTS.js';
import { NavigationModal } from './NavigationModal.js';

const Homescreen = () => {
    const [sampleData, setSampleData] = useState(sample);

    const [savedApps, setSavedApps] = useState([]);

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // State to track login status

    const styles = getStyles();

    const [isTTS, setIsTTS] = useState(false);

    const [TTStext, setTTStext] = useState('');

    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
      };

    const getCacheAndUpdateSampleData = async () => {
        try {
            let value = await load();
            console.log(value);
            if (value !== null) {
                const savedAppNames = value.selectedApps; // Array of app names
                setSavedApps(savedAppNames);

                const updatedSampleData = sample.map((app) => ({
                    ...app,
                    saved: savedAppNames.includes(app.appName),
                }));
                setSampleData(updatedSampleData);
            }
        } catch (error) {
            console.error('Error getting preferences:', error);
        }
    };

    useEffect(() => {
        const checkLoginStatus = async () => {
            const loggedIn = await isLoggedIn(); // Check if user is logged in
            setIsUserLoggedIn(loggedIn); // Update state based on login status
        };

        checkLoginStatus();
        getCacheAndUpdateSampleData();
    }, []);

    useEffect(() => {
        const getSTT = async () => {
            try{
                let value = await load();
                if (value !== null) {
                    const check = value.speechToText;
                    setIsTTS(check);
                    console.log(isTTS)
                }
            }
            catch (error) {
                console.log('Error getting speech-to-text:', error);
            }
        }

        getSTT();
    }, []);

    useEffect(() => {
        const getTTStext = () => {
            let text = ''
            text += i18n.t('home') + '\n\n';
            sampleData.filter(({ saved }) => saved).forEach(({ appName }) => {
                text += `${appName}\n`;
            });
            text += i18n.t('navigateto');
            console.log("your input: " + text);
            return text
        }
        setTTStext(getTTStext());
    }, [sampleData]);

    const openApp = (url) => {
        console.log(url.split(":").reverse()[0]);
        if(url.includes("router")){
            console.log(url);
            router.replace(url.split(":").reverse()[0]);
        }else{
        Linking.canOpenURL(url)
          .then((supported) => {
            if (!supported) {
              Alert.alert(
                'Error',
                'The requested application ' + url.split(".").reverse()[0] + ' is not installed on this device. Please install the application and try again. this error may also be caused if you are running an sandboxed version of the app like in Expo-go'
              );
            } else {
              return Linking.openURL(url);
            }
          })
          .catch(() =>
            Alert.alert(
              'Error',
              'An error occurred while trying to open the application. Please try again later.'
            )
          );
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.Header}>{i18n.t('home')}</Text>
            <Divider/>

            <TTS input={TTStext} styles={styles}/>
            <Divider/>
            <FlatList style={styles.appList}
                data={sampleData.filter(({ saved }) => saved)}
                renderItem={({item}) =>
                <TouchableOpacity style={styles.button} onPress={() => {openApp(item.url)}}>
                    <Icon style={styles.icon} name={item.icon}></Icon>
                    <Text style={styles.item}>{item.appName}</Text>
                </TouchableOpacity>}
            />

            <View>
                <Divider/>
                <Pressable styles={styles.button} onPress={handleOpenModal}>
                    <Text style={styles.Header}>{i18n.t('navigateto') + "  ▲"}</Text>
                    <NavigationModal 
                    isUserLoggedIn={isUserLoggedIn} 
                    setIsUserLoggedIn={setIsUserLoggedIn} 
                    isTTS={isTTS} 
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible} />
                </Pressable>

            </View>
        </View>
    )
}

export default Homescreen;
