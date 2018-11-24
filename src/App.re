open BsReactNative;

let dimensions = Dimensions.get(`screen);

module Styles = {
  open Style;
  let app =
    style([
      backgroundColor(String("white")),
      width(Pt(dimensions##width |> float_of_int)),
      height(Pt(dimensions##height |> float_of_int)),
      justifyContent(Center),
    ]);
  let image = style([height(Pt(300.)), width(Pct(100.))]);
  let container = style([width(Pct(100.))]);
};

let app = () =>
  <View style=Styles.app>
    <View style=Styles.container>
      <Image
        resizeMode=`contain
        style=Styles.image
        source={`Required(Packager.require("./assets/supreme-logo.jpg"))}
      />
    </View>
  </View>;
