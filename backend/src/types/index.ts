export type Role = {
  name: string;
  description: string;
  isdelete: boolean;
};

export type User = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phone: number;
  password: string;
  role_id: number;
};
