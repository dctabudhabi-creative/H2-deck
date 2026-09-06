/* @ds-bundle: {"format":4,"namespace":"DCTDesignSystem_8882b5","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d5f2799be8a8","components/core/Button.jsx":"44cc30e8f2e5","components/core/Callout.jsx":"9c0a6b2af328","components/core/Card.jsx":"d95e76f036d4","components/core/SectionLabel.jsx":"8fe477fcf1c6","components/core/Stat.jsx":"9c84d1faa485","components/forms/Input.jsx":"c1943258b680"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DCTDesignSystem_8882b5 = window.DCTDesignSystem_8882b5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DCT Badge / Tag — small status or category label.
 * `tone` maps to brand colours; uses soft fills for legibility.
 */
function Badge({
  children,
  tone = "neutral",
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--dct-sandstone)",
      color: "var(--dct-black)"
    },
    dawn: {
      background: "var(--dct-dawn-wash)",
      color: "var(--dct-dawn-press)"
    },
    stargaze: {
      background: "rgba(72,50,184,0.12)",
      color: "var(--dct-stargaze)"
    },
    flamingo: {
      background: "rgba(205,49,81,0.12)",
      color: "var(--dct-flamingo)"
    },
    palm: {
      background: "rgba(28,150,103,0.14)",
      color: "var(--dct-palm)"
    },
    solid: {
      background: "var(--dct-black)",
      color: "var(--dct-white)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      padding: "5px 10px",
      borderRadius: "var(--radius-sm)",
      lineHeight: 1,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DCT Button — Helvetica Bold label, near-square corners, calm ease-out states.
 * Variants follow brand rules: Dawn for primary emphasis, Black for solid neutral,
 * outline/ghost for secondary actions.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 14
    },
    md: {
      padding: "12px 22px",
      fontSize: 16
    },
    lg: {
      padding: "15px 30px",
      fontSize: 18
    }
  };
  const palettes = {
    primary: {
      background: "var(--dct-dawn)",
      color: "#1A1A1A",
      border: "1px solid var(--dct-dawn)"
    },
    solid: {
      background: "var(--dct-black)",
      color: "var(--dct-white)",
      border: "1px solid var(--dct-black)"
    },
    outline: {
      background: "transparent",
      color: "var(--dct-black)",
      border: "1px solid var(--dct-black)"
    },
    ghost: {
      background: "transparent",
      color: "var(--dct-black)",
      border: "1px solid transparent"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 1,
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background var(--duration-base) var(--ease-standard), opacity var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
    ...sizes[size],
    ...palettes[variant],
    ...style
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === "primary" ? {
    background: "var(--dct-dawn-press)",
    borderColor: "var(--dct-dawn-press)"
  } : variant === "solid" ? {
    background: "#000"
  } : {
    background: "rgba(26,26,26,0.06)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...hoverStyle,
      transform: press ? "translateY(1px)" : "none"
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DCT Callout — the signature brand device: a narrow Dawn accent stripe beside a
 * Sandstone content cell. Use to highlight a key statement, proposition or quote.
 */
function Callout({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "stretch",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      flex: "none",
      background: "var(--dct-dawn)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--dct-sandstone)",
      color: "var(--dct-black)",
      padding: "18px 22px",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.4,
      flex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DCT Card — neutral container on white with subtle shadow & near-square corners.
 * `surface` switches between white, sandstone, and dark (Black) treatments.
 */
function Card({
  children,
  surface = "white",
  padding = 24,
  style,
  ...rest
}) {
  const surfaces = {
    white: {
      background: "#FFFFFF",
      color: "var(--dct-black)",
      border: "1px solid var(--border-subtle)"
    },
    sandstone: {
      background: "var(--dct-sandstone)",
      color: "var(--dct-black)",
      border: "1px solid var(--dct-sandstone-line)"
    },
    dark: {
      background: "var(--dct-black)",
      color: "var(--dct-white)",
      border: "1px solid #2c2c2c"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      boxShadow: surface === "dark" ? "none" : "var(--shadow-md)",
      padding,
      fontFamily: "var(--font-sans)",
      ...surfaces[surface],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DCT SectionLabel — uppercase eyebrow with a short Dawn rule. A recurring brand
 * device for introducing sections, slides and document blocks.
 */
function SectionLabel({
  children,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 4,
      background: "var(--dct-dawn)",
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: onDark ? "var(--dct-white)" : "var(--dct-black)"
    }
  }, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DCT Stat — a large KPI number with label. Dawn number on light surfaces,
 * or set `onDark` for dashboard/dark contexts. Number uses Bold; label uses Light.
 */
function Stat({
  value,
  label,
  accent = "dawn",
  onDark = false,
  style,
  ...rest
}) {
  const accents = {
    dawn: "var(--dct-dawn)",
    black: onDark ? "var(--dct-white)" : "var(--dct-black)",
    stargaze: "var(--dct-stargaze)",
    flamingo: "var(--dct-flamingo)",
    palm: "var(--dct-palm)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 52,
      lineHeight: 1,
      letterSpacing: 0,
      color: accents[accent]
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.35,
      color: onDark ? "var(--dct-dash-text-muted)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DCT Input — text field with Sandstone-line border, Stargaze focus ring.
 * Pair with a label for forms.
 */
function Input({
  label,
  hint,
  invalid = false,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--dct-black)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 300,
      fontSize: 16,
      color: "var(--dct-black)",
      background: "#fff",
      padding: "11px 14px",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${invalid ? "var(--dct-flamingo)" : focus ? "var(--dct-stargaze)" : "var(--border-subtle)"}`,
      outline: "none",
      boxShadow: focus ? "0 0 0 3px rgba(72,50,184,0.15)" : "none",
      transition: "border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: invalid ? "var(--dct-flamingo)" : "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Input = __ds_scope.Input;

})();
