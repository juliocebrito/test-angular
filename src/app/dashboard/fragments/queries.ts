import gql from 'graphql-tag';

export const queryCategories = gql`
query Categories {
  categories {
    id
    name
    typeCategory
    subcategories {
      id
      name
    }
    products {
      id
      name
    }
    services {
      id
      name
    }
  }
}
`;

export const queryEstaciones = gql`
query Estaciones {
  estaciones {
    id
    nombre
    ubicacion
    region
    departamento
    ciudad
    direccion
    latitud
    longitud
    estructura
    categoria
  }
}
`;
