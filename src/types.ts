export interface newCocktail {
  name: string;
  glass: string;
  id: string | number;
  image: string;
  info: string;
}

export interface fetchingCoctail {
  strGlass: string;
  idDrink: string | number;
  strDrinkThumb: string;
  strAlcoholic: string;
  strDrink: string;
}

export interface singleCocktail {
  name: string;
  image: string;
  info: string;
  category: string;
  glass: string;
  instructions?: any;
  ingredients: string[];
}
