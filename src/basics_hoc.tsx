import { FC } from "react";

function isLoggedIn() {
  return false;
}

export function BasicHOCWithAuthorization<Props = any>(Component: FC<any>) {
    return function (props: Props) {
      return isLoggedIn() ? <Component {...props} /> : <p>No Access</p>
    } 
}

export function TextComponent ({ text }: { text: string }) {
   return <p>{ text }</p>
}

export const AuthorizedTextComponent = BasicHOCWithAuthorization<{ text: string }>(TextComponent)
