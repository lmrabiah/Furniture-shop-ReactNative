import React from "react";
//styles
import {
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
  BottomStyling,
  ButtonStyled,
} from "../styles";

function Home({ navigation }) {
  return (
    <HomeBackground
      source={{
        uri:
          "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0187/gilded-vista-wall-mirror-c.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Furnitre Shop</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("AllStores")}>
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
}

export default Home;
