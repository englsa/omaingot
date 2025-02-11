import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { sizes } from '../../components/sizings';
import api from '../../ultils/lib/api';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox, TextInput } from 'react-native-paper';
import { useAppDispatch } from '../../redux/hook';
import { setSession } from '../../redux/slices/sessionSlice';

import { colors } from '../../ultils/themes';
// import messaging from '@react-native-firebase/messaging';

const LoginScreen = (props: any) => {
    // const { t } = useTranslation()
    const { navigation, route } = props;

    const dispath = useAppDispatch()
    const [remmeberMe, setRememberMe] = useState(false)
    const [eye, showEye] = React.useState<boolean>(false);
    const { handleSubmit, control, setValue, formState: { errors } } = useForm();
    // const [type, setType] = useState(heThong)
    useEffect(() => {
        const getSession = async () => {
            var session = await AsyncStorage.getItem('SESSION')
            var remember = await AsyncStorage.getItem('rememberMe')
            if (session) {
                if (remember == 'true') {
                    var data = JSON.parse(session)
                    setValue('username', data.userName)
                    setValue('password', data.password)
                    setRememberMe(true)
                }
            }
        }

        getSession()

    }, [])


    const onSubmit = async (data: any) => {
        try {
            const params = JSON.stringify({
                guest: false,
                username: data.username,
                password: data.password,
                remember_me: true
            }
            )

            const res = await fetch('https://vuphamtung.io.vn/token', {
                method: 'POST',
                body: params,
                headers: {
                    'content-type': 'application/json'
                }
            });

            if (!res.ok) {
                Toast.show({
                    type: 'error',
                    text2: 'Đăng nhâp thất bại'
                })
                return;
            }

            const rs = await res.json();
            if (rs.access_token) {

                var token = "Bearer " + rs.access_token
                var response = await fetch('https://vuphamtung.io.vn/api/customers/me', {
                    method: 'GET',
                    headers: {
                        'Authorization': token
                    }
                });

                const user = await response.json();
                var data = user.customers[0]
                var session = {
                    email: data?.email,
                    username: data?.username,
                    first_name: data?.first_name,
                    last_name: data?.last_name,
                    customer_guid: data?.customer_guid
                }
                dispath(setSession(session))
                await AsyncStorage.setItem('SESSION', JSON.stringify(session));
                await AsyncStorage.setItem('rememberMe', remmeberMe + '')   
                await AsyncStorage.setItem('token', token)
                navigation.replace("BottomTabs")
            } else {
                Toast.show({
                    type: 'error',
                    text2: 'Đăng nhâp thất bại'
                })
            }
        } catch (error) {
            Alert.alert('Thông báo', error + '')
        }
    };

    const forgotPassword = () => {
        Toast.show({
            type: 'info',
            text2: 'THONG_BAO_QUEN_MK',

        })
    }



    return (
        // <Container header={{ title: "Đăng nhập" }}>
        <SafeAreaView>
            {/* <CustomHeader navigateBack={() => navigation.navigate("START")} title={"DANG_NHAP"} /> */}
            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>

                    {/* <Text style={styles.txtHeader}>{t("DANG_NHAP")}</Text> */}

                    <Text style={styles.label}>{'Tài khoản đăng nhập'}</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <TextInput
                                mode='outlined'
                                outlineColor={colors.primary}
                                style={styles.textbox}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                left={
                                    <TextInput.Icon icon={"user"} />
                                }
                                placeholder={'Nhập tài khoản'}
                            />
                        )}
                        name="username"
                        rules={{ required: 'Tài khoản không được để trống' }}
                    />
                    {errors.username?.message && (
                        <Text style={styles.textError}> {'Tài khoản không được để trống'}</Text>
                    )}
                    <Text style={styles.label}>{'Mật khẩu'}</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <TextInput
                                mode='outlined'
                                outlineColor={colors.primary}
                                style={styles.textbox}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder={'Nhập mật khẩu'}
                                secureTextEntry={!eye}
                                left={
                                    <TextInput.Icon icon={"key"} />
                                }
                                right={
                                    <TextInput.Icon icon={!eye ? "eye-slash" : "eye"} onPress={() => showEye(!eye)} />
                                }
                            />
                        )}
                        name="password"
                        rules={{ required: 'Mật khẩu không được để trống' }}
                    />
                    {errors.password?.message && (
                        <Text style={styles.textError}> {'Mật khẩu không được để trống'}</Text>
                    )}

                    <View style={[styles.remember, styles.marginTop20]}>
                        <View style={styles.remember} >
                            <Text style={styles.checkbox}>
                                <Checkbox
                                    status={remmeberMe ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setRememberMe(!remmeberMe);
                                    }}
                                />
                            </Text>
                            <Text style={styles.txtRemember} >{'Nhớ mật khẩu'}</Text>
                        </View>
                        <Text onPress={forgotPassword} style={[styles.txtCenter, styles.txtQuenMK]}> {'Quên mật khẩu'} </Text>
                    </View>

                    <TouchableOpacity style={styles.btnDangNhap} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.txtDangNhap}>{'Đăng nhập'}</Text>
                    </TouchableOpacity>


                    {/* {
                        heThong == 1 ? (
                            <>
                                <View style={styles.marginTop20}>
                                    <Text style={[styles.txtCenter, styles.txtHoac]}> {'HOAC'} </Text>
                                </View>
                                <TouchableOpacity style={styles.btnDangKy} onPress={() => navigation.navigate("REGISTER")}>
                                    <Text style={styles.txtDangNhap}>{'DANG_KY_TAI_KHOAN'}</Text>
                                </TouchableOpacity>
                            </>
                        ) : <></>
                    } */}

                </View>
            </ScrollView>
        </SafeAreaView>
        // </Container>

    )
}

export default LoginScreen
const styles = StyleSheet.create({
    txtHeader: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "500",
        color: "#000",
        marginBottom: 20,
    },
    label: {
        marginTop: 20,
        marginBottom: 5,
        fontSize: 16,
        color: "#000"
    },
    textbox: {
        // padding: 5,
        borderColor: "grey",
        // borderWidth: 1,
        // borderRadius: 5,
        // paddingLeft: 16

    },
    bottomContainer: {},
    scrollView: {
        padding: 10
    },
    content: {
        marginBottom: sizes.size_10,
        marginTop: sizes.size_14
    },
    btnDangNhap: {
        backgroundColor: "#0d6efd",
        padding: 15,
        borderRadius: 5,
        marginTop: 30
    },
    txtDangNhap: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16
    },
    textError: {
        color: "red"
    },
    btnDangKy: {
        backgroundColor: "#198754",
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 40
    },
    txtCenter: {
        textAlign: "center"
    },
    marginTop20: {
        marginTop: 20
    },
    txtQuenMK: {
        color: "#0d6efd",
        fontSize: 16,
        right: 10
    },
    txtHoac: {
        fontSize: 16
    },
    remember: {
        flexDirection: "row",
        alignContent: 'center',
        alignItems: "center",
        justifyContent: "space-between"
    },
    txtRemember: {
        fontSize: 16,
        color: "#000"
    },
    checkbox: {
        marginLeft: -8
    }
});
