import React, { Component } from "react";
import { colors } from "../constants/Constants";
import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import LoginScreen from "../../screens/LoginScreen/LoginScreen";
//OnBoarding
import OnBoardingScreen from "../../screens/WalletScreen/OnBoardingScreen/OnBoardingScreen";
import BackupPhraseScreen from "../../screens/WalletScreen/BackupPhraseScreen/BackupPhraseScreen";
import VerifyBackupPhraseScreen from "../../screens/WalletScreen/VerifyBackupPhraseScreen/VerifyBackupPhraseScreen";
//Passcode
import PasscodeScreen from "../../screens/PasscodeScreen/PasscodeScreen";
import PasscodeConfirmScreen from "../../screens/PasscodeScreen/PasscodeConfirmScreen";

//Tabbar Bottom
import PaymentScreen from "../../screens/TabBarScreen/PaymentScreen/PaymentScreen";
import AnalyticsScreen from "../../screens/TabBarScreen/AnalyticsScreen/AnalyticsScreen";
import AccountsScreen from "../../screens/TabBarScreen/AccountsScreen/AccountsScreen";
import CardsScreen from "../../screens/TabBarScreen/CardsScreen/CardsScreen";
import MoreScreen from "../../screens/TabBarScreen/MoreScreen/MoreScreen";

//Left DrawerScreen
import AccountSettingScreen from "../../screens/DrawerScreen/AccountSettingScreen/AccountSettingScreen";
import SecurityScreen from "../../screens/DrawerScreen/SecurityScreen/SecurityScreen";
import HelpScreen from "../../screens/DrawerScreen/HelpScreen/HelpScreen";
import InviteScreen from "../../screens/DrawerScreen/InviteScreen/InviteScreen";
import BankAccountScreen from "../../screens/DrawerScreen/BankAccountScreen/BankAccountScreen";
import LogoutScreen from "../../screens/DrawerScreen/LogoutScreen/LogoutScreen";
import DrawerScreen from "../../screens/DrawerScreen/DrawerScreen/DrawerScreen";
import SentAndReceiveeScreen from "../../screens/DrawerScreen/SentAndReceiveeScreen/SentAndReceiveeScreen";
import SentMoneyScreen from "../../screens/DrawerScreen/SentAndReceiveeScreen/SentMoneyScreen/SentMoneyScreen";
import ReceiveMoneyScreen from "../../screens/DrawerScreen/SentAndReceiveeScreen/ReceiveMoneyScreen/ReceiveMoneyScreen";
import QrcodeScannerScreen from "../../screens/DrawerScreen/SentAndReceiveeScreen/QrcodeScannerScreen/QrcodeScannerScreen";

import AccountsDetailsScreen from "../../screens/DrawerScreen/AccountsDetailsScreen/AccountsDetailsScreen";
import RecentTransactionsScreen from "../../screens/TabBarScreen/AccountsScreen/RecentTransactionsScreen/RecentTransactionsScreen";

//TODO: Secure Account
import AccountDetailsOnboardingScreen from "../../screens/DrawerScreen/AccountDetailsOnboardingScreen/AccountDetailsOnboardingScreen";
import SecureAccountScreen from "../../screens/DrawerScreen/SecureAccountScreen/SecureAccountScreen";
import SecureSecretKeyScreen from "../../screens/DrawerScreen/SecureAccountScreen/SecureSecretKeyScreen/SecureSecretKeyScreen";
import ValidateSecureAccountScreen from "../../screens/DrawerScreen/SecureAccountScreen/ValidateSecureAccountScreen/ValidateSecureAccountScreen";

//TODO: MyProfile
import MyProfileScreen from "../../screens/DrawerScreen/MyProfileScreen/MyProfileScreen";

//VaultAccount Screen
import VaultAccountScreen from "../../screens/DrawerScreen/VaultAccountScreen/VaultAccountScreen";

