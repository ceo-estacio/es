

// const tintColorLight = "#2f95dc";
// const tintColorDark = "#fff";
const 
   light = {
      color: {
         tint: "#2f95dc",
         iconDefault: "#27f",
         text: "#333",
         background: "#f5f5f5",
      }
   }
   ,
   dark = {
      color: {
         tint: "#fff",
         iconDefault: "#27f",
         text: "#eee",
         background: "#212329",
      }
   }
;

export default {
   light: {
      text: light.color.text,
      background: light.color.background,
      tint: light.color.tint,
      tabIconDefault: light.color.iconDefault,
      tabIconSelected: light.color.tint,
   },
   dark: {
      text: dark.color.text,
      background: dark.color.background,
      tint: dark.color.tint,
      tabIconDefault: dark.color.iconDefault,
      tabIconSelected: dark.color.tint,
   },
};