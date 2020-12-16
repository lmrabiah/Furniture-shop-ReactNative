import React from "react";
//i will import Icon  in styles
// import { Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
//styles
import { CartButtonStyled, CartTextStyled } from "../../styles";
//stores
import cartStore from "../../stores/cartStore";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>

      <CartButtonStyled
        type="MaterialCommunityIcons"
        name="cart"
        onPress={() => navigation.navigate("Cart")}
      />
    </>
  );
};
export default observer(CartButton);
