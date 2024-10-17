import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function CameraComponent() {
    const [hasPermission, setHasPermission] = useState(null);
    const [foto, setFoto] = useState(null);
    const [qrCode, setQrCode] = useState(null);
    const [lado, setLado] = useState(Camera.Constants.Type.back);
    const cameraRef = useRef(null);

    React.useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={styles.textoPermissao}>Permissão para usar a câmera foi negada</Text>
            </View>
        );
    }

    const tirarFoto = async () => {
        if (cameraRef.current) {
            const foto_base64 = await cameraRef.current.takePictureAsync({
                quality: 1,
                base64: true
            });
            setFoto(foto_base64);
        }
    };

    const trocaCamera = () => {
        setLado(
            lado === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    const salvarFoto = async () => {
        if (foto) {
            await MediaLibrary.saveToLibraryAsync(foto.uri);
            setFoto(null);
        }
    };

    const onBarCodeScanned = ({ type, data }) => {
        setQrCode(data);
        Alert.alert("QR Code Lido", data);
    };

    return (
        <View style={styles.container}>
            {qrCode ? (
                <View>
                    <Text style={styles.qrCodeTexto}>QR Code Lido: {qrCode}</Text>
                    <Button title="Voltar" onPress={() => setQrCode(null)} />
                </View>
            ) : foto ? (
                <View>
                    <Text>Foto tirada!</Text>
                    <Button title="Salvar foto" onPress={salvarFoto} />
                    <Button title="Descartar foto" onPress={() => setFoto(null)} />
                </View>
            ) : (
                <Camera
                    style={styles.camera}
                    type={lado}
                    ref={cameraRef}
                    onBarCodeScanned={onBarCodeScanned}
                    barCodeScannerSettings={{
                        barCodeTypes: [Camera.Constants.BarCodeType.qr],
                    }}
                >
                    <View style={styles.cameraButtons}>
                        <Button title="Tirar Foto" onPress={tirarFoto} />
                        <Button title="Trocar Câmera" onPress={trocaCamera} />
                    </View>
                </Camera>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    cameraButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    qrCodeTexto: {
        textAlign: 'center',
        fontSize: 18,
        margin: 20,
    },
    textoPermissao: {
        textAlign: 'center',
    },
});
