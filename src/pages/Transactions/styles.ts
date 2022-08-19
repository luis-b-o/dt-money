import styled from "styled-components";

export const TransactionsContainer = styled.main(() => {
  return {
    width: "100%",
    maxWidth: "1120px",
    margin: "4rem auto 0",
    padding: "0 1.5rem",
  };
});

export const TransactionsTable = styled.table((props) => {
  const { theme } = props;

  return {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 0.5rem",
    // marginTop: "1.5rem",

    td: {
      padding: "1.25rem 2rem",
      background: theme["gray-700"],

      "&:first-child": {
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px",
      },

      "&:last-child": {
        borderTopRigthRadius: "6px",
        borderBottomRigthRadius: "6px",
      },
    },
  };
});

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>((props) => {
  const { theme, variant } = props;

  const variantBgColor =
    variant === "income" ? theme["green-300"] : theme["red-300"];

  return {
    color: variantBgColor,
  };
});
