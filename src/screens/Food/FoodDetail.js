import React from "react";
import { View, Text, Image } from "react-native";
import {
  COLORS,
  dummyData,
  FONTS,
  icons,
  images,
  SIZES,
} from "../../constants";
import {
  CartQuantityButton,
  HeaderApp,
  IconButton,
  IconLabel,
  LineDivider,
  Rating,
  StepperInput,
  TextButton,
} from "../../components";
import { ScrollView } from "react-native-gesture-handler";
const FoodDetail = ({ navigation }) => {
  const [foodItem, setFoodItem] = React.useState(dummyData.vegBiryani);
  const [selectedSize, setselectedSize] = React.useState("");
  const [qty, setqty] = React.useState(3);
  function renderHeader() {
    return (
      <HeaderApp
        title="DETAILS"
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
        rightComponent={<CartQuantityButton quantity={3} />}
      />
    );
  }
  function rederDetail() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Food Card */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          {/* Categories & Favourite */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            {/* Calories */}
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.calories}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: COLORS.darkGray2,
                  ...FONTS.body4,
                }}
              >
                {foodItem?.calories} calories
              </Text>
            </View>
            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>
          {/* Food Image  */}
          <Image
            source={foodItem.image}
            style={{
              height: 170,
              width: "100%",
            }}
            resizeMode="contain"
          />
        </View>
        {/* Food Info */}
        <View style={{ marginTop: SIZES.padding }}>
          {/* Nome & description */}
          <Text
            style={{
              ...FONTS.h1,
            }}
          >
            {foodItem?.name}
          </Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: "justify",
              ...FONTS.body3,
            }}
          >
            {foodItem?.description}
          </Text>
          {/* Rattings, Duration & Shipping */}
          <View style={{ flexDirection: "row", marginTop: SIZES.padding }}>
            {/* Ratings  */}
            <IconLabel
              containerStyle={{
                backgroundColor: COLORS.primary,
              }}
              icon={icons.star}
              label="4.5"
              labelStyle={{
                color: COLORS.white,
              }}
            />
            {/* Duration  */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.clock}
              iconStyle={{
                tintColor: COLORS.black,
              }}
              label="30 mins"
              labelStyle={{
                color: COLORS.black,
              }}
            />
            {/* Shipping */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.dollar}
              iconStyle={{
                tintColor: COLORS.black,
              }}
              label="Free Shipping"
              labelStyle={{
                color: COLORS.black,
              }}
            />
          </View>
          {/* Sizes  */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.h3 }}>SIZES:</Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: SIZES.base,
              }}
            >
              {dummyData.sizes.map((item, index) => (
                <TextButton
                  key={index}
                  buttonContainerStyle={{
                    width: 55,
                    height: 55,
                    margin: SIZES.base,
                    borderWidth: 1,
                    borderRadius: SIZES.radius,
                    borderColor:
                      selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                    backgroundColor:
                      selectedSize == item.id ? COLORS.primary : COLORS.white,
                  }}
                  label2=""
                  label={item.label}
                  labelStyle={{
                    color:
                      selectedSize == item.id ? COLORS.white : COLORS.gray2,
                    ...FONTS.body2,
                  }}
                  onPress={() => setselectedSize(item.id)}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  }
  function rederRestaurant() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Image
          source={images.profile}
          style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
        />
        {/* Info */}
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>BYProgrammers</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
            1.2 KM away from you
          </Text>
        </View>

        {/* Ratings  */}
        <Rating
          rating={4}
          iconStyle={{
            marginLeft: 3,
          }}
        />
      </View>
    );
  }
  function rederFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 70,
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        <StepperInput
          value={qty}
          onAdd={() => setqty(qty + 1)}
          onMinus={() => {
            if (qty > 1) {
              setqty(qty - 1);
            }
          }}
        />
        {/* Text Buttom  */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            flexDirection: "row",
            height: 60,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Buy Now"
          label2="R$ 15.99"
          labelStyle2={{}}
          onPress={() => navigation.navigate("MyCart")}
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
      {/* Header */}
      {renderHeader()}
      <LineDivider />
      {/* body */}
      <ScrollView>
        {/* Food Detail */}
        {rederDetail()}
        {/* Restaurant */}
        {rederRestaurant()}
      </ScrollView>
      {/* Footer */}
      <LineDivider />
      {rederFooter()}
    </View>
  );
};

export default FoodDetail;
