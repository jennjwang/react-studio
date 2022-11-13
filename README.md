# React Studio

## Describe the goal of the application and value to a user

The goal of the application is to provide a scrollable, interactive bakery menu. Its value to a user is allowing them the flexbility to add items to a shopping cart, display the items in the cart, and display the total price of the cart item to inform them of their purchase.

## Link to your deployed web application running online

https://jennjwang.github.io/react-studio/

## Explain the organization of your Components, and the props and state related to them

The primary component App contains a list of BakeryItem corresponding to each item in the bakery data.

I utilized two state variables to keep track of what’s in the shopping cart - one for the total cost, and the other for the individual items. The BakeryItem component takes in the name, description, and price of an item to render the view of that item. I then use the map function to render each item and callback functions to update the state.

## Note the usability principles considered for layout and hierarchy

I considered the color contrast and organization of the layout in the visual design of the app to ensure that the users are able to complete an action as efficiently as possible. I also strove to implement some form of consistency in the hierarchy and design of the app by reusing the same component to showcase the items. I also created hover effects for the add to cart button to make the app responsive such that users are able to absorb the feedback.
