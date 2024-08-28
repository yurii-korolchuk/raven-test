import { collection, CollectionReference } from "firebase/firestore";
import { db } from "./firebase-config";
import { Product } from "../types";

export const productsCollectionsRef = collection(
  db,
  "products",
) as CollectionReference<Product>;
