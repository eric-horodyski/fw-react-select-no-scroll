import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import React, { useState } from "react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [toppings, setToppings] = useState<string[]>([]);

  return (
    <IonItem>
      <IonLabel>Toppings</IonLabel>
      <IonSelect
        value={toppings}
        cancelText="Nah"
        okText="Okay!"
        onIonChange={(e) => setToppings(e.detail.value)}
      >
        <IonSelectOption value="bacon">Bacon</IonSelectOption>
        <IonSelectOption value="olives">Black Olives</IonSelectOption>
        <IonSelectOption value="xcheese">Extra Cheese</IonSelectOption>
        <IonSelectOption value="peppers">Green Peppers</IonSelectOption>
        <IonSelectOption value="mushrooms">Mushrooms</IonSelectOption>
        <IonSelectOption value="onions">Onions</IonSelectOption>
        <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>
        <IonSelectOption value="pineapple">Pineapple</IonSelectOption>
        <IonSelectOption value="sausage">Sausage</IonSelectOption>
        <IonSelectOption value="Spinach">Spinach</IonSelectOption>
        <IonSelectOption value="bacon">Bacon</IonSelectOption>
        <IonSelectOption value="olives">Black Olives</IonSelectOption>
        <IonSelectOption value="xcheese">Extra Cheese</IonSelectOption>
        <IonSelectOption value="peppers">Green Peppers</IonSelectOption>
        <IonSelectOption value="mushrooms">Mushrooms</IonSelectOption>
        <IonSelectOption value="onions">Onions</IonSelectOption>
        <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>
        <IonSelectOption value="pineapple">Pineapple</IonSelectOption>
        <IonSelectOption value="sausage">Sausage</IonSelectOption>
        <IonSelectOption value="Spinach">Spinach</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};

export default ExploreContainer;
