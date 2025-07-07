import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useThemeContext } from '../theme/ThemeProvider';
import { Colors } from '../types/global';

type ProfileStackParamList = {
  Orders: undefined;
  EditProfiles: undefined;
  Support: undefined;
  DeliveryAndReturn: undefined;
  TermsAndCondition: undefined;
  PrivacyPolicy: undefined;
  Login: undefined;
  Register: undefined;
};

type ProfileItemProps = {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  onPress?: () => void;
};

const ProfileItem: React.FC<ProfileItemProps> = ({
  title,
  subtitle,
  icon,
  onPress,
}) => {
  const { colors } = useThemeContext();
  const styles = getStyles(colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        subtitle
          ? styles.profileSectionDoubleLine
          : styles.profileSectionSingleLine
      }
    >
      <View>
        <Text style={styles.textTitle}>{title}</Text>
        {subtitle && <Text style={styles.textSubTitle}>{subtitle}</Text>}
      </View>
      {icon}
    </TouchableOpacity>
  );
};

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();
  const { colors } = useThemeContext();
  const styles = getStyles(colors);

  return (
    <SafeAreaView style={styles.profileContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileSectionDoubleLine}>
          <View style={styles.userContainer}>
            <Text style={styles.userName}>Anonno Das</Text>
            <Text style={styles.userEmail}>Email: anonnodas97@gmail.com</Text>
          </View>
          <FontAwesome name="user-circle-o" size={36} color={colors.text} />
        </View>

        <ProfileItem
          title="Orders"
          subtitle="Find your orders"
          icon={<AntDesign name="inbox" size={24} color={colors.text} />}
          onPress={() => navigation.navigate('Orders')}
        />
        <ProfileItem
          title="Profile"
          subtitle="Manage your profile"
          icon={
            <FontAwesome name="user-circle-o" size={24} color={colors.text} />
          }
          onPress={() => navigation.navigate('EditProfiles')}
        />
        <ProfileItem
          title="Support"
          subtitle="Help center"
          icon={
            <MaterialIcons name="support-agent" size={24} color={colors.text} />
          }
          onPress={() => navigation.navigate('Support')}
        />
        <ProfileItem
          title="Theme Settings"
          subtitle="Customize your theme"
          icon={
            <MaterialIcons name="color-lens" size={24} color={colors.text} />
          }
          //   onPress={() => navigation.navigate('ThemeSettings')}
        />
        <ProfileItem
          title="Delivery & Return policy"
          icon={
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={24}
              color={colors.text}
            />
          }
          onPress={() => navigation.navigate('DeliveryAndReturn')}
        />
        <ProfileItem
          title="Terms & Condition"
          icon={
            <MaterialCommunityIcons
              name="text-box-check-outline"
              size={24}
              color={colors.text}
            />
          }
          onPress={() => navigation.navigate('TermsAndCondition')}
        />
        <ProfileItem
          title="Privacy policies"
          icon={<MaterialIcons name="policy" size={24} color={colors.text} />}
          onPress={() => navigation.navigate('PrivacyPolicy')}
        />
        <ProfileItem
          title="Rate the app"
          icon={<Feather name="star" size={24} color={colors.text} />}
        />
        <ProfileItem
          title="Login Screen"
          icon={<Feather name="star" size={24} color={colors.text} />}
          onPress={() => navigation.navigate('Login')}
        />
        <ProfileItem
          title="Register Screen"
          icon={<Feather name="star" size={24} color={colors.text} />}
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    profileContainer: {
      backgroundColor: colors.background,
      flex: 1,
      paddingHorizontal: 20,
    },
    profileSectionDoubleLine: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 25,
    },
    profileSectionSingleLine: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 40,
    },
    userContainer: {
      marginTop: 20,
    },
    textTitle: {
      fontSize: 20,
      fontWeight: '500',
      color: colors.text,
    },
    textSubTitle: {
      color: '#868D94',
    },
    userName: {
      fontSize: 28,
      fontWeight: '600',
      color: colors.text,
    },
    userEmail: {
      color: '#868D94',
      fontSize: 16,
    },
  });
