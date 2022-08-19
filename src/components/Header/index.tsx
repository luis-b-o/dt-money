import Logo from "@assets/main-logo.svg";
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from "@components/Header/styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <NewTransactionButton>New transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
