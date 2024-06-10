import { ActionType } from "../action-types";
import { NftData } from "../../type";

interface ApproveNftAction {
  type: ActionType.APPROVE_NFT;
  payload: number;
}
interface ApproveTokenAction {
  type: ActionType.APPROVE_TOKEN;
  payload: number;
}
interface FetchNftAction {
  type: ActionType.FETCH_LISTED_NFTS | ActionType.FETCH_USERS_NFTS;
  payload: NftData[];
}
export type Action = ApproveNftAction | ApproveTokenAction | FetchNftAction;;