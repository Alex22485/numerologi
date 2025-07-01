import { atom } from "jotai";

// export default function profileAtom() {
//   atom({
//     profile: {
//       id: 1,
//       name: "Alex",
//     },
//     isLoading: false,
//     error: null,
//   });
// }
export const profileAtom = atom({
  profile: {
    id: 1,
    name: "Alex",
  },
  isLoading: false,
  error: null,
});

// export const state = function UserState() {
//   return {
//     profile: User || null,
//     isLoading: false,
//     error: "",
//   };
// };
