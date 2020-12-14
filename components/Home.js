import React from "react";

import {
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
  BottomStyling,
  ButtonStyled,
} from "../styles";
function Home() {
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
          <ButtonStyled onPress={() => alert("Take me to the list of stores")}>
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
}

export default Home;
