export interface dataType {
  hostelName: string;
  phoneNumber: string;
  address: string;
  allotment: number;
  amenities: string;
  vacancy: number;
  index: number;
  image: string;
  website: string;
  rating: number;
  reviews: number;
  cgpa: number,
}

export interface studentDataType {
  studentName: string;
  email: string;
  rollNumber: number;
  cgpa: number;
  gender: string;
  mobileNumber: string;
  guardianAddress: string;
  guardianContactNumber: string;
  branch: string;
  Year: number;
  hostelAlloted: boolean;
}