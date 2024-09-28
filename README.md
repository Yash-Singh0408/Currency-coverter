# Currency Converter App

This is a simple React-based currency converter application that allows users to convert between different currencies. The app utilizes an external currency API and provides a dynamic, responsive user interface.

## Features

- **Currency Conversion**: Convert amounts from one currency to another using real-time exchange rates.
- **Swap Currencies**: Easily swap the "From" and "To" currencies with a single button click.
- **Dynamic Data**: Currency data is fetched dynamically from an external API.
- **Responsive Design**: The app is designed using Tailwind CSS for a clean, responsive user interface.

## How It Works

1. **Input Amount**: The user can input the amount in the "From" currency.
2. **Select Currencies**: The user can select the currencies for conversion. A dropdown is provided for both the "From" and "To" currencies, with options fetched from an API.
3. **Convert**: After selecting currencies and entering an amount, the user can convert the amount to the target currency.
4. **Swap**: The user can swap the "From" and "To" currencies by clicking the "Swap" button, and the converted amount is updated accordingly.

## Code Structure

### `useCurrencyInfo.js`

This custom hook fetches the current exchange rates and the list of available currencies from an external API.

- **State**: Manages exchange rates (`data`), the currency list (`currencyList`), and errors (`error`).
- **Fetching Data**: Uses `fetch` to retrieve the latest currency rates and list of currencies.
- **Usage**: This hook is used in the main component to provide the conversion rates and currency options for the dropdowns.

### `InputBox.jsx`

A reusable component that renders:

- **Amount Input Field**: For the user to input the amount they wish to convert.
- **Currency Dropdown**: For selecting the currency type. The list is dynamically populated based on the API data.
  
The component accepts props for:

- `label`: Describes the input field (e.g., "From" or "To").
- `amount`: The current amount in the input field.
- `onAmountChange`: Callback to handle changes in the input amount.
- `onCurrencyChange`: Callback to handle changes in the selected currency.
- `currencyOptions`: An array of currency options fetched from the API.
- `selectCurrency`: The currently selected currency for the dropdown.
- `amountDisable`: Optionally disables the amount input (used for the "To" currency).
- `currencyDisable`: Optionally disables the currency dropdown.

### `App.js`

The main component that brings everything together:

- **State**: Manages the input amount, selected currencies, and the converted amount.
- **Custom Hook**: Uses the `useCurrencyInfo` hook to fetch and use the currency data.
- **Conversion Logic**: Calculates the converted amount based on the exchange rate.
- **Swap Functionality**: Swaps the "From" and "To" currencies, updating the values accordingly.
  
The app includes two `InputBox` components for selecting and inputting the "From" and "To" currencies and amounts, along with buttons for conversion and swapping.

### `Available Currencies`

Currencies are dynamically fetched from the external API, and include:

USD - United States Dollar
EUR - Euro
INR - Indian Rupee
GBP - British Pound
JPY - Japanese Yen
...and many more.

### `Dependencies`

React: JavaScript library for building the user interface.
Tailwind CSS: Utility-first CSS framework for styling the application.
API: The app fetches real-time exchange rates from a third-party API.

API link :- https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json