//Joint Account Screens
import CreateJointAccountScreen from "../../screens/DrawerScreen/JointAccountScreen/CreateJointAccountScreen";
import CreatorJointAccountScreen from "../../screens/DrawerScreen/JointAccountScreen/CreatorJointAccountScreen";

//Right DrawerScreen
import NotificationScreen from "../../screens/DrawerScreen/NotificationScreen/NotificationScreen";

//TODO: StackNavigator

//TODO: StackNavigator:ONBoarding
const OnBoardingRouter = createStackNavigator(
  {
    OnBoarding: {
      screen: OnBoardingScreen,
      navigationOptions: { header: null }
    },
    BackupPhrase: {
      screen: BackupPhraseScreen,
      navigationOptions: { header: null }
    },
    VerifyBackupPhrase: {
      screen: VerifyBackupPhraseScreen,
      navigationOptions: () => ({
        title: "Verify Backup Phrase",
        headerStyle: {
          backgroundColor: "#F5951D"
        }
      })
    }
  },
  {
    initialRouteName: "OnBoarding"
  }
);

//TODO: StackNavigator:LoginRouter
const LoginRouter = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "Login"
  }
);

//TODO: StackNavigator:SecureAccountRouter
const SecureAccountRouter = createStackNavigator(
  {
    SecureAccountScreen: {
      screen: SecureAccountScreen,
      navigationOptions: { header: null }
    },
    SecureSecretKeyScreen: {
      screen: SecureSecretKeyScreen,
      navigationOptions: { header: null }
    },
    ValidateSecureAccountScreen: {
      screen: ValidateSecureAccountScreen,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "SecureAccountScreen"
  }
);

//TODO: StackNavigator:AccountDetailsOnboardingRouter
const AccountDetailsOnboardingRouter = createStackNavigator(
  {
    AccountDetailsOnboardingScreen: {
      screen: AccountDetailsOnboardingScreen,
      navigationOptions: { header: null }
    },
    SecureAccountScreen: {
      screen: SecureAccountScreen,
      navigationOptions: { header: null }
    },
    SecureSecretKeyScreen: {
      screen: SecureSecretKeyScreen,
      navigationOptions: { header: null }
    },
    ValidateSecureAccountScreen: {
      screen: ValidateSecureAccountScreen,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "AccountDetailsOnboardingScreen"
  }
);

//TODO: StackNavigator:MyProfileRouter
const MyProfileRouter = createStackNavigator(
  {
    MyProfileScreen: {
      screen: MyProfileScreen,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "MyProfileScreen"
  }
);

//TODO: StackNavigator:VaultAccountRouter

const VaultAccountRouter = createStackNavigator(
  {
    VaultAccountScreen: {
      screen: VaultAccountScreen,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "VaultAccountScreen"
  }
);

const JointAccountRouter = createStackNavigator(
  {
    CreateJointAccountScreen: {
      screen: CreateJointAccountScreen,
      navigationOptions: { header: null }
    },
    CreatorJointAccountScreen: {
      screen: CreatorJointAccountScreen,
      navigationOptions: {header:null}
    }
  },
  {
    initialRouteName: "CreateJointAccountScreen"
  }
);

//TODO: TabNavigator

//TODO: TabNavigator:TabNavigator
const TabNavigator = createBottomTabNavigator(
  {
    Payment: {
      screen: PaymentScreen,
      navigationOptions: {
        tabBarLabel: "Payment",
        drawerLockMode: "locked-open",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="credit-card" size={20} color={tintColor} />
        )
      }
    },
    Analytics: {
      screen: AnalyticsScreen,
      navigationOptions: {
        tabBarLabel: "Analytics",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="signal" size={20} color={tintColor} />
        )
      }
    },
    Accounts: {
      screen: AccountsScreen,
      navigationOptions: {
        tabBarLabel: "Accounts",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="dollar" size={20} color={tintColor} />
        )
      }
    },
    Cards: {
      screen: CardsScreen,
      navigationOptions: {
        tabBarLabel: "Cards",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="id-card" size={20} color={tintColor} />
        )
      }
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarLabel: "More",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ellipsis-v" size={20} color={tintColor} />
        )
      }
    }
  },

  {
    initialRouteName: "Accounts",
    tabBarOptions: {
      activeTintColor: colors.appColor,
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "#ffffff"
      }
    }
  }
);

