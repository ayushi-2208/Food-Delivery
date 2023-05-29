<h1>Food Delivery</h1>
<hr><p>It is a fast food responsive website which contains a different menu categories and show data accordingly. In this application redux also used for provide any state or method for its cart-Item component to share data. We can also add and remove items in cart and show item count in cart symbol in header.
</p><h2>General Information</h2>
<hr><ul>
<li>The fast food responsive website is designed to provide users with a convenient way to browse through various menu categories and view data accordingly. The website utilizes Redux, a popular state management library, to facilitate the sharing of data and methods among components, particularly the cart-item component. </li>
</ul><ul>
<li>The website features different menu categories, such as appetizers, burger, drinks, and pizzas, among others. Each category contains a list of food items along with their corresponding details, such as name, description, price, and an option to add them to the cart.</li>
</ul>
<ul>
<li>When a user adds an item to the cart, Redux comes into play. Redux stores the state of the cart, including the selected food items, quantities, and total price. This centralized state management allows multiple components to access and modify the cart's data without directly passing it between components. The cart-item component, for instance, can retrieve the current cart state from Redux and display the items in the cart along with their quantities.</li>
</ul><ul>
<li>users have the ability to remove items from the cart. When an item is removed, the Redux store is updated accordingly, reflecting the changes in the cart's state. This ensures that the cart-item component and other components relying on cart data are automatically updated.</li>
</ul>
<ul>
<li>By utilizing Redux for state management and data sharing, the fast food responsive website provides a seamless and efficient way for users to navigate the menu, add and remove items from their cart, and view the cart's contents. The use of Redux ensures that the cart's state remains consistent across different components, enabling a smooth and synchronized user experience.</li>
</ul>
<h2>Technologies Used</h2>
<hr><ul>
<li>HTML</li>
</ul><ul>
<li>CSS</li>
</ul><ul>
<li>JavaScript</li>
</ul><ul>
<li>React JS</li>
</ul><ul>
<li>JSON</li>
</ul>
<ul>
<li>Redux</li>
</ul>

<h2>Screenshots of Web Application</h2>
<div align ="center" style="display:block;"><img src="https://github.com/ayushi-2208/Food-Delivery/assets/69577773/4addc292-d707-4b2e-a89c-2a0d6a68104f" alt="" align="center"  style="height: 420px; width: 420px; "><img src="https://github.com/ayushi-2208/Food-Delivery/assets/69577773/3925fbb2-2c79-4610-bd17-df77eba5502e" alt="" style="height: 520px; width: 220px; margin-bottom: 30px "><img src="https://github.com/ayushi-2208/Food-Delivery/assets/69577773/2f7133e4-6e8b-407d-8b5d-fca2e1960a77" alt="" align="center"  style="height: 520px; width: 220px; margin-bottom: 30px "> <img src="https://github.com/ayushi-2208/Food-Delivery/assets/69577773/be0d39a8-2f17-4596-8f84-71545597c292" alt="" align="center"  style="height: 520px; width: 220px; margin-bottom: 30px "> 
<h2>Usage Instructions</h2>

You can go through the project by Navigating to `/src/Components/`. <br/>
<ul>
<li>
There you can see in components:-<br/>
- BannerName<br/>
- CartItem<br/>
- DebitCard<br/>
- Header<br/>
- ItemCard<br/>
- MenuCard<br/>
- MenuContainer<br/>
- SubmenuContainer<br/>
</li></ul>
<ul>
<li>
 we have reducer file also <br/>
- reducer.js (which contains the state management data)<br/>
and also we have set the state using stateprovider.js file. <br/>
and also one tab folder which is used for the tab change in landing page
they all have their own js and scss file.
</li></ul>
<ul>
<li>
We have one data.js file which contains JSON data with different categories.

<h2>Deployment</h2>
<a href="https://ayushi-2208.github.io/Food-Delivery/">👉Project Link</a>