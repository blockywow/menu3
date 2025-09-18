import * as React from "react";
import { View } from "react-native";
import { Button, Divider, Menu } from "react-native-paper";

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button mode="contained" onPress={openMenu}>
            Show menu
          </Button>
        }
      >
        <Menu.Item
          onPress={() => {
            closeMenu();
          }}
          title="Item 1"
        />
        <Menu.Item
          onPress={() => {
            closeMenu();
          }}
          title="Item 2"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            closeMenu();
          }}
          title="Item 3"
        />
      </Menu>
    </View>
  );
};

export default MyComponent;
