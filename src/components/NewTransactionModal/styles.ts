import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)((props) => {
  return {
    position: "fixed",
    width: "100vw",
    heigth: "100vh",
    inset: 0,
    background: "rgba(0,0,0, 0.75)",
  };
});

export const Content = styled(Dialog.Content)((props) => {
  const { theme } = props;
  return {
    minWidth: "32rem",
    borderRadius: "6px",
    padding: "2.5rem 3rem",
    background: theme["gray-800"],

    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    form: {
      marginTop: "2rem",

      display: "flex",
      flexDirection: "column",
      gap: "1rem",

      input: {
        borderRadius: "6px",
        border: 0,
        background: theme["gray-900"],
        color: theme["gray-300"],
        padding: "1rem",

        "&::placeholder": {
          color: theme["gray-500"],
        },
      },

      'button[type="submit"]': {
        height: "58px",
        border: 0,
        background: theme["green-500"],
        color: theme.white,
        fontWeight: "bold",
        padding: "0 1.25rem",
        borderRadius: "6px",
        marginTop: "1.5rem",

        "&:hover": {
          background: theme["green-700"],
          transition: "background-color 0.2s",
        },
      },
    },
  };
});

export const CloseButton = styled(Dialog.Close)((props) => {
  const { theme } = props;
  return {
    position: "absolute",
    background: "transparent",
    border: 0,
    top: "1.5rem",
    right: "1.5rem",
    lineHeight: 0,
    color: theme["gray-500"],
  };
});

export const TransactionType = styled(RadioGroup.Root)((props) => {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
    marginTop: "0.5rem",
  };
});

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>((props) => {
  const { theme, variant } = props;
  const svgColor = variant === "income" ? theme["green-300"] : theme["red-300"];
  const dataStateRadio =
    variant === "income" ? theme["green-500"] : theme["red-500"];

  return {
    background: theme["gray-700"],
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "6px",
    border: 0,
    color: theme["gray-300"],

    svg: {
      color: svgColor,
    },

    "&[data-state='unchecked']:hover": {
      transition: "background-color 0.2s",
      background: theme["gray-600"],
    },

    "&[data-state='checked']": {
      color: theme.white,
      background: dataStateRadio,
      svg: {
        color: theme.white,
      },
    },
  };
});
