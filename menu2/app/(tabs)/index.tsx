import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button mode="contained" onPress={openMenu}>
              Share
            </Button>
          }
        >
          <Menu.Item onPress={closeMenu} 
          title="Copy Website Link" />
          <Menu.Item onPress={closeMenu} 
          title="Copy Image Link" />
          <Menu.Item onPress={closeMenu}
          title="Send To Contact" />
        </Menu>
      </View>
    </PaperProvider>
  );
}
