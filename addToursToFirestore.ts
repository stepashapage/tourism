// addToursToFirestore.ts
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

interface ToursItem {
  name: string;
  description: string;
  price: string;
  img: string;
  Date: string;
  id: number;
}

const toursItems: ToursItem[] = [
  {
    name: "сахалин",
    description:
      "Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение соответствующий условий активизации.",
    price: "40 000",
    img: "/tour1.svg",
    Date: "11/10 - 17/10",
    id: 0,
  },
  {
    name: "сахалин",
    description:
      "Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение соответствующий условий активизации.",
    price: "82 900",
    img: "/tour2.svg",
    Date: "11/10 - 17/10",
    id: 1,
  },
  {
    name: "камчатка",
    description:
      "Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение соответствующий условий активизации.",
    price: "29 600",
    img: "/tour3.svg",
    Date: "23/09 - 28/09",
    id: 2,
  },
  {
    name: "сахалин",
    description:
      "Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение соответствующий условий активизации.",
    price: "24 500",
    img: "/tour1.svg",
    Date: "11/10 - 17/10",
    id: 3,
  },
];

const addToursToFirestore = async () => {
  const toursCollection = collection(db, "tours");
  for (const tour of toursItems) {
    await addDoc(toursCollection, tour);
  }
  console.log("Tours added to Firestore");
};

addToursToFirestore().catch(console.error);
