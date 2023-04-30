const palette = {
  background: { value: "#F3F4F4", private: true },
  border: { value: "#D3D4D5", private: true },
  borderDark: { value: "#909396", private: true },
  focus: { value: "#C26F9D", private: true },
  heading: { value: "#002F6C", private: true },
  hero: { value: "#002F6C", private: true },
  light: { value: "#FAFAFA", private: true },
  link: { value: "#D81B2B", private: true },
  muted: { value: "#6A6E72", private: true },
  neutral: { value: "#6A6E72", private: true },
  pop: { value: "#00ADBD", private: true },
  primary: { value: "#D81B2B", private: true },
  text: { value: "#333", private: true },

  // reserved
  success: { value: "#008000", private: true },
  info: { value: "#0074C4", private: true },
  warning: { value: "#C53B00", private: true },
  danger: { value: "#C40000", private: true },
  system: { value: "#FF0", private: true },
};


module.exports = {
  brand: {
    name: "BankSA",
    code: "BSA",
  },
  palette: {
    ...palette,
    tints,
  },
};
