export const addressFields = {
  US: {
    fields: [
      { key: "firstName", required: true, en: "First Name", local: "First Name" },
      { key: "lastName", required: true, en: "Last Name", local: "Last Name" },
      { key: "address1", required: true, en: "Address Line 1", local: "Address Line 1" },
      { key: "address2", required: false, en: "Address Line 2 (Optional)", local: "Address Line 2 (Optional)" },
      { key: "city", required: true, en: "City", local: "City" },
      { key: "state", required: true, en: "State", local: "State" },
      { key: "postalCode", required: true, en: "ZIP Code", local: "ZIP Code" },
      { key: "phone", required: false, en: "Phone Number", local: "Phone Number" }
    ]
  },
  MX: {
    fields: [
      { key: "firstName", required: true, en: "First Name", local: "Nombre" },
      { key: "lastName", required: true, en: "Last Name", local: "Apellido" },
      { key: "street", required: true, en: "Street", local: "Calle" },
      { key: "number", required: true, en: "Number", local: "Número exterior" },
      { key: "address2", required: false, en: "Apartment/Interior (Optional)", local: "Número interior (Opcional)" },
      { key: "neighborhood", required: true, en: "Neighborhood", local: "Colonia" },
      { key: "city", required: true, en: "City", local: "Ciudad" },
      { key: "state", required: true, en: "State", local: "Estado" },
      { key: "postalCode", required: true, en: "Postal Code", local: "Código Postal" },
      { key: "phone", required: false, en: "Phone Number", local: "Teléfono" }
    ]
  },
  CA: {
    fields: [
      { key: "firstName", required: true, en: "First Name", local: "First Name" },
      { key: "lastName", required: true, en: "Last Name", local: "Last Name" },
      { key: "address1", required: true, en: "Address Line 1", local: "Address Line 1" },
      { key: "address2", required: false, en: "Address Line 2 (Optional)", local: "Address Line 2 (Optional)" },
      { key: "city", required: true, en: "City", local: "City" },
      { key: "province", required: true, en: "Province", local: "Province" },
      { key: "postalCode", required: true, en: "Postal Code", local: "Postal Code" },
      { key: "phone", required: false, en: "Phone Number", local: "Phone Number" }
    ]
  },
  BR: {
    fields: [
      { key: "firstName", required: true, en: "First Name", local: "Nome" },
      { key: "lastName", required: true, en: "Last Name", local: "Sobrenome" },
      { key: "street", required: true, en: "Street", local: "Rua" },
      { key: "number", required: true, en: "Number", local: "Número" },
      { key: "complement", required: false, en: "Complement (Optional)", local: "Complemento (Opcional)" },
      { key: "neighborhood", required: true, en: "Neighborhood", local: "Bairro" },
      { key: "city", required: true, en: "City", local: "Cidade" },
      { key: "state", required: true, en: "State", local: "Estado" },
      { key: "postalCode", required: true, en: "Postal Code", local: "CEP" },
      { key: "phone", required: false, en: "Phone Number", local: "Telefone" }
    ]
  },
  GB: {
    fields: [
      { key: "firstName", required: true, en: "First Name", local: "First Name" },
      { key: "lastName", required: true, en: "Last Name", local: "Last Name" },
      { key: "address1", required: true, en: "Address Line 1", local: "Address Line 1" },
      { key: "address2", required: false, en: "Address Line 2 (Optional)", local: "Address Line 2 (Optional)" },
      { key: "city", required: true, en: "City", local: "City" },
      { key: "postalCode", required: true, en: "Postcode", local: "Postcode" },
      { key: "phone", required: false, en: "Phone Number", local: "Phone Number" }
    ]
  },
  FR: {
    fields: [
      { key: "firstName", required: true, en: "First Name", local: "Prénom" },
      { key: "lastName", required: true, en: "Last Name", local: "Nom" },
      { key: "address1", required: true, en: "Street and Number", local: "Rue et numéro" },
      { key: "address2", required: false, en: "Additional Info (Optional)", local: "Complément d'adresse (Optionnel)" },
      { key: "postalCode", required: true, en: "Postal Code", local: "Code Postal" },
      { key: "city", required: true, en: "City", local: "Ville" },
      { key: "phone", required: false, en: "Phone Number", local: "Téléphone" }
    ]
  },
  IT: {
    fields: [
      { key: "firstName", required: true, en: "First Name", local: "Nome" },
      { key: "lastName", required: true, en: "Last Name", local: "Cognome" },
      { key: "street", required: true, en: "Street", local: "Via" },
      { key: "number", required: true, en: "House Number", local: "Numero civico" },
      { key: "address2", required: false, en: "Additional Info (Optional)", local: "Informazioni aggiuntive (Opzionale)" },
      { key: "postalCode", required: true, en: "Postal Code", local: "CAP" },
      { key: "city", required: true, en: "City", local: "Città" },
      { key: "province", required: true, en: "Province", local: "Provincia" },
      { key: "phone", required: false, en: "Phone Number", local: "Telefono" }
    ]
  },
  DE: {
    fields: [
      { key: "firstName", required: true, en: "First Name", local: "Vorname" },
      { key: "lastName", required: true, en: "Last Name", local: "Nachname" },
      { key: "street", required: true, en: "Street", local: "Straße" },
      { key: "number", required: true, en: "House Number", local: "Hausnummer" },
      { key: "address2", required: false, en: "Additional Info (Optional)", local: "Zusatzinformationen (Optional)" },
      { key: "postalCode", required: true, en: "Postal Code", local: "PLZ" },
      { key: "city", required: true, en: "City", local: "Stadt" },
      { key: "phone", required: false, en: "Phone Number", local: "Telefon" }
    ]
  },
  ES: {
    fields: [
      { key: "firstName", required: true, en: "First Name", local: "Nombre" },
      { key: "lastName", required: true, en: "Last Name", local: "Apellidos" },
      { key: "address1", required: true, en: "Street and Number", local: "Dirección" },
      { key: "address2", required: false, en: "Additional Info (Optional)", local: "Información adicional (Opcional)" },
      { key: "postalCode", required: true, en: "Postal Code", local: "Código Postal" },
      { key: "city", required: true, en: "City", local: "Ciudad" },
      { key: "province", required: true, en: "Province", local: "Provincia" },
      { key: "phone", required: false, en: "Phone Number", local: "Teléfono" }
    ]
  },
  NL: {
    fields: [
      { key: "firstName", required: true, en: "First Name", local: "Voornaam" },
      { key: "lastName", required: true, en: "Last Name", local: "Achternaam" },
      { key: "street", required: true, en: "Street", local: "Straat" },
      { key: "number", required: true, en: "House Number", local: "Huisnummer" },
      { key: "address2", required: false, en: "Addition (Optional)", local: "Toevoeging (optioneel)" },
      { key: "postalCode", required: true, en: "Postal Code", local: "Postcode" },
      { key: "city", required: true, en: "City", local: "Plaats" },
      { key: "phone", required: false, en: "Phone Number", local: "Telefoon" }
    ]
  }
};
