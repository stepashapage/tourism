"use client";
import React, { useEffect, useState } from "react";
import { Tour_item } from "./tour-item";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

type Props = {};

interface ToursItem {
  name: string;
  description: string;
  price: string;
  img: string;
  Date: string;
  id: string; // Измените тип id на string
}

export const Tours_container: React.FC<Props> = ({}) => {
  const [tours, setTours] = useState<ToursItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tours"));
        const toursArray: ToursItem[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data() as Omit<ToursItem, "id">; // Укажите, что данные не содержат поле id
          toursArray.push({ ...data, id: doc.id }); // Добавьте поле id
        });
        setTours(toursArray);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      }
    };

    fetchTours();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-[1350px] mx-auto flex flex-col gap-[215px]">
      {tours.map((item, i) => (
        <Tour_item
          key={item.id}
          id={item.id}
          imageURL={item.img}
          price={item.price}
          name={item.name}
          desc={item.description}
          date={item.Date}
        />
      ))}
    </div>
  );
};
