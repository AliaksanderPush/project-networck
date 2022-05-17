import { IUser } from "../../user/User.props";

export interface IModalWindow {
    data:IUser | null,
    toggeShowModal:() => void;
}