import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import {
  COLORS,
  dummyData,
  FONTS,
  icons,
  images,
  SIZES,
} from "../../constants";
import { CardItem, HeaderApp, IconButton, TextButton } from "../../components";
import { Colors } from "react-native/Libraries/NewAppScreen";
const MyCard = ({ navigation }) => {
  const [selectedCard, setselectedCard] = useState(null);
  function renderHeader() {
    return (
      <HeaderApp
        title="My Card"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => console.log("Back")}
          />
        }
        rightComponent={<View />}
      />
    );
  }
  function renderMyCards() {
    return (
      <View style={{}}>
        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`MyCard-${item.id}`}
              item={item}
              onPress={() => setselectedCard({ ...item, key: "MyCard" })}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `MyCard-${item.id}`
              }
            />
          );
        })}
      </View>
    );
  }
  function renderAddNewCard() {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.h3 }}>Add new card</Text>
        {dummyData.allCards.map((item, index) => {
          return (
            <CardItem
              key={`NewCard-${item.id}`}
              item={item}
              onPress={() => setselectedCard({ ...item, key: "NewCard" })}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `NewCard-${item.id}`
              }
            />
          );
        })}
      </View>
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCard == null ? COLORS.gray : COLORS.primary,
          }}
          disabled={selectedCard == null}
          label={selectedCard?.key == "NewCard" ? "Add" : "Place your Order"}
          label2=""
          onPress={() => {
            if (selectedCard?.key == "NewCard") {
              navigation.navigate("AddCard", {
                selectedCard,
              });
            } else {
              navigation.navigate("Checkout", {
                selectedCard,
              });
            }
          }}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header  */}
      {renderHeader()}
      {/* Cards  */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* My Cards  */}
        {renderMyCards()}
        {/* Add New Cards  */}
        {renderAddNewCard()}
      </ScrollView>
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default MyCard;
