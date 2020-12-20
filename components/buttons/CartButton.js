import React from "react";
//i will import Icon  in styles
// import { Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { Alert } from "react-native";
import { ListItem, Right, Left, Button } from "native-base";
//styles
import { CartButtonStyled, CartTextStyled, TotalPrice } from "../../styles";
//stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CartButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authStore.user) navigation.navigate("Cart");
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>

      {/* <TotalPrice>{item.price * item.quantity} KD</TotalPrice> */}

      <CartButtonStyled
        type="MaterialCommunityIcons"
        name="cart"
        onPress={handlePress}
      />
    </>
  );
};
export default observer(CartButton);
