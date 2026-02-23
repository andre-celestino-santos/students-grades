export type Student = {
  id: number;
  name: string;
  grade: number;
  isApproved: boolean;
};

export function approved(student: Student): string {
  return student.isApproved ? "Yes" : "Not";
}