//TODO: DrawerNavigator
//TODO: DrawerNavigator:LeftDrawerNavigator
const LeftDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => <Icon name="home" size={17} />
      }
    }
  },

  {
    initialRouteName: "Home",
    contentComponent: DrawerScreen,
    drawerPosition: "left",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentOptions: {
      activeTintColor: "#e91e63",
      style: {
        flex: 1,
        paddingTop: 15
      }
    }
  }
);

//TODO: RootNavigator
//TODO: RootNavigator:createRootNavigator
export const createRootNavigator = (
  signedIn = false,
  screenName = "Password"
) => {
  if (screenName == "OnBoarding") {
    return createStackNavigator(
      {
        PasscodeScreen: {
          screen: PasscodeScreen,
          navigationOptions: { header: null }
        },
        OnBoardingNavigator: {
          screen: OnBoardingRouter,
          navigationOptions: { header: null }
        },
        PasscodeConfirmScreen: {
          screen: PasscodeConfirmScreen,
          navigationOptions: { header: null }
        },
        TabbarBottom: {
          screen: LeftDrawerNavigator,
          navigationOptions: { header: null }
        },
        //Drwaer Navigation
        AccountSettingScreen: {
          screen: AccountSettingScreen,
          navigationOptions: { header: null }
        },
        SecurityScreen: {
          screen: SecurityScreen,
          navigationOptions: { header: null }
        },
        HelpScreen: {
          screen: HelpScreen,
          navigationOptions: { header: null }
        },
        InviteScreen: {
          screen: InviteScreen,
          navigationOptions: { header: null }
        },
        BankAccountScreen: {
          screen: BankAccountScreen,
          navigationOptions: { header: null }
        },
        LogoutScreen: {
          screen: LogoutScreen,
          navigationOptions: { header: null }
        },
        NotificationScreen: {
          screen: NotificationScreen,
          navigationOptions: { header: null }
        },
        //SentMoney And Receive Money
        SentAndReceiveeScreen: {
          screen: SentAndReceiveeScreen,
          navigationOptions: {
            header: null,
            drawerLockMode: "locked-open"
          }
        },
        SentMoneyScreen: {
          screen: SentMoneyScreen,
          navigationOptions: { header: null }
        },
        ReceiveMoneyScreen: {
          screen: ReceiveMoneyScreen,
          navigationOptions: { header: null }
        },
        QrcodeScannerScreen: {
          screen: QrcodeScannerScreen,
          navigationOptions: { header: null }
        },
        //Backup Phrase
        BackupPhraseScreen: {
          screen: BackupPhraseScreen,
          navigationOptions: { header: null }
        },
        VerifyBackupPhraseScreen: {
          screen: VerifyBackupPhraseScreen,
          navigationOptions: { header: null }
        },
        //AccountDetailsScrenn
        AccountsDetailsScreen: {
          screen: AccountsDetailsScreen,
          navigationOptions: { header: null }
        },
        //RecentTransactionsScreen
        RecentTransactionsScreen: {
          screen: RecentTransactionsScreen,
          navigationOptions: { header: null }
        },
        //SecureAccountRouter
        SecureAccountRouter: {
          screen: SecureAccountRouter,
          navigationOptions: { header: null }
        },
        //Profile
        MyProfileRouter: {
          screen: MyProfileRouter,
          navigationOptions: { header: null }
        },
        //VaultAccountRouter
        VaultAccountRouter: {
          screen: VaultAccountRouter,
          navigationOptions: { header: null }
        },
        JointAccountRouter: {
          screen: JointAccountRouter,
          navigationOptions: { header: null}
        },
        //AccountDetailsOnboardingRouter
        AccountDetailsOnboardingRouter: {
          screen: AccountDetailsOnboardingRouter,
          navigationOptions: { header: null }
        }
      },
      {
        initialRouteName: signedIn ? "OnBoardingNavigator" : "PasscodeScreen"
        // initialRouteName: signedIn ? "OnBoardingNavigator" : "OnBoardingNavigator"
        // initialRouteName: signedIn ? "TabbarBottom" : "TabbarBottom"
      }
    );
  } else {
    return createStackNavigator(
      {
        PasscodeScreen: {
          screen: PasscodeScreen,
          navigationOptions: { header: null }
        },
        OnBoardingNavigator: {
          screen: OnBoardingRouter,
          navigationOptions: { header: null }
        },
        PasscodeConfirmScreen: {
          screen: PasscodeConfirmScreen,
          navigationOptions: { header: null }
        },
        LoginNavigator: {
          screen: LoginRouter,
          navigationOptions: { header: null }
        },
        TabbarBottom: {
          screen: LeftDrawerNavigator,
          navigationOptions: { header: null }
        },
        //Drwaer Navigation
        AccountSettingScreen: {
          screen: AccountSettingScreen,
          navigationOptions: { header: null }
        },
        SecurityScreen: {
          screen: SecurityScreen,
          navigationOptions: { header: null }
        },
        HelpScreen: {
          screen: HelpScreen,
          navigationOptions: { header: null }
        },
        InviteScreen: {
          screen: InviteScreen,
          navigationOptions: { header: null }
        },
        BankAccountScreen: {
          screen: BankAccountScreen,
          navigationOptions: { header: null }
        },
        LogoutScreen: {
          screen: LogoutScreen,
          navigationOptions: { header: null }
        },
        NotificationScreen: {
          screen: NotificationScreen,
          navigationOptions: { header: null }
        },
        //SentMoney And Receive Money
        SentAndReceiveeScreen: {
          screen: SentAndReceiveeScreen,
          navigationOptions: {
            header: null,
            drawerLockMode: "locked-open"
          }
        },
        SentMoneyScreen: {
          screen: SentMoneyScreen,
          navigationOptions: { header: null }
        },
        ReceiveMoneyScreen: {
          screen: ReceiveMoneyScreen,
          navigationOptions: { header: null }
        },
        QrcodeScannerScreen: {
          screen: QrcodeScannerScreen,
          navigationOptions: { header: null }
        },
        //Backup Phrase
        BackupPhraseScreen: {
          screen: BackupPhraseScreen,
          navigationOptions: { header: null }
        },
        VerifyBackupPhraseScreen: {
          screen: VerifyBackupPhraseScreen,
          navigationOptions: { header: null }
        },
        //AccountDetailsScrenn
        AccountsDetailsScreen: {
          screen: AccountsDetailsScreen,
          navigationOptions: { header: null }
        },
        //RecentTransactionsScreen
        RecentTransactionsScreen: {
          screen: RecentTransactionsScreen,
          navigationOptions: { header: null }
        },
        //SecureAccountRouter
        SecureAccountRouter: {
          screen: SecureAccountRouter,
          navigationOptions: { header: null }
        },
        //Profile
        MyProfileRouter: {
          screen: MyProfileRouter,
          navigationOptions: { header: null }
        },
        //VaultAccountRouter
        VaultAccountRouter: {
          screen: VaultAccountRouter,
          navigationOptions: { header: null }
        },
        JointAccountRouter: {
          screen: JointAccountRouter,
          navigationOptions: { header: null}
        },
        //AccountDetailsOnboardingRouter
        AccountDetailsOnboardingRouter: {
          screen: AccountDetailsOnboardingRouter,
          navigationOptions: { header: null }
        }
      },  
      {
        initialRouteName: signedIn ? "TabbarBottom" : "PasscodeConfirmScreen"
        //  initialRouteName: signedIn ? "OnBoardingNavigator" : "OnBoardingNavigator"
        //initialRouteName: signedIn ? "TabbarBottom" : "TabbarBottom"
      }
    );
  }
};
