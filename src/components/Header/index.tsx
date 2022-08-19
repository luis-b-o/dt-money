import Logo from "@assets/main-logo.svg";
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from "@components/Header/styles";
import { NewTransactionModal } from "@components/NewTransactionModal";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
