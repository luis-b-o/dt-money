import styled from "styled-components";

export const SummaryContainer = styled.section(() => {
  return {
    width: "100%",
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 1.5rem",

    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",

    marginTop: "-5rem",
  };
});

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>((props) => {
  const { theme, variant } = props;
  const variantBgColor =
    variant === "green" ? theme["green-700"] : theme["gray-600"];

  return {
    background: variantBgColor,
    borderRadius: "6px",
    padding: "2rem",

    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: theme["gray-300"],
    },

    strong: {
      display: "block",
      marginTop: "1rem",
      fontSize: "2rem",
    },
  };
});
