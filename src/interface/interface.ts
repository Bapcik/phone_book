export interface IContact {
  id: string;
  name: string;
  phone: number;
  email: string;
  photo: string;
}

export interface ContactState {
  list: IContact[];

}
