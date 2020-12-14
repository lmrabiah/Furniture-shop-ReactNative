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
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRGtpqnKCEKfS_q4kSSYYZZe1STU3Xm16gFg&usqp=CAU",
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
