const theme = {
  colors: {
    primaryA: ["#F9FED2","#F4FDAE","#EFFB8C","#E9F969","#E2F648","#DBF227","#D1DF0C","#BFBF00","#9F9F00","#808000"],
    secondaryA: ["#FEE7E4","#FDCDC6","#FBB2A8","#F9988B","#F67F6F","#F26653","#D94A36","#B3321E","#8C1F0D","#661101"],
    secondaryB: ["#D9F9F9","#ADF1F1","#82E9E9","#57E0E0","#2BD6D6","#00CCCC","#00C3C3","#00B3B3","#008C8C","#006666"],
    secondaryC: ["#006666","#ccffec","#7affcd","#7affcd","#29f8ac","#05f29b","#05f29b","#00bf80","#00bf80","#00805d"],
    negative: ["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],
    warning: ["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],
    positive: ["#DCF9E8","#B5F1CD","#8FE9B3","#69E099","#44D67F","#1FCC65","#08C052","#00AD41","#008C31","#006622"],
    information: ["#ccdfff","#a3c6ff","#7aadff","#5295ff","#297dff","#0065ff","#0065ff","#0065ff","#00339f","#002580"],
  },

  spacing: { xs: "10px", sm: "12px", md: "16px", lg: "20px", xl: "24px"},
  fontSizes: { xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px" },

  fontFamily: 'Greycliff CF',

  headings:{
    fontWeight:400,
    fontFamily: 'Greycliff CF',
    sizes:{
      h1: {fontWeight: 700, fontSize: 34, lineHeight: 44},
      h2: {fontWeight: 700, fontSize: 26, lineHeight: 35},
      h3: {fontWeight: 700, fontSize: 22, lineHeight: 31},
      h4: {fontWeight: 700, fontSize: 18, lineHeight: 26},
      h5: {fontWeight: 700, fontSize: 16, lineHeight: 24},
      h6: {fontWeight: 700, fontSize: 14, lineHeight: 21},
    }
  },

  components:{
    Button:{
      styles: (theme, params) => ({
        root:{
          bacgroundColor:
          params.variant === 'filled'
          ? theme.colors[params.color || theme.primaryA[9]]
          :undefined
        }
      })
    }
  }
};

export default theme;