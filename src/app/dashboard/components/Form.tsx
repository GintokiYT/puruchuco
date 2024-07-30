"use client";

import { useState, ChangeEvent } from "react";

// Definir tipos para los datos de cada día
interface DayData {
  id: number;
  day: string;
  title: string;
  description: string;
  image: string;
}

interface WeekData {
  lunes: DayData;
  martes: DayData;
  miercoles: DayData;
  jueves: DayData;
  viernes: DayData;
  sabado: DayData;
  domingo: DayData;
}

export default function Form() {
  const [data, setData] = useState<WeekData>({
    lunes: { id: 1, day: "", title: "", description: "", image: "" },
    martes: { id: 2, day: "", title: "", description: "", image: "" },
    miercoles: { id: 3, day: "", title: "", description: "", image: "" },
    jueves: { id: 4, day: "", title: "", description: "", image: "" },
    viernes: { id: 5, day: "", title: "", description: "", image: "" },
    sabado: { id: 6, day: "", title: "", description: "", image: "" },
    domingo: { id: 7, day: "", title: "", description: "", image: "" },
  });

  const handleSubmit = async (day: keyof WeekData) => {
    const formData = data[day];

    await fetch("http://localhost:3000/api/calendar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(() => {
      alert('Actualizado con exito!')
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    day: keyof WeekData
  ) => {
    const { name, value, files } = event.target;
    if (name === "image" && files) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prevState) => ({
          ...prevState,
          [day]: {
            ...prevState[day],
            image: reader.result as string,
          },
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setData((prevState) => ({
        ...prevState,
        [day]: {
          ...prevState[day],
          [name]: value,
        },
      }));
    }
  };

  const renderForm = (day: keyof WeekData, dayLabel: string) => (
    <div className="flex flex-col gap-4" key={day}>
      <p className="text-center font-bold text-2xl">{dayLabel}</p>
      <input
        type="date"
        name="day"
        value={data[day].day}
        onChange={(e) => handleChange(e, day)}
      />
      <input
        type="text"
        name="title"
        placeholder="Ingresa el titulo"
        value={data[day].title}
        onChange={(e) => handleChange(e, day)}
      />
      <input
        type="text"
        name="description"
        placeholder="Ingresa una descripción"
        value={data[day].description}
        onChange={(e) => handleChange(e, day)}
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={(e) => handleChange(e, day)}
      />
      <button
        className="bg-p-color-3 text-white py-3"
        type="button"
        onClick={() => handleSubmit(day)}
      >
        Actualizar
      </button>
    </div>
  );

  return (
    <div className="flex flex-col w-full max-w-xl m-auto gap-4">
      {renderForm("lunes", "Lunes")}
      {renderForm("martes", "Martes")}
      {renderForm("miercoles", "Miércoles")}
      {renderForm("jueves", "Jueves")}
      {renderForm("viernes", "Viernes")}
      {renderForm("sabado", "Sábado")}
      {renderForm("domingo", "Domingo")}
    </div>
  );
}
