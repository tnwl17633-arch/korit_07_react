// 사용자 로그인 자격 증명 타입
export type AccountCredentials = {
  username: string;
  password: string;
}

export type ShoppingItem = {
  id: number;
  product: string;
  amount: string;
  purchased: boolean;

}
export type ShoppingItemEntry = {
  product: string;
  amount: string;
  purchased: boolean;
}

