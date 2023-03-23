import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import typography from "./typography";

const baseOptions = {
  typography,
  overrides: {
    MuiPickersBasePicker: {
      pickerView: {
        display: "flex",
        maxWidth: "325px",
        minWidth: "310px",
        overflowX: "hidden",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "auto",
      },
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: "0px",
        "@media(min-width:600px)": {
          paddingLeft: "0px",
          paddingRight: "0px",
        },
      },
    },
    MuiSelect: {
      selectMenu: {
        // border: "1px solid #8a8b8b",
        width: "100%",
        borderRadius: "5px",
        fontSize: "13px",
        height: "14px",
        margin: "0",
        display: "block",
        padding: "10px 12px 7px",
        display: "flex",
        alignItems: "center",
        // border: "1px solid #e09b32 !important",
        // backgroundColor: "#3F3F3F !important",
      },
      select: {
        "&:focus": {
          borderRadius: "5px",
        },
      },
      icon: {
        color: "#000",
      },
    },
    MuiDivider: {
      root: {
        border: "none",
        height: "1px",
        margin: "0",
        flexShrink: "0",
        backgroundColor: "#222",
      },
    },
    MuiInput: {
      root: {
        height: "52px",
      },
      underline: {
        "&::before": {
          left: "0",
          right: "0",
          bottom: "0",
          content: '"\\00a0"',
          position: "absolute",
          transition:
            "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          borderBottom: "none",
          pointerEvents: "none",
          display: "none",
          "&:active": {
            borderBottom: "none",
          },
        },
        "&::after": {
          borderBottom: "0px",
        },
      },
    },
    // MuiTableCell: {
    //   root: {
    //     borderBottom: "0px",
    //   },
    // },
    // MuiTableBody: {
    //   root: {
    //     // background: "rgba(23, 12, 65, 0.4)",
    //   },
    // },
    MuiNativeSelect: {
      icon: {
        color: "#777575",
        right: "10px",
      },
      select: {
        paddingLeft: "18px",
        // backgroundColor: "#272727",
      },
    },
    MuiTable: {
      root: {
        borderCollapse: "separate",
        borderSpacing: "0px 4px",
      },
    },
    MuiTableCell: {
      body: {
        padding: "10px 15px",
      },

      head: {
        background: "#811dd2 !important",
        color: "#FFFFFF",
      },
    },
    MuiTableRow: {
      root: {
        borderBottom: "none",
        background: "#cbc0c01a",
        whiteSpace: "pre",
        "&:hover": {
          background: "#fff",
        },
      },
    },
    MuiPaginationItem: {
      MuiSelected: {
        backgroundColor: "rgb(184 23 23 / 57%) !important",
      },
    },
    MuiOutlinedInput:{
      inputMultiline:{
     padding:"0px !important"
      },
    },

    // MuiTableCell: {
    //   root: {
    //     borderBottom: "none",
    //     fontSize: "13px",
    //     fontWeight: "400 !important",
    //     fontFamily: "'Poppins', sans-serif",
    //     padding: "6px 12px",
    //     "@media (max-width: 768px)": {
    //       fontSize: "14px",
    //     },
    //   },
    //   head: {
    //     color: "#f5f5f5",
    //     background: "#15992e",
    //     fontSize: "14px",
    //     // fontWeight: "600 !important",
    //     // minWidth: "100px",
    //     padding: "15px 12px",
    //   },
    //   body: {
    //     color: "#222",
    //   },
    // },
    MuiFormControl: {
      marginDense: {
        marginTop: "6px",
      },
      root: {
        borderRadius: "5px",
        width: "100%",
        // height: "38px",
      },
    },
    MuiFormLabel: {
      root: {
        color: "#837F7F",
        fontSize: "18px",
        fontWeight: "600",

        fontFamily: "'Poppins', sans-serif",
        marginTop: "5px",
      },
      colorSecondary: {
        "&.Mui-focused": {
          color: "#222",
        },
      },
    },
    MuiListSubheader: {
      root: {
        color: "#000000",
        fontSize: "22px !important",
        fontWeight: "500 !important",
        lineHeight: "33px !important",
      },
    },
    MuiOutlinedInput: {
      inputAdornedStart: {
        paddingLeft: "12px",
      },
      colorSecondary: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          color: "#222",
          borderColor: "#222",
        },
        "&.Mui-focused": {
          color: "#222",
        },
      },
      inputMarginDense: {
        paddingTop: "18.5px",
        paddingBottom: "18.5px",
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "1E104D",
        // color: "#fff",
      },
      outlined: {
        padding: "20px",
        width: "100%",
      },
    },
    MuiList: {
      padding: {
        margin: "0px 5px",
      },
    },
    MuiAccordionSummary: {
      root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // borderBottom: "1px solid #555555",
        backgroundColor: "#272727",

        padding: "0px 10px 0px 10px",
      },
    },
    MuiIconButton: {
      root: {
        color: "#222",
        padding: "0px !important",
      },
    },
    MuiPopover: {
      root: {
        zIndex: 99999,
      },
      paper: {
        backgroundColor: "#811dd2 !important",
        color: "#fff",
      },
    },
    MuiListItem: {
      root: {
        alignItems: "self-start",
      },
      gutters: {
        paddingLeft: 0,
      },
    },
    MuiCheckbox: {
      root: {
        padding: "4px",
        fontSize: "12px",
      },
      colorSecondary: {
        "&.Mui-checked": { color: "#000" },
      },
    },
    MuiFormControlLabel: {
      root: {
        paddingBottom: "0",
      },
    },
    MuiListItemSecondaryAction: {
      root: {
        right: 0,
      },
    },
    MuiDialog: {
      paperScrollPaper: {
        Width: 450,
        maxWidth: "100%",
      },
      paper: {
        overflowY: "unset",
        background: "#f5f5f5",
        border: "1px solid MuiDialog",
        boxSizing: "border-box",
        // width: '450px',
      },
      paperWidthSm: {
        maxWidth: "500px !important",
      },
    },

    MuiDialogContent: {
      root: {
        overflowY: "none",
      },
    },
    MuiInputBase: {
      root: {
        color: "#fff !important",
      },
      "& :focus": {
        borderColor: "#fff",
      },
      input: {
        fontSize: 14,
        color: "#222",
        height: "1.1876em",
        padding: "13px !important",
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "green",
      },
    },
    MuiPickersToolbarText: {
      toolbarTxt: {
        color: "#8F8F8F",
        fontSize: "16px",
        fontWeight: "400",
        margin: "0 15px",
      },
      toolbarBtnSelected: {
        margin: "0px 5px",
        marginTop: "7px",
      },
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        color: "#170C41",
      },
      switchHeader: {
        backgroundColor: "green",
        color: "#fff",
        marginTop: "0px",
        marginBottom: "12px",
      },
      dayLabel: {
        color: "#000",
      },
    },
  

    MuiBackdrop: {
      root: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
    },
    MuiButton: {
      containedSecondary: {
        borderRadius: "10px",
        color: "#fff",
        fontSize: "13px",
        backgroundColor: "#811dd2 !important",
        padding: "5px 19px",
        "&:hover": {
          backgroundColor: "none",
        },
      },

      containedPrimary: {
        backgroundColor: "#811dd2",
        borderRadius: "5px",
        fontSize: "12px",
        border: "1px solid #811dd2",
        color: "#fff",
        padding: "8px 21px",
        // height: "32px",
        "&:hover": {
          border: "1px solid #811dd2",
          color: "#811dd2",
          backgroundColor: "#fff",
        },
        "&:active": {
          border: "1px solid #811dd2 !important",
          color: "#811dd2 !important",
          backgroundColor: "#fff",
        },
      },
      contained: {
        // borderRadius: "50px",
        color: "#f3006",
        fontWeight: 600,
        "&:hover": {
          border: "1px solid #fff",
          color: "#fff",
          backgroundColor: "#170C41",
        },
        "&.active": {
          border: "1px solid #15992e",
          color: "#15992e",
          backgroundColor: "#fff",
        },
      },
      outlined: {
        border: "1px solid #6FCFB9",
        padding: "5px 15px",
      },
      outlinedPrimary: {
        borderRadius: "5px",
        color: "#222",
        fontWeight: 400,
        padding: "7px 21px",
        border: "1px solid #6FCFB9",
        "&:hover": {
          // backgroundColor: "#713FFF",
          // border: "2px solid #E19C32",
          color: "#6FCFB9",
        },
      },
      outlinedSizeSmall: {
        padding: "6px 23px",
        fontSize: "16px",
        lineHeight: " 24px",
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: "0",
      },
    },

    MuiTypography: {
      subtitle1: {
        color: "#0000006b",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: " 16px",
        colorSecondary: {
          color: "#8d8989",
        },
      },
    },
    // MuiTable: {
    //   root: {
    //     borderCollapse: "none !important",
    //     "@media(max-width:1225px)": {
    //       width: "1225px",
    //     },
    //   },
    //   MuiOutlinedInput: {
    //     root: {
    //       height: "40px !important",
    //     },
    //     notchedOutline: {
    //       border: "none",
    //     },
    //   },
    // },
    // MuiTableContainer: {
    //   root: {
    //     overflowX: "auto",
    //   },
    // },
  },
};

const themesOptions = {
  typography: {
    fontWeight: 400,
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    type: "light",
    action: {
      primary: "#20509e",
    },
    background: {
      default: "#FBFBFD",
      dark: "#f3f7f9",
      paper: colors.common.white,
    },
    primary: {
      main: "#898989",
      dark: "#de0d0d",
      light: "#de0d0d",
    },
    secondary: {
      main: "#fff",
    },
    warning: {
      main: "#ffae33",
      dark: "#ffae33",
      light: "#fff1dc",
    },
    success: {
      main: "#54e18c",
      dark: "#54e18c",
      light: "#e2faec",
    },
    error: {
      main: "#ff7d68",
      dark: "#ff7d68",
      light: "#ffe9e6",
    },
    text: {
      primary: "#222",
      secondary: "#000",
    },
    common: {
      black: "#222222",
    },
  },
};

export const createTheme = (config = {}) => {
  let theme = createMuiTheme(_.merge({}, baseOptions, themesOptions));

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
