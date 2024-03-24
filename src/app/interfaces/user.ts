interface UserProfilePhoto {
  url: string;
  publicId: string | null;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePhoto?: UserProfilePhoto;
  bio?: string;
  role: 'user' | 'admin' | 'freelancer';
  isAccountVerified: boolean;
  skills?: string[];
  experiens?: string;
  ratingsAverage?: number;
  dateJoined?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

// export default User;
