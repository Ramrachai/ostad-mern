## মডিউল ১৭ এর এসাইনমেন্ট

### Building E-Commerce Models with Mongoose 
You have been tasked with developing the backend for a full-fledged e-commerce website. Your first step is to create the necessary Mongoose models to represent the core entities of the application.



### Task 1: User Model  
 Create a Mongoose model named User to store user information. The User model should have the following fields:  

> firstName: String, required.
> lastName: String, required.
> email: String, required, unique.
> password: String, required.
> address: String, optional.
> phoneNumber: String, optional.

### Task 2: Product Model  
 Create a Mongoose model named Product to represent the products available for sale. The Product model should have the following fields:

> name: String, required.
> description: String.
> price: Number, required, positive value.
> stock: Number, required, non-negative integer.
> category: String, required.
> imageURL: String, optional (for storing image URLs).

### Task 3: Cart Item Model   
 Create a Mongoose model named CartItem to represent items in a user's shopping cart. The CartItem model should have the following fields:

> user: ObjectId, required (reference to a User).
> product: ObjectId, required (reference to a Product).
> quantity: Number, required, positive integer.


### Task 4: Order Model  
 Create a Mongoose model named Order to store order information. The Order model should have the following fields:

> user: ObjectId, required (reference to a User).
> items: Array of objects, each containing product (ObjectId, reference to a Product) and quantity (Number).
> totalAmount: Number, required, positive value.
> shippingAddress: String, required.
> status: String, required, default set to "Pending".