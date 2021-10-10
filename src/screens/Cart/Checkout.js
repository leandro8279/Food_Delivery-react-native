import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { CardItem, FormInput, HeaderApp, IconButton,FooterTotal } from "../../components";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Checkout = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  useEffect(() => {
    let { selectedCard } = route.params;
    setSelectedCard(selectedCard);
  }, []);

  function renderHeader() {
    return (
      <HeaderApp
        title="CHECKOUT"
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
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <View
            style={{
              width: 40,
            }}
          />
        }
      />
    );
  }

  function renderMyCard() {
    return (
      <View>
        {selectedCard &&
          dummyData.myCards.map((item) => (
            <CardItem
              key={`MyCard${item.id}`}
              isSelected={
                `${selectedCard?.key}-${selectedCard.id}` == `MyCard-${item.id}`
              }
              item={item}
              onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
            />
          ))}
      </View>
    );
  }

  function renderDeliveryAddr() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Delivery Address</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: SIZES.radius,
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2,
          }}
        >
          <Image
            source={icons.location1}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              marginLeft: SIZES.radius,
              width: "85%",
              ...FONTS.body3,
            }}
          >
            300 Post Street San Franciso, CA
          </Text>
        </View>
      </View>
    );
  }

  function renderCoupon() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Add Coupon</Text>
        <FormInput
          inputContainerStyle={{
            marginTop: 0,
            paddingRight: 0,
            paddingLeft: SIZES.padding,
            backgroundColor: COLORS.white,
            borderColor: COLORS.lightGray2,
            borderWidth: 2,
            overflow: "hidden",
          }}
          placeholder={"Coupon Code"}
          inputStyle={{
            flex: 1,
          }}
            appendComponent={
              <View
                style={{
                  width: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: COLORS.primary,
                }}
              >
                <Image
                  source={icons.discount}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </View>
            }

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

      {/*Body*/}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}
      >
        {/*My Cards*/}
        {renderMyCard()}
        {/*Delivery Address*/}
        {renderDeliveryAddr()}
        {/*Coupon*/}
        {renderCoupon()}
      </KeyboardAwareScrollView>
      {/*Footer*/}
      <FooterTotal subTotal={37.97} shippingFee={0.00} total={37.97} onPress={()=>navigation.navigate('Success')}/>
    </View>
  );
};
export default Checkout;
