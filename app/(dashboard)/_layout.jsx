import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { colors } from "../../constants/colors";
import UsersOnly from "../../components/auth/UsersOnly";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <UsersOnly>
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTop: 10,
          height: 90,
        },

        tabBarActiveTintColor: theme.iconFocus,
        tabBarInactiveTintColor: theme.icon,

        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size ?? 24}
              color={focused ?  theme.iconFocus :  theme.icon}
            />
          ),
        }}
      />
       <Tabs.Screen
        name="create"
        options={{
          title: "Create",

          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              size={size ?? 24}
              color={focused ?  theme.iconFocus :  theme.icon}
            />
          ),
        }}
      />
        <Tabs.Screen
          name="books"
          options={{
            title: "Books",
  
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "book" : "book-outline"}
                size={size ?? 24}
                color={focused ?  theme.iconFocus :  theme.icon}
              />
            ),
          }}
        />
       
      </Tabs>
      

    </UsersOnly>
  );
};

export default DashboardLayout;