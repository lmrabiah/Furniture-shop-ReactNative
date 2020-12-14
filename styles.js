import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  flex: 0.7;
  width: 100%;
  height: 100%;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38;
  text-align: center;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 20;
  color: #fff;
`;
export const OneStoreStyled = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 18;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 16;
  width: 100%;
`;

export const StoreDetailWrapper = styled.View`
  margin-top: 50;
`;

export const StoreDetailImage = styled.Image`
  width: 150;
  height: 150;
`;

export const StoreDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40;
`;

export const StoreItemStyled = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;
