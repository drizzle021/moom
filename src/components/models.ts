export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface User {
  firstName:string,
  lastName: string,
  name: string;
  email: string,
  status: string;
  icon: string;
  state: string;
}

export interface Channel {
  name: string;
  icon: string;
  is_private: boolean;
}