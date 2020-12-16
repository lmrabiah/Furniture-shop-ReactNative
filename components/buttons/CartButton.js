import React from "react";
//i will import Icon  in styles
// import { Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";

//styles
import { CartButtonStyled } from "../../styles";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <CartButtonStyled
      type="MaterialCommunityIcons"
      name="cart"
      onPress={() => navigation.navigate("Cart")}
    />
  );
};
export default CartButton;
