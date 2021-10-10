import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import {
  FormInput,
  HeaderApp,
  IconButton,
  RadioButtom,
  TextButton,
} from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { utils } from "../../utils";
const AddCard = ({ navigation, route }) => {
  const [selectedCard, setselectedCard] = useState(null);
  const [cardNumber, setcardNumber] = useState("");
  const [cardNumberError, setcardNumberError] = useState("");
  const [cardName, setcardName] = useState("");
  const [cardNameError, setcardNameError] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  const [expiryDateError, setexpiryDateError] = useState("");
  const [cvv, setcvv] = useState("");
  const [cvvError, setcvvError] = useState("");
  const [isRemember, setisRemember] = useState(false);
  useEffect(() => {
    let { selectedCard } = route.params;
    setselectedCard(selectedCard);
  }, []);
  function renderHeader() {
    return (
      <HeaderApp
        title="ADD NEW CARD"
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
        rightComponent={<View />}
      />
    );
  }
  function renderCard() {
    return (
      <ImageBackground
        source={images.card}
        style={{
          height: 200,
          width: "100%",
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          overflow: "hidden",
        }}
      >
        {/* Logo  */}
        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            height: 40,
            width: 80,
          }}
        />
        {/* Details */}
        <View
          style={{
            position: "absolute",
            bottom: 10,
            right: 0,
            left: 0,
            paddingHorizontal: SIZES.radius,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{cardName}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 1, color: COLORS.white, ...FONTS.body3 }}>
              {cardNumber}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
              {expiryDate}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
        }}
      >
        {/* Card Number */}
        <FormInput
          label="Card Number"
          keyboardType="number-pad"
          maxLength={19}
          value={cardNumber}
          onChangeText={(value) => {
            setcardNumber(
              value
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()
            );
            utils.validateInput(value, 19, setcardNumberError);
          }}
          errorMsg={cardNumberError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  cardNumber === "" ||
                  (cardNumber !== "" && cardNumberError === "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    cardNumber === ""
                      ? COLORS.gray
                      : cardNumber !== "" && cardNumberError === ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        {/* Card Holder Name */}
        <FormInput
          label="Cardholder Name"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          value={cardName}
          onChangeText={(value) => {
            setcardName(value);
            utils.validateInput(value, 1, setcardNameError);
          }}
          errorMsg={cardNameError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  cardName === "" || (cardName !== "" && cardNameError === "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    cardName === ""
                      ? COLORS.gray
                      : cardName !== "" && cardNameError === ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        {/* Expiry Date / CVV */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
          }}
        >
          <FormInput
            label="Expiry Date"
            placeholder="MM/YY"
            maxLength={5}
            value={expiryDate}
            containerStyle={{
              flex: 1,
            }}
            onChangeText={(value) => {
              setexpiryDate(value);
              utils.validateInput(value, 5, setexpiryDateError);
            }}
            errorMsg={expiryDateError}
            appendComponent={
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    expiryDate === "" ||
                    (expiryDate !== "" && expiryDateError === "")
                      ? icons.correct
                      : icons.cancel
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                      expiryDate === ""
                        ? COLORS.gray
                        : expiryDate !== "" && expiryDateError === ""
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          />
          <FormInput
            label="CVV"
            maxLength={3}
            keyboardType="number-pad"
            value={cvv}
            containerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
            }}
            onChangeText={(value) => {
              setcvv(value);
              utils.validateInput(value, 3, setcvvError);
            }}
            errorMsg={cvvError}
            appendComponent={
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    cvv === "" || (cvv !== "" && cvvError === "")
                      ? icons.correct
                      : icons.cancel
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                      cvv === ""
                        ? COLORS.gray
                        : cvv !== "" && cvvError === ""
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          />
        </View>
        {/* Remember */}
        <View style={{ alignItems: "flex-start", marginTop: SIZES.padding }}>
          <RadioButtom
            label="Remember this card details."
            isSelected={isRemember}
            onPress={() => setisRemember(!isRemember)}
          />
        </View>
      </View>
    );
  }
  function isEnableAddCard() {
    return (
      cardNumber != "" &&
      cardName != "" &&
      expiryDate != "" &&
      cvv != "" &&
      cardNumberError == "" &&
      cardNameError == "" &&
      expiryDateError == "" &&
      cvvError == ""
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
          label="Add Card"
          label2=""
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableAddCard() ? COLORS.primary : COLORS.gray,
          }}
          disabled={!isEnableAddCard()}
          onPress={() => navigation.goBack()}
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
      {/* Body */}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Card */}
        {renderCard()}
        {/* Forms */}
        {renderForm()}
      </KeyboardAwareScrollView>
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default AddCard;
